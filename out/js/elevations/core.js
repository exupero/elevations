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
var iter__4951__auto__ = (function elevations$core$gpx__GT_tracks_$_iter__13353(s__13354){
return (new cljs.core.LazySeq(null,(function (){
var s__13354__$1 = s__13354;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13354__$1);
if(temp__4126__auto__){
var s__13354__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13354__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__13354__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__13356 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__13355 = (0);
while(true){
if((i__13355 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__13355);
cljs.core.chunk_append.call(null,b__13356,(function (){var pts = (function (){var iter__4951__auto__ = ((function (i__13355,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__13353_$_iter__13365(s__13366){
return (new cljs.core.LazySeq(null,((function (i__13355,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__){
return (function (){
var s__13366__$1 = s__13366;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13366__$1);
if(temp__4126__auto____$1){
var s__13366__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13366__$2)){
var c__4949__auto____$1 = cljs.core.chunk_first.call(null,s__13366__$2);
var size__4950__auto____$1 = cljs.core.count.call(null,c__4949__auto____$1);
var b__13368 = cljs.core.chunk_buffer.call(null,size__4950__auto____$1);
if((function (){var i__13367 = (0);
while(true){
if((i__13367 < size__4950__auto____$1)){
var pt = cljs.core._nth.call(null,c__4949__auto____$1,i__13367);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__13367,s__13366__$1,i__13355,pt,c__4949__auto____$1,size__4950__auto____$1,b__13368,s__13366__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__13367,s__13366__$1,i__13355,pt,c__4949__auto____$1,size__4950__auto____$1,b__13368,s__13366__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__13368,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__13373 = (i__13367 + (1));
i__13367 = G__13373;
continue;
} else {
var G__13374 = (i__13367 + (1));
i__13367 = G__13374;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13368),elevations$core$gpx__GT_tracks_$_iter__13353_$_iter__13365.call(null,cljs.core.chunk_rest.call(null,s__13366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13368),null);
}
} else {
var pt = cljs.core.first.call(null,s__13366__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__13366__$1,i__13355,pt,s__13366__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__13366__$1,i__13355,pt,s__13366__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__13353_$_iter__13365.call(null,cljs.core.rest.call(null,s__13366__$2)));
} else {
var G__13375 = cljs.core.rest.call(null,s__13366__$2);
s__13366__$1 = G__13375;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__13355,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__))
,null,null));
});})(i__13355,track,c__4949__auto__,size__4950__auto__,b__13356,s__13354__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})());

var G__13376 = (i__13355 + (1));
i__13355 = G__13376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13356),elevations$core$gpx__GT_tracks_$_iter__13353.call(null,cljs.core.chunk_rest.call(null,s__13354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13356),null);
}
} else {
var track = cljs.core.first.call(null,s__13354__$2);
return cljs.core.cons.call(null,(function (){var pts = (function (){var iter__4951__auto__ = ((function (track,s__13354__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__13353_$_iter__13369(s__13370){
return (new cljs.core.LazySeq(null,((function (track,s__13354__$2,temp__4126__auto__){
return (function (){
var s__13370__$1 = s__13370;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13370__$1);
if(temp__4126__auto____$1){
var s__13370__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13370__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__13370__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__13372 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__13371 = (0);
while(true){
if((i__13371 < size__4950__auto__)){
var pt = cljs.core._nth.call(null,c__4949__auto__,i__13371);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__13371,s__13370__$1,pt,c__4949__auto__,size__4950__auto__,b__13372,s__13370__$2,temp__4126__auto____$1,track,s__13354__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__13371,s__13370__$1,pt,c__4949__auto__,size__4950__auto__,b__13372,s__13370__$2,temp__4126__auto____$1,track,s__13354__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__13372,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__13377 = (i__13371 + (1));
i__13371 = G__13377;
continue;
} else {
var G__13378 = (i__13371 + (1));
i__13371 = G__13378;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13372),elevations$core$gpx__GT_tracks_$_iter__13353_$_iter__13369.call(null,cljs.core.chunk_rest.call(null,s__13370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13372),null);
}
} else {
var pt = cljs.core.first.call(null,s__13370__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__13370__$1,pt,s__13370__$2,temp__4126__auto____$1,track,s__13354__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__13370__$1,pt,s__13370__$2,temp__4126__auto____$1,track,s__13354__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__13353_$_iter__13369.call(null,cljs.core.rest.call(null,s__13370__$2)));
} else {
var G__13379 = cljs.core.rest.call(null,s__13370__$2);
s__13370__$1 = G__13379;
continue;
}
}
} else {
return null;
}
break;
}
});})(track,s__13354__$2,temp__4126__auto__))
,null,null));
});})(track,s__13354__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})(),elevations$core$gpx__GT_tracks_$_iter__13353.call(null,cljs.core.rest.call(null,s__13354__$2)));
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
elevations.core.init_map = (function elevations$core$init_map(id){
var map_pane = L.map(id);
var overlay = map_pane.getPanes().overlayPane;
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map_pane);

map_pane.setView([37.8,-96.9],(4));

return map_pane;
});
elevations.core.ui_tracks = (function elevations$core$ui_tracks(p__13380,actions){
var map__13386 = p__13380;
var map__13386__$1 = ((cljs.core.seq_QMARK_.call(null,map__13386))?cljs.core.apply.call(null,cljs.core.hash_map,map__13386):map__13386);
var selected = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var tracks = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tracks"], null),(function (){var iter__4951__auto__ = ((function (map__13386,map__13386__$1,selected,tracks){
return (function elevations$core$ui_tracks_$_iter__13387(s__13388){
return (new cljs.core.LazySeq(null,((function (map__13386,map__13386__$1,selected,tracks){
return (function (){
var s__13388__$1 = s__13388;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13388__$1);
if(temp__4126__auto__){
var s__13388__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13388__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__13388__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__13390 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__13389 = (0);
while(true){
if((i__13389 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__13389);
cljs.core.chunk_append.call(null,b__13390,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null));

var G__13391 = (i__13389 + (1));
i__13389 = G__13391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13390),elevations$core$ui_tracks_$_iter__13387.call(null,cljs.core.chunk_rest.call(null,s__13388__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13390),null);
}
} else {
var track = cljs.core.first.call(null,s__13388__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),elevations$core$ui_tracks_$_iter__13387.call(null,cljs.core.rest.call(null,s__13388__$2)));
}
} else {
return null;
}
break;
}
});})(map__13386,map__13386__$1,selected,tracks))
,null,null));
});})(map__13386,map__13386__$1,selected,tracks))
;
return iter__4951__auto__.call(null,tracks);
})()], null);
});
elevations.core.ui = (function elevations$core$ui(actions){
return (function (p__13394){
var map__13395 = p__13394;
var map__13395__$1 = ((cljs.core.seq_QMARK_.call(null,map__13395))?cljs.core.apply.call(null,cljs.core.hash_map,map__13395):map__13395);
var model = map__13395__$1;
var tracks = cljs.core.get.call(null,map__13395__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),((cljs.core.seq_QMARK_.call(null,tracks))?elevations.core.ui_tracks.call(null,model,actions):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-gpx"], null),"Drop a GPX file here"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null)], null)], null);
});
});
elevations.core.step = (function elevations$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e13406){if((e13406 instanceof Error)){
var e__12538__auto__ = e13406;
if((e__12538__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__13404 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__13404,new cljs.core.Keyword(null,"load-tracks","load-tracks",715627313))){
var tracks = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),tracks);
} else {
throw cljs.core.match.backtrack;

}
}catch (e13408){if((e13408 instanceof Error)){
var e__12538__auto____$1 = e13408;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__13404 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__13404,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track);
} else {
throw cljs.core.match.backtrack;

}
}catch (e13409){if((e13409 instanceof Error)){
var e__12538__auto____$2 = e13409;
if((e__12538__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$2;
}
} else {
throw e13409;

}
}} else {
throw e__12538__auto____$1;
}
} else {
throw e13408;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e13407){if((e13407 instanceof Error)){
var e__12538__auto____$1 = e13407;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12538__auto____$1;
}
} else {
throw e13407;

}
}} else {
throw e__12538__auto__;
}
} else {
throw e13406;

}
}});
var c__6555__auto___13441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___13441){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___13441){
return (function (state_13430){
var state_val_13431 = (state_13430[(1)]);
if((state_val_13431 === (2))){
var inst_13413 = (state_13430[(7)]);
var inst_13414 = (state_13430[(8)]);
var inst_13410 = (state_13430[(9)]);
var inst_13423 = (state_13430[(2)]);
var inst_13424 = elevations.core.drop_disable.call(null,window);
var inst_13425 = document.getElementById("drop-gpx");
var inst_13426 = (function (){var models = inst_13414;
var initial_model = inst_13413;
var actions = inst_13410;
return ((function (models,initial_model,actions,inst_13413,inst_13414,inst_13410,inst_13423,inst_13424,inst_13425,state_val_13431,c__6555__auto___13441){
return (function (file){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tracks","load-tracks",715627313),elevations.core.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(file.target.result))], null));
});
;})(models,initial_model,actions,inst_13413,inst_13414,inst_13410,inst_13423,inst_13424,inst_13425,state_val_13431,c__6555__auto___13441))
})();
var inst_13427 = elevations.core.drop_enable.call(null,inst_13425,inst_13426);
var inst_13428 = elevations.core.init_map.call(null,"map");
var state_13430__$1 = (function (){var statearr_13432 = state_13430;
(statearr_13432[(10)] = inst_13423);

(statearr_13432[(11)] = inst_13424);

(statearr_13432[(12)] = inst_13427);

return statearr_13432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13430__$1,inst_13428);
} else {
if((state_val_13431 === (1))){
var inst_13413 = (state_13430[(7)]);
var inst_13414 = (state_13430[(8)]);
var inst_13410 = (state_13430[(9)]);
var inst_13410__$1 = cljs.core.async.chan.call(null);
var inst_13411 = [new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764)];
var inst_13412 = [null,null];
var inst_13413__$1 = cljs.core.PersistentHashMap.fromArrays(inst_13411,inst_13412);
var inst_13414__$1 = vdom.elm.foldp.call(null,elevations.core.step,inst_13413__$1,inst_13410__$1);
var inst_13415 = elevations.core.ui.call(null,inst_13410__$1);
var inst_13416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13417 = [inst_13414__$1];
var inst_13418 = (new cljs.core.PersistentVector(null,1,(5),inst_13416,inst_13417,null));
var inst_13419 = cljs.core.async.map.call(null,inst_13415,inst_13418);
var inst_13420 = vdom.elm.render_BANG_.call(null,inst_13419,document.body);
var inst_13421 = cljs.core.async.timeout.call(null,(5));
var state_13430__$1 = (function (){var statearr_13433 = state_13430;
(statearr_13433[(7)] = inst_13413__$1);

(statearr_13433[(8)] = inst_13414__$1);

(statearr_13433[(9)] = inst_13410__$1);

(statearr_13433[(13)] = inst_13420);

return statearr_13433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13430__$1,(2),inst_13421);
} else {
return null;
}
}
});})(c__6555__auto___13441))
;
return ((function (switch__6493__auto__,c__6555__auto___13441){
return (function() {
var elevations$core$state_machine__6494__auto__ = null;
var elevations$core$state_machine__6494__auto____0 = (function (){
var statearr_13437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13437[(0)] = elevations$core$state_machine__6494__auto__);

(statearr_13437[(1)] = (1));

return statearr_13437;
});
var elevations$core$state_machine__6494__auto____1 = (function (state_13430){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13438){if((e13438 instanceof Object)){
var ex__6497__auto__ = e13438;
var statearr_13439_13442 = state_13430;
(statearr_13439_13442[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13443 = state_13430;
state_13430 = G__13443;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
elevations$core$state_machine__6494__auto__ = function(state_13430){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6494__auto____0.call(this);
case 1:
return elevations$core$state_machine__6494__auto____1.call(this,state_13430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6494__auto____0;
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6494__auto____1;
return elevations$core$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___13441))
})();
var state__6557__auto__ = (function (){var statearr_13440 = f__6556__auto__.call(null);
(statearr_13440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___13441);

return statearr_13440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___13441))
);


//# sourceMappingURL=core.js.map