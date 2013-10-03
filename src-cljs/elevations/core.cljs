(ns elevations.core
  (:use [cljs.core.async :only [chan put! <! timeout]])
  (:use-macros [crate.def-macros :only [defpartial]])
  (:require [crate.core :as crate]
            [strokes :refer [d3]]
            [d3c.core :as d3c])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(.addEventListener
  js/document
  "dragover"
  (fn [evt]
    (.stopPropagation evt)
    (.preventDefault evt)
    (aset (:dataTransfer evt) "dropEffect" "copy"))
  false)

(defn file-drops [el]
  (let [out (chan)]
    (.addEventListener el
                       "drop"
                       (fn [evt]
                         (.stopPropagation evt)
                         (.preventDefault evt)
                         (let [file (get (-> evt :dataTransfer :files) 0)
                               reader (js/FileReader.)]
                           (aset reader "onload" #(put! out (-> % :target :result)))
                           (.readAsText reader file)))
                       false)
    out))

(defn clicks [selector]
  (let [out (chan)]
    (.bind (js/jQuery selector) "click"
           (fn [evt]
             (this-as this (put! out (js/jQuery this)))))
    out))

(defn line-string [points]
  {:type "LineString"
   :coordinates (for [{:keys [lon lat]} points]
                  [lon lat])})

(defn mapc [f ch]
  (let [out (chan)]
    (go (loop []
          (put! out (f (<! ch)))
          (recur)))
    out))

(defn extents [coll]
  [(apply min coll)
   (apply max coll)])

(defpartial list-paths [paths]
  [:ul
   (for [[[point :as path] index] (map vector paths (iterate inc 0))]
     [:li {:data-index index}
      [:span (.toDateString (:time point))]
      [:span.muted (str " (" (count path) " points)")]])])

(defn gpx->paths [gpx]
  (let [segs (.find gpx "trkseg")]
    (for [i (range (:length segs))
          :let [seg (js/jQuery (.get segs i))
                pts (.find seg "trkpt")]]
      (for [j (range (:length pts))
            :let [pt (js/jQuery (.get pts j))]]
        {:lat (js/parseFloat (.attr pt "lat"))
         :lon (js/parseFloat (.attr pt "lon"))
         :elevation (-> pt (.find "ele") .text js/parseFloat)
         :time (js/Date. (-> pt (.find "time") .text))}))))

(defn zoom-to [map-pane feature]
  (->> feature
    clj->js
    L/geoJson
    .getBounds
    (.fitBounds map-pane)))

(defn map-path [map-pane feature selected-points]
  (let [[lon lat] (-> d3 :geo (.centroid feature))
        proj (fn [[lat lon]]
               (let [point (L/LatLng. lon lat)
                     {:keys [x y]} (.latLngToLayerPoint map-pane point)]
                 [x y]))
        path (-> d3 :geo .path (.projection proj))
        [bottom-left-bound top-right-bound] (-> d3 :geo (.bounds feature))
        reset (fn []
                (let [[x1 y1] (proj bottom-left-bound)
                      [x2 y2] (proj top-right-bound)]
                  (d3c/configure! (.select d3 "#leaflet-svg")
                                  {:attr {:width (- x2 x1)
                                          :height (- y1 y2)}
                                   :style {:margin-left (str x1 "px")
                                           :margin-top (str y2 "px")}})
                  (d3c/configure! (.select d3 "#leaflet-zoom-hide")
                                  {:attr {:transform (d3c/translate (- x1) (- y2))}})
                  (.attr (.select d3 ".path") "d" path)
                  (.attr (.select d3 ".selected-path") "d" path)))]
    (doto (.select d3 "#leaflet-zoom-hide")
      (d3c/bind! ".selected-path" [(line-string [])]
                 [:path {:attr {:class "selected-path"
                                :d path}}])
      (d3c/append! [:path {:datum feature
                           :attr {:class "path"
                                  :d path}}]))
    (.on map-pane "viewreset" reset)
    (reset)
    (mapc #(-> d3
             (.selectAll ".selected-path")
             (.data [(line-string %)])
             (.attr "d" path))
          selected-points)))

(defn plot-elevations [points]
  (let [brush-window (chan)
        height 100
        x (-> d3 :time .scale
            (.domain (extents (map :time points)))
            (.range [0 780]))
        y (-> d3 :scale .linear
            (.domain (extents (map :elevation points)))
            (.range [height 0]))
        line (-> d3 :svg .line
               (.x #(x (:time %)))
               (.y #(y (:elevation %))))
        brush (-> d3 :svg .brush
                (.x x)
                (.on "brush" #(put! brush-window (-> d3 :event :target .extent))))]
    (doto (.select d3 "#elevations")
      (d3c/append! [:path {:datum points
                           :attr {:class "line"
                                  :d line}}])
      (->
        (d3c/insert-before! ".line" [:g {:attr {:class "brush"}}])
        (.call brush)
        (.selectAll "rect")
        (d3c/configure! {:attr {:height height}})))
    brush-window))

(go
  (let [file (<! (file-drops js/document))]
    (.hide (js/jQuery "#instructions"))
    (.show (js/jQuery "#loading"))
    (.show (js/jQuery "#interface"))
    (<! (timeout 5)) ; Give jQuery events time to fire before loading GPX file
    (let [paths (-> file js/jQuery gpx->paths)
          map-layer (let [map-pane (.map js/L "map")]
                      (-> js/L
                        (.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
                        (.addTo map-pane))
                      (.setView map-pane (array 37.8 -96.9) 4)
                      (-> d3
                        (.select (-> map-pane .getPanes :overlayPane))
                        (d3c/append! [:svg {:attr {:id "leaflet-svg"}}
                                      [:g {:attr {:id "leaflet-zoom-hide"}}]]))
                      map-pane)]
      (.append (js/jQuery "#paths") (list-paths paths))
      (.hide (js/jQuery "#loading"))
      (mapc (fn [selected]
              (.removeClass (js/jQuery "#paths li") "selected")
              (.addClass selected "selected")
              (-> d3 (.selectAll "#elevations *") .remove)
              (-> d3 (.selectAll "#leaflet-zoom-hide path") .remove)
              (let [points (get paths (-> selected
                                        (.data "index")
                                        js/parseInt))
                    feature (line-string points)]
                (zoom-to map-layer feature)
                (map-path map-layer
                          feature
                          (mapc (fn [[start end]]
                                  (filter #(and (< start (:time %))
                                                (> end (:time %)))
                                          points))
                                (plot-elevations points)))))
            (clicks "#paths li")))))
