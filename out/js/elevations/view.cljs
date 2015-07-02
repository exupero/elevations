(ns elevations.view
  (:require [cljs.core.async :as async :refer [put!]]
            [vdom.elm :refer [event]]
            [elevations.util :as util])
  (:require-macros [elevations.macros :refer [spy]]))

(def xy (juxt #(.-x %) #(.-y %)))
(def lon-lat (juxt :lon :lat))
(def line (-> js/d3 .-svg .line))

(defn margin
  ([f x] (margin 1 f x))
  ([s f x] (f x (* s 7))))

(defn linear [ds axis rng]
  (-> js/d3 .-scale .linear
    (.domain (clj->js (util/extents (map axis ds))))
    (.range (clj->js rng))))

(def arrowhead
  [:marker {:id "arrow"
            :viewBox "0 -5 6 10"
            :refX 6
            :refY 0
            :markerWidth 6
            :markerHeight 6
            :orient "auto"}
   [:path {:d "M 0,-5 L 6,0 L 0,5"
           :stroke-width 1.5}]])

(defn cursor [svg x y]
  (let [c (.createSVGPoint svg)]
    (aset c "x" x)
    (aset c "y" y)
    (.matrixTransform c (-> svg .getScreenCTM .inverse))))

(defn scrubber-x [svg]
  (fn [e]
    (-> svg
      (cursor (.-clientX e) (.-clientY e))
      .-x)))

(defn scrubber-time [scale]
  (fn [x]
    (let [t (js/Date.)]
      (.setTime t (.invert scale x))
      t)))

(defn nearest [pts]
  (fn [t]
    (let [ms (.getTime t)
          dist #(.abs js/Math (- ms (-> % :time .getTime)))]
      {:time t :point (apply min-key dist pts)})))

(defn fire [actions k]
  (fn [p]
    (put! actions [k p])))

(def size (juxt #(.-offsetWidth %) #(.-offsetHeight %)))

(defn map-window [actions]
  (let [map-section (.getElementById js/document "map")]
    (fn [{:keys [map-pane geojson show? scrub]}]
      (when (and geojson show?)
        (let [proj (fn [[lon lat]]
                     (->> (js/L.LatLng. lat lon)
                       (.latLngToLayerPoint map-pane)
                       xy))
              path (-> js/d3 .-geo .path (.projection (comp clj->js proj)))
              [bottom-left top-right] (-> js/d3 .-geo (.bounds geojson))
              [x1 y2] (proj bottom-left)
              [x2 y1] (proj top-right)]
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
              (let [[x y] (-> scrub :point lon-lat proj)]
                (list
                  [:circle {:cx x :cy y :r 6 :fill "steelblue"}]
                  [:circle {:cx x :cy y :r 4 :fill "orange"}])))]])))))

(defn extrema [y high low]
  (let [middle (-> high (+ low) (/ 2))]
    (list
      [:g {:transform "translate(18,0)"}
       [:line {:class "tick"
               :marker-end "url(#arrow)"
               :y1 (-> middle y (- 8))
               :y2 (-> high y (+ 8))}]
       [:line {:class "tick"
               :marker-end "url(#arrow)"
               :y1 (-> middle y (+ 8))
               :y2 (-> low y (- 8))}]]
      [:text {:transform (str "translate(0," (y middle) ")")
              :dx 18 :dy 5}
       (-> high (- low) js/Math.round (str "'"))])))

(defn elevations [{{:keys [started points] :as selected} :selected :keys [scrub]} actions]
  [:svg {:id "elevation-container"}
   [:defs {} arrowhead]
   (if selected
     (let [padding 8
           side 35
           svg (.getElementById js/document "elevation-container")
           [width height] (size svg)
           [lowest highest :as exts] (util/extrema :elevation points)
           x (linear points :time [side (- width side)])
           y (linear points :elevation [(- height padding) padding])
           inner-height (- height (* 2 padding))
           sx (if scrub (-> scrub :time x))]
       [:g {}
        (for [{t :time elev :elevation} exts]
          [:g {:class "extreme"
               :transform (str "translate(0," (y elev) ")")}
           [:line {:class "tick"
                   :x1 (x started) :x2 (x t)}]
           [:text {:dx 18 :dy 5} (-> elev js/Math.round (str "'"))]
           [:circle {:cx (x t) :r 3}]])
        [:g {:class "difference"}
         (extrema y (highest :elevation) (lowest :elevation))]
        [:g {:id "elevations-zone"}
         [:rect {:id "scrub-zone"
                 :x side
                 :y padding
                 :width (- width (* 2 side))
                 :height inner-height
                 :onmousemove (comp (fire actions :scrub)
                                    (nearest points)
                                    (scrubber-time x)
                                    (scrubber-x svg))}]
         [:path {:id "elevations"
                 :d (->> points
                      (map (juxt (comp x :time) (comp y :elevation)))
                      clj->js
                      line)}]
         (when sx
           [:g {:id "scrubber"
                :transform (str "translate(" sx "," padding ")")}
            [:line {:y1 0 :y2 inner-height}]
            (let [el (-> scrub :point :elevation js/Math.round (str "'"))]
              [:g {:transform (str "translate(0," (-> inner-height (/ 2) (+ 5)) ")")}
               [:text {:class "stroke"} el]
               [:text {} el]])])]]))])

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
