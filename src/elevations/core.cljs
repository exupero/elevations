(ns elevations.core
  (:require [cljs.core.async :as async :refer [chan put! timeout mult tap]]
            [cljs.core.match :refer-macros  [match]]
            [goog.dom.xml :as xml]
            [vdom.elm :refer [foldp event render!]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [elevations.macros :refer [spy]]))

(enable-console-print!)

(defn drag-disable [el]
  (.addEventListener el "dragover"
    (fn [e]
      (.preventDefault e)
      (aset (.-dataTransfer e) "dropEffect" "none")))
  (.addEventListener el "drop"
    (fn [e]
      (.preventDefault e))))

(defn drag-enable [el actions]
  (.addEventListener el "dragover"
    (fn [e]
      (.stopPropagation e)
      (.preventDefault e)
      (aset (.-dataTransfer e) "dropEffect" "copy")
      (put! actions :drop-on)))
  (.addEventListener el "dragleave"
    (fn [e]
      (.stopPropagation e)
      (.preventDefault e)
      (put! actions :drop-off))))

(defn drop-enable [el actions]
  (.addEventListener el "drop"
    (fn [e]
      (.stopPropagation e)
      (.preventDefault e)
      (let [file (-> e .-dataTransfer .-files (aget 0))
            reader (js/FileReader.)]
          (aset reader "onload" #(put! actions [:load (-> % .-target .-result)]))
          (.readAsText reader file)))))

(def format-date (.format js/d3.time "%A, %b %-d, %Y"))

(defn format-duration [t]
  (condp > t
    60 (str t " seconds")
    3600 (str (.round js/Math (/ t 60)) " minutes")
    (str (.round js/Math (/ t 3600)) " hours")))

(defn seconds [t]
  (/ (.getTime t) 1000))

(defn coords->geojson [cs]
  (clj->js
    {:type "FeatureCollection"
     :features [{:type "Feature"
                 :geometry {:type "LineString"
                            :coordinates (map (juxt :lon :lat) cs)}}]}))

(defn gpx->tracks [doc]
  (for [track (js->clj (xml/selectNodes doc "//*[local-name(.)='trkseg']"))]
    (let [pts (for [pt (js->clj (.call js/Array.prototype.slice (.-children track)))
                    :when (= "trkpt" (.-tagName pt))
                    :let [attrs (->> pt
                                  .-children
                                  (.call js/Array.prototype.slice)
                                  js->clj
                                  (map (fn [c] [(.-tagName c) (.-textContent c)]))
                                  (into {}))]]
                {:lon (-> pt (.getAttribute "lon") js/parseFloat)
                 :lat (-> pt (.getAttribute "lat") js/parseFloat)
                 :elevation (js/parseFloat (attrs "ele"))
                 :time (new js/Date (attrs "time"))})]
      {:id (keyword (gensym))
       :started (-> pts first :time)
       :duration (- (-> pts last :time seconds)
                    (-> pts first :time seconds))
       :points pts})))

(defn init-map [id actions]
  (let [map-pane (.map js/L id)
        overlay (-> map-pane .getPanes .-overlayPane)]
    (-> js/L
      (.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
      (.addTo map-pane))
    (.setView map-pane #js [37.8 -96.9] 4)
    (.setAttribute overlay "id" "leaflet-overlay")
    (.on map-pane "zoomstart" (event actions :hide-path))
    (.on map-pane "zoomend" (event actions :show-path))
    map-pane))

(defn classes [& cs]
  (apply str (interleave cs (repeat " "))))

(defn zoom [map-pane feature]
  (->> feature js/L.geoJson .getBounds (.fitBounds map-pane)))

(def extents (juxt (partial apply min) (partial apply max)))

(defn extrema [f xs]
  (let [exts (juxt (partial apply min-key f) (partial apply max-key f))]
    (exts xs)))

(defn ui-elevations [{:keys [selected scrub]} actions]
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
           [lowest highest :as exts] (extrema :elevation pts)
           difference (- (highest :elevation) (lowest :elevation))
           middle (-> (highest :elevation)
                    (+ (lowest :elevation))
                    (/ 2))
           x (-> js/d3 .-scale .linear
               (.domain (clj->js (extents (map :time pts))))
               (.range #js [side (- width side)]))
           y (-> js/d3 .-scale .linear
               (.domain (clj->js (extents (map :elevation pts))))
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

(defn ui-main [actions]
  (fn [{:keys [droppable? tracks selected] :as model}]
    [:div {:id "root"}
     [:div {:id "sidebar"}
      [:div {:id "sidebar-inner"}
       (if (seq? tracks)
         [:ul {:id "tracks" :className "list-unstyled"}
          (for [track tracks]
            [:li {:className (classes
                               "track"
                               (if (= (:id selected) (:id track)) "selected"))
                  :onclick (event actions [:select track])}
             [:div {:className "date"} (-> track :started format-date)]
             [:div {:className "length muted"} (-> track :duration format-duration)]])]
         [:section {:id "drop-gpx" :className (if droppable? "droppable")}
          [:div {:className "text"} "Drop a GPX file here"]
          [:div {:id "drop-zone" :className "overlay"} "Drop GPX file"]])]]
     [:main {}
      [:section {:id "map"}]
      [:section {:id "info"}
       (ui-elevations model actions)]]]))

(defn ui-map [actions]
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

(defn step [model action]
  (match action
    :no-op model
    [:set-map-pane pane] (assoc model :map-pane pane)
    :drop-on (assoc model :droppable? true)
    :drop-off (assoc model :droppable? false)
    [:load data] (assoc model :tracks (-> data xml/loadXml gpx->tracks))
    [:select track] (let [geojson (coords->geojson (:points track))]
                      (zoom (model :map-pane) geojson)
                      (assoc model
                             :selected track
                             :geojson geojson
                             :show? true
                             :scrub nil))
    :hide-path (assoc model :show? false)
    :show-path (assoc model :show? true)
    [:scrub t] (assoc model :scrub t)))

(go
  (let [actions (chan)
        initial-model {:droppable? false
                       :tracks nil
                       :selected nil
                       :geojson nil
                       :show? false
                       :scrub nil}
        models (mult (foldp step initial-model actions))
        render-section! (fn [ui root]
                          (let [ms (chan)]
                            (tap models ms)
                            (render! (async/map (ui actions) [ms]) root)
                            ; re-render
                            (put! actions :no-op)))]
    (render-section! ui-main js/document.body)
    (<! (timeout 10)) ; let DOM render
    (put! actions [:set-map-pane (init-map "map" actions)])
    (drag-disable js/window)
    (drag-enable (.getElementById js/document "drop-gpx") actions)
    (drop-enable (.getElementById js/document "drop-zone") actions)
    (render-section! ui-map (.getElementById js/document "leaflet-overlay"))))
