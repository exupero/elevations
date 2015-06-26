// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
elevations.util.extents = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max));
elevations.util.extrema = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min_key),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max_key));
elevations.util.lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));

//# sourceMappingURL=util.js.map