(ns elevations.gpx)

(defn line-string [points]
  {:type "LineString"
   :coordinates (map lon-lat points)})

(defn feature-collection [lines]
  {:type "FeatureCollection"
   :features (for [points lines
                   :let [ex (extrema :elevation points)]]
               {:type "Feature"
                :properties {:elevation-extrema ex}
                :geometry (line-string points)})})
