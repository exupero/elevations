// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.gpx');
goog.require('cljs.core');
elevations.gpx.gpx__GT_paths = (function elevations$gpx$gpx__GT_paths(gpx){
var segs = jQuery(gpx).find("trkseg");
var iter__4936__auto__ = ((function (segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__28374(s__28375){
return (new cljs.core.LazySeq(null,((function (segs){
return (function (){
var s__28375__$1 = s__28375;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28375__$1);
if(temp__4126__auto__){
var s__28375__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28375__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__28375__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__28377 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__28376 = (0);
while(true){
if((i__28376 < size__4935__auto__)){
var i = cljs.core._nth.call(null,c__4934__auto__,i__28376);
var seg = jQuery(segs.get(i));
var pts = seg.find("trkpt");
cljs.core.chunk_append.call(null,b__28377,(function (){var iter__4936__auto__ = ((function (i__28376,seg,pts,i,c__4934__auto__,size__4935__auto__,b__28377,s__28375__$2,temp__4126__auto__,segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__28374_$_iter__28386(s__28387){
return (new cljs.core.LazySeq(null,((function (i__28376,seg,pts,i,c__4934__auto__,size__4935__auto__,b__28377,s__28375__$2,temp__4126__auto__,segs){
return (function (){
var s__28387__$1 = s__28387;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28387__$1);
if(temp__4126__auto____$1){
var s__28387__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28387__$2)){
var c__4934__auto____$1 = cljs.core.chunk_first.call(null,s__28387__$2);
var size__4935__auto____$1 = cljs.core.count.call(null,c__4934__auto____$1);
var b__28389 = cljs.core.chunk_buffer.call(null,size__4935__auto____$1);
if((function (){var i__28388 = (0);
while(true){
if((i__28388 < size__4935__auto____$1)){
var j = cljs.core._nth.call(null,c__4934__auto____$1,i__28388);
var pt = jQuery(pts.get(j));
cljs.core.chunk_append.call(null,b__28389,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null));

var G__28394 = (i__28388 + (1));
i__28388 = G__28394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28389),elevations$gpx$gpx__GT_paths_$_iter__28374_$_iter__28386.call(null,cljs.core.chunk_rest.call(null,s__28387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28389),null);
}
} else {
var j = cljs.core.first.call(null,s__28387__$2);
var pt = jQuery(pts.get(j));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null),elevations$gpx$gpx__GT_paths_$_iter__28374_$_iter__28386.call(null,cljs.core.rest.call(null,s__28387__$2)));
}
} else {
return null;
}
break;
}
});})(i__28376,seg,pts,i,c__4934__auto__,size__4935__auto__,b__28377,s__28375__$2,temp__4126__auto__,segs))
,null,null));
});})(i__28376,seg,pts,i,c__4934__auto__,size__4935__auto__,b__28377,s__28375__$2,temp__4126__auto__,segs))
;
return iter__4936__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(pts)));
})());

var G__28395 = (i__28376 + (1));
i__28376 = G__28395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28377),elevations$gpx$gpx__GT_paths_$_iter__28374.call(null,cljs.core.chunk_rest.call(null,s__28375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28377),null);
}
} else {
var i = cljs.core.first.call(null,s__28375__$2);
var seg = jQuery(segs.get(i));
var pts = seg.find("trkpt");
return cljs.core.cons.call(null,(function (){var iter__4936__auto__ = ((function (seg,pts,i,s__28375__$2,temp__4126__auto__,segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__28374_$_iter__28390(s__28391){
return (new cljs.core.LazySeq(null,((function (seg,pts,i,s__28375__$2,temp__4126__auto__,segs){
return (function (){
var s__28391__$1 = s__28391;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28391__$1);
if(temp__4126__auto____$1){
var s__28391__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28391__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__28391__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__28393 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__28392 = (0);
while(true){
if((i__28392 < size__4935__auto__)){
var j = cljs.core._nth.call(null,c__4934__auto__,i__28392);
var pt = jQuery(pts.get(j));
cljs.core.chunk_append.call(null,b__28393,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null));

var G__28396 = (i__28392 + (1));
i__28392 = G__28396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28393),elevations$gpx$gpx__GT_paths_$_iter__28374_$_iter__28390.call(null,cljs.core.chunk_rest.call(null,s__28391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28393),null);
}
} else {
var j = cljs.core.first.call(null,s__28391__$2);
var pt = jQuery(pts.get(j));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null),elevations$gpx$gpx__GT_paths_$_iter__28374_$_iter__28390.call(null,cljs.core.rest.call(null,s__28391__$2)));
}
} else {
return null;
}
break;
}
});})(seg,pts,i,s__28375__$2,temp__4126__auto__,segs))
,null,null));
});})(seg,pts,i,s__28375__$2,temp__4126__auto__,segs))
;
return iter__4936__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(pts)));
})(),elevations$gpx$gpx__GT_paths_$_iter__28374.call(null,cljs.core.rest.call(null,s__28375__$2)));
}
} else {
return null;
}
break;
}
});})(segs))
,null,null));
});})(segs))
;
return iter__4936__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(segs)));
});

//# sourceMappingURL=gpx.js.map