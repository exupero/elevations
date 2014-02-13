(ns elevations.core
  (:use [cljs.core.async :only [chan put! <! timeout map<]])
  (:require [strokes :refer [d3]]
            [d3c.core :as d3c])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn spy [x]
  (.log js/console (pr-str x))
  x)

(.addEventListener js/document "dragover"
  (fn [evt]
    (.stopPropagation evt)
    (.preventDefault evt)
    (aset (:dataTransfer evt) "dropEffect" "copy"))
  false)

(defn file-drops [el]
  (let [out (chan)]
    (.addEventListener el "drop"
      (fn [evt]
        (.stopPropagation evt)
        (.preventDefault evt)
        (let [file (get (-> evt :dataTransfer :files) 0)
              reader (js/FileReader.)]
          (aset reader "onload" #(put! out (-> % :target :result)))
          (.readAsText reader file)))
      false)
    out))

(defn events
  ([selector event]
   (events selector event identity))
  ([selector event f]
   (let [out (chan)]
     (-> (.selectAll d3 selector)
       (.on (name event)
            (fn [& args]
              (this-as el
                (if-let [v (f el args)]
                  (put! out v))))))
     out)))

(defn clicks [selector]
  (let [out (chan)]
    (.bind (js/jQuery selector) "click"
           (fn [evt]
             (this-as this (put! out (js/jQuery this)))))
    out))

(defn drain< [ch]
  (go-loop [x (<! ch)]
    (when x
      (recur (<! ch)))))

(defn dup [ch]
  (let [o1 (chan)
        o2 (chan)]
    (go (loop []
          (let [v (<! ch)]
            (put! o1 v)
            (put! o2 v))
          (recur)))
    [o1 o2]))

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

(defn gpx->paths [gpx]
  (let [segs (.find (js/jQuery gpx) "trkseg")]
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
     (->> selected-points
       (map< #(-> d3
              (.selectAll ".selected-path")
              (.data [(line-string %)])
              (.attr "d" path)))
       drain<))))

(defn show-elevation-extrema! [points]
  (let [[{min-elevation :elevation} {max-elevation :elevation}] (extrema :elevation points)]
    (.text (js/jQuery "#min-elevation span") (int min-elevation))
    (.text (js/jQuery "#max-elevation span") (int max-elevation))))

(defn show-elevation-delta! [points]
  (let [[{min-elevation :elevation} {max-elevation :elevation}] (extrema :elevation points)
        delta (int (- max-elevation min-elevation))]
    (.text (js/jQuery "#delta-elevation span") delta)
    (.toggle (js/jQuery "#delta-elevation") (pos? delta))))

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
                (.on "brushstart" #(put! brush-window (-> d3 :event :target .extent)))
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
  (.classed (.selectAll d3 "#paths li") "selected" (constantly false))
  (-> d3 (.selectAll "#elevations *") .remove)
  (-> d3 (.selectAll "#map-pane *") .remove))

(go
  (let [file (<! (file-drops js/document))]
    (-> (.select d3 "#instructions")
      (.classed "hidden" (constantly true)))
    (-> (.selectAll d3 "#loading, #interface")
      (.classed "hidden" (constantly false)))
    (<! (timeout 5)) ; Give events time to fire before loading GPX file
    (let [paths (gpx->paths file)
          map-layer (new-map)]
      (-> (.select d3 "#paths")
        (d3c/append! [:ul {:attr {:class "list-unstyled"}}
                      [:li {:text "All paths"
                            :attr {:class "all-paths"}}]
                      [:li {:join [".path" paths]
                            :attr {:class "path"
                                   :data-index (fn [_ i] i)}}
                       [:div {:text #(.toDateString (:time (first %)))}]
                       [:div {:text #(str "(" (count %) " points)")
                              :attr {:class "text-muted"}}]]]))
      (.classed (.select d3 "#loading") "hidden" (constantly true))
      (->> (events "#paths li.all-paths" :click)
        (map< (fn [selected]
                (reset)
                (.classed (.select d3 selected) "selected" (constantly true))
                (let [feature (feature-collection paths)]
                  (zoom-to map-layer feature)
                  (show-elevation-extrema! (reduce concat paths))
                  (map-path map-layer feature))))
        drain<)
      (->> (events "#paths li.path" :click)
        (map< (fn [selected]
                (reset)
                (.classed (.select d3 selected) "selected" (constantly true))
                (let [index (-> (.select d3 selected)
                              (.attr "data-index")
                              js/parseInt)
                      points (get paths index)
                      feature (feature-collection [points])
                      [selection-1 selection-2] (->> (plot-elevations points)
                                                  (map< #(during % points))
                                                  dup)]
                  (zoom-to map-layer feature)
                  (show-elevation-extrema! points)
                  (->> selection-1
                    (map< show-elevation-delta!)
                    drain<)
                  (map-path map-layer feature selection-2))))
        drain<))))
