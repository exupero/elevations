// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.core');
goog.require('cljs.core');
goog.require('vdom.elm');
goog.require('goog.dom.xml');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
elevations.core.drop_disable = (function elevations$core$drop_disable(el){
el.addEventListener("dragover",(function (e){
e.preventDefault();

return (e.dataTransfer["dropEffect"] = "none");
}));

return el.addEventListener("drop",(function (e){
return e.preventDefault();
}));
});
elevations.core.drop_enable = (function elevations$core$drop_enable(el,f){
el.addEventListener("dragover",(function (e){
e.stopPropagation();

e.preventDefault();

return (e.dataTransfer["dropEffect"] = "copy");
}));

return el.addEventListener("drop",(function (e){
e.stopPropagation();

e.preventDefault();

var file = (e.dataTransfer.files[(0)]);
var reader = (new FileReader());
(reader["onload"] = f);

return reader.readAsText(file);
}));
});
elevations.core.format_date = d3.time.format("%A, %b %-d, %Y");
elevations.core.gpx__GT_tracks = (function elevations$core$gpx__GT_tracks(doc){
var iter__4936__auto__ = (function elevations$core$gpx__GT_tracks_$_iter__12694(s__12695){
return (new cljs.core.LazySeq(null,(function (){
var s__12695__$1 = s__12695;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12695__$1);
if(temp__4126__auto__){
var s__12695__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12695__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__12695__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__12697 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__12696 = (0);
while(true){
if((i__12696 < size__4935__auto__)){
var track = cljs.core._nth.call(null,c__4934__auto__,i__12696);
cljs.core.chunk_append.call(null,b__12697,(function (){var pts = (function (){var iter__4936__auto__ = ((function (i__12696,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__12694_$_iter__12706(s__12707){
return (new cljs.core.LazySeq(null,((function (i__12696,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__){
return (function (){
var s__12707__$1 = s__12707;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12707__$1);
if(temp__4126__auto____$1){
var s__12707__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12707__$2)){
var c__4934__auto____$1 = cljs.core.chunk_first.call(null,s__12707__$2);
var size__4935__auto____$1 = cljs.core.count.call(null,c__4934__auto____$1);
var b__12709 = cljs.core.chunk_buffer.call(null,size__4935__auto____$1);
if((function (){var i__12708 = (0);
while(true){
if((i__12708 < size__4935__auto____$1)){
var pt = cljs.core._nth.call(null,c__4934__auto____$1,i__12708);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__12708,s__12707__$1,i__12696,pt,c__4934__auto____$1,size__4935__auto____$1,b__12709,s__12707__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__12708,s__12707__$1,i__12696,pt,c__4934__auto____$1,size__4935__auto____$1,b__12709,s__12707__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__12709,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__12714 = (i__12708 + (1));
i__12708 = G__12714;
continue;
} else {
var G__12715 = (i__12708 + (1));
i__12708 = G__12715;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12709),elevations$core$gpx__GT_tracks_$_iter__12694_$_iter__12706.call(null,cljs.core.chunk_rest.call(null,s__12707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12709),null);
}
} else {
var pt = cljs.core.first.call(null,s__12707__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__12707__$1,i__12696,pt,s__12707__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__12707__$1,i__12696,pt,s__12707__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__12694_$_iter__12706.call(null,cljs.core.rest.call(null,s__12707__$2)));
} else {
var G__12716 = cljs.core.rest.call(null,s__12707__$2);
s__12707__$1 = G__12716;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__12696,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__))
,null,null));
});})(i__12696,track,c__4934__auto__,size__4935__auto__,b__12697,s__12695__$2,temp__4126__auto__))
;
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})());

var G__12717 = (i__12696 + (1));
i__12696 = G__12717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12697),elevations$core$gpx__GT_tracks_$_iter__12694.call(null,cljs.core.chunk_rest.call(null,s__12695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12697),null);
}
} else {
var track = cljs.core.first.call(null,s__12695__$2);
return cljs.core.cons.call(null,(function (){var pts = (function (){var iter__4936__auto__ = ((function (track,s__12695__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__12694_$_iter__12710(s__12711){
return (new cljs.core.LazySeq(null,((function (track,s__12695__$2,temp__4126__auto__){
return (function (){
var s__12711__$1 = s__12711;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12711__$1);
if(temp__4126__auto____$1){
var s__12711__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12711__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__12711__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__12713 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__12712 = (0);
while(true){
if((i__12712 < size__4935__auto__)){
var pt = cljs.core._nth.call(null,c__4934__auto__,i__12712);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__12712,s__12711__$1,pt,c__4934__auto__,size__4935__auto__,b__12713,s__12711__$2,temp__4126__auto____$1,track,s__12695__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__12712,s__12711__$1,pt,c__4934__auto__,size__4935__auto__,b__12713,s__12711__$2,temp__4126__auto____$1,track,s__12695__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__12713,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__12718 = (i__12712 + (1));
i__12712 = G__12718;
continue;
} else {
var G__12719 = (i__12712 + (1));
i__12712 = G__12719;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12713),elevations$core$gpx__GT_tracks_$_iter__12694_$_iter__12710.call(null,cljs.core.chunk_rest.call(null,s__12711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12713),null);
}
} else {
var pt = cljs.core.first.call(null,s__12711__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__12711__$1,pt,s__12711__$2,temp__4126__auto____$1,track,s__12695__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__12711__$1,pt,s__12711__$2,temp__4126__auto____$1,track,s__12695__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__12694_$_iter__12710.call(null,cljs.core.rest.call(null,s__12711__$2)));
} else {
var G__12720 = cljs.core.rest.call(null,s__12711__$2);
s__12711__$1 = G__12720;
continue;
}
}
} else {
return null;
}
break;
}
});})(track,s__12695__$2,temp__4126__auto__))
,null,null));
});})(track,s__12695__$2,temp__4126__auto__))
;
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})(),elevations$core$gpx__GT_tracks_$_iter__12694.call(null,cljs.core.rest.call(null,s__12695__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,goog.dom.xml.selectNodes(doc,"//*[local-name(.)='trkseg']")));
});
elevations.core.ui_tracks = (function elevations$core$ui_tracks(p__12721,actions){
var map__12727 = p__12721;
var map__12727__$1 = ((cljs.core.seq_QMARK_.call(null,map__12727))?cljs.core.apply.call(null,cljs.core.hash_map,map__12727):map__12727);
var selected = cljs.core.get.call(null,map__12727__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var tracks = cljs.core.get.call(null,map__12727__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tracks"], null),(function (){var iter__4936__auto__ = ((function (map__12727,map__12727__$1,selected,tracks){
return (function elevations$core$ui_tracks_$_iter__12728(s__12729){
return (new cljs.core.LazySeq(null,((function (map__12727,map__12727__$1,selected,tracks){
return (function (){
var s__12729__$1 = s__12729;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12729__$1);
if(temp__4126__auto__){
var s__12729__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12729__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__12729__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__12731 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__12730 = (0);
while(true){
if((i__12730 < size__4935__auto__)){
var track = cljs.core._nth.call(null,c__4934__auto__,i__12730);
cljs.core.chunk_append.call(null,b__12731,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null));

var G__12732 = (i__12730 + (1));
i__12730 = G__12732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12731),elevations$core$ui_tracks_$_iter__12728.call(null,cljs.core.chunk_rest.call(null,s__12729__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12731),null);
}
} else {
var track = cljs.core.first.call(null,s__12729__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),elevations$core$ui_tracks_$_iter__12728.call(null,cljs.core.rest.call(null,s__12729__$2)));
}
} else {
return null;
}
break;
}
});})(map__12727,map__12727__$1,selected,tracks))
,null,null));
});})(map__12727,map__12727__$1,selected,tracks))
;
return iter__4936__auto__.call(null,tracks);
})()], null);
});
elevations.core.ui = (function elevations$core$ui(actions){
return (function (p__12735){
var map__12736 = p__12735;
var map__12736__$1 = ((cljs.core.seq_QMARK_.call(null,map__12736))?cljs.core.apply.call(null,cljs.core.hash_map,map__12736):map__12736);
var model = map__12736__$1;
var tracks = cljs.core.get.call(null,map__12736__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,((cljs.core.seq_QMARK_.call(null,tracks))?elevations.core.ui_tracks.call(null,model,actions):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-gpx"], null),"Drop a GPX file here"], null))], null);
});
});
elevations.core.step = (function elevations$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e12747){if((e12747 instanceof Error)){
var e__10199__auto__ = e12747;
if((e__10199__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__12745 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__12745,new cljs.core.Keyword(null,"load-tracks","load-tracks",715627313))){
var tracks = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),tracks);
} else {
throw cljs.core.match.backtrack;

}
}catch (e12749){if((e12749 instanceof Error)){
var e__10199__auto____$1 = e12749;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__12745 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__12745,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track);
} else {
throw cljs.core.match.backtrack;

}
}catch (e12750){if((e12750 instanceof Error)){
var e__10199__auto____$2 = e12750;
if((e__10199__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10199__auto____$2;
}
} else {
throw e12750;

}
}} else {
throw e__10199__auto____$1;
}
} else {
throw e12749;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e12748){if((e12748 instanceof Error)){
var e__10199__auto____$1 = e12748;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10199__auto____$1;
}
} else {
throw e12748;

}
}} else {
throw e__10199__auto__;
}
} else {
throw e12747;

}
}});
var c__6473__auto___12781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___12781){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___12781){
return (function (state_12770){
var state_val_12771 = (state_12770[(1)]);
if((state_val_12771 === (2))){
var inst_12754 = (state_12770[(7)]);
var inst_12751 = (state_12770[(8)]);
var inst_12755 = (state_12770[(9)]);
var inst_12764 = (state_12770[(2)]);
var inst_12765 = elevations.core.drop_disable.call(null,window);
var inst_12766 = document.getElementById("drop-gpx");
var inst_12767 = (function (){var models = inst_12755;
var initial_model = inst_12754;
var actions = inst_12751;
return ((function (models,initial_model,actions,inst_12754,inst_12751,inst_12755,inst_12764,inst_12765,inst_12766,state_val_12771,c__6473__auto___12781){
return (function (file){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tracks","load-tracks",715627313),elevations.core.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(file.target.result))], null));
});
;})(models,initial_model,actions,inst_12754,inst_12751,inst_12755,inst_12764,inst_12765,inst_12766,state_val_12771,c__6473__auto___12781))
})();
var inst_12768 = elevations.core.drop_enable.call(null,inst_12766,inst_12767);
var state_12770__$1 = (function (){var statearr_12772 = state_12770;
(statearr_12772[(10)] = inst_12765);

(statearr_12772[(11)] = inst_12764);

return statearr_12772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12770__$1,inst_12768);
} else {
if((state_val_12771 === (1))){
var inst_12754 = (state_12770[(7)]);
var inst_12751 = (state_12770[(8)]);
var inst_12755 = (state_12770[(9)]);
var inst_12751__$1 = cljs.core.async.chan.call(null);
var inst_12752 = [new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764)];
var inst_12753 = [null,null];
var inst_12754__$1 = cljs.core.PersistentHashMap.fromArrays(inst_12752,inst_12753);
var inst_12755__$1 = vdom.elm.foldp.call(null,elevations.core.step,inst_12754__$1,inst_12751__$1);
var inst_12756 = elevations.core.ui.call(null,inst_12751__$1);
var inst_12757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12758 = [inst_12755__$1];
var inst_12759 = (new cljs.core.PersistentVector(null,1,(5),inst_12757,inst_12758,null));
var inst_12760 = cljs.core.async.map.call(null,inst_12756,inst_12759);
var inst_12761 = vdom.elm.render_BANG_.call(null,inst_12760,document.body);
var inst_12762 = cljs.core.async.timeout.call(null,(5));
var state_12770__$1 = (function (){var statearr_12773 = state_12770;
(statearr_12773[(7)] = inst_12754__$1);

(statearr_12773[(8)] = inst_12751__$1);

(statearr_12773[(9)] = inst_12755__$1);

(statearr_12773[(12)] = inst_12761);

return statearr_12773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12770__$1,(2),inst_12762);
} else {
return null;
}
}
});})(c__6473__auto___12781))
;
return ((function (switch__6452__auto__,c__6473__auto___12781){
return (function() {
var elevations$core$state_machine__6453__auto__ = null;
var elevations$core$state_machine__6453__auto____0 = (function (){
var statearr_12777 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12777[(0)] = elevations$core$state_machine__6453__auto__);

(statearr_12777[(1)] = (1));

return statearr_12777;
});
var elevations$core$state_machine__6453__auto____1 = (function (state_12770){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_12770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e12778){if((e12778 instanceof Object)){
var ex__6456__auto__ = e12778;
var statearr_12779_12782 = state_12770;
(statearr_12779_12782[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12783 = state_12770;
state_12770 = G__12783;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
elevations$core$state_machine__6453__auto__ = function(state_12770){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6453__auto____0.call(this);
case 1:
return elevations$core$state_machine__6453__auto____1.call(this,state_12770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6453__auto____0;
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6453__auto____1;
return elevations$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___12781))
})();
var state__6475__auto__ = (function (){var statearr_12780 = f__6474__auto__.call(null);
(statearr_12780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___12781);

return statearr_12780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___12781))
);


//# sourceMappingURL=core.js.map