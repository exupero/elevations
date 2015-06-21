// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.gpx');
goog.require('cljs.core');
elevations.gpx.gpx__GT_paths = (function elevations$gpx$gpx__GT_paths(gpx){
var segs = jQuery(gpx).find("trkseg");
var iter__4936__auto__ = ((function (segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__30452(s__30453){
return (new cljs.core.LazySeq(null,((function (segs){
return (function (){
var s__30453__$1 = s__30453;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30453__$1);
if(temp__4126__auto__){
var s__30453__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30453__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__30453__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__30455 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__30454 = (0);
while(true){
if((i__30454 < size__4935__auto__)){
var i = cljs.core._nth.call(null,c__4934__auto__,i__30454);
var seg = jQuery(segs.get(i));
var pts = seg.find("trkpt");
cljs.core.chunk_append.call(null,b__30455,(function (){var iter__4936__auto__ = ((function (i__30454,seg,pts,i,c__4934__auto__,size__4935__auto__,b__30455,s__30453__$2,temp__4126__auto__,segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__30452_$_iter__30464(s__30465){
return (new cljs.core.LazySeq(null,((function (i__30454,seg,pts,i,c__4934__auto__,size__4935__auto__,b__30455,s__30453__$2,temp__4126__auto__,segs){
return (function (){
var s__30465__$1 = s__30465;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30465__$1);
if(temp__4126__auto____$1){
var s__30465__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30465__$2)){
var c__4934__auto____$1 = cljs.core.chunk_first.call(null,s__30465__$2);
var size__4935__auto____$1 = cljs.core.count.call(null,c__4934__auto____$1);
var b__30467 = cljs.core.chunk_buffer.call(null,size__4935__auto____$1);
if((function (){var i__30466 = (0);
while(true){
if((i__30466 < size__4935__auto____$1)){
var j = cljs.core._nth.call(null,c__4934__auto____$1,i__30466);
var pt = jQuery(pts.get(j));
cljs.core.chunk_append.call(null,b__30467,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null));

var G__30472 = (i__30466 + (1));
i__30466 = G__30472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30467),elevations$gpx$gpx__GT_paths_$_iter__30452_$_iter__30464.call(null,cljs.core.chunk_rest.call(null,s__30465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30467),null);
}
} else {
var j = cljs.core.first.call(null,s__30465__$2);
var pt = jQuery(pts.get(j));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null),elevations$gpx$gpx__GT_paths_$_iter__30452_$_iter__30464.call(null,cljs.core.rest.call(null,s__30465__$2)));
}
} else {
return null;
}
break;
}
});})(i__30454,seg,pts,i,c__4934__auto__,size__4935__auto__,b__30455,s__30453__$2,temp__4126__auto__,segs))
,null,null));
});})(i__30454,seg,pts,i,c__4934__auto__,size__4935__auto__,b__30455,s__30453__$2,temp__4126__auto__,segs))
;
return iter__4936__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(pts)));
})());

var G__30473 = (i__30454 + (1));
i__30454 = G__30473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30455),elevations$gpx$gpx__GT_paths_$_iter__30452.call(null,cljs.core.chunk_rest.call(null,s__30453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30455),null);
}
} else {
var i = cljs.core.first.call(null,s__30453__$2);
var seg = jQuery(segs.get(i));
var pts = seg.find("trkpt");
return cljs.core.cons.call(null,(function (){var iter__4936__auto__ = ((function (seg,pts,i,s__30453__$2,temp__4126__auto__,segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__30452_$_iter__30468(s__30469){
return (new cljs.core.LazySeq(null,((function (seg,pts,i,s__30453__$2,temp__4126__auto__,segs){
return (function (){
var s__30469__$1 = s__30469;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__30469__$1);
if(temp__4126__auto____$1){
var s__30469__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30469__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__30469__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__30471 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__30470 = (0);
while(true){
if((i__30470 < size__4935__auto__)){
var j = cljs.core._nth.call(null,c__4934__auto__,i__30470);
var pt = jQuery(pts.get(j));
cljs.core.chunk_append.call(null,b__30471,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null));

var G__30474 = (i__30470 + (1));
i__30470 = G__30474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30471),elevations$gpx$gpx__GT_paths_$_iter__30452_$_iter__30468.call(null,cljs.core.chunk_rest.call(null,s__30469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30471),null);
}
} else {
var j = cljs.core.first.call(null,s__30469__$2);
var pt = jQuery(pts.get(j));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null),elevations$gpx$gpx__GT_paths_$_iter__30452_$_iter__30468.call(null,cljs.core.rest.call(null,s__30469__$2)));
}
} else {
return null;
}
break;
}
});})(seg,pts,i,s__30453__$2,temp__4126__auto__,segs))
,null,null));
});})(seg,pts,i,s__30453__$2,temp__4126__auto__,segs))
;
return iter__4936__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(pts)));
})(),elevations$gpx$gpx__GT_paths_$_iter__30452.call(null,cljs.core.rest.call(null,s__30453__$2)));
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