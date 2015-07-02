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
return (function (p1__11074_SHARP_){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),p1__11074_SHARP_.target.result], null));
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
}catch (e11091){if((e11091 instanceof Error)){
var e__10279__auto__ = e11091;
if((e__10279__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11092){if((e11092 instanceof Error)){
var e__10279__auto____$1 = e11092;
if((e__10279__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11093){if((e11093 instanceof Error)){
var e__10279__auto____$2 = e11093;
if((e__10279__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"hide-path","hide-path",627368715))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11094){if((e11094 instanceof Error)){
var e__10279__auto____$3 = e11094;
if((e__10279__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"show-path","show-path",1435565682))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11095){if((e11095 instanceof Error)){
var e__10279__auto____$4 = e11095;
if((e__10279__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__11089 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__11089,new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224))){
var pane = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112),pane);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11097){if((e11097 instanceof Error)){
var e__10279__auto____$5 = e11097;
if((e__10279__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__11089 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__11089,new cljs.core.Keyword(null,"load","load",-1318641184))){
var data = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),elevations.util.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(data)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e11098){if((e11098 instanceof Error)){
var e__10279__auto____$6 = e11098;
if((e__10279__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__11089 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__11089,new cljs.core.Keyword(null,"scrub","scrub",759182926))){
var t = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"scrub","scrub",759182926),t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11099){if((e11099 instanceof Error)){
var e__10279__auto____$7 = e11099;
if((e__10279__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__11089 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__11089,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
var geojson = elevations.util.coords__GT_geojson.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(track));
elevations.util.zoom.call(null,model.call(null,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112)),geojson);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track,new cljs.core.Keyword(null,"geojson","geojson",-719473398),geojson,new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"scrub","scrub",759182926),null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e11100){if((e11100 instanceof Error)){
var e__10279__auto____$8 = e11100;
if((e__10279__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__10279__auto____$8;
}
} else {
throw e11100;

}
}} else {
throw e__10279__auto____$7;
}
} else {
throw e11099;

}
}} else {
throw e__10279__auto____$6;
}
} else {
throw e11098;

}
}} else {
throw e__10279__auto____$5;
}
} else {
throw e11097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e11096){if((e11096 instanceof Error)){
var e__10279__auto____$5 = e11096;
if((e__10279__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10279__auto____$5;
}
} else {
throw e11096;

}
}} else {
throw e__10279__auto____$4;
}
} else {
throw e11095;

}
}} else {
throw e__10279__auto____$3;
}
} else {
throw e11094;

}
}} else {
throw e__10279__auto____$2;
}
} else {
throw e11093;

}
}} else {
throw e__10279__auto____$1;
}
} else {
throw e11092;

}
}} else {
throw e__10279__auto__;
}
} else {
throw e11091;

}
}});
var c__6473__auto___11136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___11136){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___11136){
return (function (state_11125){
var state_val_11126 = (state_11125[(1)]);
if((state_val_11126 === (2))){
var inst_11101 = (state_11125[(7)]);
var inst_11107 = (state_11125[(8)]);
var inst_11111 = (state_11125[(2)]);
var inst_11112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11113 = elevations.core.init_map.call(null,"map",inst_11101);
var inst_11114 = [new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224),inst_11113];
var inst_11115 = (new cljs.core.PersistentVector(null,2,(5),inst_11112,inst_11114,null));
var inst_11116 = cljs.core.async.put_BANG_.call(null,inst_11101,inst_11115);
var inst_11117 = elevations.core.drag_disable.call(null,window);
var inst_11118 = document.getElementById("drop-gpx");
var inst_11119 = elevations.core.drag_enable.call(null,inst_11118,inst_11101);
var inst_11120 = document.getElementById("drop-zone");
var inst_11121 = elevations.core.drop_enable.call(null,inst_11120,inst_11101);
var inst_11122 = document.getElementById("leaflet-overlay");
var inst_11123 = inst_11107.call(null,elevations.view.map_window,inst_11122);
var state_11125__$1 = (function (){var statearr_11127 = state_11125;
(statearr_11127[(9)] = inst_11111);

(statearr_11127[(10)] = inst_11116);

(statearr_11127[(11)] = inst_11117);

(statearr_11127[(12)] = inst_11121);

(statearr_11127[(13)] = inst_11119);

return statearr_11127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11125__$1,inst_11123);
} else {
if((state_val_11126 === (1))){
var inst_11101 = (state_11125[(7)]);
var inst_11107 = (state_11125[(8)]);
var inst_11101__$1 = cljs.core.async.chan.call(null);
var inst_11102 = [new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"scrub","scrub",759182926)];
var inst_11103 = [false,null,null,null,false,null];
var inst_11104 = cljs.core.PersistentHashMap.fromArrays(inst_11102,inst_11103);
var inst_11105 = vdom.elm.foldp.call(null,elevations.core.step,inst_11104,inst_11101__$1);
var inst_11106 = cljs.core.async.mult.call(null,inst_11105);
var inst_11107__$1 = (function (){var models = inst_11106;
var initial_model = inst_11104;
var actions = inst_11101__$1;
return ((function (models,initial_model,actions,inst_11101,inst_11107,inst_11101__$1,inst_11102,inst_11103,inst_11104,inst_11105,inst_11106,state_val_11126,c__6473__auto___11136){
return (function (ui,root){
var ms = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,models,ms);

vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,ui.call(null,actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms], null)),root);

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
});
;})(models,initial_model,actions,inst_11101,inst_11107,inst_11101__$1,inst_11102,inst_11103,inst_11104,inst_11105,inst_11106,state_val_11126,c__6473__auto___11136))
})();
var inst_11108 = inst_11107__$1.call(null,elevations.view.main,document.body);
var inst_11109 = cljs.core.async.timeout.call(null,(10));
var state_11125__$1 = (function (){var statearr_11128 = state_11125;
(statearr_11128[(7)] = inst_11101__$1);

(statearr_11128[(8)] = inst_11107__$1);

(statearr_11128[(14)] = inst_11108);

return statearr_11128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11125__$1,(2),inst_11109);
} else {
return null;
}
}
});})(c__6473__auto___11136))
;
return ((function (switch__6452__auto__,c__6473__auto___11136){
return (function() {
var elevations$core$state_machine__6453__auto__ = null;
var elevations$core$state_machine__6453__auto____0 = (function (){
var statearr_11132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11132[(0)] = elevations$core$state_machine__6453__auto__);

(statearr_11132[(1)] = (1));

return statearr_11132;
});
var elevations$core$state_machine__6453__auto____1 = (function (state_11125){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_11125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e11133){if((e11133 instanceof Object)){
var ex__6456__auto__ = e11133;
var statearr_11134_11137 = state_11125;
(statearr_11134_11137[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11138 = state_11125;
state_11125 = G__11138;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
elevations$core$state_machine__6453__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6453__auto____0.call(this);
case 1:
return elevations$core$state_machine__6453__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6453__auto____0;
elevations$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6453__auto____1;
return elevations$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___11136))
})();
var state__6475__auto__ = (function (){var statearr_11135 = f__6474__auto__.call(null);
(statearr_11135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___11136);

return statearr_11135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___11136))
);


//# sourceMappingURL=core.js.map