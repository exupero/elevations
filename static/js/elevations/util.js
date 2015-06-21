// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
elevations.util.extents = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max));
elevations.util.extrema = cljs.core.juxt.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.min_key),cljs.core.partial.call(null,cljs.core.apply,cljs.core.max_key));
elevations.util.lon_lat = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"lon","lon",522068437),new cljs.core.Keyword(null,"lat","lat",-580793929));
elevations.util.copy = (function elevations$util$copy(m){
var ch = elevations.util.chan.call(null);
cljs.core.async.tap.call(null,m,ch);

return ch;
});
elevations.util.events = (function elevations$util$events(){
var G__30395 = arguments.length;
switch (G__30395) {
case 2:
return elevations.util.events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return elevations.util.events.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

elevations.util.events.cljs$core$IFn$_invoke$arity$2 = (function (selector,event){
return elevations.util.events.call(null,selector,event,cljs.core.identity);
});

elevations.util.events.cljs$core$IFn$_invoke$arity$3 = (function (selector,event,f){
var out = elevations.util.chan.call(null);
elevations.util.d3.selectAll(selector).on(cljs.core.name.call(null,event),((function (out){
return (function() { 
var G__30397__delegate = function (args){
var el = this;
var temp__4124__auto__ = f.call(null,el,args);
if(cljs.core.truth_(temp__4124__auto__)){
var v = temp__4124__auto__;
return elevations.util.put_BANG_.call(null,out,v);
} else {
return null;
}
};
var G__30397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30398__i = 0, G__30398__a = new Array(arguments.length -  0);
while (G__30398__i < G__30398__a.length) {G__30398__a[G__30398__i] = arguments[G__30398__i + 0]; ++G__30398__i;}
  args = new cljs.core.IndexedSeq(G__30398__a,0);
} 
return G__30397__delegate.call(this,args);};
G__30397.cljs$lang$maxFixedArity = 0;
G__30397.cljs$lang$applyTo = (function (arglist__30399){
var args = cljs.core.seq(arglist__30399);
return G__30397__delegate(args);
});
G__30397.cljs$core$IFn$_invoke$arity$variadic = G__30397__delegate;
return G__30397;
})()
;})(out))
);

return out;
});

elevations.util.events.cljs$lang$maxFixedArity = 3;
elevations.util.during = (function elevations$util$during(p__30401,coll){
var vec__30403 = p__30401;
var start = cljs.core.nth.call(null,vec__30403,(0),null);
var end = cljs.core.nth.call(null,vec__30403,(1),null);
return cljs.core.filter.call(null,((function (vec__30403,start,end){
return (function (p1__30400_SHARP_){
return ((start <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__30400_SHARP_))) && ((end >= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__30400_SHARP_)));
});})(vec__30403,start,end))
,coll);
});

//# sourceMappingURL=util.js.map