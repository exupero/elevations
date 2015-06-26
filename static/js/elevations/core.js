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
var iter__4936__auto__ = (function elevations$core$gpx__GT_tracks_$_iter__32422(s__32423){
return (new cljs.core.LazySeq(null,(function (){
var s__32423__$1 = s__32423;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32423__$1);
if(temp__4126__auto__){
var s__32423__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32423__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__32423__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__32425 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__32424 = (0);
while(true){
if((i__32424 < size__4935__auto__)){
var track = cljs.core._nth.call(null,c__4934__auto__,i__32424);
cljs.core.chunk_append.call(null,b__32425,(function (){var pts = (function (){var iter__4936__auto__ = ((function (i__32424,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__32422_$_iter__32434(s__32435){
return (new cljs.core.LazySeq(null,((function (i__32424,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__){
return (function (){
var s__32435__$1 = s__32435;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32435__$1);
if(temp__4126__auto____$1){
var s__32435__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32435__$2)){
var c__4934__auto____$1 = cljs.core.chunk_first.call(null,s__32435__$2);
var size__4935__auto____$1 = cljs.core.count.call(null,c__4934__auto____$1);
var b__32437 = cljs.core.chunk_buffer.call(null,size__4935__auto____$1);
if((function (){var i__32436 = (0);
while(true){
if((i__32436 < size__4935__auto____$1)){
var pt = cljs.core._nth.call(null,c__4934__auto____$1,i__32436);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__32436,s__32435__$1,i__32424,pt,c__4934__auto____$1,size__4935__auto____$1,b__32437,s__32435__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__32436,s__32435__$1,i__32424,pt,c__4934__auto____$1,size__4935__auto____$1,b__32437,s__32435__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__32437,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__32442 = (i__32436 + (1));
i__32436 = G__32442;
continue;
} else {
var G__32443 = (i__32436 + (1));
i__32436 = G__32443;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32437),elevations$core$gpx__GT_tracks_$_iter__32422_$_iter__32434.call(null,cljs.core.chunk_rest.call(null,s__32435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32437),null);
}
} else {
var pt = cljs.core.first.call(null,s__32435__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__32435__$1,i__32424,pt,s__32435__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__32435__$1,i__32424,pt,s__32435__$2,temp__4126__auto____$1,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__32422_$_iter__32434.call(null,cljs.core.rest.call(null,s__32435__$2)));
} else {
var G__32444 = cljs.core.rest.call(null,s__32435__$2);
s__32435__$1 = G__32444;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__32424,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__))
,null,null));
});})(i__32424,track,c__4934__auto__,size__4935__auto__,b__32425,s__32423__$2,temp__4126__auto__))
;
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})());

var G__32445 = (i__32424 + (1));
i__32424 = G__32445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32425),elevations$core$gpx__GT_tracks_$_iter__32422.call(null,cljs.core.chunk_rest.call(null,s__32423__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32425),null);
}
} else {
var track = cljs.core.first.call(null,s__32423__$2);
return cljs.core.cons.call(null,(function (){var pts = (function (){var iter__4936__auto__ = ((function (track,s__32423__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__32422_$_iter__32438(s__32439){
return (new cljs.core.LazySeq(null,((function (track,s__32423__$2,temp__4126__auto__){
return (function (){
var s__32439__$1 = s__32439;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32439__$1);
if(temp__4126__auto____$1){
var s__32439__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32439__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__32439__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__32441 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__32440 = (0);
while(true){
if((i__32440 < size__4935__auto__)){
var pt = cljs.core._nth.call(null,c__4934__auto__,i__32440);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__32440,s__32439__$1,pt,c__4934__auto__,size__4935__auto__,b__32441,s__32439__$2,temp__4126__auto____$1,track,s__32423__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__32440,s__32439__$1,pt,c__4934__auto__,size__4935__auto__,b__32441,s__32439__$2,temp__4126__auto____$1,track,s__32423__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__32441,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__32446 = (i__32440 + (1));
i__32440 = G__32446;
continue;
} else {
var G__32447 = (i__32440 + (1));
i__32440 = G__32447;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32441),elevations$core$gpx__GT_tracks_$_iter__32422_$_iter__32438.call(null,cljs.core.chunk_rest.call(null,s__32439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32441),null);
}
} else {
var pt = cljs.core.first.call(null,s__32439__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__32439__$1,pt,s__32439__$2,temp__4126__auto____$1,track,s__32423__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__32439__$1,pt,s__32439__$2,temp__4126__auto____$1,track,s__32423__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__32422_$_iter__32438.call(null,cljs.core.rest.call(null,s__32439__$2)));
} else {
var G__32448 = cljs.core.rest.call(null,s__32439__$2);
s__32439__$1 = G__32448;
continue;
}
}
} else {
return null;
}
break;
}
});})(track,s__32423__$2,temp__4126__auto__))
,null,null));
});})(track,s__32423__$2,temp__4126__auto__))
;
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})(),elevations$core$gpx__GT_tracks_$_iter__32422.call(null,cljs.core.rest.call(null,s__32423__$2)));
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
elevations.core.init_map = (function elevations$core$init_map(id){
var map_pane = L.map(id);
var overlay = map_pane.getPanes().overlayPane;
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map_pane);

map_pane.setView([37.8,-96.9],(4));

return map_pane;
});
elevations.core.ui_tracks = (function elevations$core$ui_tracks(p__32449,actions){
var map__32455 = p__32449;
var map__32455__$1 = ((cljs.core.seq_QMARK_.call(null,map__32455))?cljs.core.apply.call(null,cljs.core.hash_map,map__32455):map__32455);
var selected = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var tracks = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tracks"], null),(function (){var iter__4936__auto__ = ((function (map__32455,map__32455__$1,selected,tracks){
return (function elevations$core$ui_tracks_$_iter__32456(s__32457){
return (new cljs.core.LazySeq(null,((function (map__32455,map__32455__$1,selected,tracks){
return (function (){
var s__32457__$1 = s__32457;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32457__$1);
if(temp__4126__auto__){
var s__32457__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32457__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__32457__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__32459 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__32458 = (0);
while(true){
if((i__32458 < size__4935__auto__)){
var track = cljs.core._nth.call(null,c__4934__auto__,i__32458);
cljs.core.chunk_append.call(null,b__32459,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null));

var G__32460 = (i__32458 + (1));
i__32458 = G__32460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32459),elevations$core$ui_tracks_$_iter__32456.call(null,cljs.core.chunk_rest.call(null,s__32457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32459),null);
}
} else {
var track = cljs.core.first.call(null,s__32457__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),elevations$core$ui_tracks_$_iter__32456.call(null,cljs.core.rest.call(null,s__32457__$2)));
}
} else {
return null;
}
break;
}
});})(map__32455,map__32455__$1,selected,tracks))
,null,null));
});})(map__32455,map__32455__$1,selected,tracks))
;
return iter__4936__auto__.call(null,tracks);
})()], null);
});
elevations.core.ui = (function elevations$core$ui(actions){
return (function (p__32463){
var map__32464 = p__32463;
var map__32464__$1 = ((cljs.core.seq_QMARK_.call(null,map__32464))?cljs.core.apply.call(null,cljs.core.hash_map,map__32464):map__32464);
var model = map__32464__$1;
var tracks = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),((cljs.core.seq_QMARK_.call(null,tracks))?elevations.core.ui_tracks.call(null,model,actions):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-gpx"], null),"Drop a GPX file here"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null)], null)], null);
});
});
elevations.core.step = (function elevations$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e32475){if((e32475 instanceof Error)){
var e__10199__auto__ = e32475;
if((e__10199__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__32473 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__32473,new cljs.core.Keyword(null,"load-tracks","load-tracks",715627313))){
var tracks = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),tracks);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32477){if((e32477 instanceof Error)){
var e__10199__auto____$1 = e32477;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__32473 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__32473,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track);
} else {
throw cljs.core.match.backtrack;

}
}catch (e32478){if((e32478 instanceof Error)){
var e__10199__auto____$2 = e32478;
if((e__10199__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10199__auto____$2;
}
} else {
throw e32478;

}
}} else {
throw e__10199__auto____$1;
}
} else {
throw e32477;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e32476){if((e32476 instanceof Error)){
var e__10199__auto____$1 = e32476;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10199__auto____$1;
}
} else {
throw e32476;

}
}} else {
throw e__10199__auto__;
}
} else {
throw e32475;

}
}});
var c__6473__auto___32510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___32510){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___32510){
return (function (state_32499){
var state_val_32500 = (state_32499[(1)]);
if((state_val_32500 === (2))){
var inst_32483 = (state_32499[(7)]);
var inst_32479 = (state_32499[(8)]);
var inst_32482 = (state_32499[(9)]);
var inst_32492 = (state_32499[(2)]);
var inst_32493 = elevations.core.drop_disable.call(null,window);
var inst_32494 = document.getElementById("drop-gpx");
var inst_32495 = (function (){var models = inst_32483;
var initial_model = inst_32482;
var actions = inst_32479;
return ((function (models,initial_model,actions,inst_32483,inst_32479,inst_32482,inst_32492,inst_32493,inst_32494,state_val_32500,c__6473__auto___32510){
return (function (file){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tracks","load-tracks",715627313),elevations.core.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(file.target.result))], null));
});
;})(models,initial_model,actions,inst_32483,inst_32479,inst_32482,inst_32492,inst_32493,inst_32494,state_val_32500,c__6473__auto___32510))
})();
var inst_32496 = elevations.core.drop_enable.call(null,inst_32494,inst_32495);
var inst_32497 = elevations.core.init_map.call(null,"map");
var state_32499__$1 = (function (){var statearr_32501 = state_32499;
(statearr_32501[(10)] = inst_32492);

(statearr_32501[(11)] = inst_32493);

(statearr_32501[(12)] = inst_32496);

return statearr_32501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32499__$1,inst_32497);
} else {
if((state_val_32500 === (1))){
var inst_32483 = (state_32499[(7)]);
var inst_32479 = (state_32499[(8)]);
var inst_32482 = (state_32499[(9)]);
var inst_32479__$1 = cljs.core.async.chan.call(null);
var inst_32480 = [new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764)];
var inst_32481 = [null,null];
var inst_32482__$1 = cljs.core.PersistentHashMap.fromArrays(inst_32480,inst_32481);
var inst_32483__$1 = vdom.elm.foldp.call(null,elevations.core.step,inst_32482__$1,inst_32479__$1);
var inst_32484 = elevations.core.ui.call(null,inst_32479__$1);
var inst_32485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32486 = [inst_32483__$1];
var inst_32487 = (new cljs.core.PersistentVector(null,1,(5),inst_32485,inst_32486,null));
var inst_32488 = cljs.core.async.map.call(null,inst_32484,inst_32487);
var inst_32489 = vdom.elm.render_BANG_.call(null,inst_32488,document.body);
var inst_32490 = cljs.core.async.timeout.call(null,(5));
var state_32499__$1 = (function (){var statearr_32502 = state_32499;
(statearr_32502[(7)] = inst_32483__$1);

(statearr_32502[(8)] = inst_32479__$1);

(statearr_32502[(13)] = inst_32489);

(statearr_32502[(9)] = inst_32482__$1);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32499__$1,(2),inst_32490);
} else {
return null;
}
}
});})(c__6473__auto___32510))
;
return ((function (switch__6452__auto__,c__6473__auto___32510){
return (function() {
var elevations$core$state_machine__6453__auto__ = null;
var elevations$core$state_machine__6453__auto____0 = (function (){
var statearr_32506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32506[(0)] = elevations$core$state_machine__6453__auto__);

(statearr_32506[(1)] = (1));

return statearr_32506;
});
var elevations$core$state_machine__6453__auto____1 = (function (state_32499){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_32499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e32507){if((e32507 instanceof Object)){
var ex__6456__auto__ = e32507;
var statearr_32508_32511 = state_32499;
(statearr_32508_32511[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_32499;
state_32499 = G__32512;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
elevations$core$state_machine__6453__auto__ = function(state_32499){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6453__auto____0.call(this);
case 1:
return elevations$core$state_machine__6453__auto____1.call(this,state_32499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6453__auto____0;
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6453__auto____1;
return elevations$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___32510))
})();
var state__6475__auto__ = (function (){var statearr_32509 = f__6474__auto__.call(null);
(statearr_32509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___32510);

return statearr_32509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___32510))
);


//# sourceMappingURL=core.js.map