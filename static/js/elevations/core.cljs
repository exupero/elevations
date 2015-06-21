(ns elevations.core
  (:require [cljs.core.async :as async :refer [chan put! timeout]]
            [cljs.core.match :refer-macros  [match]]
            [goog.dom.xml :as xml]
            [vdom.elm :refer [foldp event render!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defn drop-disable [el]
  (.addEventListener el "dragover"
    (fn [e]
      (.preventDefault e)
      (aset (.-dataTransfer e) "dropEffect" "none")))
  (.addEventListener el "drop"
    (fn [e]
      (.preventDefault e))))

(defn drop-enable [el f]
  (.addEventListener el "dragover"
    (fn [e]
      (.stopPropagation e)
      (.preventDefault e)
      (aset (.-dataTransfer e) "dropEffect" "copy")))
  (.addEventListener el "drop"
    (fn [e]
      (.stopPropagation e)
      (.preventDefault e)
      (let [file (-> e .-dataTransfer .-files (aget 0))
            reader (js/FileReader.)]
          (aset reader "onload" f)
          (.readAsText reader file)))))

(def format-date (.format js/d3.time "%A, %b %-d, %Y"))

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
       :points pts})))

(defn ui-tracks [{:keys [tracks selected]} actions]
  [:ul {:id "tracks"}
   (for [track tracks]
     [:li {:className (if (= (:id selected) (:id track)) "selected")
           :onclick (event actions [:select track])} (-> track :started format-date)])])

(defn ui [actions]
  (fn [{:keys [tracks] :as model}]
    [:main {}
     (if (seq? tracks)
       (ui-tracks model actions)
       [:section {:id "drop-gpx"} "Drop a GPX file here"])]))

(defn step [model action]
  (match action
    :no-op model
    [:load-tracks tracks] (assoc model :tracks tracks)
    [:select track] (assoc model :selected track)))

(go
  (let [actions (chan)
        initial-model {:tracks nil
                       :selected nil}
        models (foldp step initial-model actions)]
    (render! (async/map (ui actions) [models]) js/document.body)
    (<! (timeout 5)) ; give DOM time to render
    (drop-disable js/window)
    (drop-enable (.getElementById js/document "drop-gpx")
                 (fn [file] (put! actions [:load-tracks (-> file .-target .-result xml/loadXml gpx->tracks)])))))
