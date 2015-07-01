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
return (function (p1__98420_SHARP_){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),p1__98420_SHARP_.target.result], null));
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
}catch (e98437){if((e98437 instanceof Error)){
var e__12538__auto__ = e98437;
if((e__12538__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e98438){if((e98438 instanceof Error)){
var e__12538__auto____$1 = e98438;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e98439){if((e98439 instanceof Error)){
var e__12538__auto____$2 = e98439;
if((e__12538__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"hide-path","hide-path",627368715))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e98440){if((e98440 instanceof Error)){
var e__12538__auto____$3 = e98440;
if((e__12538__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"show-path","show-path",1435565682))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e98441){if((e98441 instanceof Error)){
var e__12538__auto____$4 = e98441;
if((e__12538__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__98435 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__98435,new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224))){
var pane = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112),pane);
} else {
throw cljs.core.match.backtrack;

}
}catch (e98443){if((e98443 instanceof Error)){
var e__12538__auto____$5 = e98443;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__98435 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__98435,new cljs.core.Keyword(null,"load","load",-1318641184))){
var data = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),elevations.util.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(data)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e98444){if((e98444 instanceof Error)){
var e__12538__auto____$6 = e98444;
if((e__12538__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__98435 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__98435,new cljs.core.Keyword(null,"scrub","scrub",759182926))){
var t = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"scrub","scrub",759182926),t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e98445){if((e98445 instanceof Error)){
var e__12538__auto____$7 = e98445;
if((e__12538__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__98435 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__98435,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
var geojson = elevations.util.coords__GT_geojson.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(track));
elevations.util.zoom.call(null,model.call(null,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112)),geojson);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track,new cljs.core.Keyword(null,"geojson","geojson",-719473398),geojson,new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"scrub","scrub",759182926),null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e98446){if((e98446 instanceof Error)){
var e__12538__auto____$8 = e98446;
if((e__12538__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$8;
}
} else {
throw e98446;

}
}} else {
throw e__12538__auto____$7;
}
} else {
throw e98445;

}
}} else {
throw e__12538__auto____$6;
}
} else {
throw e98444;

}
}} else {
throw e__12538__auto____$5;
}
} else {
throw e98443;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e98442){if((e98442 instanceof Error)){
var e__12538__auto____$5 = e98442;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12538__auto____$5;
}
} else {
throw e98442;

}
}} else {
throw e__12538__auto____$4;
}
} else {
throw e98441;

}
}} else {
throw e__12538__auto____$3;
}
} else {
throw e98440;

}
}} else {
throw e__12538__auto____$2;
}
} else {
throw e98439;

}
}} else {
throw e__12538__auto____$1;
}
} else {
throw e98438;

}
}} else {
throw e__12538__auto__;
}
} else {
throw e98437;

}
}});
var c__6555__auto___98482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___98482){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___98482){
return (function (state_98471){
var state_val_98472 = (state_98471[(1)]);
if((state_val_98472 === (2))){
var inst_98447 = (state_98471[(7)]);
var inst_98453 = (state_98471[(8)]);
var inst_98457 = (state_98471[(2)]);
var inst_98458 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_98459 = elevations.core.init_map.call(null,"map",inst_98447);
var inst_98460 = [new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224),inst_98459];
var inst_98461 = (new cljs.core.PersistentVector(null,2,(5),inst_98458,inst_98460,null));
var inst_98462 = cljs.core.async.put_BANG_.call(null,inst_98447,inst_98461);
var inst_98463 = elevations.core.drag_disable.call(null,window);
var inst_98464 = document.getElementById("drop-gpx");
var inst_98465 = elevations.core.drag_enable.call(null,inst_98464,inst_98447);
var inst_98466 = document.getElementById("drop-zone");
var inst_98467 = elevations.core.drop_enable.call(null,inst_98466,inst_98447);
var inst_98468 = document.getElementById("leaflet-overlay");
var inst_98469 = inst_98453.call(null,elevations.view.map_window,inst_98468);
var state_98471__$1 = (function (){var statearr_98473 = state_98471;
(statearr_98473[(9)] = inst_98457);

(statearr_98473[(10)] = inst_98462);

(statearr_98473[(11)] = inst_98463);

(statearr_98473[(12)] = inst_98467);

(statearr_98473[(13)] = inst_98465);

return statearr_98473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98471__$1,inst_98469);
} else {
if((state_val_98472 === (1))){
var inst_98447 = (state_98471[(7)]);
var inst_98453 = (state_98471[(8)]);
var inst_98447__$1 = cljs.core.async.chan.call(null);
var inst_98448 = [new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"scrub","scrub",759182926)];
var inst_98449 = [false,null,null,null,false,null];
var inst_98450 = cljs.core.PersistentHashMap.fromArrays(inst_98448,inst_98449);
var inst_98451 = vdom.elm.foldp.call(null,elevations.core.step,inst_98450,inst_98447__$1);
var inst_98452 = cljs.core.async.mult.call(null,inst_98451);
var inst_98453__$1 = (function (){var models = inst_98452;
var initial_model = inst_98450;
var actions = inst_98447__$1;
return ((function (models,initial_model,actions,inst_98447,inst_98453,inst_98447__$1,inst_98448,inst_98449,inst_98450,inst_98451,inst_98452,state_val_98472,c__6555__auto___98482){
return (function (ui,root){
var ms = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,models,ms);

vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,ui.call(null,actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms], null)),root);

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
});
;})(models,initial_model,actions,inst_98447,inst_98453,inst_98447__$1,inst_98448,inst_98449,inst_98450,inst_98451,inst_98452,state_val_98472,c__6555__auto___98482))
})();
var inst_98454 = inst_98453__$1.call(null,elevations.view.main,document.body);
var inst_98455 = cljs.core.async.timeout.call(null,(10));
var state_98471__$1 = (function (){var statearr_98474 = state_98471;
(statearr_98474[(14)] = inst_98454);

(statearr_98474[(7)] = inst_98447__$1);

(statearr_98474[(8)] = inst_98453__$1);

return statearr_98474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98471__$1,(2),inst_98455);
} else {
return null;
}
}
});})(c__6555__auto___98482))
;
return ((function (switch__6493__auto__,c__6555__auto___98482){
return (function() {
var elevations$core$state_machine__6494__auto__ = null;
var elevations$core$state_machine__6494__auto____0 = (function (){
var statearr_98478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_98478[(0)] = elevations$core$state_machine__6494__auto__);

(statearr_98478[(1)] = (1));

return statearr_98478;
});
var elevations$core$state_machine__6494__auto____1 = (function (state_98471){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_98471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e98479){if((e98479 instanceof Object)){
var ex__6497__auto__ = e98479;
var statearr_98480_98483 = state_98471;
(statearr_98480_98483[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98484 = state_98471;
state_98471 = G__98484;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
elevations$core$state_machine__6494__auto__ = function(state_98471){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6494__auto____0.call(this);
case 1:
return elevations$core$state_machine__6494__auto____1.call(this,state_98471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6494__auto____0;
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6494__auto____1;
return elevations$core$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___98482))
})();
var state__6557__auto__ = (function (){var statearr_98481 = f__6556__auto__.call(null);
(statearr_98481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___98482);

return statearr_98481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___98482))
);


//# sourceMappingURL=core.js.map