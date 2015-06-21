// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.leaflet');
goog.require('cljs.core');
elevations.leaflet.zoom_to = (function elevations$leaflet$zoom_to(map_pane,feature){
return map_pane.fitBounds(L.geoJson.call(null,cljs.core.clj__GT_js.call(null,feature)).getBounds());
});

//# sourceMappingURL=leaflet.js.map