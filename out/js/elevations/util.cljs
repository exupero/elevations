(ns elevations.util
  (:require [goog.dom.xml :as xml]))

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

(defn classes [& cs]
  (apply str (interleave cs (repeat " "))))

(defn zoom [map-pane feature]
  (->> feature js/L.geoJson .getBounds (.fitBounds map-pane)))

(def extents (juxt (partial apply min) (partial apply max)))

(defn extrema [f xs]
  (let [exts (juxt (partial apply min-key f) (partial apply max-key f))]
    (exts xs)))
