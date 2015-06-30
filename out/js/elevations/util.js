// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.util');
goog.require('cljs.core');
goog.require('goog.dom.xml');
elevations.util.format_date = d3.time.format("%A, %b %-d, %Y");
elevations.util.format_duration = (function elevations$util$format_duration(t){
var pred__84975 = cljs.core._GT_;
var expr__84976 = t;
if(cljs.core.truth_(pred__84975.call(null,(60),expr__84976))){
return [cljs.core.str(t),cljs.core.str(" seconds")].join('');
} else {
if(cljs.core.truth_(pred__84975.call(null,(3600),expr__84976))){
return [cljs.core.str(Math.round((t / (60)))),cljs.core.str(" minutes")].join('');
} else {
return [cljs.core.str(Math.round((t / (3600)))),cljs.core.str(" hours")].join('');
}
}
});
elevations.util.seconds = (function elevations$util$seconds(t){
return (t.getTime() / (1000));
});
elevations.util.coords__GT_geojson = (function elevations$util$coords__GT_geojson(cs){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929)),cs)], null)], null)], null)], null));
});
elevations.util.gpx__GT_tracks = (function elevations$util$gpx__GT_tracks(doc){
var iter__4951__auto__ = (function elevations$util$gpx__GT_tracks_$_iter__84998(s__84999){
return (new cljs.core.LazySeq(null,(function (){
var s__84999__$1 = s__84999;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84999__$1);
if(temp__4126__auto__){
var s__84999__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84999__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__84999__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__85001 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__85000 = (0);
while(true){
if((i__85000 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__85000);
cljs.core.chunk_append.call(null,b__85001,(function (){var pts = (function (){var iter__4951__auto__ = ((function (i__85000,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__){
return (function elevations$util$gpx__GT_tracks_$_iter__84998_$_iter__85010(s__85011){
return (new cljs.core.LazySeq(null,((function (i__85000,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__){
return (function (){
var s__85011__$1 = s__85011;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__85011__$1);
if(temp__4126__auto____$1){
var s__85011__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85011__$2)){
var c__4949__auto____$1 = cljs.core.chunk_first.call(null,s__85011__$2);
var size__4950__auto____$1 = cljs.core.count.call(null,c__4949__auto____$1);
var b__85013 = cljs.core.chunk_buffer.call(null,size__4950__auto____$1);
if((function (){var i__85012 = (0);
while(true){
if((i__85012 < size__4950__auto____$1)){
var pt = cljs.core._nth.call(null,c__4949__auto____$1,i__85012);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__85012,s__85011__$1,i__85000,pt,c__4949__auto____$1,size__4950__auto____$1,b__85013,s__85011__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__85012,s__85011__$1,i__85000,pt,c__4949__auto____$1,size__4950__auto____$1,b__85013,s__85011__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__85013,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__85018 = (i__85012 + (1));
i__85012 = G__85018;
continue;
} else {
var G__85019 = (i__85012 + (1));
i__85012 = G__85019;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85013),elevations$util$gpx__GT_tracks_$_iter__84998_$_iter__85010.call(null,cljs.core.chunk_rest.call(null,s__85011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85013),null);
}
} else {
var pt = cljs.core.first.call(null,s__85011__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__85011__$1,i__85000,pt,s__85011__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__85011__$1,i__85000,pt,s__85011__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$util$gpx__GT_tracks_$_iter__84998_$_iter__85010.call(null,cljs.core.rest.call(null,s__85011__$2)));
} else {
var G__85020 = cljs.core.rest.call(null,s__85011__$2);
s__85011__$1 = G__85020;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__85000,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__))
,null,null));
});})(i__85000,track,c__4949__auto__,size__4950__auto__,b__85001,s__84999__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})());

var G__85021 = (i__85000 + (1));
i__85000 = G__85021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85001),elevations$util$gpx__GT_tracks_$_iter__84998.call(null,cljs.core.chunk_rest.call(null,s__84999__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85001),null);
}
} else {
var track = cljs.core.first.call(null,s__84999__$2);
return cljs.core.cons.call(null,(function (){var pts = (function (){var iter__4951__auto__ = ((function (track,s__84999__$2,temp__4126__auto__){
return (function elevations$util$gpx__GT_tracks_$_iter__84998_$_iter__85014(s__85015){
return (new cljs.core.LazySeq(null,((function (track,s__84999__$2,temp__4126__auto__){
return (function (){
var s__85015__$1 = s__85015;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__85015__$1);
if(temp__4126__auto____$1){
var s__85015__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85015__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__85015__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__85017 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__85016 = (0);
while(true){
if((i__85016 < size__4950__auto__)){
var pt = cljs.core._nth.call(null,c__4949__auto__,i__85016);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__85016,s__85015__$1,pt,c__4949__auto__,size__4950__auto__,b__85017,s__85015__$2,temp__4126__auto____$1,track,s__84999__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__85016,s__85015__$1,pt,c__4949__auto__,size__4950__auto__,b__85017,s__85015__$2,temp__4126__auto____$1,track,s__84999__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__85017,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__85022 = (i__85016 + (1));
i__85016 = G__85022;
continue;
} else {
var G__85023 = (i__85016 + (1));
i__85016 = G__85023;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85017),elevations$util$gpx__GT_tracks_$_iter__84998_$_iter__85014.call(null,cljs.core.chunk_rest.call(null,s__85015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85017),null);
}
} else {
var pt = cljs.core.first.call(null,s__85015__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__85015__$1,pt,s__85015__$2,temp__4126__auto____$1,track,s__84999__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__85015__$1,pt,s__85015__$2,temp__4126__auto____$1,track,s__84999__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$util$gpx__GT_tracks_$_iter__84998_$_iter__85014.call(null,cljs.core.rest.call(null,s__85015__$2)));
} else {
var G__85024 = cljs.core.rest.call(null,s__85015__$2);
s__85015__$1 = G__85024;
continue;
}
}
} else {
return null;
}
break;
}
});})(track,s__84999__$2,temp__4126__auto__))
,null,null));
});})(track,s__84999__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})(),elevations$util$gpx__GT_tracks_$_iter__84998.call(null,cljs.core.rest.call(null,s__84999__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,goog.dom.xml.selectNodes(doc,"//*[local-name(.)='trkseg']")));
});
elevations.util.classes = (function elevations$util$classes(){
var argseq__5233__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return elevations.util.classes.cljs$core$IFn$_invoke$arity$variadic(argseq__5233__auto__);
});

elevations.util.classes.cljs$core$IFn$_invoke$arity$variadic = (function (cs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cs,cljs.core.repeat.call(null," ")));
});

elevations.util.classes.cljs$lang$maxFixedArity = (0);

elevations.util.classes.cljs$lang$applyTo = (function (seq85025){
return elevations.util.classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85025));
});
elevations.util.zoom = (function elevations$util$zoom(map_pane,feature){
return map_pane.fitBounds(L.geoJson(feature).getBounds());
});
elevations.util.extents = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max));
elevations.util.extrema = (function elevations$util$extrema(f,xs){
var exts = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min_key,f),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max_key,f));
return exts.call(null,xs);
});

//# sourceMappingURL=util.js.map