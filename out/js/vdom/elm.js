// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6555__auto___47534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___47534,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___47534,out){
return (function (state_47520){
var state_val_47521 = (state_47520[(1)]);
if((state_val_47521 === (5))){
var inst_47512 = (state_47520[(7)]);
var inst_47515 = (state_47520[(2)]);
var inst_47509 = inst_47512;
var inst_47510 = inst_47515;
var state_47520__$1 = (function (){var statearr_47522 = state_47520;
(statearr_47522[(8)] = inst_47510);

(statearr_47522[(9)] = inst_47509);

return statearr_47522;
})();
var statearr_47523_47535 = state_47520__$1;
(statearr_47523_47535[(2)] = null);

(statearr_47523_47535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47521 === (4))){
var inst_47518 = (state_47520[(2)]);
var state_47520__$1 = state_47520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47520__$1,inst_47518);
} else {
if((state_val_47521 === (3))){
var inst_47510 = (state_47520[(8)]);
var inst_47512 = (state_47520[(7)]);
var inst_47509 = (state_47520[(9)]);
var inst_47512__$1 = f.call(null,inst_47509,inst_47510);
var inst_47513 = cljs.core.async.put_BANG_.call(null,out,inst_47512__$1);
var state_47520__$1 = (function (){var statearr_47524 = state_47520;
(statearr_47524[(7)] = inst_47512__$1);

(statearr_47524[(10)] = inst_47513);

return statearr_47524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47520__$1,(5),in$);
} else {
if((state_val_47521 === (2))){
var inst_47508 = (state_47520[(2)]);
var inst_47509 = init;
var inst_47510 = inst_47508;
var state_47520__$1 = (function (){var statearr_47525 = state_47520;
(statearr_47525[(8)] = inst_47510);

(statearr_47525[(9)] = inst_47509);

return statearr_47525;
})();
var statearr_47526_47536 = state_47520__$1;
(statearr_47526_47536[(2)] = null);

(statearr_47526_47536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47521 === (1))){
var state_47520__$1 = state_47520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47520__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6555__auto___47534,out))
;
return ((function (switch__6493__auto__,c__6555__auto___47534,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6494__auto__ = null;
var vdom$elm$foldp_$_state_machine__6494__auto____0 = (function (){
var statearr_47530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47530[(0)] = vdom$elm$foldp_$_state_machine__6494__auto__);

(statearr_47530[(1)] = (1));

return statearr_47530;
});
var vdom$elm$foldp_$_state_machine__6494__auto____1 = (function (state_47520){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_47520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e47531){if((e47531 instanceof Object)){
var ex__6497__auto__ = e47531;
var statearr_47532_47537 = state_47520;
(statearr_47532_47537[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47538 = state_47520;
state_47520 = G__47538;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6494__auto__ = function(state_47520){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6494__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6494__auto____1.call(this,state_47520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6494__auto____0;
vdom$elm$foldp_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6494__auto____1;
return vdom$elm$foldp_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___47534,out))
})();
var state__6557__auto__ = (function (){var statearr_47533 = f__6556__auto__.call(null);
(statearr_47533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___47534);

return statearr_47533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___47534,out))
);


return out;
});
vdom.elm.event = (function vdom$elm$event(ch,x){
return (function (e){
if(cljs.core.truth_(e.preventDefault)){
e.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,ch,x);
});
});
vdom.elm.render_BANG_ = (function vdom$elm$render_BANG_(views,elem){
var render = vdom.core.renderer.call(null,elem);
var c__6555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto__,render){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto__,render){
return (function (state_47567){
var state_val_47568 = (state_47567[(1)]);
if((state_val_47568 === (4))){
var inst_47561 = (state_47567[(2)]);
var inst_47562 = render.call(null,inst_47561);
var state_47567__$1 = (function (){var statearr_47569 = state_47567;
(statearr_47569[(7)] = inst_47562);

return statearr_47569;
})();
var statearr_47570_47579 = state_47567__$1;
(statearr_47570_47579[(2)] = null);

(statearr_47570_47579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47568 === (3))){
var inst_47565 = (state_47567[(2)]);
var state_47567__$1 = state_47567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47567__$1,inst_47565);
} else {
if((state_val_47568 === (2))){
var state_47567__$1 = state_47567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47567__$1,(4),views);
} else {
if((state_val_47568 === (1))){
var state_47567__$1 = state_47567;
var statearr_47571_47580 = state_47567__$1;
(statearr_47571_47580[(2)] = null);

(statearr_47571_47580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6555__auto__,render))
;
return ((function (switch__6493__auto__,c__6555__auto__,render){
return (function() {
var vdom$elm$render_BANG__$_state_machine__6494__auto__ = null;
var vdom$elm$render_BANG__$_state_machine__6494__auto____0 = (function (){
var statearr_47575 = [null,null,null,null,null,null,null,null];
(statearr_47575[(0)] = vdom$elm$render_BANG__$_state_machine__6494__auto__);

(statearr_47575[(1)] = (1));

return statearr_47575;
});
var vdom$elm$render_BANG__$_state_machine__6494__auto____1 = (function (state_47567){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_47567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e47576){if((e47576 instanceof Object)){
var ex__6497__auto__ = e47576;
var statearr_47577_47581 = state_47567;
(statearr_47577_47581[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47582 = state_47567;
state_47567 = G__47582;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6494__auto__ = function(state_47567){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6494__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6494__auto____1.call(this,state_47567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6494__auto____0;
vdom$elm$render_BANG__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6494__auto____1;
return vdom$elm$render_BANG__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__,render))
})();
var state__6557__auto__ = (function (){var statearr_47578 = f__6556__auto__.call(null);
(statearr_47578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_47578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto__,render))
);

return c__6555__auto__;
});

//# sourceMappingURL=elm.js.map