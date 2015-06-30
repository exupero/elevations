(ns elevations.view
  (:require [cljs.core.async :as async :refer [put!]]
            [vdom.elm :refer [event]]
            [elevations.util :as util]))

(defn elevations [{:keys [selected scrub]} actions]
  [:svg {:id "elevation-container"}
   [:defs {}
    [:marker {:id "arrow"
              :viewBox "0 -5 6 10"
              :refX 6
              :refY 0
              :markerWidth 6
              :markerHeight 6
              :orient "auto"}
     [:path {:d "M 0,-5 L 6,0 L 0,5"
             :stroke-width 1.5}]]]
   (if selected
     (let [svg (.getElementById js/document "elevation-container")
           width (.-offsetWidth svg)
           height (.-offsetHeight svg)
           scrub-cursor (.createSVGPoint svg)
           pts (selected :points)
           padding 8
           side 35
           [lowest highest :as exts] (util/extrema :elevation pts)
           difference (- (highest :elevation) (lowest :elevation))
           middle (-> (highest :elevation)
                    (+ (lowest :elevation))
                    (/ 2))
           x (-> js/d3 .-scale .linear
               (.domain (clj->js (util/extents (map :time pts))))
               (.range #js [side (- width side)]))
           y (-> js/d3 .-scale .linear
               (.domain (clj->js (util/extents (map :elevation pts))))
               (.range #js [(- height padding) padding]))
           pairs (juxt (comp x :time) (comp y :elevation))
           line (-> js/d3 .-svg .line)]
       [:g {}
        (for [{t :time elev :elevation} exts]
          [:g {:class "extreme"
               :transform (str "translate(0," (y elev) ")")}
           [:line {:class "tick"
                   :x1 (-> :started selected x) :x2 (x t)}]
           [:text {:dx 18 :dy 5} (-> elev js/Math.round (str "'"))]
           [:circle {:cx (x t) :r 3}]])
        [:g {:class "difference"}
         [:g {:transform "translate(18,0)"}
          [:line {:class "tick"
                  :marker-end "url(#arrow)"
                  :y1 (-> middle y (- 8))
                  :y2 (-> highest :elevation y (+ 8))}]
          [:line {:class "tick"
                  :marker-end "url(#arrow)"
                  :y1 (-> middle y (+ 8))
                  :y2 (-> lowest :elevation y (- 8))}]]
         [:text {:transform (str "translate(0," (y middle) ")")
                 :dx 18 :dy 5} (-> difference js/Math.round (str "'"))]]
        [:g {:id "elevations-zone"}
         [:rect {:id "scrub-zone"
                 :x side
                 :y padding
                 :width (- width (* 2 side))
                 :height (- height (* 2 padding))
                 :onmousemove (fn [e]
                                (aset scrub-cursor "x" (.-clientX e))
                                (aset scrub-cursor "y" (.-clientY e))
                                (let [loc (.matrixTransform scrub-cursor (-> svg .getScreenCTM .inverse))
                                      sx (- (.-x loc) side)
                                      t (js/Date.)]
                                  (.setTime t (.invert x sx))
                                  (let [pt (apply min-key #(.abs js/Math (- (.getTime t) (-> % :time .getTime))) pts)]
                                    (put! actions [:scrub {:time t :point pt}]))))}]
         (when scrub
           (let [sx (-> scrub :time x)]
             [:line {:id "scrubber"
                     :transform (str "translate(" side "," padding ")")
                     :x1 sx :x2 sx :y1 0 :y2 (- height (* 2 padding))}]))
         [:path {:id "elevations"
                 :d (line (clj->js (map pairs pts)))}]]]))])

(defn main [actions]
  (fn [{:keys [droppable? tracks selected] :as model}]
    [:div {:id "root"}
     [:div {:id "sidebar"}
      [:div {:id "sidebar-inner"}
       (if (seq? tracks)
         [:ul {:id "tracks" :className "list-unstyled"}
          (for [track tracks]
            [:li {:className (util/classes
                               "track"
                               (if (= (:id selected) (:id track)) "selected"))
                  :onclick (event actions [:select track])}
             [:div {:className "date"} (-> track :started util/format-date)]
             [:div {:className "length muted"} (-> track :duration util/format-duration)]])]
         [:section {:id "drop-gpx" :className (if droppable? "droppable")}
          [:div {:className "text"} "Drop a GPX file here"]
          [:div {:id "drop-zone" :className "overlay"} "Drop GPX file"]])]]
     [:main {}
      [:section {:id "map"}]
      [:section {:id "info"}
       (elevations model actions)]]]))

(defn map-window [actions]
  (let [xy (juxt #(.-x %) #(.-y %))
        lon-lat (juxt :lon :lat)
        map-section (.getElementById js/document "map")]
    (fn [{:keys [map-pane geojson show? scrub]}]
      (when (and geojson show?)
        (let [proj* (fn [[lon lat]]
                      (->> (js/L.LatLng. lat lon)
                        (.latLngToLayerPoint map-pane)
                        xy))
              proj #(let [[lon lat] (js->clj %)]
                      (clj->js (proj* [lon lat])))
              path (-> js/d3 .-geo .path (.projection proj))
              [bottom-left top-right] (-> js/d3 .-geo (.bounds geojson))
              [x1 y2] (proj bottom-left)
              [x2 y1] (proj top-right)
              margin (fn margin
                       ([f x] (margin 1 f x))
                       ([s f x] (f x (* s 7))))]
          [:svg {:id "leaflet-svg"
                 :width (margin 2 + (- x2 x1))
                 :height (margin 2 + (- y2 y1))
                 :style #js {:margin-left (str (margin - x1) "px")
                             :margin-top (str (margin - y1) "px")}}
           [:g {:id "map-pane"
                :class "leaflet-zoom-hide"
                :transform (str "translate(" (margin + (- x1)) "," (margin + (- y1)) ")")}
            [:path {:id "path" :d (path geojson)}]
            (when scrub
              (let [[x y] (-> scrub :point lon-lat proj*)]
                (list
                  [:circle {:cx x :cy y :r 6 :fill "steelblue"}]
                  [:circle {:cx x :cy y :r 4 :fill "orange"}])))]])))))
