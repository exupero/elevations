// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t30805 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30805 = (function (f,fn_handler,meta30806){
this.f = f;
this.fn_handler = fn_handler;
this.meta30806 = meta30806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30807){
var self__ = this;
var _30807__$1 = this;
return self__.meta30806;
});

cljs.core.async.t30805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30807,meta30806__$1){
var self__ = this;
var _30807__$1 = this;
return (new cljs.core.async.t30805(self__.f,self__.fn_handler,meta30806__$1));
});

cljs.core.async.t30805.cljs$lang$type = true;

cljs.core.async.t30805.cljs$lang$ctorStr = "cljs.core.async/t30805";

cljs.core.async.t30805.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30805");
});

cljs.core.async.__GT_t30805 = (function cljs$core$async$fn_handler_$___GT_t30805(f__$1,fn_handler__$1,meta30806){
return (new cljs.core.async.t30805(f__$1,fn_handler__$1,meta30806));
});

}

return (new cljs.core.async.t30805(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__30809 = buff;
if(G__30809){
var bit__4856__auto__ = null;
if(cljs.core.truth_((function (){var or__4182__auto__ = bit__4856__auto__;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return G__30809.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30809.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30809);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30809);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__30811 = arguments.length;
switch (G__30811) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__30814 = arguments.length;
switch (G__30814) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30816 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30816);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30816,ret){
return (function (){
return fn1.call(null,val_30816);
});})(val_30816,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__30818 = arguments.length;
switch (G__30818) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5067__auto___30820 = n;
var x_30821 = (0);
while(true){
if((x_30821 < n__5067__auto___30820)){
(a[x_30821] = (0));

var G__30822 = (x_30821 + (1));
x_30821 = G__30822;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30823 = (i + (1));
i = G__30823;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30827 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30827 = (function (flag,alt_flag,meta30828){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30828 = meta30828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30827.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30829){
var self__ = this;
var _30829__$1 = this;
return self__.meta30828;
});})(flag))
;

cljs.core.async.t30827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30829,meta30828__$1){
var self__ = this;
var _30829__$1 = this;
return (new cljs.core.async.t30827(self__.flag,self__.alt_flag,meta30828__$1));
});})(flag))
;

cljs.core.async.t30827.cljs$lang$type = true;

cljs.core.async.t30827.cljs$lang$ctorStr = "cljs.core.async/t30827";

cljs.core.async.t30827.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30827");
});})(flag))
;

cljs.core.async.__GT_t30827 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t30827(flag__$1,alt_flag__$1,meta30828){
return (new cljs.core.async.t30827(flag__$1,alt_flag__$1,meta30828));
});})(flag))
;

}

return (new cljs.core.async.t30827(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t30833 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30833 = (function (cb,flag,alt_handler,meta30834){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30834 = meta30834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30833.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30835){
var self__ = this;
var _30835__$1 = this;
return self__.meta30834;
});

cljs.core.async.t30833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30835,meta30834__$1){
var self__ = this;
var _30835__$1 = this;
return (new cljs.core.async.t30833(self__.cb,self__.flag,self__.alt_handler,meta30834__$1));
});

cljs.core.async.t30833.cljs$lang$type = true;

cljs.core.async.t30833.cljs$lang$ctorStr = "cljs.core.async/t30833";

cljs.core.async.t30833.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30833");
});

cljs.core.async.__GT_t30833 = (function cljs$core$async$alt_handler_$___GT_t30833(cb__$1,flag__$1,alt_handler__$1,meta30834){
return (new cljs.core.async.t30833(cb__$1,flag__$1,alt_handler__$1,meta30834));
});

}

return (new cljs.core.async.t30833(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30836_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30836_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4182__auto__ = wport;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30838 = (i + (1));
i = G__30838;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4182__auto__ = ret;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4170__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4170__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4170__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5218__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5218__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30841){
var map__30842 = p__30841;
var map__30842__$1 = ((cljs.core.seq_QMARK_.call(null,map__30842))?cljs.core.apply.call(null,cljs.core.hash_map,map__30842):map__30842);
var opts = map__30842__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30839){
var G__30840 = cljs.core.first.call(null,seq30839);
var seq30839__$1 = cljs.core.next.call(null,seq30839);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30840,seq30839__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__30844 = arguments.length;
switch (G__30844) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6540__auto___30893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___30893){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___30893){
return (function (state_30868){
var state_val_30869 = (state_30868[(1)]);
if((state_val_30869 === (7))){
var inst_30864 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30870_30894 = state_30868__$1;
(statearr_30870_30894[(2)] = inst_30864);

(statearr_30870_30894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (1))){
var state_30868__$1 = state_30868;
var statearr_30871_30895 = state_30868__$1;
(statearr_30871_30895[(2)] = null);

(statearr_30871_30895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (4))){
var inst_30847 = (state_30868[(7)]);
var inst_30847__$1 = (state_30868[(2)]);
var inst_30848 = (inst_30847__$1 == null);
var state_30868__$1 = (function (){var statearr_30872 = state_30868;
(statearr_30872[(7)] = inst_30847__$1);

return statearr_30872;
})();
if(cljs.core.truth_(inst_30848)){
var statearr_30873_30896 = state_30868__$1;
(statearr_30873_30896[(1)] = (5));

} else {
var statearr_30874_30897 = state_30868__$1;
(statearr_30874_30897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (13))){
var state_30868__$1 = state_30868;
var statearr_30875_30898 = state_30868__$1;
(statearr_30875_30898[(2)] = null);

(statearr_30875_30898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (6))){
var inst_30847 = (state_30868[(7)]);
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30868__$1,(11),to,inst_30847);
} else {
if((state_val_30869 === (3))){
var inst_30866 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30868__$1,inst_30866);
} else {
if((state_val_30869 === (12))){
var state_30868__$1 = state_30868;
var statearr_30876_30899 = state_30868__$1;
(statearr_30876_30899[(2)] = null);

(statearr_30876_30899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (2))){
var state_30868__$1 = state_30868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30868__$1,(4),from);
} else {
if((state_val_30869 === (11))){
var inst_30857 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
if(cljs.core.truth_(inst_30857)){
var statearr_30877_30900 = state_30868__$1;
(statearr_30877_30900[(1)] = (12));

} else {
var statearr_30878_30901 = state_30868__$1;
(statearr_30878_30901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (9))){
var state_30868__$1 = state_30868;
var statearr_30879_30902 = state_30868__$1;
(statearr_30879_30902[(2)] = null);

(statearr_30879_30902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (5))){
var state_30868__$1 = state_30868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30880_30903 = state_30868__$1;
(statearr_30880_30903[(1)] = (8));

} else {
var statearr_30881_30904 = state_30868__$1;
(statearr_30881_30904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (14))){
var inst_30862 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30882_30905 = state_30868__$1;
(statearr_30882_30905[(2)] = inst_30862);

(statearr_30882_30905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (10))){
var inst_30854 = (state_30868[(2)]);
var state_30868__$1 = state_30868;
var statearr_30883_30906 = state_30868__$1;
(statearr_30883_30906[(2)] = inst_30854);

(statearr_30883_30906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30869 === (8))){
var inst_30851 = cljs.core.async.close_BANG_.call(null,to);
var state_30868__$1 = state_30868;
var statearr_30884_30907 = state_30868__$1;
(statearr_30884_30907[(2)] = inst_30851);

(statearr_30884_30907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___30893))
;
return ((function (switch__6478__auto__,c__6540__auto___30893){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_30888 = [null,null,null,null,null,null,null,null];
(statearr_30888[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_30888[(1)] = (1));

return statearr_30888;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_30868){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_30868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e30889){if((e30889 instanceof Object)){
var ex__6482__auto__ = e30889;
var statearr_30890_30908 = state_30868;
(statearr_30890_30908[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30909 = state_30868;
state_30868 = G__30909;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_30868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_30868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___30893))
})();
var state__6542__auto__ = (function (){var statearr_30891 = f__6541__auto__.call(null);
(statearr_30891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___30893);

return statearr_30891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___30893))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31093){
var vec__31094 = p__31093;
var v = cljs.core.nth.call(null,vec__31094,(0),null);
var p = cljs.core.nth.call(null,vec__31094,(1),null);
var job = vec__31094;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6540__auto___31276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___31276,res,vec__31094,v,p,job,jobs,results){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___31276,res,vec__31094,v,p,job,jobs,results){
return (function (state_31099){
var state_val_31100 = (state_31099[(1)]);
if((state_val_31100 === (2))){
var inst_31096 = (state_31099[(2)]);
var inst_31097 = cljs.core.async.close_BANG_.call(null,res);
var state_31099__$1 = (function (){var statearr_31101 = state_31099;
(statearr_31101[(7)] = inst_31096);

return statearr_31101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31099__$1,inst_31097);
} else {
if((state_val_31100 === (1))){
var state_31099__$1 = state_31099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31099__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6540__auto___31276,res,vec__31094,v,p,job,jobs,results))
;
return ((function (switch__6478__auto__,c__6540__auto___31276,res,vec__31094,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_31105 = [null,null,null,null,null,null,null,null];
(statearr_31105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_31105[(1)] = (1));

return statearr_31105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_31099){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31106){if((e31106 instanceof Object)){
var ex__6482__auto__ = e31106;
var statearr_31107_31277 = state_31099;
(statearr_31107_31277[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31278 = state_31099;
state_31099 = G__31278;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_31099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_31099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___31276,res,vec__31094,v,p,job,jobs,results))
})();
var state__6542__auto__ = (function (){var statearr_31108 = f__6541__auto__.call(null);
(statearr_31108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___31276);

return statearr_31108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___31276,res,vec__31094,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31109){
var vec__31110 = p__31109;
var v = cljs.core.nth.call(null,vec__31110,(0),null);
var p = cljs.core.nth.call(null,vec__31110,(1),null);
var job = vec__31110;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5067__auto___31279 = n;
var __31280 = (0);
while(true){
if((__31280 < n__5067__auto___31279)){
var G__31111_31281 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31111_31281) {
case "async":
var c__6540__auto___31283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31280,c__6540__auto___31283,G__31111_31281,n__5067__auto___31279,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__31280,c__6540__auto___31283,G__31111_31281,n__5067__auto___31279,jobs,results,process,async){
return (function (state_31124){
var state_val_31125 = (state_31124[(1)]);
if((state_val_31125 === (7))){
var inst_31120 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31126_31284 = state_31124__$1;
(statearr_31126_31284[(2)] = inst_31120);

(statearr_31126_31284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (6))){
var state_31124__$1 = state_31124;
var statearr_31127_31285 = state_31124__$1;
(statearr_31127_31285[(2)] = null);

(statearr_31127_31285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (5))){
var state_31124__$1 = state_31124;
var statearr_31128_31286 = state_31124__$1;
(statearr_31128_31286[(2)] = null);

(statearr_31128_31286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (4))){
var inst_31114 = (state_31124[(2)]);
var inst_31115 = async.call(null,inst_31114);
var state_31124__$1 = state_31124;
if(cljs.core.truth_(inst_31115)){
var statearr_31129_31287 = state_31124__$1;
(statearr_31129_31287[(1)] = (5));

} else {
var statearr_31130_31288 = state_31124__$1;
(statearr_31130_31288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (3))){
var inst_31122 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31124__$1,inst_31122);
} else {
if((state_val_31125 === (2))){
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31124__$1,(4),jobs);
} else {
if((state_val_31125 === (1))){
var state_31124__$1 = state_31124;
var statearr_31131_31289 = state_31124__$1;
(statearr_31131_31289[(2)] = null);

(statearr_31131_31289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31280,c__6540__auto___31283,G__31111_31281,n__5067__auto___31279,jobs,results,process,async))
;
return ((function (__31280,switch__6478__auto__,c__6540__auto___31283,G__31111_31281,n__5067__auto___31279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_31135 = [null,null,null,null,null,null,null];
(statearr_31135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_31135[(1)] = (1));

return statearr_31135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_31124){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31136){if((e31136 instanceof Object)){
var ex__6482__auto__ = e31136;
var statearr_31137_31290 = state_31124;
(statearr_31137_31290[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31291 = state_31124;
state_31124 = G__31291;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_31124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_31124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__31280,switch__6478__auto__,c__6540__auto___31283,G__31111_31281,n__5067__auto___31279,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_31138 = f__6541__auto__.call(null);
(statearr_31138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___31283);

return statearr_31138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__31280,c__6540__auto___31283,G__31111_31281,n__5067__auto___31279,jobs,results,process,async))
);


break;
case "compute":
var c__6540__auto___31292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31280,c__6540__auto___31292,G__31111_31281,n__5067__auto___31279,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__31280,c__6540__auto___31292,G__31111_31281,n__5067__auto___31279,jobs,results,process,async){
return (function (state_31151){
var state_val_31152 = (state_31151[(1)]);
if((state_val_31152 === (7))){
var inst_31147 = (state_31151[(2)]);
var state_31151__$1 = state_31151;
var statearr_31153_31293 = state_31151__$1;
(statearr_31153_31293[(2)] = inst_31147);

(statearr_31153_31293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (6))){
var state_31151__$1 = state_31151;
var statearr_31154_31294 = state_31151__$1;
(statearr_31154_31294[(2)] = null);

(statearr_31154_31294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (5))){
var state_31151__$1 = state_31151;
var statearr_31155_31295 = state_31151__$1;
(statearr_31155_31295[(2)] = null);

(statearr_31155_31295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (4))){
var inst_31141 = (state_31151[(2)]);
var inst_31142 = process.call(null,inst_31141);
var state_31151__$1 = state_31151;
if(cljs.core.truth_(inst_31142)){
var statearr_31156_31296 = state_31151__$1;
(statearr_31156_31296[(1)] = (5));

} else {
var statearr_31157_31297 = state_31151__$1;
(statearr_31157_31297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (3))){
var inst_31149 = (state_31151[(2)]);
var state_31151__$1 = state_31151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31151__$1,inst_31149);
} else {
if((state_val_31152 === (2))){
var state_31151__$1 = state_31151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31151__$1,(4),jobs);
} else {
if((state_val_31152 === (1))){
var state_31151__$1 = state_31151;
var statearr_31158_31298 = state_31151__$1;
(statearr_31158_31298[(2)] = null);

(statearr_31158_31298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31280,c__6540__auto___31292,G__31111_31281,n__5067__auto___31279,jobs,results,process,async))
;
return ((function (__31280,switch__6478__auto__,c__6540__auto___31292,G__31111_31281,n__5067__auto___31279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_31162 = [null,null,null,null,null,null,null];
(statearr_31162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_31162[(1)] = (1));

return statearr_31162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_31151){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31163){if((e31163 instanceof Object)){
var ex__6482__auto__ = e31163;
var statearr_31164_31299 = state_31151;
(statearr_31164_31299[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31300 = state_31151;
state_31151 = G__31300;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_31151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_31151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__31280,switch__6478__auto__,c__6540__auto___31292,G__31111_31281,n__5067__auto___31279,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_31165 = f__6541__auto__.call(null);
(statearr_31165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___31292);

return statearr_31165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__31280,c__6540__auto___31292,G__31111_31281,n__5067__auto___31279,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31301 = (__31280 + (1));
__31280 = G__31301;
continue;
} else {
}
break;
}

var c__6540__auto___31302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___31302,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___31302,jobs,results,process,async){
return (function (state_31187){
var state_val_31188 = (state_31187[(1)]);
if((state_val_31188 === (9))){
var inst_31180 = (state_31187[(2)]);
var state_31187__$1 = (function (){var statearr_31189 = state_31187;
(statearr_31189[(7)] = inst_31180);

return statearr_31189;
})();
var statearr_31190_31303 = state_31187__$1;
(statearr_31190_31303[(2)] = null);

(statearr_31190_31303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (8))){
var inst_31173 = (state_31187[(8)]);
var inst_31178 = (state_31187[(2)]);
var state_31187__$1 = (function (){var statearr_31191 = state_31187;
(statearr_31191[(9)] = inst_31178);

return statearr_31191;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31187__$1,(9),results,inst_31173);
} else {
if((state_val_31188 === (7))){
var inst_31183 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31192_31304 = state_31187__$1;
(statearr_31192_31304[(2)] = inst_31183);

(statearr_31192_31304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (6))){
var inst_31173 = (state_31187[(8)]);
var inst_31168 = (state_31187[(10)]);
var inst_31173__$1 = cljs.core.async.chan.call(null,(1));
var inst_31174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31175 = [inst_31168,inst_31173__$1];
var inst_31176 = (new cljs.core.PersistentVector(null,2,(5),inst_31174,inst_31175,null));
var state_31187__$1 = (function (){var statearr_31193 = state_31187;
(statearr_31193[(8)] = inst_31173__$1);

return statearr_31193;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31187__$1,(8),jobs,inst_31176);
} else {
if((state_val_31188 === (5))){
var inst_31171 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31187__$1 = state_31187;
var statearr_31194_31305 = state_31187__$1;
(statearr_31194_31305[(2)] = inst_31171);

(statearr_31194_31305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (4))){
var inst_31168 = (state_31187[(10)]);
var inst_31168__$1 = (state_31187[(2)]);
var inst_31169 = (inst_31168__$1 == null);
var state_31187__$1 = (function (){var statearr_31195 = state_31187;
(statearr_31195[(10)] = inst_31168__$1);

return statearr_31195;
})();
if(cljs.core.truth_(inst_31169)){
var statearr_31196_31306 = state_31187__$1;
(statearr_31196_31306[(1)] = (5));

} else {
var statearr_31197_31307 = state_31187__$1;
(statearr_31197_31307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (3))){
var inst_31185 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31187__$1,inst_31185);
} else {
if((state_val_31188 === (2))){
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31187__$1,(4),from);
} else {
if((state_val_31188 === (1))){
var state_31187__$1 = state_31187;
var statearr_31198_31308 = state_31187__$1;
(statearr_31198_31308[(2)] = null);

(statearr_31198_31308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___31302,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto___31302,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_31202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_31202[(1)] = (1));

return statearr_31202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_31187){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31203){if((e31203 instanceof Object)){
var ex__6482__auto__ = e31203;
var statearr_31204_31309 = state_31187;
(statearr_31204_31309[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31310 = state_31187;
state_31187 = G__31310;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_31187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_31187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___31302,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_31205 = f__6541__auto__.call(null);
(statearr_31205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___31302);

return statearr_31205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___31302,jobs,results,process,async))
);


var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,jobs,results,process,async){
return (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (7))){
var inst_31239 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31245_31311 = state_31243__$1;
(statearr_31245_31311[(2)] = inst_31239);

(statearr_31245_31311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (20))){
var state_31243__$1 = state_31243;
var statearr_31246_31312 = state_31243__$1;
(statearr_31246_31312[(2)] = null);

(statearr_31246_31312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (1))){
var state_31243__$1 = state_31243;
var statearr_31247_31313 = state_31243__$1;
(statearr_31247_31313[(2)] = null);

(statearr_31247_31313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (4))){
var inst_31208 = (state_31243[(7)]);
var inst_31208__$1 = (state_31243[(2)]);
var inst_31209 = (inst_31208__$1 == null);
var state_31243__$1 = (function (){var statearr_31248 = state_31243;
(statearr_31248[(7)] = inst_31208__$1);

return statearr_31248;
})();
if(cljs.core.truth_(inst_31209)){
var statearr_31249_31314 = state_31243__$1;
(statearr_31249_31314[(1)] = (5));

} else {
var statearr_31250_31315 = state_31243__$1;
(statearr_31250_31315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (15))){
var inst_31221 = (state_31243[(8)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31243__$1,(18),to,inst_31221);
} else {
if((state_val_31244 === (21))){
var inst_31234 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31251_31316 = state_31243__$1;
(statearr_31251_31316[(2)] = inst_31234);

(statearr_31251_31316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (13))){
var inst_31236 = (state_31243[(2)]);
var state_31243__$1 = (function (){var statearr_31252 = state_31243;
(statearr_31252[(9)] = inst_31236);

return statearr_31252;
})();
var statearr_31253_31317 = state_31243__$1;
(statearr_31253_31317[(2)] = null);

(statearr_31253_31317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (6))){
var inst_31208 = (state_31243[(7)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31243__$1,(11),inst_31208);
} else {
if((state_val_31244 === (17))){
var inst_31229 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31229)){
var statearr_31254_31318 = state_31243__$1;
(statearr_31254_31318[(1)] = (19));

} else {
var statearr_31255_31319 = state_31243__$1;
(statearr_31255_31319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (3))){
var inst_31241 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31243__$1,inst_31241);
} else {
if((state_val_31244 === (12))){
var inst_31218 = (state_31243[(10)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31243__$1,(14),inst_31218);
} else {
if((state_val_31244 === (2))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31243__$1,(4),results);
} else {
if((state_val_31244 === (19))){
var state_31243__$1 = state_31243;
var statearr_31256_31320 = state_31243__$1;
(statearr_31256_31320[(2)] = null);

(statearr_31256_31320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (11))){
var inst_31218 = (state_31243[(2)]);
var state_31243__$1 = (function (){var statearr_31257 = state_31243;
(statearr_31257[(10)] = inst_31218);

return statearr_31257;
})();
var statearr_31258_31321 = state_31243__$1;
(statearr_31258_31321[(2)] = null);

(statearr_31258_31321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (9))){
var state_31243__$1 = state_31243;
var statearr_31259_31322 = state_31243__$1;
(statearr_31259_31322[(2)] = null);

(statearr_31259_31322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (5))){
var state_31243__$1 = state_31243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31260_31323 = state_31243__$1;
(statearr_31260_31323[(1)] = (8));

} else {
var statearr_31261_31324 = state_31243__$1;
(statearr_31261_31324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (14))){
var inst_31223 = (state_31243[(11)]);
var inst_31221 = (state_31243[(8)]);
var inst_31221__$1 = (state_31243[(2)]);
var inst_31222 = (inst_31221__$1 == null);
var inst_31223__$1 = cljs.core.not.call(null,inst_31222);
var state_31243__$1 = (function (){var statearr_31262 = state_31243;
(statearr_31262[(11)] = inst_31223__$1);

(statearr_31262[(8)] = inst_31221__$1);

return statearr_31262;
})();
if(inst_31223__$1){
var statearr_31263_31325 = state_31243__$1;
(statearr_31263_31325[(1)] = (15));

} else {
var statearr_31264_31326 = state_31243__$1;
(statearr_31264_31326[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (16))){
var inst_31223 = (state_31243[(11)]);
var state_31243__$1 = state_31243;
var statearr_31265_31327 = state_31243__$1;
(statearr_31265_31327[(2)] = inst_31223);

(statearr_31265_31327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (10))){
var inst_31215 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31266_31328 = state_31243__$1;
(statearr_31266_31328[(2)] = inst_31215);

(statearr_31266_31328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (18))){
var inst_31226 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31267_31329 = state_31243__$1;
(statearr_31267_31329[(2)] = inst_31226);

(statearr_31267_31329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (8))){
var inst_31212 = cljs.core.async.close_BANG_.call(null,to);
var state_31243__$1 = state_31243;
var statearr_31268_31330 = state_31243__$1;
(statearr_31268_31330[(2)] = inst_31212);

(statearr_31268_31330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto__,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_31243){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31273){if((e31273 instanceof Object)){
var ex__6482__auto__ = e31273;
var statearr_31274_31331 = state_31243;
(statearr_31274_31331[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31332 = state_31243;
state_31243 = G__31332;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_31275 = f__6541__auto__.call(null);
(statearr_31275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__,jobs,results,process,async))
);

return c__6540__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__31334 = arguments.length;
switch (G__31334) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__31337 = arguments.length;
switch (G__31337) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__31340 = arguments.length;
switch (G__31340) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6540__auto___31392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___31392,tc,fc){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___31392,tc,fc){
return (function (state_31366){
var state_val_31367 = (state_31366[(1)]);
if((state_val_31367 === (7))){
var inst_31362 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31368_31393 = state_31366__$1;
(statearr_31368_31393[(2)] = inst_31362);

(statearr_31368_31393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (1))){
var state_31366__$1 = state_31366;
var statearr_31369_31394 = state_31366__$1;
(statearr_31369_31394[(2)] = null);

(statearr_31369_31394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (4))){
var inst_31343 = (state_31366[(7)]);
var inst_31343__$1 = (state_31366[(2)]);
var inst_31344 = (inst_31343__$1 == null);
var state_31366__$1 = (function (){var statearr_31370 = state_31366;
(statearr_31370[(7)] = inst_31343__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31344)){
var statearr_31371_31395 = state_31366__$1;
(statearr_31371_31395[(1)] = (5));

} else {
var statearr_31372_31396 = state_31366__$1;
(statearr_31372_31396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (13))){
var state_31366__$1 = state_31366;
var statearr_31373_31397 = state_31366__$1;
(statearr_31373_31397[(2)] = null);

(statearr_31373_31397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (6))){
var inst_31343 = (state_31366[(7)]);
var inst_31349 = p.call(null,inst_31343);
var state_31366__$1 = state_31366;
if(cljs.core.truth_(inst_31349)){
var statearr_31374_31398 = state_31366__$1;
(statearr_31374_31398[(1)] = (9));

} else {
var statearr_31375_31399 = state_31366__$1;
(statearr_31375_31399[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (3))){
var inst_31364 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31366__$1,inst_31364);
} else {
if((state_val_31367 === (12))){
var state_31366__$1 = state_31366;
var statearr_31376_31400 = state_31366__$1;
(statearr_31376_31400[(2)] = null);

(statearr_31376_31400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (2))){
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31366__$1,(4),ch);
} else {
if((state_val_31367 === (11))){
var inst_31343 = (state_31366[(7)]);
var inst_31353 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31366__$1,(8),inst_31353,inst_31343);
} else {
if((state_val_31367 === (9))){
var state_31366__$1 = state_31366;
var statearr_31377_31401 = state_31366__$1;
(statearr_31377_31401[(2)] = tc);

(statearr_31377_31401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (5))){
var inst_31346 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31347 = cljs.core.async.close_BANG_.call(null,fc);
var state_31366__$1 = (function (){var statearr_31378 = state_31366;
(statearr_31378[(8)] = inst_31346);

return statearr_31378;
})();
var statearr_31379_31402 = state_31366__$1;
(statearr_31379_31402[(2)] = inst_31347);

(statearr_31379_31402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (14))){
var inst_31360 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31380_31403 = state_31366__$1;
(statearr_31380_31403[(2)] = inst_31360);

(statearr_31380_31403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (10))){
var state_31366__$1 = state_31366;
var statearr_31381_31404 = state_31366__$1;
(statearr_31381_31404[(2)] = fc);

(statearr_31381_31404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (8))){
var inst_31355 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
if(cljs.core.truth_(inst_31355)){
var statearr_31382_31405 = state_31366__$1;
(statearr_31382_31405[(1)] = (12));

} else {
var statearr_31383_31406 = state_31366__$1;
(statearr_31383_31406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___31392,tc,fc))
;
return ((function (switch__6478__auto__,c__6540__auto___31392,tc,fc){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_31387 = [null,null,null,null,null,null,null,null,null];
(statearr_31387[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_31387[(1)] = (1));

return statearr_31387;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_31366){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31388){if((e31388 instanceof Object)){
var ex__6482__auto__ = e31388;
var statearr_31389_31407 = state_31366;
(statearr_31389_31407[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31408 = state_31366;
state_31366 = G__31408;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___31392,tc,fc))
})();
var state__6542__auto__ = (function (){var statearr_31390 = f__6541__auto__.call(null);
(statearr_31390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___31392);

return statearr_31390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___31392,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_31455){
var state_val_31456 = (state_31455[(1)]);
if((state_val_31456 === (7))){
var inst_31451 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
var statearr_31457_31473 = state_31455__$1;
(statearr_31457_31473[(2)] = inst_31451);

(statearr_31457_31473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (6))){
var inst_31444 = (state_31455[(7)]);
var inst_31441 = (state_31455[(8)]);
var inst_31448 = f.call(null,inst_31441,inst_31444);
var inst_31441__$1 = inst_31448;
var state_31455__$1 = (function (){var statearr_31458 = state_31455;
(statearr_31458[(8)] = inst_31441__$1);

return statearr_31458;
})();
var statearr_31459_31474 = state_31455__$1;
(statearr_31459_31474[(2)] = null);

(statearr_31459_31474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (5))){
var inst_31441 = (state_31455[(8)]);
var state_31455__$1 = state_31455;
var statearr_31460_31475 = state_31455__$1;
(statearr_31460_31475[(2)] = inst_31441);

(statearr_31460_31475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (4))){
var inst_31444 = (state_31455[(7)]);
var inst_31444__$1 = (state_31455[(2)]);
var inst_31445 = (inst_31444__$1 == null);
var state_31455__$1 = (function (){var statearr_31461 = state_31455;
(statearr_31461[(7)] = inst_31444__$1);

return statearr_31461;
})();
if(cljs.core.truth_(inst_31445)){
var statearr_31462_31476 = state_31455__$1;
(statearr_31462_31476[(1)] = (5));

} else {
var statearr_31463_31477 = state_31455__$1;
(statearr_31463_31477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (3))){
var inst_31453 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31455__$1,inst_31453);
} else {
if((state_val_31456 === (2))){
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31455__$1,(4),ch);
} else {
if((state_val_31456 === (1))){
var inst_31441 = init;
var state_31455__$1 = (function (){var statearr_31464 = state_31455;
(statearr_31464[(8)] = inst_31441);

return statearr_31464;
})();
var statearr_31465_31478 = state_31455__$1;
(statearr_31465_31478[(2)] = null);

(statearr_31465_31478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6479__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6479__auto____0 = (function (){
var statearr_31469 = [null,null,null,null,null,null,null,null,null];
(statearr_31469[(0)] = cljs$core$async$reduce_$_state_machine__6479__auto__);

(statearr_31469[(1)] = (1));

return statearr_31469;
});
var cljs$core$async$reduce_$_state_machine__6479__auto____1 = (function (state_31455){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31470){if((e31470 instanceof Object)){
var ex__6482__auto__ = e31470;
var statearr_31471_31479 = state_31455;
(statearr_31471_31479[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31480 = state_31455;
state_31455 = G__31480;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6479__auto__ = function(state_31455){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6479__auto____1.call(this,state_31455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6479__auto____0;
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6479__auto____1;
return cljs$core$async$reduce_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_31472 = f__6541__auto__.call(null);
(statearr_31472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_31472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__31482 = arguments.length;
switch (G__31482) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_31507){
var state_val_31508 = (state_31507[(1)]);
if((state_val_31508 === (7))){
var inst_31489 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31509_31533 = state_31507__$1;
(statearr_31509_31533[(2)] = inst_31489);

(statearr_31509_31533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (1))){
var inst_31483 = cljs.core.seq.call(null,coll);
var inst_31484 = inst_31483;
var state_31507__$1 = (function (){var statearr_31510 = state_31507;
(statearr_31510[(7)] = inst_31484);

return statearr_31510;
})();
var statearr_31511_31534 = state_31507__$1;
(statearr_31511_31534[(2)] = null);

(statearr_31511_31534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (4))){
var inst_31484 = (state_31507[(7)]);
var inst_31487 = cljs.core.first.call(null,inst_31484);
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31507__$1,(7),ch,inst_31487);
} else {
if((state_val_31508 === (13))){
var inst_31501 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31512_31535 = state_31507__$1;
(statearr_31512_31535[(2)] = inst_31501);

(statearr_31512_31535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (6))){
var inst_31492 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
if(cljs.core.truth_(inst_31492)){
var statearr_31513_31536 = state_31507__$1;
(statearr_31513_31536[(1)] = (8));

} else {
var statearr_31514_31537 = state_31507__$1;
(statearr_31514_31537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (3))){
var inst_31505 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31507__$1,inst_31505);
} else {
if((state_val_31508 === (12))){
var state_31507__$1 = state_31507;
var statearr_31515_31538 = state_31507__$1;
(statearr_31515_31538[(2)] = null);

(statearr_31515_31538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (2))){
var inst_31484 = (state_31507[(7)]);
var state_31507__$1 = state_31507;
if(cljs.core.truth_(inst_31484)){
var statearr_31516_31539 = state_31507__$1;
(statearr_31516_31539[(1)] = (4));

} else {
var statearr_31517_31540 = state_31507__$1;
(statearr_31517_31540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (11))){
var inst_31498 = cljs.core.async.close_BANG_.call(null,ch);
var state_31507__$1 = state_31507;
var statearr_31518_31541 = state_31507__$1;
(statearr_31518_31541[(2)] = inst_31498);

(statearr_31518_31541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (9))){
var state_31507__$1 = state_31507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31519_31542 = state_31507__$1;
(statearr_31519_31542[(1)] = (11));

} else {
var statearr_31520_31543 = state_31507__$1;
(statearr_31520_31543[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (5))){
var inst_31484 = (state_31507[(7)]);
var state_31507__$1 = state_31507;
var statearr_31521_31544 = state_31507__$1;
(statearr_31521_31544[(2)] = inst_31484);

(statearr_31521_31544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (10))){
var inst_31503 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31522_31545 = state_31507__$1;
(statearr_31522_31545[(2)] = inst_31503);

(statearr_31522_31545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (8))){
var inst_31484 = (state_31507[(7)]);
var inst_31494 = cljs.core.next.call(null,inst_31484);
var inst_31484__$1 = inst_31494;
var state_31507__$1 = (function (){var statearr_31523 = state_31507;
(statearr_31523[(7)] = inst_31484__$1);

return statearr_31523;
})();
var statearr_31524_31546 = state_31507__$1;
(statearr_31524_31546[(2)] = null);

(statearr_31524_31546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_31528 = [null,null,null,null,null,null,null,null];
(statearr_31528[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_31528[(1)] = (1));

return statearr_31528;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_31507){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31529){if((e31529 instanceof Object)){
var ex__6482__auto__ = e31529;
var statearr_31530_31547 = state_31507;
(statearr_31530_31547[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31548 = state_31507;
state_31507 = G__31548;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_31507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_31507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_31531 = f__6541__auto__.call(null);
(statearr_31531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_31531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31550 = {};
return obj31550;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4170__auto__ = _;
if(and__4170__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4818__auto__ = (((_ == null))?null:_);
return (function (){var or__4182__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31552 = {};
return obj31552;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t31774 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31774 = (function (cs,ch,mult,meta31775){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31775 = meta31775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31774.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31774.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31774.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31774.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31774.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31774.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31776){
var self__ = this;
var _31776__$1 = this;
return self__.meta31775;
});})(cs))
;

cljs.core.async.t31774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31776,meta31775__$1){
var self__ = this;
var _31776__$1 = this;
return (new cljs.core.async.t31774(self__.cs,self__.ch,self__.mult,meta31775__$1));
});})(cs))
;

cljs.core.async.t31774.cljs$lang$type = true;

cljs.core.async.t31774.cljs$lang$ctorStr = "cljs.core.async/t31774";

cljs.core.async.t31774.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t31774");
});})(cs))
;

cljs.core.async.__GT_t31774 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t31774(cs__$1,ch__$1,mult__$1,meta31775){
return (new cljs.core.async.t31774(cs__$1,ch__$1,mult__$1,meta31775));
});})(cs))
;

}

return (new cljs.core.async.t31774(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6540__auto___31995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___31995,cs,m,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___31995,cs,m,dchan,dctr,done){
return (function (state_31907){
var state_val_31908 = (state_31907[(1)]);
if((state_val_31908 === (7))){
var inst_31903 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31909_31996 = state_31907__$1;
(statearr_31909_31996[(2)] = inst_31903);

(statearr_31909_31996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (20))){
var inst_31808 = (state_31907[(7)]);
var inst_31818 = cljs.core.first.call(null,inst_31808);
var inst_31819 = cljs.core.nth.call(null,inst_31818,(0),null);
var inst_31820 = cljs.core.nth.call(null,inst_31818,(1),null);
var state_31907__$1 = (function (){var statearr_31910 = state_31907;
(statearr_31910[(8)] = inst_31819);

return statearr_31910;
})();
if(cljs.core.truth_(inst_31820)){
var statearr_31911_31997 = state_31907__$1;
(statearr_31911_31997[(1)] = (22));

} else {
var statearr_31912_31998 = state_31907__$1;
(statearr_31912_31998[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (27))){
var inst_31779 = (state_31907[(9)]);
var inst_31855 = (state_31907[(10)]);
var inst_31850 = (state_31907[(11)]);
var inst_31848 = (state_31907[(12)]);
var inst_31855__$1 = cljs.core._nth.call(null,inst_31848,inst_31850);
var inst_31856 = cljs.core.async.put_BANG_.call(null,inst_31855__$1,inst_31779,done);
var state_31907__$1 = (function (){var statearr_31913 = state_31907;
(statearr_31913[(10)] = inst_31855__$1);

return statearr_31913;
})();
if(cljs.core.truth_(inst_31856)){
var statearr_31914_31999 = state_31907__$1;
(statearr_31914_31999[(1)] = (30));

} else {
var statearr_31915_32000 = state_31907__$1;
(statearr_31915_32000[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (1))){
var state_31907__$1 = state_31907;
var statearr_31916_32001 = state_31907__$1;
(statearr_31916_32001[(2)] = null);

(statearr_31916_32001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (24))){
var inst_31808 = (state_31907[(7)]);
var inst_31825 = (state_31907[(2)]);
var inst_31826 = cljs.core.next.call(null,inst_31808);
var inst_31788 = inst_31826;
var inst_31789 = null;
var inst_31790 = (0);
var inst_31791 = (0);
var state_31907__$1 = (function (){var statearr_31917 = state_31907;
(statearr_31917[(13)] = inst_31825);

(statearr_31917[(14)] = inst_31789);

(statearr_31917[(15)] = inst_31791);

(statearr_31917[(16)] = inst_31788);

(statearr_31917[(17)] = inst_31790);

return statearr_31917;
})();
var statearr_31918_32002 = state_31907__$1;
(statearr_31918_32002[(2)] = null);

(statearr_31918_32002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (39))){
var state_31907__$1 = state_31907;
var statearr_31922_32003 = state_31907__$1;
(statearr_31922_32003[(2)] = null);

(statearr_31922_32003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (4))){
var inst_31779 = (state_31907[(9)]);
var inst_31779__$1 = (state_31907[(2)]);
var inst_31780 = (inst_31779__$1 == null);
var state_31907__$1 = (function (){var statearr_31923 = state_31907;
(statearr_31923[(9)] = inst_31779__$1);

return statearr_31923;
})();
if(cljs.core.truth_(inst_31780)){
var statearr_31924_32004 = state_31907__$1;
(statearr_31924_32004[(1)] = (5));

} else {
var statearr_31925_32005 = state_31907__$1;
(statearr_31925_32005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (15))){
var inst_31789 = (state_31907[(14)]);
var inst_31791 = (state_31907[(15)]);
var inst_31788 = (state_31907[(16)]);
var inst_31790 = (state_31907[(17)]);
var inst_31804 = (state_31907[(2)]);
var inst_31805 = (inst_31791 + (1));
var tmp31919 = inst_31789;
var tmp31920 = inst_31788;
var tmp31921 = inst_31790;
var inst_31788__$1 = tmp31920;
var inst_31789__$1 = tmp31919;
var inst_31790__$1 = tmp31921;
var inst_31791__$1 = inst_31805;
var state_31907__$1 = (function (){var statearr_31926 = state_31907;
(statearr_31926[(14)] = inst_31789__$1);

(statearr_31926[(15)] = inst_31791__$1);

(statearr_31926[(16)] = inst_31788__$1);

(statearr_31926[(18)] = inst_31804);

(statearr_31926[(17)] = inst_31790__$1);

return statearr_31926;
})();
var statearr_31927_32006 = state_31907__$1;
(statearr_31927_32006[(2)] = null);

(statearr_31927_32006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (21))){
var inst_31829 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31931_32007 = state_31907__$1;
(statearr_31931_32007[(2)] = inst_31829);

(statearr_31931_32007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (31))){
var inst_31855 = (state_31907[(10)]);
var inst_31859 = done.call(null,null);
var inst_31860 = cljs.core.async.untap_STAR_.call(null,m,inst_31855);
var state_31907__$1 = (function (){var statearr_31932 = state_31907;
(statearr_31932[(19)] = inst_31859);

return statearr_31932;
})();
var statearr_31933_32008 = state_31907__$1;
(statearr_31933_32008[(2)] = inst_31860);

(statearr_31933_32008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (32))){
var inst_31850 = (state_31907[(11)]);
var inst_31847 = (state_31907[(20)]);
var inst_31849 = (state_31907[(21)]);
var inst_31848 = (state_31907[(12)]);
var inst_31862 = (state_31907[(2)]);
var inst_31863 = (inst_31850 + (1));
var tmp31928 = inst_31847;
var tmp31929 = inst_31849;
var tmp31930 = inst_31848;
var inst_31847__$1 = tmp31928;
var inst_31848__$1 = tmp31930;
var inst_31849__$1 = tmp31929;
var inst_31850__$1 = inst_31863;
var state_31907__$1 = (function (){var statearr_31934 = state_31907;
(statearr_31934[(22)] = inst_31862);

(statearr_31934[(11)] = inst_31850__$1);

(statearr_31934[(20)] = inst_31847__$1);

(statearr_31934[(21)] = inst_31849__$1);

(statearr_31934[(12)] = inst_31848__$1);

return statearr_31934;
})();
var statearr_31935_32009 = state_31907__$1;
(statearr_31935_32009[(2)] = null);

(statearr_31935_32009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (40))){
var inst_31875 = (state_31907[(23)]);
var inst_31879 = done.call(null,null);
var inst_31880 = cljs.core.async.untap_STAR_.call(null,m,inst_31875);
var state_31907__$1 = (function (){var statearr_31936 = state_31907;
(statearr_31936[(24)] = inst_31879);

return statearr_31936;
})();
var statearr_31937_32010 = state_31907__$1;
(statearr_31937_32010[(2)] = inst_31880);

(statearr_31937_32010[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (33))){
var inst_31866 = (state_31907[(25)]);
var inst_31868 = cljs.core.chunked_seq_QMARK_.call(null,inst_31866);
var state_31907__$1 = state_31907;
if(inst_31868){
var statearr_31938_32011 = state_31907__$1;
(statearr_31938_32011[(1)] = (36));

} else {
var statearr_31939_32012 = state_31907__$1;
(statearr_31939_32012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (13))){
var inst_31798 = (state_31907[(26)]);
var inst_31801 = cljs.core.async.close_BANG_.call(null,inst_31798);
var state_31907__$1 = state_31907;
var statearr_31940_32013 = state_31907__$1;
(statearr_31940_32013[(2)] = inst_31801);

(statearr_31940_32013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (22))){
var inst_31819 = (state_31907[(8)]);
var inst_31822 = cljs.core.async.close_BANG_.call(null,inst_31819);
var state_31907__$1 = state_31907;
var statearr_31941_32014 = state_31907__$1;
(statearr_31941_32014[(2)] = inst_31822);

(statearr_31941_32014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (36))){
var inst_31866 = (state_31907[(25)]);
var inst_31870 = cljs.core.chunk_first.call(null,inst_31866);
var inst_31871 = cljs.core.chunk_rest.call(null,inst_31866);
var inst_31872 = cljs.core.count.call(null,inst_31870);
var inst_31847 = inst_31871;
var inst_31848 = inst_31870;
var inst_31849 = inst_31872;
var inst_31850 = (0);
var state_31907__$1 = (function (){var statearr_31942 = state_31907;
(statearr_31942[(11)] = inst_31850);

(statearr_31942[(20)] = inst_31847);

(statearr_31942[(21)] = inst_31849);

(statearr_31942[(12)] = inst_31848);

return statearr_31942;
})();
var statearr_31943_32015 = state_31907__$1;
(statearr_31943_32015[(2)] = null);

(statearr_31943_32015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (41))){
var inst_31866 = (state_31907[(25)]);
var inst_31882 = (state_31907[(2)]);
var inst_31883 = cljs.core.next.call(null,inst_31866);
var inst_31847 = inst_31883;
var inst_31848 = null;
var inst_31849 = (0);
var inst_31850 = (0);
var state_31907__$1 = (function (){var statearr_31944 = state_31907;
(statearr_31944[(11)] = inst_31850);

(statearr_31944[(20)] = inst_31847);

(statearr_31944[(21)] = inst_31849);

(statearr_31944[(27)] = inst_31882);

(statearr_31944[(12)] = inst_31848);

return statearr_31944;
})();
var statearr_31945_32016 = state_31907__$1;
(statearr_31945_32016[(2)] = null);

(statearr_31945_32016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (43))){
var state_31907__$1 = state_31907;
var statearr_31946_32017 = state_31907__$1;
(statearr_31946_32017[(2)] = null);

(statearr_31946_32017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (29))){
var inst_31891 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31947_32018 = state_31907__$1;
(statearr_31947_32018[(2)] = inst_31891);

(statearr_31947_32018[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (44))){
var inst_31900 = (state_31907[(2)]);
var state_31907__$1 = (function (){var statearr_31948 = state_31907;
(statearr_31948[(28)] = inst_31900);

return statearr_31948;
})();
var statearr_31949_32019 = state_31907__$1;
(statearr_31949_32019[(2)] = null);

(statearr_31949_32019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (6))){
var inst_31839 = (state_31907[(29)]);
var inst_31838 = cljs.core.deref.call(null,cs);
var inst_31839__$1 = cljs.core.keys.call(null,inst_31838);
var inst_31840 = cljs.core.count.call(null,inst_31839__$1);
var inst_31841 = cljs.core.reset_BANG_.call(null,dctr,inst_31840);
var inst_31846 = cljs.core.seq.call(null,inst_31839__$1);
var inst_31847 = inst_31846;
var inst_31848 = null;
var inst_31849 = (0);
var inst_31850 = (0);
var state_31907__$1 = (function (){var statearr_31950 = state_31907;
(statearr_31950[(11)] = inst_31850);

(statearr_31950[(29)] = inst_31839__$1);

(statearr_31950[(20)] = inst_31847);

(statearr_31950[(30)] = inst_31841);

(statearr_31950[(21)] = inst_31849);

(statearr_31950[(12)] = inst_31848);

return statearr_31950;
})();
var statearr_31951_32020 = state_31907__$1;
(statearr_31951_32020[(2)] = null);

(statearr_31951_32020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (28))){
var inst_31866 = (state_31907[(25)]);
var inst_31847 = (state_31907[(20)]);
var inst_31866__$1 = cljs.core.seq.call(null,inst_31847);
var state_31907__$1 = (function (){var statearr_31952 = state_31907;
(statearr_31952[(25)] = inst_31866__$1);

return statearr_31952;
})();
if(inst_31866__$1){
var statearr_31953_32021 = state_31907__$1;
(statearr_31953_32021[(1)] = (33));

} else {
var statearr_31954_32022 = state_31907__$1;
(statearr_31954_32022[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (25))){
var inst_31850 = (state_31907[(11)]);
var inst_31849 = (state_31907[(21)]);
var inst_31852 = (inst_31850 < inst_31849);
var inst_31853 = inst_31852;
var state_31907__$1 = state_31907;
if(cljs.core.truth_(inst_31853)){
var statearr_31955_32023 = state_31907__$1;
(statearr_31955_32023[(1)] = (27));

} else {
var statearr_31956_32024 = state_31907__$1;
(statearr_31956_32024[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (34))){
var state_31907__$1 = state_31907;
var statearr_31957_32025 = state_31907__$1;
(statearr_31957_32025[(2)] = null);

(statearr_31957_32025[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (17))){
var state_31907__$1 = state_31907;
var statearr_31958_32026 = state_31907__$1;
(statearr_31958_32026[(2)] = null);

(statearr_31958_32026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (3))){
var inst_31905 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31907__$1,inst_31905);
} else {
if((state_val_31908 === (12))){
var inst_31834 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31959_32027 = state_31907__$1;
(statearr_31959_32027[(2)] = inst_31834);

(statearr_31959_32027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (2))){
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31907__$1,(4),ch);
} else {
if((state_val_31908 === (23))){
var state_31907__$1 = state_31907;
var statearr_31960_32028 = state_31907__$1;
(statearr_31960_32028[(2)] = null);

(statearr_31960_32028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (35))){
var inst_31889 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31961_32029 = state_31907__$1;
(statearr_31961_32029[(2)] = inst_31889);

(statearr_31961_32029[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (19))){
var inst_31808 = (state_31907[(7)]);
var inst_31812 = cljs.core.chunk_first.call(null,inst_31808);
var inst_31813 = cljs.core.chunk_rest.call(null,inst_31808);
var inst_31814 = cljs.core.count.call(null,inst_31812);
var inst_31788 = inst_31813;
var inst_31789 = inst_31812;
var inst_31790 = inst_31814;
var inst_31791 = (0);
var state_31907__$1 = (function (){var statearr_31962 = state_31907;
(statearr_31962[(14)] = inst_31789);

(statearr_31962[(15)] = inst_31791);

(statearr_31962[(16)] = inst_31788);

(statearr_31962[(17)] = inst_31790);

return statearr_31962;
})();
var statearr_31963_32030 = state_31907__$1;
(statearr_31963_32030[(2)] = null);

(statearr_31963_32030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (11))){
var inst_31788 = (state_31907[(16)]);
var inst_31808 = (state_31907[(7)]);
var inst_31808__$1 = cljs.core.seq.call(null,inst_31788);
var state_31907__$1 = (function (){var statearr_31964 = state_31907;
(statearr_31964[(7)] = inst_31808__$1);

return statearr_31964;
})();
if(inst_31808__$1){
var statearr_31965_32031 = state_31907__$1;
(statearr_31965_32031[(1)] = (16));

} else {
var statearr_31966_32032 = state_31907__$1;
(statearr_31966_32032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (9))){
var inst_31836 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31967_32033 = state_31907__$1;
(statearr_31967_32033[(2)] = inst_31836);

(statearr_31967_32033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (5))){
var inst_31786 = cljs.core.deref.call(null,cs);
var inst_31787 = cljs.core.seq.call(null,inst_31786);
var inst_31788 = inst_31787;
var inst_31789 = null;
var inst_31790 = (0);
var inst_31791 = (0);
var state_31907__$1 = (function (){var statearr_31968 = state_31907;
(statearr_31968[(14)] = inst_31789);

(statearr_31968[(15)] = inst_31791);

(statearr_31968[(16)] = inst_31788);

(statearr_31968[(17)] = inst_31790);

return statearr_31968;
})();
var statearr_31969_32034 = state_31907__$1;
(statearr_31969_32034[(2)] = null);

(statearr_31969_32034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (14))){
var state_31907__$1 = state_31907;
var statearr_31970_32035 = state_31907__$1;
(statearr_31970_32035[(2)] = null);

(statearr_31970_32035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (45))){
var inst_31897 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31971_32036 = state_31907__$1;
(statearr_31971_32036[(2)] = inst_31897);

(statearr_31971_32036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (26))){
var inst_31839 = (state_31907[(29)]);
var inst_31893 = (state_31907[(2)]);
var inst_31894 = cljs.core.seq.call(null,inst_31839);
var state_31907__$1 = (function (){var statearr_31972 = state_31907;
(statearr_31972[(31)] = inst_31893);

return statearr_31972;
})();
if(inst_31894){
var statearr_31973_32037 = state_31907__$1;
(statearr_31973_32037[(1)] = (42));

} else {
var statearr_31974_32038 = state_31907__$1;
(statearr_31974_32038[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (16))){
var inst_31808 = (state_31907[(7)]);
var inst_31810 = cljs.core.chunked_seq_QMARK_.call(null,inst_31808);
var state_31907__$1 = state_31907;
if(inst_31810){
var statearr_31975_32039 = state_31907__$1;
(statearr_31975_32039[(1)] = (19));

} else {
var statearr_31976_32040 = state_31907__$1;
(statearr_31976_32040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (38))){
var inst_31886 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31977_32041 = state_31907__$1;
(statearr_31977_32041[(2)] = inst_31886);

(statearr_31977_32041[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (30))){
var state_31907__$1 = state_31907;
var statearr_31978_32042 = state_31907__$1;
(statearr_31978_32042[(2)] = null);

(statearr_31978_32042[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (10))){
var inst_31789 = (state_31907[(14)]);
var inst_31791 = (state_31907[(15)]);
var inst_31797 = cljs.core._nth.call(null,inst_31789,inst_31791);
var inst_31798 = cljs.core.nth.call(null,inst_31797,(0),null);
var inst_31799 = cljs.core.nth.call(null,inst_31797,(1),null);
var state_31907__$1 = (function (){var statearr_31979 = state_31907;
(statearr_31979[(26)] = inst_31798);

return statearr_31979;
})();
if(cljs.core.truth_(inst_31799)){
var statearr_31980_32043 = state_31907__$1;
(statearr_31980_32043[(1)] = (13));

} else {
var statearr_31981_32044 = state_31907__$1;
(statearr_31981_32044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (18))){
var inst_31832 = (state_31907[(2)]);
var state_31907__$1 = state_31907;
var statearr_31982_32045 = state_31907__$1;
(statearr_31982_32045[(2)] = inst_31832);

(statearr_31982_32045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (42))){
var state_31907__$1 = state_31907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31907__$1,(45),dchan);
} else {
if((state_val_31908 === (37))){
var inst_31779 = (state_31907[(9)]);
var inst_31875 = (state_31907[(23)]);
var inst_31866 = (state_31907[(25)]);
var inst_31875__$1 = cljs.core.first.call(null,inst_31866);
var inst_31876 = cljs.core.async.put_BANG_.call(null,inst_31875__$1,inst_31779,done);
var state_31907__$1 = (function (){var statearr_31983 = state_31907;
(statearr_31983[(23)] = inst_31875__$1);

return statearr_31983;
})();
if(cljs.core.truth_(inst_31876)){
var statearr_31984_32046 = state_31907__$1;
(statearr_31984_32046[(1)] = (39));

} else {
var statearr_31985_32047 = state_31907__$1;
(statearr_31985_32047[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31908 === (8))){
var inst_31791 = (state_31907[(15)]);
var inst_31790 = (state_31907[(17)]);
var inst_31793 = (inst_31791 < inst_31790);
var inst_31794 = inst_31793;
var state_31907__$1 = state_31907;
if(cljs.core.truth_(inst_31794)){
var statearr_31986_32048 = state_31907__$1;
(statearr_31986_32048[(1)] = (10));

} else {
var statearr_31987_32049 = state_31907__$1;
(statearr_31987_32049[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___31995,cs,m,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___31995,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6479__auto__ = null;
var cljs$core$async$mult_$_state_machine__6479__auto____0 = (function (){
var statearr_31991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31991[(0)] = cljs$core$async$mult_$_state_machine__6479__auto__);

(statearr_31991[(1)] = (1));

return statearr_31991;
});
var cljs$core$async$mult_$_state_machine__6479__auto____1 = (function (state_31907){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_31907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e31992){if((e31992 instanceof Object)){
var ex__6482__auto__ = e31992;
var statearr_31993_32050 = state_31907;
(statearr_31993_32050[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32051 = state_31907;
state_31907 = G__32051;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6479__auto__ = function(state_31907){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6479__auto____1.call(this,state_31907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6479__auto____0;
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6479__auto____1;
return cljs$core$async$mult_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___31995,cs,m,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_31994 = f__6541__auto__.call(null);
(statearr_31994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___31995);

return statearr_31994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___31995,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__32053 = arguments.length;
switch (G__32053) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32056 = {};
return obj32056;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5218__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5218__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32061){
var map__32062 = p__32061;
var map__32062__$1 = ((cljs.core.seq_QMARK_.call(null,map__32062))?cljs.core.apply.call(null,cljs.core.hash_map,map__32062):map__32062);
var opts = map__32062__$1;
var statearr_32063_32066 = state;
(statearr_32063_32066[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32062,map__32062__$1,opts){
return (function (val){
var statearr_32064_32067 = state;
(statearr_32064_32067[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32062,map__32062__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32065_32068 = state;
(statearr_32065_32068[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32057){
var G__32058 = cljs.core.first.call(null,seq32057);
var seq32057__$1 = cljs.core.next.call(null,seq32057);
var G__32059 = cljs.core.first.call(null,seq32057__$1);
var seq32057__$2 = cljs.core.next.call(null,seq32057__$1);
var G__32060 = cljs.core.first.call(null,seq32057__$2);
var seq32057__$3 = cljs.core.next.call(null,seq32057__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32058,G__32059,G__32060,seq32057__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32188 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32188 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32189){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32189 = meta32189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32188.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32188.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32190){
var self__ = this;
var _32190__$1 = this;
return self__.meta32189;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32190,meta32189__$1){
var self__ = this;
var _32190__$1 = this;
return (new cljs.core.async.t32188(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32189__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32188.cljs$lang$type = true;

cljs.core.async.t32188.cljs$lang$ctorStr = "cljs.core.async/t32188";

cljs.core.async.t32188.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t32188");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32188 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32188(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32189){
return (new cljs.core.async.t32188(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32189));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32188(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___32307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___32307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___32307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32260){
var state_val_32261 = (state_32260[(1)]);
if((state_val_32261 === (7))){
var inst_32204 = (state_32260[(7)]);
var inst_32209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32204);
var state_32260__$1 = state_32260;
var statearr_32262_32308 = state_32260__$1;
(statearr_32262_32308[(2)] = inst_32209);

(statearr_32262_32308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (20))){
var inst_32219 = (state_32260[(8)]);
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32260__$1,(23),out,inst_32219);
} else {
if((state_val_32261 === (1))){
var inst_32194 = (state_32260[(9)]);
var inst_32194__$1 = calc_state.call(null);
var inst_32195 = cljs.core.seq_QMARK_.call(null,inst_32194__$1);
var state_32260__$1 = (function (){var statearr_32263 = state_32260;
(statearr_32263[(9)] = inst_32194__$1);

return statearr_32263;
})();
if(inst_32195){
var statearr_32264_32309 = state_32260__$1;
(statearr_32264_32309[(1)] = (2));

} else {
var statearr_32265_32310 = state_32260__$1;
(statearr_32265_32310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (24))){
var inst_32212 = (state_32260[(10)]);
var inst_32204 = inst_32212;
var state_32260__$1 = (function (){var statearr_32266 = state_32260;
(statearr_32266[(7)] = inst_32204);

return statearr_32266;
})();
var statearr_32267_32311 = state_32260__$1;
(statearr_32267_32311[(2)] = null);

(statearr_32267_32311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (4))){
var inst_32194 = (state_32260[(9)]);
var inst_32200 = (state_32260[(2)]);
var inst_32201 = cljs.core.get.call(null,inst_32200,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32202 = cljs.core.get.call(null,inst_32200,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32203 = cljs.core.get.call(null,inst_32200,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32204 = inst_32194;
var state_32260__$1 = (function (){var statearr_32268 = state_32260;
(statearr_32268[(7)] = inst_32204);

(statearr_32268[(11)] = inst_32201);

(statearr_32268[(12)] = inst_32202);

(statearr_32268[(13)] = inst_32203);

return statearr_32268;
})();
var statearr_32269_32312 = state_32260__$1;
(statearr_32269_32312[(2)] = null);

(statearr_32269_32312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (15))){
var state_32260__$1 = state_32260;
var statearr_32270_32313 = state_32260__$1;
(statearr_32270_32313[(2)] = null);

(statearr_32270_32313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (21))){
var inst_32212 = (state_32260[(10)]);
var inst_32204 = inst_32212;
var state_32260__$1 = (function (){var statearr_32271 = state_32260;
(statearr_32271[(7)] = inst_32204);

return statearr_32271;
})();
var statearr_32272_32314 = state_32260__$1;
(statearr_32272_32314[(2)] = null);

(statearr_32272_32314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (13))){
var inst_32256 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32273_32315 = state_32260__$1;
(statearr_32273_32315[(2)] = inst_32256);

(statearr_32273_32315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (22))){
var inst_32254 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32274_32316 = state_32260__$1;
(statearr_32274_32316[(2)] = inst_32254);

(statearr_32274_32316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (6))){
var inst_32258 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32260__$1,inst_32258);
} else {
if((state_val_32261 === (25))){
var state_32260__$1 = state_32260;
var statearr_32275_32317 = state_32260__$1;
(statearr_32275_32317[(2)] = null);

(statearr_32275_32317[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (17))){
var inst_32234 = (state_32260[(14)]);
var state_32260__$1 = state_32260;
var statearr_32276_32318 = state_32260__$1;
(statearr_32276_32318[(2)] = inst_32234);

(statearr_32276_32318[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (3))){
var inst_32194 = (state_32260[(9)]);
var state_32260__$1 = state_32260;
var statearr_32277_32319 = state_32260__$1;
(statearr_32277_32319[(2)] = inst_32194);

(statearr_32277_32319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (12))){
var inst_32234 = (state_32260[(14)]);
var inst_32215 = (state_32260[(15)]);
var inst_32220 = (state_32260[(16)]);
var inst_32234__$1 = inst_32215.call(null,inst_32220);
var state_32260__$1 = (function (){var statearr_32278 = state_32260;
(statearr_32278[(14)] = inst_32234__$1);

return statearr_32278;
})();
if(cljs.core.truth_(inst_32234__$1)){
var statearr_32279_32320 = state_32260__$1;
(statearr_32279_32320[(1)] = (17));

} else {
var statearr_32280_32321 = state_32260__$1;
(statearr_32280_32321[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (2))){
var inst_32194 = (state_32260[(9)]);
var inst_32197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32194);
var state_32260__$1 = state_32260;
var statearr_32281_32322 = state_32260__$1;
(statearr_32281_32322[(2)] = inst_32197);

(statearr_32281_32322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (23))){
var inst_32245 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
if(cljs.core.truth_(inst_32245)){
var statearr_32282_32323 = state_32260__$1;
(statearr_32282_32323[(1)] = (24));

} else {
var statearr_32283_32324 = state_32260__$1;
(statearr_32283_32324[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (19))){
var inst_32242 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
if(cljs.core.truth_(inst_32242)){
var statearr_32284_32325 = state_32260__$1;
(statearr_32284_32325[(1)] = (20));

} else {
var statearr_32285_32326 = state_32260__$1;
(statearr_32285_32326[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (11))){
var inst_32219 = (state_32260[(8)]);
var inst_32225 = (inst_32219 == null);
var state_32260__$1 = state_32260;
if(cljs.core.truth_(inst_32225)){
var statearr_32286_32327 = state_32260__$1;
(statearr_32286_32327[(1)] = (14));

} else {
var statearr_32287_32328 = state_32260__$1;
(statearr_32287_32328[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (9))){
var inst_32212 = (state_32260[(10)]);
var inst_32212__$1 = (state_32260[(2)]);
var inst_32213 = cljs.core.get.call(null,inst_32212__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32214 = cljs.core.get.call(null,inst_32212__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32215 = cljs.core.get.call(null,inst_32212__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32260__$1 = (function (){var statearr_32288 = state_32260;
(statearr_32288[(17)] = inst_32214);

(statearr_32288[(10)] = inst_32212__$1);

(statearr_32288[(15)] = inst_32215);

return statearr_32288;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32260__$1,(10),inst_32213);
} else {
if((state_val_32261 === (5))){
var inst_32204 = (state_32260[(7)]);
var inst_32207 = cljs.core.seq_QMARK_.call(null,inst_32204);
var state_32260__$1 = state_32260;
if(inst_32207){
var statearr_32289_32329 = state_32260__$1;
(statearr_32289_32329[(1)] = (7));

} else {
var statearr_32290_32330 = state_32260__$1;
(statearr_32290_32330[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (14))){
var inst_32220 = (state_32260[(16)]);
var inst_32227 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32220);
var state_32260__$1 = state_32260;
var statearr_32291_32331 = state_32260__$1;
(statearr_32291_32331[(2)] = inst_32227);

(statearr_32291_32331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (26))){
var inst_32250 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32292_32332 = state_32260__$1;
(statearr_32292_32332[(2)] = inst_32250);

(statearr_32292_32332[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (16))){
var inst_32230 = (state_32260[(2)]);
var inst_32231 = calc_state.call(null);
var inst_32204 = inst_32231;
var state_32260__$1 = (function (){var statearr_32293 = state_32260;
(statearr_32293[(7)] = inst_32204);

(statearr_32293[(18)] = inst_32230);

return statearr_32293;
})();
var statearr_32294_32333 = state_32260__$1;
(statearr_32294_32333[(2)] = null);

(statearr_32294_32333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (10))){
var inst_32219 = (state_32260[(8)]);
var inst_32220 = (state_32260[(16)]);
var inst_32218 = (state_32260[(2)]);
var inst_32219__$1 = cljs.core.nth.call(null,inst_32218,(0),null);
var inst_32220__$1 = cljs.core.nth.call(null,inst_32218,(1),null);
var inst_32221 = (inst_32219__$1 == null);
var inst_32222 = cljs.core._EQ_.call(null,inst_32220__$1,change);
var inst_32223 = (inst_32221) || (inst_32222);
var state_32260__$1 = (function (){var statearr_32295 = state_32260;
(statearr_32295[(8)] = inst_32219__$1);

(statearr_32295[(16)] = inst_32220__$1);

return statearr_32295;
})();
if(cljs.core.truth_(inst_32223)){
var statearr_32296_32334 = state_32260__$1;
(statearr_32296_32334[(1)] = (11));

} else {
var statearr_32297_32335 = state_32260__$1;
(statearr_32297_32335[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (18))){
var inst_32214 = (state_32260[(17)]);
var inst_32215 = (state_32260[(15)]);
var inst_32220 = (state_32260[(16)]);
var inst_32237 = cljs.core.empty_QMARK_.call(null,inst_32215);
var inst_32238 = inst_32214.call(null,inst_32220);
var inst_32239 = cljs.core.not.call(null,inst_32238);
var inst_32240 = (inst_32237) && (inst_32239);
var state_32260__$1 = state_32260;
var statearr_32298_32336 = state_32260__$1;
(statearr_32298_32336[(2)] = inst_32240);

(statearr_32298_32336[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (8))){
var inst_32204 = (state_32260[(7)]);
var state_32260__$1 = state_32260;
var statearr_32299_32337 = state_32260__$1;
(statearr_32299_32337[(2)] = inst_32204);

(statearr_32299_32337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___32307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6478__auto__,c__6540__auto___32307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6479__auto__ = null;
var cljs$core$async$mix_$_state_machine__6479__auto____0 = (function (){
var statearr_32303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32303[(0)] = cljs$core$async$mix_$_state_machine__6479__auto__);

(statearr_32303[(1)] = (1));

return statearr_32303;
});
var cljs$core$async$mix_$_state_machine__6479__auto____1 = (function (state_32260){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_32260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e32304){if((e32304 instanceof Object)){
var ex__6482__auto__ = e32304;
var statearr_32305_32338 = state_32260;
(statearr_32305_32338[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32339 = state_32260;
state_32260 = G__32339;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6479__auto__ = function(state_32260){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6479__auto____1.call(this,state_32260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6479__auto____0;
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6479__auto____1;
return cljs$core$async$mix_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___32307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6542__auto__ = (function (){var statearr_32306 = f__6541__auto__.call(null);
(statearr_32306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___32307);

return statearr_32306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___32307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32341 = {};
return obj32341;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__32343 = arguments.length;
switch (G__32343) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__32347 = arguments.length;
switch (G__32347) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4182__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4182__auto__,mults){
return (function (p1__32345_SHARP_){
if(cljs.core.truth_(p1__32345_SHARP_.call(null,topic))){
return p1__32345_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32345_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32348 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32348 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta32349){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta32349 = meta32349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32348.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32348.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32348.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32348.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32348.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32350){
var self__ = this;
var _32350__$1 = this;
return self__.meta32349;
});})(mults,ensure_mult))
;

cljs.core.async.t32348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32350,meta32349__$1){
var self__ = this;
var _32350__$1 = this;
return (new cljs.core.async.t32348(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta32349__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32348.cljs$lang$type = true;

cljs.core.async.t32348.cljs$lang$ctorStr = "cljs.core.async/t32348";

cljs.core.async.t32348.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t32348");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32348 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t32348(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta32349){
return (new cljs.core.async.t32348(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta32349));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32348(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___32471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___32471,mults,ensure_mult,p){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___32471,mults,ensure_mult,p){
return (function (state_32422){
var state_val_32423 = (state_32422[(1)]);
if((state_val_32423 === (7))){
var inst_32418 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32424_32472 = state_32422__$1;
(statearr_32424_32472[(2)] = inst_32418);

(statearr_32424_32472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (20))){
var state_32422__$1 = state_32422;
var statearr_32425_32473 = state_32422__$1;
(statearr_32425_32473[(2)] = null);

(statearr_32425_32473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (1))){
var state_32422__$1 = state_32422;
var statearr_32426_32474 = state_32422__$1;
(statearr_32426_32474[(2)] = null);

(statearr_32426_32474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (24))){
var inst_32401 = (state_32422[(7)]);
var inst_32410 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32401);
var state_32422__$1 = state_32422;
var statearr_32427_32475 = state_32422__$1;
(statearr_32427_32475[(2)] = inst_32410);

(statearr_32427_32475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (4))){
var inst_32353 = (state_32422[(8)]);
var inst_32353__$1 = (state_32422[(2)]);
var inst_32354 = (inst_32353__$1 == null);
var state_32422__$1 = (function (){var statearr_32428 = state_32422;
(statearr_32428[(8)] = inst_32353__$1);

return statearr_32428;
})();
if(cljs.core.truth_(inst_32354)){
var statearr_32429_32476 = state_32422__$1;
(statearr_32429_32476[(1)] = (5));

} else {
var statearr_32430_32477 = state_32422__$1;
(statearr_32430_32477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (15))){
var inst_32395 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32431_32478 = state_32422__$1;
(statearr_32431_32478[(2)] = inst_32395);

(statearr_32431_32478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (21))){
var inst_32415 = (state_32422[(2)]);
var state_32422__$1 = (function (){var statearr_32432 = state_32422;
(statearr_32432[(9)] = inst_32415);

return statearr_32432;
})();
var statearr_32433_32479 = state_32422__$1;
(statearr_32433_32479[(2)] = null);

(statearr_32433_32479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (13))){
var inst_32377 = (state_32422[(10)]);
var inst_32379 = cljs.core.chunked_seq_QMARK_.call(null,inst_32377);
var state_32422__$1 = state_32422;
if(inst_32379){
var statearr_32434_32480 = state_32422__$1;
(statearr_32434_32480[(1)] = (16));

} else {
var statearr_32435_32481 = state_32422__$1;
(statearr_32435_32481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (22))){
var inst_32407 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32407)){
var statearr_32436_32482 = state_32422__$1;
(statearr_32436_32482[(1)] = (23));

} else {
var statearr_32437_32483 = state_32422__$1;
(statearr_32437_32483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (6))){
var inst_32401 = (state_32422[(7)]);
var inst_32353 = (state_32422[(8)]);
var inst_32403 = (state_32422[(11)]);
var inst_32401__$1 = topic_fn.call(null,inst_32353);
var inst_32402 = cljs.core.deref.call(null,mults);
var inst_32403__$1 = cljs.core.get.call(null,inst_32402,inst_32401__$1);
var state_32422__$1 = (function (){var statearr_32438 = state_32422;
(statearr_32438[(7)] = inst_32401__$1);

(statearr_32438[(11)] = inst_32403__$1);

return statearr_32438;
})();
if(cljs.core.truth_(inst_32403__$1)){
var statearr_32439_32484 = state_32422__$1;
(statearr_32439_32484[(1)] = (19));

} else {
var statearr_32440_32485 = state_32422__$1;
(statearr_32440_32485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (25))){
var inst_32412 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32441_32486 = state_32422__$1;
(statearr_32441_32486[(2)] = inst_32412);

(statearr_32441_32486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (17))){
var inst_32377 = (state_32422[(10)]);
var inst_32386 = cljs.core.first.call(null,inst_32377);
var inst_32387 = cljs.core.async.muxch_STAR_.call(null,inst_32386);
var inst_32388 = cljs.core.async.close_BANG_.call(null,inst_32387);
var inst_32389 = cljs.core.next.call(null,inst_32377);
var inst_32363 = inst_32389;
var inst_32364 = null;
var inst_32365 = (0);
var inst_32366 = (0);
var state_32422__$1 = (function (){var statearr_32442 = state_32422;
(statearr_32442[(12)] = inst_32388);

(statearr_32442[(13)] = inst_32363);

(statearr_32442[(14)] = inst_32365);

(statearr_32442[(15)] = inst_32364);

(statearr_32442[(16)] = inst_32366);

return statearr_32442;
})();
var statearr_32443_32487 = state_32422__$1;
(statearr_32443_32487[(2)] = null);

(statearr_32443_32487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (3))){
var inst_32420 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32422__$1,inst_32420);
} else {
if((state_val_32423 === (12))){
var inst_32397 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32444_32488 = state_32422__$1;
(statearr_32444_32488[(2)] = inst_32397);

(statearr_32444_32488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (2))){
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32422__$1,(4),ch);
} else {
if((state_val_32423 === (23))){
var state_32422__$1 = state_32422;
var statearr_32445_32489 = state_32422__$1;
(statearr_32445_32489[(2)] = null);

(statearr_32445_32489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (19))){
var inst_32353 = (state_32422[(8)]);
var inst_32403 = (state_32422[(11)]);
var inst_32405 = cljs.core.async.muxch_STAR_.call(null,inst_32403);
var state_32422__$1 = state_32422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32422__$1,(22),inst_32405,inst_32353);
} else {
if((state_val_32423 === (11))){
var inst_32377 = (state_32422[(10)]);
var inst_32363 = (state_32422[(13)]);
var inst_32377__$1 = cljs.core.seq.call(null,inst_32363);
var state_32422__$1 = (function (){var statearr_32446 = state_32422;
(statearr_32446[(10)] = inst_32377__$1);

return statearr_32446;
})();
if(inst_32377__$1){
var statearr_32447_32490 = state_32422__$1;
(statearr_32447_32490[(1)] = (13));

} else {
var statearr_32448_32491 = state_32422__$1;
(statearr_32448_32491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (9))){
var inst_32399 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32449_32492 = state_32422__$1;
(statearr_32449_32492[(2)] = inst_32399);

(statearr_32449_32492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (5))){
var inst_32360 = cljs.core.deref.call(null,mults);
var inst_32361 = cljs.core.vals.call(null,inst_32360);
var inst_32362 = cljs.core.seq.call(null,inst_32361);
var inst_32363 = inst_32362;
var inst_32364 = null;
var inst_32365 = (0);
var inst_32366 = (0);
var state_32422__$1 = (function (){var statearr_32450 = state_32422;
(statearr_32450[(13)] = inst_32363);

(statearr_32450[(14)] = inst_32365);

(statearr_32450[(15)] = inst_32364);

(statearr_32450[(16)] = inst_32366);

return statearr_32450;
})();
var statearr_32451_32493 = state_32422__$1;
(statearr_32451_32493[(2)] = null);

(statearr_32451_32493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (14))){
var state_32422__$1 = state_32422;
var statearr_32455_32494 = state_32422__$1;
(statearr_32455_32494[(2)] = null);

(statearr_32455_32494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (16))){
var inst_32377 = (state_32422[(10)]);
var inst_32381 = cljs.core.chunk_first.call(null,inst_32377);
var inst_32382 = cljs.core.chunk_rest.call(null,inst_32377);
var inst_32383 = cljs.core.count.call(null,inst_32381);
var inst_32363 = inst_32382;
var inst_32364 = inst_32381;
var inst_32365 = inst_32383;
var inst_32366 = (0);
var state_32422__$1 = (function (){var statearr_32456 = state_32422;
(statearr_32456[(13)] = inst_32363);

(statearr_32456[(14)] = inst_32365);

(statearr_32456[(15)] = inst_32364);

(statearr_32456[(16)] = inst_32366);

return statearr_32456;
})();
var statearr_32457_32495 = state_32422__$1;
(statearr_32457_32495[(2)] = null);

(statearr_32457_32495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (10))){
var inst_32363 = (state_32422[(13)]);
var inst_32365 = (state_32422[(14)]);
var inst_32364 = (state_32422[(15)]);
var inst_32366 = (state_32422[(16)]);
var inst_32371 = cljs.core._nth.call(null,inst_32364,inst_32366);
var inst_32372 = cljs.core.async.muxch_STAR_.call(null,inst_32371);
var inst_32373 = cljs.core.async.close_BANG_.call(null,inst_32372);
var inst_32374 = (inst_32366 + (1));
var tmp32452 = inst_32363;
var tmp32453 = inst_32365;
var tmp32454 = inst_32364;
var inst_32363__$1 = tmp32452;
var inst_32364__$1 = tmp32454;
var inst_32365__$1 = tmp32453;
var inst_32366__$1 = inst_32374;
var state_32422__$1 = (function (){var statearr_32458 = state_32422;
(statearr_32458[(17)] = inst_32373);

(statearr_32458[(13)] = inst_32363__$1);

(statearr_32458[(14)] = inst_32365__$1);

(statearr_32458[(15)] = inst_32364__$1);

(statearr_32458[(16)] = inst_32366__$1);

return statearr_32458;
})();
var statearr_32459_32496 = state_32422__$1;
(statearr_32459_32496[(2)] = null);

(statearr_32459_32496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (18))){
var inst_32392 = (state_32422[(2)]);
var state_32422__$1 = state_32422;
var statearr_32460_32497 = state_32422__$1;
(statearr_32460_32497[(2)] = inst_32392);

(statearr_32460_32497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (8))){
var inst_32365 = (state_32422[(14)]);
var inst_32366 = (state_32422[(16)]);
var inst_32368 = (inst_32366 < inst_32365);
var inst_32369 = inst_32368;
var state_32422__$1 = state_32422;
if(cljs.core.truth_(inst_32369)){
var statearr_32461_32498 = state_32422__$1;
(statearr_32461_32498[(1)] = (10));

} else {
var statearr_32462_32499 = state_32422__$1;
(statearr_32462_32499[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___32471,mults,ensure_mult,p))
;
return ((function (switch__6478__auto__,c__6540__auto___32471,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_32466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32466[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_32466[(1)] = (1));

return statearr_32466;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_32422){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_32422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e32467){if((e32467 instanceof Object)){
var ex__6482__auto__ = e32467;
var statearr_32468_32500 = state_32422;
(statearr_32468_32500[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32422;
state_32422 = G__32501;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_32422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_32422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___32471,mults,ensure_mult,p))
})();
var state__6542__auto__ = (function (){var statearr_32469 = f__6541__auto__.call(null);
(statearr_32469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___32471);

return statearr_32469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___32471,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__32503 = arguments.length;
switch (G__32503) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__32506 = arguments.length;
switch (G__32506) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__32509 = arguments.length;
switch (G__32509) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6540__auto___32579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___32579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___32579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32548){
var state_val_32549 = (state_32548[(1)]);
if((state_val_32549 === (7))){
var state_32548__$1 = state_32548;
var statearr_32550_32580 = state_32548__$1;
(statearr_32550_32580[(2)] = null);

(statearr_32550_32580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (1))){
var state_32548__$1 = state_32548;
var statearr_32551_32581 = state_32548__$1;
(statearr_32551_32581[(2)] = null);

(statearr_32551_32581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (4))){
var inst_32512 = (state_32548[(7)]);
var inst_32514 = (inst_32512 < cnt);
var state_32548__$1 = state_32548;
if(cljs.core.truth_(inst_32514)){
var statearr_32552_32582 = state_32548__$1;
(statearr_32552_32582[(1)] = (6));

} else {
var statearr_32553_32583 = state_32548__$1;
(statearr_32553_32583[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (15))){
var inst_32544 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
var statearr_32554_32584 = state_32548__$1;
(statearr_32554_32584[(2)] = inst_32544);

(statearr_32554_32584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (13))){
var inst_32537 = cljs.core.async.close_BANG_.call(null,out);
var state_32548__$1 = state_32548;
var statearr_32555_32585 = state_32548__$1;
(statearr_32555_32585[(2)] = inst_32537);

(statearr_32555_32585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (6))){
var state_32548__$1 = state_32548;
var statearr_32556_32586 = state_32548__$1;
(statearr_32556_32586[(2)] = null);

(statearr_32556_32586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (3))){
var inst_32546 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32548__$1,inst_32546);
} else {
if((state_val_32549 === (12))){
var inst_32534 = (state_32548[(8)]);
var inst_32534__$1 = (state_32548[(2)]);
var inst_32535 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32534__$1);
var state_32548__$1 = (function (){var statearr_32557 = state_32548;
(statearr_32557[(8)] = inst_32534__$1);

return statearr_32557;
})();
if(cljs.core.truth_(inst_32535)){
var statearr_32558_32587 = state_32548__$1;
(statearr_32558_32587[(1)] = (13));

} else {
var statearr_32559_32588 = state_32548__$1;
(statearr_32559_32588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (2))){
var inst_32511 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32512 = (0);
var state_32548__$1 = (function (){var statearr_32560 = state_32548;
(statearr_32560[(7)] = inst_32512);

(statearr_32560[(9)] = inst_32511);

return statearr_32560;
})();
var statearr_32561_32589 = state_32548__$1;
(statearr_32561_32589[(2)] = null);

(statearr_32561_32589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (11))){
var inst_32512 = (state_32548[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32548,(10),Object,null,(9));
var inst_32521 = chs__$1.call(null,inst_32512);
var inst_32522 = done.call(null,inst_32512);
var inst_32523 = cljs.core.async.take_BANG_.call(null,inst_32521,inst_32522);
var state_32548__$1 = state_32548;
var statearr_32562_32590 = state_32548__$1;
(statearr_32562_32590[(2)] = inst_32523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (9))){
var inst_32512 = (state_32548[(7)]);
var inst_32525 = (state_32548[(2)]);
var inst_32526 = (inst_32512 + (1));
var inst_32512__$1 = inst_32526;
var state_32548__$1 = (function (){var statearr_32563 = state_32548;
(statearr_32563[(7)] = inst_32512__$1);

(statearr_32563[(10)] = inst_32525);

return statearr_32563;
})();
var statearr_32564_32591 = state_32548__$1;
(statearr_32564_32591[(2)] = null);

(statearr_32564_32591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (5))){
var inst_32532 = (state_32548[(2)]);
var state_32548__$1 = (function (){var statearr_32565 = state_32548;
(statearr_32565[(11)] = inst_32532);

return statearr_32565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32548__$1,(12),dchan);
} else {
if((state_val_32549 === (14))){
var inst_32534 = (state_32548[(8)]);
var inst_32539 = cljs.core.apply.call(null,f,inst_32534);
var state_32548__$1 = state_32548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32548__$1,(16),out,inst_32539);
} else {
if((state_val_32549 === (16))){
var inst_32541 = (state_32548[(2)]);
var state_32548__$1 = (function (){var statearr_32566 = state_32548;
(statearr_32566[(12)] = inst_32541);

return statearr_32566;
})();
var statearr_32567_32592 = state_32548__$1;
(statearr_32567_32592[(2)] = null);

(statearr_32567_32592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (10))){
var inst_32516 = (state_32548[(2)]);
var inst_32517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32548__$1 = (function (){var statearr_32568 = state_32548;
(statearr_32568[(13)] = inst_32516);

return statearr_32568;
})();
var statearr_32569_32593 = state_32548__$1;
(statearr_32569_32593[(2)] = inst_32517);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (8))){
var inst_32530 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
var statearr_32570_32594 = state_32548__$1;
(statearr_32570_32594[(2)] = inst_32530);

(statearr_32570_32594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___32579,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___32579,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_32574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32574[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_32574[(1)] = (1));

return statearr_32574;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_32548){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_32548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e32575){if((e32575 instanceof Object)){
var ex__6482__auto__ = e32575;
var statearr_32576_32595 = state_32548;
(statearr_32576_32595[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32596 = state_32548;
state_32548 = G__32596;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_32548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_32548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___32579,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_32577 = f__6541__auto__.call(null);
(statearr_32577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___32579);

return statearr_32577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___32579,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__32599 = arguments.length;
switch (G__32599) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___32654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___32654,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___32654,out){
return (function (state_32629){
var state_val_32630 = (state_32629[(1)]);
if((state_val_32630 === (7))){
var inst_32609 = (state_32629[(7)]);
var inst_32608 = (state_32629[(8)]);
var inst_32608__$1 = (state_32629[(2)]);
var inst_32609__$1 = cljs.core.nth.call(null,inst_32608__$1,(0),null);
var inst_32610 = cljs.core.nth.call(null,inst_32608__$1,(1),null);
var inst_32611 = (inst_32609__$1 == null);
var state_32629__$1 = (function (){var statearr_32631 = state_32629;
(statearr_32631[(7)] = inst_32609__$1);

(statearr_32631[(8)] = inst_32608__$1);

(statearr_32631[(9)] = inst_32610);

return statearr_32631;
})();
if(cljs.core.truth_(inst_32611)){
var statearr_32632_32655 = state_32629__$1;
(statearr_32632_32655[(1)] = (8));

} else {
var statearr_32633_32656 = state_32629__$1;
(statearr_32633_32656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (1))){
var inst_32600 = cljs.core.vec.call(null,chs);
var inst_32601 = inst_32600;
var state_32629__$1 = (function (){var statearr_32634 = state_32629;
(statearr_32634[(10)] = inst_32601);

return statearr_32634;
})();
var statearr_32635_32657 = state_32629__$1;
(statearr_32635_32657[(2)] = null);

(statearr_32635_32657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (4))){
var inst_32601 = (state_32629[(10)]);
var state_32629__$1 = state_32629;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32629__$1,(7),inst_32601);
} else {
if((state_val_32630 === (6))){
var inst_32625 = (state_32629[(2)]);
var state_32629__$1 = state_32629;
var statearr_32636_32658 = state_32629__$1;
(statearr_32636_32658[(2)] = inst_32625);

(statearr_32636_32658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (3))){
var inst_32627 = (state_32629[(2)]);
var state_32629__$1 = state_32629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32629__$1,inst_32627);
} else {
if((state_val_32630 === (2))){
var inst_32601 = (state_32629[(10)]);
var inst_32603 = cljs.core.count.call(null,inst_32601);
var inst_32604 = (inst_32603 > (0));
var state_32629__$1 = state_32629;
if(cljs.core.truth_(inst_32604)){
var statearr_32638_32659 = state_32629__$1;
(statearr_32638_32659[(1)] = (4));

} else {
var statearr_32639_32660 = state_32629__$1;
(statearr_32639_32660[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (11))){
var inst_32601 = (state_32629[(10)]);
var inst_32618 = (state_32629[(2)]);
var tmp32637 = inst_32601;
var inst_32601__$1 = tmp32637;
var state_32629__$1 = (function (){var statearr_32640 = state_32629;
(statearr_32640[(10)] = inst_32601__$1);

(statearr_32640[(11)] = inst_32618);

return statearr_32640;
})();
var statearr_32641_32661 = state_32629__$1;
(statearr_32641_32661[(2)] = null);

(statearr_32641_32661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (9))){
var inst_32609 = (state_32629[(7)]);
var state_32629__$1 = state_32629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32629__$1,(11),out,inst_32609);
} else {
if((state_val_32630 === (5))){
var inst_32623 = cljs.core.async.close_BANG_.call(null,out);
var state_32629__$1 = state_32629;
var statearr_32642_32662 = state_32629__$1;
(statearr_32642_32662[(2)] = inst_32623);

(statearr_32642_32662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (10))){
var inst_32621 = (state_32629[(2)]);
var state_32629__$1 = state_32629;
var statearr_32643_32663 = state_32629__$1;
(statearr_32643_32663[(2)] = inst_32621);

(statearr_32643_32663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32630 === (8))){
var inst_32609 = (state_32629[(7)]);
var inst_32608 = (state_32629[(8)]);
var inst_32601 = (state_32629[(10)]);
var inst_32610 = (state_32629[(9)]);
var inst_32613 = (function (){var c = inst_32610;
var v = inst_32609;
var vec__32606 = inst_32608;
var cs = inst_32601;
return ((function (c,v,vec__32606,cs,inst_32609,inst_32608,inst_32601,inst_32610,state_val_32630,c__6540__auto___32654,out){
return (function (p1__32597_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32597_SHARP_);
});
;})(c,v,vec__32606,cs,inst_32609,inst_32608,inst_32601,inst_32610,state_val_32630,c__6540__auto___32654,out))
})();
var inst_32614 = cljs.core.filterv.call(null,inst_32613,inst_32601);
var inst_32601__$1 = inst_32614;
var state_32629__$1 = (function (){var statearr_32644 = state_32629;
(statearr_32644[(10)] = inst_32601__$1);

return statearr_32644;
})();
var statearr_32645_32664 = state_32629__$1;
(statearr_32645_32664[(2)] = null);

(statearr_32645_32664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___32654,out))
;
return ((function (switch__6478__auto__,c__6540__auto___32654,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_32649 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32649[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_32649[(1)] = (1));

return statearr_32649;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_32629){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_32629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e32650){if((e32650 instanceof Object)){
var ex__6482__auto__ = e32650;
var statearr_32651_32665 = state_32629;
(statearr_32651_32665[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32666 = state_32629;
state_32629 = G__32666;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_32629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_32629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___32654,out))
})();
var state__6542__auto__ = (function (){var statearr_32652 = f__6541__auto__.call(null);
(statearr_32652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___32654);

return statearr_32652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___32654,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__32668 = arguments.length;
switch (G__32668) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___32716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___32716,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___32716,out){
return (function (state_32692){
var state_val_32693 = (state_32692[(1)]);
if((state_val_32693 === (7))){
var inst_32674 = (state_32692[(7)]);
var inst_32674__$1 = (state_32692[(2)]);
var inst_32675 = (inst_32674__$1 == null);
var inst_32676 = cljs.core.not.call(null,inst_32675);
var state_32692__$1 = (function (){var statearr_32694 = state_32692;
(statearr_32694[(7)] = inst_32674__$1);

return statearr_32694;
})();
if(inst_32676){
var statearr_32695_32717 = state_32692__$1;
(statearr_32695_32717[(1)] = (8));

} else {
var statearr_32696_32718 = state_32692__$1;
(statearr_32696_32718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var inst_32669 = (0);
var state_32692__$1 = (function (){var statearr_32697 = state_32692;
(statearr_32697[(8)] = inst_32669);

return statearr_32697;
})();
var statearr_32698_32719 = state_32692__$1;
(statearr_32698_32719[(2)] = null);

(statearr_32698_32719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32692__$1,(7),ch);
} else {
if((state_val_32693 === (6))){
var inst_32687 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32699_32720 = state_32692__$1;
(statearr_32699_32720[(2)] = inst_32687);

(statearr_32699_32720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (3))){
var inst_32689 = (state_32692[(2)]);
var inst_32690 = cljs.core.async.close_BANG_.call(null,out);
var state_32692__$1 = (function (){var statearr_32700 = state_32692;
(statearr_32700[(9)] = inst_32689);

return statearr_32700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32692__$1,inst_32690);
} else {
if((state_val_32693 === (2))){
var inst_32669 = (state_32692[(8)]);
var inst_32671 = (inst_32669 < n);
var state_32692__$1 = state_32692;
if(cljs.core.truth_(inst_32671)){
var statearr_32701_32721 = state_32692__$1;
(statearr_32701_32721[(1)] = (4));

} else {
var statearr_32702_32722 = state_32692__$1;
(statearr_32702_32722[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (11))){
var inst_32669 = (state_32692[(8)]);
var inst_32679 = (state_32692[(2)]);
var inst_32680 = (inst_32669 + (1));
var inst_32669__$1 = inst_32680;
var state_32692__$1 = (function (){var statearr_32703 = state_32692;
(statearr_32703[(10)] = inst_32679);

(statearr_32703[(8)] = inst_32669__$1);

return statearr_32703;
})();
var statearr_32704_32723 = state_32692__$1;
(statearr_32704_32723[(2)] = null);

(statearr_32704_32723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (9))){
var state_32692__$1 = state_32692;
var statearr_32705_32724 = state_32692__$1;
(statearr_32705_32724[(2)] = null);

(statearr_32705_32724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (5))){
var state_32692__$1 = state_32692;
var statearr_32706_32725 = state_32692__$1;
(statearr_32706_32725[(2)] = null);

(statearr_32706_32725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32684 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32707_32726 = state_32692__$1;
(statearr_32707_32726[(2)] = inst_32684);

(statearr_32707_32726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (8))){
var inst_32674 = (state_32692[(7)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32692__$1,(11),out,inst_32674);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___32716,out))
;
return ((function (switch__6478__auto__,c__6540__auto___32716,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_32711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32711[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_32711[(1)] = (1));

return statearr_32711;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_32692){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_32692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e32712){if((e32712 instanceof Object)){
var ex__6482__auto__ = e32712;
var statearr_32713_32727 = state_32692;
(statearr_32713_32727[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32728 = state_32692;
state_32692 = G__32728;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___32716,out))
})();
var state__6542__auto__ = (function (){var statearr_32714 = f__6541__auto__.call(null);
(statearr_32714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___32716);

return statearr_32714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___32716,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t32736 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32736 = (function (ch,f,map_LT_,meta32737){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32737 = meta32737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32739 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32739 = (function (fn1,_,meta32737,map_LT_,f,ch,meta32740){
this.fn1 = fn1;
this._ = _;
this.meta32737 = meta32737;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32740 = meta32740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32739.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32729_SHARP_){
return f1.call(null,(((p1__32729_SHARP_ == null))?null:self__.f.call(null,p1__32729_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32741){
var self__ = this;
var _32741__$1 = this;
return self__.meta32740;
});})(___$1))
;

cljs.core.async.t32739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32741,meta32740__$1){
var self__ = this;
var _32741__$1 = this;
return (new cljs.core.async.t32739(self__.fn1,self__._,self__.meta32737,self__.map_LT_,self__.f,self__.ch,meta32740__$1));
});})(___$1))
;

cljs.core.async.t32739.cljs$lang$type = true;

cljs.core.async.t32739.cljs$lang$ctorStr = "cljs.core.async/t32739";

cljs.core.async.t32739.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t32739");
});})(___$1))
;

cljs.core.async.__GT_t32739 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t32739(fn1__$1,___$2,meta32737__$1,map_LT___$1,f__$1,ch__$1,meta32740){
return (new cljs.core.async.t32739(fn1__$1,___$2,meta32737__$1,map_LT___$1,f__$1,ch__$1,meta32740));
});})(___$1))
;

}

return (new cljs.core.async.t32739(fn1,___$1,self__.meta32737,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4170__auto__ = ret;
if(cljs.core.truth_(and__4170__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4170__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32736.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32736.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32738){
var self__ = this;
var _32738__$1 = this;
return self__.meta32737;
});

cljs.core.async.t32736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32738,meta32737__$1){
var self__ = this;
var _32738__$1 = this;
return (new cljs.core.async.t32736(self__.ch,self__.f,self__.map_LT_,meta32737__$1));
});

cljs.core.async.t32736.cljs$lang$type = true;

cljs.core.async.t32736.cljs$lang$ctorStr = "cljs.core.async/t32736";

cljs.core.async.t32736.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t32736");
});

cljs.core.async.__GT_t32736 = (function cljs$core$async$map_LT__$___GT_t32736(ch__$1,f__$1,map_LT___$1,meta32737){
return (new cljs.core.async.t32736(ch__$1,f__$1,map_LT___$1,meta32737));
});

}

return (new cljs.core.async.t32736(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t32745 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32745 = (function (ch,f,map_GT_,meta32746){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32746 = meta32746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32745.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32745.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32745.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32747){
var self__ = this;
var _32747__$1 = this;
return self__.meta32746;
});

cljs.core.async.t32745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32747,meta32746__$1){
var self__ = this;
var _32747__$1 = this;
return (new cljs.core.async.t32745(self__.ch,self__.f,self__.map_GT_,meta32746__$1));
});

cljs.core.async.t32745.cljs$lang$type = true;

cljs.core.async.t32745.cljs$lang$ctorStr = "cljs.core.async/t32745";

cljs.core.async.t32745.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t32745");
});

cljs.core.async.__GT_t32745 = (function cljs$core$async$map_GT__$___GT_t32745(ch__$1,f__$1,map_GT___$1,meta32746){
return (new cljs.core.async.t32745(ch__$1,f__$1,map_GT___$1,meta32746));
});

}

return (new cljs.core.async.t32745(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t32751 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32751 = (function (ch,p,filter_GT_,meta32752){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32752 = meta32752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32751.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32751.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32751.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32751.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32753){
var self__ = this;
var _32753__$1 = this;
return self__.meta32752;
});

cljs.core.async.t32751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32753,meta32752__$1){
var self__ = this;
var _32753__$1 = this;
return (new cljs.core.async.t32751(self__.ch,self__.p,self__.filter_GT_,meta32752__$1));
});

cljs.core.async.t32751.cljs$lang$type = true;

cljs.core.async.t32751.cljs$lang$ctorStr = "cljs.core.async/t32751";

cljs.core.async.t32751.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t32751");
});

cljs.core.async.__GT_t32751 = (function cljs$core$async$filter_GT__$___GT_t32751(ch__$1,p__$1,filter_GT___$1,meta32752){
return (new cljs.core.async.t32751(ch__$1,p__$1,filter_GT___$1,meta32752));
});

}

return (new cljs.core.async.t32751(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__32755 = arguments.length;
switch (G__32755) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___32798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___32798,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___32798,out){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32778_32799 = state_32776__$1;
(statearr_32778_32799[(2)] = inst_32772);

(statearr_32778_32799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32779_32800 = state_32776__$1;
(statearr_32779_32800[(2)] = null);

(statearr_32779_32800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32758 = (state_32776[(7)]);
var inst_32758__$1 = (state_32776[(2)]);
var inst_32759 = (inst_32758__$1 == null);
var state_32776__$1 = (function (){var statearr_32780 = state_32776;
(statearr_32780[(7)] = inst_32758__$1);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32759)){
var statearr_32781_32801 = state_32776__$1;
(statearr_32781_32801[(1)] = (5));

} else {
var statearr_32782_32802 = state_32776__$1;
(statearr_32782_32802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32758 = (state_32776[(7)]);
var inst_32763 = p.call(null,inst_32758);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32763)){
var statearr_32783_32803 = state_32776__$1;
(statearr_32783_32803[(1)] = (8));

} else {
var statearr_32784_32804 = state_32776__$1;
(statearr_32784_32804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(4),ch);
} else {
if((state_val_32777 === (11))){
var inst_32766 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32785_32805 = state_32776__$1;
(statearr_32785_32805[(2)] = inst_32766);

(statearr_32785_32805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var state_32776__$1 = state_32776;
var statearr_32786_32806 = state_32776__$1;
(statearr_32786_32806[(2)] = null);

(statearr_32786_32806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var inst_32761 = cljs.core.async.close_BANG_.call(null,out);
var state_32776__$1 = state_32776;
var statearr_32787_32807 = state_32776__$1;
(statearr_32787_32807[(2)] = inst_32761);

(statearr_32787_32807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32769 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32788 = state_32776;
(statearr_32788[(8)] = inst_32769);

return statearr_32788;
})();
var statearr_32789_32808 = state_32776__$1;
(statearr_32789_32808[(2)] = null);

(statearr_32789_32808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32758 = (state_32776[(7)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(11),out,inst_32758);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___32798,out))
;
return ((function (switch__6478__auto__,c__6540__auto___32798,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_32793 = [null,null,null,null,null,null,null,null,null];
(statearr_32793[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_32793[(1)] = (1));

return statearr_32793;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_32776){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e32794){if((e32794 instanceof Object)){
var ex__6482__auto__ = e32794;
var statearr_32795_32809 = state_32776;
(statearr_32795_32809[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32810 = state_32776;
state_32776 = G__32810;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___32798,out))
})();
var state__6542__auto__ = (function (){var statearr_32796 = f__6541__auto__.call(null);
(statearr_32796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___32798);

return statearr_32796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___32798,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__32812 = arguments.length;
switch (G__32812) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_32979){
var state_val_32980 = (state_32979[(1)]);
if((state_val_32980 === (7))){
var inst_32975 = (state_32979[(2)]);
var state_32979__$1 = state_32979;
var statearr_32981_33022 = state_32979__$1;
(statearr_32981_33022[(2)] = inst_32975);

(statearr_32981_33022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (20))){
var inst_32945 = (state_32979[(7)]);
var inst_32956 = (state_32979[(2)]);
var inst_32957 = cljs.core.next.call(null,inst_32945);
var inst_32931 = inst_32957;
var inst_32932 = null;
var inst_32933 = (0);
var inst_32934 = (0);
var state_32979__$1 = (function (){var statearr_32982 = state_32979;
(statearr_32982[(8)] = inst_32932);

(statearr_32982[(9)] = inst_32931);

(statearr_32982[(10)] = inst_32933);

(statearr_32982[(11)] = inst_32934);

(statearr_32982[(12)] = inst_32956);

return statearr_32982;
})();
var statearr_32983_33023 = state_32979__$1;
(statearr_32983_33023[(2)] = null);

(statearr_32983_33023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (1))){
var state_32979__$1 = state_32979;
var statearr_32984_33024 = state_32979__$1;
(statearr_32984_33024[(2)] = null);

(statearr_32984_33024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (4))){
var inst_32920 = (state_32979[(13)]);
var inst_32920__$1 = (state_32979[(2)]);
var inst_32921 = (inst_32920__$1 == null);
var state_32979__$1 = (function (){var statearr_32985 = state_32979;
(statearr_32985[(13)] = inst_32920__$1);

return statearr_32985;
})();
if(cljs.core.truth_(inst_32921)){
var statearr_32986_33025 = state_32979__$1;
(statearr_32986_33025[(1)] = (5));

} else {
var statearr_32987_33026 = state_32979__$1;
(statearr_32987_33026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (15))){
var state_32979__$1 = state_32979;
var statearr_32991_33027 = state_32979__$1;
(statearr_32991_33027[(2)] = null);

(statearr_32991_33027[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (21))){
var state_32979__$1 = state_32979;
var statearr_32992_33028 = state_32979__$1;
(statearr_32992_33028[(2)] = null);

(statearr_32992_33028[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (13))){
var inst_32932 = (state_32979[(8)]);
var inst_32931 = (state_32979[(9)]);
var inst_32933 = (state_32979[(10)]);
var inst_32934 = (state_32979[(11)]);
var inst_32941 = (state_32979[(2)]);
var inst_32942 = (inst_32934 + (1));
var tmp32988 = inst_32932;
var tmp32989 = inst_32931;
var tmp32990 = inst_32933;
var inst_32931__$1 = tmp32989;
var inst_32932__$1 = tmp32988;
var inst_32933__$1 = tmp32990;
var inst_32934__$1 = inst_32942;
var state_32979__$1 = (function (){var statearr_32993 = state_32979;
(statearr_32993[(8)] = inst_32932__$1);

(statearr_32993[(14)] = inst_32941);

(statearr_32993[(9)] = inst_32931__$1);

(statearr_32993[(10)] = inst_32933__$1);

(statearr_32993[(11)] = inst_32934__$1);

return statearr_32993;
})();
var statearr_32994_33029 = state_32979__$1;
(statearr_32994_33029[(2)] = null);

(statearr_32994_33029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (22))){
var state_32979__$1 = state_32979;
var statearr_32995_33030 = state_32979__$1;
(statearr_32995_33030[(2)] = null);

(statearr_32995_33030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (6))){
var inst_32920 = (state_32979[(13)]);
var inst_32929 = f.call(null,inst_32920);
var inst_32930 = cljs.core.seq.call(null,inst_32929);
var inst_32931 = inst_32930;
var inst_32932 = null;
var inst_32933 = (0);
var inst_32934 = (0);
var state_32979__$1 = (function (){var statearr_32996 = state_32979;
(statearr_32996[(8)] = inst_32932);

(statearr_32996[(9)] = inst_32931);

(statearr_32996[(10)] = inst_32933);

(statearr_32996[(11)] = inst_32934);

return statearr_32996;
})();
var statearr_32997_33031 = state_32979__$1;
(statearr_32997_33031[(2)] = null);

(statearr_32997_33031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (17))){
var inst_32945 = (state_32979[(7)]);
var inst_32949 = cljs.core.chunk_first.call(null,inst_32945);
var inst_32950 = cljs.core.chunk_rest.call(null,inst_32945);
var inst_32951 = cljs.core.count.call(null,inst_32949);
var inst_32931 = inst_32950;
var inst_32932 = inst_32949;
var inst_32933 = inst_32951;
var inst_32934 = (0);
var state_32979__$1 = (function (){var statearr_32998 = state_32979;
(statearr_32998[(8)] = inst_32932);

(statearr_32998[(9)] = inst_32931);

(statearr_32998[(10)] = inst_32933);

(statearr_32998[(11)] = inst_32934);

return statearr_32998;
})();
var statearr_32999_33032 = state_32979__$1;
(statearr_32999_33032[(2)] = null);

(statearr_32999_33032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (3))){
var inst_32977 = (state_32979[(2)]);
var state_32979__$1 = state_32979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32979__$1,inst_32977);
} else {
if((state_val_32980 === (12))){
var inst_32965 = (state_32979[(2)]);
var state_32979__$1 = state_32979;
var statearr_33000_33033 = state_32979__$1;
(statearr_33000_33033[(2)] = inst_32965);

(statearr_33000_33033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (2))){
var state_32979__$1 = state_32979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32979__$1,(4),in$);
} else {
if((state_val_32980 === (23))){
var inst_32973 = (state_32979[(2)]);
var state_32979__$1 = state_32979;
var statearr_33001_33034 = state_32979__$1;
(statearr_33001_33034[(2)] = inst_32973);

(statearr_33001_33034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (19))){
var inst_32960 = (state_32979[(2)]);
var state_32979__$1 = state_32979;
var statearr_33002_33035 = state_32979__$1;
(statearr_33002_33035[(2)] = inst_32960);

(statearr_33002_33035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (11))){
var inst_32931 = (state_32979[(9)]);
var inst_32945 = (state_32979[(7)]);
var inst_32945__$1 = cljs.core.seq.call(null,inst_32931);
var state_32979__$1 = (function (){var statearr_33003 = state_32979;
(statearr_33003[(7)] = inst_32945__$1);

return statearr_33003;
})();
if(inst_32945__$1){
var statearr_33004_33036 = state_32979__$1;
(statearr_33004_33036[(1)] = (14));

} else {
var statearr_33005_33037 = state_32979__$1;
(statearr_33005_33037[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (9))){
var inst_32967 = (state_32979[(2)]);
var inst_32968 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32979__$1 = (function (){var statearr_33006 = state_32979;
(statearr_33006[(15)] = inst_32967);

return statearr_33006;
})();
if(cljs.core.truth_(inst_32968)){
var statearr_33007_33038 = state_32979__$1;
(statearr_33007_33038[(1)] = (21));

} else {
var statearr_33008_33039 = state_32979__$1;
(statearr_33008_33039[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (5))){
var inst_32923 = cljs.core.async.close_BANG_.call(null,out);
var state_32979__$1 = state_32979;
var statearr_33009_33040 = state_32979__$1;
(statearr_33009_33040[(2)] = inst_32923);

(statearr_33009_33040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (14))){
var inst_32945 = (state_32979[(7)]);
var inst_32947 = cljs.core.chunked_seq_QMARK_.call(null,inst_32945);
var state_32979__$1 = state_32979;
if(inst_32947){
var statearr_33010_33041 = state_32979__$1;
(statearr_33010_33041[(1)] = (17));

} else {
var statearr_33011_33042 = state_32979__$1;
(statearr_33011_33042[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (16))){
var inst_32963 = (state_32979[(2)]);
var state_32979__$1 = state_32979;
var statearr_33012_33043 = state_32979__$1;
(statearr_33012_33043[(2)] = inst_32963);

(statearr_33012_33043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32980 === (10))){
var inst_32932 = (state_32979[(8)]);
var inst_32934 = (state_32979[(11)]);
var inst_32939 = cljs.core._nth.call(null,inst_32932,inst_32934);
var state_32979__$1 = state_32979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32979__$1,(13),out,inst_32939);
} else {
if((state_val_32980 === (18))){
var inst_32945 = (state_32979[(7)]);
var inst_32954 = cljs.core.first.call(null,inst_32945);
var state_32979__$1 = state_32979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32979__$1,(20),out,inst_32954);
} else {
if((state_val_32980 === (8))){
var inst_32933 = (state_32979[(10)]);
var inst_32934 = (state_32979[(11)]);
var inst_32936 = (inst_32934 < inst_32933);
var inst_32937 = inst_32936;
var state_32979__$1 = state_32979;
if(cljs.core.truth_(inst_32937)){
var statearr_33013_33044 = state_32979__$1;
(statearr_33013_33044[(1)] = (10));

} else {
var statearr_33014_33045 = state_32979__$1;
(statearr_33014_33045[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_33018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33018[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__);

(statearr_33018[(1)] = (1));

return statearr_33018;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1 = (function (state_32979){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_32979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e33019){if((e33019 instanceof Object)){
var ex__6482__auto__ = e33019;
var statearr_33020_33046 = state_32979;
(statearr_33020_33046[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33047 = state_32979;
state_32979 = G__33047;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = function(state_32979){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1.call(this,state_32979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_33021 = f__6541__auto__.call(null);
(statearr_33021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_33021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__33049 = arguments.length;
switch (G__33049) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__33052 = arguments.length;
switch (G__33052) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__33055 = arguments.length;
switch (G__33055) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___33105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___33105,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___33105,out){
return (function (state_33079){
var state_val_33080 = (state_33079[(1)]);
if((state_val_33080 === (7))){
var inst_33074 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33081_33106 = state_33079__$1;
(statearr_33081_33106[(2)] = inst_33074);

(statearr_33081_33106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (1))){
var inst_33056 = null;
var state_33079__$1 = (function (){var statearr_33082 = state_33079;
(statearr_33082[(7)] = inst_33056);

return statearr_33082;
})();
var statearr_33083_33107 = state_33079__$1;
(statearr_33083_33107[(2)] = null);

(statearr_33083_33107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (4))){
var inst_33059 = (state_33079[(8)]);
var inst_33059__$1 = (state_33079[(2)]);
var inst_33060 = (inst_33059__$1 == null);
var inst_33061 = cljs.core.not.call(null,inst_33060);
var state_33079__$1 = (function (){var statearr_33084 = state_33079;
(statearr_33084[(8)] = inst_33059__$1);

return statearr_33084;
})();
if(inst_33061){
var statearr_33085_33108 = state_33079__$1;
(statearr_33085_33108[(1)] = (5));

} else {
var statearr_33086_33109 = state_33079__$1;
(statearr_33086_33109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (6))){
var state_33079__$1 = state_33079;
var statearr_33087_33110 = state_33079__$1;
(statearr_33087_33110[(2)] = null);

(statearr_33087_33110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (3))){
var inst_33076 = (state_33079[(2)]);
var inst_33077 = cljs.core.async.close_BANG_.call(null,out);
var state_33079__$1 = (function (){var statearr_33088 = state_33079;
(statearr_33088[(9)] = inst_33076);

return statearr_33088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33079__$1,inst_33077);
} else {
if((state_val_33080 === (2))){
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33079__$1,(4),ch);
} else {
if((state_val_33080 === (11))){
var inst_33059 = (state_33079[(8)]);
var inst_33068 = (state_33079[(2)]);
var inst_33056 = inst_33059;
var state_33079__$1 = (function (){var statearr_33089 = state_33079;
(statearr_33089[(10)] = inst_33068);

(statearr_33089[(7)] = inst_33056);

return statearr_33089;
})();
var statearr_33090_33111 = state_33079__$1;
(statearr_33090_33111[(2)] = null);

(statearr_33090_33111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (9))){
var inst_33059 = (state_33079[(8)]);
var state_33079__$1 = state_33079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33079__$1,(11),out,inst_33059);
} else {
if((state_val_33080 === (5))){
var inst_33056 = (state_33079[(7)]);
var inst_33059 = (state_33079[(8)]);
var inst_33063 = cljs.core._EQ_.call(null,inst_33059,inst_33056);
var state_33079__$1 = state_33079;
if(inst_33063){
var statearr_33092_33112 = state_33079__$1;
(statearr_33092_33112[(1)] = (8));

} else {
var statearr_33093_33113 = state_33079__$1;
(statearr_33093_33113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (10))){
var inst_33071 = (state_33079[(2)]);
var state_33079__$1 = state_33079;
var statearr_33094_33114 = state_33079__$1;
(statearr_33094_33114[(2)] = inst_33071);

(statearr_33094_33114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33080 === (8))){
var inst_33056 = (state_33079[(7)]);
var tmp33091 = inst_33056;
var inst_33056__$1 = tmp33091;
var state_33079__$1 = (function (){var statearr_33095 = state_33079;
(statearr_33095[(7)] = inst_33056__$1);

return statearr_33095;
})();
var statearr_33096_33115 = state_33079__$1;
(statearr_33096_33115[(2)] = null);

(statearr_33096_33115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___33105,out))
;
return ((function (switch__6478__auto__,c__6540__auto___33105,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_33100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33100[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_33100[(1)] = (1));

return statearr_33100;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_33079){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_33079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e33101){if((e33101 instanceof Object)){
var ex__6482__auto__ = e33101;
var statearr_33102_33116 = state_33079;
(statearr_33102_33116[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33117 = state_33079;
state_33079 = G__33117;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_33079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_33079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___33105,out))
})();
var state__6542__auto__ = (function (){var statearr_33103 = f__6541__auto__.call(null);
(statearr_33103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___33105);

return statearr_33103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___33105,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__33119 = arguments.length;
switch (G__33119) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___33188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___33188,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___33188,out){
return (function (state_33157){
var state_val_33158 = (state_33157[(1)]);
if((state_val_33158 === (7))){
var inst_33153 = (state_33157[(2)]);
var state_33157__$1 = state_33157;
var statearr_33159_33189 = state_33157__$1;
(statearr_33159_33189[(2)] = inst_33153);

(statearr_33159_33189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (1))){
var inst_33120 = (new Array(n));
var inst_33121 = inst_33120;
var inst_33122 = (0);
var state_33157__$1 = (function (){var statearr_33160 = state_33157;
(statearr_33160[(7)] = inst_33121);

(statearr_33160[(8)] = inst_33122);

return statearr_33160;
})();
var statearr_33161_33190 = state_33157__$1;
(statearr_33161_33190[(2)] = null);

(statearr_33161_33190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (4))){
var inst_33125 = (state_33157[(9)]);
var inst_33125__$1 = (state_33157[(2)]);
var inst_33126 = (inst_33125__$1 == null);
var inst_33127 = cljs.core.not.call(null,inst_33126);
var state_33157__$1 = (function (){var statearr_33162 = state_33157;
(statearr_33162[(9)] = inst_33125__$1);

return statearr_33162;
})();
if(inst_33127){
var statearr_33163_33191 = state_33157__$1;
(statearr_33163_33191[(1)] = (5));

} else {
var statearr_33164_33192 = state_33157__$1;
(statearr_33164_33192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (15))){
var inst_33147 = (state_33157[(2)]);
var state_33157__$1 = state_33157;
var statearr_33165_33193 = state_33157__$1;
(statearr_33165_33193[(2)] = inst_33147);

(statearr_33165_33193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (13))){
var state_33157__$1 = state_33157;
var statearr_33166_33194 = state_33157__$1;
(statearr_33166_33194[(2)] = null);

(statearr_33166_33194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (6))){
var inst_33122 = (state_33157[(8)]);
var inst_33143 = (inst_33122 > (0));
var state_33157__$1 = state_33157;
if(cljs.core.truth_(inst_33143)){
var statearr_33167_33195 = state_33157__$1;
(statearr_33167_33195[(1)] = (12));

} else {
var statearr_33168_33196 = state_33157__$1;
(statearr_33168_33196[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (3))){
var inst_33155 = (state_33157[(2)]);
var state_33157__$1 = state_33157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33157__$1,inst_33155);
} else {
if((state_val_33158 === (12))){
var inst_33121 = (state_33157[(7)]);
var inst_33145 = cljs.core.vec.call(null,inst_33121);
var state_33157__$1 = state_33157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33157__$1,(15),out,inst_33145);
} else {
if((state_val_33158 === (2))){
var state_33157__$1 = state_33157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33157__$1,(4),ch);
} else {
if((state_val_33158 === (11))){
var inst_33137 = (state_33157[(2)]);
var inst_33138 = (new Array(n));
var inst_33121 = inst_33138;
var inst_33122 = (0);
var state_33157__$1 = (function (){var statearr_33169 = state_33157;
(statearr_33169[(10)] = inst_33137);

(statearr_33169[(7)] = inst_33121);

(statearr_33169[(8)] = inst_33122);

return statearr_33169;
})();
var statearr_33170_33197 = state_33157__$1;
(statearr_33170_33197[(2)] = null);

(statearr_33170_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (9))){
var inst_33121 = (state_33157[(7)]);
var inst_33135 = cljs.core.vec.call(null,inst_33121);
var state_33157__$1 = state_33157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33157__$1,(11),out,inst_33135);
} else {
if((state_val_33158 === (5))){
var inst_33121 = (state_33157[(7)]);
var inst_33125 = (state_33157[(9)]);
var inst_33130 = (state_33157[(11)]);
var inst_33122 = (state_33157[(8)]);
var inst_33129 = (inst_33121[inst_33122] = inst_33125);
var inst_33130__$1 = (inst_33122 + (1));
var inst_33131 = (inst_33130__$1 < n);
var state_33157__$1 = (function (){var statearr_33171 = state_33157;
(statearr_33171[(11)] = inst_33130__$1);

(statearr_33171[(12)] = inst_33129);

return statearr_33171;
})();
if(cljs.core.truth_(inst_33131)){
var statearr_33172_33198 = state_33157__$1;
(statearr_33172_33198[(1)] = (8));

} else {
var statearr_33173_33199 = state_33157__$1;
(statearr_33173_33199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (14))){
var inst_33150 = (state_33157[(2)]);
var inst_33151 = cljs.core.async.close_BANG_.call(null,out);
var state_33157__$1 = (function (){var statearr_33175 = state_33157;
(statearr_33175[(13)] = inst_33150);

return statearr_33175;
})();
var statearr_33176_33200 = state_33157__$1;
(statearr_33176_33200[(2)] = inst_33151);

(statearr_33176_33200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (10))){
var inst_33141 = (state_33157[(2)]);
var state_33157__$1 = state_33157;
var statearr_33177_33201 = state_33157__$1;
(statearr_33177_33201[(2)] = inst_33141);

(statearr_33177_33201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33158 === (8))){
var inst_33121 = (state_33157[(7)]);
var inst_33130 = (state_33157[(11)]);
var tmp33174 = inst_33121;
var inst_33121__$1 = tmp33174;
var inst_33122 = inst_33130;
var state_33157__$1 = (function (){var statearr_33178 = state_33157;
(statearr_33178[(7)] = inst_33121__$1);

(statearr_33178[(8)] = inst_33122);

return statearr_33178;
})();
var statearr_33179_33202 = state_33157__$1;
(statearr_33179_33202[(2)] = null);

(statearr_33179_33202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___33188,out))
;
return ((function (switch__6478__auto__,c__6540__auto___33188,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_33183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33183[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_33183[(1)] = (1));

return statearr_33183;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_33157){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_33157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e33184){if((e33184 instanceof Object)){
var ex__6482__auto__ = e33184;
var statearr_33185_33203 = state_33157;
(statearr_33185_33203[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33204 = state_33157;
state_33157 = G__33204;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_33157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_33157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___33188,out))
})();
var state__6542__auto__ = (function (){var statearr_33186 = f__6541__auto__.call(null);
(statearr_33186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___33188);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___33188,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__33206 = arguments.length;
switch (G__33206) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___33279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___33279,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___33279,out){
return (function (state_33248){
var state_val_33249 = (state_33248[(1)]);
if((state_val_33249 === (7))){
var inst_33244 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
var statearr_33250_33280 = state_33248__$1;
(statearr_33250_33280[(2)] = inst_33244);

(statearr_33250_33280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (1))){
var inst_33207 = [];
var inst_33208 = inst_33207;
var inst_33209 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33248__$1 = (function (){var statearr_33251 = state_33248;
(statearr_33251[(7)] = inst_33208);

(statearr_33251[(8)] = inst_33209);

return statearr_33251;
})();
var statearr_33252_33281 = state_33248__$1;
(statearr_33252_33281[(2)] = null);

(statearr_33252_33281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (4))){
var inst_33212 = (state_33248[(9)]);
var inst_33212__$1 = (state_33248[(2)]);
var inst_33213 = (inst_33212__$1 == null);
var inst_33214 = cljs.core.not.call(null,inst_33213);
var state_33248__$1 = (function (){var statearr_33253 = state_33248;
(statearr_33253[(9)] = inst_33212__$1);

return statearr_33253;
})();
if(inst_33214){
var statearr_33254_33282 = state_33248__$1;
(statearr_33254_33282[(1)] = (5));

} else {
var statearr_33255_33283 = state_33248__$1;
(statearr_33255_33283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (15))){
var inst_33238 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
var statearr_33256_33284 = state_33248__$1;
(statearr_33256_33284[(2)] = inst_33238);

(statearr_33256_33284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (13))){
var state_33248__$1 = state_33248;
var statearr_33257_33285 = state_33248__$1;
(statearr_33257_33285[(2)] = null);

(statearr_33257_33285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (6))){
var inst_33208 = (state_33248[(7)]);
var inst_33233 = inst_33208.length;
var inst_33234 = (inst_33233 > (0));
var state_33248__$1 = state_33248;
if(cljs.core.truth_(inst_33234)){
var statearr_33258_33286 = state_33248__$1;
(statearr_33258_33286[(1)] = (12));

} else {
var statearr_33259_33287 = state_33248__$1;
(statearr_33259_33287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (3))){
var inst_33246 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33248__$1,inst_33246);
} else {
if((state_val_33249 === (12))){
var inst_33208 = (state_33248[(7)]);
var inst_33236 = cljs.core.vec.call(null,inst_33208);
var state_33248__$1 = state_33248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33248__$1,(15),out,inst_33236);
} else {
if((state_val_33249 === (2))){
var state_33248__$1 = state_33248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33248__$1,(4),ch);
} else {
if((state_val_33249 === (11))){
var inst_33216 = (state_33248[(10)]);
var inst_33212 = (state_33248[(9)]);
var inst_33226 = (state_33248[(2)]);
var inst_33227 = [];
var inst_33228 = inst_33227.push(inst_33212);
var inst_33208 = inst_33227;
var inst_33209 = inst_33216;
var state_33248__$1 = (function (){var statearr_33260 = state_33248;
(statearr_33260[(11)] = inst_33228);

(statearr_33260[(12)] = inst_33226);

(statearr_33260[(7)] = inst_33208);

(statearr_33260[(8)] = inst_33209);

return statearr_33260;
})();
var statearr_33261_33288 = state_33248__$1;
(statearr_33261_33288[(2)] = null);

(statearr_33261_33288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (9))){
var inst_33208 = (state_33248[(7)]);
var inst_33224 = cljs.core.vec.call(null,inst_33208);
var state_33248__$1 = state_33248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33248__$1,(11),out,inst_33224);
} else {
if((state_val_33249 === (5))){
var inst_33216 = (state_33248[(10)]);
var inst_33212 = (state_33248[(9)]);
var inst_33209 = (state_33248[(8)]);
var inst_33216__$1 = f.call(null,inst_33212);
var inst_33217 = cljs.core._EQ_.call(null,inst_33216__$1,inst_33209);
var inst_33218 = cljs.core.keyword_identical_QMARK_.call(null,inst_33209,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33219 = (inst_33217) || (inst_33218);
var state_33248__$1 = (function (){var statearr_33262 = state_33248;
(statearr_33262[(10)] = inst_33216__$1);

return statearr_33262;
})();
if(cljs.core.truth_(inst_33219)){
var statearr_33263_33289 = state_33248__$1;
(statearr_33263_33289[(1)] = (8));

} else {
var statearr_33264_33290 = state_33248__$1;
(statearr_33264_33290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (14))){
var inst_33241 = (state_33248[(2)]);
var inst_33242 = cljs.core.async.close_BANG_.call(null,out);
var state_33248__$1 = (function (){var statearr_33266 = state_33248;
(statearr_33266[(13)] = inst_33241);

return statearr_33266;
})();
var statearr_33267_33291 = state_33248__$1;
(statearr_33267_33291[(2)] = inst_33242);

(statearr_33267_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (10))){
var inst_33231 = (state_33248[(2)]);
var state_33248__$1 = state_33248;
var statearr_33268_33292 = state_33248__$1;
(statearr_33268_33292[(2)] = inst_33231);

(statearr_33268_33292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33249 === (8))){
var inst_33216 = (state_33248[(10)]);
var inst_33212 = (state_33248[(9)]);
var inst_33208 = (state_33248[(7)]);
var inst_33221 = inst_33208.push(inst_33212);
var tmp33265 = inst_33208;
var inst_33208__$1 = tmp33265;
var inst_33209 = inst_33216;
var state_33248__$1 = (function (){var statearr_33269 = state_33248;
(statearr_33269[(14)] = inst_33221);

(statearr_33269[(7)] = inst_33208__$1);

(statearr_33269[(8)] = inst_33209);

return statearr_33269;
})();
var statearr_33270_33293 = state_33248__$1;
(statearr_33270_33293[(2)] = null);

(statearr_33270_33293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___33279,out))
;
return ((function (switch__6478__auto__,c__6540__auto___33279,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_33274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33274[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_33274[(1)] = (1));

return statearr_33274;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_33248){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_33248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e33275){if((e33275 instanceof Object)){
var ex__6482__auto__ = e33275;
var statearr_33276_33294 = state_33248;
(statearr_33276_33294[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33295 = state_33248;
state_33248 = G__33295;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_33248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_33248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___33279,out))
})();
var state__6542__auto__ = (function (){var statearr_33277 = f__6541__auto__.call(null);
(statearr_33277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___33279);

return statearr_33277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___33279,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map