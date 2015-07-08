// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('elevations.core');
goog.require('cljs.core');
goog.require('goog.dom.xml');
goog.require('elevations.view');
goog.require('elevations.util');
goog.require('cljs.core.async');
goog.require('vdom.elm');
goog.require('cljs.core.match');
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
return (function (p1__21856_SHARP_){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),p1__21856_SHARP_.target.result], null));
});})(file,reader))
);

return reader.readAsText(file);
}));
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
elevations.core.step = (function elevations$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21873){if((e21873 instanceof Error)){
var e__10379__auto__ = e21873;
if((e__10379__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21874){if((e21874 instanceof Error)){
var e__10379__auto____$1 = e21874;
if((e__10379__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21875){if((e21875 instanceof Error)){
var e__10379__auto____$2 = e21875;
if((e__10379__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"hide-path","hide-path",627368715))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21876){if((e21876 instanceof Error)){
var e__10379__auto____$3 = e21876;
if((e__10379__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"show-path","show-path",1435565682))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21877){if((e21877 instanceof Error)){
var e__10379__auto____$4 = e21877;
if((e__10379__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__21871 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21871,new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224))){
var pane = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112),pane);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21879){if((e21879 instanceof Error)){
var e__10379__auto____$5 = e21879;
if((e__10379__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__21871 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21871,new cljs.core.Keyword(null,"load","load",-1318641184))){
var data = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),elevations.util.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(data)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e21880){if((e21880 instanceof Error)){
var e__10379__auto____$6 = e21880;
if((e__10379__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__21871 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21871,new cljs.core.Keyword(null,"scrub","scrub",759182926))){
var t = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"scrub","scrub",759182926),t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21881){if((e21881 instanceof Error)){
var e__10379__auto____$7 = e21881;
if((e__10379__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__21871 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21871,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
var geojson = elevations.util.coords__GT_geojson.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(track));
elevations.util.zoom.call(null,model.call(null,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112)),geojson);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track,new cljs.core.Keyword(null,"geojson","geojson",-719473398),geojson,new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"scrub","scrub",759182926),null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e21882){if((e21882 instanceof Error)){
var e__10379__auto____$8 = e21882;
if((e__10379__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10379__auto____$8;
}
} else {
throw e21882;

}
}} else {
throw e__10379__auto____$7;
}
} else {
throw e21881;

}
}} else {
throw e__10379__auto____$6;
}
} else {
throw e21880;

}
}} else {
throw e__10379__auto____$5;
}
} else {
throw e21879;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21878){if((e21878 instanceof Error)){
var e__10379__auto____$5 = e21878;
if((e__10379__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10379__auto____$5;
}
} else {
throw e21878;

}
}} else {
throw e__10379__auto____$4;
}
} else {
throw e21877;

}
}} else {
throw e__10379__auto____$3;
}
} else {
throw e21876;

}
}} else {
throw e__10379__auto____$2;
}
} else {
throw e21875;

}
}} else {
throw e__10379__auto____$1;
}
} else {
throw e21874;

}
}} else {
throw e__10379__auto__;
}
} else {
throw e21873;

}
}});
var c__6473__auto___21918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21918){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21918){
return (function (state_21907){
var state_val_21908 = (state_21907[(1)]);
if((state_val_21908 === (2))){
var inst_21883 = (state_21907[(7)]);
var inst_21889 = (state_21907[(8)]);
var inst_21893 = (state_21907[(2)]);
var inst_21894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21895 = elevations.core.init_map.call(null,"map",inst_21883);
var inst_21896 = [new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224),inst_21895];
var inst_21897 = (new cljs.core.PersistentVector(null,2,(5),inst_21894,inst_21896,null));
var inst_21898 = cljs.core.async.put_BANG_.call(null,inst_21883,inst_21897);
var inst_21899 = elevations.core.drag_disable.call(null,window);
var inst_21900 = document.getElementById("drop-gpx");
var inst_21901 = elevations.core.drag_enable.call(null,inst_21900,inst_21883);
var inst_21902 = document.getElementById("drop-zone");
var inst_21903 = elevations.core.drop_enable.call(null,inst_21902,inst_21883);
var inst_21904 = document.getElementById("leaflet-overlay");
var inst_21905 = inst_21889.call(null,elevations.view.map_window,inst_21904);
var state_21907__$1 = (function (){var statearr_21909 = state_21907;
(statearr_21909[(9)] = inst_21893);

(statearr_21909[(10)] = inst_21903);

(statearr_21909[(11)] = inst_21901);

(statearr_21909[(12)] = inst_21898);

(statearr_21909[(13)] = inst_21899);

return statearr_21909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21907__$1,inst_21905);
} else {
if((state_val_21908 === (1))){
var inst_21883 = (state_21907[(7)]);
var inst_21889 = (state_21907[(8)]);
var inst_21883__$1 = cljs.core.async.chan.call(null);
var inst_21884 = [new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"scrub","scrub",759182926)];
var inst_21885 = [false,null,null,null,false,null];
var inst_21886 = cljs.core.PersistentHashMap.fromArrays(inst_21884,inst_21885);
var inst_21887 = vdom.elm.foldp.call(null,elevations.core.step,inst_21886,inst_21883__$1);
var inst_21888 = cljs.core.async.mult.call(null,inst_21887);
var inst_21889__$1 = (function (){var models = inst_21888;
var initial_model = inst_21886;
var actions = inst_21883__$1;
return ((function (models,initial_model,actions,inst_21883,inst_21889,inst_21883__$1,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,state_val_21908,c__6473__auto___21918){
return (function (ui,root){
var ms = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,models,ms);

vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,ui.call(null,actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms], null)),root);

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
});
;})(models,initial_model,actions,inst_21883,inst_21889,inst_21883__$1,inst_21884,inst_21885,inst_21886,inst_21887,inst_21888,state_val_21908,c__6473__auto___21918))
})();
var inst_21890 = inst_21889__$1.call(null,elevations.view.main,document.body);
var inst_21891 = cljs.core.async.timeout.call(null,(10));
var state_21907__$1 = (function (){var statearr_21910 = state_21907;
(statearr_21910[(7)] = inst_21883__$1);

(statearr_21910[(8)] = inst_21889__$1);

(statearr_21910[(14)] = inst_21890);

return statearr_21910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21907__$1,(2),inst_21891);
} else {
return null;
}
}
});})(c__6473__auto___21918))
;
return ((function (switch__6452__auto__,c__6473__auto___21918){
return (function() {
var elevations$core$state_machine__6453__auto__ = null;
var elevations$core$state_machine__6453__auto____0 = (function (){
var statearr_21914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21914[(0)] = elevations$core$state_machine__6453__auto__);

(statearr_21914[(1)] = (1));

return statearr_21914;
});
var elevations$core$state_machine__6453__auto____1 = (function (state_21907){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21915){if((e21915 instanceof Object)){
var ex__6456__auto__ = e21915;
var statearr_21916_21919 = state_21907;
(statearr_21916_21919[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21920 = state_21907;
state_21907 = G__21920;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
elevations$core$state_machine__6453__auto__ = function(state_21907){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6453__auto____0.call(this);
case 1:
return elevations$core$state_machine__6453__auto____1.call(this,state_21907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6453__auto____0;
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6453__auto____1;
return elevations$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21918))
})();
var state__6475__auto__ = (function (){var statearr_21917 = f__6474__auto__.call(null);
(statearr_21917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21918);

return statearr_21917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21918))
);


//# sourceMappingURL=core.js.map