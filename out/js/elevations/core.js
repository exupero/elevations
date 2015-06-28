// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.core');
goog.require('cljs.core');
goog.require('vdom.elm');
goog.require('goog.dom.xml');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
elevations.core.drag_disable = (function elevations$core$drag_disable(el){
el.addEventListener("dragover",(function (e){
e.preventDefault();

return (e.dataTransfer["dropEffect"] = "none");
}));

return el.addEventListener("drop",(function (e){
return e.preventDefault();
}));
});
elevations.core.drag_enable = (function elevations$core$drag_enable(el,actions){
el.addEventListener("dragover",(function (e){
e.stopPropagation();

e.preventDefault();

(e.dataTransfer["dropEffect"] = "copy");

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150));
}));

return el.addEventListener("dragleave",(function (e){
e.stopPropagation();

e.preventDefault();

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584));
}));
});
elevations.core.drop_enable = (function elevations$core$drop_enable(el,actions){
return el.addEventListener("drop",(function (e){
e.stopPropagation();

e.preventDefault();

var file = (e.dataTransfer.files[(0)]);
var reader = (new FileReader());
(reader["onload"] = ((function (file,reader){
return (function (p1__52027_SHARP_){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),p1__52027_SHARP_.target.result], null));
});})(file,reader))
);

return reader.readAsText(file);
}));
});
elevations.core.format_date = d3.time.format("%A, %b %-d, %Y");
elevations.core.format_duration = (function elevations$core$format_duration(t){
var pred__52031 = cljs.core._GT_;
var expr__52032 = t;
if(cljs.core.truth_(pred__52031.call(null,(60),expr__52032))){
return [cljs.core.str(t),cljs.core.str(" seconds")].join('');
} else {
if(cljs.core.truth_(pred__52031.call(null,(3600),expr__52032))){
return [cljs.core.str(Math.round((t / (60)))),cljs.core.str(" minutes")].join('');
} else {
return [cljs.core.str(Math.round((t / (3600)))),cljs.core.str(" hours")].join('');
}
}
});
elevations.core.seconds = (function elevations$core$seconds(t){
return (t.getTime() / (1000));
});
elevations.core.coords__GT_geojson = (function elevations$core$coords__GT_geojson(cs){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"LineString",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929)),cs)], null)], null)], null)], null));
});
elevations.core.gpx__GT_tracks = (function elevations$core$gpx__GT_tracks(doc){
var iter__4951__auto__ = (function elevations$core$gpx__GT_tracks_$_iter__52054(s__52055){
return (new cljs.core.LazySeq(null,(function (){
var s__52055__$1 = s__52055;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__52055__$1);
if(temp__4126__auto__){
var s__52055__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52055__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__52055__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__52057 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__52056 = (0);
while(true){
if((i__52056 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__52056);
cljs.core.chunk_append.call(null,b__52057,(function (){var pts = (function (){var iter__4951__auto__ = ((function (i__52056,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__52054_$_iter__52066(s__52067){
return (new cljs.core.LazySeq(null,((function (i__52056,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__){
return (function (){
var s__52067__$1 = s__52067;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__52067__$1);
if(temp__4126__auto____$1){
var s__52067__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52067__$2)){
var c__4949__auto____$1 = cljs.core.chunk_first.call(null,s__52067__$2);
var size__4950__auto____$1 = cljs.core.count.call(null,c__4949__auto____$1);
var b__52069 = cljs.core.chunk_buffer.call(null,size__4950__auto____$1);
if((function (){var i__52068 = (0);
while(true){
if((i__52068 < size__4950__auto____$1)){
var pt = cljs.core._nth.call(null,c__4949__auto____$1,i__52068);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__52068,s__52067__$1,i__52056,pt,c__4949__auto____$1,size__4950__auto____$1,b__52069,s__52067__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__52068,s__52067__$1,i__52056,pt,c__4949__auto____$1,size__4950__auto____$1,b__52069,s__52067__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__52069,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__52074 = (i__52068 + (1));
i__52068 = G__52074;
continue;
} else {
var G__52075 = (i__52068 + (1));
i__52068 = G__52075;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52069),elevations$core$gpx__GT_tracks_$_iter__52054_$_iter__52066.call(null,cljs.core.chunk_rest.call(null,s__52067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52069),null);
}
} else {
var pt = cljs.core.first.call(null,s__52067__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__52067__$1,i__52056,pt,s__52067__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__52067__$1,i__52056,pt,s__52067__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__52054_$_iter__52066.call(null,cljs.core.rest.call(null,s__52067__$2)));
} else {
var G__52076 = cljs.core.rest.call(null,s__52067__$2);
s__52067__$1 = G__52076;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__52056,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__))
,null,null));
});})(i__52056,track,c__4949__auto__,size__4950__auto__,b__52057,s__52055__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})());

var G__52077 = (i__52056 + (1));
i__52056 = G__52077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52057),elevations$core$gpx__GT_tracks_$_iter__52054.call(null,cljs.core.chunk_rest.call(null,s__52055__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52057),null);
}
} else {
var track = cljs.core.first.call(null,s__52055__$2);
return cljs.core.cons.call(null,(function (){var pts = (function (){var iter__4951__auto__ = ((function (track,s__52055__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__52054_$_iter__52070(s__52071){
return (new cljs.core.LazySeq(null,((function (track,s__52055__$2,temp__4126__auto__){
return (function (){
var s__52071__$1 = s__52071;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__52071__$1);
if(temp__4126__auto____$1){
var s__52071__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52071__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__52071__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__52073 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__52072 = (0);
while(true){
if((i__52072 < size__4950__auto__)){
var pt = cljs.core._nth.call(null,c__4949__auto__,i__52072);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__52072,s__52071__$1,pt,c__4949__auto__,size__4950__auto__,b__52073,s__52071__$2,temp__4126__auto____$1,track,s__52055__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__52072,s__52071__$1,pt,c__4949__auto__,size__4950__auto__,b__52073,s__52071__$2,temp__4126__auto____$1,track,s__52055__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__52073,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__52078 = (i__52072 + (1));
i__52072 = G__52078;
continue;
} else {
var G__52079 = (i__52072 + (1));
i__52072 = G__52079;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52073),elevations$core$gpx__GT_tracks_$_iter__52054_$_iter__52070.call(null,cljs.core.chunk_rest.call(null,s__52071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52073),null);
}
} else {
var pt = cljs.core.first.call(null,s__52071__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__52071__$1,pt,s__52071__$2,temp__4126__auto____$1,track,s__52055__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__52071__$1,pt,s__52071__$2,temp__4126__auto____$1,track,s__52055__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),attrs.call(null,"ele"),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__52054_$_iter__52070.call(null,cljs.core.rest.call(null,s__52071__$2)));
} else {
var G__52080 = cljs.core.rest.call(null,s__52071__$2);
s__52071__$1 = G__52080;
continue;
}
}
} else {
return null;
}
break;
}
});})(track,s__52055__$2,temp__4126__auto__))
,null,null));
});})(track,s__52055__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})(),elevations$core$gpx__GT_tracks_$_iter__52054.call(null,cljs.core.rest.call(null,s__52055__$2)));
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
elevations.core.init_map = (function elevations$core$init_map(id,actions){
var map_pane = L.map(id);
var overlay = map_pane.getPanes().overlayPane;
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map_pane);

map_pane.setView([37.8,-96.9],(4));

overlay.setAttribute("id","leaflet-overlay");

map_pane.on("zoomstart",vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"hide-path","hide-path",627368715)));

map_pane.on("zoomend",vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"show-path","show-path",1435565682)));

return map_pane;
});
elevations.core.classes = (function elevations$core$classes(){
var argseq__5233__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return elevations.core.classes.cljs$core$IFn$_invoke$arity$variadic(argseq__5233__auto__);
});

elevations.core.classes.cljs$core$IFn$_invoke$arity$variadic = (function (cs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cs,cljs.core.repeat.call(null," ")));
});

elevations.core.classes.cljs$lang$maxFixedArity = (0);

elevations.core.classes.cljs$lang$applyTo = (function (seq52081){
return elevations.core.classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52081));
});
elevations.core.zoom = (function elevations$core$zoom(map_pane,feature){
return map_pane.fitBounds(L.geoJson(feature).getBounds());
});
elevations.core.extents = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max));
elevations.core.ui_main = (function elevations$core$ui_main(actions){
return (function (p__52088){
var map__52089 = p__52088;
var map__52089__$1 = ((cljs.core.seq_QMARK_.call(null,map__52089))?cljs.core.apply.call(null,cljs.core.hash_map,map__52089):map__52089);
var model = map__52089__$1;
var selected = cljs.core.get.call(null,map__52089__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var tracks = cljs.core.get.call(null,map__52089__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
var droppable_QMARK_ = cljs.core.get.call(null,map__52089__$1,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar-inner"], null),((cljs.core.seq_QMARK_.call(null,tracks))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tracks",new cljs.core.Keyword(null,"className","className",-1983287057),"list-unstyled"], null),(function (){var iter__4951__auto__ = ((function (map__52089,map__52089__$1,model,selected,tracks,droppable_QMARK_){
return (function elevations$core$ui_main_$_iter__52090(s__52091){
return (new cljs.core.LazySeq(null,((function (map__52089,map__52089__$1,model,selected,tracks,droppable_QMARK_){
return (function (){
var s__52091__$1 = s__52091;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__52091__$1);
if(temp__4126__auto__){
var s__52091__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52091__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__52091__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__52093 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__52092 = (0);
while(true){
if((i__52092 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__52092);
cljs.core.chunk_append.call(null,b__52093,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.core.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.core.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null));

var G__52094 = (i__52092 + (1));
i__52092 = G__52094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52093),elevations$core$ui_main_$_iter__52090.call(null,cljs.core.chunk_rest.call(null,s__52091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52093),null);
}
} else {
var track = cljs.core.first.call(null,s__52091__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.core.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.core.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null),elevations$core$ui_main_$_iter__52090.call(null,cljs.core.rest.call(null,s__52091__$2)));
}
} else {
return null;
}
break;
}
});})(map__52089,map__52089__$1,model,selected,tracks,droppable_QMARK_))
,null,null));
});})(map__52089,map__52089__$1,model,selected,tracks,droppable_QMARK_))
;
return iter__4951__auto__.call(null,tracks);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-gpx",new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(droppable_QMARK_)?"droppable":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text"], null),"Drop a GPX file here"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-zone",new cljs.core.Keyword(null,"className","className",-1983287057),"overlay"], null),"Drop GPX file"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"info"], null),(cljs.core.truth_(selected)?(function (){var pts = selected.call(null,new cljs.core.Keyword(null,"points","points",-1486596883));
var x = d3.scale.linear().domain(cljs.core.clj__GT_js.call(null,elevations.core.extents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"time","time",1385887882),pts)))).range([(0),(200)]);
var y = d3.scale.linear().domain(cljs.core.clj__GT_js.call(null,elevations.core.extents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),pts)))).range([(50),(0)]);
var line = d3.svg.line().x(cljs.core.comp.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882))).y(cljs.core.comp.call(null,y,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevations",new cljs.core.Keyword(null,"d","d",1972142424),null], null)], null)], null);
})():null)], null)], null)], null);
});
});
elevations.core.ui_map = (function elevations$core$ui_map(actions){
var xy = cljs.core.juxt.call(null,(function (p1__52095_SHARP_){
return p1__52095_SHARP_.x;
}),(function (p1__52096_SHARP_){
return p1__52096_SHARP_.y;
}));
var map_section = document.getElementById("map");
return ((function (xy,map_section){
return (function (p__52103){
var map__52104 = p__52103;
var map__52104__$1 = ((cljs.core.seq_QMARK_.call(null,map__52104))?cljs.core.apply.call(null,cljs.core.hash_map,map__52104):map__52104);
var show_QMARK_ = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var geojson = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"geojson","geojson",-719473398));
var map_pane = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112));
if(cljs.core.truth_((function (){var and__4185__auto__ = geojson;
if(cljs.core.truth_(and__4185__auto__)){
return show_QMARK_;
} else {
return and__4185__auto__;
}
})())){
var proj = ((function (map__52104,map__52104__$1,show_QMARK_,geojson,map_pane,xy,map_section){
return (function (coord){
var vec__52108 = cljs.core.js__GT_clj.call(null,coord);
var lon = cljs.core.nth.call(null,vec__52108,(0),null);
var lat = cljs.core.nth.call(null,vec__52108,(1),null);
return cljs.core.clj__GT_js.call(null,xy.call(null,map_pane.latLngToLayerPoint((new L.LatLng(lat,lon)))));
});})(map__52104,map__52104__$1,show_QMARK_,geojson,map_pane,xy,map_section))
;
var path = d3.geo.path().projection(proj);
var vec__52105 = d3.geo.bounds(geojson);
var bottom_left = cljs.core.nth.call(null,vec__52105,(0),null);
var top_right = cljs.core.nth.call(null,vec__52105,(1),null);
var vec__52106 = proj.call(null,bottom_left);
var x1 = cljs.core.nth.call(null,vec__52106,(0),null);
var y2 = cljs.core.nth.call(null,vec__52106,(1),null);
var vec__52107 = proj.call(null,top_right);
var x2 = cljs.core.nth.call(null,vec__52107,(0),null);
var y1 = cljs.core.nth.call(null,vec__52107,(1),null);
var margin = ((function (proj,path,vec__52105,bottom_left,top_right,vec__52106,x1,y2,vec__52107,x2,y1,map__52104,map__52104__$1,show_QMARK_,geojson,map_pane,xy,map_section){
return (function() {
var elevations$core$ui_map_$_margin = null;
var elevations$core$ui_map_$_margin__2 = (function (f,x){
return elevations$core$ui_map_$_margin.call(null,(1),f,x);
});
var elevations$core$ui_map_$_margin__3 = (function (s,f,x){
return f.call(null,x,(s * (3)));
});
elevations$core$ui_map_$_margin = function(s,f,x){
switch(arguments.length){
case 2:
return elevations$core$ui_map_$_margin__2.call(this,s,f);
case 3:
return elevations$core$ui_map_$_margin__3.call(this,s,f,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$ui_map_$_margin.cljs$core$IFn$_invoke$arity$2 = elevations$core$ui_map_$_margin__2;
elevations$core$ui_map_$_margin.cljs$core$IFn$_invoke$arity$3 = elevations$core$ui_map_$_margin__3;
return elevations$core$ui_map_$_margin;
})()
;})(proj,path,vec__52105,bottom_left,top_right,vec__52106,x1,y2,vec__52107,x2,y1,map__52104,map__52104__$1,show_QMARK_,geojson,map_pane,xy,map_section))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"leaflet-svg",new cljs.core.Keyword(null,"width","width",-384071477),margin.call(null,(2),cljs.core._PLUS_,(x2 - x1)),new cljs.core.Keyword(null,"height","height",1025178622),margin.call(null,(2),cljs.core._PLUS_,(y2 - y1)),new cljs.core.Keyword(null,"style","style",-496642736),{"margin-top": [cljs.core.str(margin.call(null,cljs.core._,y1)),cljs.core.str("px")].join(''), "margin-left": [cljs.core.str(margin.call(null,cljs.core._,x1)),cljs.core.str("px")].join('')}], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-pane",new cljs.core.Keyword(null,"class","class",-2030961996),"leaflet-zoom-hide",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(margin.call(null,cljs.core._PLUS_,(- x1))),cljs.core.str(","),cljs.core.str(margin.call(null,cljs.core._PLUS_,(- y1))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"path",new cljs.core.Keyword(null,"d","d",1972142424),path.call(null,geojson)], null)], null)], null)], null);
} else {
return null;
}
});
;})(xy,map_section))
});
elevations.core.step = (function elevations$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e52129){if((e52129 instanceof Error)){
var e__12538__auto__ = e52129;
if((e__12538__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__52125 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52125,new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224))){
var pane = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112),pane);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52138){if((e52138 instanceof Error)){
var e__12538__auto____$1 = e52138;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$1;
}
} else {
throw e52138;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52130){if((e52130 instanceof Error)){
var e__12538__auto____$1 = e52130;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52131){if((e52131 instanceof Error)){
var e__12538__auto____$2 = e52131;
if((e__12538__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52132){if((e52132 instanceof Error)){
var e__12538__auto____$3 = e52132;
if((e__12538__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__52127 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52127,new cljs.core.Keyword(null,"load","load",-1318641184))){
var data = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),elevations.core.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(data)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52136){if((e52136 instanceof Error)){
var e__12538__auto____$4 = e52136;
if((e__12538__auto____$4 === cljs.core.match.backtrack)){
try{var action_0__52127 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__52127,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
var geojson = elevations.core.coords__GT_geojson.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(track));
elevations.core.zoom.call(null,model.call(null,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112)),geojson);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track,new cljs.core.Keyword(null,"geojson","geojson",-719473398),geojson,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52137){if((e52137 instanceof Error)){
var e__12538__auto____$5 = e52137;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$5;
}
} else {
throw e52137;

}
}} else {
throw e__12538__auto____$4;
}
} else {
throw e52136;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e52133){if((e52133 instanceof Error)){
var e__12538__auto____$4 = e52133;
if((e__12538__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"hide-path","hide-path",627368715))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52134){if((e52134 instanceof Error)){
var e__12538__auto____$5 = e52134;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"show-path","show-path",1435565682))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e52135){if((e52135 instanceof Error)){
var e__12538__auto____$6 = e52135;
if((e__12538__auto____$6 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12538__auto____$6;
}
} else {
throw e52135;

}
}} else {
throw e__12538__auto____$5;
}
} else {
throw e52134;

}
}} else {
throw e__12538__auto____$4;
}
} else {
throw e52133;

}
}} else {
throw e__12538__auto____$3;
}
} else {
throw e52132;

}
}} else {
throw e__12538__auto____$2;
}
} else {
throw e52131;

}
}} else {
throw e__12538__auto____$1;
}
} else {
throw e52130;

}
}} else {
throw e__12538__auto__;
}
} else {
throw e52129;

}
}});
var c__6555__auto___52174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___52174){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___52174){
return (function (state_52163){
var state_val_52164 = (state_52163[(1)]);
if((state_val_52164 === (2))){
var inst_52139 = (state_52163[(7)]);
var inst_52145 = (state_52163[(8)]);
var inst_52149 = (state_52163[(2)]);
var inst_52150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52151 = elevations.core.init_map.call(null,"map",inst_52139);
var inst_52152 = [new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224),inst_52151];
var inst_52153 = (new cljs.core.PersistentVector(null,2,(5),inst_52150,inst_52152,null));
var inst_52154 = cljs.core.async.put_BANG_.call(null,inst_52139,inst_52153);
var inst_52155 = elevations.core.drag_disable.call(null,window);
var inst_52156 = document.getElementById("drop-gpx");
var inst_52157 = elevations.core.drag_enable.call(null,inst_52156,inst_52139);
var inst_52158 = document.getElementById("drop-zone");
var inst_52159 = elevations.core.drop_enable.call(null,inst_52158,inst_52139);
var inst_52160 = document.getElementById("leaflet-overlay");
var inst_52161 = inst_52145.call(null,elevations.core.ui_map,inst_52160);
var state_52163__$1 = (function (){var statearr_52165 = state_52163;
(statearr_52165[(9)] = inst_52157);

(statearr_52165[(10)] = inst_52154);

(statearr_52165[(11)] = inst_52155);

(statearr_52165[(12)] = inst_52159);

(statearr_52165[(13)] = inst_52149);

return statearr_52165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52163__$1,inst_52161);
} else {
if((state_val_52164 === (1))){
var inst_52139 = (state_52163[(7)]);
var inst_52145 = (state_52163[(8)]);
var inst_52139__$1 = cljs.core.async.chan.call(null);
var inst_52140 = [new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"show?","show?",1543842127)];
var inst_52141 = [false,null,null,null,false];
var inst_52142 = cljs.core.PersistentHashMap.fromArrays(inst_52140,inst_52141);
var inst_52143 = vdom.elm.foldp.call(null,elevations.core.step,inst_52142,inst_52139__$1);
var inst_52144 = cljs.core.async.mult.call(null,inst_52143);
var inst_52145__$1 = (function (){var models = inst_52144;
var initial_model = inst_52142;
var actions = inst_52139__$1;
return ((function (models,initial_model,actions,inst_52139,inst_52145,inst_52139__$1,inst_52140,inst_52141,inst_52142,inst_52143,inst_52144,state_val_52164,c__6555__auto___52174){
return (function (ui,root){
var ms = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,models,ms);

vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,ui.call(null,actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms], null)),root);

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
});
;})(models,initial_model,actions,inst_52139,inst_52145,inst_52139__$1,inst_52140,inst_52141,inst_52142,inst_52143,inst_52144,state_val_52164,c__6555__auto___52174))
})();
var inst_52146 = inst_52145__$1.call(null,elevations.core.ui_main,document.body);
var inst_52147 = cljs.core.async.timeout.call(null,(10));
var state_52163__$1 = (function (){var statearr_52166 = state_52163;
(statearr_52166[(7)] = inst_52139__$1);

(statearr_52166[(8)] = inst_52145__$1);

(statearr_52166[(14)] = inst_52146);

return statearr_52166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52163__$1,(2),inst_52147);
} else {
return null;
}
}
});})(c__6555__auto___52174))
;
return ((function (switch__6493__auto__,c__6555__auto___52174){
return (function() {
var elevations$core$state_machine__6494__auto__ = null;
var elevations$core$state_machine__6494__auto____0 = (function (){
var statearr_52170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52170[(0)] = elevations$core$state_machine__6494__auto__);

(statearr_52170[(1)] = (1));

return statearr_52170;
});
var elevations$core$state_machine__6494__auto____1 = (function (state_52163){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_52163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e52171){if((e52171 instanceof Object)){
var ex__6497__auto__ = e52171;
var statearr_52172_52175 = state_52163;
(statearr_52172_52175[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52176 = state_52163;
state_52163 = G__52176;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
elevations$core$state_machine__6494__auto__ = function(state_52163){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6494__auto____0.call(this);
case 1:
return elevations$core$state_machine__6494__auto____1.call(this,state_52163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6494__auto____0;
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6494__auto____1;
return elevations$core$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___52174))
})();
var state__6557__auto__ = (function (){var statearr_52173 = f__6556__auto__.call(null);
(statearr_52173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___52174);

return statearr_52173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___52174))
);


//# sourceMappingURL=core.js.map