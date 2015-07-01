// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.view');
goog.require('cljs.core');
goog.require('elevations.util');
goog.require('vdom.elm');
goog.require('cljs.core.async');
elevations.view.xy = cljs.core.juxt.call(null,(function (p1__98355_SHARP_){
return p1__98355_SHARP_.x;
}),(function (p1__98356_SHARP_){
return p1__98356_SHARP_.y;
}));
elevations.view.lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));
elevations.view.line = d3.svg.line();
elevations.view.margin = (function elevations$view$margin(){
var G__98358 = arguments.length;
switch (G__98358) {
case 2:
return elevations.view.margin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return elevations.view.margin.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

elevations.view.margin.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return elevations.view.margin.call(null,(1),f,x);
});

elevations.view.margin.cljs$core$IFn$_invoke$arity$3 = (function (s,f,x){
return f.call(null,x,(s * (7)));
});

elevations.view.margin.cljs$lang$maxFixedArity = 3;
elevations.view.linear = (function elevations$view$linear(ds,axis,rng){
return d3.scale.linear().domain(cljs.core.clj__GT_js.call(null,elevations.util.extents.call(null,cljs.core.map.call(null,axis,ds)))).range(cljs.core.clj__GT_js.call(null,rng));
});
elevations.view.arrowhead = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"arrow",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 -5 6 10",new cljs.core.Keyword(null,"refX","refX",1265839261),(6),new cljs.core.Keyword(null,"refY","refY",113675749),(0),new cljs.core.Keyword(null,"markerWidth","markerWidth",-568766230),(6),new cljs.core.Keyword(null,"markerHeight","markerHeight",-1744163958),(6),new cljs.core.Keyword(null,"orient","orient",1933743565),"auto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 0,-5 L 6,0 L 0,5",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null)], null);
elevations.view.cursor = (function elevations$view$cursor(svg,x,y){
var c = svg.createSVGPoint();
(c["x"] = x);

(c["y"] = y);

return c;
});
elevations.view.scrubber_x = (function elevations$view$scrubber_x(svg){
return (function (e){
var loc = elevations.view.cursor.call(null,svg,e.clientX,e.clientY).matrixTransform(svg.getScreenCTM().inverse());
return loc.x;
});
});
elevations.view.scrubber_time = (function elevations$view$scrubber_time(scale){
return (function (x){
var t = (new Date());
t.setTime(scale.invert(x));

return t;
});
});
elevations.view.nearest = (function elevations$view$nearest(pts){
return (function (t){
var ms = t.getTime();
var dist = ((function (ms){
return (function (p1__98360_SHARP_){
return Math.abs((ms - new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__98360_SHARP_).getTime()));
});})(ms))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"point","point",1813198264),cljs.core.apply.call(null,cljs.core.min_key,dist,pts)], null);
});
});
elevations.view.fire = (function elevations$view$fire(actions,k){
return (function (p){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p], null));
});
});
elevations.view.size = cljs.core.juxt.call(null,(function (p1__98361_SHARP_){
return p1__98361_SHARP_.offsetWidth;
}),(function (p1__98362_SHARP_){
return p1__98362_SHARP_.offsetHeight;
}));
elevations.view.map_window = (function elevations$view$map_window(actions){
var map_section = document.getElementById("map");
return ((function (map_section){
return (function (p__98371){
var map__98372 = p__98371;
var map__98372__$1 = ((cljs.core.seq_QMARK_.call(null,map__98372))?cljs.core.apply.call(null,cljs.core.hash_map,map__98372):map__98372);
var scrub = cljs.core.get.call(null,map__98372__$1,new cljs.core.Keyword(null,"scrub","scrub",759182926));
var show_QMARK_ = cljs.core.get.call(null,map__98372__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var geojson = cljs.core.get.call(null,map__98372__$1,new cljs.core.Keyword(null,"geojson","geojson",-719473398));
var map_pane = cljs.core.get.call(null,map__98372__$1,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112));
if(cljs.core.truth_((function (){var and__4185__auto__ = geojson;
if(cljs.core.truth_(and__4185__auto__)){
return show_QMARK_;
} else {
return and__4185__auto__;
}
})())){
var proj = ((function (map__98372,map__98372__$1,scrub,show_QMARK_,geojson,map_pane,map_section){
return (function (p__98376){
var vec__98377 = p__98376;
var lon = cljs.core.nth.call(null,vec__98377,(0),null);
var lat = cljs.core.nth.call(null,vec__98377,(1),null);
return elevations.view.xy.call(null,map_pane.latLngToLayerPoint((new L.LatLng(lat,lon))));
});})(map__98372,map__98372__$1,scrub,show_QMARK_,geojson,map_pane,map_section))
;
var path = d3.geo.path().projection(cljs.core.comp.call(null,cljs.core.clj__GT_js,proj));
var vec__98373 = d3.geo.bounds(geojson);
var bottom_left = cljs.core.nth.call(null,vec__98373,(0),null);
var top_right = cljs.core.nth.call(null,vec__98373,(1),null);
var vec__98374 = proj.call(null,bottom_left);
var x1 = cljs.core.nth.call(null,vec__98374,(0),null);
var y2 = cljs.core.nth.call(null,vec__98374,(1),null);
var vec__98375 = proj.call(null,top_right);
var x2 = cljs.core.nth.call(null,vec__98375,(0),null);
var y1 = cljs.core.nth.call(null,vec__98375,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"leaflet-svg",new cljs.core.Keyword(null,"width","width",-384071477),elevations.view.margin.call(null,(2),cljs.core._PLUS_,(x2 - x1)),new cljs.core.Keyword(null,"height","height",1025178622),elevations.view.margin.call(null,(2),cljs.core._PLUS_,(y2 - y1)),new cljs.core.Keyword(null,"style","style",-496642736),{"margin-top": [cljs.core.str(elevations.view.margin.call(null,cljs.core._,y1)),cljs.core.str("px")].join(''), "margin-left": [cljs.core.str(elevations.view.margin.call(null,cljs.core._,x1)),cljs.core.str("px")].join('')}], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-pane",new cljs.core.Keyword(null,"class","class",-2030961996),"leaflet-zoom-hide",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(elevations.view.margin.call(null,cljs.core._PLUS_,(- x1))),cljs.core.str(","),cljs.core.str(elevations.view.margin.call(null,cljs.core._PLUS_,(- y1))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"path",new cljs.core.Keyword(null,"d","d",1972142424),path.call(null,geojson)], null)], null),(cljs.core.truth_(scrub)?(function (){var vec__98378 = proj.call(null,elevations.view.lon_lat.call(null,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(scrub)));
var x = cljs.core.nth.call(null,vec__98378,(0),null);
var y = cljs.core.nth.call(null,vec__98378,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"orange"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"steelblue"], null)], null));
})():null)], null)], null);
} else {
return null;
}
});
;})(map_section))
});
elevations.view.extrema = (function elevations$view$extrema(y,high,low){
var middle = ((high + low) / (2));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,middle)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round((high - low))),cljs.core.str("'")].join('')], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(18,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"marker-end","marker-end",341488703),"url(#arrow)",new cljs.core.Keyword(null,"y1","y1",589123466),(y.call(null,middle) - (8)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y.call(null,high) + (8))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"marker-end","marker-end",341488703),"url(#arrow)",new cljs.core.Keyword(null,"y1","y1",589123466),(y.call(null,middle) + (8)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y.call(null,low) - (8))], null)], null)], null));
});
elevations.view.elevations = (function elevations$view$elevations(p__98379,actions){
var map__98392 = p__98379;
var map__98392__$1 = ((cljs.core.seq_QMARK_.call(null,map__98392))?cljs.core.apply.call(null,cljs.core.hash_map,map__98392):map__98392);
var scrub = cljs.core.get.call(null,map__98392__$1,new cljs.core.Keyword(null,"scrub","scrub",759182926));
var map__98393 = cljs.core.get.call(null,map__98392__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var map__98393__$1 = ((cljs.core.seq_QMARK_.call(null,map__98393))?cljs.core.apply.call(null,cljs.core.hash_map,map__98393):map__98393);
var selected = map__98393__$1;
var points = cljs.core.get.call(null,map__98393__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var started = cljs.core.get.call(null,map__98393__$1,new cljs.core.Keyword(null,"started","started",585705024));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevation-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,elevations.view.arrowhead], null),(cljs.core.truth_(selected)?(function (){var padding = (8);
var side = (35);
var svg = document.getElementById("elevation-container");
var vec__98394 = elevations.view.size.call(null,svg);
var width = cljs.core.nth.call(null,vec__98394,(0),null);
var height = cljs.core.nth.call(null,vec__98394,(1),null);
var vec__98395 = elevations.util.extrema.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),points);
var lowest = cljs.core.nth.call(null,vec__98395,(0),null);
var highest = cljs.core.nth.call(null,vec__98395,(1),null);
var exts = vec__98395;
var x = elevations.view.linear.call(null,points,new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [side,(width - side)], null));
var y = elevations.view.linear.call(null,points,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(height - padding),padding], null));
var inner_height = (height - ((2) * padding));
var sx = (cljs.core.truth_(scrub)?x.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(scrub)):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4951__auto__ = ((function (padding,side,svg,vec__98394,width,height,vec__98395,lowest,highest,exts,x,y,inner_height,sx,map__98392,map__98392__$1,scrub,map__98393,map__98393__$1,selected,points,started){
return (function elevations$view$elevations_$_iter__98396(s__98397){
return (new cljs.core.LazySeq(null,((function (padding,side,svg,vec__98394,width,height,vec__98395,lowest,highest,exts,x,y,inner_height,sx,map__98392,map__98392__$1,scrub,map__98393,map__98393__$1,selected,points,started){
return (function (){
var s__98397__$1 = s__98397;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__98397__$1);
if(temp__4126__auto__){
var s__98397__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__98397__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__98397__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__98399 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__98398 = (0);
while(true){
if((i__98398 < size__4950__auto__)){
var map__98402 = cljs.core._nth.call(null,c__4949__auto__,i__98398);
var map__98402__$1 = ((cljs.core.seq_QMARK_.call(null,map__98402))?cljs.core.apply.call(null,cljs.core.hash_map,map__98402):map__98402);
var t = cljs.core.get.call(null,map__98402__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var elev = cljs.core.get.call(null,map__98402__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
cljs.core.chunk_append.call(null,b__98399,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"extreme",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,elev)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"x1","x1",-1863922247),x.call(null,started),new cljs.core.Keyword(null,"x2","x2",-1362513475),x.call(null,t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(elev)),cljs.core.str("'")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),x.call(null,t),new cljs.core.Keyword(null,"r","r",-471384190),(3)], null)], null)], null));

var G__98404 = (i__98398 + (1));
i__98398 = G__98404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__98399),elevations$view$elevations_$_iter__98396.call(null,cljs.core.chunk_rest.call(null,s__98397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__98399),null);
}
} else {
var map__98403 = cljs.core.first.call(null,s__98397__$2);
var map__98403__$1 = ((cljs.core.seq_QMARK_.call(null,map__98403))?cljs.core.apply.call(null,cljs.core.hash_map,map__98403):map__98403);
var t = cljs.core.get.call(null,map__98403__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var elev = cljs.core.get.call(null,map__98403__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"extreme",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,elev)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"x1","x1",-1863922247),x.call(null,started),new cljs.core.Keyword(null,"x2","x2",-1362513475),x.call(null,t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(elev)),cljs.core.str("'")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),x.call(null,t),new cljs.core.Keyword(null,"r","r",-471384190),(3)], null)], null)], null),elevations$view$elevations_$_iter__98396.call(null,cljs.core.rest.call(null,s__98397__$2)));
}
} else {
return null;
}
break;
}
});})(padding,side,svg,vec__98394,width,height,vec__98395,lowest,highest,exts,x,y,inner_height,sx,map__98392,map__98392__$1,scrub,map__98393,map__98393__$1,selected,points,started))
,null,null));
});})(padding,side,svg,vec__98394,width,height,vec__98395,lowest,highest,exts,x,y,inner_height,sx,map__98392,map__98392__$1,scrub,map__98393,map__98393__$1,selected,points,started))
;
return iter__4951__auto__.call(null,exts);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"difference"], null),elevations.view.extrema.call(null,y,highest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)),lowest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevations-zone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"scrub-zone",new cljs.core.Keyword(null,"x","x",2099068185),side,new cljs.core.Keyword(null,"y","y",-1757859776),padding,new cljs.core.Keyword(null,"width","width",-384071477),(width - ((2) * side)),new cljs.core.Keyword(null,"height","height",1025178622),inner_height,new cljs.core.Keyword(null,"onmousemove","onmousemove",341554202),cljs.core.comp.call(null,elevations.view.fire.call(null,actions,new cljs.core.Keyword(null,"scrub","scrub",759182926)),elevations.view.nearest.call(null,points),elevations.view.scrubber_time.call(null,x),elevations.view.scrubber_x.call(null,svg))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevations",new cljs.core.Keyword(null,"d","d",1972142424),elevations.view.line.call(null,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882)),cljs.core.comp.call(null,y,new cljs.core.Keyword(null,"elevation","elevation",-1609348796))),points)))], null)], null),(cljs.core.truth_(sx)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"scrubber",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(sx),cljs.core.str(","),cljs.core.str(padding),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),inner_height], null)], null),(function (){var el = [cljs.core.str(Math.round(new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(scrub)))),cljs.core.str("'")].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(((inner_height / (2)) + (5))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stroke"], null),el], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.PersistentArrayMap.EMPTY,el], null)], null);
})()], null):null)], null)], null);
})():null)], null);
});
elevations.view.main = (function elevations$view$main(actions){
return (function (p__98411){
var map__98412 = p__98411;
var map__98412__$1 = ((cljs.core.seq_QMARK_.call(null,map__98412))?cljs.core.apply.call(null,cljs.core.hash_map,map__98412):map__98412);
var model = map__98412__$1;
var selected = cljs.core.get.call(null,map__98412__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var tracks = cljs.core.get.call(null,map__98412__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
var droppable_QMARK_ = cljs.core.get.call(null,map__98412__$1,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar-inner"], null),((cljs.core.seq_QMARK_.call(null,tracks))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tracks",new cljs.core.Keyword(null,"className","className",-1983287057),"list-unstyled"], null),(function (){var iter__4951__auto__ = ((function (map__98412,map__98412__$1,model,selected,tracks,droppable_QMARK_){
return (function elevations$view$main_$_iter__98413(s__98414){
return (new cljs.core.LazySeq(null,((function (map__98412,map__98412__$1,model,selected,tracks,droppable_QMARK_){
return (function (){
var s__98414__$1 = s__98414;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__98414__$1);
if(temp__4126__auto__){
var s__98414__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__98414__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__98414__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__98416 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__98415 = (0);
while(true){
if((i__98415 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__98415);
cljs.core.chunk_append.call(null,b__98416,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.util.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.util.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.util.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null));

var G__98417 = (i__98415 + (1));
i__98415 = G__98417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__98416),elevations$view$main_$_iter__98413.call(null,cljs.core.chunk_rest.call(null,s__98414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__98416),null);
}
} else {
var track = cljs.core.first.call(null,s__98414__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.util.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.util.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.util.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null),elevations$view$main_$_iter__98413.call(null,cljs.core.rest.call(null,s__98414__$2)));
}
} else {
return null;
}
break;
}
});})(map__98412,map__98412__$1,model,selected,tracks,droppable_QMARK_))
,null,null));
});})(map__98412,map__98412__$1,model,selected,tracks,droppable_QMARK_))
;
return iter__4951__auto__.call(null,tracks);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-gpx",new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(droppable_QMARK_)?"droppable":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text"], null),"Drop a GPX file here"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-zone",new cljs.core.Keyword(null,"className","className",-1983287057),"overlay"], null),"Drop GPX file"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"info"], null),elevations.view.elevations.call(null,model,actions)], null)], null)], null);
});
});

//# sourceMappingURL=view.js.map