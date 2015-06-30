(ns elevations.core
  (:require [cljs.core.async :as async :refer [chan put! timeout mult tap]]
            [cljs.core.match :refer-macros  [match]]
            [goog.dom.xml :as xml]
            [vdom.elm :refer [foldp event render!]]
            [elevations.view :as view]
            [elevations.util :as util])
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

(defn step [model action]
  (match action
    :no-op model
    :drop-on (assoc model :droppable? true)
    :drop-off (assoc model :droppable? false)
    :hide-path (assoc model :show? false)
    :show-path (assoc model :show? true)
    [:set-map-pane pane] (assoc model :map-pane pane)
    [:load data] (assoc model :tracks (-> data xml/loadXml util/gpx->tracks))
    [:scrub t] (assoc model :scrub t)
    [:select track] (let [geojson (util/coords->geojson (:points track))]
                      (util/zoom (model :map-pane) geojson)
                      (assoc model
                             :selected track
                             :geojson geojson
                             :show? true
                             :scrub nil))))

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
    (render-section! view/main js/document.body)
    (<! (timeout 10)) ; let DOM render
    (put! actions [:set-map-pane (init-map "map" actions)])
    (drag-disable js/window)
    (drag-enable (.getElementById js/document "drop-gpx") actions)
    (drop-enable (.getElementById js/document "drop-zone") actions)
    (render-section! view/map-window (.getElementById js/document "leaflet-overlay"))))
