// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6473__auto___19165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___19165,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___19165,out){
return (function (state_19151){
var state_val_19152 = (state_19151[(1)]);
if((state_val_19152 === (5))){
var inst_19143 = (state_19151[(7)]);
var inst_19146 = (state_19151[(2)]);
var inst_19140 = inst_19143;
var inst_19141 = inst_19146;
var state_19151__$1 = (function (){var statearr_19153 = state_19151;
(statearr_19153[(8)] = inst_19141);

(statearr_19153[(9)] = inst_19140);

return statearr_19153;
})();
var statearr_19154_19166 = state_19151__$1;
(statearr_19154_19166[(2)] = null);

(statearr_19154_19166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19152 === (4))){
var inst_19149 = (state_19151[(2)]);
var state_19151__$1 = state_19151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19151__$1,inst_19149);
} else {
if((state_val_19152 === (3))){
var inst_19141 = (state_19151[(8)]);
var inst_19143 = (state_19151[(7)]);
var inst_19140 = (state_19151[(9)]);
var inst_19143__$1 = f.call(null,inst_19140,inst_19141);
var inst_19144 = cljs.core.async.put_BANG_.call(null,out,inst_19143__$1);
var state_19151__$1 = (function (){var statearr_19155 = state_19151;
(statearr_19155[(7)] = inst_19143__$1);

(statearr_19155[(10)] = inst_19144);

return statearr_19155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19151__$1,(5),in$);
} else {
if((state_val_19152 === (2))){
var inst_19139 = (state_19151[(2)]);
var inst_19140 = init;
var inst_19141 = inst_19139;
var state_19151__$1 = (function (){var statearr_19156 = state_19151;
(statearr_19156[(8)] = inst_19141);

(statearr_19156[(9)] = inst_19140);

return statearr_19156;
})();
var statearr_19157_19167 = state_19151__$1;
(statearr_19157_19167[(2)] = null);

(statearr_19157_19167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19152 === (1))){
var state_19151__$1 = state_19151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19151__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6473__auto___19165,out))
;
return ((function (switch__6452__auto__,c__6473__auto___19165,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6453__auto__ = null;
var vdom$elm$foldp_$_state_machine__6453__auto____0 = (function (){
var statearr_19161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19161[(0)] = vdom$elm$foldp_$_state_machine__6453__auto__);

(statearr_19161[(1)] = (1));

return statearr_19161;
});
var vdom$elm$foldp_$_state_machine__6453__auto____1 = (function (state_19151){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19162){if((e19162 instanceof Object)){
var ex__6456__auto__ = e19162;
var statearr_19163_19168 = state_19151;
(statearr_19163_19168[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19169 = state_19151;
state_19151 = G__19169;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6453__auto__ = function(state_19151){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6453__auto____1.call(this,state_19151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6453__auto____0;
vdom$elm$foldp_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6453__auto____1;
return vdom$elm$foldp_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___19165,out))
})();
var state__6475__auto__ = (function (){var statearr_19164 = f__6474__auto__.call(null);
(statearr_19164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___19165);

return statearr_19164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___19165,out))
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
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__,render){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__,render){
return (function (state_19198){
var state_val_19199 = (state_19198[(1)]);
if((state_val_19199 === (4))){
var inst_19192 = (state_19198[(2)]);
var inst_19193 = render.call(null,inst_19192);
var state_19198__$1 = (function (){var statearr_19200 = state_19198;
(statearr_19200[(7)] = inst_19193);

return statearr_19200;
})();
var statearr_19201_19210 = state_19198__$1;
(statearr_19201_19210[(2)] = null);

(statearr_19201_19210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19199 === (3))){
var inst_19196 = (state_19198[(2)]);
var state_19198__$1 = state_19198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19198__$1,inst_19196);
} else {
if((state_val_19199 === (2))){
var state_19198__$1 = state_19198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19198__$1,(4),views);
} else {
if((state_val_19199 === (1))){
var state_19198__$1 = state_19198;
var statearr_19202_19211 = state_19198__$1;
(statearr_19202_19211[(2)] = null);

(statearr_19202_19211[(1)] = (2));


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
var statearr_19206 = [null,null,null,null,null,null,null,null];
(statearr_19206[(0)] = vdom$elm$render_BANG__$_state_machine__6453__auto__);

(statearr_19206[(1)] = (1));

return statearr_19206;
});
var vdom$elm$render_BANG__$_state_machine__6453__auto____1 = (function (state_19198){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19207){if((e19207 instanceof Object)){
var ex__6456__auto__ = e19207;
var statearr_19208_19212 = state_19198;
(statearr_19208_19212[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19213 = state_19198;
state_19198 = G__19213;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6453__auto__ = function(state_19198){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6453__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6453__auto____1.call(this,state_19198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6453__auto____0;
vdom$elm$render_BANG__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6453__auto____1;
return vdom$elm$render_BANG__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__,render))
})();
var state__6475__auto__ = (function (){var statearr_19209 = f__6474__auto__.call(null);
(statearr_19209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_19209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__,render))
);

return c__6473__auto__;
});

//# sourceMappingURL=elm.js.map