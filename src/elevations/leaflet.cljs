(ns elevations.leaflet)

#_(defn zoom-to [map-pane feature]
  (->> feature clj->js L/geoJson .getBounds (.fitBounds map-pane)))
