(ns elevations.macros)

(defmacro spy [x]
  (let [ex (gensym)]
    `(let [~ex ~x]
       (println '~x ~ex)
       ~ex)))
