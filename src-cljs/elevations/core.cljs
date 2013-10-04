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

(defn mapc [f ch]
  (let [out (chan)]
    (go (loop []
          (put! out (f (<! ch)))
          (recur)))
    out))

(defn extents [coll]
  [(apply min coll)
   (apply max coll)])

(defn extrema [f coll]
  [(apply min-key f coll)
   (apply max-key f coll)])

(defn lon-lat [{:keys [lon lat]}]
  [lon lat])

(defn line-string [points]
  {:type "LineString"
   :coordinates (map lon-lat points)})

(defn feature-collection [lines]
  {:type "FeatureCollection"
   :features (for [points lines
                   :let [ex (extrema :elevation points)]]
               {:type "Feature"
                :properties {:elevation-extrema ex}
                :geometry (line-string points)})})

(defpartial list-paths [paths]
  [:ul.list-unstyled
   [:li.all-paths "All paths"]
   (for [[[point :as path] index] (map vector paths (iterate inc 0))]
     [:li.path {:data-index index}
      [:div (.toDateString (:time point))]
      [:div.text-muted (str " (" (count path) " points)")]])])

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

(defn during [[start end] coll]
  (filter #(and (< start (:time %))
                (> end (:time %)))
          coll))

(defn zoom-to [map-pane feature]
  (->> feature
    clj->js
    L/geoJson
    .getBounds
    (.fitBounds map-pane)))

(defn map-path
  ([map-pane feature]
   (map-path map-pane feature (chan)))
  ([map-pane feature selected-points]
   (let [elevation-extrema (map (comp :elevation-extrema :properties) (:features feature))
         lowest (lon-lat (apply min (map first elevation-extrema)))
         highest (lon-lat (apply max (map second elevation-extrema)))
         [lon lat] (-> d3 :geo (.centroid feature))
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
                                   {:attr {:width (+ 10 (- x2 x1))
                                           :height (+ 10 (- y1 y2))}
                                    :style {:margin-left (str (- x1 5) "px")
                                            :margin-top (str (- y2 5) "px")}})
                   (d3c/configure! (.select d3 "#map-pane")
                                   {:attr {:transform (d3c/translate (+ 5 (- x1)) (+ 5 (- y2)))}})
                   (d3c/configure! (.selectAll d3 "#map .extrema")
                                   {:attr {:cx #(first (proj %))
                                           :cy #(second (proj %))}})
                   (.attr (.select d3 "#map .path") "d" path)
                   (.attr (.select d3 "#map .selected-path") "d" path)))]
     (doto (.select d3 "#map-pane")
       (d3c/bind! ".selected-path" [(line-string [])]
                  [:path {:attr {:class "selected-path"
                                 :d path}}])
       (d3c/append! [:path {:datum feature
                            :attr {:class "path"
                                   :d path}}])
       (d3c/bind! ".extrema" [lowest highest]
                  [:circle {:attr {:class "extrema"
                                   :r 5
                                   :cx #(first (proj %))
                                   :cy #(second (proj %))
                                   :fill "firebrick"}}]))
     (.on map-pane "viewreset" reset)
     (reset)
     (mapc #(-> d3
              (.selectAll ".selected-path")
              (.data [(line-string %)])
              (.attr "d" path))
           selected-points))))

(defn show-elevation-extrema [points]
  (let [[{min-elevation :elevation} {max-elevation :elevation}] (extrema :elevation points)]
    (.text (js/jQuery "#min-elevation span") (int min-elevation))
    (.text (js/jQuery "#max-elevation span") (int max-elevation))))

(defn plot-elevations [points]
  (let [brush-window (chan)
        height 90
        x (-> d3 :time .scale
            (.domain (extents (map :time points)))
            (.range [5 775]))
        y (-> d3 :scale .linear
            (.domain (extents (map :elevation points)))
            (.range [height 5]))
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
      (d3c/bind! ".extrema" (extrema :elevation points)
                 [:circle {:attr {:r 5
                                  :cx #(x (:time %))
                                  :cy #(y (:elevation %))
                                  :fill "firebrick"}}])
      (->
        (d3c/insert-before! ".line" [:g {:attr {:class "brush"}}])
        (.call brush)
        (.selectAll "rect")
        (d3c/configure! {:attr {:height height}})))
    brush-window))

(defn new-map []
  (let [map-pane (.map js/L "map")]
    (-> js/L
      (.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
      (.addTo map-pane))
    (.setView map-pane (array 37.8 -96.9) 4)
    (-> d3
      (.select (-> map-pane .getPanes :overlayPane))
      (d3c/append! [:svg {:attr {:id "leaflet-svg"}}
                    [:g {:attr {:id "map-pane"
                                :class "leaflet-zoom-hide"}}]]))
    map-pane))

(defn reset []
  (.removeClass (js/jQuery "#paths li") "selected")
  (-> d3 (.selectAll "#elevations *") .remove)
  (-> d3 (.selectAll "#map-pane *") .remove))

(go
  (let [file (<! (file-drops js/document))]
    (.addClass (js/jQuery "#instructions") "hidden")
    (.removeClass (js/jQuery "#loading") "hidden")
    (.removeClass (js/jQuery "#interface") "hidden")
    (<! (timeout 5)) ; Give jQuery events time to fire before loading GPX file
    (let [paths (-> file js/jQuery gpx->paths)
          map-layer (new-map)]
      (.append (js/jQuery "#paths") (list-paths paths))
      (.addClass (js/jQuery "#loading") "hidden")
      (mapc (fn [selected]
              (reset)
              (.addClass selected "selected"))
            (clicks "#paths li"))
      (mapc (fn [selected]
              (let [feature (feature-collection paths)]
                (zoom-to map-layer feature)
                (show-elevation-extrema (reduce concat paths))
                (map-path map-layer feature)))
            (clicks "#paths li.all-paths"))
      (mapc (fn [selected]
              (let [index (-> selected (.data "index") js/parseInt)
                    points (get paths index)
                    feature (feature-collection [points])
                    elevation-brush (plot-elevations points)]
                (zoom-to map-layer feature)
                (show-elevation-extrema points)
                (map-path map-layer
                          feature
                          (mapc #(during % points) elevation-brush))))
            (clicks "#paths li.path")))))
