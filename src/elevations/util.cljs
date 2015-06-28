(ns elevations.util
  (:require [cljs.core.async :refer [tap]]))

(def extents (juxt (partial apply min) (partial apply max)))
(def extrema (juxt (partial apply min-key) (partial apply max-key)))
(def lon-lat (juxt :lon :lat))

#_(defn copy [m]
  (let [ch (chan)]
    (tap m ch)
    ch))

#_(defn drain< [ch]
  (go-loop [x (<! ch)]
    (when x
      (recur (<! ch)))))

#_(defn events
  ([selector event]
   (events selector event identity))
  ([selector event f]
   (let [out (chan)]
     (-> (.selectAll d3 selector)
       (.on (name event)
            (fn [& args]
              (this-as el
                (if-let [v (f el args)]
                  (put! out v))))))
     out)))

#_(defn during [[start end] coll]
  (filter #(and (<= start (:time %))
                (>= end (:time %)))
          coll))
