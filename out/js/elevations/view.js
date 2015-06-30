// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.view');
goog.require('cljs.core');
goog.require('elevations.util');
goog.require('vdom.elm');
goog.require('cljs.core.async');
elevations.view.elevations = (function elevations$view$elevations(p__87425,actions){
var map__87436 = p__87425;
var map__87436__$1 = ((cljs.core.seq_QMARK_.call(null,map__87436))?cljs.core.apply.call(null,cljs.core.hash_map,map__87436):map__87436);
var scrub = cljs.core.get.call(null,map__87436__$1,new cljs.core.Keyword(null,"scrub","scrub",759182926));
var selected = cljs.core.get.call(null,map__87436__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevation-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"arrow",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 -5 6 10",new cljs.core.Keyword(null,"refX","refX",1265839261),(6),new cljs.core.Keyword(null,"refY","refY",113675749),(0),new cljs.core.Keyword(null,"markerWidth","markerWidth",-568766230),(6),new cljs.core.Keyword(null,"markerHeight","markerHeight",-1744163958),(6),new cljs.core.Keyword(null,"orient","orient",1933743565),"auto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 0,-5 L 6,0 L 0,5",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5], null)], null)], null)], null),(cljs.core.truth_(selected)?(function (){var svg = document.getElementById("elevation-container");
var width = svg.offsetWidth;
var height = svg.offsetHeight;
var scrub_cursor = svg.createSVGPoint();
var pts = selected.call(null,new cljs.core.Keyword(null,"points","points",-1486596883));
var padding = (8);
var side = (35);
var vec__87437 = elevations.util.extrema.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),pts);
var lowest = cljs.core.nth.call(null,vec__87437,(0),null);
var highest = cljs.core.nth.call(null,vec__87437,(1),null);
var exts = vec__87437;
var difference = (highest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)) - lowest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)));
var middle = ((highest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)) + lowest.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796))) / (2));
var x = d3.scale.linear().domain(cljs.core.clj__GT_js.call(null,elevations.util.extents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"time","time",1385887882),pts)))).range([side,(width - side)]);
var y = d3.scale.linear().domain(cljs.core.clj__GT_js.call(null,elevations.util.extents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),pts)))).range([(height - padding),padding]);
var pairs = cljs.core.juxt.call(null,cljs.core.comp.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882)),cljs.core.comp.call(null,y,new cljs.core.Keyword(null,"elevation","elevation",-1609348796)));
var line = d3.svg.line();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4951__auto__ = ((function (svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected){
return (function elevations$view$elevations_$_iter__87438(s__87439){
return (new cljs.core.LazySeq(null,((function (svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected){
return (function (){
var s__87439__$1 = s__87439;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__87439__$1);
if(temp__4126__auto__){
var s__87439__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87439__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__87439__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__87441 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__87440 = (0);
while(true){
if((i__87440 < size__4950__auto__)){
var map__87444 = cljs.core._nth.call(null,c__4949__auto__,i__87440);
var map__87444__$1 = ((cljs.core.seq_QMARK_.call(null,map__87444))?cljs.core.apply.call(null,cljs.core.hash_map,map__87444):map__87444);
var t = cljs.core.get.call(null,map__87444__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var elev = cljs.core.get.call(null,map__87444__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
cljs.core.chunk_append.call(null,b__87441,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"extreme",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,elev)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"x1","x1",-1863922247),x.call(null,selected.call(null,new cljs.core.Keyword(null,"started","started",585705024))),new cljs.core.Keyword(null,"x2","x2",-1362513475),x.call(null,t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(elev)),cljs.core.str("'")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),x.call(null,t),new cljs.core.Keyword(null,"r","r",-471384190),(3)], null)], null)], null));

var G__87446 = (i__87440 + (1));
i__87440 = G__87446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87441),elevations$view$elevations_$_iter__87438.call(null,cljs.core.chunk_rest.call(null,s__87439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87441),null);
}
} else {
var map__87445 = cljs.core.first.call(null,s__87439__$2);
var map__87445__$1 = ((cljs.core.seq_QMARK_.call(null,map__87445))?cljs.core.apply.call(null,cljs.core.hash_map,map__87445):map__87445);
var t = cljs.core.get.call(null,map__87445__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var elev = cljs.core.get.call(null,map__87445__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"extreme",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,elev)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"x1","x1",-1863922247),x.call(null,selected.call(null,new cljs.core.Keyword(null,"started","started",585705024))),new cljs.core.Keyword(null,"x2","x2",-1362513475),x.call(null,t)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(elev)),cljs.core.str("'")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cx","cx",1272694324),x.call(null,t),new cljs.core.Keyword(null,"r","r",-471384190),(3)], null)], null)], null),elevations$view$elevations_$_iter__87438.call(null,cljs.core.rest.call(null,s__87439__$2)));
}
} else {
return null;
}
break;
}
});})(svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected))
,null,null));
});})(svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected))
;
return iter__4951__auto__.call(null,exts);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"difference"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(18,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"marker-end","marker-end",341488703),"url(#arrow)",new cljs.core.Keyword(null,"y1","y1",589123466),(y.call(null,middle) - (8)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(highest)) + (8))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"tick",new cljs.core.Keyword(null,"marker-end","marker-end",341488703),"url(#arrow)",new cljs.core.Keyword(null,"y1","y1",589123466),(y.call(null,middle) + (8)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y.call(null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(lowest)) - (8))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str(y.call(null,middle)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"dx","dx",-381796732),(18),new cljs.core.Keyword(null,"dy","dy",1719547243),(5)], null),[cljs.core.str(Math.round(difference)),cljs.core.str("'")].join('')], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevations-zone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"scrub-zone",new cljs.core.Keyword(null,"x","x",2099068185),side,new cljs.core.Keyword(null,"y","y",-1757859776),padding,new cljs.core.Keyword(null,"width","width",-384071477),(width - ((2) * side)),new cljs.core.Keyword(null,"height","height",1025178622),(height - ((2) * padding)),new cljs.core.Keyword(null,"onmousemove","onmousemove",341554202),((function (svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected){
return (function (e){
(scrub_cursor["x"] = e.clientX);

(scrub_cursor["y"] = e.clientY);

var loc = scrub_cursor.matrixTransform(svg.getScreenCTM().inverse());
var sx = (loc.x - side);
var t = (new Date());
t.setTime(x.invert(sx));

var pt = cljs.core.apply.call(null,cljs.core.min_key,((function (loc,sx,t,svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected){
return (function (p1__87424_SHARP_){
return Math.abs((t.getTime() - new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__87424_SHARP_).getTime()));
});})(loc,sx,t,svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected))
,pts);
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrub","scrub",759182926),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"point","point",1813198264),pt], null)], null));
});})(svg,width,height,scrub_cursor,pts,padding,side,vec__87437,lowest,highest,exts,difference,middle,x,y,pairs,line,map__87436,map__87436__$1,scrub,selected))
], null)], null),(cljs.core.truth_(scrub)?(function (){var sx = x.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(scrub));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"scrubber",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(side),cljs.core.str(","),cljs.core.str(padding),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"x1","x1",-1863922247),sx,new cljs.core.Keyword(null,"x2","x2",-1362513475),sx,new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),(height - ((2) * padding))], null)], null);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"elevations",new cljs.core.Keyword(null,"d","d",1972142424),line.call(null,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,pairs,pts)))], null)], null)], null)], null);
})():null)], null);
});
elevations.view.main = (function elevations$view$main(actions){
return (function (p__87453){
var map__87454 = p__87453;
var map__87454__$1 = ((cljs.core.seq_QMARK_.call(null,map__87454))?cljs.core.apply.call(null,cljs.core.hash_map,map__87454):map__87454);
var model = map__87454__$1;
var selected = cljs.core.get.call(null,map__87454__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var tracks = cljs.core.get.call(null,map__87454__$1,new cljs.core.Keyword(null,"tracks","tracks",-326768501));
var droppable_QMARK_ = cljs.core.get.call(null,map__87454__$1,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"sidebar-inner"], null),((cljs.core.seq_QMARK_.call(null,tracks))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tracks",new cljs.core.Keyword(null,"className","className",-1983287057),"list-unstyled"], null),(function (){var iter__4951__auto__ = ((function (map__87454,map__87454__$1,model,selected,tracks,droppable_QMARK_){
return (function elevations$view$main_$_iter__87455(s__87456){
return (new cljs.core.LazySeq(null,((function (map__87454,map__87454__$1,model,selected,tracks,droppable_QMARK_){
return (function (){
var s__87456__$1 = s__87456;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__87456__$1);
if(temp__4126__auto__){
var s__87456__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87456__$2)){
var c__4949__auto__ = cljs.core.chunk_first.call(null,s__87456__$2);
var size__4950__auto__ = cljs.core.count.call(null,c__4949__auto__);
var b__87458 = cljs.core.chunk_buffer.call(null,size__4950__auto__);
if((function (){var i__87457 = (0);
while(true){
if((i__87457 < size__4950__auto__)){
var track = cljs.core._nth.call(null,c__4949__auto__,i__87457);
cljs.core.chunk_append.call(null,b__87458,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.util.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.util.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.util.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null));

var G__87459 = (i__87457 + (1));
i__87457 = G__87459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87458),elevations$view$main_$_iter__87455.call(null,cljs.core.chunk_rest.call(null,s__87456__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87458),null);
}
} else {
var track = cljs.core.first.call(null,s__87456__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),elevations.util.classes.call(null,"track",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(track)))?"selected":null)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),track], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"date"], null),elevations.util.format_date.call(null,new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(track))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"length muted"], null),elevations.util.format_duration.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(track))], null)], null),elevations$view$main_$_iter__87455.call(null,cljs.core.rest.call(null,s__87456__$2)));
}
} else {
return null;
}
break;
}
});})(map__87454,map__87454__$1,model,selected,tracks,droppable_QMARK_))
,null,null));
});})(map__87454,map__87454__$1,model,selected,tracks,droppable_QMARK_))
;
return iter__4951__auto__.call(null,tracks);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-gpx",new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(droppable_QMARK_)?"droppable":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text"], null),"Drop a GPX file here"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-zone",new cljs.core.Keyword(null,"className","className",-1983287057),"overlay"], null),"Drop GPX file"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"info"], null),elevations.view.elevations.call(null,model,actions)], null)], null)], null);
});
});
elevations.view.map_window = (function elevations$view$map_window(actions){
var xy = cljs.core.juxt.call(null,(function (p1__87460_SHARP_){
return p1__87460_SHARP_.x;
}),(function (p1__87461_SHARP_){
return p1__87461_SHARP_.y;
}));
var lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));
var map_section = document.getElementById("map");
return ((function (xy,lon_lat,map_section){
return (function (p__87472){
var map__87473 = p__87472;
var map__87473__$1 = ((cljs.core.seq_QMARK_.call(null,map__87473))?cljs.core.apply.call(null,cljs.core.hash_map,map__87473):map__87473);
var scrub = cljs.core.get.call(null,map__87473__$1,new cljs.core.Keyword(null,"scrub","scrub",759182926));
var show_QMARK_ = cljs.core.get.call(null,map__87473__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var geojson = cljs.core.get.call(null,map__87473__$1,new cljs.core.Keyword(null,"geojson","geojson",-719473398));
var map_pane = cljs.core.get.call(null,map__87473__$1,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112));
if(cljs.core.truth_((function (){var and__4185__auto__ = geojson;
if(cljs.core.truth_(and__4185__auto__)){
return show_QMARK_;
} else {
return and__4185__auto__;
}
})())){
var proj_STAR_ = ((function (map__87473,map__87473__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section){
return (function (p__87477){
var vec__87478 = p__87477;
var lon = cljs.core.nth.call(null,vec__87478,(0),null);
var lat = cljs.core.nth.call(null,vec__87478,(1),null);
return xy.call(null,map_pane.latLngToLayerPoint((new L.LatLng(lat,lon))));
});})(map__87473,map__87473__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section))
;
var proj = ((function (proj_STAR_,map__87473,map__87473__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section){
return (function (p1__87462_SHARP_){
var vec__87479 = cljs.core.js__GT_clj.call(null,p1__87462_SHARP_);
var lon = cljs.core.nth.call(null,vec__87479,(0),null);
var lat = cljs.core.nth.call(null,vec__87479,(1),null);
return cljs.core.clj__GT_js.call(null,proj_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null)));
});})(proj_STAR_,map__87473,map__87473__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section))
;
var path = d3.geo.path().projection(proj);
var vec__87474 = d3.geo.bounds(geojson);
var bottom_left = cljs.core.nth.call(null,vec__87474,(0),null);
var top_right = cljs.core.nth.call(null,vec__87474,(1),null);
var vec__87475 = proj.call(null,bottom_left);
var x1 = cljs.core.nth.call(null,vec__87475,(0),null);
var y2 = cljs.core.nth.call(null,vec__87475,(1),null);
var vec__87476 = proj.call(null,top_right);
var x2 = cljs.core.nth.call(null,vec__87476,(0),null);
var y1 = cljs.core.nth.call(null,vec__87476,(1),null);
var margin = ((function (proj_STAR_,proj,path,vec__87474,bottom_left,top_right,vec__87475,x1,y2,vec__87476,x2,y1,map__87473,map__87473__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section){
return (function() {
var elevations$view$map_window_$_margin = null;
var elevations$view$map_window_$_margin__2 = (function (f,x){
return elevations$view$map_window_$_margin.call(null,(1),f,x);
});
var elevations$view$map_window_$_margin__3 = (function (s,f,x){
return f.call(null,x,(s * (7)));
});
elevations$view$map_window_$_margin = function(s,f,x){
switch(arguments.length){
case 2:
return elevations$view$map_window_$_margin__2.call(this,s,f);
case 3:
return elevations$view$map_window_$_margin__3.call(this,s,f,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$view$map_window_$_margin.cljs$core$IFn$_invoke$arity$2 = elevations$view$map_window_$_margin__2;
elevations$view$map_window_$_margin.cljs$core$IFn$_invoke$arity$3 = elevations$view$map_window_$_margin__3;
return elevations$view$map_window_$_margin;
})()
;})(proj_STAR_,proj,path,vec__87474,bottom_left,top_right,vec__87475,x1,y2,vec__87476,x2,y1,map__87473,map__87473__$1,scrub,show_QMARK_,geojson,map_pane,xy,lon_lat,map_section))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"leaflet-svg",new cljs.core.Keyword(null,"width","width",-384071477),margin.call(null,(2),cljs.core._PLUS_,(x2 - x1)),new cljs.core.Keyword(null,"height","height",1025178622),margin.call(null,(2),cljs.core._PLUS_,(y2 - y1)),new cljs.core.Keyword(null,"style","style",-496642736),{"margin-top": [cljs.core.str(margin.call(null,cljs.core._,y1)),cljs.core.str("px")].join(''), "margin-left": [cljs.core.str(margin.call(null,cljs.core._,x1)),cljs.core.str("px")].join('')}], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"map-pane",new cljs.core.Keyword(null,"class","class",-2030961996),"leaflet-zoom-hide",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(margin.call(null,cljs.core._PLUS_,(- x1))),cljs.core.str(","),cljs.core.str(margin.call(null,cljs.core._PLUS_,(- y1))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"path",new cljs.core.Keyword(null,"d","d",1972142424),path.call(null,geojson)], null)], null),(cljs.core.truth_(scrub)?(function (){var vec__87480 = proj_STAR_.call(null,lon_lat.call(null,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(scrub)));
var x = cljs.core.nth.call(null,vec__87480,(0),null);
var y = cljs.core.nth.call(null,vec__87480,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),"orange"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(6),new cljs.core.Keyword(null,"fill","fill",883462889),"steelblue"], null)], null));
})():null)], null)], null);
} else {
return null;
}
});
;})(xy,lon_lat,map_section))
});

//# sourceMappingURL=view.js.map