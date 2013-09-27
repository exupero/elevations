(ns elevations.core
  (:use [cljs.core.async :only [chan put! <!]])
  (:require [crate.core :as crate]
            [strokes :refer [d3]]
            [d3c.core :as d3c])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(.addEventListener js/document
                   "dragover"
                   (fn [evt]
                     (.stopPropagation evt)
                     (.preventDefault evt)
                     (aset (:dataTransfer evt) "dropEffect" "copy"))
                   false)

(defn drops [el]
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
        s (/ 0.95 (max (/ (- right left) width) (/ (- bottom top) height)))
        t (array (/ (- width (* s (+ right left))) 2)
                 (/ (- height (* s (+ bottom top))) 2))]
    (-> projection (.scale s) (.translate t))))

(def projection (-> d3 :geo .orthographic
                  (.clipAngle (+ 90 1e-6))
                  (.scale 1)
                  (.translate [0 0])
                  (.precision 1)))

(defn map-path [points]
  (let [coords (clj->js {:type "LineString"
                         :coordinates (for [{:keys [lon lat]} points]
                                        [lon lat])})
        [lon lat] (-> d3 :geo (.centroid coords))
        proj (.rotate projection [(- lon) (- lat)])
        path (-> d3 :geo .path
               (.projection proj))]
  (zoom-to proj coords path [780 520])
  (-> d3
    (.select "#map")
    (d3c/append! [:path {:datum coords
                         :attr {:class "path"
                                :d path}}]))))

(go
  (let [paths (-> js/document
                drops
                <!
                js/jQuery
                gpx->paths)]
    (.append (js/jQuery "#paths")
             (crate/html [:div
                          [:h5 "Paths"]
                          [:ul#paths
                           (for [[path index] (map vector paths (iterate inc 0))]
                             [:li {:data-index index}
                              (str (inc index) ". " (count path) " points")])]]))
    (go
      (let [path-selections (clicks "#paths li")]
        (loop []
          (let [selected (<! path-selections)
                index (-> selected (.data "index") js/parseInt)
                points (get paths index)]
            (.addClass selected "selected")
            (map-path points))
          (recur))))))
