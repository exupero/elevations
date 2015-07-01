// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6555__auto___93894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___93894,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___93894,out){
return (function (state_93880){
var state_val_93881 = (state_93880[(1)]);
if((state_val_93881 === (5))){
var inst_93872 = (state_93880[(7)]);
var inst_93875 = (state_93880[(2)]);
var inst_93869 = inst_93872;
var inst_93870 = inst_93875;
var state_93880__$1 = (function (){var statearr_93882 = state_93880;
(statearr_93882[(8)] = inst_93869);

(statearr_93882[(9)] = inst_93870);

return statearr_93882;
})();
var statearr_93883_93895 = state_93880__$1;
(statearr_93883_93895[(2)] = null);

(statearr_93883_93895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93881 === (4))){
var inst_93878 = (state_93880[(2)]);
var state_93880__$1 = state_93880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93880__$1,inst_93878);
} else {
if((state_val_93881 === (3))){
var inst_93872 = (state_93880[(7)]);
var inst_93869 = (state_93880[(8)]);
var inst_93870 = (state_93880[(9)]);
var inst_93872__$1 = f.call(null,inst_93869,inst_93870);
var inst_93873 = cljs.core.async.put_BANG_.call(null,out,inst_93872__$1);
var state_93880__$1 = (function (){var statearr_93884 = state_93880;
(statearr_93884[(7)] = inst_93872__$1);

(statearr_93884[(10)] = inst_93873);

return statearr_93884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93880__$1,(5),in$);
} else {
if((state_val_93881 === (2))){
var inst_93868 = (state_93880[(2)]);
var inst_93869 = init;
var inst_93870 = inst_93868;
var state_93880__$1 = (function (){var statearr_93885 = state_93880;
(statearr_93885[(8)] = inst_93869);

(statearr_93885[(9)] = inst_93870);

return statearr_93885;
})();
var statearr_93886_93896 = state_93880__$1;
(statearr_93886_93896[(2)] = null);

(statearr_93886_93896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93881 === (1))){
var state_93880__$1 = state_93880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93880__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6555__auto___93894,out))
;
return ((function (switch__6493__auto__,c__6555__auto___93894,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6494__auto__ = null;
var vdom$elm$foldp_$_state_machine__6494__auto____0 = (function (){
var statearr_93890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_93890[(0)] = vdom$elm$foldp_$_state_machine__6494__auto__);

(statearr_93890[(1)] = (1));

return statearr_93890;
});
var vdom$elm$foldp_$_state_machine__6494__auto____1 = (function (state_93880){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_93880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e93891){if((e93891 instanceof Object)){
var ex__6497__auto__ = e93891;
var statearr_93892_93897 = state_93880;
(statearr_93892_93897[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93898 = state_93880;
state_93880 = G__93898;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6494__auto__ = function(state_93880){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6494__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6494__auto____1.call(this,state_93880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6494__auto____0;
vdom$elm$foldp_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6494__auto____1;
return vdom$elm$foldp_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___93894,out))
})();
var state__6557__auto__ = (function (){var statearr_93893 = f__6556__auto__.call(null);
(statearr_93893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___93894);

return statearr_93893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___93894,out))
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
return (function (state_93927){
var state_val_93928 = (state_93927[(1)]);
if((state_val_93928 === (4))){
var inst_93921 = (state_93927[(2)]);
var inst_93922 = render.call(null,inst_93921);
var state_93927__$1 = (function (){var statearr_93929 = state_93927;
(statearr_93929[(7)] = inst_93922);

return statearr_93929;
})();
var statearr_93930_93939 = state_93927__$1;
(statearr_93930_93939[(2)] = null);

(statearr_93930_93939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93928 === (3))){
var inst_93925 = (state_93927[(2)]);
var state_93927__$1 = state_93927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93927__$1,inst_93925);
} else {
if((state_val_93928 === (2))){
var state_93927__$1 = state_93927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93927__$1,(4),views);
} else {
if((state_val_93928 === (1))){
var state_93927__$1 = state_93927;
var statearr_93931_93940 = state_93927__$1;
(statearr_93931_93940[(2)] = null);

(statearr_93931_93940[(1)] = (2));


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
var statearr_93935 = [null,null,null,null,null,null,null,null];
(statearr_93935[(0)] = vdom$elm$render_BANG__$_state_machine__6494__auto__);

(statearr_93935[(1)] = (1));

return statearr_93935;
});
var vdom$elm$render_BANG__$_state_machine__6494__auto____1 = (function (state_93927){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_93927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e93936){if((e93936 instanceof Object)){
var ex__6497__auto__ = e93936;
var statearr_93937_93941 = state_93927;
(statearr_93937_93941[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93942 = state_93927;
state_93927 = G__93942;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6494__auto__ = function(state_93927){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6494__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6494__auto____1.call(this,state_93927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6494__auto____0;
vdom$elm$render_BANG__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6494__auto____1;
return vdom$elm$render_BANG__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__,render))
})();
var state__6557__auto__ = (function (){var statearr_93938 = f__6556__auto__.call(null);
(statearr_93938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_93938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto__,render))
);

return c__6555__auto__;
});

//# sourceMappingURL=elm.js.map