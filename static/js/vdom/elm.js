// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6540__auto___30743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___30743,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___30743,out){
return (function (state_30729){
var state_val_30730 = (state_30729[(1)]);
if((state_val_30730 === (5))){
var inst_30721 = (state_30729[(7)]);
var inst_30724 = (state_30729[(2)]);
var inst_30718 = inst_30721;
var inst_30719 = inst_30724;
var state_30729__$1 = (function (){var statearr_30731 = state_30729;
(statearr_30731[(8)] = inst_30718);

(statearr_30731[(9)] = inst_30719);

return statearr_30731;
})();
var statearr_30732_30744 = state_30729__$1;
(statearr_30732_30744[(2)] = null);

(statearr_30732_30744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (4))){
var inst_30727 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30729__$1,inst_30727);
} else {
if((state_val_30730 === (3))){
var inst_30718 = (state_30729[(8)]);
var inst_30719 = (state_30729[(9)]);
var inst_30721 = (state_30729[(7)]);
var inst_30721__$1 = f.call(null,inst_30718,inst_30719);
var inst_30722 = cljs.core.async.put_BANG_.call(null,out,inst_30721__$1);
var state_30729__$1 = (function (){var statearr_30733 = state_30729;
(statearr_30733[(10)] = inst_30722);

(statearr_30733[(7)] = inst_30721__$1);

return statearr_30733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30729__$1,(5),in$);
} else {
if((state_val_30730 === (2))){
var inst_30717 = (state_30729[(2)]);
var inst_30718 = init;
var inst_30719 = inst_30717;
var state_30729__$1 = (function (){var statearr_30734 = state_30729;
(statearr_30734[(8)] = inst_30718);

(statearr_30734[(9)] = inst_30719);

return statearr_30734;
})();
var statearr_30735_30745 = state_30729__$1;
(statearr_30735_30745[(2)] = null);

(statearr_30735_30745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (1))){
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30729__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6540__auto___30743,out))
;
return ((function (switch__6478__auto__,c__6540__auto___30743,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6479__auto__ = null;
var vdom$elm$foldp_$_state_machine__6479__auto____0 = (function (){
var statearr_30739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30739[(0)] = vdom$elm$foldp_$_state_machine__6479__auto__);

(statearr_30739[(1)] = (1));

return statearr_30739;
});
var vdom$elm$foldp_$_state_machine__6479__auto____1 = (function (state_30729){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_30729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e30740){if((e30740 instanceof Object)){
var ex__6482__auto__ = e30740;
var statearr_30741_30746 = state_30729;
(statearr_30741_30746[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30747 = state_30729;
state_30729 = G__30747;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6479__auto__ = function(state_30729){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6479__auto____1.call(this,state_30729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6479__auto____0;
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6479__auto____1;
return vdom$elm$foldp_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___30743,out))
})();
var state__6542__auto__ = (function (){var statearr_30742 = f__6541__auto__.call(null);
(statearr_30742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___30743);

return statearr_30742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___30743,out))
);


return out;
});
vdom.elm.event = (function vdom$elm$event(ch,x){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,ch,x);
});
});
vdom.elm.render_BANG_ = (function vdom$elm$render_BANG_(views,elem){
var render = vdom.core.renderer.call(null,elem);
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,render){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,render){
return (function (state_30776){
var state_val_30777 = (state_30776[(1)]);
if((state_val_30777 === (4))){
var inst_30770 = (state_30776[(2)]);
var inst_30771 = render.call(null,inst_30770);
var state_30776__$1 = (function (){var statearr_30778 = state_30776;
(statearr_30778[(7)] = inst_30771);

return statearr_30778;
})();
var statearr_30779_30788 = state_30776__$1;
(statearr_30779_30788[(2)] = null);

(statearr_30779_30788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (3))){
var inst_30774 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30776__$1,inst_30774);
} else {
if((state_val_30777 === (2))){
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30776__$1,(4),views);
} else {
if((state_val_30777 === (1))){
var state_30776__$1 = state_30776;
var statearr_30780_30789 = state_30776__$1;
(statearr_30780_30789[(2)] = null);

(statearr_30780_30789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6540__auto__,render))
;
return ((function (switch__6478__auto__,c__6540__auto__,render){
return (function() {
var vdom$elm$render_BANG__$_state_machine__6479__auto__ = null;
var vdom$elm$render_BANG__$_state_machine__6479__auto____0 = (function (){
var statearr_30784 = [null,null,null,null,null,null,null,null];
(statearr_30784[(0)] = vdom$elm$render_BANG__$_state_machine__6479__auto__);

(statearr_30784[(1)] = (1));

return statearr_30784;
});
var vdom$elm$render_BANG__$_state_machine__6479__auto____1 = (function (state_30776){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_30776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e30785){if((e30785 instanceof Object)){
var ex__6482__auto__ = e30785;
var statearr_30786_30790 = state_30776;
(statearr_30786_30790[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30791 = state_30776;
state_30776 = G__30791;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6479__auto__ = function(state_30776){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6479__auto____1.call(this,state_30776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6479__auto____0;
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6479__auto____1;
return vdom$elm$render_BANG__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,render))
})();
var state__6542__auto__ = (function (){var statearr_30787 = f__6541__auto__.call(null);
(statearr_30787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_30787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__,render))
);

return c__6540__auto__;
});

//# sourceMappingURL=elm.js.map