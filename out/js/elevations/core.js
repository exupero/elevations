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
return (function (p1__99622_SHARP_){
return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",-1318641184),p1__99622_SHARP_.target.result], null));
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
}catch (e99639){if((e99639 instanceof Error)){
var e__12538__auto__ = e99639;
if((e__12538__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-on","drop-on",-1182816150))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e99640){if((e99640 instanceof Error)){
var e__12538__auto____$1 = e99640;
if((e__12538__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"drop-off","drop-off",1624574584))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e99641){if((e99641 instanceof Error)){
var e__12538__auto____$2 = e99641;
if((e__12538__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"hide-path","hide-path",627368715))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e99642){if((e99642 instanceof Error)){
var e__12538__auto____$3 = e99642;
if((e__12538__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"show-path","show-path",1435565682))){
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"show?","show?",1543842127),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e99643){if((e99643 instanceof Error)){
var e__12538__auto____$4 = e99643;
if((e__12538__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__99637 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__99637,new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224))){
var pane = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112),pane);
} else {
throw cljs.core.match.backtrack;

}
}catch (e99645){if((e99645 instanceof Error)){
var e__12538__auto____$5 = e99645;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
try{var action_0__99637 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__99637,new cljs.core.Keyword(null,"load","load",-1318641184))){
var data = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"tracks","tracks",-326768501),elevations.util.gpx__GT_tracks.call(null,goog.dom.xml.loadXml(data)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e99646){if((e99646 instanceof Error)){
var e__12538__auto____$6 = e99646;
if((e__12538__auto____$6 === cljs.core.match.backtrack)){
try{var action_0__99637 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__99637,new cljs.core.Keyword(null,"scrub","scrub",759182926))){
var t = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"scrub","scrub",759182926),t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e99647){if((e99647 instanceof Error)){
var e__12538__auto____$7 = e99647;
if((e__12538__auto____$7 === cljs.core.match.backtrack)){
try{var action_0__99637 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__99637,new cljs.core.Keyword(null,"select","select",1147833503))){
var track = cljs.core.nth.call(null,action,(1));
var geojson = elevations.util.coords__GT_geojson.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(track));
elevations.util.zoom.call(null,model.call(null,new cljs.core.Keyword(null,"map-pane","map-pane",-450448112)),geojson);

return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"selected","selected",574897764),track,new cljs.core.Keyword(null,"geojson","geojson",-719473398),geojson,new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"scrub","scrub",759182926),null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e99648){if((e99648 instanceof Error)){
var e__12538__auto____$8 = e99648;
if((e__12538__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12538__auto____$8;
}
} else {
throw e99648;

}
}} else {
throw e__12538__auto____$7;
}
} else {
throw e99647;

}
}} else {
throw e__12538__auto____$6;
}
} else {
throw e99646;

}
}} else {
throw e__12538__auto____$5;
}
} else {
throw e99645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e99644){if((e99644 instanceof Error)){
var e__12538__auto____$5 = e99644;
if((e__12538__auto____$5 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12538__auto____$5;
}
} else {
throw e99644;

}
}} else {
throw e__12538__auto____$4;
}
} else {
throw e99643;

}
}} else {
throw e__12538__auto____$3;
}
} else {
throw e99642;

}
}} else {
throw e__12538__auto____$2;
}
} else {
throw e99641;

}
}} else {
throw e__12538__auto____$1;
}
} else {
throw e99640;

}
}} else {
throw e__12538__auto__;
}
} else {
throw e99639;

}
}});
var c__6555__auto___99684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___99684){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___99684){
return (function (state_99673){
var state_val_99674 = (state_99673[(1)]);
if((state_val_99674 === (2))){
var inst_99655 = (state_99673[(7)]);
var inst_99649 = (state_99673[(8)]);
var inst_99659 = (state_99673[(2)]);
var inst_99660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_99661 = elevations.core.init_map.call(null,"map",inst_99649);
var inst_99662 = [new cljs.core.Keyword(null,"set-map-pane","set-map-pane",-1691247224),inst_99661];
var inst_99663 = (new cljs.core.PersistentVector(null,2,(5),inst_99660,inst_99662,null));
var inst_99664 = cljs.core.async.put_BANG_.call(null,inst_99649,inst_99663);
var inst_99665 = elevations.core.drag_disable.call(null,window);
var inst_99666 = document.getElementById("drop-gpx");
var inst_99667 = elevations.core.drag_enable.call(null,inst_99666,inst_99649);
var inst_99668 = document.getElementById("drop-zone");
var inst_99669 = elevations.core.drop_enable.call(null,inst_99668,inst_99649);
var inst_99670 = document.getElementById("leaflet-overlay");
var inst_99671 = inst_99655.call(null,elevations.view.map_window,inst_99670);
var state_99673__$1 = (function (){var statearr_99675 = state_99673;
(statearr_99675[(9)] = inst_99665);

(statearr_99675[(10)] = inst_99664);

(statearr_99675[(11)] = inst_99669);

(statearr_99675[(12)] = inst_99667);

(statearr_99675[(13)] = inst_99659);

return statearr_99675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_99673__$1,inst_99671);
} else {
if((state_val_99674 === (1))){
var inst_99655 = (state_99673[(7)]);
var inst_99649 = (state_99673[(8)]);
var inst_99649__$1 = cljs.core.async.chan.call(null);
var inst_99650 = [new cljs.core.Keyword(null,"droppable?","droppable?",-1391148385),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"geojson","geojson",-719473398),new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"scrub","scrub",759182926)];
var inst_99651 = [false,null,null,null,false,null];
var inst_99652 = cljs.core.PersistentHashMap.fromArrays(inst_99650,inst_99651);
var inst_99653 = vdom.elm.foldp.call(null,elevations.core.step,inst_99652,inst_99649__$1);
var inst_99654 = cljs.core.async.mult.call(null,inst_99653);
var inst_99655__$1 = (function (){var models = inst_99654;
var initial_model = inst_99652;
var actions = inst_99649__$1;
return ((function (models,initial_model,actions,inst_99655,inst_99649,inst_99649__$1,inst_99650,inst_99651,inst_99652,inst_99653,inst_99654,state_val_99674,c__6555__auto___99684){
return (function (ui,root){
var ms = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,models,ms);

vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,ui.call(null,actions),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms], null)),root);

return cljs.core.async.put_BANG_.call(null,actions,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
});
;})(models,initial_model,actions,inst_99655,inst_99649,inst_99649__$1,inst_99650,inst_99651,inst_99652,inst_99653,inst_99654,state_val_99674,c__6555__auto___99684))
})();
var inst_99656 = inst_99655__$1.call(null,elevations.view.main,document.body);
var inst_99657 = cljs.core.async.timeout.call(null,(10));
var state_99673__$1 = (function (){var statearr_99676 = state_99673;
(statearr_99676[(7)] = inst_99655__$1);

(statearr_99676[(8)] = inst_99649__$1);

(statearr_99676[(14)] = inst_99656);

return statearr_99676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99673__$1,(2),inst_99657);
} else {
return null;
}
}
});})(c__6555__auto___99684))
;
return ((function (switch__6493__auto__,c__6555__auto___99684){
return (function() {
var elevations$core$state_machine__6494__auto__ = null;
var elevations$core$state_machine__6494__auto____0 = (function (){
var statearr_99680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_99680[(0)] = elevations$core$state_machine__6494__auto__);

(statearr_99680[(1)] = (1));

return statearr_99680;
});
var elevations$core$state_machine__6494__auto____1 = (function (state_99673){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_99673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e99681){if((e99681 instanceof Object)){
var ex__6497__auto__ = e99681;
var statearr_99682_99685 = state_99673;
(statearr_99682_99685[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_99673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e99681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99686 = state_99673;
state_99673 = G__99686;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
elevations$core$state_machine__6494__auto__ = function(state_99673){
switch(arguments.length){
case 0:
return elevations$core$state_machine__6494__auto____0.call(this);
case 1:
return elevations$core$state_machine__6494__auto____1.call(this,state_99673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = elevations$core$state_machine__6494__auto____0;
elevations$core$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = elevations$core$state_machine__6494__auto____1;
return elevations$core$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___99684))
})();
var state__6557__auto__ = (function (){var statearr_99683 = f__6556__auto__.call(null);
(statearr_99683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___99684);

return statearr_99683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___99684))
);


//# sourceMappingURL=core.js.map