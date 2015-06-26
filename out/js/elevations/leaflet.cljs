(ns elevations.leaflet)

#_(defn new-map []
  (let [map-pane (.map js/L "map")
        overlay (-> map-pane .getPanes :overlayPane)]
    (-> js/L
      (.tileLayer "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
      (.addTo map-pane))
    (.setView map-pane (array 37.8 -96.9) 4)
    (-> (.select d3 overlay)
      (d3c/append! [:svg {:attr {:id "leaflet-svg"}}
                    [:g {:attr {:id "map-pane"
                                :class "leaflet-zoom-hide"}}]]))
    map-pane))

#_(defn zoom-to [map-pane feature]
  (->> feature clj->js L/geoJson .getBounds (.fitBounds map-pane)))
