(defproject elevations "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3195" :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.match  "0.3.0-alpha4"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [vdom "0.1.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {:builds {:dev {:source-paths ["src"]
                             :incremental true
                             :jar true
                             :assert true
                             :compiler {:output-to "static/js/elevations-dev.js"
                                        :output-dir "static/js"
                                        :warnings true
                                        :elide-asserts true
                                        :optimizations :none
                                        :source-map "static/js/elevations-dev.js.map"
                                        :pretty-print true
                                        :output-wrapper false}}
                       :prod {:source-paths ["src"]
                              :incremental true
                              :jar true
                              :assert true
                              :compiler {:output-to "stat/js/elevatiosn.js"
                                         :warnings true
                                         :elide-asserts true
                                         :externs []
                                         :optimizations :advanced
                                         :pretty-print false
                                         :output-wrapper false}}}})
