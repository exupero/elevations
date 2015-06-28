// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.gpx');
goog.require('cljs.core');
elevations.gpx.line_string = (function elevations$gpx$line_string(points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),cljs.core.map.call(null,elevations.gpx.lon_lat,points)], null);
});
elevations.gpx.feature_collection = (function elevations$gpx$feature_collection(lines){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),(function (){var iter__4951__auto__ = (function elevations$gpx$feature_collection_$_iter__37192(s__37193){
return (new cljs.core.LazySeq(null,(function (){
var s__37193__$1 = s__37193;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37193__$1);
if(temp__4126__auto__){
var s__37193__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37193__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__37193__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__37195 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__37194 = (0);
while(true){
if((i__37194 < size__4950__auto__)){
var points = cljs.core._nth.call(null,c__4949__auto__,i__37194);
var ex = elevations.gpx.extrema.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),points);
cljs.core.chunk_append.call(null,b__37195,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elevation-extrema","elevation-extrema",-212771965),ex], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),elevations.gpx.line_string.call(null,points)], null));

var G__37196 = (i__37194 + (1));
i__37194 = G__37196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37195),elevations$gpx$feature_collection_$_iter__37192.call(null,cljs.core.chunk_rest.call(null,s__37193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37195),null);
}
} else {
var points = cljs.core.first.call(null,s__37193__$2);
var ex = elevations.gpx.extrema.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),points);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elevation-extrema","elevation-extrema",-212771965),ex], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),elevations.gpx.line_string.call(null,points)], null),elevations$gpx$feature_collection_$_iter__37192.call(null,cljs.core.rest.call(null,s__37193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4951__auto__.call(null,lines);
})()], null);
});

//# sourceMappingURL=gpx.js.map