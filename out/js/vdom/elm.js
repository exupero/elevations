// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6555__auto___13502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___13502,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___13502,out){
return (function (state_13488){
var state_val_13489 = (state_13488[(1)]);
if((state_val_13489 === (5))){
var inst_13480 = (state_13488[(7)]);
var inst_13483 = (state_13488[(2)]);
var inst_13477 = inst_13480;
var inst_13478 = inst_13483;
var state_13488__$1 = (function (){var statearr_13490 = state_13488;
(statearr_13490[(8)] = inst_13477);

(statearr_13490[(9)] = inst_13478);

return statearr_13490;
})();
var statearr_13491_13503 = state_13488__$1;
(statearr_13491_13503[(2)] = null);

(statearr_13491_13503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13489 === (4))){
var inst_13486 = (state_13488[(2)]);
var state_13488__$1 = state_13488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13488__$1,inst_13486);
} else {
if((state_val_13489 === (3))){
var inst_13477 = (state_13488[(8)]);
var inst_13478 = (state_13488[(9)]);
var inst_13480 = (state_13488[(7)]);
var inst_13480__$1 = f.call(null,inst_13477,inst_13478);
var inst_13481 = cljs.core.async.put_BANG_.call(null,out,inst_13480__$1);
var state_13488__$1 = (function (){var statearr_13492 = state_13488;
(statearr_13492[(10)] = inst_13481);

(statearr_13492[(7)] = inst_13480__$1);

return statearr_13492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13488__$1,(5),in$);
} else {
if((state_val_13489 === (2))){
var inst_13476 = (state_13488[(2)]);
var inst_13477 = init;
var inst_13478 = inst_13476;
var state_13488__$1 = (function (){var statearr_13493 = state_13488;
(statearr_13493[(8)] = inst_13477);

(statearr_13493[(9)] = inst_13478);

return statearr_13493;
})();
var statearr_13494_13504 = state_13488__$1;
(statearr_13494_13504[(2)] = null);

(statearr_13494_13504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13489 === (1))){
var state_13488__$1 = state_13488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13488__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6555__auto___13502,out))
;
return ((function (switch__6493__auto__,c__6555__auto___13502,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6494__auto__ = null;
var vdom$elm$foldp_$_state_machine__6494__auto____0 = (function (){
var statearr_13498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13498[(0)] = vdom$elm$foldp_$_state_machine__6494__auto__);

(statearr_13498[(1)] = (1));

return statearr_13498;
});
var vdom$elm$foldp_$_state_machine__6494__auto____1 = (function (state_13488){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13499){if((e13499 instanceof Object)){
var ex__6497__auto__ = e13499;
var statearr_13500_13505 = state_13488;
(statearr_13500_13505[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13506 = state_13488;
state_13488 = G__13506;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6494__auto__ = function(state_13488){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6494__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6494__auto____1.call(this,state_13488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6494__auto____0;
vdom$elm$foldp_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6494__auto____1;
return vdom$elm$foldp_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___13502,out))
})();
var state__6557__auto__ = (function (){var statearr_13501 = f__6556__auto__.call(null);
(statearr_13501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___13502);

return statearr_13501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___13502,out))
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
var c__6555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto__,render){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto__,render){
return (function (state_13535){
var state_val_13536 = (state_13535[(1)]);
if((state_val_13536 === (4))){
var inst_13529 = (state_13535[(2)]);
var inst_13530 = render.call(null,inst_13529);
var state_13535__$1 = (function (){var statearr_13537 = state_13535;
(statearr_13537[(7)] = inst_13530);

return statearr_13537;
})();
var statearr_13538_13547 = state_13535__$1;
(statearr_13538_13547[(2)] = null);

(statearr_13538_13547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13536 === (3))){
var inst_13533 = (state_13535[(2)]);
var state_13535__$1 = state_13535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13535__$1,inst_13533);
} else {
if((state_val_13536 === (2))){
var state_13535__$1 = state_13535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13535__$1,(4),views);
} else {
if((state_val_13536 === (1))){
var state_13535__$1 = state_13535;
var statearr_13539_13548 = state_13535__$1;
(statearr_13539_13548[(2)] = null);

(statearr_13539_13548[(1)] = (2));


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
var statearr_13543 = [null,null,null,null,null,null,null,null];
(statearr_13543[(0)] = vdom$elm$render_BANG__$_state_machine__6494__auto__);

(statearr_13543[(1)] = (1));

return statearr_13543;
});
var vdom$elm$render_BANG__$_state_machine__6494__auto____1 = (function (state_13535){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13544){if((e13544 instanceof Object)){
var ex__6497__auto__ = e13544;
var statearr_13545_13549 = state_13535;
(statearr_13545_13549[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13550 = state_13535;
state_13535 = G__13550;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6494__auto__ = function(state_13535){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6494__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6494__auto____1.call(this,state_13535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6494__auto____0;
vdom$elm$render_BANG__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6494__auto____1;
return vdom$elm$render_BANG__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__,render))
})();
var state__6557__auto__ = (function (){var statearr_13546 = f__6556__auto__.call(null);
(statearr_13546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_13546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto__,render))
);

return c__6555__auto__;
});

//# sourceMappingURL=elm.js.map