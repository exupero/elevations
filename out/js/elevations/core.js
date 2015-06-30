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
return (function (p1__84726_SHARP_){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),p1__84726_SHARP_.target.result], null));
});})(file,reader))
);

return reader.readAsText(file);
}));
});
elevations.core.format_date = d3.time.format("%A, %b %-d, %Y");
elevations.core.format_duration = (function elevations$core$format_duration(t){
var pred__84730 = cljs.core._GT_;
var expr__84731 = t;
if(cljs.core.truth_(pred__84730.call(null,(60),expr__84731))){
return [cljs.core.str(t),cljs.core.str(" seconds")].join('');
} else {
if(cljs.core.truth_(pred__84730.call(null,(3600),expr__84731))){
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
var iter__4951__auto__ = (function elevations$core$gpx__GT_tracks_$_iter__84753(s__84754){
return (new cljs.core.LazySeq(null,(function (){
var s__84754__$1 = s__84754;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84754__$1);
if(temp__4126__auto__){
var s__84754__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84754__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__84754__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__84756 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__84755 = (0);
while(true){
if((i__84755 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__84755);
cljs.core.chunk_append.call(null,b__84756,(function (){var pts = (function (){var iter__4951__auto__ = ((function (i__84755,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__84753_$_iter__84765(s__84766){
return (new cljs.core.LazySeq(null,((function (i__84755,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__){
return (function (){
var s__84766__$1 = s__84766;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__84766__$1);
if(temp__4126__auto____$1){
var s__84766__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84766__$2)){
var c__4949__auto____$1 = cljs.core.chunk_first.call(null,s__84766__$2);
var size__4950__auto____$1 = cljs.core.count.call(null,c__4949__auto____$1);
var b__84768 = cljs.core.chunk_buffer.call(null,size__4950__auto____$1);
if((function (){var i__84767 = (0);
while(true){
if((i__84767 < size__4950__auto____$1)){
var pt = cljs.core._nth.call(null,c__4949__auto____$1,i__84767);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__84767,s__84766__$1,i__84755,pt,c__4949__auto____$1,size__4950__auto____$1,b__84768,s__84766__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__84767,s__84766__$1,i__84755,pt,c__4949__auto____$1,size__4950__auto____$1,b__84768,s__84766__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__84768,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__84773 = (i__84767 + (1));
i__84767 = G__84773;
continue;
} else {
var G__84774 = (i__84767 + (1));
i__84767 = G__84774;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84768),elevations$core$gpx__GT_tracks_$_iter__84753_$_iter__84765.call(null,cljs.core.chunk_rest.call(null,s__84766__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84768),null);
}
} else {
var pt = cljs.core.first.call(null,s__84766__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__84766__$1,i__84755,pt,s__84766__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__84766__$1,i__84755,pt,s__84766__$2,temp__4126__auto____$1,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__84753_$_iter__84765.call(null,cljs.core.rest.call(null,s__84766__$2)));
} else {
var G__84775 = cljs.core.rest.call(null,s__84766__$2);
s__84766__$1 = G__84775;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__84755,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__))
,null,null));
});})(i__84755,track,c__4949__auto__,size__4950__auto__,b__84756,s__84754__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})());

var G__84776 = (i__84755 + (1));
i__84755 = G__84776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84756),elevations$core$gpx__GT_tracks_$_iter__84753.call(null,cljs.core.chunk_rest.call(null,s__84754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84756),null);
}
} else {
var track = cljs.core.first.call(null,s__84754__$2);
return cljs.core.cons.call(null,(function (){var pts = (function (){var iter__4951__auto__ = ((function (track,s__84754__$2,temp__4126__auto__){
return (function elevations$core$gpx__GT_tracks_$_iter__84753_$_iter__84769(s__84770){
return (new cljs.core.LazySeq(null,((function (track,s__84754__$2,temp__4126__auto__){
return (function (){
var s__84770__$1 = s__84770;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__84770__$1);
if(temp__4126__auto____$1){
var s__84770__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84770__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__84770__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__84772 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__84771 = (0);
while(true){
if((i__84771 < size__4950__auto__)){
var pt = cljs.core._nth.call(null,c__4949__auto__,i__84771);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (i__84771,s__84770__$1,pt,c__4949__auto__,size__4950__auto__,b__84772,s__84770__$2,temp__4126__auto____$1,track,s__84754__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(i__84771,s__84770__$1,pt,c__4949__auto__,size__4950__auto__,b__84772,s__84770__$2,temp__4126__auto____$1,track,s__84754__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
cljs.core.chunk_append.call(null,b__84772,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null));

var G__84777 = (i__84771 + (1));
i__84771 = G__84777;
continue;
} else {
var G__84778 = (i__84771 + (1));
i__84771 = G__84778;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84772),elevations$core$gpx__GT_tracks_$_iter__84753_$_iter__84769.call(null,cljs.core.chunk_rest.call(null,s__84770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84772),null);
}
} else {
var pt = cljs.core.first.call(null,s__84770__$2);
if(cljs.core._EQ_.call(null,"trkpt",pt.tagName)){
var attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (s__84770__$1,pt,s__84770__$2,temp__4126__auto____$1,track,s__84754__$2,temp__4126__auto__){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.tagName,c.textContent], null);
});})(s__84770__$1,pt,s__84770__$2,temp__4126__auto____$1,track,s__84754__$2,temp__4126__auto__))
,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(pt.children))));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lon","lon",522068437),parseFloat(pt.getAttribute("lon")),new cljs.core.Keyword(null,"lat","lat",-580793929),parseFloat(pt.getAttribute("lat")),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),parseFloat(attrs.call(null,"ele")),new cljs.core.Keyword(null,"time","time",1385887882),(new Date(attrs.call(null,"time")))], null),elevations$core$gpx__GT_tracks_$_iter__84753_$_iter__84769.call(null,cljs.core.rest.call(null,s__84770__$2)));
} else {
var G__84779 = cljs.core.rest.call(null,s__84770__$2);
s__84770__$1 = G__84779;
continue;
}
}
} else {
return null;
}
break;
}
});})(track,s__84754__$2,temp__4126__auto__))
,null,null));
});})(track,s__84754__$2,temp__4126__auto__))
;
return iter__4951__auto__.call(null,cljs.core.js__GT_clj.call(null,Array.prototype.slice.call(track.children)));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,cljs.core.gensym.call(null)),new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)),new cljs.core.Keyword(null,"duration","duration",1444101068),(elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pts))) - elevations.core.seconds.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pts)))),new cljs.core.Keyword(null,"points","points",-1486596883),pts], null);
})(),elevations$core$gpx__GT_tracks_$_iter__84753.call(null,cljs.core.rest.call(null,s__84754__$2)));
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

elevations.core.classes.cljs$lang$applyTo = (function (seq84780){
return elevations.core.classes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84780));
});
elevations.core.zoom = (function elevations$core$zoom(map_pane,feature){
return map_pane.fitBounds(L.geoJson(feature).getBounds());
});
elevations.core.extents = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max));
elevations.core.extrema = (function elevations$core$extrema(f,xs){
var exts = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min_key,f),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max_key,f));
return exts.call(null,xs);
});
elevations.core.ui_elevations = (function elevations$core$ui_elevations(p__84782,actions){
var map__84793 = p__84782;
var map__84793__$1 = ((cljs.core.seq_QMARK_.call(null,map__84793))?cljs.core.apply.call(null,cljs.core.hash_map,map__84793):map__84793);
var scrub = cljs.core.get.call(null,map__84793__$1,new cljs.core.Keyword(null,"scrub","scrub",759182926));
var selected = cljs.core.get.call(null,map__84793__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevation-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"arrow",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 -5 6 10",new cljs.core.Keyword(null,"refX","refX",1265839261),(6),new cljs.core.Keyword(null,"refY","refY",113675749),(0),new cljs.core.Keyword(null,"markerWidth","markerWidth",-568766230),(6),new cljs.core.Keyword(null,"markerHeight","markerHeight",-1744163958),(6),new cljs.core.Keyword(null,"orient","orient",1933743565),"auto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 0,-5 L 6,0 L 0,5",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null)], null)], null),(cljs.core.truth_(selected)?(function (){var svg = document.getElementById("elevation-container");
var width = svg.offsetWidth;
var height = svg.offsetHeight;
var scrub_cursor = svg.createSVGPoint();
var pts = selected.call(null,new cljs.core.Keyword(null,"points","points",-1486596883));
var padding = (8);
var side = (35);
var vec__84794 = elevations.core.extrema.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),pts);
var lowest = cljs.core.nth.call(null,vec__84794,(0),null);
var highest = cljs.core.nth.call(null,vec__84794,(1),null);
var exts = vec__84794;
var difference = (highest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)) - lowest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)));
var middle = ((highest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)) + lowest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796))) / (2));
var x = d3.scale.linear().domain(cljs.core.clj__GT_js.call(null,elevations.core.extents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"time","time",1385887882),pts)))).range([side,(width - side)]);
var y = d3.scale.linear().domain(cljs.core.clj__GT_js.call(null,elevations.core.extents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),pts)))).range([(height - padding),padding]);
var pairs = cljs.core.juxt.call(null,cljs.core.comp.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882)),cljs.core.comp.call(null,y,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)));
var line = d3.svg.line();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4951__auto__ = ((function (svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected){
return (function elevations$core$ui_elevations_$_iter__84795(s__84796){
return (new cljs.core.LazySeq(null,((function (svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected){
return (function (){
var s__84796__$1 = s__84796;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84796__$1);
if(temp__4126__auto__){
var s__84796__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84796__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__84796__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__84798 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__84797 = (0);
while(true){
if((i__84797 < size__4950__auto__)){
var map__84801 = cljs.core._nth.call(null,c__4949__auto__,i__84797);
var map__84801__$1 = ((cljs.core.seq_QMARK_.call(null,map__84801))?cljs.core.apply.call(null,cljs.core.hash_map,map__84801):map__84801);
var t = cljs.core.get.call(null,map__84801__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var elev = cljs.core.get.call(null,map__84801__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
cljs.core.chunk_append.call(null,b__84798,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"extreme",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,elev)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"x1","x1",-1863922247),x.call(null,selected.call(null,new cljs.core.Keyword(null,"started","started",585705024))),new cljs.core.Keyword(null,"x2","x2",-1362513475),x.call(null,t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(elev)),cljs.core.str("'")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),x.call(null,t),new cljs.core.Keyword(null,"r","r",-471384190),(3)], null)], null)], null));

var G__84803 = (i__84797 + (1));
i__84797 = G__84803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84798),elevations$core$ui_elevations_$_iter__84795.call(null,cljs.core.chunk_rest.call(null,s__84796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84798),null);
}
} else {
var map__84802 = cljs.core.first.call(null,s__84796__$2);
var map__84802__$1 = ((cljs.core.seq_QMARK_.call(null,map__84802))?cljs.core.apply.call(null,cljs.core.hash_map,map__84802):map__84802);
var t = cljs.core.get.call(null,map__84802__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var elev = cljs.core.get.call(null,map__84802__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"extreme",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,elev)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"x1","x1",-1863922247),x.call(null,selected.call(null,new cljs.core.Keyword(null,"started","started",585705024))),new cljs.core.Keyword(null,"x2","x2",-1362513475),x.call(null,t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(elev)),cljs.core.str("'")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),x.call(null,t),new cljs.core.Keyword(null,"r","r",-471384190),(3)], null)], null)], null),elevations$core$ui_elevations_$_iter__84795.call(null,cljs.core.rest.call(null,s__84796__$2)));
}
} else {
return null;
}
break;
}
});})(svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected))
,null,null));
});})(svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected))
;
return iter__4951__auto__.call(null,exts);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"difference"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(18,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"marker-end","marker-end",341488703),"url(#arrow)",new cljs.core.Keyword(null,"y1","y1",589123466),(y.call(null,middle) - (8)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(highest)) + (8))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"marker-end","marker-end",341488703),"url(#arrow)",new cljs.core.Keyword(null,"y1","y1",589123466),(y.call(null,middle) + (8)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(lowest)) - (8))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,middle)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(difference)),cljs.core.str("'")].join('')], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevations-zone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"scrub-zone",new cljs.core.Keyword(null,"x","x",2099068185),side,new cljs.core.Keyword(null,"y","y",-1757859776),padding,new cljs.core.Keyword(null,"width","width",-384071477),(width - ((2) * side)),new cljs.core.Keyword(null,"height","height",1025178622),(height - ((2) * padding)),new cljs.core.Keyword(null,"onmousemove","onmousemove",341554202),((function (svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected){
return (function (e){
(scrub_cursor["x"] = e.clientX);

(scrub_cursor["y"] = e.clientY);

var loc = scrub_cursor.matrixTransform(svg.getScreenCTM().inverse());
var sx = (loc.x - side);
var t = (new Date());
t.setTime(x.invert(sx));

var pt = cljs.core.apply.call(null,cljs.core.min_key,((function (loc,sx,t,svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected){
return (function (p1__84781_SHARP_){
return Math.abs((t.getTime() - new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__84781_SHARP_).getTime()));
});})(loc,sx,t,svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected))
,pts);
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrub","scrub",759182926),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"point","point",1813198264),pt], null)], null));
});})(svg,width,height,scrub_cursor,pts,padding,side,vec__84794,lowest,highest,exts,difference,middle,x,y,pairs,line,map__84793,map__84793__$1,scrub,selected))
], null)], null),(cljs.core.truth_(scrub)?(function (){var sx = x.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(scrub));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"scrubber",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(side),cljs.core.str(","),cljs.core.str(padding),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"x1","x1",-1863922247),sx,new cljs.core.Keyword(null,"x2","x2",-1362513475),sx,new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),(height - ((2) * padding))], null)], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevations",new cljs.core.Keyword(null,"d","d",1972142424),line.call(null,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,pairs,pts)))], null)], null)], null)], null);
})():null)], null);
});
elevations.core.ui_main = (function elevations$core$ui_main(actions){
return (function (p__84810){
var map__84811 = p__84810;
var map__84811__$1 = ((cljs.core.seq_QMARK_.call(null,map__84811))?cljs.core.apply.call(null,cljs.core.hash_map,map__84811):map__84811);
var model = map__84811__$1;
var selected = cljs.core.get.call(null,map__84811__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var tracks = cljs.core.get.call(null,map__84811__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
var droppable_QMARK_ = cljs.core.get.call(null,map__84811__$1,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar-inner"], null),((cljs.core.seq_QMARK_.call(null,tracks))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tracks",new cljs.core.Keyword(null,"className","className",-1983287057),"list-unstyled"], null),(function (){var iter__4951__auto__ = ((function (map__84811,map__84811__$1,model,selected,tracks,droppable_QMARK_){
return (function elevations$core$ui_main_$_iter__84812(s__84813){
return (new cljs.core.LazySeq(null,((function (map__84811,map__84811__$1,model,selected,tracks,droppable_QMARK_){
return (function (){
var s__84813__$1 = s__84813;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84813__$1);
if(temp__4126__auto__){
var s__84813__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84813__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__84813__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__84815 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__84814 = (0);
while(true){
if((i__84814 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__84814);
cljs.core.chunk_append.call(null,b__84815,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.core.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.core.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null));

var G__84816 = (i__84814 + (1));
i__84814 = G__84816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84815),elevations$core$ui_main_$_iter__84812.call(null,cljs.core.chunk_rest.call(null,s__84813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84815),null);
}
} else {
var track = cljs.core.first.call(null,s__84813__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.core.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.core.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.core.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null),elevations$core$ui_main_$_iter__84812.call(null,cljs.core.rest.call(null,s__84813__$2)));
}
} else {
return null;
}
break;
}
});})(map__84811,map__84811__$1,model,selected,tracks,droppable_QMARK_))
,null,null));
});})(map__84811,map__84811__$1,model,selected,tracks,droppable_QMARK_))
;
return iter__4951__auto__.call(null,tracks);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-gpx",new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(droppable_QMARK_)?"droppable":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text"], null),"Drop a GPX file here"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-zone",new cljs.core.Keyword(null,"className","className",-1983287057),"overlay"], null),"Drop GPX file"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"info"], null),elevations.core.ui_elevations.call(null,model,actions)], null)], null)], null);
});
});
elevations.core.ui_map = (function elevations$core$ui_map(actions){
var xy = cljs.core.juxt.call(null,(function (p1__84817_SHARP_){
return p1__84817_SHARP_.x;
}),(function (p1__84818_SHARP_){
return p1__84818_SHARP_.y;
}));
var lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));
var map_section = document.getElementById("map");
return ((function (xy,lon_lat,map_section){
return (function (p__84829){
var map__84830 = p__84829;
var map__84830__$1 = ((cljs.core.seq_QMARK_.call(null,map__84830))?cljs.core.apply.call(null,cljs.core.hash_map,map__84830):map__84830);
var scrub = cljs.core.get.call(null,map__84830__$1,new cljs.core.Keyword(null,"scrub","scrub",759182926));
var show_QMARK_ = cljs.core.get.call(null,map__84830__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var geojson = cljs.core.get.call(null,map__84830__$1,new cljs.core.Keyword(null,"geojson","geojson",-719473398));
var map_pane = cljs.core.get.call(null,map__84830__$1,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112));
if(cljs.core.truth_((function (){var and__4185__auto__ = geojson;
if(cljs.core.truth_(and__4185__auto__)){
return show_QMARK_;
} else {
return and__4185__auto__;
}
})())){
var proj_STAR_ = ((function (map__84830,map__84830__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section){
return (function (p__84834){
var vec__84835 = p__84834;
var lon = cljs.core.nth.call(null,vec__84835,(0),null);
var lat = cljs.core.nth.call(null,vec__84835,(1),null);
return xy.call(null,map_pane.latLngToLayerPoint((new L.LatLng(lat,lon))));
});})(map__84830,map__84830__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section))
;
var proj = ((function (proj_STAR_,map__84830,map__84830__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section){
return (function (p1__84819_SHARP_){
var vec__84836 = cljs.core.js__GT_clj.call(null,p1__84819_SHARP_);
var lon = cljs.core.nth.call(null,vec__84836,(0),null);
var lat = cljs.core.nth.call(null,vec__84836,(1),null);
return cljs.core.clj__GT_js.call(null,proj_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null)));
});})(proj_STAR_,map__84830,map__84830__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section))
;
var path = d3.geo.path().projection(proj);
var vec__84831 = d3.geo.bounds(geojson);
var bottom_left = cljs.core.nth.call(null,vec__84831,(0),null);
var top_right = cljs.core.nth.call(null,vec__84831,(1),null);
var vec__84832 = proj.call(null,bottom_left);
var x1 = cljs.core.nth.call(null,vec__84832,(0),null);
var y2 = cljs.core.nth.call(null,vec__84832,(1),null);
var vec__84833 = proj.call(null,top_right);
var x2 = cljs.core.nth.call(null,vec__84833,(0),null);
var y1 = cljs.core.nth.call(null,vec__84833,(1),null);
var margin = ((function (proj_STAR_,proj,path,vec__84831,bottom_left,top_right,vec__84832,x1,y2,vec__84833,x2,y1,map__84830,map__84830__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section){
return (function() {
var elevations$core$ui_map_$_margin = null;
var elevations$core$ui_map_$_margin__2 = (function (f,x){
return elevations$core$ui_map_$_margin.call(null,(1),f,x);
});
var elevations$core$ui_map_$_margin__3 = (function (s,f,x){
return f.call(null,x,(s * (7)));
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
;})(proj_STAR_,proj,path,vec__84831,bottom_left,top_right,vec__84832,x1,y2,vec__84833,x2,y1,map__84830,map__84830__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"leaflet-svg",new cljs.core.Keyword(null,"width","width",-384071477),margin.call(null,(2),cljs.core._PLUS_,(x2 - x1)),new cljs.core.Keyword(null,"height","height",1025178622),margin.call(null,(2),cljs.core._PLUS_,(y2 - y1)),new cljs.core.Keyword(null,"style","style",-496642736),{"margin-top": [cljs.core.str(margin.call(null,cljs.core._,y1)),cljs.core.str("px")].join(''), "margin-left": [cljs.core.str(margin.call(null,cljs.core._,x1)),cljs.core.str("px")].join('')}], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-pane",new cljs.core.Keyword(null,"class","class",-2030961996),"leaflet-zoom-hide",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(margin.call(null,cljs.core._PLUS_,(- x1))),cljs.core.str(","),cljs.core.str(margin.call(null,cljs.core._PLUS_,(- y1))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"path",new cljs.core.Keyword(null,"d","d",1972142424),path.call(null,geojson)], null)], null),(cljs.core.truth_(scrub)?(function (){var vec__84837 = proj_STAR_.call(null,lon_lat.call(null,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(scrub)));
var x = cljs.core.nth.call(null,vec__84837,(0),null);
var y = cljs.core.nth.call(null,vec__84837,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"orange"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"steelblue"], null)], null));
})():null)], null)], null);
} else {
return null;
}
});
;})(xy,lon_lat,map_section))
});
elevations.core.step = (function elevations$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e84864){if((e84864 instanceof Error)){
var e__12538__auto__ = e84864;
if((e__12538__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__84858 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__84858,new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224))){
var pane = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112),pane);
} else {
throw cljs.core.match.backtrack;

}
}catch (e84875){if((e84875 instanceof Error)){
var e__12538__auto____$1 = e84875;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$1;
}
} else {
throw e84875;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e84865){if((e84865 instanceof Error)){
var e__12538__auto____$1 = e84865;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e84866){if((e84866 instanceof Error)){
var e__12538__auto____$2 = e84866;
if((e__12538__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e84867){if((e84867 instanceof Error)){
var e__12538__auto____$3 = e84867;
if((e__12538__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__84860 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__84860,new cljs.core.Keyword(null,"load","load",-1318641184))){
var data = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),elevations.core.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(data)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e84873){if((e84873 instanceof Error)){
var e__12538__auto____$4 = e84873;
if((e__12538__auto____$4 === cljs.core.match.backtrack)){
try{var action_0__84860 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__84860,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
var geojson = elevations.core.coords__GT_geojson.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(track));
elevations.core.zoom.call(null,model.call(null,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112)),geojson);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track,new cljs.core.Keyword(null,"geojson","geojson",-719473398),geojson,new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"scrub","scrub",759182926),null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e84874){if((e84874 instanceof Error)){
var e__12538__auto____$5 = e84874;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$5;
}
} else {
throw e84874;

}
}} else {
throw e__12538__auto____$4;
}
} else {
throw e84873;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e84868){if((e84868 instanceof Error)){
var e__12538__auto____$4 = e84868;
if((e__12538__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"hide-path","hide-path",627368715))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e84869){if((e84869 instanceof Error)){
var e__12538__auto____$5 = e84869;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"show-path","show-path",1435565682))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e84870){if((e84870 instanceof Error)){
var e__12538__auto____$6 = e84870;
if((e__12538__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__84862 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__84862,new cljs.core.Keyword(null,"scrub","scrub",759182926))){
var t = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"scrub","scrub",759182926),t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e84872){if((e84872 instanceof Error)){
var e__12538__auto____$7 = e84872;
if((e__12538__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$7;
}
} else {
throw e84872;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e84871){if((e84871 instanceof Error)){
var e__12538__auto____$7 = e84871;
if((e__12538__auto____$7 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12538__auto____$7;
}
} else {
throw e84871;

}
}} else {
throw e__12538__auto____$6;
}
} else {
throw e84870;

}
}} else {
throw e__12538__auto____$5;
}
} else {
throw e84869;

}
}} else {
throw e__12538__auto____$4;
}
} else {
throw e84868;

}
}} else {
throw e__12538__auto____$3;
}
} else {
throw e84867;

}
}} else {
throw e__12538__auto____$2;
}
} else {
throw e84866;

}
}} else {
throw e__12538__auto____$1;
}
} else {
throw e84865;

}
}} else {
throw e__12538__auto__;
}
} else {
throw e84864;

}
}});
var c__6555__auto___84911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___84911){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___84911){
return (function (state_84900){
var state_val_84901 = (state_84900[(1)]);
if((state_val_84901 === (2))){
var inst_84876 = (state_84900[(7)]);
var inst_84882 = (state_84900[(8)]);
var inst_84886 = (state_84900[(2)]);
var inst_84887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_84888 = elevations.core.init_map.call(null,"map",inst_84876);
var inst_84889 = [new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224),inst_84888];
var inst_84890 = (new cljs.core.PersistentVector(null,2,(5),inst_84887,inst_84889,null));
var inst_84891 = cljs.core.async.put_BANG_.call(null,inst_84876,inst_84890);
var inst_84892 = elevations.core.drag_disable.call(null,window);
var inst_84893 = document.getElementById("drop-gpx");
var inst_84894 = elevations.core.drag_enable.call(null,inst_84893,inst_84876);
var inst_84895 = document.getElementById("drop-zone");
var inst_84896 = elevations.core.drop_enable.call(null,inst_84895,inst_84876);
var inst_84897 = document.getElementById("leaflet-overlay");
var inst_84898 = inst_84882.call(null,elevations.core.ui_map,inst_84897);
var state_84900__$1 = (function (){var statearr_84902 = state_84900;
(statearr_84902[(9)] = inst_84891);

(statearr_84902[(10)] = inst_84894);

(statearr_84902[(11)] = inst_84896);

(statearr_84902[(12)] = inst_84892);

(statearr_84902[(13)] = inst_84886);

return statearr_84902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84900__$1,inst_84898);
} else {
if((state_val_84901 === (1))){
var inst_84876 = (state_84900[(7)]);
var inst_84882 = (state_84900[(8)]);
var inst_84876__$1 = cljs.core.async.chan.call(null);
var inst_84877 = [new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"scrub","scrub",759182926)];
var inst_84878 = [false,null,null,null,false,null];
var inst_84879 = cljs.core.PersistentHashMap.fromArrays(inst_84877,inst_84878);
var inst_84880 = vdom.elm.foldp.call(null,elevations.core.step,inst_84879,inst_84876__$1);
var inst_84881 = cljs.core.async.mult.call(null,inst_84880);
var inst_84882__$1 = (function (){var models = inst_84881;
var initial_model = inst_84879;
var actions = inst_84876__$1;
return ((function (models,initial_model,actions,inst_84876,inst_84882,inst_84876__$1,inst_84877,inst_84878,inst_84879,inst_84880,inst_84881,state_val_84901,c__6555__auto___84911){
return (function (ui,root){
var ms = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,models,ms);

vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,ui.call(null,actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms], null)),root);

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
});
;})(models,initial_model,actions,inst_84876,inst_84882,inst_84876__$1,inst_84877,inst_84878,inst_84879,inst_84880,inst_84881,state_val_84901,c__6555__auto___84911))
})();
var inst_84883 = inst_84882__$1.call(null,elevations.core.ui_main,document.body);
var inst_84884 = cljs.core.async.timeout.call(null,(10));
var state_84900__$1 = (function (){var statearr_84903 = state_84900;
(statearr_84903[(7)] = inst_84876__$1);

(statearr_84903[(14)] = inst_84883);

(statearr_84903[(8)] = inst_84882__$1);

return statearr_84903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84900__$1,(2),inst_84884);
} else {
return null;
}
}
});})(c__6555__auto___84911))
;
return ((function (switch__6493__auto__,c__6555__auto___84911){
return (function() {
var elevations$core$state_machine__6494__auto__ = null;
var elevations$core$state_machine__6494__auto____0 = (function (){
var statearr_84907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84907[(0)] = elevations$core$state_machine__6494__auto__);

(statearr_84907[(1)] = (1));

return statearr_84907;
});
var elevations$core$state_machine__6494__auto____1 = (function (state_84900){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_84900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e84908){if((e84908 instanceof Object)){
var ex__6497__auto__ = e84908;
var statearr_84909_84912 = state_84900;
(statearr_84909_84912[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84913 = state_84900;
state_84900 = G__84913;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
elevations$core$state_machine__6494__auto__ = function(state_84900){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6494__auto____0.call(this);
case 1:
return elevations$core$state_machine__6494__auto____1.call(this,state_84900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6494__auto____0;
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6494__auto____1;
return elevations$core$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___84911))
})();
var state__6557__auto__ = (function (){var statearr_84910 = f__6556__auto__.call(null);
(statearr_84910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___84911);

return statearr_84910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___84911))
);


//# sourceMappingURL=core.js.map