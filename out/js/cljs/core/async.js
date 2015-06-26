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
if(typeof cljs.core.async.t13564 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13564 = (function (f,fn_handler,meta13565){
this.f = f;
this.fn_handler = fn_handler;
this.meta13565 = meta13565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13566){
var self__ = this;
var _13566__$1 = this;
return self__.meta13565;
});

cljs.core.async.t13564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13566,meta13565__$1){
var self__ = this;
var _13566__$1 = this;
return (new cljs.core.async.t13564(self__.f,self__.fn_handler,meta13565__$1));
});

cljs.core.async.t13564.cljs$lang$type = true;

cljs.core.async.t13564.cljs$lang$ctorStr = "cljs.core.async/t13564";

cljs.core.async.t13564.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t13564");
});

cljs.core.async.__GT_t13564 = (function cljs$core$async$fn_handler_$___GT_t13564(f__$1,fn_handler__$1,meta13565){
return (new cljs.core.async.t13564(f__$1,fn_handler__$1,meta13565));
});

}

return (new cljs.core.async.t13564(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13568 = buff;
if(G__13568){
var bit__4871__auto__ = null;
if(cljs.core.truth_((function (){var or__4197__auto__ = bit__4871__auto__;
if(cljs.core.truth_(or__4197__auto__)){
return or__4197__auto__;
} else {
return G__13568.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13568.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13568);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13568);
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
var G__13570 = arguments.length;
switch (G__13570) {
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
var G__13573 = arguments.length;
switch (G__13573) {
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
var val_13575 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13575);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13575,ret){
return (function (){
return fn1.call(null,val_13575);
});})(val_13575,ret))
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
var G__13577 = arguments.length;
switch (G__13577) {
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
var n__5082__auto___13579 = n;
var x_13580 = (0);
while(true){
if((x_13580 < n__5082__auto___13579)){
(a[x_13580] = (0));

var G__13581 = (x_13580 + (1));
x_13580 = G__13581;
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

var G__13582 = (i + (1));
i = G__13582;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13586 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13586 = (function (flag,alt_flag,meta13587){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13587 = meta13587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13588){
var self__ = this;
var _13588__$1 = this;
return self__.meta13587;
});})(flag))
;

cljs.core.async.t13586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13588,meta13587__$1){
var self__ = this;
var _13588__$1 = this;
return (new cljs.core.async.t13586(self__.flag,self__.alt_flag,meta13587__$1));
});})(flag))
;

cljs.core.async.t13586.cljs$lang$type = true;

cljs.core.async.t13586.cljs$lang$ctorStr = "cljs.core.async/t13586";

cljs.core.async.t13586.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t13586");
});})(flag))
;

cljs.core.async.__GT_t13586 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13586(flag__$1,alt_flag__$1,meta13587){
return (new cljs.core.async.t13586(flag__$1,alt_flag__$1,meta13587));
});})(flag))
;

}

return (new cljs.core.async.t13586(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13592 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13592 = (function (cb,flag,alt_handler,meta13593){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13593 = meta13593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13592.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13594){
var self__ = this;
var _13594__$1 = this;
return self__.meta13593;
});

cljs.core.async.t13592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13594,meta13593__$1){
var self__ = this;
var _13594__$1 = this;
return (new cljs.core.async.t13592(self__.cb,self__.flag,self__.alt_handler,meta13593__$1));
});

cljs.core.async.t13592.cljs$lang$type = true;

cljs.core.async.t13592.cljs$lang$ctorStr = "cljs.core.async/t13592";

cljs.core.async.t13592.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t13592");
});

cljs.core.async.__GT_t13592 = (function cljs$core$async$alt_handler_$___GT_t13592(cb__$1,flag__$1,alt_handler__$1,meta13593){
return (new cljs.core.async.t13592(cb__$1,flag__$1,alt_handler__$1,meta13593));
});

}

return (new cljs.core.async.t13592(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13595_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13595_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13596_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13596_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4197__auto__ = wport;
if(cljs.core.truth_(or__4197__auto__)){
return or__4197__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13597 = (i + (1));
i = G__13597;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4197__auto__ = ret;
if(cljs.core.truth_(or__4197__auto__)){
return or__4197__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4185__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4185__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4185__auto__;
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
var argseq__5233__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5233__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13600){
var map__13601 = p__13600;
var map__13601__$1 = ((cljs.core.seq_QMARK_.call(null,map__13601))?cljs.core.apply.call(null,cljs.core.hash_map,map__13601):map__13601);
var opts = map__13601__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13598){
var G__13599 = cljs.core.first.call(null,seq13598);
var seq13598__$1 = cljs.core.next.call(null,seq13598);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13599,seq13598__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13603 = arguments.length;
switch (G__13603) {
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
var c__6555__auto___13652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___13652){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___13652){
return (function (state_13627){
var state_val_13628 = (state_13627[(1)]);
if((state_val_13628 === (7))){
var inst_13623 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
var statearr_13629_13653 = state_13627__$1;
(statearr_13629_13653[(2)] = inst_13623);

(statearr_13629_13653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (1))){
var state_13627__$1 = state_13627;
var statearr_13630_13654 = state_13627__$1;
(statearr_13630_13654[(2)] = null);

(statearr_13630_13654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (4))){
var inst_13606 = (state_13627[(7)]);
var inst_13606__$1 = (state_13627[(2)]);
var inst_13607 = (inst_13606__$1 == null);
var state_13627__$1 = (function (){var statearr_13631 = state_13627;
(statearr_13631[(7)] = inst_13606__$1);

return statearr_13631;
})();
if(cljs.core.truth_(inst_13607)){
var statearr_13632_13655 = state_13627__$1;
(statearr_13632_13655[(1)] = (5));

} else {
var statearr_13633_13656 = state_13627__$1;
(statearr_13633_13656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (13))){
var state_13627__$1 = state_13627;
var statearr_13634_13657 = state_13627__$1;
(statearr_13634_13657[(2)] = null);

(statearr_13634_13657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (6))){
var inst_13606 = (state_13627[(7)]);
var state_13627__$1 = state_13627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13627__$1,(11),to,inst_13606);
} else {
if((state_val_13628 === (3))){
var inst_13625 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13627__$1,inst_13625);
} else {
if((state_val_13628 === (12))){
var state_13627__$1 = state_13627;
var statearr_13635_13658 = state_13627__$1;
(statearr_13635_13658[(2)] = null);

(statearr_13635_13658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (2))){
var state_13627__$1 = state_13627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13627__$1,(4),from);
} else {
if((state_val_13628 === (11))){
var inst_13616 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
if(cljs.core.truth_(inst_13616)){
var statearr_13636_13659 = state_13627__$1;
(statearr_13636_13659[(1)] = (12));

} else {
var statearr_13637_13660 = state_13627__$1;
(statearr_13637_13660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (9))){
var state_13627__$1 = state_13627;
var statearr_13638_13661 = state_13627__$1;
(statearr_13638_13661[(2)] = null);

(statearr_13638_13661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (5))){
var state_13627__$1 = state_13627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13639_13662 = state_13627__$1;
(statearr_13639_13662[(1)] = (8));

} else {
var statearr_13640_13663 = state_13627__$1;
(statearr_13640_13663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (14))){
var inst_13621 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
var statearr_13641_13664 = state_13627__$1;
(statearr_13641_13664[(2)] = inst_13621);

(statearr_13641_13664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (10))){
var inst_13613 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
var statearr_13642_13665 = state_13627__$1;
(statearr_13642_13665[(2)] = inst_13613);

(statearr_13642_13665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (8))){
var inst_13610 = cljs.core.async.close_BANG_.call(null,to);
var state_13627__$1 = state_13627;
var statearr_13643_13666 = state_13627__$1;
(statearr_13643_13666[(2)] = inst_13610);

(statearr_13643_13666[(1)] = (10));


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
});})(c__6555__auto___13652))
;
return ((function (switch__6493__auto__,c__6555__auto___13652){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_13647 = [null,null,null,null,null,null,null,null];
(statearr_13647[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_13647[(1)] = (1));

return statearr_13647;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_13627){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13648){if((e13648 instanceof Object)){
var ex__6497__auto__ = e13648;
var statearr_13649_13667 = state_13627;
(statearr_13649_13667[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13668 = state_13627;
state_13627 = G__13668;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_13627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_13627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___13652))
})();
var state__6557__auto__ = (function (){var statearr_13650 = f__6556__auto__.call(null);
(statearr_13650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___13652);

return statearr_13650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___13652))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13852){
var vec__13853 = p__13852;
var v = cljs.core.nth.call(null,vec__13853,(0),null);
var p = cljs.core.nth.call(null,vec__13853,(1),null);
var job = vec__13853;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6555__auto___14035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___14035,res,vec__13853,v,p,job,jobs,results){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___14035,res,vec__13853,v,p,job,jobs,results){
return (function (state_13858){
var state_val_13859 = (state_13858[(1)]);
if((state_val_13859 === (2))){
var inst_13855 = (state_13858[(2)]);
var inst_13856 = cljs.core.async.close_BANG_.call(null,res);
var state_13858__$1 = (function (){var statearr_13860 = state_13858;
(statearr_13860[(7)] = inst_13855);

return statearr_13860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13858__$1,inst_13856);
} else {
if((state_val_13859 === (1))){
var state_13858__$1 = state_13858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13858__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6555__auto___14035,res,vec__13853,v,p,job,jobs,results))
;
return ((function (switch__6493__auto__,c__6555__auto___14035,res,vec__13853,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_13864 = [null,null,null,null,null,null,null,null];
(statearr_13864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_13864[(1)] = (1));

return statearr_13864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_13858){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13865){if((e13865 instanceof Object)){
var ex__6497__auto__ = e13865;
var statearr_13866_14036 = state_13858;
(statearr_13866_14036[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14037 = state_13858;
state_13858 = G__14037;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_13858){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_13858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___14035,res,vec__13853,v,p,job,jobs,results))
})();
var state__6557__auto__ = (function (){var statearr_13867 = f__6556__auto__.call(null);
(statearr_13867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___14035);

return statearr_13867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___14035,res,vec__13853,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13868){
var vec__13869 = p__13868;
var v = cljs.core.nth.call(null,vec__13869,(0),null);
var p = cljs.core.nth.call(null,vec__13869,(1),null);
var job = vec__13869;
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
var n__5082__auto___14038 = n;
var __14039 = (0);
while(true){
if((__14039 < n__5082__auto___14038)){
var G__13870_14040 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13870_14040) {
case "async":
var c__6555__auto___14042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14039,c__6555__auto___14042,G__13870_14040,n__5082__auto___14038,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (__14039,c__6555__auto___14042,G__13870_14040,n__5082__auto___14038,jobs,results,process,async){
return (function (state_13883){
var state_val_13884 = (state_13883[(1)]);
if((state_val_13884 === (7))){
var inst_13879 = (state_13883[(2)]);
var state_13883__$1 = state_13883;
var statearr_13885_14043 = state_13883__$1;
(statearr_13885_14043[(2)] = inst_13879);

(statearr_13885_14043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (6))){
var state_13883__$1 = state_13883;
var statearr_13886_14044 = state_13883__$1;
(statearr_13886_14044[(2)] = null);

(statearr_13886_14044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (5))){
var state_13883__$1 = state_13883;
var statearr_13887_14045 = state_13883__$1;
(statearr_13887_14045[(2)] = null);

(statearr_13887_14045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (4))){
var inst_13873 = (state_13883[(2)]);
var inst_13874 = async.call(null,inst_13873);
var state_13883__$1 = state_13883;
if(cljs.core.truth_(inst_13874)){
var statearr_13888_14046 = state_13883__$1;
(statearr_13888_14046[(1)] = (5));

} else {
var statearr_13889_14047 = state_13883__$1;
(statearr_13889_14047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (3))){
var inst_13881 = (state_13883[(2)]);
var state_13883__$1 = state_13883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13883__$1,inst_13881);
} else {
if((state_val_13884 === (2))){
var state_13883__$1 = state_13883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13883__$1,(4),jobs);
} else {
if((state_val_13884 === (1))){
var state_13883__$1 = state_13883;
var statearr_13890_14048 = state_13883__$1;
(statearr_13890_14048[(2)] = null);

(statearr_13890_14048[(1)] = (2));


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
});})(__14039,c__6555__auto___14042,G__13870_14040,n__5082__auto___14038,jobs,results,process,async))
;
return ((function (__14039,switch__6493__auto__,c__6555__auto___14042,G__13870_14040,n__5082__auto___14038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_13894 = [null,null,null,null,null,null,null];
(statearr_13894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_13894[(1)] = (1));

return statearr_13894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_13883){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13895){if((e13895 instanceof Object)){
var ex__6497__auto__ = e13895;
var statearr_13896_14049 = state_13883;
(statearr_13896_14049[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14050 = state_13883;
state_13883 = G__14050;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_13883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_13883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(__14039,switch__6493__auto__,c__6555__auto___14042,G__13870_14040,n__5082__auto___14038,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_13897 = f__6556__auto__.call(null);
(statearr_13897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___14042);

return statearr_13897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(__14039,c__6555__auto___14042,G__13870_14040,n__5082__auto___14038,jobs,results,process,async))
);


break;
case "compute":
var c__6555__auto___14051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14039,c__6555__auto___14051,G__13870_14040,n__5082__auto___14038,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (__14039,c__6555__auto___14051,G__13870_14040,n__5082__auto___14038,jobs,results,process,async){
return (function (state_13910){
var state_val_13911 = (state_13910[(1)]);
if((state_val_13911 === (7))){
var inst_13906 = (state_13910[(2)]);
var state_13910__$1 = state_13910;
var statearr_13912_14052 = state_13910__$1;
(statearr_13912_14052[(2)] = inst_13906);

(statearr_13912_14052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (6))){
var state_13910__$1 = state_13910;
var statearr_13913_14053 = state_13910__$1;
(statearr_13913_14053[(2)] = null);

(statearr_13913_14053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (5))){
var state_13910__$1 = state_13910;
var statearr_13914_14054 = state_13910__$1;
(statearr_13914_14054[(2)] = null);

(statearr_13914_14054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (4))){
var inst_13900 = (state_13910[(2)]);
var inst_13901 = process.call(null,inst_13900);
var state_13910__$1 = state_13910;
if(cljs.core.truth_(inst_13901)){
var statearr_13915_14055 = state_13910__$1;
(statearr_13915_14055[(1)] = (5));

} else {
var statearr_13916_14056 = state_13910__$1;
(statearr_13916_14056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13911 === (3))){
var inst_13908 = (state_13910[(2)]);
var state_13910__$1 = state_13910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13910__$1,inst_13908);
} else {
if((state_val_13911 === (2))){
var state_13910__$1 = state_13910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13910__$1,(4),jobs);
} else {
if((state_val_13911 === (1))){
var state_13910__$1 = state_13910;
var statearr_13917_14057 = state_13910__$1;
(statearr_13917_14057[(2)] = null);

(statearr_13917_14057[(1)] = (2));


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
});})(__14039,c__6555__auto___14051,G__13870_14040,n__5082__auto___14038,jobs,results,process,async))
;
return ((function (__14039,switch__6493__auto__,c__6555__auto___14051,G__13870_14040,n__5082__auto___14038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_13921 = [null,null,null,null,null,null,null];
(statearr_13921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_13921[(1)] = (1));

return statearr_13921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_13910){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13922){if((e13922 instanceof Object)){
var ex__6497__auto__ = e13922;
var statearr_13923_14058 = state_13910;
(statearr_13923_14058[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14059 = state_13910;
state_13910 = G__14059;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_13910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_13910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(__14039,switch__6493__auto__,c__6555__auto___14051,G__13870_14040,n__5082__auto___14038,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_13924 = f__6556__auto__.call(null);
(statearr_13924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___14051);

return statearr_13924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(__14039,c__6555__auto___14051,G__13870_14040,n__5082__auto___14038,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14060 = (__14039 + (1));
__14039 = G__14060;
continue;
} else {
}
break;
}

var c__6555__auto___14061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___14061,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___14061,jobs,results,process,async){
return (function (state_13946){
var state_val_13947 = (state_13946[(1)]);
if((state_val_13947 === (9))){
var inst_13939 = (state_13946[(2)]);
var state_13946__$1 = (function (){var statearr_13948 = state_13946;
(statearr_13948[(7)] = inst_13939);

return statearr_13948;
})();
var statearr_13949_14062 = state_13946__$1;
(statearr_13949_14062[(2)] = null);

(statearr_13949_14062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (8))){
var inst_13932 = (state_13946[(8)]);
var inst_13937 = (state_13946[(2)]);
var state_13946__$1 = (function (){var statearr_13950 = state_13946;
(statearr_13950[(9)] = inst_13937);

return statearr_13950;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13946__$1,(9),results,inst_13932);
} else {
if((state_val_13947 === (7))){
var inst_13942 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13951_14063 = state_13946__$1;
(statearr_13951_14063[(2)] = inst_13942);

(statearr_13951_14063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (6))){
var inst_13932 = (state_13946[(8)]);
var inst_13927 = (state_13946[(10)]);
var inst_13932__$1 = cljs.core.async.chan.call(null,(1));
var inst_13933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13934 = [inst_13927,inst_13932__$1];
var inst_13935 = (new cljs.core.PersistentVector(null,2,(5),inst_13933,inst_13934,null));
var state_13946__$1 = (function (){var statearr_13952 = state_13946;
(statearr_13952[(8)] = inst_13932__$1);

return statearr_13952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13946__$1,(8),jobs,inst_13935);
} else {
if((state_val_13947 === (5))){
var inst_13930 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13946__$1 = state_13946;
var statearr_13953_14064 = state_13946__$1;
(statearr_13953_14064[(2)] = inst_13930);

(statearr_13953_14064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (4))){
var inst_13927 = (state_13946[(10)]);
var inst_13927__$1 = (state_13946[(2)]);
var inst_13928 = (inst_13927__$1 == null);
var state_13946__$1 = (function (){var statearr_13954 = state_13946;
(statearr_13954[(10)] = inst_13927__$1);

return statearr_13954;
})();
if(cljs.core.truth_(inst_13928)){
var statearr_13955_14065 = state_13946__$1;
(statearr_13955_14065[(1)] = (5));

} else {
var statearr_13956_14066 = state_13946__$1;
(statearr_13956_14066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (3))){
var inst_13944 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13946__$1,inst_13944);
} else {
if((state_val_13947 === (2))){
var state_13946__$1 = state_13946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13946__$1,(4),from);
} else {
if((state_val_13947 === (1))){
var state_13946__$1 = state_13946;
var statearr_13957_14067 = state_13946__$1;
(statearr_13957_14067[(2)] = null);

(statearr_13957_14067[(1)] = (2));


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
});})(c__6555__auto___14061,jobs,results,process,async))
;
return ((function (switch__6493__auto__,c__6555__auto___14061,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_13961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_13961[(1)] = (1));

return statearr_13961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_13946){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_13946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e13962){if((e13962 instanceof Object)){
var ex__6497__auto__ = e13962;
var statearr_13963_14068 = state_13946;
(statearr_13963_14068[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14069 = state_13946;
state_13946 = G__14069;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_13946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_13946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___14061,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_13964 = f__6556__auto__.call(null);
(statearr_13964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___14061);

return statearr_13964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___14061,jobs,results,process,async))
);


var c__6555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto__,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto__,jobs,results,process,async){
return (function (state_14002){
var state_val_14003 = (state_14002[(1)]);
if((state_val_14003 === (7))){
var inst_13998 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
var statearr_14004_14070 = state_14002__$1;
(statearr_14004_14070[(2)] = inst_13998);

(statearr_14004_14070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (20))){
var state_14002__$1 = state_14002;
var statearr_14005_14071 = state_14002__$1;
(statearr_14005_14071[(2)] = null);

(statearr_14005_14071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (1))){
var state_14002__$1 = state_14002;
var statearr_14006_14072 = state_14002__$1;
(statearr_14006_14072[(2)] = null);

(statearr_14006_14072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (4))){
var inst_13967 = (state_14002[(7)]);
var inst_13967__$1 = (state_14002[(2)]);
var inst_13968 = (inst_13967__$1 == null);
var state_14002__$1 = (function (){var statearr_14007 = state_14002;
(statearr_14007[(7)] = inst_13967__$1);

return statearr_14007;
})();
if(cljs.core.truth_(inst_13968)){
var statearr_14008_14073 = state_14002__$1;
(statearr_14008_14073[(1)] = (5));

} else {
var statearr_14009_14074 = state_14002__$1;
(statearr_14009_14074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (15))){
var inst_13980 = (state_14002[(8)]);
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14002__$1,(18),to,inst_13980);
} else {
if((state_val_14003 === (21))){
var inst_13993 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
var statearr_14010_14075 = state_14002__$1;
(statearr_14010_14075[(2)] = inst_13993);

(statearr_14010_14075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (13))){
var inst_13995 = (state_14002[(2)]);
var state_14002__$1 = (function (){var statearr_14011 = state_14002;
(statearr_14011[(9)] = inst_13995);

return statearr_14011;
})();
var statearr_14012_14076 = state_14002__$1;
(statearr_14012_14076[(2)] = null);

(statearr_14012_14076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (6))){
var inst_13967 = (state_14002[(7)]);
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14002__$1,(11),inst_13967);
} else {
if((state_val_14003 === (17))){
var inst_13988 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
if(cljs.core.truth_(inst_13988)){
var statearr_14013_14077 = state_14002__$1;
(statearr_14013_14077[(1)] = (19));

} else {
var statearr_14014_14078 = state_14002__$1;
(statearr_14014_14078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (3))){
var inst_14000 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14002__$1,inst_14000);
} else {
if((state_val_14003 === (12))){
var inst_13977 = (state_14002[(10)]);
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14002__$1,(14),inst_13977);
} else {
if((state_val_14003 === (2))){
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14002__$1,(4),results);
} else {
if((state_val_14003 === (19))){
var state_14002__$1 = state_14002;
var statearr_14015_14079 = state_14002__$1;
(statearr_14015_14079[(2)] = null);

(statearr_14015_14079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (11))){
var inst_13977 = (state_14002[(2)]);
var state_14002__$1 = (function (){var statearr_14016 = state_14002;
(statearr_14016[(10)] = inst_13977);

return statearr_14016;
})();
var statearr_14017_14080 = state_14002__$1;
(statearr_14017_14080[(2)] = null);

(statearr_14017_14080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (9))){
var state_14002__$1 = state_14002;
var statearr_14018_14081 = state_14002__$1;
(statearr_14018_14081[(2)] = null);

(statearr_14018_14081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (5))){
var state_14002__$1 = state_14002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14019_14082 = state_14002__$1;
(statearr_14019_14082[(1)] = (8));

} else {
var statearr_14020_14083 = state_14002__$1;
(statearr_14020_14083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (14))){
var inst_13980 = (state_14002[(8)]);
var inst_13982 = (state_14002[(11)]);
var inst_13980__$1 = (state_14002[(2)]);
var inst_13981 = (inst_13980__$1 == null);
var inst_13982__$1 = cljs.core.not.call(null,inst_13981);
var state_14002__$1 = (function (){var statearr_14021 = state_14002;
(statearr_14021[(8)] = inst_13980__$1);

(statearr_14021[(11)] = inst_13982__$1);

return statearr_14021;
})();
if(inst_13982__$1){
var statearr_14022_14084 = state_14002__$1;
(statearr_14022_14084[(1)] = (15));

} else {
var statearr_14023_14085 = state_14002__$1;
(statearr_14023_14085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (16))){
var inst_13982 = (state_14002[(11)]);
var state_14002__$1 = state_14002;
var statearr_14024_14086 = state_14002__$1;
(statearr_14024_14086[(2)] = inst_13982);

(statearr_14024_14086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (10))){
var inst_13974 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
var statearr_14025_14087 = state_14002__$1;
(statearr_14025_14087[(2)] = inst_13974);

(statearr_14025_14087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (18))){
var inst_13985 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
var statearr_14026_14088 = state_14002__$1;
(statearr_14026_14088[(2)] = inst_13985);

(statearr_14026_14088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (8))){
var inst_13971 = cljs.core.async.close_BANG_.call(null,to);
var state_14002__$1 = state_14002;
var statearr_14027_14089 = state_14002__$1;
(statearr_14027_14089[(2)] = inst_13971);

(statearr_14027_14089[(1)] = (10));


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
});})(c__6555__auto__,jobs,results,process,async))
;
return ((function (switch__6493__auto__,c__6555__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_14031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_14031[(1)] = (1));

return statearr_14031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_14002){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_14002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e14032){if((e14032 instanceof Object)){
var ex__6497__auto__ = e14032;
var statearr_14033_14090 = state_14002;
(statearr_14033_14090[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14091 = state_14002;
state_14002 = G__14091;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_14002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_14002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_14034 = f__6556__auto__.call(null);
(statearr_14034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_14034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto__,jobs,results,process,async))
);

return c__6555__auto__;
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
var G__14093 = arguments.length;
switch (G__14093) {
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
var G__14096 = arguments.length;
switch (G__14096) {
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
var G__14099 = arguments.length;
switch (G__14099) {
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
var c__6555__auto___14151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___14151,tc,fc){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___14151,tc,fc){
return (function (state_14125){
var state_val_14126 = (state_14125[(1)]);
if((state_val_14126 === (7))){
var inst_14121 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
var statearr_14127_14152 = state_14125__$1;
(statearr_14127_14152[(2)] = inst_14121);

(statearr_14127_14152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (1))){
var state_14125__$1 = state_14125;
var statearr_14128_14153 = state_14125__$1;
(statearr_14128_14153[(2)] = null);

(statearr_14128_14153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (4))){
var inst_14102 = (state_14125[(7)]);
var inst_14102__$1 = (state_14125[(2)]);
var inst_14103 = (inst_14102__$1 == null);
var state_14125__$1 = (function (){var statearr_14129 = state_14125;
(statearr_14129[(7)] = inst_14102__$1);

return statearr_14129;
})();
if(cljs.core.truth_(inst_14103)){
var statearr_14130_14154 = state_14125__$1;
(statearr_14130_14154[(1)] = (5));

} else {
var statearr_14131_14155 = state_14125__$1;
(statearr_14131_14155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (13))){
var state_14125__$1 = state_14125;
var statearr_14132_14156 = state_14125__$1;
(statearr_14132_14156[(2)] = null);

(statearr_14132_14156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (6))){
var inst_14102 = (state_14125[(7)]);
var inst_14108 = p.call(null,inst_14102);
var state_14125__$1 = state_14125;
if(cljs.core.truth_(inst_14108)){
var statearr_14133_14157 = state_14125__$1;
(statearr_14133_14157[(1)] = (9));

} else {
var statearr_14134_14158 = state_14125__$1;
(statearr_14134_14158[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (3))){
var inst_14123 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14125__$1,inst_14123);
} else {
if((state_val_14126 === (12))){
var state_14125__$1 = state_14125;
var statearr_14135_14159 = state_14125__$1;
(statearr_14135_14159[(2)] = null);

(statearr_14135_14159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (2))){
var state_14125__$1 = state_14125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14125__$1,(4),ch);
} else {
if((state_val_14126 === (11))){
var inst_14102 = (state_14125[(7)]);
var inst_14112 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14125__$1,(8),inst_14112,inst_14102);
} else {
if((state_val_14126 === (9))){
var state_14125__$1 = state_14125;
var statearr_14136_14160 = state_14125__$1;
(statearr_14136_14160[(2)] = tc);

(statearr_14136_14160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (5))){
var inst_14105 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14106 = cljs.core.async.close_BANG_.call(null,fc);
var state_14125__$1 = (function (){var statearr_14137 = state_14125;
(statearr_14137[(8)] = inst_14105);

return statearr_14137;
})();
var statearr_14138_14161 = state_14125__$1;
(statearr_14138_14161[(2)] = inst_14106);

(statearr_14138_14161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (14))){
var inst_14119 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
var statearr_14139_14162 = state_14125__$1;
(statearr_14139_14162[(2)] = inst_14119);

(statearr_14139_14162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (10))){
var state_14125__$1 = state_14125;
var statearr_14140_14163 = state_14125__$1;
(statearr_14140_14163[(2)] = fc);

(statearr_14140_14163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14126 === (8))){
var inst_14114 = (state_14125[(2)]);
var state_14125__$1 = state_14125;
if(cljs.core.truth_(inst_14114)){
var statearr_14141_14164 = state_14125__$1;
(statearr_14141_14164[(1)] = (12));

} else {
var statearr_14142_14165 = state_14125__$1;
(statearr_14142_14165[(1)] = (13));

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
});})(c__6555__auto___14151,tc,fc))
;
return ((function (switch__6493__auto__,c__6555__auto___14151,tc,fc){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_14146 = [null,null,null,null,null,null,null,null,null];
(statearr_14146[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_14146[(1)] = (1));

return statearr_14146;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_14125){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_14125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e14147){if((e14147 instanceof Object)){
var ex__6497__auto__ = e14147;
var statearr_14148_14166 = state_14125;
(statearr_14148_14166[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14167 = state_14125;
state_14125 = G__14167;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_14125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_14125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___14151,tc,fc))
})();
var state__6557__auto__ = (function (){var statearr_14149 = f__6556__auto__.call(null);
(statearr_14149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___14151);

return statearr_14149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___14151,tc,fc))
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
var c__6555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto__){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto__){
return (function (state_14214){
var state_val_14215 = (state_14214[(1)]);
if((state_val_14215 === (7))){
var inst_14210 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
var statearr_14216_14232 = state_14214__$1;
(statearr_14216_14232[(2)] = inst_14210);

(statearr_14216_14232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (6))){
var inst_14203 = (state_14214[(7)]);
var inst_14200 = (state_14214[(8)]);
var inst_14207 = f.call(null,inst_14200,inst_14203);
var inst_14200__$1 = inst_14207;
var state_14214__$1 = (function (){var statearr_14217 = state_14214;
(statearr_14217[(8)] = inst_14200__$1);

return statearr_14217;
})();
var statearr_14218_14233 = state_14214__$1;
(statearr_14218_14233[(2)] = null);

(statearr_14218_14233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (5))){
var inst_14200 = (state_14214[(8)]);
var state_14214__$1 = state_14214;
var statearr_14219_14234 = state_14214__$1;
(statearr_14219_14234[(2)] = inst_14200);

(statearr_14219_14234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (4))){
var inst_14203 = (state_14214[(7)]);
var inst_14203__$1 = (state_14214[(2)]);
var inst_14204 = (inst_14203__$1 == null);
var state_14214__$1 = (function (){var statearr_14220 = state_14214;
(statearr_14220[(7)] = inst_14203__$1);

return statearr_14220;
})();
if(cljs.core.truth_(inst_14204)){
var statearr_14221_14235 = state_14214__$1;
(statearr_14221_14235[(1)] = (5));

} else {
var statearr_14222_14236 = state_14214__$1;
(statearr_14222_14236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (3))){
var inst_14212 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14214__$1,inst_14212);
} else {
if((state_val_14215 === (2))){
var state_14214__$1 = state_14214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14214__$1,(4),ch);
} else {
if((state_val_14215 === (1))){
var inst_14200 = init;
var state_14214__$1 = (function (){var statearr_14223 = state_14214;
(statearr_14223[(8)] = inst_14200);

return statearr_14223;
})();
var statearr_14224_14237 = state_14214__$1;
(statearr_14224_14237[(2)] = null);

(statearr_14224_14237[(1)] = (2));


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
});})(c__6555__auto__))
;
return ((function (switch__6493__auto__,c__6555__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6494__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6494__auto____0 = (function (){
var statearr_14228 = [null,null,null,null,null,null,null,null,null];
(statearr_14228[(0)] = cljs$core$async$reduce_$_state_machine__6494__auto__);

(statearr_14228[(1)] = (1));

return statearr_14228;
});
var cljs$core$async$reduce_$_state_machine__6494__auto____1 = (function (state_14214){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_14214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e14229){if((e14229 instanceof Object)){
var ex__6497__auto__ = e14229;
var statearr_14230_14238 = state_14214;
(statearr_14230_14238[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14239 = state_14214;
state_14214 = G__14239;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6494__auto__ = function(state_14214){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6494__auto____1.call(this,state_14214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6494__auto____0;
cljs$core$async$reduce_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6494__auto____1;
return cljs$core$async$reduce_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__))
})();
var state__6557__auto__ = (function (){var statearr_14231 = f__6556__auto__.call(null);
(statearr_14231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_14231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto__))
);

return c__6555__auto__;
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
var G__14241 = arguments.length;
switch (G__14241) {
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
var c__6555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto__){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto__){
return (function (state_14266){
var state_val_14267 = (state_14266[(1)]);
if((state_val_14267 === (7))){
var inst_14248 = (state_14266[(2)]);
var state_14266__$1 = state_14266;
var statearr_14268_14292 = state_14266__$1;
(statearr_14268_14292[(2)] = inst_14248);

(statearr_14268_14292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (1))){
var inst_14242 = cljs.core.seq.call(null,coll);
var inst_14243 = inst_14242;
var state_14266__$1 = (function (){var statearr_14269 = state_14266;
(statearr_14269[(7)] = inst_14243);

return statearr_14269;
})();
var statearr_14270_14293 = state_14266__$1;
(statearr_14270_14293[(2)] = null);

(statearr_14270_14293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (4))){
var inst_14243 = (state_14266[(7)]);
var inst_14246 = cljs.core.first.call(null,inst_14243);
var state_14266__$1 = state_14266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14266__$1,(7),ch,inst_14246);
} else {
if((state_val_14267 === (13))){
var inst_14260 = (state_14266[(2)]);
var state_14266__$1 = state_14266;
var statearr_14271_14294 = state_14266__$1;
(statearr_14271_14294[(2)] = inst_14260);

(statearr_14271_14294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (6))){
var inst_14251 = (state_14266[(2)]);
var state_14266__$1 = state_14266;
if(cljs.core.truth_(inst_14251)){
var statearr_14272_14295 = state_14266__$1;
(statearr_14272_14295[(1)] = (8));

} else {
var statearr_14273_14296 = state_14266__$1;
(statearr_14273_14296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (3))){
var inst_14264 = (state_14266[(2)]);
var state_14266__$1 = state_14266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14266__$1,inst_14264);
} else {
if((state_val_14267 === (12))){
var state_14266__$1 = state_14266;
var statearr_14274_14297 = state_14266__$1;
(statearr_14274_14297[(2)] = null);

(statearr_14274_14297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (2))){
var inst_14243 = (state_14266[(7)]);
var state_14266__$1 = state_14266;
if(cljs.core.truth_(inst_14243)){
var statearr_14275_14298 = state_14266__$1;
(statearr_14275_14298[(1)] = (4));

} else {
var statearr_14276_14299 = state_14266__$1;
(statearr_14276_14299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (11))){
var inst_14257 = cljs.core.async.close_BANG_.call(null,ch);
var state_14266__$1 = state_14266;
var statearr_14277_14300 = state_14266__$1;
(statearr_14277_14300[(2)] = inst_14257);

(statearr_14277_14300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (9))){
var state_14266__$1 = state_14266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14278_14301 = state_14266__$1;
(statearr_14278_14301[(1)] = (11));

} else {
var statearr_14279_14302 = state_14266__$1;
(statearr_14279_14302[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (5))){
var inst_14243 = (state_14266[(7)]);
var state_14266__$1 = state_14266;
var statearr_14280_14303 = state_14266__$1;
(statearr_14280_14303[(2)] = inst_14243);

(statearr_14280_14303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (10))){
var inst_14262 = (state_14266[(2)]);
var state_14266__$1 = state_14266;
var statearr_14281_14304 = state_14266__$1;
(statearr_14281_14304[(2)] = inst_14262);

(statearr_14281_14304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14267 === (8))){
var inst_14243 = (state_14266[(7)]);
var inst_14253 = cljs.core.next.call(null,inst_14243);
var inst_14243__$1 = inst_14253;
var state_14266__$1 = (function (){var statearr_14282 = state_14266;
(statearr_14282[(7)] = inst_14243__$1);

return statearr_14282;
})();
var statearr_14283_14305 = state_14266__$1;
(statearr_14283_14305[(2)] = null);

(statearr_14283_14305[(1)] = (2));


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
});})(c__6555__auto__))
;
return ((function (switch__6493__auto__,c__6555__auto__){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_14287 = [null,null,null,null,null,null,null,null];
(statearr_14287[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_14287[(1)] = (1));

return statearr_14287;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_14266){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_14266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e14288){if((e14288 instanceof Object)){
var ex__6497__auto__ = e14288;
var statearr_14289_14306 = state_14266;
(statearr_14289_14306[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14307 = state_14266;
state_14266 = G__14307;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_14266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_14266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__))
})();
var state__6557__auto__ = (function (){var statearr_14290 = f__6556__auto__.call(null);
(statearr_14290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_14290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto__))
);

return c__6555__auto__;
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

cljs.core.async.Mux = (function (){var obj14309 = {};
return obj14309;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4185__auto__ = _;
if(and__4185__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4185__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4833__auto__ = (((_ == null))?null:_);
return (function (){var or__4197__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj14311 = {};
return obj14311;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
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
if(typeof cljs.core.async.t14533 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14533 = (function (cs,ch,mult,meta14534){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14534 = meta14534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14533.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14533.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14533.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14533.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14533.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14535){
var self__ = this;
var _14535__$1 = this;
return self__.meta14534;
});})(cs))
;

cljs.core.async.t14533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14535,meta14534__$1){
var self__ = this;
var _14535__$1 = this;
return (new cljs.core.async.t14533(self__.cs,self__.ch,self__.mult,meta14534__$1));
});})(cs))
;

cljs.core.async.t14533.cljs$lang$type = true;

cljs.core.async.t14533.cljs$lang$ctorStr = "cljs.core.async/t14533";

cljs.core.async.t14533.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t14533");
});})(cs))
;

cljs.core.async.__GT_t14533 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14533(cs__$1,ch__$1,mult__$1,meta14534){
return (new cljs.core.async.t14533(cs__$1,ch__$1,mult__$1,meta14534));
});})(cs))
;

}

return (new cljs.core.async.t14533(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6555__auto___14754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___14754,cs,m,dchan,dctr,done){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___14754,cs,m,dchan,dctr,done){
return (function (state_14666){
var state_val_14667 = (state_14666[(1)]);
if((state_val_14667 === (7))){
var inst_14662 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14668_14755 = state_14666__$1;
(statearr_14668_14755[(2)] = inst_14662);

(statearr_14668_14755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (20))){
var inst_14567 = (state_14666[(7)]);
var inst_14577 = cljs.core.first.call(null,inst_14567);
var inst_14578 = cljs.core.nth.call(null,inst_14577,(0),null);
var inst_14579 = cljs.core.nth.call(null,inst_14577,(1),null);
var state_14666__$1 = (function (){var statearr_14669 = state_14666;
(statearr_14669[(8)] = inst_14578);

return statearr_14669;
})();
if(cljs.core.truth_(inst_14579)){
var statearr_14670_14756 = state_14666__$1;
(statearr_14670_14756[(1)] = (22));

} else {
var statearr_14671_14757 = state_14666__$1;
(statearr_14671_14757[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (27))){
var inst_14607 = (state_14666[(9)]);
var inst_14614 = (state_14666[(10)]);
var inst_14609 = (state_14666[(11)]);
var inst_14538 = (state_14666[(12)]);
var inst_14614__$1 = cljs.core._nth.call(null,inst_14607,inst_14609);
var inst_14615 = cljs.core.async.put_BANG_.call(null,inst_14614__$1,inst_14538,done);
var state_14666__$1 = (function (){var statearr_14672 = state_14666;
(statearr_14672[(10)] = inst_14614__$1);

return statearr_14672;
})();
if(cljs.core.truth_(inst_14615)){
var statearr_14673_14758 = state_14666__$1;
(statearr_14673_14758[(1)] = (30));

} else {
var statearr_14674_14759 = state_14666__$1;
(statearr_14674_14759[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (1))){
var state_14666__$1 = state_14666;
var statearr_14675_14760 = state_14666__$1;
(statearr_14675_14760[(2)] = null);

(statearr_14675_14760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (24))){
var inst_14567 = (state_14666[(7)]);
var inst_14584 = (state_14666[(2)]);
var inst_14585 = cljs.core.next.call(null,inst_14567);
var inst_14547 = inst_14585;
var inst_14548 = null;
var inst_14549 = (0);
var inst_14550 = (0);
var state_14666__$1 = (function (){var statearr_14676 = state_14666;
(statearr_14676[(13)] = inst_14548);

(statearr_14676[(14)] = inst_14584);

(statearr_14676[(15)] = inst_14549);

(statearr_14676[(16)] = inst_14550);

(statearr_14676[(17)] = inst_14547);

return statearr_14676;
})();
var statearr_14677_14761 = state_14666__$1;
(statearr_14677_14761[(2)] = null);

(statearr_14677_14761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (39))){
var state_14666__$1 = state_14666;
var statearr_14681_14762 = state_14666__$1;
(statearr_14681_14762[(2)] = null);

(statearr_14681_14762[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (4))){
var inst_14538 = (state_14666[(12)]);
var inst_14538__$1 = (state_14666[(2)]);
var inst_14539 = (inst_14538__$1 == null);
var state_14666__$1 = (function (){var statearr_14682 = state_14666;
(statearr_14682[(12)] = inst_14538__$1);

return statearr_14682;
})();
if(cljs.core.truth_(inst_14539)){
var statearr_14683_14763 = state_14666__$1;
(statearr_14683_14763[(1)] = (5));

} else {
var statearr_14684_14764 = state_14666__$1;
(statearr_14684_14764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (15))){
var inst_14548 = (state_14666[(13)]);
var inst_14549 = (state_14666[(15)]);
var inst_14550 = (state_14666[(16)]);
var inst_14547 = (state_14666[(17)]);
var inst_14563 = (state_14666[(2)]);
var inst_14564 = (inst_14550 + (1));
var tmp14678 = inst_14548;
var tmp14679 = inst_14549;
var tmp14680 = inst_14547;
var inst_14547__$1 = tmp14680;
var inst_14548__$1 = tmp14678;
var inst_14549__$1 = tmp14679;
var inst_14550__$1 = inst_14564;
var state_14666__$1 = (function (){var statearr_14685 = state_14666;
(statearr_14685[(13)] = inst_14548__$1);

(statearr_14685[(15)] = inst_14549__$1);

(statearr_14685[(18)] = inst_14563);

(statearr_14685[(16)] = inst_14550__$1);

(statearr_14685[(17)] = inst_14547__$1);

return statearr_14685;
})();
var statearr_14686_14765 = state_14666__$1;
(statearr_14686_14765[(2)] = null);

(statearr_14686_14765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (21))){
var inst_14588 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14690_14766 = state_14666__$1;
(statearr_14690_14766[(2)] = inst_14588);

(statearr_14690_14766[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (31))){
var inst_14614 = (state_14666[(10)]);
var inst_14618 = done.call(null,null);
var inst_14619 = cljs.core.async.untap_STAR_.call(null,m,inst_14614);
var state_14666__$1 = (function (){var statearr_14691 = state_14666;
(statearr_14691[(19)] = inst_14618);

return statearr_14691;
})();
var statearr_14692_14767 = state_14666__$1;
(statearr_14692_14767[(2)] = inst_14619);

(statearr_14692_14767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (32))){
var inst_14607 = (state_14666[(9)]);
var inst_14606 = (state_14666[(20)]);
var inst_14608 = (state_14666[(21)]);
var inst_14609 = (state_14666[(11)]);
var inst_14621 = (state_14666[(2)]);
var inst_14622 = (inst_14609 + (1));
var tmp14687 = inst_14607;
var tmp14688 = inst_14606;
var tmp14689 = inst_14608;
var inst_14606__$1 = tmp14688;
var inst_14607__$1 = tmp14687;
var inst_14608__$1 = tmp14689;
var inst_14609__$1 = inst_14622;
var state_14666__$1 = (function (){var statearr_14693 = state_14666;
(statearr_14693[(9)] = inst_14607__$1);

(statearr_14693[(20)] = inst_14606__$1);

(statearr_14693[(21)] = inst_14608__$1);

(statearr_14693[(11)] = inst_14609__$1);

(statearr_14693[(22)] = inst_14621);

return statearr_14693;
})();
var statearr_14694_14768 = state_14666__$1;
(statearr_14694_14768[(2)] = null);

(statearr_14694_14768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (40))){
var inst_14634 = (state_14666[(23)]);
var inst_14638 = done.call(null,null);
var inst_14639 = cljs.core.async.untap_STAR_.call(null,m,inst_14634);
var state_14666__$1 = (function (){var statearr_14695 = state_14666;
(statearr_14695[(24)] = inst_14638);

return statearr_14695;
})();
var statearr_14696_14769 = state_14666__$1;
(statearr_14696_14769[(2)] = inst_14639);

(statearr_14696_14769[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (33))){
var inst_14625 = (state_14666[(25)]);
var inst_14627 = cljs.core.chunked_seq_QMARK_.call(null,inst_14625);
var state_14666__$1 = state_14666;
if(inst_14627){
var statearr_14697_14770 = state_14666__$1;
(statearr_14697_14770[(1)] = (36));

} else {
var statearr_14698_14771 = state_14666__$1;
(statearr_14698_14771[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (13))){
var inst_14557 = (state_14666[(26)]);
var inst_14560 = cljs.core.async.close_BANG_.call(null,inst_14557);
var state_14666__$1 = state_14666;
var statearr_14699_14772 = state_14666__$1;
(statearr_14699_14772[(2)] = inst_14560);

(statearr_14699_14772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (22))){
var inst_14578 = (state_14666[(8)]);
var inst_14581 = cljs.core.async.close_BANG_.call(null,inst_14578);
var state_14666__$1 = state_14666;
var statearr_14700_14773 = state_14666__$1;
(statearr_14700_14773[(2)] = inst_14581);

(statearr_14700_14773[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (36))){
var inst_14625 = (state_14666[(25)]);
var inst_14629 = cljs.core.chunk_first.call(null,inst_14625);
var inst_14630 = cljs.core.chunk_rest.call(null,inst_14625);
var inst_14631 = cljs.core.count.call(null,inst_14629);
var inst_14606 = inst_14630;
var inst_14607 = inst_14629;
var inst_14608 = inst_14631;
var inst_14609 = (0);
var state_14666__$1 = (function (){var statearr_14701 = state_14666;
(statearr_14701[(9)] = inst_14607);

(statearr_14701[(20)] = inst_14606);

(statearr_14701[(21)] = inst_14608);

(statearr_14701[(11)] = inst_14609);

return statearr_14701;
})();
var statearr_14702_14774 = state_14666__$1;
(statearr_14702_14774[(2)] = null);

(statearr_14702_14774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (41))){
var inst_14625 = (state_14666[(25)]);
var inst_14641 = (state_14666[(2)]);
var inst_14642 = cljs.core.next.call(null,inst_14625);
var inst_14606 = inst_14642;
var inst_14607 = null;
var inst_14608 = (0);
var inst_14609 = (0);
var state_14666__$1 = (function (){var statearr_14703 = state_14666;
(statearr_14703[(9)] = inst_14607);

(statearr_14703[(20)] = inst_14606);

(statearr_14703[(27)] = inst_14641);

(statearr_14703[(21)] = inst_14608);

(statearr_14703[(11)] = inst_14609);

return statearr_14703;
})();
var statearr_14704_14775 = state_14666__$1;
(statearr_14704_14775[(2)] = null);

(statearr_14704_14775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (43))){
var state_14666__$1 = state_14666;
var statearr_14705_14776 = state_14666__$1;
(statearr_14705_14776[(2)] = null);

(statearr_14705_14776[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (29))){
var inst_14650 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14706_14777 = state_14666__$1;
(statearr_14706_14777[(2)] = inst_14650);

(statearr_14706_14777[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (44))){
var inst_14659 = (state_14666[(2)]);
var state_14666__$1 = (function (){var statearr_14707 = state_14666;
(statearr_14707[(28)] = inst_14659);

return statearr_14707;
})();
var statearr_14708_14778 = state_14666__$1;
(statearr_14708_14778[(2)] = null);

(statearr_14708_14778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (6))){
var inst_14598 = (state_14666[(29)]);
var inst_14597 = cljs.core.deref.call(null,cs);
var inst_14598__$1 = cljs.core.keys.call(null,inst_14597);
var inst_14599 = cljs.core.count.call(null,inst_14598__$1);
var inst_14600 = cljs.core.reset_BANG_.call(null,dctr,inst_14599);
var inst_14605 = cljs.core.seq.call(null,inst_14598__$1);
var inst_14606 = inst_14605;
var inst_14607 = null;
var inst_14608 = (0);
var inst_14609 = (0);
var state_14666__$1 = (function (){var statearr_14709 = state_14666;
(statearr_14709[(9)] = inst_14607);

(statearr_14709[(20)] = inst_14606);

(statearr_14709[(21)] = inst_14608);

(statearr_14709[(11)] = inst_14609);

(statearr_14709[(30)] = inst_14600);

(statearr_14709[(29)] = inst_14598__$1);

return statearr_14709;
})();
var statearr_14710_14779 = state_14666__$1;
(statearr_14710_14779[(2)] = null);

(statearr_14710_14779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (28))){
var inst_14606 = (state_14666[(20)]);
var inst_14625 = (state_14666[(25)]);
var inst_14625__$1 = cljs.core.seq.call(null,inst_14606);
var state_14666__$1 = (function (){var statearr_14711 = state_14666;
(statearr_14711[(25)] = inst_14625__$1);

return statearr_14711;
})();
if(inst_14625__$1){
var statearr_14712_14780 = state_14666__$1;
(statearr_14712_14780[(1)] = (33));

} else {
var statearr_14713_14781 = state_14666__$1;
(statearr_14713_14781[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (25))){
var inst_14608 = (state_14666[(21)]);
var inst_14609 = (state_14666[(11)]);
var inst_14611 = (inst_14609 < inst_14608);
var inst_14612 = inst_14611;
var state_14666__$1 = state_14666;
if(cljs.core.truth_(inst_14612)){
var statearr_14714_14782 = state_14666__$1;
(statearr_14714_14782[(1)] = (27));

} else {
var statearr_14715_14783 = state_14666__$1;
(statearr_14715_14783[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (34))){
var state_14666__$1 = state_14666;
var statearr_14716_14784 = state_14666__$1;
(statearr_14716_14784[(2)] = null);

(statearr_14716_14784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (17))){
var state_14666__$1 = state_14666;
var statearr_14717_14785 = state_14666__$1;
(statearr_14717_14785[(2)] = null);

(statearr_14717_14785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (3))){
var inst_14664 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14666__$1,inst_14664);
} else {
if((state_val_14667 === (12))){
var inst_14593 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14718_14786 = state_14666__$1;
(statearr_14718_14786[(2)] = inst_14593);

(statearr_14718_14786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (2))){
var state_14666__$1 = state_14666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14666__$1,(4),ch);
} else {
if((state_val_14667 === (23))){
var state_14666__$1 = state_14666;
var statearr_14719_14787 = state_14666__$1;
(statearr_14719_14787[(2)] = null);

(statearr_14719_14787[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (35))){
var inst_14648 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14720_14788 = state_14666__$1;
(statearr_14720_14788[(2)] = inst_14648);

(statearr_14720_14788[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (19))){
var inst_14567 = (state_14666[(7)]);
var inst_14571 = cljs.core.chunk_first.call(null,inst_14567);
var inst_14572 = cljs.core.chunk_rest.call(null,inst_14567);
var inst_14573 = cljs.core.count.call(null,inst_14571);
var inst_14547 = inst_14572;
var inst_14548 = inst_14571;
var inst_14549 = inst_14573;
var inst_14550 = (0);
var state_14666__$1 = (function (){var statearr_14721 = state_14666;
(statearr_14721[(13)] = inst_14548);

(statearr_14721[(15)] = inst_14549);

(statearr_14721[(16)] = inst_14550);

(statearr_14721[(17)] = inst_14547);

return statearr_14721;
})();
var statearr_14722_14789 = state_14666__$1;
(statearr_14722_14789[(2)] = null);

(statearr_14722_14789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (11))){
var inst_14567 = (state_14666[(7)]);
var inst_14547 = (state_14666[(17)]);
var inst_14567__$1 = cljs.core.seq.call(null,inst_14547);
var state_14666__$1 = (function (){var statearr_14723 = state_14666;
(statearr_14723[(7)] = inst_14567__$1);

return statearr_14723;
})();
if(inst_14567__$1){
var statearr_14724_14790 = state_14666__$1;
(statearr_14724_14790[(1)] = (16));

} else {
var statearr_14725_14791 = state_14666__$1;
(statearr_14725_14791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (9))){
var inst_14595 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14726_14792 = state_14666__$1;
(statearr_14726_14792[(2)] = inst_14595);

(statearr_14726_14792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (5))){
var inst_14545 = cljs.core.deref.call(null,cs);
var inst_14546 = cljs.core.seq.call(null,inst_14545);
var inst_14547 = inst_14546;
var inst_14548 = null;
var inst_14549 = (0);
var inst_14550 = (0);
var state_14666__$1 = (function (){var statearr_14727 = state_14666;
(statearr_14727[(13)] = inst_14548);

(statearr_14727[(15)] = inst_14549);

(statearr_14727[(16)] = inst_14550);

(statearr_14727[(17)] = inst_14547);

return statearr_14727;
})();
var statearr_14728_14793 = state_14666__$1;
(statearr_14728_14793[(2)] = null);

(statearr_14728_14793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (14))){
var state_14666__$1 = state_14666;
var statearr_14729_14794 = state_14666__$1;
(statearr_14729_14794[(2)] = null);

(statearr_14729_14794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (45))){
var inst_14656 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14730_14795 = state_14666__$1;
(statearr_14730_14795[(2)] = inst_14656);

(statearr_14730_14795[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (26))){
var inst_14598 = (state_14666[(29)]);
var inst_14652 = (state_14666[(2)]);
var inst_14653 = cljs.core.seq.call(null,inst_14598);
var state_14666__$1 = (function (){var statearr_14731 = state_14666;
(statearr_14731[(31)] = inst_14652);

return statearr_14731;
})();
if(inst_14653){
var statearr_14732_14796 = state_14666__$1;
(statearr_14732_14796[(1)] = (42));

} else {
var statearr_14733_14797 = state_14666__$1;
(statearr_14733_14797[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (16))){
var inst_14567 = (state_14666[(7)]);
var inst_14569 = cljs.core.chunked_seq_QMARK_.call(null,inst_14567);
var state_14666__$1 = state_14666;
if(inst_14569){
var statearr_14734_14798 = state_14666__$1;
(statearr_14734_14798[(1)] = (19));

} else {
var statearr_14735_14799 = state_14666__$1;
(statearr_14735_14799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (38))){
var inst_14645 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14736_14800 = state_14666__$1;
(statearr_14736_14800[(2)] = inst_14645);

(statearr_14736_14800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (30))){
var state_14666__$1 = state_14666;
var statearr_14737_14801 = state_14666__$1;
(statearr_14737_14801[(2)] = null);

(statearr_14737_14801[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (10))){
var inst_14548 = (state_14666[(13)]);
var inst_14550 = (state_14666[(16)]);
var inst_14556 = cljs.core._nth.call(null,inst_14548,inst_14550);
var inst_14557 = cljs.core.nth.call(null,inst_14556,(0),null);
var inst_14558 = cljs.core.nth.call(null,inst_14556,(1),null);
var state_14666__$1 = (function (){var statearr_14738 = state_14666;
(statearr_14738[(26)] = inst_14557);

return statearr_14738;
})();
if(cljs.core.truth_(inst_14558)){
var statearr_14739_14802 = state_14666__$1;
(statearr_14739_14802[(1)] = (13));

} else {
var statearr_14740_14803 = state_14666__$1;
(statearr_14740_14803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (18))){
var inst_14591 = (state_14666[(2)]);
var state_14666__$1 = state_14666;
var statearr_14741_14804 = state_14666__$1;
(statearr_14741_14804[(2)] = inst_14591);

(statearr_14741_14804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (42))){
var state_14666__$1 = state_14666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14666__$1,(45),dchan);
} else {
if((state_val_14667 === (37))){
var inst_14634 = (state_14666[(23)]);
var inst_14625 = (state_14666[(25)]);
var inst_14538 = (state_14666[(12)]);
var inst_14634__$1 = cljs.core.first.call(null,inst_14625);
var inst_14635 = cljs.core.async.put_BANG_.call(null,inst_14634__$1,inst_14538,done);
var state_14666__$1 = (function (){var statearr_14742 = state_14666;
(statearr_14742[(23)] = inst_14634__$1);

return statearr_14742;
})();
if(cljs.core.truth_(inst_14635)){
var statearr_14743_14805 = state_14666__$1;
(statearr_14743_14805[(1)] = (39));

} else {
var statearr_14744_14806 = state_14666__$1;
(statearr_14744_14806[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14667 === (8))){
var inst_14549 = (state_14666[(15)]);
var inst_14550 = (state_14666[(16)]);
var inst_14552 = (inst_14550 < inst_14549);
var inst_14553 = inst_14552;
var state_14666__$1 = state_14666;
if(cljs.core.truth_(inst_14553)){
var statearr_14745_14807 = state_14666__$1;
(statearr_14745_14807[(1)] = (10));

} else {
var statearr_14746_14808 = state_14666__$1;
(statearr_14746_14808[(1)] = (11));

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
});})(c__6555__auto___14754,cs,m,dchan,dctr,done))
;
return ((function (switch__6493__auto__,c__6555__auto___14754,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6494__auto__ = null;
var cljs$core$async$mult_$_state_machine__6494__auto____0 = (function (){
var statearr_14750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14750[(0)] = cljs$core$async$mult_$_state_machine__6494__auto__);

(statearr_14750[(1)] = (1));

return statearr_14750;
});
var cljs$core$async$mult_$_state_machine__6494__auto____1 = (function (state_14666){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_14666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e14751){if((e14751 instanceof Object)){
var ex__6497__auto__ = e14751;
var statearr_14752_14809 = state_14666;
(statearr_14752_14809[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14810 = state_14666;
state_14666 = G__14810;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6494__auto__ = function(state_14666){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6494__auto____1.call(this,state_14666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6494__auto____0;
cljs$core$async$mult_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6494__auto____1;
return cljs$core$async$mult_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___14754,cs,m,dchan,dctr,done))
})();
var state__6557__auto__ = (function (){var statearr_14753 = f__6556__auto__.call(null);
(statearr_14753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___14754);

return statearr_14753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___14754,cs,m,dchan,dctr,done))
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
var G__14812 = arguments.length;
switch (G__14812) {
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

cljs.core.async.Mix = (function (){var obj14815 = {};
return obj14815;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4185__auto__ = m;
if(and__4185__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4185__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4833__auto__ = (((m == null))?null:m);
return (function (){var or__4197__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5233__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5233__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14820){
var map__14821 = p__14820;
var map__14821__$1 = ((cljs.core.seq_QMARK_.call(null,map__14821))?cljs.core.apply.call(null,cljs.core.hash_map,map__14821):map__14821);
var opts = map__14821__$1;
var statearr_14822_14825 = state;
(statearr_14822_14825[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14821,map__14821__$1,opts){
return (function (val){
var statearr_14823_14826 = state;
(statearr_14823_14826[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14821,map__14821__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14824_14827 = state;
(statearr_14824_14827[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14816){
var G__14817 = cljs.core.first.call(null,seq14816);
var seq14816__$1 = cljs.core.next.call(null,seq14816);
var G__14818 = cljs.core.first.call(null,seq14816__$1);
var seq14816__$2 = cljs.core.next.call(null,seq14816__$1);
var G__14819 = cljs.core.first.call(null,seq14816__$2);
var seq14816__$3 = cljs.core.next.call(null,seq14816__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14817,G__14818,G__14819,seq14816__$3);
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
if(typeof cljs.core.async.t14947 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14947 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14948){
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
this.meta14948 = meta14948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14947.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14947.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14949){
var self__ = this;
var _14949__$1 = this;
return self__.meta14948;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14949,meta14948__$1){
var self__ = this;
var _14949__$1 = this;
return (new cljs.core.async.t14947(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14948__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14947.cljs$lang$type = true;

cljs.core.async.t14947.cljs$lang$ctorStr = "cljs.core.async/t14947";

cljs.core.async.t14947.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t14947");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14947 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14947(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14948){
return (new cljs.core.async.t14947(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14948));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14947(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6555__auto___15066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15019){
var state_val_15020 = (state_15019[(1)]);
if((state_val_15020 === (7))){
var inst_14963 = (state_15019[(7)]);
var inst_14968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14963);
var state_15019__$1 = state_15019;
var statearr_15021_15067 = state_15019__$1;
(statearr_15021_15067[(2)] = inst_14968);

(statearr_15021_15067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (20))){
var inst_14978 = (state_15019[(8)]);
var state_15019__$1 = state_15019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15019__$1,(23),out,inst_14978);
} else {
if((state_val_15020 === (1))){
var inst_14953 = (state_15019[(9)]);
var inst_14953__$1 = calc_state.call(null);
var inst_14954 = cljs.core.seq_QMARK_.call(null,inst_14953__$1);
var state_15019__$1 = (function (){var statearr_15022 = state_15019;
(statearr_15022[(9)] = inst_14953__$1);

return statearr_15022;
})();
if(inst_14954){
var statearr_15023_15068 = state_15019__$1;
(statearr_15023_15068[(1)] = (2));

} else {
var statearr_15024_15069 = state_15019__$1;
(statearr_15024_15069[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (24))){
var inst_14971 = (state_15019[(10)]);
var inst_14963 = inst_14971;
var state_15019__$1 = (function (){var statearr_15025 = state_15019;
(statearr_15025[(7)] = inst_14963);

return statearr_15025;
})();
var statearr_15026_15070 = state_15019__$1;
(statearr_15026_15070[(2)] = null);

(statearr_15026_15070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (4))){
var inst_14953 = (state_15019[(9)]);
var inst_14959 = (state_15019[(2)]);
var inst_14960 = cljs.core.get.call(null,inst_14959,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14961 = cljs.core.get.call(null,inst_14959,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14962 = cljs.core.get.call(null,inst_14959,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14963 = inst_14953;
var state_15019__$1 = (function (){var statearr_15027 = state_15019;
(statearr_15027[(11)] = inst_14962);

(statearr_15027[(7)] = inst_14963);

(statearr_15027[(12)] = inst_14960);

(statearr_15027[(13)] = inst_14961);

return statearr_15027;
})();
var statearr_15028_15071 = state_15019__$1;
(statearr_15028_15071[(2)] = null);

(statearr_15028_15071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (15))){
var state_15019__$1 = state_15019;
var statearr_15029_15072 = state_15019__$1;
(statearr_15029_15072[(2)] = null);

(statearr_15029_15072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (21))){
var inst_14971 = (state_15019[(10)]);
var inst_14963 = inst_14971;
var state_15019__$1 = (function (){var statearr_15030 = state_15019;
(statearr_15030[(7)] = inst_14963);

return statearr_15030;
})();
var statearr_15031_15073 = state_15019__$1;
(statearr_15031_15073[(2)] = null);

(statearr_15031_15073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (13))){
var inst_15015 = (state_15019[(2)]);
var state_15019__$1 = state_15019;
var statearr_15032_15074 = state_15019__$1;
(statearr_15032_15074[(2)] = inst_15015);

(statearr_15032_15074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (22))){
var inst_15013 = (state_15019[(2)]);
var state_15019__$1 = state_15019;
var statearr_15033_15075 = state_15019__$1;
(statearr_15033_15075[(2)] = inst_15013);

(statearr_15033_15075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (6))){
var inst_15017 = (state_15019[(2)]);
var state_15019__$1 = state_15019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15019__$1,inst_15017);
} else {
if((state_val_15020 === (25))){
var state_15019__$1 = state_15019;
var statearr_15034_15076 = state_15019__$1;
(statearr_15034_15076[(2)] = null);

(statearr_15034_15076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (17))){
var inst_14993 = (state_15019[(14)]);
var state_15019__$1 = state_15019;
var statearr_15035_15077 = state_15019__$1;
(statearr_15035_15077[(2)] = inst_14993);

(statearr_15035_15077[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (3))){
var inst_14953 = (state_15019[(9)]);
var state_15019__$1 = state_15019;
var statearr_15036_15078 = state_15019__$1;
(statearr_15036_15078[(2)] = inst_14953);

(statearr_15036_15078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (12))){
var inst_14974 = (state_15019[(15)]);
var inst_14979 = (state_15019[(16)]);
var inst_14993 = (state_15019[(14)]);
var inst_14993__$1 = inst_14974.call(null,inst_14979);
var state_15019__$1 = (function (){var statearr_15037 = state_15019;
(statearr_15037[(14)] = inst_14993__$1);

return statearr_15037;
})();
if(cljs.core.truth_(inst_14993__$1)){
var statearr_15038_15079 = state_15019__$1;
(statearr_15038_15079[(1)] = (17));

} else {
var statearr_15039_15080 = state_15019__$1;
(statearr_15039_15080[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (2))){
var inst_14953 = (state_15019[(9)]);
var inst_14956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14953);
var state_15019__$1 = state_15019;
var statearr_15040_15081 = state_15019__$1;
(statearr_15040_15081[(2)] = inst_14956);

(statearr_15040_15081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (23))){
var inst_15004 = (state_15019[(2)]);
var state_15019__$1 = state_15019;
if(cljs.core.truth_(inst_15004)){
var statearr_15041_15082 = state_15019__$1;
(statearr_15041_15082[(1)] = (24));

} else {
var statearr_15042_15083 = state_15019__$1;
(statearr_15042_15083[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (19))){
var inst_15001 = (state_15019[(2)]);
var state_15019__$1 = state_15019;
if(cljs.core.truth_(inst_15001)){
var statearr_15043_15084 = state_15019__$1;
(statearr_15043_15084[(1)] = (20));

} else {
var statearr_15044_15085 = state_15019__$1;
(statearr_15044_15085[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (11))){
var inst_14978 = (state_15019[(8)]);
var inst_14984 = (inst_14978 == null);
var state_15019__$1 = state_15019;
if(cljs.core.truth_(inst_14984)){
var statearr_15045_15086 = state_15019__$1;
(statearr_15045_15086[(1)] = (14));

} else {
var statearr_15046_15087 = state_15019__$1;
(statearr_15046_15087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (9))){
var inst_14971 = (state_15019[(10)]);
var inst_14971__$1 = (state_15019[(2)]);
var inst_14972 = cljs.core.get.call(null,inst_14971__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14973 = cljs.core.get.call(null,inst_14971__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14974 = cljs.core.get.call(null,inst_14971__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_15019__$1 = (function (){var statearr_15047 = state_15019;
(statearr_15047[(17)] = inst_14973);

(statearr_15047[(15)] = inst_14974);

(statearr_15047[(10)] = inst_14971__$1);

return statearr_15047;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15019__$1,(10),inst_14972);
} else {
if((state_val_15020 === (5))){
var inst_14963 = (state_15019[(7)]);
var inst_14966 = cljs.core.seq_QMARK_.call(null,inst_14963);
var state_15019__$1 = state_15019;
if(inst_14966){
var statearr_15048_15088 = state_15019__$1;
(statearr_15048_15088[(1)] = (7));

} else {
var statearr_15049_15089 = state_15019__$1;
(statearr_15049_15089[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (14))){
var inst_14979 = (state_15019[(16)]);
var inst_14986 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14979);
var state_15019__$1 = state_15019;
var statearr_15050_15090 = state_15019__$1;
(statearr_15050_15090[(2)] = inst_14986);

(statearr_15050_15090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (26))){
var inst_15009 = (state_15019[(2)]);
var state_15019__$1 = state_15019;
var statearr_15051_15091 = state_15019__$1;
(statearr_15051_15091[(2)] = inst_15009);

(statearr_15051_15091[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (16))){
var inst_14989 = (state_15019[(2)]);
var inst_14990 = calc_state.call(null);
var inst_14963 = inst_14990;
var state_15019__$1 = (function (){var statearr_15052 = state_15019;
(statearr_15052[(7)] = inst_14963);

(statearr_15052[(18)] = inst_14989);

return statearr_15052;
})();
var statearr_15053_15092 = state_15019__$1;
(statearr_15053_15092[(2)] = null);

(statearr_15053_15092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (10))){
var inst_14979 = (state_15019[(16)]);
var inst_14978 = (state_15019[(8)]);
var inst_14977 = (state_15019[(2)]);
var inst_14978__$1 = cljs.core.nth.call(null,inst_14977,(0),null);
var inst_14979__$1 = cljs.core.nth.call(null,inst_14977,(1),null);
var inst_14980 = (inst_14978__$1 == null);
var inst_14981 = cljs.core._EQ_.call(null,inst_14979__$1,change);
var inst_14982 = (inst_14980) || (inst_14981);
var state_15019__$1 = (function (){var statearr_15054 = state_15019;
(statearr_15054[(16)] = inst_14979__$1);

(statearr_15054[(8)] = inst_14978__$1);

return statearr_15054;
})();
if(cljs.core.truth_(inst_14982)){
var statearr_15055_15093 = state_15019__$1;
(statearr_15055_15093[(1)] = (11));

} else {
var statearr_15056_15094 = state_15019__$1;
(statearr_15056_15094[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (18))){
var inst_14973 = (state_15019[(17)]);
var inst_14974 = (state_15019[(15)]);
var inst_14979 = (state_15019[(16)]);
var inst_14996 = cljs.core.empty_QMARK_.call(null,inst_14974);
var inst_14997 = inst_14973.call(null,inst_14979);
var inst_14998 = cljs.core.not.call(null,inst_14997);
var inst_14999 = (inst_14996) && (inst_14998);
var state_15019__$1 = state_15019;
var statearr_15057_15095 = state_15019__$1;
(statearr_15057_15095[(2)] = inst_14999);

(statearr_15057_15095[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15020 === (8))){
var inst_14963 = (state_15019[(7)]);
var state_15019__$1 = state_15019;
var statearr_15058_15096 = state_15019__$1;
(statearr_15058_15096[(2)] = inst_14963);

(statearr_15058_15096[(1)] = (9));


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
});})(c__6555__auto___15066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6493__auto__,c__6555__auto___15066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6494__auto__ = null;
var cljs$core$async$mix_$_state_machine__6494__auto____0 = (function (){
var statearr_15062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15062[(0)] = cljs$core$async$mix_$_state_machine__6494__auto__);

(statearr_15062[(1)] = (1));

return statearr_15062;
});
var cljs$core$async$mix_$_state_machine__6494__auto____1 = (function (state_15019){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15063){if((e15063 instanceof Object)){
var ex__6497__auto__ = e15063;
var statearr_15064_15097 = state_15019;
(statearr_15064_15097[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15098 = state_15019;
state_15019 = G__15098;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6494__auto__ = function(state_15019){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6494__auto____1.call(this,state_15019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6494__auto____0;
cljs$core$async$mix_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6494__auto____1;
return cljs$core$async$mix_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6557__auto__ = (function (){var statearr_15065 = f__6556__auto__.call(null);
(statearr_15065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15066);

return statearr_15065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj15100 = {};
return obj15100;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4185__auto__ = p;
if(and__4185__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4185__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4833__auto__ = (((p == null))?null:p);
return (function (){var or__4197__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4185__auto__ = p;
if(and__4185__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4833__auto__ = (((p == null))?null:p);
return (function (){var or__4197__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__15102 = arguments.length;
switch (G__15102) {
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
if((function (){var and__4185__auto__ = p;
if(and__4185__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4833__auto__ = (((p == null))?null:p);
return (function (){var or__4197__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4185__auto__ = p;
if(and__4185__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4185__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4833__auto__ = (((p == null))?null:p);
return (function (){var or__4197__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4833__auto__)]);
if(or__4197__auto__){
return or__4197__auto__;
} else {
var or__4197__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4197__auto____$1){
return or__4197__auto____$1;
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
var G__15106 = arguments.length;
switch (G__15106) {
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
var or__4197__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4197__auto__)){
return or__4197__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4197__auto__,mults){
return (function (p1__15104_SHARP_){
if(cljs.core.truth_(p1__15104_SHARP_.call(null,topic))){
return p1__15104_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15104_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4197__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15107 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15107 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta15108){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta15108 = meta15108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15107.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15107.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15107.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t15107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15107.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15109){
var self__ = this;
var _15109__$1 = this;
return self__.meta15108;
});})(mults,ensure_mult))
;

cljs.core.async.t15107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15109,meta15108__$1){
var self__ = this;
var _15109__$1 = this;
return (new cljs.core.async.t15107(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta15108__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15107.cljs$lang$type = true;

cljs.core.async.t15107.cljs$lang$ctorStr = "cljs.core.async/t15107";

cljs.core.async.t15107.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t15107");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15107 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t15107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15108){
return (new cljs.core.async.t15107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15108));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15107(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6555__auto___15230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15230,mults,ensure_mult,p){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15230,mults,ensure_mult,p){
return (function (state_15181){
var state_val_15182 = (state_15181[(1)]);
if((state_val_15182 === (7))){
var inst_15177 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15183_15231 = state_15181__$1;
(statearr_15183_15231[(2)] = inst_15177);

(statearr_15183_15231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (20))){
var state_15181__$1 = state_15181;
var statearr_15184_15232 = state_15181__$1;
(statearr_15184_15232[(2)] = null);

(statearr_15184_15232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (1))){
var state_15181__$1 = state_15181;
var statearr_15185_15233 = state_15181__$1;
(statearr_15185_15233[(2)] = null);

(statearr_15185_15233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (24))){
var inst_15160 = (state_15181[(7)]);
var inst_15169 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15160);
var state_15181__$1 = state_15181;
var statearr_15186_15234 = state_15181__$1;
(statearr_15186_15234[(2)] = inst_15169);

(statearr_15186_15234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (4))){
var inst_15112 = (state_15181[(8)]);
var inst_15112__$1 = (state_15181[(2)]);
var inst_15113 = (inst_15112__$1 == null);
var state_15181__$1 = (function (){var statearr_15187 = state_15181;
(statearr_15187[(8)] = inst_15112__$1);

return statearr_15187;
})();
if(cljs.core.truth_(inst_15113)){
var statearr_15188_15235 = state_15181__$1;
(statearr_15188_15235[(1)] = (5));

} else {
var statearr_15189_15236 = state_15181__$1;
(statearr_15189_15236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (15))){
var inst_15154 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15190_15237 = state_15181__$1;
(statearr_15190_15237[(2)] = inst_15154);

(statearr_15190_15237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (21))){
var inst_15174 = (state_15181[(2)]);
var state_15181__$1 = (function (){var statearr_15191 = state_15181;
(statearr_15191[(9)] = inst_15174);

return statearr_15191;
})();
var statearr_15192_15238 = state_15181__$1;
(statearr_15192_15238[(2)] = null);

(statearr_15192_15238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (13))){
var inst_15136 = (state_15181[(10)]);
var inst_15138 = cljs.core.chunked_seq_QMARK_.call(null,inst_15136);
var state_15181__$1 = state_15181;
if(inst_15138){
var statearr_15193_15239 = state_15181__$1;
(statearr_15193_15239[(1)] = (16));

} else {
var statearr_15194_15240 = state_15181__$1;
(statearr_15194_15240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (22))){
var inst_15166 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
if(cljs.core.truth_(inst_15166)){
var statearr_15195_15241 = state_15181__$1;
(statearr_15195_15241[(1)] = (23));

} else {
var statearr_15196_15242 = state_15181__$1;
(statearr_15196_15242[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (6))){
var inst_15160 = (state_15181[(7)]);
var inst_15112 = (state_15181[(8)]);
var inst_15162 = (state_15181[(11)]);
var inst_15160__$1 = topic_fn.call(null,inst_15112);
var inst_15161 = cljs.core.deref.call(null,mults);
var inst_15162__$1 = cljs.core.get.call(null,inst_15161,inst_15160__$1);
var state_15181__$1 = (function (){var statearr_15197 = state_15181;
(statearr_15197[(7)] = inst_15160__$1);

(statearr_15197[(11)] = inst_15162__$1);

return statearr_15197;
})();
if(cljs.core.truth_(inst_15162__$1)){
var statearr_15198_15243 = state_15181__$1;
(statearr_15198_15243[(1)] = (19));

} else {
var statearr_15199_15244 = state_15181__$1;
(statearr_15199_15244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (25))){
var inst_15171 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15200_15245 = state_15181__$1;
(statearr_15200_15245[(2)] = inst_15171);

(statearr_15200_15245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (17))){
var inst_15136 = (state_15181[(10)]);
var inst_15145 = cljs.core.first.call(null,inst_15136);
var inst_15146 = cljs.core.async.muxch_STAR_.call(null,inst_15145);
var inst_15147 = cljs.core.async.close_BANG_.call(null,inst_15146);
var inst_15148 = cljs.core.next.call(null,inst_15136);
var inst_15122 = inst_15148;
var inst_15123 = null;
var inst_15124 = (0);
var inst_15125 = (0);
var state_15181__$1 = (function (){var statearr_15201 = state_15181;
(statearr_15201[(12)] = inst_15122);

(statearr_15201[(13)] = inst_15147);

(statearr_15201[(14)] = inst_15124);

(statearr_15201[(15)] = inst_15123);

(statearr_15201[(16)] = inst_15125);

return statearr_15201;
})();
var statearr_15202_15246 = state_15181__$1;
(statearr_15202_15246[(2)] = null);

(statearr_15202_15246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (3))){
var inst_15179 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15181__$1,inst_15179);
} else {
if((state_val_15182 === (12))){
var inst_15156 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15203_15247 = state_15181__$1;
(statearr_15203_15247[(2)] = inst_15156);

(statearr_15203_15247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (2))){
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15181__$1,(4),ch);
} else {
if((state_val_15182 === (23))){
var state_15181__$1 = state_15181;
var statearr_15204_15248 = state_15181__$1;
(statearr_15204_15248[(2)] = null);

(statearr_15204_15248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (19))){
var inst_15112 = (state_15181[(8)]);
var inst_15162 = (state_15181[(11)]);
var inst_15164 = cljs.core.async.muxch_STAR_.call(null,inst_15162);
var state_15181__$1 = state_15181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15181__$1,(22),inst_15164,inst_15112);
} else {
if((state_val_15182 === (11))){
var inst_15122 = (state_15181[(12)]);
var inst_15136 = (state_15181[(10)]);
var inst_15136__$1 = cljs.core.seq.call(null,inst_15122);
var state_15181__$1 = (function (){var statearr_15205 = state_15181;
(statearr_15205[(10)] = inst_15136__$1);

return statearr_15205;
})();
if(inst_15136__$1){
var statearr_15206_15249 = state_15181__$1;
(statearr_15206_15249[(1)] = (13));

} else {
var statearr_15207_15250 = state_15181__$1;
(statearr_15207_15250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (9))){
var inst_15158 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15208_15251 = state_15181__$1;
(statearr_15208_15251[(2)] = inst_15158);

(statearr_15208_15251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (5))){
var inst_15119 = cljs.core.deref.call(null,mults);
var inst_15120 = cljs.core.vals.call(null,inst_15119);
var inst_15121 = cljs.core.seq.call(null,inst_15120);
var inst_15122 = inst_15121;
var inst_15123 = null;
var inst_15124 = (0);
var inst_15125 = (0);
var state_15181__$1 = (function (){var statearr_15209 = state_15181;
(statearr_15209[(12)] = inst_15122);

(statearr_15209[(14)] = inst_15124);

(statearr_15209[(15)] = inst_15123);

(statearr_15209[(16)] = inst_15125);

return statearr_15209;
})();
var statearr_15210_15252 = state_15181__$1;
(statearr_15210_15252[(2)] = null);

(statearr_15210_15252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (14))){
var state_15181__$1 = state_15181;
var statearr_15214_15253 = state_15181__$1;
(statearr_15214_15253[(2)] = null);

(statearr_15214_15253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (16))){
var inst_15136 = (state_15181[(10)]);
var inst_15140 = cljs.core.chunk_first.call(null,inst_15136);
var inst_15141 = cljs.core.chunk_rest.call(null,inst_15136);
var inst_15142 = cljs.core.count.call(null,inst_15140);
var inst_15122 = inst_15141;
var inst_15123 = inst_15140;
var inst_15124 = inst_15142;
var inst_15125 = (0);
var state_15181__$1 = (function (){var statearr_15215 = state_15181;
(statearr_15215[(12)] = inst_15122);

(statearr_15215[(14)] = inst_15124);

(statearr_15215[(15)] = inst_15123);

(statearr_15215[(16)] = inst_15125);

return statearr_15215;
})();
var statearr_15216_15254 = state_15181__$1;
(statearr_15216_15254[(2)] = null);

(statearr_15216_15254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (10))){
var inst_15122 = (state_15181[(12)]);
var inst_15124 = (state_15181[(14)]);
var inst_15123 = (state_15181[(15)]);
var inst_15125 = (state_15181[(16)]);
var inst_15130 = cljs.core._nth.call(null,inst_15123,inst_15125);
var inst_15131 = cljs.core.async.muxch_STAR_.call(null,inst_15130);
var inst_15132 = cljs.core.async.close_BANG_.call(null,inst_15131);
var inst_15133 = (inst_15125 + (1));
var tmp15211 = inst_15122;
var tmp15212 = inst_15124;
var tmp15213 = inst_15123;
var inst_15122__$1 = tmp15211;
var inst_15123__$1 = tmp15213;
var inst_15124__$1 = tmp15212;
var inst_15125__$1 = inst_15133;
var state_15181__$1 = (function (){var statearr_15217 = state_15181;
(statearr_15217[(12)] = inst_15122__$1);

(statearr_15217[(14)] = inst_15124__$1);

(statearr_15217[(15)] = inst_15123__$1);

(statearr_15217[(17)] = inst_15132);

(statearr_15217[(16)] = inst_15125__$1);

return statearr_15217;
})();
var statearr_15218_15255 = state_15181__$1;
(statearr_15218_15255[(2)] = null);

(statearr_15218_15255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (18))){
var inst_15151 = (state_15181[(2)]);
var state_15181__$1 = state_15181;
var statearr_15219_15256 = state_15181__$1;
(statearr_15219_15256[(2)] = inst_15151);

(statearr_15219_15256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15182 === (8))){
var inst_15124 = (state_15181[(14)]);
var inst_15125 = (state_15181[(16)]);
var inst_15127 = (inst_15125 < inst_15124);
var inst_15128 = inst_15127;
var state_15181__$1 = state_15181;
if(cljs.core.truth_(inst_15128)){
var statearr_15220_15257 = state_15181__$1;
(statearr_15220_15257[(1)] = (10));

} else {
var statearr_15221_15258 = state_15181__$1;
(statearr_15221_15258[(1)] = (11));

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
});})(c__6555__auto___15230,mults,ensure_mult,p))
;
return ((function (switch__6493__auto__,c__6555__auto___15230,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_15225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15225[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_15225[(1)] = (1));

return statearr_15225;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_15181){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15226){if((e15226 instanceof Object)){
var ex__6497__auto__ = e15226;
var statearr_15227_15259 = state_15181;
(statearr_15227_15259[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15260 = state_15181;
state_15181 = G__15260;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_15181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_15181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15230,mults,ensure_mult,p))
})();
var state__6557__auto__ = (function (){var statearr_15228 = f__6556__auto__.call(null);
(statearr_15228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15230);

return statearr_15228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15230,mults,ensure_mult,p))
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
var G__15262 = arguments.length;
switch (G__15262) {
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
var G__15265 = arguments.length;
switch (G__15265) {
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
var G__15268 = arguments.length;
switch (G__15268) {
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
var c__6555__auto___15338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15307){
var state_val_15308 = (state_15307[(1)]);
if((state_val_15308 === (7))){
var state_15307__$1 = state_15307;
var statearr_15309_15339 = state_15307__$1;
(statearr_15309_15339[(2)] = null);

(statearr_15309_15339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (1))){
var state_15307__$1 = state_15307;
var statearr_15310_15340 = state_15307__$1;
(statearr_15310_15340[(2)] = null);

(statearr_15310_15340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (4))){
var inst_15271 = (state_15307[(7)]);
var inst_15273 = (inst_15271 < cnt);
var state_15307__$1 = state_15307;
if(cljs.core.truth_(inst_15273)){
var statearr_15311_15341 = state_15307__$1;
(statearr_15311_15341[(1)] = (6));

} else {
var statearr_15312_15342 = state_15307__$1;
(statearr_15312_15342[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (15))){
var inst_15303 = (state_15307[(2)]);
var state_15307__$1 = state_15307;
var statearr_15313_15343 = state_15307__$1;
(statearr_15313_15343[(2)] = inst_15303);

(statearr_15313_15343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (13))){
var inst_15296 = cljs.core.async.close_BANG_.call(null,out);
var state_15307__$1 = state_15307;
var statearr_15314_15344 = state_15307__$1;
(statearr_15314_15344[(2)] = inst_15296);

(statearr_15314_15344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (6))){
var state_15307__$1 = state_15307;
var statearr_15315_15345 = state_15307__$1;
(statearr_15315_15345[(2)] = null);

(statearr_15315_15345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (3))){
var inst_15305 = (state_15307[(2)]);
var state_15307__$1 = state_15307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15307__$1,inst_15305);
} else {
if((state_val_15308 === (12))){
var inst_15293 = (state_15307[(8)]);
var inst_15293__$1 = (state_15307[(2)]);
var inst_15294 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15293__$1);
var state_15307__$1 = (function (){var statearr_15316 = state_15307;
(statearr_15316[(8)] = inst_15293__$1);

return statearr_15316;
})();
if(cljs.core.truth_(inst_15294)){
var statearr_15317_15346 = state_15307__$1;
(statearr_15317_15346[(1)] = (13));

} else {
var statearr_15318_15347 = state_15307__$1;
(statearr_15318_15347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (2))){
var inst_15270 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15271 = (0);
var state_15307__$1 = (function (){var statearr_15319 = state_15307;
(statearr_15319[(7)] = inst_15271);

(statearr_15319[(9)] = inst_15270);

return statearr_15319;
})();
var statearr_15320_15348 = state_15307__$1;
(statearr_15320_15348[(2)] = null);

(statearr_15320_15348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (11))){
var inst_15271 = (state_15307[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15307,(10),Object,null,(9));
var inst_15280 = chs__$1.call(null,inst_15271);
var inst_15281 = done.call(null,inst_15271);
var inst_15282 = cljs.core.async.take_BANG_.call(null,inst_15280,inst_15281);
var state_15307__$1 = state_15307;
var statearr_15321_15349 = state_15307__$1;
(statearr_15321_15349[(2)] = inst_15282);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15307__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (9))){
var inst_15271 = (state_15307[(7)]);
var inst_15284 = (state_15307[(2)]);
var inst_15285 = (inst_15271 + (1));
var inst_15271__$1 = inst_15285;
var state_15307__$1 = (function (){var statearr_15322 = state_15307;
(statearr_15322[(10)] = inst_15284);

(statearr_15322[(7)] = inst_15271__$1);

return statearr_15322;
})();
var statearr_15323_15350 = state_15307__$1;
(statearr_15323_15350[(2)] = null);

(statearr_15323_15350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (5))){
var inst_15291 = (state_15307[(2)]);
var state_15307__$1 = (function (){var statearr_15324 = state_15307;
(statearr_15324[(11)] = inst_15291);

return statearr_15324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15307__$1,(12),dchan);
} else {
if((state_val_15308 === (14))){
var inst_15293 = (state_15307[(8)]);
var inst_15298 = cljs.core.apply.call(null,f,inst_15293);
var state_15307__$1 = state_15307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15307__$1,(16),out,inst_15298);
} else {
if((state_val_15308 === (16))){
var inst_15300 = (state_15307[(2)]);
var state_15307__$1 = (function (){var statearr_15325 = state_15307;
(statearr_15325[(12)] = inst_15300);

return statearr_15325;
})();
var statearr_15326_15351 = state_15307__$1;
(statearr_15326_15351[(2)] = null);

(statearr_15326_15351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (10))){
var inst_15275 = (state_15307[(2)]);
var inst_15276 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15307__$1 = (function (){var statearr_15327 = state_15307;
(statearr_15327[(13)] = inst_15275);

return statearr_15327;
})();
var statearr_15328_15352 = state_15307__$1;
(statearr_15328_15352[(2)] = inst_15276);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15307__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15308 === (8))){
var inst_15289 = (state_15307[(2)]);
var state_15307__$1 = state_15307;
var statearr_15329_15353 = state_15307__$1;
(statearr_15329_15353[(2)] = inst_15289);

(statearr_15329_15353[(1)] = (5));


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
});})(c__6555__auto___15338,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6493__auto__,c__6555__auto___15338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_15333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15333[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_15333[(1)] = (1));

return statearr_15333;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_15307){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15334){if((e15334 instanceof Object)){
var ex__6497__auto__ = e15334;
var statearr_15335_15354 = state_15307;
(statearr_15335_15354[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15355 = state_15307;
state_15307 = G__15355;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_15307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_15307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15338,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6557__auto__ = (function (){var statearr_15336 = f__6556__auto__.call(null);
(statearr_15336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15338);

return statearr_15336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15338,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15358 = arguments.length;
switch (G__15358) {
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
var c__6555__auto___15413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15413,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15413,out){
return (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (7))){
var inst_15368 = (state_15388[(7)]);
var inst_15367 = (state_15388[(8)]);
var inst_15367__$1 = (state_15388[(2)]);
var inst_15368__$1 = cljs.core.nth.call(null,inst_15367__$1,(0),null);
var inst_15369 = cljs.core.nth.call(null,inst_15367__$1,(1),null);
var inst_15370 = (inst_15368__$1 == null);
var state_15388__$1 = (function (){var statearr_15390 = state_15388;
(statearr_15390[(7)] = inst_15368__$1);

(statearr_15390[(9)] = inst_15369);

(statearr_15390[(8)] = inst_15367__$1);

return statearr_15390;
})();
if(cljs.core.truth_(inst_15370)){
var statearr_15391_15414 = state_15388__$1;
(statearr_15391_15414[(1)] = (8));

} else {
var statearr_15392_15415 = state_15388__$1;
(statearr_15392_15415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (1))){
var inst_15359 = cljs.core.vec.call(null,chs);
var inst_15360 = inst_15359;
var state_15388__$1 = (function (){var statearr_15393 = state_15388;
(statearr_15393[(10)] = inst_15360);

return statearr_15393;
})();
var statearr_15394_15416 = state_15388__$1;
(statearr_15394_15416[(2)] = null);

(statearr_15394_15416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (4))){
var inst_15360 = (state_15388[(10)]);
var state_15388__$1 = state_15388;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15388__$1,(7),inst_15360);
} else {
if((state_val_15389 === (6))){
var inst_15384 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15395_15417 = state_15388__$1;
(statearr_15395_15417[(2)] = inst_15384);

(statearr_15395_15417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (3))){
var inst_15386 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15388__$1,inst_15386);
} else {
if((state_val_15389 === (2))){
var inst_15360 = (state_15388[(10)]);
var inst_15362 = cljs.core.count.call(null,inst_15360);
var inst_15363 = (inst_15362 > (0));
var state_15388__$1 = state_15388;
if(cljs.core.truth_(inst_15363)){
var statearr_15397_15418 = state_15388__$1;
(statearr_15397_15418[(1)] = (4));

} else {
var statearr_15398_15419 = state_15388__$1;
(statearr_15398_15419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (11))){
var inst_15360 = (state_15388[(10)]);
var inst_15377 = (state_15388[(2)]);
var tmp15396 = inst_15360;
var inst_15360__$1 = tmp15396;
var state_15388__$1 = (function (){var statearr_15399 = state_15388;
(statearr_15399[(10)] = inst_15360__$1);

(statearr_15399[(11)] = inst_15377);

return statearr_15399;
})();
var statearr_15400_15420 = state_15388__$1;
(statearr_15400_15420[(2)] = null);

(statearr_15400_15420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (9))){
var inst_15368 = (state_15388[(7)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15388__$1,(11),out,inst_15368);
} else {
if((state_val_15389 === (5))){
var inst_15382 = cljs.core.async.close_BANG_.call(null,out);
var state_15388__$1 = state_15388;
var statearr_15401_15421 = state_15388__$1;
(statearr_15401_15421[(2)] = inst_15382);

(statearr_15401_15421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (10))){
var inst_15380 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15402_15422 = state_15388__$1;
(statearr_15402_15422[(2)] = inst_15380);

(statearr_15402_15422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (8))){
var inst_15368 = (state_15388[(7)]);
var inst_15369 = (state_15388[(9)]);
var inst_15360 = (state_15388[(10)]);
var inst_15367 = (state_15388[(8)]);
var inst_15372 = (function (){var c = inst_15369;
var v = inst_15368;
var vec__15365 = inst_15367;
var cs = inst_15360;
return ((function (c,v,vec__15365,cs,inst_15368,inst_15369,inst_15360,inst_15367,state_val_15389,c__6555__auto___15413,out){
return (function (p1__15356_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15356_SHARP_);
});
;})(c,v,vec__15365,cs,inst_15368,inst_15369,inst_15360,inst_15367,state_val_15389,c__6555__auto___15413,out))
})();
var inst_15373 = cljs.core.filterv.call(null,inst_15372,inst_15360);
var inst_15360__$1 = inst_15373;
var state_15388__$1 = (function (){var statearr_15403 = state_15388;
(statearr_15403[(10)] = inst_15360__$1);

return statearr_15403;
})();
var statearr_15404_15423 = state_15388__$1;
(statearr_15404_15423[(2)] = null);

(statearr_15404_15423[(1)] = (2));


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
});})(c__6555__auto___15413,out))
;
return ((function (switch__6493__auto__,c__6555__auto___15413,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_15408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15408[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_15408[(1)] = (1));

return statearr_15408;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_15388){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15409){if((e15409 instanceof Object)){
var ex__6497__auto__ = e15409;
var statearr_15410_15424 = state_15388;
(statearr_15410_15424[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15425 = state_15388;
state_15388 = G__15425;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15413,out))
})();
var state__6557__auto__ = (function (){var statearr_15411 = f__6556__auto__.call(null);
(statearr_15411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15413);

return statearr_15411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15413,out))
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
var G__15427 = arguments.length;
switch (G__15427) {
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
var c__6555__auto___15475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15475,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15475,out){
return (function (state_15451){
var state_val_15452 = (state_15451[(1)]);
if((state_val_15452 === (7))){
var inst_15433 = (state_15451[(7)]);
var inst_15433__$1 = (state_15451[(2)]);
var inst_15434 = (inst_15433__$1 == null);
var inst_15435 = cljs.core.not.call(null,inst_15434);
var state_15451__$1 = (function (){var statearr_15453 = state_15451;
(statearr_15453[(7)] = inst_15433__$1);

return statearr_15453;
})();
if(inst_15435){
var statearr_15454_15476 = state_15451__$1;
(statearr_15454_15476[(1)] = (8));

} else {
var statearr_15455_15477 = state_15451__$1;
(statearr_15455_15477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (1))){
var inst_15428 = (0);
var state_15451__$1 = (function (){var statearr_15456 = state_15451;
(statearr_15456[(8)] = inst_15428);

return statearr_15456;
})();
var statearr_15457_15478 = state_15451__$1;
(statearr_15457_15478[(2)] = null);

(statearr_15457_15478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (4))){
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15451__$1,(7),ch);
} else {
if((state_val_15452 === (6))){
var inst_15446 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15458_15479 = state_15451__$1;
(statearr_15458_15479[(2)] = inst_15446);

(statearr_15458_15479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (3))){
var inst_15448 = (state_15451[(2)]);
var inst_15449 = cljs.core.async.close_BANG_.call(null,out);
var state_15451__$1 = (function (){var statearr_15459 = state_15451;
(statearr_15459[(9)] = inst_15448);

return statearr_15459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15451__$1,inst_15449);
} else {
if((state_val_15452 === (2))){
var inst_15428 = (state_15451[(8)]);
var inst_15430 = (inst_15428 < n);
var state_15451__$1 = state_15451;
if(cljs.core.truth_(inst_15430)){
var statearr_15460_15480 = state_15451__$1;
(statearr_15460_15480[(1)] = (4));

} else {
var statearr_15461_15481 = state_15451__$1;
(statearr_15461_15481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (11))){
var inst_15428 = (state_15451[(8)]);
var inst_15438 = (state_15451[(2)]);
var inst_15439 = (inst_15428 + (1));
var inst_15428__$1 = inst_15439;
var state_15451__$1 = (function (){var statearr_15462 = state_15451;
(statearr_15462[(10)] = inst_15438);

(statearr_15462[(8)] = inst_15428__$1);

return statearr_15462;
})();
var statearr_15463_15482 = state_15451__$1;
(statearr_15463_15482[(2)] = null);

(statearr_15463_15482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (9))){
var state_15451__$1 = state_15451;
var statearr_15464_15483 = state_15451__$1;
(statearr_15464_15483[(2)] = null);

(statearr_15464_15483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (5))){
var state_15451__$1 = state_15451;
var statearr_15465_15484 = state_15451__$1;
(statearr_15465_15484[(2)] = null);

(statearr_15465_15484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (10))){
var inst_15443 = (state_15451[(2)]);
var state_15451__$1 = state_15451;
var statearr_15466_15485 = state_15451__$1;
(statearr_15466_15485[(2)] = inst_15443);

(statearr_15466_15485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15452 === (8))){
var inst_15433 = (state_15451[(7)]);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15451__$1,(11),out,inst_15433);
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
});})(c__6555__auto___15475,out))
;
return ((function (switch__6493__auto__,c__6555__auto___15475,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_15470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15470[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_15470[(1)] = (1));

return statearr_15470;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_15451){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15471){if((e15471 instanceof Object)){
var ex__6497__auto__ = e15471;
var statearr_15472_15486 = state_15451;
(statearr_15472_15486[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15487 = state_15451;
state_15451 = G__15487;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_15451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_15451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15475,out))
})();
var state__6557__auto__ = (function (){var statearr_15473 = f__6556__auto__.call(null);
(statearr_15473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15475);

return statearr_15473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15475,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15495 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15495 = (function (ch,f,map_LT_,meta15496){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15496 = meta15496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15498 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15498 = (function (fn1,_,meta15496,map_LT_,f,ch,meta15499){
this.fn1 = fn1;
this._ = _;
this.meta15496 = meta15496;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15499 = meta15499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15498.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15488_SHARP_){
return f1.call(null,(((p1__15488_SHARP_ == null))?null:self__.f.call(null,p1__15488_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15500){
var self__ = this;
var _15500__$1 = this;
return self__.meta15499;
});})(___$1))
;

cljs.core.async.t15498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15500,meta15499__$1){
var self__ = this;
var _15500__$1 = this;
return (new cljs.core.async.t15498(self__.fn1,self__._,self__.meta15496,self__.map_LT_,self__.f,self__.ch,meta15499__$1));
});})(___$1))
;

cljs.core.async.t15498.cljs$lang$type = true;

cljs.core.async.t15498.cljs$lang$ctorStr = "cljs.core.async/t15498";

cljs.core.async.t15498.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t15498");
});})(___$1))
;

cljs.core.async.__GT_t15498 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15498(fn1__$1,___$2,meta15496__$1,map_LT___$1,f__$1,ch__$1,meta15499){
return (new cljs.core.async.t15498(fn1__$1,___$2,meta15496__$1,map_LT___$1,f__$1,ch__$1,meta15499));
});})(___$1))
;

}

return (new cljs.core.async.t15498(fn1,___$1,self__.meta15496,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4185__auto__ = ret;
if(cljs.core.truth_(and__4185__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4185__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15495.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15497){
var self__ = this;
var _15497__$1 = this;
return self__.meta15496;
});

cljs.core.async.t15495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15497,meta15496__$1){
var self__ = this;
var _15497__$1 = this;
return (new cljs.core.async.t15495(self__.ch,self__.f,self__.map_LT_,meta15496__$1));
});

cljs.core.async.t15495.cljs$lang$type = true;

cljs.core.async.t15495.cljs$lang$ctorStr = "cljs.core.async/t15495";

cljs.core.async.t15495.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t15495");
});

cljs.core.async.__GT_t15495 = (function cljs$core$async$map_LT__$___GT_t15495(ch__$1,f__$1,map_LT___$1,meta15496){
return (new cljs.core.async.t15495(ch__$1,f__$1,map_LT___$1,meta15496));
});

}

return (new cljs.core.async.t15495(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15504 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15504 = (function (ch,f,map_GT_,meta15505){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15505 = meta15505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15506){
var self__ = this;
var _15506__$1 = this;
return self__.meta15505;
});

cljs.core.async.t15504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15506,meta15505__$1){
var self__ = this;
var _15506__$1 = this;
return (new cljs.core.async.t15504(self__.ch,self__.f,self__.map_GT_,meta15505__$1));
});

cljs.core.async.t15504.cljs$lang$type = true;

cljs.core.async.t15504.cljs$lang$ctorStr = "cljs.core.async/t15504";

cljs.core.async.t15504.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t15504");
});

cljs.core.async.__GT_t15504 = (function cljs$core$async$map_GT__$___GT_t15504(ch__$1,f__$1,map_GT___$1,meta15505){
return (new cljs.core.async.t15504(ch__$1,f__$1,map_GT___$1,meta15505));
});

}

return (new cljs.core.async.t15504(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15510 = (function (ch,p,filter_GT_,meta15511){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15511 = meta15511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15510.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15510.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15512){
var self__ = this;
var _15512__$1 = this;
return self__.meta15511;
});

cljs.core.async.t15510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15512,meta15511__$1){
var self__ = this;
var _15512__$1 = this;
return (new cljs.core.async.t15510(self__.ch,self__.p,self__.filter_GT_,meta15511__$1));
});

cljs.core.async.t15510.cljs$lang$type = true;

cljs.core.async.t15510.cljs$lang$ctorStr = "cljs.core.async/t15510";

cljs.core.async.t15510.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t15510");
});

cljs.core.async.__GT_t15510 = (function cljs$core$async$filter_GT__$___GT_t15510(ch__$1,p__$1,filter_GT___$1,meta15511){
return (new cljs.core.async.t15510(ch__$1,p__$1,filter_GT___$1,meta15511));
});

}

return (new cljs.core.async.t15510(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15514 = arguments.length;
switch (G__15514) {
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
var c__6555__auto___15557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15557,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15557,out){
return (function (state_15535){
var state_val_15536 = (state_15535[(1)]);
if((state_val_15536 === (7))){
var inst_15531 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
var statearr_15537_15558 = state_15535__$1;
(statearr_15537_15558[(2)] = inst_15531);

(statearr_15537_15558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (1))){
var state_15535__$1 = state_15535;
var statearr_15538_15559 = state_15535__$1;
(statearr_15538_15559[(2)] = null);

(statearr_15538_15559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (4))){
var inst_15517 = (state_15535[(7)]);
var inst_15517__$1 = (state_15535[(2)]);
var inst_15518 = (inst_15517__$1 == null);
var state_15535__$1 = (function (){var statearr_15539 = state_15535;
(statearr_15539[(7)] = inst_15517__$1);

return statearr_15539;
})();
if(cljs.core.truth_(inst_15518)){
var statearr_15540_15560 = state_15535__$1;
(statearr_15540_15560[(1)] = (5));

} else {
var statearr_15541_15561 = state_15535__$1;
(statearr_15541_15561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (6))){
var inst_15517 = (state_15535[(7)]);
var inst_15522 = p.call(null,inst_15517);
var state_15535__$1 = state_15535;
if(cljs.core.truth_(inst_15522)){
var statearr_15542_15562 = state_15535__$1;
(statearr_15542_15562[(1)] = (8));

} else {
var statearr_15543_15563 = state_15535__$1;
(statearr_15543_15563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (3))){
var inst_15533 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15535__$1,inst_15533);
} else {
if((state_val_15536 === (2))){
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15535__$1,(4),ch);
} else {
if((state_val_15536 === (11))){
var inst_15525 = (state_15535[(2)]);
var state_15535__$1 = state_15535;
var statearr_15544_15564 = state_15535__$1;
(statearr_15544_15564[(2)] = inst_15525);

(statearr_15544_15564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (9))){
var state_15535__$1 = state_15535;
var statearr_15545_15565 = state_15535__$1;
(statearr_15545_15565[(2)] = null);

(statearr_15545_15565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (5))){
var inst_15520 = cljs.core.async.close_BANG_.call(null,out);
var state_15535__$1 = state_15535;
var statearr_15546_15566 = state_15535__$1;
(statearr_15546_15566[(2)] = inst_15520);

(statearr_15546_15566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (10))){
var inst_15528 = (state_15535[(2)]);
var state_15535__$1 = (function (){var statearr_15547 = state_15535;
(statearr_15547[(8)] = inst_15528);

return statearr_15547;
})();
var statearr_15548_15567 = state_15535__$1;
(statearr_15548_15567[(2)] = null);

(statearr_15548_15567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15536 === (8))){
var inst_15517 = (state_15535[(7)]);
var state_15535__$1 = state_15535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15535__$1,(11),out,inst_15517);
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
});})(c__6555__auto___15557,out))
;
return ((function (switch__6493__auto__,c__6555__auto___15557,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_15552 = [null,null,null,null,null,null,null,null,null];
(statearr_15552[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_15552[(1)] = (1));

return statearr_15552;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_15535){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15553){if((e15553 instanceof Object)){
var ex__6497__auto__ = e15553;
var statearr_15554_15568 = state_15535;
(statearr_15554_15568[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15569 = state_15535;
state_15535 = G__15569;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_15535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_15535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15557,out))
})();
var state__6557__auto__ = (function (){var statearr_15555 = f__6556__auto__.call(null);
(statearr_15555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15557);

return statearr_15555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15557,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15571 = arguments.length;
switch (G__15571) {
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
var c__6555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto__){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto__){
return (function (state_15738){
var state_val_15739 = (state_15738[(1)]);
if((state_val_15739 === (7))){
var inst_15734 = (state_15738[(2)]);
var state_15738__$1 = state_15738;
var statearr_15740_15781 = state_15738__$1;
(statearr_15740_15781[(2)] = inst_15734);

(statearr_15740_15781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (20))){
var inst_15704 = (state_15738[(7)]);
var inst_15715 = (state_15738[(2)]);
var inst_15716 = cljs.core.next.call(null,inst_15704);
var inst_15690 = inst_15716;
var inst_15691 = null;
var inst_15692 = (0);
var inst_15693 = (0);
var state_15738__$1 = (function (){var statearr_15741 = state_15738;
(statearr_15741[(8)] = inst_15691);

(statearr_15741[(9)] = inst_15715);

(statearr_15741[(10)] = inst_15692);

(statearr_15741[(11)] = inst_15693);

(statearr_15741[(12)] = inst_15690);

return statearr_15741;
})();
var statearr_15742_15782 = state_15738__$1;
(statearr_15742_15782[(2)] = null);

(statearr_15742_15782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (1))){
var state_15738__$1 = state_15738;
var statearr_15743_15783 = state_15738__$1;
(statearr_15743_15783[(2)] = null);

(statearr_15743_15783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (4))){
var inst_15679 = (state_15738[(13)]);
var inst_15679__$1 = (state_15738[(2)]);
var inst_15680 = (inst_15679__$1 == null);
var state_15738__$1 = (function (){var statearr_15744 = state_15738;
(statearr_15744[(13)] = inst_15679__$1);

return statearr_15744;
})();
if(cljs.core.truth_(inst_15680)){
var statearr_15745_15784 = state_15738__$1;
(statearr_15745_15784[(1)] = (5));

} else {
var statearr_15746_15785 = state_15738__$1;
(statearr_15746_15785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (15))){
var state_15738__$1 = state_15738;
var statearr_15750_15786 = state_15738__$1;
(statearr_15750_15786[(2)] = null);

(statearr_15750_15786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (21))){
var state_15738__$1 = state_15738;
var statearr_15751_15787 = state_15738__$1;
(statearr_15751_15787[(2)] = null);

(statearr_15751_15787[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (13))){
var inst_15691 = (state_15738[(8)]);
var inst_15692 = (state_15738[(10)]);
var inst_15693 = (state_15738[(11)]);
var inst_15690 = (state_15738[(12)]);
var inst_15700 = (state_15738[(2)]);
var inst_15701 = (inst_15693 + (1));
var tmp15747 = inst_15691;
var tmp15748 = inst_15692;
var tmp15749 = inst_15690;
var inst_15690__$1 = tmp15749;
var inst_15691__$1 = tmp15747;
var inst_15692__$1 = tmp15748;
var inst_15693__$1 = inst_15701;
var state_15738__$1 = (function (){var statearr_15752 = state_15738;
(statearr_15752[(8)] = inst_15691__$1);

(statearr_15752[(14)] = inst_15700);

(statearr_15752[(10)] = inst_15692__$1);

(statearr_15752[(11)] = inst_15693__$1);

(statearr_15752[(12)] = inst_15690__$1);

return statearr_15752;
})();
var statearr_15753_15788 = state_15738__$1;
(statearr_15753_15788[(2)] = null);

(statearr_15753_15788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (22))){
var state_15738__$1 = state_15738;
var statearr_15754_15789 = state_15738__$1;
(statearr_15754_15789[(2)] = null);

(statearr_15754_15789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (6))){
var inst_15679 = (state_15738[(13)]);
var inst_15688 = f.call(null,inst_15679);
var inst_15689 = cljs.core.seq.call(null,inst_15688);
var inst_15690 = inst_15689;
var inst_15691 = null;
var inst_15692 = (0);
var inst_15693 = (0);
var state_15738__$1 = (function (){var statearr_15755 = state_15738;
(statearr_15755[(8)] = inst_15691);

(statearr_15755[(10)] = inst_15692);

(statearr_15755[(11)] = inst_15693);

(statearr_15755[(12)] = inst_15690);

return statearr_15755;
})();
var statearr_15756_15790 = state_15738__$1;
(statearr_15756_15790[(2)] = null);

(statearr_15756_15790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (17))){
var inst_15704 = (state_15738[(7)]);
var inst_15708 = cljs.core.chunk_first.call(null,inst_15704);
var inst_15709 = cljs.core.chunk_rest.call(null,inst_15704);
var inst_15710 = cljs.core.count.call(null,inst_15708);
var inst_15690 = inst_15709;
var inst_15691 = inst_15708;
var inst_15692 = inst_15710;
var inst_15693 = (0);
var state_15738__$1 = (function (){var statearr_15757 = state_15738;
(statearr_15757[(8)] = inst_15691);

(statearr_15757[(10)] = inst_15692);

(statearr_15757[(11)] = inst_15693);

(statearr_15757[(12)] = inst_15690);

return statearr_15757;
})();
var statearr_15758_15791 = state_15738__$1;
(statearr_15758_15791[(2)] = null);

(statearr_15758_15791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (3))){
var inst_15736 = (state_15738[(2)]);
var state_15738__$1 = state_15738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15738__$1,inst_15736);
} else {
if((state_val_15739 === (12))){
var inst_15724 = (state_15738[(2)]);
var state_15738__$1 = state_15738;
var statearr_15759_15792 = state_15738__$1;
(statearr_15759_15792[(2)] = inst_15724);

(statearr_15759_15792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (2))){
var state_15738__$1 = state_15738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15738__$1,(4),in$);
} else {
if((state_val_15739 === (23))){
var inst_15732 = (state_15738[(2)]);
var state_15738__$1 = state_15738;
var statearr_15760_15793 = state_15738__$1;
(statearr_15760_15793[(2)] = inst_15732);

(statearr_15760_15793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (19))){
var inst_15719 = (state_15738[(2)]);
var state_15738__$1 = state_15738;
var statearr_15761_15794 = state_15738__$1;
(statearr_15761_15794[(2)] = inst_15719);

(statearr_15761_15794[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (11))){
var inst_15704 = (state_15738[(7)]);
var inst_15690 = (state_15738[(12)]);
var inst_15704__$1 = cljs.core.seq.call(null,inst_15690);
var state_15738__$1 = (function (){var statearr_15762 = state_15738;
(statearr_15762[(7)] = inst_15704__$1);

return statearr_15762;
})();
if(inst_15704__$1){
var statearr_15763_15795 = state_15738__$1;
(statearr_15763_15795[(1)] = (14));

} else {
var statearr_15764_15796 = state_15738__$1;
(statearr_15764_15796[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (9))){
var inst_15726 = (state_15738[(2)]);
var inst_15727 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15738__$1 = (function (){var statearr_15765 = state_15738;
(statearr_15765[(15)] = inst_15726);

return statearr_15765;
})();
if(cljs.core.truth_(inst_15727)){
var statearr_15766_15797 = state_15738__$1;
(statearr_15766_15797[(1)] = (21));

} else {
var statearr_15767_15798 = state_15738__$1;
(statearr_15767_15798[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (5))){
var inst_15682 = cljs.core.async.close_BANG_.call(null,out);
var state_15738__$1 = state_15738;
var statearr_15768_15799 = state_15738__$1;
(statearr_15768_15799[(2)] = inst_15682);

(statearr_15768_15799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (14))){
var inst_15704 = (state_15738[(7)]);
var inst_15706 = cljs.core.chunked_seq_QMARK_.call(null,inst_15704);
var state_15738__$1 = state_15738;
if(inst_15706){
var statearr_15769_15800 = state_15738__$1;
(statearr_15769_15800[(1)] = (17));

} else {
var statearr_15770_15801 = state_15738__$1;
(statearr_15770_15801[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (16))){
var inst_15722 = (state_15738[(2)]);
var state_15738__$1 = state_15738;
var statearr_15771_15802 = state_15738__$1;
(statearr_15771_15802[(2)] = inst_15722);

(statearr_15771_15802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15739 === (10))){
var inst_15691 = (state_15738[(8)]);
var inst_15693 = (state_15738[(11)]);
var inst_15698 = cljs.core._nth.call(null,inst_15691,inst_15693);
var state_15738__$1 = state_15738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15738__$1,(13),out,inst_15698);
} else {
if((state_val_15739 === (18))){
var inst_15704 = (state_15738[(7)]);
var inst_15713 = cljs.core.first.call(null,inst_15704);
var state_15738__$1 = state_15738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15738__$1,(20),out,inst_15713);
} else {
if((state_val_15739 === (8))){
var inst_15692 = (state_15738[(10)]);
var inst_15693 = (state_15738[(11)]);
var inst_15695 = (inst_15693 < inst_15692);
var inst_15696 = inst_15695;
var state_15738__$1 = state_15738;
if(cljs.core.truth_(inst_15696)){
var statearr_15772_15803 = state_15738__$1;
(statearr_15772_15803[(1)] = (10));

} else {
var statearr_15773_15804 = state_15738__$1;
(statearr_15773_15804[(1)] = (11));

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
});})(c__6555__auto__))
;
return ((function (switch__6493__auto__,c__6555__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_15777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15777[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__);

(statearr_15777[(1)] = (1));

return statearr_15777;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____1 = (function (state_15738){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15778){if((e15778 instanceof Object)){
var ex__6497__auto__ = e15778;
var statearr_15779_15805 = state_15738;
(statearr_15779_15805[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15806 = state_15738;
state_15738 = G__15806;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__ = function(state_15738){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____1.call(this,state_15738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__))
})();
var state__6557__auto__ = (function (){var statearr_15780 = f__6556__auto__.call(null);
(statearr_15780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_15780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto__))
);

return c__6555__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15808 = arguments.length;
switch (G__15808) {
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
var G__15811 = arguments.length;
switch (G__15811) {
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
var G__15814 = arguments.length;
switch (G__15814) {
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
var c__6555__auto___15864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15864,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15864,out){
return (function (state_15838){
var state_val_15839 = (state_15838[(1)]);
if((state_val_15839 === (7))){
var inst_15833 = (state_15838[(2)]);
var state_15838__$1 = state_15838;
var statearr_15840_15865 = state_15838__$1;
(statearr_15840_15865[(2)] = inst_15833);

(statearr_15840_15865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (1))){
var inst_15815 = null;
var state_15838__$1 = (function (){var statearr_15841 = state_15838;
(statearr_15841[(7)] = inst_15815);

return statearr_15841;
})();
var statearr_15842_15866 = state_15838__$1;
(statearr_15842_15866[(2)] = null);

(statearr_15842_15866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (4))){
var inst_15818 = (state_15838[(8)]);
var inst_15818__$1 = (state_15838[(2)]);
var inst_15819 = (inst_15818__$1 == null);
var inst_15820 = cljs.core.not.call(null,inst_15819);
var state_15838__$1 = (function (){var statearr_15843 = state_15838;
(statearr_15843[(8)] = inst_15818__$1);

return statearr_15843;
})();
if(inst_15820){
var statearr_15844_15867 = state_15838__$1;
(statearr_15844_15867[(1)] = (5));

} else {
var statearr_15845_15868 = state_15838__$1;
(statearr_15845_15868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (6))){
var state_15838__$1 = state_15838;
var statearr_15846_15869 = state_15838__$1;
(statearr_15846_15869[(2)] = null);

(statearr_15846_15869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (3))){
var inst_15835 = (state_15838[(2)]);
var inst_15836 = cljs.core.async.close_BANG_.call(null,out);
var state_15838__$1 = (function (){var statearr_15847 = state_15838;
(statearr_15847[(9)] = inst_15835);

return statearr_15847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15838__$1,inst_15836);
} else {
if((state_val_15839 === (2))){
var state_15838__$1 = state_15838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15838__$1,(4),ch);
} else {
if((state_val_15839 === (11))){
var inst_15818 = (state_15838[(8)]);
var inst_15827 = (state_15838[(2)]);
var inst_15815 = inst_15818;
var state_15838__$1 = (function (){var statearr_15848 = state_15838;
(statearr_15848[(10)] = inst_15827);

(statearr_15848[(7)] = inst_15815);

return statearr_15848;
})();
var statearr_15849_15870 = state_15838__$1;
(statearr_15849_15870[(2)] = null);

(statearr_15849_15870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (9))){
var inst_15818 = (state_15838[(8)]);
var state_15838__$1 = state_15838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15838__$1,(11),out,inst_15818);
} else {
if((state_val_15839 === (5))){
var inst_15818 = (state_15838[(8)]);
var inst_15815 = (state_15838[(7)]);
var inst_15822 = cljs.core._EQ_.call(null,inst_15818,inst_15815);
var state_15838__$1 = state_15838;
if(inst_15822){
var statearr_15851_15871 = state_15838__$1;
(statearr_15851_15871[(1)] = (8));

} else {
var statearr_15852_15872 = state_15838__$1;
(statearr_15852_15872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (10))){
var inst_15830 = (state_15838[(2)]);
var state_15838__$1 = state_15838;
var statearr_15853_15873 = state_15838__$1;
(statearr_15853_15873[(2)] = inst_15830);

(statearr_15853_15873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (8))){
var inst_15815 = (state_15838[(7)]);
var tmp15850 = inst_15815;
var inst_15815__$1 = tmp15850;
var state_15838__$1 = (function (){var statearr_15854 = state_15838;
(statearr_15854[(7)] = inst_15815__$1);

return statearr_15854;
})();
var statearr_15855_15874 = state_15838__$1;
(statearr_15855_15874[(2)] = null);

(statearr_15855_15874[(1)] = (2));


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
});})(c__6555__auto___15864,out))
;
return ((function (switch__6493__auto__,c__6555__auto___15864,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_15859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15859[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_15859[(1)] = (1));

return statearr_15859;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_15838){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15860){if((e15860 instanceof Object)){
var ex__6497__auto__ = e15860;
var statearr_15861_15875 = state_15838;
(statearr_15861_15875[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15876 = state_15838;
state_15838 = G__15876;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_15838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_15838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15864,out))
})();
var state__6557__auto__ = (function (){var statearr_15862 = f__6556__auto__.call(null);
(statearr_15862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15864);

return statearr_15862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15864,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15878 = arguments.length;
switch (G__15878) {
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
var c__6555__auto___15947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___15947,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___15947,out){
return (function (state_15916){
var state_val_15917 = (state_15916[(1)]);
if((state_val_15917 === (7))){
var inst_15912 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15918_15948 = state_15916__$1;
(statearr_15918_15948[(2)] = inst_15912);

(statearr_15918_15948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (1))){
var inst_15879 = (new Array(n));
var inst_15880 = inst_15879;
var inst_15881 = (0);
var state_15916__$1 = (function (){var statearr_15919 = state_15916;
(statearr_15919[(7)] = inst_15881);

(statearr_15919[(8)] = inst_15880);

return statearr_15919;
})();
var statearr_15920_15949 = state_15916__$1;
(statearr_15920_15949[(2)] = null);

(statearr_15920_15949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (4))){
var inst_15884 = (state_15916[(9)]);
var inst_15884__$1 = (state_15916[(2)]);
var inst_15885 = (inst_15884__$1 == null);
var inst_15886 = cljs.core.not.call(null,inst_15885);
var state_15916__$1 = (function (){var statearr_15921 = state_15916;
(statearr_15921[(9)] = inst_15884__$1);

return statearr_15921;
})();
if(inst_15886){
var statearr_15922_15950 = state_15916__$1;
(statearr_15922_15950[(1)] = (5));

} else {
var statearr_15923_15951 = state_15916__$1;
(statearr_15923_15951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (15))){
var inst_15906 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15924_15952 = state_15916__$1;
(statearr_15924_15952[(2)] = inst_15906);

(statearr_15924_15952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (13))){
var state_15916__$1 = state_15916;
var statearr_15925_15953 = state_15916__$1;
(statearr_15925_15953[(2)] = null);

(statearr_15925_15953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (6))){
var inst_15881 = (state_15916[(7)]);
var inst_15902 = (inst_15881 > (0));
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15902)){
var statearr_15926_15954 = state_15916__$1;
(statearr_15926_15954[(1)] = (12));

} else {
var statearr_15927_15955 = state_15916__$1;
(statearr_15927_15955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (3))){
var inst_15914 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15916__$1,inst_15914);
} else {
if((state_val_15917 === (12))){
var inst_15880 = (state_15916[(8)]);
var inst_15904 = cljs.core.vec.call(null,inst_15880);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15916__$1,(15),out,inst_15904);
} else {
if((state_val_15917 === (2))){
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15916__$1,(4),ch);
} else {
if((state_val_15917 === (11))){
var inst_15896 = (state_15916[(2)]);
var inst_15897 = (new Array(n));
var inst_15880 = inst_15897;
var inst_15881 = (0);
var state_15916__$1 = (function (){var statearr_15928 = state_15916;
(statearr_15928[(7)] = inst_15881);

(statearr_15928[(10)] = inst_15896);

(statearr_15928[(8)] = inst_15880);

return statearr_15928;
})();
var statearr_15929_15956 = state_15916__$1;
(statearr_15929_15956[(2)] = null);

(statearr_15929_15956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (9))){
var inst_15880 = (state_15916[(8)]);
var inst_15894 = cljs.core.vec.call(null,inst_15880);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15916__$1,(11),out,inst_15894);
} else {
if((state_val_15917 === (5))){
var inst_15881 = (state_15916[(7)]);
var inst_15880 = (state_15916[(8)]);
var inst_15884 = (state_15916[(9)]);
var inst_15889 = (state_15916[(11)]);
var inst_15888 = (inst_15880[inst_15881] = inst_15884);
var inst_15889__$1 = (inst_15881 + (1));
var inst_15890 = (inst_15889__$1 < n);
var state_15916__$1 = (function (){var statearr_15930 = state_15916;
(statearr_15930[(12)] = inst_15888);

(statearr_15930[(11)] = inst_15889__$1);

return statearr_15930;
})();
if(cljs.core.truth_(inst_15890)){
var statearr_15931_15957 = state_15916__$1;
(statearr_15931_15957[(1)] = (8));

} else {
var statearr_15932_15958 = state_15916__$1;
(statearr_15932_15958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (14))){
var inst_15909 = (state_15916[(2)]);
var inst_15910 = cljs.core.async.close_BANG_.call(null,out);
var state_15916__$1 = (function (){var statearr_15934 = state_15916;
(statearr_15934[(13)] = inst_15909);

return statearr_15934;
})();
var statearr_15935_15959 = state_15916__$1;
(statearr_15935_15959[(2)] = inst_15910);

(statearr_15935_15959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (10))){
var inst_15900 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15936_15960 = state_15916__$1;
(statearr_15936_15960[(2)] = inst_15900);

(statearr_15936_15960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (8))){
var inst_15880 = (state_15916[(8)]);
var inst_15889 = (state_15916[(11)]);
var tmp15933 = inst_15880;
var inst_15880__$1 = tmp15933;
var inst_15881 = inst_15889;
var state_15916__$1 = (function (){var statearr_15937 = state_15916;
(statearr_15937[(7)] = inst_15881);

(statearr_15937[(8)] = inst_15880__$1);

return statearr_15937;
})();
var statearr_15938_15961 = state_15916__$1;
(statearr_15938_15961[(2)] = null);

(statearr_15938_15961[(1)] = (2));


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
});})(c__6555__auto___15947,out))
;
return ((function (switch__6493__auto__,c__6555__auto___15947,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_15942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15942[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_15942[(1)] = (1));

return statearr_15942;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_15916){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_15916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e15943){if((e15943 instanceof Object)){
var ex__6497__auto__ = e15943;
var statearr_15944_15962 = state_15916;
(statearr_15944_15962[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15963 = state_15916;
state_15916 = G__15963;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_15916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_15916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___15947,out))
})();
var state__6557__auto__ = (function (){var statearr_15945 = f__6556__auto__.call(null);
(statearr_15945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___15947);

return statearr_15945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___15947,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15965 = arguments.length;
switch (G__15965) {
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
var c__6555__auto___16038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___16038,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___16038,out){
return (function (state_16007){
var state_val_16008 = (state_16007[(1)]);
if((state_val_16008 === (7))){
var inst_16003 = (state_16007[(2)]);
var state_16007__$1 = state_16007;
var statearr_16009_16039 = state_16007__$1;
(statearr_16009_16039[(2)] = inst_16003);

(statearr_16009_16039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (1))){
var inst_15966 = [];
var inst_15967 = inst_15966;
var inst_15968 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16007__$1 = (function (){var statearr_16010 = state_16007;
(statearr_16010[(7)] = inst_15968);

(statearr_16010[(8)] = inst_15967);

return statearr_16010;
})();
var statearr_16011_16040 = state_16007__$1;
(statearr_16011_16040[(2)] = null);

(statearr_16011_16040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (4))){
var inst_15971 = (state_16007[(9)]);
var inst_15971__$1 = (state_16007[(2)]);
var inst_15972 = (inst_15971__$1 == null);
var inst_15973 = cljs.core.not.call(null,inst_15972);
var state_16007__$1 = (function (){var statearr_16012 = state_16007;
(statearr_16012[(9)] = inst_15971__$1);

return statearr_16012;
})();
if(inst_15973){
var statearr_16013_16041 = state_16007__$1;
(statearr_16013_16041[(1)] = (5));

} else {
var statearr_16014_16042 = state_16007__$1;
(statearr_16014_16042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (15))){
var inst_15997 = (state_16007[(2)]);
var state_16007__$1 = state_16007;
var statearr_16015_16043 = state_16007__$1;
(statearr_16015_16043[(2)] = inst_15997);

(statearr_16015_16043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (13))){
var state_16007__$1 = state_16007;
var statearr_16016_16044 = state_16007__$1;
(statearr_16016_16044[(2)] = null);

(statearr_16016_16044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (6))){
var inst_15967 = (state_16007[(8)]);
var inst_15992 = inst_15967.length;
var inst_15993 = (inst_15992 > (0));
var state_16007__$1 = state_16007;
if(cljs.core.truth_(inst_15993)){
var statearr_16017_16045 = state_16007__$1;
(statearr_16017_16045[(1)] = (12));

} else {
var statearr_16018_16046 = state_16007__$1;
(statearr_16018_16046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (3))){
var inst_16005 = (state_16007[(2)]);
var state_16007__$1 = state_16007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16007__$1,inst_16005);
} else {
if((state_val_16008 === (12))){
var inst_15967 = (state_16007[(8)]);
var inst_15995 = cljs.core.vec.call(null,inst_15967);
var state_16007__$1 = state_16007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16007__$1,(15),out,inst_15995);
} else {
if((state_val_16008 === (2))){
var state_16007__$1 = state_16007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16007__$1,(4),ch);
} else {
if((state_val_16008 === (11))){
var inst_15975 = (state_16007[(10)]);
var inst_15971 = (state_16007[(9)]);
var inst_15985 = (state_16007[(2)]);
var inst_15986 = [];
var inst_15987 = inst_15986.push(inst_15971);
var inst_15967 = inst_15986;
var inst_15968 = inst_15975;
var state_16007__$1 = (function (){var statearr_16019 = state_16007;
(statearr_16019[(11)] = inst_15985);

(statearr_16019[(12)] = inst_15987);

(statearr_16019[(7)] = inst_15968);

(statearr_16019[(8)] = inst_15967);

return statearr_16019;
})();
var statearr_16020_16047 = state_16007__$1;
(statearr_16020_16047[(2)] = null);

(statearr_16020_16047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (9))){
var inst_15967 = (state_16007[(8)]);
var inst_15983 = cljs.core.vec.call(null,inst_15967);
var state_16007__$1 = state_16007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16007__$1,(11),out,inst_15983);
} else {
if((state_val_16008 === (5))){
var inst_15975 = (state_16007[(10)]);
var inst_15971 = (state_16007[(9)]);
var inst_15968 = (state_16007[(7)]);
var inst_15975__$1 = f.call(null,inst_15971);
var inst_15976 = cljs.core._EQ_.call(null,inst_15975__$1,inst_15968);
var inst_15977 = cljs.core.keyword_identical_QMARK_.call(null,inst_15968,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15978 = (inst_15976) || (inst_15977);
var state_16007__$1 = (function (){var statearr_16021 = state_16007;
(statearr_16021[(10)] = inst_15975__$1);

return statearr_16021;
})();
if(cljs.core.truth_(inst_15978)){
var statearr_16022_16048 = state_16007__$1;
(statearr_16022_16048[(1)] = (8));

} else {
var statearr_16023_16049 = state_16007__$1;
(statearr_16023_16049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (14))){
var inst_16000 = (state_16007[(2)]);
var inst_16001 = cljs.core.async.close_BANG_.call(null,out);
var state_16007__$1 = (function (){var statearr_16025 = state_16007;
(statearr_16025[(13)] = inst_16000);

return statearr_16025;
})();
var statearr_16026_16050 = state_16007__$1;
(statearr_16026_16050[(2)] = inst_16001);

(statearr_16026_16050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (10))){
var inst_15990 = (state_16007[(2)]);
var state_16007__$1 = state_16007;
var statearr_16027_16051 = state_16007__$1;
(statearr_16027_16051[(2)] = inst_15990);

(statearr_16027_16051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16008 === (8))){
var inst_15975 = (state_16007[(10)]);
var inst_15971 = (state_16007[(9)]);
var inst_15967 = (state_16007[(8)]);
var inst_15980 = inst_15967.push(inst_15971);
var tmp16024 = inst_15967;
var inst_15967__$1 = tmp16024;
var inst_15968 = inst_15975;
var state_16007__$1 = (function (){var statearr_16028 = state_16007;
(statearr_16028[(14)] = inst_15980);

(statearr_16028[(7)] = inst_15968);

(statearr_16028[(8)] = inst_15967__$1);

return statearr_16028;
})();
var statearr_16029_16052 = state_16007__$1;
(statearr_16029_16052[(2)] = null);

(statearr_16029_16052[(1)] = (2));


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
});})(c__6555__auto___16038,out))
;
return ((function (switch__6493__auto__,c__6555__auto___16038,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_16033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16033[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_16033[(1)] = (1));

return statearr_16033;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_16007){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_16007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e16034){if((e16034 instanceof Object)){
var ex__6497__auto__ = e16034;
var statearr_16035_16053 = state_16007;
(statearr_16035_16053[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16054 = state_16007;
state_16007 = G__16054;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_16007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_16007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___16038,out))
})();
var state__6557__auto__ = (function (){var statearr_16036 = f__6556__auto__.call(null);
(statearr_16036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___16038);

return statearr_16036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___16038,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map