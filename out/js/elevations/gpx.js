// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.gpx');
goog.require('cljs.core');
elevations.gpx.gpx__GT_paths = (function elevations$gpx$gpx__GT_paths(gpx){
var segs = jQuery(gpx).find("trkseg");
var iter__4951__auto__ = ((function (segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__8732(s__8733){
return (new cljs.core.LazySeq(null,((function (segs){
return (function (){
var s__8733__$1 = s__8733;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8733__$1);
if(temp__4126__auto__){
var s__8733__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8733__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__8733__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__8735 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__8734 = (0);
while(true){
if((i__8734 < size__4950__auto__)){
var i = cljs.core._nth.call(null,c__4949__auto__,i__8734);
var seg = jQuery(segs.get(i));
var pts = seg.find("trkpt");
cljs.core.chunk_append.call(null,b__8735,(function (){var iter__4951__auto__ = ((function (i__8734,seg,pts,i,c__4949__auto__,size__4950__auto__,b__8735,s__8733__$2,temp__4126__auto__,segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__8732_$_iter__8744(s__8745){
return (new cljs.core.LazySeq(null,((function (i__8734,seg,pts,i,c__4949__auto__,size__4950__auto__,b__8735,s__8733__$2,temp__4126__auto__,segs){
return (function (){
var s__8745__$1 = s__8745;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__8745__$1);
if(temp__4126__auto____$1){
var s__8745__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8745__$2)){
var c__4949__auto____$1 = cljs.core.chunk_first.call(null,s__8745__$2);
var size__4950__auto____$1 = cljs.core.count.call(null,c__4949__auto____$1);
var b__8747 = cljs.core.chunk_buffer.call(null,size__4950__auto____$1);
if((function (){var i__8746 = (0);
while(true){
if((i__8746 < size__4950__auto____$1)){
var j = cljs.core._nth.call(null,c__4949__auto____$1,i__8746);
var pt = jQuery(pts.get(j));
cljs.core.chunk_append.call(null,b__8747,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null));

var G__8752 = (i__8746 + (1));
i__8746 = G__8752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8747),elevations$gpx$gpx__GT_paths_$_iter__8732_$_iter__8744.call(null,cljs.core.chunk_rest.call(null,s__8745__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8747),null);
}
} else {
var j = cljs.core.first.call(null,s__8745__$2);
var pt = jQuery(pts.get(j));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null),elevations$gpx$gpx__GT_paths_$_iter__8732_$_iter__8744.call(null,cljs.core.rest.call(null,s__8745__$2)));
}
} else {
return null;
}
break;
}
});})(i__8734,seg,pts,i,c__4949__auto__,size__4950__auto__,b__8735,s__8733__$2,temp__4126__auto__,segs))
,null,null));
});})(i__8734,seg,pts,i,c__4949__auto__,size__4950__auto__,b__8735,s__8733__$2,temp__4126__auto__,segs))
;
return iter__4951__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(pts)));
})());

var G__8753 = (i__8734 + (1));
i__8734 = G__8753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8735),elevations$gpx$gpx__GT_paths_$_iter__8732.call(null,cljs.core.chunk_rest.call(null,s__8733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8735),null);
}
} else {
var i = cljs.core.first.call(null,s__8733__$2);
var seg = jQuery(segs.get(i));
var pts = seg.find("trkpt");
return cljs.core.cons.call(null,(function (){var iter__4951__auto__ = ((function (seg,pts,i,s__8733__$2,temp__4126__auto__,segs){
return (function elevations$gpx$gpx__GT_paths_$_iter__8732_$_iter__8748(s__8749){
return (new cljs.core.LazySeq(null,((function (seg,pts,i,s__8733__$2,temp__4126__auto__,segs){
return (function (){
var s__8749__$1 = s__8749;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__8749__$1);
if(temp__4126__auto____$1){
var s__8749__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8749__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__8749__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__8751 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__8750 = (0);
while(true){
if((i__8750 < size__4950__auto__)){
var j = cljs.core._nth.call(null,c__4949__auto__,i__8750);
var pt = jQuery(pts.get(j));
cljs.core.chunk_append.call(null,b__8751,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null));

var G__8754 = (i__8750 + (1));
i__8750 = G__8754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8751),elevations$gpx$gpx__GT_paths_$_iter__8732_$_iter__8748.call(null,cljs.core.chunk_rest.call(null,s__8749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8751),null);
}
} else {
var j = cljs.core.first.call(null,s__8749__$2);
var pt = jQuery(pts.get(j));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.attr("lat")),new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.attr("lon")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(pt.find("ele").text()),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(pt.find("time").text()))], null),elevations$gpx$gpx__GT_paths_$_iter__8732_$_iter__8748.call(null,cljs.core.rest.call(null,s__8749__$2)));
}
} else {
return null;
}
break;
}
});})(seg,pts,i,s__8733__$2,temp__4126__auto__,segs))
,null,null));
});})(seg,pts,i,s__8733__$2,temp__4126__auto__,segs))
;
return iter__4951__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(pts)));
})(),elevations$gpx$gpx__GT_paths_$_iter__8732.call(null,cljs.core.rest.call(null,s__8733__$2)));
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
return iter__4951__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(segs)));
});

//# sourceMappingURL=gpx.js.map