// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.util');
goog.require('cljs.core');
goog.require('goog.dom.xml');
elevations.util.format_date = d3.time.format("%A, %b %-d, %Y");
elevations.util.format_duration = (function elevations$util$format_duration(t){
var pred__92558 = cljs.core._GT_;
var expr__92559 = t;
if(cljs.core.truth_(pred__92558.call(null,(60),expr__92559))){
return [cljs.core.str(t),cljs.core.str(" seconds")].join('');
} else {
if(cljs.core.truth_(pred__92558.call(null,(3600),expr__92559))){
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
var iter__4951__auto__ = (function elevations$util$gpx__GT_tracks_$_iter__92581(s__92582){
return (new cljs.core.LazySeq(null,(function (){
var s__92582__$1 = s__92582;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__92582__$1);
if(temp__4126__auto__){
var s__92582__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__92582__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__92582__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__92584 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__92583 = (0);
while(true){
if((i__92583 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__92583);
cljs.core.chunk_append.call(null,b__92584,(function (){var pts = (function (){var iter__4951__auto__ = ((function (i__92583,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__){
return (function elevations$util$gpx__GT_tracks_$_iter__92581_$_iter__92593(s__92594){
return (new cljs.core.LazySeq(null,((function (i__92583,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__){
return (function (){
var s__92594__$1 = s__92594;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__92594__$1);
if(temp__4126__auto____$1){
var s__92594__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__92594__$2)){
var c__4949__auto____$1 = cljs.core.chunk_first.call(null,s__92594__$2);
var size__4950__auto____$1 = cljs.core.count.call(null,c__4949__auto____$1);
var b__92596 = cljs.core.chunk_buffer.call(null,size__4950__auto____$1);
if((function (){var i__92595 = (0);
while(true){
if((i__92595 < size__4950__auto____$1)){
var pt = cljs.core._nth.call(null,c__4949__auto____$1,i__92595);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__92595,s__92594__$1,i__92583,pt,c__4949__auto____$1,size__4950__auto____$1,b__92596,s__92594__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__92595,s__92594__$1,i__92583,pt,c__4949__auto____$1,size__4950__auto____$1,b__92596,s__92594__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__92596,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__92601 = (i__92595 + (1));
i__92595 = G__92601;
continue;
} else {
var G__92602 = (i__92595 + (1));
i__92595 = G__92602;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92596),elevations$util$gpx__GT_tracks_$_iter__92581_$_iter__92593.call(null,cljs.core.chunk_rest.call(null,s__92594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92596),null);
}
} else {
var pt = cljs.core.first.call(null,s__92594__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__92594__$1,i__92583,pt,s__92594__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__92594__$1,i__92583,pt,s__92594__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$util$gpx__GT_tracks_$_iter__92581_$_iter__92593.call(null,cljs.core.rest.call(null,s__92594__$2)));
} else {
var G__92603 = cljs.core.rest.call(null,s__92594__$2);
s__92594__$1 = G__92603;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__92583,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__))
,null,null));
});})(i__92583,track,c__4949__auto__,size__4950__auto__,b__92584,s__92582__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})());

var G__92604 = (i__92583 + (1));
i__92583 = G__92604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92584),elevations$util$gpx__GT_tracks_$_iter__92581.call(null,cljs.core.chunk_rest.call(null,s__92582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92584),null);
}
} else {
var track = cljs.core.first.call(null,s__92582__$2);
return cljs.core.cons.call(null,(function (){var pts = (function (){var iter__4951__auto__ = ((function (track,s__92582__$2,temp__4126__auto__){
return (function elevations$util$gpx__GT_tracks_$_iter__92581_$_iter__92597(s__92598){
return (new cljs.core.LazySeq(null,((function (track,s__92582__$2,temp__4126__auto__){
return (function (){
var s__92598__$1 = s__92598;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__92598__$1);
if(temp__4126__auto____$1){
var s__92598__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__92598__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__92598__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__92600 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__92599 = (0);
while(true){
if((i__92599 < size__4950__auto__)){
var pt = cljs.core._nth.call(null,c__4949__auto__,i__92599);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__92599,s__92598__$1,pt,c__4949__auto__,size__4950__auto__,b__92600,s__92598__$2,temp__4126__auto____$1,track,s__92582__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__92599,s__92598__$1,pt,c__4949__auto__,size__4950__auto__,b__92600,s__92598__$2,temp__4126__auto____$1,track,s__92582__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__92600,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__92605 = (i__92599 + (1));
i__92599 = G__92605;
continue;
} else {
var G__92606 = (i__92599 + (1));
i__92599 = G__92606;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92600),elevations$util$gpx__GT_tracks_$_iter__92581_$_iter__92597.call(null,cljs.core.chunk_rest.call(null,s__92598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92600),null);
}
} else {
var pt = cljs.core.first.call(null,s__92598__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__92598__$1,pt,s__92598__$2,temp__4126__auto____$1,track,s__92582__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__92598__$1,pt,s__92598__$2,temp__4126__auto____$1,track,s__92582__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$util$gpx__GT_tracks_$_iter__92581_$_iter__92597.call(null,cljs.core.rest.call(null,s__92598__$2)));
} else {
var G__92607 = cljs.core.rest.call(null,s__92598__$2);
s__92598__$1 = G__92607;
continue;
}
}
} else {
return null;
}
break;
}
});})(track,s__92582__$2,temp__4126__auto__))
,null,null));
});})(track,s__92582__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.util.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})(),elevations$util$gpx__GT_tracks_$_iter__92581.call(null,cljs.core.rest.call(null,s__92582__$2)));
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

elevations.util.classes.cljs$lang$applyTo = (function (seq92608){
return elevations.util.classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92608));
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