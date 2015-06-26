// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6473__auto___28675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___28675,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___28675,out){
return (function (state_28661){
var state_val_28662 = (state_28661[(1)]);
if((state_val_28662 === (5))){
var inst_28653 = (state_28661[(7)]);
var inst_28656 = (state_28661[(2)]);
var inst_28650 = inst_28653;
var inst_28651 = inst_28656;
var state_28661__$1 = (function (){var statearr_28663 = state_28661;
(statearr_28663[(8)] = inst_28650);

(statearr_28663[(9)] = inst_28651);

return statearr_28663;
})();
var statearr_28664_28676 = state_28661__$1;
(statearr_28664_28676[(2)] = null);

(statearr_28664_28676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (4))){
var inst_28659 = (state_28661[(2)]);
var state_28661__$1 = state_28661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28661__$1,inst_28659);
} else {
if((state_val_28662 === (3))){
var inst_28653 = (state_28661[(7)]);
var inst_28650 = (state_28661[(8)]);
var inst_28651 = (state_28661[(9)]);
var inst_28653__$1 = f.call(null,inst_28650,inst_28651);
var inst_28654 = cljs.core.async.put_BANG_.call(null,out,inst_28653__$1);
var state_28661__$1 = (function (){var statearr_28665 = state_28661;
(statearr_28665[(7)] = inst_28653__$1);

(statearr_28665[(10)] = inst_28654);

return statearr_28665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28661__$1,(5),in$);
} else {
if((state_val_28662 === (2))){
var inst_28649 = (state_28661[(2)]);
var inst_28650 = init;
var inst_28651 = inst_28649;
var state_28661__$1 = (function (){var statearr_28666 = state_28661;
(statearr_28666[(8)] = inst_28650);

(statearr_28666[(9)] = inst_28651);

return statearr_28666;
})();
var statearr_28667_28677 = state_28661__$1;
(statearr_28667_28677[(2)] = null);

(statearr_28667_28677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28662 === (1))){
var state_28661__$1 = state_28661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28661__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6473__auto___28675,out))
;
return ((function (switch__6452__auto__,c__6473__auto___28675,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6453__auto__ = null;
var vdom$elm$foldp_$_state_machine__6453__auto____0 = (function (){
var statearr_28671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28671[(0)] = vdom$elm$foldp_$_state_machine__6453__auto__);

(statearr_28671[(1)] = (1));

return statearr_28671;
});
var vdom$elm$foldp_$_state_machine__6453__auto____1 = (function (state_28661){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_28661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e28672){if((e28672 instanceof Object)){
var ex__6456__auto__ = e28672;
var statearr_28673_28678 = state_28661;
(statearr_28673_28678[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28679 = state_28661;
state_28661 = G__28679;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6453__auto__ = function(state_28661){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6453__auto____1.call(this,state_28661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6453__auto____0;
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6453__auto____1;
return vdom$elm$foldp_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___28675,out))
})();
var state__6475__auto__ = (function (){var statearr_28674 = f__6474__auto__.call(null);
(statearr_28674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___28675);

return statearr_28674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___28675,out))
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
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__,render){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__,render){
return (function (state_28708){
var state_val_28709 = (state_28708[(1)]);
if((state_val_28709 === (4))){
var inst_28702 = (state_28708[(2)]);
var inst_28703 = render.call(null,inst_28702);
var state_28708__$1 = (function (){var statearr_28710 = state_28708;
(statearr_28710[(7)] = inst_28703);

return statearr_28710;
})();
var statearr_28711_28720 = state_28708__$1;
(statearr_28711_28720[(2)] = null);

(statearr_28711_28720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (3))){
var inst_28706 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28708__$1,inst_28706);
} else {
if((state_val_28709 === (2))){
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28708__$1,(4),views);
} else {
if((state_val_28709 === (1))){
var state_28708__$1 = state_28708;
var statearr_28712_28721 = state_28708__$1;
(statearr_28712_28721[(2)] = null);

(statearr_28712_28721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6473__auto__,render))
;
return ((function (switch__6452__auto__,c__6473__auto__,render){
return (function() {
var vdom$elm$render_BANG__$_state_machine__6453__auto__ = null;
var vdom$elm$render_BANG__$_state_machine__6453__auto____0 = (function (){
var statearr_28716 = [null,null,null,null,null,null,null,null];
(statearr_28716[(0)] = vdom$elm$render_BANG__$_state_machine__6453__auto__);

(statearr_28716[(1)] = (1));

return statearr_28716;
});
var vdom$elm$render_BANG__$_state_machine__6453__auto____1 = (function (state_28708){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_28708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e28717){if((e28717 instanceof Object)){
var ex__6456__auto__ = e28717;
var statearr_28718_28722 = state_28708;
(statearr_28718_28722[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28723 = state_28708;
state_28708 = G__28723;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6453__auto__ = function(state_28708){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6453__auto____1.call(this,state_28708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6453__auto____0;
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6453__auto____1;
return vdom$elm$render_BANG__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__,render))
})();
var state__6475__auto__ = (function (){var statearr_28719 = f__6474__auto__.call(null);
(statearr_28719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_28719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__,render))
);

return c__6473__auto__;
});

//# sourceMappingURL=elm.js.map