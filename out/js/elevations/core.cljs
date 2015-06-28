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
                 :elevation (attrs "ele")
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
       (if selected
         (let [pts (selected :points)
               x (-> js/d3 .-scale .linear
                   (.domain (clj->js (extents (map :time pts))))
                   (.range #js [0 200]))
               y (-> js/d3 .-scale .linear
                   (.domain (clj->js (extents (map :elevation pts))))
                   (.range #js [50 0]))
               line (-> js/d3 .-svg .line
                      (.x (comp x :time))
                      (.y (comp y :elevation)))]
           [:svg {}
            [:path {:id "elevations" :d nil}]]))]]]))

(defn ui-map [actions]
  (let [xy (juxt #(.-x %) #(.-y %))
        map-section (.getElementById js/document "map")]
    (fn [{:keys [map-pane geojson show?]}]
      (when (and geojson show?)
        (let [proj (fn [coord]
                     (let [[lon lat] (js->clj coord)]
                       (->> (js/L.LatLng. lat lon)
                         (.latLngToLayerPoint map-pane)
                         xy
                         clj->js)))
              path (-> js/d3 .-geo .path (.projection proj))
              [bottom-left top-right] (-> js/d3 .-geo (.bounds geojson))
              [x1 y2] (proj bottom-left)
              [x2 y1] (proj top-right)
              margin (fn margin
                       ([f x] (margin 1 f x))
                       ([s f x] (f x (* s 3))))]
          [:svg {:id "leaflet-svg"
                 :width (margin 2 + (- x2 x1))
                 :height (margin 2 + (- y2 y1))
                 :style #js {:margin-left (str (margin - x1) "px")
                             :margin-top (str (margin - y1) "px")}}
           [:g {:id "map-pane"
                :class "leaflet-zoom-hide"
                :transform (str "translate(" (margin + (- x1)) "," (margin + (- y1)) ")")}
            [:path {:id "path" :d (path geojson)}]]])))))

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
                             :show? true))
    :hide-path (assoc model :show? false)
    :show-path (assoc model :show? true)))

(go
  (let [actions (chan)
        initial-model {:droppable? false
                       :tracks nil
                       :selected nil
                       :geojson nil
                       :show? false}
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
