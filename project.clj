(defproject elevations "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2014"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]
                 [crate "0.2.4"]
                 [d3c "0.2.1"]]
  :plugins [[lein-cljsbuild "1.0.1-SNAPSHOT"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs" "src-clj"]
                        :compiler {:output-to "resources/public/js/elevations.js"}
                        :notify-command ["growlnotify" "-m"]}]})
