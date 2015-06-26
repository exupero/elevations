(ns elevations.old)

#_(defn draw-path! [feature path proj extrema]
  (d3c/append! (.select d3 "#map-pane")
               [:circle {:join [".extrema" extrema]
                         :attr {:class "extrema"
                                :transform #(apply d3c/translate (proj %))
                                :r extrema-radius}}]
               [:path {:datum feature
                       :attr {:class "path"
                              :d path}}]
               [:g {:attr {:id "selected-path"}}
                [:path {:datum (line-string [])
                        :attr {:class "stroke"
                               :d path}}]
                [:path {:datum (line-string [])
                        :attr {:d path}}]]))

#_(defn map-path [map-pane feature selected-points]
  (let [elevation-extrema (map (comp :elevation-extrema :properties) (:features feature))
        lowest (lon-lat (apply min (map first elevation-extrema)))
        highest (lon-lat (apply max (map second elevation-extrema)))
        [lon lat] (-> d3 :geo (.centroid feature))
        xy (juxt :x :y)
        proj (fn [[lat lon]]
               (->> (L/LatLng. lon lat)
                 (.latLngToLayerPoint map-pane)
                 xy))
        path (-> d3 :geo .path (.projection proj))
        [bottom-left-bound top-right-bound] (-> d3 :geo (.bounds feature))
        reset (fn []
                (let [[x1 y1] (proj bottom-left-bound)
                      [x2 y2] (proj top-right-bound)]
                  (d3c/configure! (.select d3 "#leaflet-svg")
                                  {:attr {:width (+ 10 (- x2 x1))
                                          :height (+ 10 (- y1 y2))}
                                   :style {:margin-left (str (- x1 7) "px")
                                           :margin-top (str (- y2 7) "px")}})
                  (d3c/configure! (.select d3 "#map-pane")
                                  {:attr {:transform (d3c/translate (+ 7 (- x1)) (+ 7 (- y2)))}})
                  (d3c/configure! (.selectAll d3 "#map .extrema")
                                  {:attr {:transform #(apply d3c/translate (proj %))}})
                  (d3c/configure! (.select d3 "#map .path")
                                  {:attr {:d path}})
                  (d3c/configure! (.select d3 "#selected-path")
                                  {:attr {:d path}})))]
    (draw-path! feature path proj [lowest highest])
    (.on map-pane "viewreset" reset)
    (reset)
    (go-loop [points (<! selected-points)]
      (-> (.selectAll d3 "#selected-path path")
        (.datum (line-string points))
        (.attr "d" path))
      (recur (<! selected-points)))))

#_(defn show-elevation-extrema! [points]
  (let [[{min-elevation :elevation} {max-elevation :elevation}] (extrema :elevation points)]
    (.text (.select d3 "#min-elevation span") (int min-elevation))
    (.text (.select d3 "#max-elevation span") (int max-elevation))))

#_(defn show-elevation-delta! [points]
  (let [[{min-elevation :elevation} {max-elevation :elevation}] (extrema :elevation points)
        delta (int (- max-elevation min-elevation))]
    (.text (.select d3 "#delta-elevation span") delta)
    (.classed (.select d3 "#delta-elevation") "hidden" #(not (pos? delta)))))

#_(defn plot-elevations [points]
  (let [brush-window (map> #(during % points) (chan))
        [width height] [780 90]
        x (-> d3 :time .scale
            (.domain (extents (map :time points)))
            (.range [(+ extrema-radius 1) (- width extrema-radius 1)]))
        y (-> d3 :scale .linear
            (.domain (extents (map :elevation points)))
            (.range [(- height extrema-radius 1) (+ extrema-radius 1)]))
        line (-> d3 :svg .line
               (.x #(x (:time %)))
               (.y #(y (:elevation %))))
        brush (-> d3 :svg .brush
                (.x x)
                (.on "brushstart" #(put! brush-window (-> d3 :event :target .extent)))
                (.on "brush" #(put! brush-window (-> d3 :event :target .extent))))]
    (doto (.select d3 "#elevations")
      (->
        (d3c/append! [:g {:attr {:class "brush"}}])
        (.call brush)
        (.selectAll "rect")
        (d3c/configure! {:attr {:height height}}))
      (d3c/append! [:circle {:join [".extrema" (extrema :elevation points)]
                             :attr {:class "extrema"
                                    :r extrema-radius
                                    :cx #(x (:time %))
                                    :cy #(y (:elevation %))}}])
      (d3c/append! [:path {:datum points
                           :attr {:class "line"
                                  :d line}}])
      (d3c/append! [:g {:attr {:id "selected-elevation"}}
                    [:path {:datum []
                            :attr {:class "stroke"
                                   :d line}}]
                    [:path {:datum []
                            :attr {:d line}}]]))
    (let [m (mult brush-window)
          ch (copy m)]
      (go-loop [points (<! ch)]
        (-> (.selectAll d3 "#selected-elevation path")
          (.datum points)
          (.attr "d" line))
        (recur (<! ch)))
      m)))

#_(defn select-path [map-layer]
  (fn [path index]
    (.classed (.selectAll d3 "#paths li") "selected" (constantly false))
    (.remove (.selectAll d3 "#elevations *, #map-pane *"))
    (this-as node
             (.classed (.select d3 node) "selected" (constantly true)))
    (let [feature (feature-collection [path])
          brushed (plot-elevations path)]
      (zoom-to map-layer feature)
      (show-elevation-extrema! path)
      (->> (copy brushed)
        (map< show-elevation-delta!)
        drain<)
      (map-path map-layer feature (copy brushed)))))

#_(go
  (let [file (<! (file-drops js/document))]
    (-> (.select d3 "#instructions")
      (.classed "hidden" (constantly true)))
    (-> (.selectAll d3 "#loading, #interface")
      (.classed "hidden" (constantly false)))
    (<! (timeout 5)) ; Give events time to fire before loading GPX file
    (-> (.select d3 "#paths")
      (d3c/append! [:ul {:attr {:class "list-unstyled"}}
                    [:li {:join [".path" (gpx->paths file)]
                          :attr {:class "path"}
                          :on {:click (select-path (new-map))}}
                     [:div {:text #(.toDateString (:time (first %)))}]
                     [:div {:text #(str "(" (count %) " points)")
                            :attr {:class "text-muted"}}]]]))
    (.classed (.select d3 "#loading") "hidden" (constantly true))))
