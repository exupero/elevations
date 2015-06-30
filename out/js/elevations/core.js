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
return (function (p1__87562_SHARP_){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),p1__87562_SHARP_.target.result], null));
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
}catch (e87579){if((e87579 instanceof Error)){
var e__12538__auto__ = e87579;
if((e__12538__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87580){if((e87580 instanceof Error)){
var e__12538__auto____$1 = e87580;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87581){if((e87581 instanceof Error)){
var e__12538__auto____$2 = e87581;
if((e__12538__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"hide-path","hide-path",627368715))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87582){if((e87582 instanceof Error)){
var e__12538__auto____$3 = e87582;
if((e__12538__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"show-path","show-path",1435565682))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87583){if((e87583 instanceof Error)){
var e__12538__auto____$4 = e87583;
if((e__12538__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__87577 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__87577,new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224))){
var pane = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112),pane);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87585){if((e87585 instanceof Error)){
var e__12538__auto____$5 = e87585;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__87577 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__87577,new cljs.core.Keyword(null,"load","load",-1318641184))){
var data = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),elevations.util.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(data)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e87586){if((e87586 instanceof Error)){
var e__12538__auto____$6 = e87586;
if((e__12538__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__87577 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__87577,new cljs.core.Keyword(null,"scrub","scrub",759182926))){
var t = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"scrub","scrub",759182926),t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87587){if((e87587 instanceof Error)){
var e__12538__auto____$7 = e87587;
if((e__12538__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__87577 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__87577,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
var geojson = elevations.util.coords__GT_geojson.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(track));
elevations.util.zoom.call(null,model.call(null,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112)),geojson);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track,new cljs.core.Keyword(null,"geojson","geojson",-719473398),geojson,new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"scrub","scrub",759182926),null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e87588){if((e87588 instanceof Error)){
var e__12538__auto____$8 = e87588;
if((e__12538__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$8;
}
} else {
throw e87588;

}
}} else {
throw e__12538__auto____$7;
}
} else {
throw e87587;

}
}} else {
throw e__12538__auto____$6;
}
} else {
throw e87586;

}
}} else {
throw e__12538__auto____$5;
}
} else {
throw e87585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e87584){if((e87584 instanceof Error)){
var e__12538__auto____$5 = e87584;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12538__auto____$5;
}
} else {
throw e87584;

}
}} else {
throw e__12538__auto____$4;
}
} else {
throw e87583;

}
}} else {
throw e__12538__auto____$3;
}
} else {
throw e87582;

}
}} else {
throw e__12538__auto____$2;
}
} else {
throw e87581;

}
}} else {
throw e__12538__auto____$1;
}
} else {
throw e87580;

}
}} else {
throw e__12538__auto__;
}
} else {
throw e87579;

}
}});
var c__6555__auto___87624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___87624){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___87624){
return (function (state_87613){
var state_val_87614 = (state_87613[(1)]);
if((state_val_87614 === (2))){
var inst_87589 = (state_87613[(7)]);
var inst_87595 = (state_87613[(8)]);
var inst_87599 = (state_87613[(2)]);
var inst_87600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_87601 = elevations.core.init_map.call(null,"map",inst_87589);
var inst_87602 = [new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224),inst_87601];
var inst_87603 = (new cljs.core.PersistentVector(null,2,(5),inst_87600,inst_87602,null));
var inst_87604 = cljs.core.async.put_BANG_.call(null,inst_87589,inst_87603);
var inst_87605 = elevations.core.drag_disable.call(null,window);
var inst_87606 = document.getElementById("drop-gpx");
var inst_87607 = elevations.core.drag_enable.call(null,inst_87606,inst_87589);
var inst_87608 = document.getElementById("drop-zone");
var inst_87609 = elevations.core.drop_enable.call(null,inst_87608,inst_87589);
var inst_87610 = document.getElementById("leaflet-overlay");
var inst_87611 = inst_87595.call(null,elevations.view.map_window,inst_87610);
var state_87613__$1 = (function (){var statearr_87615 = state_87613;
(statearr_87615[(9)] = inst_87609);

(statearr_87615[(10)] = inst_87605);

(statearr_87615[(11)] = inst_87599);

(statearr_87615[(12)] = inst_87604);

(statearr_87615[(13)] = inst_87607);

return statearr_87615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87613__$1,inst_87611);
} else {
if((state_val_87614 === (1))){
var inst_87589 = (state_87613[(7)]);
var inst_87595 = (state_87613[(8)]);
var inst_87589__$1 = cljs.core.async.chan.call(null);
var inst_87590 = [new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"scrub","scrub",759182926)];
var inst_87591 = [false,null,null,null,false,null];
var inst_87592 = cljs.core.PersistentHashMap.fromArrays(inst_87590,inst_87591);
var inst_87593 = vdom.elm.foldp.call(null,elevations.core.step,inst_87592,inst_87589__$1);
var inst_87594 = cljs.core.async.mult.call(null,inst_87593);
var inst_87595__$1 = (function (){var models = inst_87594;
var initial_model = inst_87592;
var actions = inst_87589__$1;
return ((function (models,initial_model,actions,inst_87589,inst_87595,inst_87589__$1,inst_87590,inst_87591,inst_87592,inst_87593,inst_87594,state_val_87614,c__6555__auto___87624){
return (function (ui,root){
var ms = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,models,ms);

vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,ui.call(null,actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms], null)),root);

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
});
;})(models,initial_model,actions,inst_87589,inst_87595,inst_87589__$1,inst_87590,inst_87591,inst_87592,inst_87593,inst_87594,state_val_87614,c__6555__auto___87624))
})();
var inst_87596 = inst_87595__$1.call(null,elevations.view.main,document.body);
var inst_87597 = cljs.core.async.timeout.call(null,(10));
var state_87613__$1 = (function (){var statearr_87616 = state_87613;
(statearr_87616[(7)] = inst_87589__$1);

(statearr_87616[(14)] = inst_87596);

(statearr_87616[(8)] = inst_87595__$1);

return statearr_87616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87613__$1,(2),inst_87597);
} else {
return null;
}
}
});})(c__6555__auto___87624))
;
return ((function (switch__6493__auto__,c__6555__auto___87624){
return (function() {
var elevations$core$state_machine__6494__auto__ = null;
var elevations$core$state_machine__6494__auto____0 = (function (){
var statearr_87620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87620[(0)] = elevations$core$state_machine__6494__auto__);

(statearr_87620[(1)] = (1));

return statearr_87620;
});
var elevations$core$state_machine__6494__auto____1 = (function (state_87613){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_87613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e87621){if((e87621 instanceof Object)){
var ex__6497__auto__ = e87621;
var statearr_87622_87625 = state_87613;
(statearr_87622_87625[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87626 = state_87613;
state_87613 = G__87626;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
elevations$core$state_machine__6494__auto__ = function(state_87613){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6494__auto____0.call(this);
case 1:
return elevations$core$state_machine__6494__auto____1.call(this,state_87613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6494__auto____0;
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6494__auto____1;
return elevations$core$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___87624))
})();
var state__6557__auto__ = (function (){var statearr_87623 = f__6556__auto__.call(null);
(statearr_87623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___87624);

return statearr_87623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___87624))
);


//# sourceMappingURL=core.js.map