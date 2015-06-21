// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.old');
goog.require('cljs.core');
elevations.old.draw_path_BANG_ = (function elevations$old$draw_path_BANG_(feature,path,proj,extrema){
return d3c.append_BANG_.call(null,elevations.old.d3.select("#map-pane"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".extrema",extrema], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"extrema",new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__30406_SHARP_){
return cljs.core.apply.call(null,d3c.translate,proj.call(null,p1__30406_SHARP_));
}),new cljs.core.Keyword(null,"r","r",-471384190),elevations.old.extrema_radius], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datum","datum",-238179071),feature,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"path",new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"selected-path"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datum","datum",-238179071),elevations.old.line_string.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"stroke",new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datum","datum",-238179071),elevations.old.line_string.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),path], null)], null)], null)], null));
});
elevations.old.show_elevation_extrema_BANG_ = (function elevations$old$show_elevation_extrema_BANG_(points){
var vec__30411 = elevations.old.extrema.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),points);
var map__30412 = cljs.core.nth.call(null,vec__30411,(0),null);
var map__30412__$1 = ((cljs.core.seq_QMARK_.call(null,map__30412))?cljs.core.apply.call(null,cljs.core.hash_map,map__30412):map__30412);
var min_elevation = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var map__30413 = cljs.core.nth.call(null,vec__30411,(1),null);
var map__30413__$1 = ((cljs.core.seq_QMARK_.call(null,map__30413))?cljs.core.apply.call(null,cljs.core.hash_map,map__30413):map__30413);
var max_elevation = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
elevations.old.d3.select("#min-elevation span").text((min_elevation | (0)));

return elevations.old.d3.select("#max-elevation span").text((max_elevation | (0)));
});
elevations.old.show_elevation_delta_BANG_ = (function elevations$old$show_elevation_delta_BANG_(points){
var vec__30417 = elevations.old.extrema.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),points);
var map__30418 = cljs.core.nth.call(null,vec__30417,(0),null);
var map__30418__$1 = ((cljs.core.seq_QMARK_.call(null,map__30418))?cljs.core.apply.call(null,cljs.core.hash_map,map__30418):map__30418);
var min_elevation = cljs.core.get.call(null,map__30418__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var map__30419 = cljs.core.nth.call(null,vec__30417,(1),null);
var map__30419__$1 = ((cljs.core.seq_QMARK_.call(null,map__30419))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);
var max_elevation = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var delta = ((max_elevation - min_elevation) | (0));
elevations.old.d3.select("#delta-elevation span").text(delta);

return elevations.old.d3.select("#delta-elevation").classed("hidden",((function (vec__30417,map__30418,map__30418__$1,min_elevation,map__30419,map__30419__$1,max_elevation,delta){
return (function (){
return !((delta > (0)));
});})(vec__30417,map__30418,map__30418__$1,min_elevation,map__30419,map__30419__$1,max_elevation,delta))
);
});
elevations.old.select_path = (function elevations$old$select_path(map_layer){
return (function (path,index){
elevations.old.d3.selectAll("#paths li").classed("selected",cljs.core.constantly.call(null,false));

elevations.old.d3.selectAll("#elevations *, #map-pane *").remove();

var node_30425 = this;
elevations.old.d3.select(node_30425).classed("selected",cljs.core.constantly.call(null,true));

var feature = elevations.old.feature_collection.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var brushed = elevations.old.plot_elevations.call(null,path);
elevations.old.zoom_to.call(null,map_layer,feature);

elevations.old.show_elevation_extrema_BANG_.call(null,path);

elevations.old.drain_LT_.call(null,elevations.old.map_LT_.call(null,elevations.old.show_elevation_delta_BANG_,elevations.old.copy.call(null,brushed)));

return elevations.old.map_path.call(null,map_layer,feature,elevations.old.copy.call(null,brushed));
});
});
elevations.old.go.call(null,(function (){var file = elevations.old._LT__BANG_.call(null,elevations.old.file_drops.call(null,document));
elevations.old.d3.select("#instructions").classed("hidden",cljs.core.constantly.call(null,true));

elevations.old.d3.selectAll("#loading, #interface").classed("hidden",cljs.core.constantly.call(null,false));

elevations.old._LT__BANG_.call(null,elevations.old.timeout.call(null,(5)));

d3c.append_BANG_.call(null,elevations.old.d3.select("#paths"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-unstyled"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".path",elevations.old.gpx__GT_paths.call(null,file)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"path"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),elevations.old.select_path.call(null,elevations.old.new_map.call(null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),((function (file){
return (function (p1__30426_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__30426_SHARP_)).toDateString();
});})(file))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),((function (file){
return (function (p1__30427_SHARP_){
return [cljs.core.str("("),cljs.core.str(cljs.core.count.call(null,p1__30427_SHARP_)),cljs.core.str(" points)")].join('');
});})(file))
,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted"], null)], null)], null)], null)], null));

return elevations.old.d3.select("#loading").classed("hidden",cljs.core.constantly.call(null,true));
})());

//# sourceMappingURL=old.js.map