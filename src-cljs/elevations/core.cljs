(ns elevations.core
  (:use [cljs.core.async :only [chan put! <!]])
  (:require [crate.core :as crate]
            [strokes :refer [d3]]
            [d3c.core :as d3c])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(.addEventListener
  js/document
  "dragover"
  (fn [evt]
    (.stopPropagation evt)
    (.preventDefault evt)
    (aset (:dataTransfer evt) "dropEffect" "copy"))
  false)

(defn file-drops [el]
  (let [out (chan)]
    (.addEventListener el
                       "drop"
                       (fn [evt]
                         (.stopPropagation evt)
                         (.preventDefault evt)
                         (let [file (get (-> evt :dataTransfer :files) 0)
                               reader (js/FileReader.)]
                           (aset reader "onload" #(put! out (-> % :target :result)))
                           (.readAsText reader file)))
                       false)
    out))

(defn clicks [selector]
  (let [out (chan)]
    (.bind (js/jQuery selector) "click"
           (fn [evt]
             (this-as this (put! out (js/jQuery this)))))
    out))

(defn line-string [points]
  {:type "LineString"
   :coordinates (for [{:keys [lon lat]} points]
                  [lon lat])})

(defn mapc [f ch]
  (let [out (chan)]
    (go (loop []
          (put! out (f (<! ch)))
          (recur)))
    out))

(defn extents [coll]
  [(apply min coll)
   (apply max coll)])

(defn gpx->paths [gpx]
  (let [segs (.find gpx "trkseg")]
    (for [i (range (:length segs))
          :let [seg (js/jQuery (.get segs i))
                pts (.find seg "trkpt")]]
      (for [j (range (:length pts))
            :let [pt (js/jQuery (.get pts j))]]
        {:lat (js/parseFloat (.attr pt "lat"))
         :lon (js/parseFloat (.attr pt "lon"))
         :elevation (-> pt (.find "ele") .text js/parseFloat)
         :time (js/Date. (-> pt (.find "time") .text))}))))

(defn zoom-to [projection feature path [width height]]
  (let [[[left top] [right bottom]] (.bounds path feature)
        s (/ 0.9 (max (/ (- right left) width) (/ (- bottom top) height)))
        t (array (/ (- width (* s (+ right left))) 2)
                 (/ (- height (* s (+ bottom top))) 2))]
    (-> projection (.scale s) (.translate t))))

(defn map-path [sel points selected-points]
  (let [coords (line-string points)
        [lon lat] (-> d3 :geo (.centroid coords))
        proj (-> d3 :geo .orthographic
               (.clipAngle (+ 90 1e-6))
               (.scale 1)
               (.translate [0 0])
               (.precision 1)
               (.rotate [(- lon) (- lat)]))
        path (-> d3 :geo .path
               (.projection proj))]
    (zoom-to proj coords path [780 520])
    (doto sel
      (d3c/bind! ".selected-path" [(line-string [])]
                 [:path {:attr {:class "selected-path"
                                :d path}}])
      (d3c/append! [:path {:datum coords
                           :attr {:class "path"
                                  :d path}}]))
    (mapc #(-> d3
            (.selectAll ".selected-path")
            (.data [(line-string %)])
            (.attr "d" path))
          selected-points)))

(defn plot-elevations [points]
  (let [brush-window (chan)
        height 100
        x (-> d3 :time .scale
            (.domain (extents (map :time points)))
            (.range [0 780]))
        y (-> d3 :scale .linear
            (.domain (extents (map :elevation points)))
            (.range [height 0]))
        line (-> d3 :svg .line
               (.x #(x (:time %)))
               (.y #(y (:elevation %))))
        brush (-> d3 :svg .brush
                (.x x)
                (.on "brush" #(put! brush-window (-> d3 :event :target .extent))))]
    (doto (.select d3 "#elevations")
      (d3c/append! [:path {:datum points
                           :attr {:class "line"
                                  :d line}}])
      (->
        (d3c/append! [:g {:attr {:class "brush"}}])
        (.call brush)
        (.selectAll "rect")
        (.attr "height" height)))
    brush-window))

(go
  (let [paths (-> js/document file-drops <! js/jQuery gpx->paths)]
    (.append (js/jQuery "#paths")
             (crate/html [:div
                          [:h5 "Paths"]
                          [:ul#paths
                           (for [[[point :as path] index] (map vector paths (iterate inc 0))]
                             [:li {:data-index index}
                              (str (.toDateString (:time point))
                                   " (" (count path) " points)")])]]))
    (mapc (fn [selected]
            (.removeClass (js/jQuery "#paths li") "selected")
            (-> d3 (.selectAll "#elevations *") .remove)
            (-> d3 (.selectAll "#map *") .remove)
            (let [points (get paths (-> selected
                                      (.data "index")
                                      js/parseInt))]
              (.addClass selected "selected")
              (map-path (.select d3 "#map")
                        points
                        (mapc (fn [[start end]]
                                (filter #(and (< start (:time %))
                                              (> end (:time %)))
                                        points))
                              (plot-elevations points)))))
          (clicks "#paths li"))))
