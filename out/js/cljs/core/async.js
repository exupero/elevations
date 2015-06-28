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
if(typeof cljs.core.async.t37571 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37571 = (function (f,fn_handler,meta37572){
this.f = f;
this.fn_handler = fn_handler;
this.meta37572 = meta37572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t37571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t37571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37573){
var self__ = this;
var _37573__$1 = this;
return self__.meta37572;
});

cljs.core.async.t37571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37573,meta37572__$1){
var self__ = this;
var _37573__$1 = this;
return (new cljs.core.async.t37571(self__.f,self__.fn_handler,meta37572__$1));
});

cljs.core.async.t37571.cljs$lang$type = true;

cljs.core.async.t37571.cljs$lang$ctorStr = "cljs.core.async/t37571";

cljs.core.async.t37571.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t37571");
});

cljs.core.async.__GT_t37571 = (function cljs$core$async$fn_handler_$___GT_t37571(f__$1,fn_handler__$1,meta37572){
return (new cljs.core.async.t37571(f__$1,fn_handler__$1,meta37572));
});

}

return (new cljs.core.async.t37571(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37575 = buff;
if(G__37575){
var bit__4871__auto__ = null;
if(cljs.core.truth_((function (){var or__4197__auto__ = bit__4871__auto__;
if(cljs.core.truth_(or__4197__auto__)){
return or__4197__auto__;
} else {
return G__37575.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__37575.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37575);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37575);
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
var G__37577 = arguments.length;
switch (G__37577) {
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
var G__37580 = arguments.length;
switch (G__37580) {
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
var val_37582 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37582);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37582,ret){
return (function (){
return fn1.call(null,val_37582);
});})(val_37582,ret))
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
var G__37584 = arguments.length;
switch (G__37584) {
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
var n__5082__auto___37586 = n;
var x_37587 = (0);
while(true){
if((x_37587 < n__5082__auto___37586)){
(a[x_37587] = (0));

var G__37588 = (x_37587 + (1));
x_37587 = G__37588;
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

var G__37589 = (i + (1));
i = G__37589;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t37593 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37593 = (function (flag,alt_flag,meta37594){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37594 = meta37594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37593.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t37593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t37593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37595){
var self__ = this;
var _37595__$1 = this;
return self__.meta37594;
});})(flag))
;

cljs.core.async.t37593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37595,meta37594__$1){
var self__ = this;
var _37595__$1 = this;
return (new cljs.core.async.t37593(self__.flag,self__.alt_flag,meta37594__$1));
});})(flag))
;

cljs.core.async.t37593.cljs$lang$type = true;

cljs.core.async.t37593.cljs$lang$ctorStr = "cljs.core.async/t37593";

cljs.core.async.t37593.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t37593");
});})(flag))
;

cljs.core.async.__GT_t37593 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t37593(flag__$1,alt_flag__$1,meta37594){
return (new cljs.core.async.t37593(flag__$1,alt_flag__$1,meta37594));
});})(flag))
;

}

return (new cljs.core.async.t37593(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t37599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37599 = (function (cb,flag,alt_handler,meta37600){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37600 = meta37600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37599.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t37599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t37599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37601){
var self__ = this;
var _37601__$1 = this;
return self__.meta37600;
});

cljs.core.async.t37599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37601,meta37600__$1){
var self__ = this;
var _37601__$1 = this;
return (new cljs.core.async.t37599(self__.cb,self__.flag,self__.alt_handler,meta37600__$1));
});

cljs.core.async.t37599.cljs$lang$type = true;

cljs.core.async.t37599.cljs$lang$ctorStr = "cljs.core.async/t37599";

cljs.core.async.t37599.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t37599");
});

cljs.core.async.__GT_t37599 = (function cljs$core$async$alt_handler_$___GT_t37599(cb__$1,flag__$1,alt_handler__$1,meta37600){
return (new cljs.core.async.t37599(cb__$1,flag__$1,alt_handler__$1,meta37600));
});

}

return (new cljs.core.async.t37599(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37602_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37602_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37603_SHARP_,port], null));
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
var G__37604 = (i + (1));
i = G__37604;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37607){
var map__37608 = p__37607;
var map__37608__$1 = ((cljs.core.seq_QMARK_.call(null,map__37608))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var opts = map__37608__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37605){
var G__37606 = cljs.core.first.call(null,seq37605);
var seq37605__$1 = cljs.core.next.call(null,seq37605);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37606,seq37605__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__37610 = arguments.length;
switch (G__37610) {
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
var c__6555__auto___37659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___37659){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___37659){
return (function (state_37634){
var state_val_37635 = (state_37634[(1)]);
if((state_val_37635 === (7))){
var inst_37630 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
var statearr_37636_37660 = state_37634__$1;
(statearr_37636_37660[(2)] = inst_37630);

(statearr_37636_37660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (1))){
var state_37634__$1 = state_37634;
var statearr_37637_37661 = state_37634__$1;
(statearr_37637_37661[(2)] = null);

(statearr_37637_37661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (4))){
var inst_37613 = (state_37634[(7)]);
var inst_37613__$1 = (state_37634[(2)]);
var inst_37614 = (inst_37613__$1 == null);
var state_37634__$1 = (function (){var statearr_37638 = state_37634;
(statearr_37638[(7)] = inst_37613__$1);

return statearr_37638;
})();
if(cljs.core.truth_(inst_37614)){
var statearr_37639_37662 = state_37634__$1;
(statearr_37639_37662[(1)] = (5));

} else {
var statearr_37640_37663 = state_37634__$1;
(statearr_37640_37663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (13))){
var state_37634__$1 = state_37634;
var statearr_37641_37664 = state_37634__$1;
(statearr_37641_37664[(2)] = null);

(statearr_37641_37664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (6))){
var inst_37613 = (state_37634[(7)]);
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37634__$1,(11),to,inst_37613);
} else {
if((state_val_37635 === (3))){
var inst_37632 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37634__$1,inst_37632);
} else {
if((state_val_37635 === (12))){
var state_37634__$1 = state_37634;
var statearr_37642_37665 = state_37634__$1;
(statearr_37642_37665[(2)] = null);

(statearr_37642_37665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (2))){
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37634__$1,(4),from);
} else {
if((state_val_37635 === (11))){
var inst_37623 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
if(cljs.core.truth_(inst_37623)){
var statearr_37643_37666 = state_37634__$1;
(statearr_37643_37666[(1)] = (12));

} else {
var statearr_37644_37667 = state_37634__$1;
(statearr_37644_37667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (9))){
var state_37634__$1 = state_37634;
var statearr_37645_37668 = state_37634__$1;
(statearr_37645_37668[(2)] = null);

(statearr_37645_37668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (5))){
var state_37634__$1 = state_37634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37646_37669 = state_37634__$1;
(statearr_37646_37669[(1)] = (8));

} else {
var statearr_37647_37670 = state_37634__$1;
(statearr_37647_37670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (14))){
var inst_37628 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
var statearr_37648_37671 = state_37634__$1;
(statearr_37648_37671[(2)] = inst_37628);

(statearr_37648_37671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (10))){
var inst_37620 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
var statearr_37649_37672 = state_37634__$1;
(statearr_37649_37672[(2)] = inst_37620);

(statearr_37649_37672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (8))){
var inst_37617 = cljs.core.async.close_BANG_.call(null,to);
var state_37634__$1 = state_37634;
var statearr_37650_37673 = state_37634__$1;
(statearr_37650_37673[(2)] = inst_37617);

(statearr_37650_37673[(1)] = (10));


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
});})(c__6555__auto___37659))
;
return ((function (switch__6493__auto__,c__6555__auto___37659){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_37654 = [null,null,null,null,null,null,null,null];
(statearr_37654[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_37654[(1)] = (1));

return statearr_37654;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_37634){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_37634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e37655){if((e37655 instanceof Object)){
var ex__6497__auto__ = e37655;
var statearr_37656_37674 = state_37634;
(statearr_37656_37674[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37675 = state_37634;
state_37634 = G__37675;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_37634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_37634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___37659))
})();
var state__6557__auto__ = (function (){var statearr_37657 = f__6556__auto__.call(null);
(statearr_37657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___37659);

return statearr_37657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___37659))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37859){
var vec__37860 = p__37859;
var v = cljs.core.nth.call(null,vec__37860,(0),null);
var p = cljs.core.nth.call(null,vec__37860,(1),null);
var job = vec__37860;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6555__auto___38042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___38042,res,vec__37860,v,p,job,jobs,results){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___38042,res,vec__37860,v,p,job,jobs,results){
return (function (state_37865){
var state_val_37866 = (state_37865[(1)]);
if((state_val_37866 === (2))){
var inst_37862 = (state_37865[(2)]);
var inst_37863 = cljs.core.async.close_BANG_.call(null,res);
var state_37865__$1 = (function (){var statearr_37867 = state_37865;
(statearr_37867[(7)] = inst_37862);

return statearr_37867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37865__$1,inst_37863);
} else {
if((state_val_37866 === (1))){
var state_37865__$1 = state_37865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37865__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6555__auto___38042,res,vec__37860,v,p,job,jobs,results))
;
return ((function (switch__6493__auto__,c__6555__auto___38042,res,vec__37860,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_37871 = [null,null,null,null,null,null,null,null];
(statearr_37871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_37871[(1)] = (1));

return statearr_37871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_37865){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_37865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e37872){if((e37872 instanceof Object)){
var ex__6497__auto__ = e37872;
var statearr_37873_38043 = state_37865;
(statearr_37873_38043[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38044 = state_37865;
state_37865 = G__38044;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_37865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_37865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___38042,res,vec__37860,v,p,job,jobs,results))
})();
var state__6557__auto__ = (function (){var statearr_37874 = f__6556__auto__.call(null);
(statearr_37874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___38042);

return statearr_37874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___38042,res,vec__37860,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37875){
var vec__37876 = p__37875;
var v = cljs.core.nth.call(null,vec__37876,(0),null);
var p = cljs.core.nth.call(null,vec__37876,(1),null);
var job = vec__37876;
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
var n__5082__auto___38045 = n;
var __38046 = (0);
while(true){
if((__38046 < n__5082__auto___38045)){
var G__37877_38047 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37877_38047) {
case "async":
var c__6555__auto___38049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38046,c__6555__auto___38049,G__37877_38047,n__5082__auto___38045,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (__38046,c__6555__auto___38049,G__37877_38047,n__5082__auto___38045,jobs,results,process,async){
return (function (state_37890){
var state_val_37891 = (state_37890[(1)]);
if((state_val_37891 === (7))){
var inst_37886 = (state_37890[(2)]);
var state_37890__$1 = state_37890;
var statearr_37892_38050 = state_37890__$1;
(statearr_37892_38050[(2)] = inst_37886);

(statearr_37892_38050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (6))){
var state_37890__$1 = state_37890;
var statearr_37893_38051 = state_37890__$1;
(statearr_37893_38051[(2)] = null);

(statearr_37893_38051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (5))){
var state_37890__$1 = state_37890;
var statearr_37894_38052 = state_37890__$1;
(statearr_37894_38052[(2)] = null);

(statearr_37894_38052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (4))){
var inst_37880 = (state_37890[(2)]);
var inst_37881 = async.call(null,inst_37880);
var state_37890__$1 = state_37890;
if(cljs.core.truth_(inst_37881)){
var statearr_37895_38053 = state_37890__$1;
(statearr_37895_38053[(1)] = (5));

} else {
var statearr_37896_38054 = state_37890__$1;
(statearr_37896_38054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (3))){
var inst_37888 = (state_37890[(2)]);
var state_37890__$1 = state_37890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37890__$1,inst_37888);
} else {
if((state_val_37891 === (2))){
var state_37890__$1 = state_37890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37890__$1,(4),jobs);
} else {
if((state_val_37891 === (1))){
var state_37890__$1 = state_37890;
var statearr_37897_38055 = state_37890__$1;
(statearr_37897_38055[(2)] = null);

(statearr_37897_38055[(1)] = (2));


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
});})(__38046,c__6555__auto___38049,G__37877_38047,n__5082__auto___38045,jobs,results,process,async))
;
return ((function (__38046,switch__6493__auto__,c__6555__auto___38049,G__37877_38047,n__5082__auto___38045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_37901 = [null,null,null,null,null,null,null];
(statearr_37901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_37901[(1)] = (1));

return statearr_37901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_37890){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_37890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e37902){if((e37902 instanceof Object)){
var ex__6497__auto__ = e37902;
var statearr_37903_38056 = state_37890;
(statearr_37903_38056[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38057 = state_37890;
state_37890 = G__38057;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_37890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_37890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(__38046,switch__6493__auto__,c__6555__auto___38049,G__37877_38047,n__5082__auto___38045,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_37904 = f__6556__auto__.call(null);
(statearr_37904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___38049);

return statearr_37904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(__38046,c__6555__auto___38049,G__37877_38047,n__5082__auto___38045,jobs,results,process,async))
);


break;
case "compute":
var c__6555__auto___38058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38046,c__6555__auto___38058,G__37877_38047,n__5082__auto___38045,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (__38046,c__6555__auto___38058,G__37877_38047,n__5082__auto___38045,jobs,results,process,async){
return (function (state_37917){
var state_val_37918 = (state_37917[(1)]);
if((state_val_37918 === (7))){
var inst_37913 = (state_37917[(2)]);
var state_37917__$1 = state_37917;
var statearr_37919_38059 = state_37917__$1;
(statearr_37919_38059[(2)] = inst_37913);

(statearr_37919_38059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37918 === (6))){
var state_37917__$1 = state_37917;
var statearr_37920_38060 = state_37917__$1;
(statearr_37920_38060[(2)] = null);

(statearr_37920_38060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37918 === (5))){
var state_37917__$1 = state_37917;
var statearr_37921_38061 = state_37917__$1;
(statearr_37921_38061[(2)] = null);

(statearr_37921_38061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37918 === (4))){
var inst_37907 = (state_37917[(2)]);
var inst_37908 = process.call(null,inst_37907);
var state_37917__$1 = state_37917;
if(cljs.core.truth_(inst_37908)){
var statearr_37922_38062 = state_37917__$1;
(statearr_37922_38062[(1)] = (5));

} else {
var statearr_37923_38063 = state_37917__$1;
(statearr_37923_38063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37918 === (3))){
var inst_37915 = (state_37917[(2)]);
var state_37917__$1 = state_37917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37917__$1,inst_37915);
} else {
if((state_val_37918 === (2))){
var state_37917__$1 = state_37917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37917__$1,(4),jobs);
} else {
if((state_val_37918 === (1))){
var state_37917__$1 = state_37917;
var statearr_37924_38064 = state_37917__$1;
(statearr_37924_38064[(2)] = null);

(statearr_37924_38064[(1)] = (2));


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
});})(__38046,c__6555__auto___38058,G__37877_38047,n__5082__auto___38045,jobs,results,process,async))
;
return ((function (__38046,switch__6493__auto__,c__6555__auto___38058,G__37877_38047,n__5082__auto___38045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_37928 = [null,null,null,null,null,null,null];
(statearr_37928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_37928[(1)] = (1));

return statearr_37928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_37917){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_37917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e37929){if((e37929 instanceof Object)){
var ex__6497__auto__ = e37929;
var statearr_37930_38065 = state_37917;
(statearr_37930_38065[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38066 = state_37917;
state_37917 = G__38066;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_37917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_37917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(__38046,switch__6493__auto__,c__6555__auto___38058,G__37877_38047,n__5082__auto___38045,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_37931 = f__6556__auto__.call(null);
(statearr_37931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___38058);

return statearr_37931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(__38046,c__6555__auto___38058,G__37877_38047,n__5082__auto___38045,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38067 = (__38046 + (1));
__38046 = G__38067;
continue;
} else {
}
break;
}

var c__6555__auto___38068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___38068,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___38068,jobs,results,process,async){
return (function (state_37953){
var state_val_37954 = (state_37953[(1)]);
if((state_val_37954 === (9))){
var inst_37946 = (state_37953[(2)]);
var state_37953__$1 = (function (){var statearr_37955 = state_37953;
(statearr_37955[(7)] = inst_37946);

return statearr_37955;
})();
var statearr_37956_38069 = state_37953__$1;
(statearr_37956_38069[(2)] = null);

(statearr_37956_38069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (8))){
var inst_37939 = (state_37953[(8)]);
var inst_37944 = (state_37953[(2)]);
var state_37953__$1 = (function (){var statearr_37957 = state_37953;
(statearr_37957[(9)] = inst_37944);

return statearr_37957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37953__$1,(9),results,inst_37939);
} else {
if((state_val_37954 === (7))){
var inst_37949 = (state_37953[(2)]);
var state_37953__$1 = state_37953;
var statearr_37958_38070 = state_37953__$1;
(statearr_37958_38070[(2)] = inst_37949);

(statearr_37958_38070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (6))){
var inst_37939 = (state_37953[(8)]);
var inst_37934 = (state_37953[(10)]);
var inst_37939__$1 = cljs.core.async.chan.call(null,(1));
var inst_37940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37941 = [inst_37934,inst_37939__$1];
var inst_37942 = (new cljs.core.PersistentVector(null,2,(5),inst_37940,inst_37941,null));
var state_37953__$1 = (function (){var statearr_37959 = state_37953;
(statearr_37959[(8)] = inst_37939__$1);

return statearr_37959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37953__$1,(8),jobs,inst_37942);
} else {
if((state_val_37954 === (5))){
var inst_37937 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37953__$1 = state_37953;
var statearr_37960_38071 = state_37953__$1;
(statearr_37960_38071[(2)] = inst_37937);

(statearr_37960_38071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (4))){
var inst_37934 = (state_37953[(10)]);
var inst_37934__$1 = (state_37953[(2)]);
var inst_37935 = (inst_37934__$1 == null);
var state_37953__$1 = (function (){var statearr_37961 = state_37953;
(statearr_37961[(10)] = inst_37934__$1);

return statearr_37961;
})();
if(cljs.core.truth_(inst_37935)){
var statearr_37962_38072 = state_37953__$1;
(statearr_37962_38072[(1)] = (5));

} else {
var statearr_37963_38073 = state_37953__$1;
(statearr_37963_38073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37954 === (3))){
var inst_37951 = (state_37953[(2)]);
var state_37953__$1 = state_37953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37953__$1,inst_37951);
} else {
if((state_val_37954 === (2))){
var state_37953__$1 = state_37953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37953__$1,(4),from);
} else {
if((state_val_37954 === (1))){
var state_37953__$1 = state_37953;
var statearr_37964_38074 = state_37953__$1;
(statearr_37964_38074[(2)] = null);

(statearr_37964_38074[(1)] = (2));


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
});})(c__6555__auto___38068,jobs,results,process,async))
;
return ((function (switch__6493__auto__,c__6555__auto___38068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0 = (function (){
var statearr_37968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_37968[(1)] = (1));

return statearr_37968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_37953){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_37953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e37969){if((e37969 instanceof Object)){
var ex__6497__auto__ = e37969;
var statearr_37970_38075 = state_37953;
(statearr_37970_38075[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38076 = state_37953;
state_37953 = G__38076;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_37953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_37953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___38068,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_37971 = f__6556__auto__.call(null);
(statearr_37971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___38068);

return statearr_37971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___38068,jobs,results,process,async))
);


var c__6555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto__,jobs,results,process,async){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto__,jobs,results,process,async){
return (function (state_38009){
var state_val_38010 = (state_38009[(1)]);
if((state_val_38010 === (7))){
var inst_38005 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
var statearr_38011_38077 = state_38009__$1;
(statearr_38011_38077[(2)] = inst_38005);

(statearr_38011_38077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (20))){
var state_38009__$1 = state_38009;
var statearr_38012_38078 = state_38009__$1;
(statearr_38012_38078[(2)] = null);

(statearr_38012_38078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (1))){
var state_38009__$1 = state_38009;
var statearr_38013_38079 = state_38009__$1;
(statearr_38013_38079[(2)] = null);

(statearr_38013_38079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (4))){
var inst_37974 = (state_38009[(7)]);
var inst_37974__$1 = (state_38009[(2)]);
var inst_37975 = (inst_37974__$1 == null);
var state_38009__$1 = (function (){var statearr_38014 = state_38009;
(statearr_38014[(7)] = inst_37974__$1);

return statearr_38014;
})();
if(cljs.core.truth_(inst_37975)){
var statearr_38015_38080 = state_38009__$1;
(statearr_38015_38080[(1)] = (5));

} else {
var statearr_38016_38081 = state_38009__$1;
(statearr_38016_38081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (15))){
var inst_37987 = (state_38009[(8)]);
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38009__$1,(18),to,inst_37987);
} else {
if((state_val_38010 === (21))){
var inst_38000 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
var statearr_38017_38082 = state_38009__$1;
(statearr_38017_38082[(2)] = inst_38000);

(statearr_38017_38082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (13))){
var inst_38002 = (state_38009[(2)]);
var state_38009__$1 = (function (){var statearr_38018 = state_38009;
(statearr_38018[(9)] = inst_38002);

return statearr_38018;
})();
var statearr_38019_38083 = state_38009__$1;
(statearr_38019_38083[(2)] = null);

(statearr_38019_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (6))){
var inst_37974 = (state_38009[(7)]);
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38009__$1,(11),inst_37974);
} else {
if((state_val_38010 === (17))){
var inst_37995 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
if(cljs.core.truth_(inst_37995)){
var statearr_38020_38084 = state_38009__$1;
(statearr_38020_38084[(1)] = (19));

} else {
var statearr_38021_38085 = state_38009__$1;
(statearr_38021_38085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (3))){
var inst_38007 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38009__$1,inst_38007);
} else {
if((state_val_38010 === (12))){
var inst_37984 = (state_38009[(10)]);
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38009__$1,(14),inst_37984);
} else {
if((state_val_38010 === (2))){
var state_38009__$1 = state_38009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38009__$1,(4),results);
} else {
if((state_val_38010 === (19))){
var state_38009__$1 = state_38009;
var statearr_38022_38086 = state_38009__$1;
(statearr_38022_38086[(2)] = null);

(statearr_38022_38086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (11))){
var inst_37984 = (state_38009[(2)]);
var state_38009__$1 = (function (){var statearr_38023 = state_38009;
(statearr_38023[(10)] = inst_37984);

return statearr_38023;
})();
var statearr_38024_38087 = state_38009__$1;
(statearr_38024_38087[(2)] = null);

(statearr_38024_38087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (9))){
var state_38009__$1 = state_38009;
var statearr_38025_38088 = state_38009__$1;
(statearr_38025_38088[(2)] = null);

(statearr_38025_38088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (5))){
var state_38009__$1 = state_38009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38026_38089 = state_38009__$1;
(statearr_38026_38089[(1)] = (8));

} else {
var statearr_38027_38090 = state_38009__$1;
(statearr_38027_38090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (14))){
var inst_37987 = (state_38009[(8)]);
var inst_37989 = (state_38009[(11)]);
var inst_37987__$1 = (state_38009[(2)]);
var inst_37988 = (inst_37987__$1 == null);
var inst_37989__$1 = cljs.core.not.call(null,inst_37988);
var state_38009__$1 = (function (){var statearr_38028 = state_38009;
(statearr_38028[(8)] = inst_37987__$1);

(statearr_38028[(11)] = inst_37989__$1);

return statearr_38028;
})();
if(inst_37989__$1){
var statearr_38029_38091 = state_38009__$1;
(statearr_38029_38091[(1)] = (15));

} else {
var statearr_38030_38092 = state_38009__$1;
(statearr_38030_38092[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (16))){
var inst_37989 = (state_38009[(11)]);
var state_38009__$1 = state_38009;
var statearr_38031_38093 = state_38009__$1;
(statearr_38031_38093[(2)] = inst_37989);

(statearr_38031_38093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (10))){
var inst_37981 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
var statearr_38032_38094 = state_38009__$1;
(statearr_38032_38094[(2)] = inst_37981);

(statearr_38032_38094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (18))){
var inst_37992 = (state_38009[(2)]);
var state_38009__$1 = state_38009;
var statearr_38033_38095 = state_38009__$1;
(statearr_38033_38095[(2)] = inst_37992);

(statearr_38033_38095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38010 === (8))){
var inst_37978 = cljs.core.async.close_BANG_.call(null,to);
var state_38009__$1 = state_38009;
var statearr_38034_38096 = state_38009__$1;
(statearr_38034_38096[(2)] = inst_37978);

(statearr_38034_38096[(1)] = (10));


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
var statearr_38038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__);

(statearr_38038[(1)] = (1));

return statearr_38038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1 = (function (state_38009){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_38009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e38039){if((e38039 instanceof Object)){
var ex__6497__auto__ = e38039;
var statearr_38040_38097 = state_38009;
(statearr_38040_38097[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38098 = state_38009;
state_38009 = G__38098;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__ = function(state_38009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1.call(this,state_38009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__,jobs,results,process,async))
})();
var state__6557__auto__ = (function (){var statearr_38041 = f__6556__auto__.call(null);
(statearr_38041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_38041;
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
var G__38100 = arguments.length;
switch (G__38100) {
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
var G__38103 = arguments.length;
switch (G__38103) {
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
var G__38106 = arguments.length;
switch (G__38106) {
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
var c__6555__auto___38158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___38158,tc,fc){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___38158,tc,fc){
return (function (state_38132){
var state_val_38133 = (state_38132[(1)]);
if((state_val_38133 === (7))){
var inst_38128 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
var statearr_38134_38159 = state_38132__$1;
(statearr_38134_38159[(2)] = inst_38128);

(statearr_38134_38159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (1))){
var state_38132__$1 = state_38132;
var statearr_38135_38160 = state_38132__$1;
(statearr_38135_38160[(2)] = null);

(statearr_38135_38160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (4))){
var inst_38109 = (state_38132[(7)]);
var inst_38109__$1 = (state_38132[(2)]);
var inst_38110 = (inst_38109__$1 == null);
var state_38132__$1 = (function (){var statearr_38136 = state_38132;
(statearr_38136[(7)] = inst_38109__$1);

return statearr_38136;
})();
if(cljs.core.truth_(inst_38110)){
var statearr_38137_38161 = state_38132__$1;
(statearr_38137_38161[(1)] = (5));

} else {
var statearr_38138_38162 = state_38132__$1;
(statearr_38138_38162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (13))){
var state_38132__$1 = state_38132;
var statearr_38139_38163 = state_38132__$1;
(statearr_38139_38163[(2)] = null);

(statearr_38139_38163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (6))){
var inst_38109 = (state_38132[(7)]);
var inst_38115 = p.call(null,inst_38109);
var state_38132__$1 = state_38132;
if(cljs.core.truth_(inst_38115)){
var statearr_38140_38164 = state_38132__$1;
(statearr_38140_38164[(1)] = (9));

} else {
var statearr_38141_38165 = state_38132__$1;
(statearr_38141_38165[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (3))){
var inst_38130 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38132__$1,inst_38130);
} else {
if((state_val_38133 === (12))){
var state_38132__$1 = state_38132;
var statearr_38142_38166 = state_38132__$1;
(statearr_38142_38166[(2)] = null);

(statearr_38142_38166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (2))){
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38132__$1,(4),ch);
} else {
if((state_val_38133 === (11))){
var inst_38109 = (state_38132[(7)]);
var inst_38119 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38132__$1,(8),inst_38119,inst_38109);
} else {
if((state_val_38133 === (9))){
var state_38132__$1 = state_38132;
var statearr_38143_38167 = state_38132__$1;
(statearr_38143_38167[(2)] = tc);

(statearr_38143_38167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (5))){
var inst_38112 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38113 = cljs.core.async.close_BANG_.call(null,fc);
var state_38132__$1 = (function (){var statearr_38144 = state_38132;
(statearr_38144[(8)] = inst_38112);

return statearr_38144;
})();
var statearr_38145_38168 = state_38132__$1;
(statearr_38145_38168[(2)] = inst_38113);

(statearr_38145_38168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (14))){
var inst_38126 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
var statearr_38146_38169 = state_38132__$1;
(statearr_38146_38169[(2)] = inst_38126);

(statearr_38146_38169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (10))){
var state_38132__$1 = state_38132;
var statearr_38147_38170 = state_38132__$1;
(statearr_38147_38170[(2)] = fc);

(statearr_38147_38170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (8))){
var inst_38121 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
if(cljs.core.truth_(inst_38121)){
var statearr_38148_38171 = state_38132__$1;
(statearr_38148_38171[(1)] = (12));

} else {
var statearr_38149_38172 = state_38132__$1;
(statearr_38149_38172[(1)] = (13));

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
});})(c__6555__auto___38158,tc,fc))
;
return ((function (switch__6493__auto__,c__6555__auto___38158,tc,fc){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_38153 = [null,null,null,null,null,null,null,null,null];
(statearr_38153[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_38153[(1)] = (1));

return statearr_38153;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_38132){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_38132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e38154){if((e38154 instanceof Object)){
var ex__6497__auto__ = e38154;
var statearr_38155_38173 = state_38132;
(statearr_38155_38173[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38174 = state_38132;
state_38132 = G__38174;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_38132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_38132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___38158,tc,fc))
})();
var state__6557__auto__ = (function (){var statearr_38156 = f__6556__auto__.call(null);
(statearr_38156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___38158);

return statearr_38156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___38158,tc,fc))
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
return (function (state_38221){
var state_val_38222 = (state_38221[(1)]);
if((state_val_38222 === (7))){
var inst_38217 = (state_38221[(2)]);
var state_38221__$1 = state_38221;
var statearr_38223_38239 = state_38221__$1;
(statearr_38223_38239[(2)] = inst_38217);

(statearr_38223_38239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38222 === (6))){
var inst_38207 = (state_38221[(7)]);
var inst_38210 = (state_38221[(8)]);
var inst_38214 = f.call(null,inst_38207,inst_38210);
var inst_38207__$1 = inst_38214;
var state_38221__$1 = (function (){var statearr_38224 = state_38221;
(statearr_38224[(7)] = inst_38207__$1);

return statearr_38224;
})();
var statearr_38225_38240 = state_38221__$1;
(statearr_38225_38240[(2)] = null);

(statearr_38225_38240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38222 === (5))){
var inst_38207 = (state_38221[(7)]);
var state_38221__$1 = state_38221;
var statearr_38226_38241 = state_38221__$1;
(statearr_38226_38241[(2)] = inst_38207);

(statearr_38226_38241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38222 === (4))){
var inst_38210 = (state_38221[(8)]);
var inst_38210__$1 = (state_38221[(2)]);
var inst_38211 = (inst_38210__$1 == null);
var state_38221__$1 = (function (){var statearr_38227 = state_38221;
(statearr_38227[(8)] = inst_38210__$1);

return statearr_38227;
})();
if(cljs.core.truth_(inst_38211)){
var statearr_38228_38242 = state_38221__$1;
(statearr_38228_38242[(1)] = (5));

} else {
var statearr_38229_38243 = state_38221__$1;
(statearr_38229_38243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38222 === (3))){
var inst_38219 = (state_38221[(2)]);
var state_38221__$1 = state_38221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38221__$1,inst_38219);
} else {
if((state_val_38222 === (2))){
var state_38221__$1 = state_38221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38221__$1,(4),ch);
} else {
if((state_val_38222 === (1))){
var inst_38207 = init;
var state_38221__$1 = (function (){var statearr_38230 = state_38221;
(statearr_38230[(7)] = inst_38207);

return statearr_38230;
})();
var statearr_38231_38244 = state_38221__$1;
(statearr_38231_38244[(2)] = null);

(statearr_38231_38244[(1)] = (2));


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
var statearr_38235 = [null,null,null,null,null,null,null,null,null];
(statearr_38235[(0)] = cljs$core$async$reduce_$_state_machine__6494__auto__);

(statearr_38235[(1)] = (1));

return statearr_38235;
});
var cljs$core$async$reduce_$_state_machine__6494__auto____1 = (function (state_38221){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_38221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e38236){if((e38236 instanceof Object)){
var ex__6497__auto__ = e38236;
var statearr_38237_38245 = state_38221;
(statearr_38237_38245[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38246 = state_38221;
state_38221 = G__38246;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6494__auto__ = function(state_38221){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6494__auto____1.call(this,state_38221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6494__auto____0;
cljs$core$async$reduce_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6494__auto____1;
return cljs$core$async$reduce_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__))
})();
var state__6557__auto__ = (function (){var statearr_38238 = f__6556__auto__.call(null);
(statearr_38238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_38238;
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
var G__38248 = arguments.length;
switch (G__38248) {
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
return (function (state_38273){
var state_val_38274 = (state_38273[(1)]);
if((state_val_38274 === (7))){
var inst_38255 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38275_38299 = state_38273__$1;
(statearr_38275_38299[(2)] = inst_38255);

(statearr_38275_38299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (1))){
var inst_38249 = cljs.core.seq.call(null,coll);
var inst_38250 = inst_38249;
var state_38273__$1 = (function (){var statearr_38276 = state_38273;
(statearr_38276[(7)] = inst_38250);

return statearr_38276;
})();
var statearr_38277_38300 = state_38273__$1;
(statearr_38277_38300[(2)] = null);

(statearr_38277_38300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (4))){
var inst_38250 = (state_38273[(7)]);
var inst_38253 = cljs.core.first.call(null,inst_38250);
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38273__$1,(7),ch,inst_38253);
} else {
if((state_val_38274 === (13))){
var inst_38267 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38278_38301 = state_38273__$1;
(statearr_38278_38301[(2)] = inst_38267);

(statearr_38278_38301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (6))){
var inst_38258 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
if(cljs.core.truth_(inst_38258)){
var statearr_38279_38302 = state_38273__$1;
(statearr_38279_38302[(1)] = (8));

} else {
var statearr_38280_38303 = state_38273__$1;
(statearr_38280_38303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (3))){
var inst_38271 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38273__$1,inst_38271);
} else {
if((state_val_38274 === (12))){
var state_38273__$1 = state_38273;
var statearr_38281_38304 = state_38273__$1;
(statearr_38281_38304[(2)] = null);

(statearr_38281_38304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (2))){
var inst_38250 = (state_38273[(7)]);
var state_38273__$1 = state_38273;
if(cljs.core.truth_(inst_38250)){
var statearr_38282_38305 = state_38273__$1;
(statearr_38282_38305[(1)] = (4));

} else {
var statearr_38283_38306 = state_38273__$1;
(statearr_38283_38306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (11))){
var inst_38264 = cljs.core.async.close_BANG_.call(null,ch);
var state_38273__$1 = state_38273;
var statearr_38284_38307 = state_38273__$1;
(statearr_38284_38307[(2)] = inst_38264);

(statearr_38284_38307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (9))){
var state_38273__$1 = state_38273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38285_38308 = state_38273__$1;
(statearr_38285_38308[(1)] = (11));

} else {
var statearr_38286_38309 = state_38273__$1;
(statearr_38286_38309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (5))){
var inst_38250 = (state_38273[(7)]);
var state_38273__$1 = state_38273;
var statearr_38287_38310 = state_38273__$1;
(statearr_38287_38310[(2)] = inst_38250);

(statearr_38287_38310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (10))){
var inst_38269 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38288_38311 = state_38273__$1;
(statearr_38288_38311[(2)] = inst_38269);

(statearr_38288_38311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (8))){
var inst_38250 = (state_38273[(7)]);
var inst_38260 = cljs.core.next.call(null,inst_38250);
var inst_38250__$1 = inst_38260;
var state_38273__$1 = (function (){var statearr_38289 = state_38273;
(statearr_38289[(7)] = inst_38250__$1);

return statearr_38289;
})();
var statearr_38290_38312 = state_38273__$1;
(statearr_38290_38312[(2)] = null);

(statearr_38290_38312[(1)] = (2));


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
var statearr_38294 = [null,null,null,null,null,null,null,null];
(statearr_38294[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_38294[(1)] = (1));

return statearr_38294;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_38273){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_38273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e38295){if((e38295 instanceof Object)){
var ex__6497__auto__ = e38295;
var statearr_38296_38313 = state_38273;
(statearr_38296_38313[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38314 = state_38273;
state_38273 = G__38314;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_38273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_38273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__))
})();
var state__6557__auto__ = (function (){var statearr_38297 = f__6556__auto__.call(null);
(statearr_38297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_38297;
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

cljs.core.async.Mux = (function (){var obj38316 = {};
return obj38316;
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


cljs.core.async.Mult = (function (){var obj38318 = {};
return obj38318;
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
if(typeof cljs.core.async.t38540 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38540 = (function (cs,ch,mult,meta38541){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38541 = meta38541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38540.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t38540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t38540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t38540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t38540.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t38540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38542){
var self__ = this;
var _38542__$1 = this;
return self__.meta38541;
});})(cs))
;

cljs.core.async.t38540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38542,meta38541__$1){
var self__ = this;
var _38542__$1 = this;
return (new cljs.core.async.t38540(self__.cs,self__.ch,self__.mult,meta38541__$1));
});})(cs))
;

cljs.core.async.t38540.cljs$lang$type = true;

cljs.core.async.t38540.cljs$lang$ctorStr = "cljs.core.async/t38540";

cljs.core.async.t38540.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t38540");
});})(cs))
;

cljs.core.async.__GT_t38540 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t38540(cs__$1,ch__$1,mult__$1,meta38541){
return (new cljs.core.async.t38540(cs__$1,ch__$1,mult__$1,meta38541));
});})(cs))
;

}

return (new cljs.core.async.t38540(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6555__auto___38761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___38761,cs,m,dchan,dctr,done){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___38761,cs,m,dchan,dctr,done){
return (function (state_38673){
var state_val_38674 = (state_38673[(1)]);
if((state_val_38674 === (7))){
var inst_38669 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38675_38762 = state_38673__$1;
(statearr_38675_38762[(2)] = inst_38669);

(statearr_38675_38762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (20))){
var inst_38574 = (state_38673[(7)]);
var inst_38584 = cljs.core.first.call(null,inst_38574);
var inst_38585 = cljs.core.nth.call(null,inst_38584,(0),null);
var inst_38586 = cljs.core.nth.call(null,inst_38584,(1),null);
var state_38673__$1 = (function (){var statearr_38676 = state_38673;
(statearr_38676[(8)] = inst_38585);

return statearr_38676;
})();
if(cljs.core.truth_(inst_38586)){
var statearr_38677_38763 = state_38673__$1;
(statearr_38677_38763[(1)] = (22));

} else {
var statearr_38678_38764 = state_38673__$1;
(statearr_38678_38764[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (27))){
var inst_38545 = (state_38673[(9)]);
var inst_38614 = (state_38673[(10)]);
var inst_38616 = (state_38673[(11)]);
var inst_38621 = (state_38673[(12)]);
var inst_38621__$1 = cljs.core._nth.call(null,inst_38614,inst_38616);
var inst_38622 = cljs.core.async.put_BANG_.call(null,inst_38621__$1,inst_38545,done);
var state_38673__$1 = (function (){var statearr_38679 = state_38673;
(statearr_38679[(12)] = inst_38621__$1);

return statearr_38679;
})();
if(cljs.core.truth_(inst_38622)){
var statearr_38680_38765 = state_38673__$1;
(statearr_38680_38765[(1)] = (30));

} else {
var statearr_38681_38766 = state_38673__$1;
(statearr_38681_38766[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (1))){
var state_38673__$1 = state_38673;
var statearr_38682_38767 = state_38673__$1;
(statearr_38682_38767[(2)] = null);

(statearr_38682_38767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (24))){
var inst_38574 = (state_38673[(7)]);
var inst_38591 = (state_38673[(2)]);
var inst_38592 = cljs.core.next.call(null,inst_38574);
var inst_38554 = inst_38592;
var inst_38555 = null;
var inst_38556 = (0);
var inst_38557 = (0);
var state_38673__$1 = (function (){var statearr_38683 = state_38673;
(statearr_38683[(13)] = inst_38591);

(statearr_38683[(14)] = inst_38556);

(statearr_38683[(15)] = inst_38557);

(statearr_38683[(16)] = inst_38555);

(statearr_38683[(17)] = inst_38554);

return statearr_38683;
})();
var statearr_38684_38768 = state_38673__$1;
(statearr_38684_38768[(2)] = null);

(statearr_38684_38768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (39))){
var state_38673__$1 = state_38673;
var statearr_38688_38769 = state_38673__$1;
(statearr_38688_38769[(2)] = null);

(statearr_38688_38769[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (4))){
var inst_38545 = (state_38673[(9)]);
var inst_38545__$1 = (state_38673[(2)]);
var inst_38546 = (inst_38545__$1 == null);
var state_38673__$1 = (function (){var statearr_38689 = state_38673;
(statearr_38689[(9)] = inst_38545__$1);

return statearr_38689;
})();
if(cljs.core.truth_(inst_38546)){
var statearr_38690_38770 = state_38673__$1;
(statearr_38690_38770[(1)] = (5));

} else {
var statearr_38691_38771 = state_38673__$1;
(statearr_38691_38771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (15))){
var inst_38556 = (state_38673[(14)]);
var inst_38557 = (state_38673[(15)]);
var inst_38555 = (state_38673[(16)]);
var inst_38554 = (state_38673[(17)]);
var inst_38570 = (state_38673[(2)]);
var inst_38571 = (inst_38557 + (1));
var tmp38685 = inst_38556;
var tmp38686 = inst_38555;
var tmp38687 = inst_38554;
var inst_38554__$1 = tmp38687;
var inst_38555__$1 = tmp38686;
var inst_38556__$1 = tmp38685;
var inst_38557__$1 = inst_38571;
var state_38673__$1 = (function (){var statearr_38692 = state_38673;
(statearr_38692[(18)] = inst_38570);

(statearr_38692[(14)] = inst_38556__$1);

(statearr_38692[(15)] = inst_38557__$1);

(statearr_38692[(16)] = inst_38555__$1);

(statearr_38692[(17)] = inst_38554__$1);

return statearr_38692;
})();
var statearr_38693_38772 = state_38673__$1;
(statearr_38693_38772[(2)] = null);

(statearr_38693_38772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (21))){
var inst_38595 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38697_38773 = state_38673__$1;
(statearr_38697_38773[(2)] = inst_38595);

(statearr_38697_38773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (31))){
var inst_38621 = (state_38673[(12)]);
var inst_38625 = done.call(null,null);
var inst_38626 = cljs.core.async.untap_STAR_.call(null,m,inst_38621);
var state_38673__$1 = (function (){var statearr_38698 = state_38673;
(statearr_38698[(19)] = inst_38625);

return statearr_38698;
})();
var statearr_38699_38774 = state_38673__$1;
(statearr_38699_38774[(2)] = inst_38626);

(statearr_38699_38774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (32))){
var inst_38615 = (state_38673[(20)]);
var inst_38614 = (state_38673[(10)]);
var inst_38613 = (state_38673[(21)]);
var inst_38616 = (state_38673[(11)]);
var inst_38628 = (state_38673[(2)]);
var inst_38629 = (inst_38616 + (1));
var tmp38694 = inst_38615;
var tmp38695 = inst_38614;
var tmp38696 = inst_38613;
var inst_38613__$1 = tmp38696;
var inst_38614__$1 = tmp38695;
var inst_38615__$1 = tmp38694;
var inst_38616__$1 = inst_38629;
var state_38673__$1 = (function (){var statearr_38700 = state_38673;
(statearr_38700[(22)] = inst_38628);

(statearr_38700[(20)] = inst_38615__$1);

(statearr_38700[(10)] = inst_38614__$1);

(statearr_38700[(21)] = inst_38613__$1);

(statearr_38700[(11)] = inst_38616__$1);

return statearr_38700;
})();
var statearr_38701_38775 = state_38673__$1;
(statearr_38701_38775[(2)] = null);

(statearr_38701_38775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (40))){
var inst_38641 = (state_38673[(23)]);
var inst_38645 = done.call(null,null);
var inst_38646 = cljs.core.async.untap_STAR_.call(null,m,inst_38641);
var state_38673__$1 = (function (){var statearr_38702 = state_38673;
(statearr_38702[(24)] = inst_38645);

return statearr_38702;
})();
var statearr_38703_38776 = state_38673__$1;
(statearr_38703_38776[(2)] = inst_38646);

(statearr_38703_38776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (33))){
var inst_38632 = (state_38673[(25)]);
var inst_38634 = cljs.core.chunked_seq_QMARK_.call(null,inst_38632);
var state_38673__$1 = state_38673;
if(inst_38634){
var statearr_38704_38777 = state_38673__$1;
(statearr_38704_38777[(1)] = (36));

} else {
var statearr_38705_38778 = state_38673__$1;
(statearr_38705_38778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (13))){
var inst_38564 = (state_38673[(26)]);
var inst_38567 = cljs.core.async.close_BANG_.call(null,inst_38564);
var state_38673__$1 = state_38673;
var statearr_38706_38779 = state_38673__$1;
(statearr_38706_38779[(2)] = inst_38567);

(statearr_38706_38779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (22))){
var inst_38585 = (state_38673[(8)]);
var inst_38588 = cljs.core.async.close_BANG_.call(null,inst_38585);
var state_38673__$1 = state_38673;
var statearr_38707_38780 = state_38673__$1;
(statearr_38707_38780[(2)] = inst_38588);

(statearr_38707_38780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (36))){
var inst_38632 = (state_38673[(25)]);
var inst_38636 = cljs.core.chunk_first.call(null,inst_38632);
var inst_38637 = cljs.core.chunk_rest.call(null,inst_38632);
var inst_38638 = cljs.core.count.call(null,inst_38636);
var inst_38613 = inst_38637;
var inst_38614 = inst_38636;
var inst_38615 = inst_38638;
var inst_38616 = (0);
var state_38673__$1 = (function (){var statearr_38708 = state_38673;
(statearr_38708[(20)] = inst_38615);

(statearr_38708[(10)] = inst_38614);

(statearr_38708[(21)] = inst_38613);

(statearr_38708[(11)] = inst_38616);

return statearr_38708;
})();
var statearr_38709_38781 = state_38673__$1;
(statearr_38709_38781[(2)] = null);

(statearr_38709_38781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (41))){
var inst_38632 = (state_38673[(25)]);
var inst_38648 = (state_38673[(2)]);
var inst_38649 = cljs.core.next.call(null,inst_38632);
var inst_38613 = inst_38649;
var inst_38614 = null;
var inst_38615 = (0);
var inst_38616 = (0);
var state_38673__$1 = (function (){var statearr_38710 = state_38673;
(statearr_38710[(27)] = inst_38648);

(statearr_38710[(20)] = inst_38615);

(statearr_38710[(10)] = inst_38614);

(statearr_38710[(21)] = inst_38613);

(statearr_38710[(11)] = inst_38616);

return statearr_38710;
})();
var statearr_38711_38782 = state_38673__$1;
(statearr_38711_38782[(2)] = null);

(statearr_38711_38782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (43))){
var state_38673__$1 = state_38673;
var statearr_38712_38783 = state_38673__$1;
(statearr_38712_38783[(2)] = null);

(statearr_38712_38783[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (29))){
var inst_38657 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38713_38784 = state_38673__$1;
(statearr_38713_38784[(2)] = inst_38657);

(statearr_38713_38784[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (44))){
var inst_38666 = (state_38673[(2)]);
var state_38673__$1 = (function (){var statearr_38714 = state_38673;
(statearr_38714[(28)] = inst_38666);

return statearr_38714;
})();
var statearr_38715_38785 = state_38673__$1;
(statearr_38715_38785[(2)] = null);

(statearr_38715_38785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (6))){
var inst_38605 = (state_38673[(29)]);
var inst_38604 = cljs.core.deref.call(null,cs);
var inst_38605__$1 = cljs.core.keys.call(null,inst_38604);
var inst_38606 = cljs.core.count.call(null,inst_38605__$1);
var inst_38607 = cljs.core.reset_BANG_.call(null,dctr,inst_38606);
var inst_38612 = cljs.core.seq.call(null,inst_38605__$1);
var inst_38613 = inst_38612;
var inst_38614 = null;
var inst_38615 = (0);
var inst_38616 = (0);
var state_38673__$1 = (function (){var statearr_38716 = state_38673;
(statearr_38716[(20)] = inst_38615);

(statearr_38716[(30)] = inst_38607);

(statearr_38716[(10)] = inst_38614);

(statearr_38716[(29)] = inst_38605__$1);

(statearr_38716[(21)] = inst_38613);

(statearr_38716[(11)] = inst_38616);

return statearr_38716;
})();
var statearr_38717_38786 = state_38673__$1;
(statearr_38717_38786[(2)] = null);

(statearr_38717_38786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (28))){
var inst_38632 = (state_38673[(25)]);
var inst_38613 = (state_38673[(21)]);
var inst_38632__$1 = cljs.core.seq.call(null,inst_38613);
var state_38673__$1 = (function (){var statearr_38718 = state_38673;
(statearr_38718[(25)] = inst_38632__$1);

return statearr_38718;
})();
if(inst_38632__$1){
var statearr_38719_38787 = state_38673__$1;
(statearr_38719_38787[(1)] = (33));

} else {
var statearr_38720_38788 = state_38673__$1;
(statearr_38720_38788[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (25))){
var inst_38615 = (state_38673[(20)]);
var inst_38616 = (state_38673[(11)]);
var inst_38618 = (inst_38616 < inst_38615);
var inst_38619 = inst_38618;
var state_38673__$1 = state_38673;
if(cljs.core.truth_(inst_38619)){
var statearr_38721_38789 = state_38673__$1;
(statearr_38721_38789[(1)] = (27));

} else {
var statearr_38722_38790 = state_38673__$1;
(statearr_38722_38790[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (34))){
var state_38673__$1 = state_38673;
var statearr_38723_38791 = state_38673__$1;
(statearr_38723_38791[(2)] = null);

(statearr_38723_38791[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (17))){
var state_38673__$1 = state_38673;
var statearr_38724_38792 = state_38673__$1;
(statearr_38724_38792[(2)] = null);

(statearr_38724_38792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (3))){
var inst_38671 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38673__$1,inst_38671);
} else {
if((state_val_38674 === (12))){
var inst_38600 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38725_38793 = state_38673__$1;
(statearr_38725_38793[(2)] = inst_38600);

(statearr_38725_38793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (2))){
var state_38673__$1 = state_38673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38673__$1,(4),ch);
} else {
if((state_val_38674 === (23))){
var state_38673__$1 = state_38673;
var statearr_38726_38794 = state_38673__$1;
(statearr_38726_38794[(2)] = null);

(statearr_38726_38794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (35))){
var inst_38655 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38727_38795 = state_38673__$1;
(statearr_38727_38795[(2)] = inst_38655);

(statearr_38727_38795[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (19))){
var inst_38574 = (state_38673[(7)]);
var inst_38578 = cljs.core.chunk_first.call(null,inst_38574);
var inst_38579 = cljs.core.chunk_rest.call(null,inst_38574);
var inst_38580 = cljs.core.count.call(null,inst_38578);
var inst_38554 = inst_38579;
var inst_38555 = inst_38578;
var inst_38556 = inst_38580;
var inst_38557 = (0);
var state_38673__$1 = (function (){var statearr_38728 = state_38673;
(statearr_38728[(14)] = inst_38556);

(statearr_38728[(15)] = inst_38557);

(statearr_38728[(16)] = inst_38555);

(statearr_38728[(17)] = inst_38554);

return statearr_38728;
})();
var statearr_38729_38796 = state_38673__$1;
(statearr_38729_38796[(2)] = null);

(statearr_38729_38796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (11))){
var inst_38574 = (state_38673[(7)]);
var inst_38554 = (state_38673[(17)]);
var inst_38574__$1 = cljs.core.seq.call(null,inst_38554);
var state_38673__$1 = (function (){var statearr_38730 = state_38673;
(statearr_38730[(7)] = inst_38574__$1);

return statearr_38730;
})();
if(inst_38574__$1){
var statearr_38731_38797 = state_38673__$1;
(statearr_38731_38797[(1)] = (16));

} else {
var statearr_38732_38798 = state_38673__$1;
(statearr_38732_38798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (9))){
var inst_38602 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38733_38799 = state_38673__$1;
(statearr_38733_38799[(2)] = inst_38602);

(statearr_38733_38799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (5))){
var inst_38552 = cljs.core.deref.call(null,cs);
var inst_38553 = cljs.core.seq.call(null,inst_38552);
var inst_38554 = inst_38553;
var inst_38555 = null;
var inst_38556 = (0);
var inst_38557 = (0);
var state_38673__$1 = (function (){var statearr_38734 = state_38673;
(statearr_38734[(14)] = inst_38556);

(statearr_38734[(15)] = inst_38557);

(statearr_38734[(16)] = inst_38555);

(statearr_38734[(17)] = inst_38554);

return statearr_38734;
})();
var statearr_38735_38800 = state_38673__$1;
(statearr_38735_38800[(2)] = null);

(statearr_38735_38800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (14))){
var state_38673__$1 = state_38673;
var statearr_38736_38801 = state_38673__$1;
(statearr_38736_38801[(2)] = null);

(statearr_38736_38801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (45))){
var inst_38663 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38737_38802 = state_38673__$1;
(statearr_38737_38802[(2)] = inst_38663);

(statearr_38737_38802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (26))){
var inst_38605 = (state_38673[(29)]);
var inst_38659 = (state_38673[(2)]);
var inst_38660 = cljs.core.seq.call(null,inst_38605);
var state_38673__$1 = (function (){var statearr_38738 = state_38673;
(statearr_38738[(31)] = inst_38659);

return statearr_38738;
})();
if(inst_38660){
var statearr_38739_38803 = state_38673__$1;
(statearr_38739_38803[(1)] = (42));

} else {
var statearr_38740_38804 = state_38673__$1;
(statearr_38740_38804[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (16))){
var inst_38574 = (state_38673[(7)]);
var inst_38576 = cljs.core.chunked_seq_QMARK_.call(null,inst_38574);
var state_38673__$1 = state_38673;
if(inst_38576){
var statearr_38741_38805 = state_38673__$1;
(statearr_38741_38805[(1)] = (19));

} else {
var statearr_38742_38806 = state_38673__$1;
(statearr_38742_38806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (38))){
var inst_38652 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38743_38807 = state_38673__$1;
(statearr_38743_38807[(2)] = inst_38652);

(statearr_38743_38807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (30))){
var state_38673__$1 = state_38673;
var statearr_38744_38808 = state_38673__$1;
(statearr_38744_38808[(2)] = null);

(statearr_38744_38808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (10))){
var inst_38557 = (state_38673[(15)]);
var inst_38555 = (state_38673[(16)]);
var inst_38563 = cljs.core._nth.call(null,inst_38555,inst_38557);
var inst_38564 = cljs.core.nth.call(null,inst_38563,(0),null);
var inst_38565 = cljs.core.nth.call(null,inst_38563,(1),null);
var state_38673__$1 = (function (){var statearr_38745 = state_38673;
(statearr_38745[(26)] = inst_38564);

return statearr_38745;
})();
if(cljs.core.truth_(inst_38565)){
var statearr_38746_38809 = state_38673__$1;
(statearr_38746_38809[(1)] = (13));

} else {
var statearr_38747_38810 = state_38673__$1;
(statearr_38747_38810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (18))){
var inst_38598 = (state_38673[(2)]);
var state_38673__$1 = state_38673;
var statearr_38748_38811 = state_38673__$1;
(statearr_38748_38811[(2)] = inst_38598);

(statearr_38748_38811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (42))){
var state_38673__$1 = state_38673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38673__$1,(45),dchan);
} else {
if((state_val_38674 === (37))){
var inst_38545 = (state_38673[(9)]);
var inst_38632 = (state_38673[(25)]);
var inst_38641 = (state_38673[(23)]);
var inst_38641__$1 = cljs.core.first.call(null,inst_38632);
var inst_38642 = cljs.core.async.put_BANG_.call(null,inst_38641__$1,inst_38545,done);
var state_38673__$1 = (function (){var statearr_38749 = state_38673;
(statearr_38749[(23)] = inst_38641__$1);

return statearr_38749;
})();
if(cljs.core.truth_(inst_38642)){
var statearr_38750_38812 = state_38673__$1;
(statearr_38750_38812[(1)] = (39));

} else {
var statearr_38751_38813 = state_38673__$1;
(statearr_38751_38813[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38674 === (8))){
var inst_38556 = (state_38673[(14)]);
var inst_38557 = (state_38673[(15)]);
var inst_38559 = (inst_38557 < inst_38556);
var inst_38560 = inst_38559;
var state_38673__$1 = state_38673;
if(cljs.core.truth_(inst_38560)){
var statearr_38752_38814 = state_38673__$1;
(statearr_38752_38814[(1)] = (10));

} else {
var statearr_38753_38815 = state_38673__$1;
(statearr_38753_38815[(1)] = (11));

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
});})(c__6555__auto___38761,cs,m,dchan,dctr,done))
;
return ((function (switch__6493__auto__,c__6555__auto___38761,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6494__auto__ = null;
var cljs$core$async$mult_$_state_machine__6494__auto____0 = (function (){
var statearr_38757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38757[(0)] = cljs$core$async$mult_$_state_machine__6494__auto__);

(statearr_38757[(1)] = (1));

return statearr_38757;
});
var cljs$core$async$mult_$_state_machine__6494__auto____1 = (function (state_38673){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_38673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e38758){if((e38758 instanceof Object)){
var ex__6497__auto__ = e38758;
var statearr_38759_38816 = state_38673;
(statearr_38759_38816[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38817 = state_38673;
state_38673 = G__38817;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6494__auto__ = function(state_38673){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6494__auto____1.call(this,state_38673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6494__auto____0;
cljs$core$async$mult_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6494__auto____1;
return cljs$core$async$mult_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___38761,cs,m,dchan,dctr,done))
})();
var state__6557__auto__ = (function (){var statearr_38760 = f__6556__auto__.call(null);
(statearr_38760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___38761);

return statearr_38760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___38761,cs,m,dchan,dctr,done))
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
var G__38819 = arguments.length;
switch (G__38819) {
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

cljs.core.async.Mix = (function (){var obj38822 = {};
return obj38822;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38827){
var map__38828 = p__38827;
var map__38828__$1 = ((cljs.core.seq_QMARK_.call(null,map__38828))?cljs.core.apply.call(null,cljs.core.hash_map,map__38828):map__38828);
var opts = map__38828__$1;
var statearr_38829_38832 = state;
(statearr_38829_38832[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__38828,map__38828__$1,opts){
return (function (val){
var statearr_38830_38833 = state;
(statearr_38830_38833[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38828,map__38828__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_38831_38834 = state;
(statearr_38831_38834[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38823){
var G__38824 = cljs.core.first.call(null,seq38823);
var seq38823__$1 = cljs.core.next.call(null,seq38823);
var G__38825 = cljs.core.first.call(null,seq38823__$1);
var seq38823__$2 = cljs.core.next.call(null,seq38823__$1);
var G__38826 = cljs.core.first.call(null,seq38823__$2);
var seq38823__$3 = cljs.core.next.call(null,seq38823__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38824,G__38825,G__38826,seq38823__$3);
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
if(typeof cljs.core.async.t38954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38954 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38955){
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
this.meta38955 = meta38955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38954.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t38954.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38956){
var self__ = this;
var _38956__$1 = this;
return self__.meta38955;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38956,meta38955__$1){
var self__ = this;
var _38956__$1 = this;
return (new cljs.core.async.t38954(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38955__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38954.cljs$lang$type = true;

cljs.core.async.t38954.cljs$lang$ctorStr = "cljs.core.async/t38954";

cljs.core.async.t38954.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t38954");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t38954 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t38954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38955){
return (new cljs.core.async.t38954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38955));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t38954(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6555__auto___39073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39026){
var state_val_39027 = (state_39026[(1)]);
if((state_val_39027 === (7))){
var inst_38970 = (state_39026[(7)]);
var inst_38975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38970);
var state_39026__$1 = state_39026;
var statearr_39028_39074 = state_39026__$1;
(statearr_39028_39074[(2)] = inst_38975);

(statearr_39028_39074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (20))){
var inst_38985 = (state_39026[(8)]);
var state_39026__$1 = state_39026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39026__$1,(23),out,inst_38985);
} else {
if((state_val_39027 === (1))){
var inst_38960 = (state_39026[(9)]);
var inst_38960__$1 = calc_state.call(null);
var inst_38961 = cljs.core.seq_QMARK_.call(null,inst_38960__$1);
var state_39026__$1 = (function (){var statearr_39029 = state_39026;
(statearr_39029[(9)] = inst_38960__$1);

return statearr_39029;
})();
if(inst_38961){
var statearr_39030_39075 = state_39026__$1;
(statearr_39030_39075[(1)] = (2));

} else {
var statearr_39031_39076 = state_39026__$1;
(statearr_39031_39076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (24))){
var inst_38978 = (state_39026[(10)]);
var inst_38970 = inst_38978;
var state_39026__$1 = (function (){var statearr_39032 = state_39026;
(statearr_39032[(7)] = inst_38970);

return statearr_39032;
})();
var statearr_39033_39077 = state_39026__$1;
(statearr_39033_39077[(2)] = null);

(statearr_39033_39077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (4))){
var inst_38960 = (state_39026[(9)]);
var inst_38966 = (state_39026[(2)]);
var inst_38967 = cljs.core.get.call(null,inst_38966,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38968 = cljs.core.get.call(null,inst_38966,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38969 = cljs.core.get.call(null,inst_38966,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38970 = inst_38960;
var state_39026__$1 = (function (){var statearr_39034 = state_39026;
(statearr_39034[(11)] = inst_38969);

(statearr_39034[(12)] = inst_38968);

(statearr_39034[(13)] = inst_38967);

(statearr_39034[(7)] = inst_38970);

return statearr_39034;
})();
var statearr_39035_39078 = state_39026__$1;
(statearr_39035_39078[(2)] = null);

(statearr_39035_39078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (15))){
var state_39026__$1 = state_39026;
var statearr_39036_39079 = state_39026__$1;
(statearr_39036_39079[(2)] = null);

(statearr_39036_39079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (21))){
var inst_38978 = (state_39026[(10)]);
var inst_38970 = inst_38978;
var state_39026__$1 = (function (){var statearr_39037 = state_39026;
(statearr_39037[(7)] = inst_38970);

return statearr_39037;
})();
var statearr_39038_39080 = state_39026__$1;
(statearr_39038_39080[(2)] = null);

(statearr_39038_39080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (13))){
var inst_39022 = (state_39026[(2)]);
var state_39026__$1 = state_39026;
var statearr_39039_39081 = state_39026__$1;
(statearr_39039_39081[(2)] = inst_39022);

(statearr_39039_39081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (22))){
var inst_39020 = (state_39026[(2)]);
var state_39026__$1 = state_39026;
var statearr_39040_39082 = state_39026__$1;
(statearr_39040_39082[(2)] = inst_39020);

(statearr_39040_39082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (6))){
var inst_39024 = (state_39026[(2)]);
var state_39026__$1 = state_39026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39026__$1,inst_39024);
} else {
if((state_val_39027 === (25))){
var state_39026__$1 = state_39026;
var statearr_39041_39083 = state_39026__$1;
(statearr_39041_39083[(2)] = null);

(statearr_39041_39083[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (17))){
var inst_39000 = (state_39026[(14)]);
var state_39026__$1 = state_39026;
var statearr_39042_39084 = state_39026__$1;
(statearr_39042_39084[(2)] = inst_39000);

(statearr_39042_39084[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (3))){
var inst_38960 = (state_39026[(9)]);
var state_39026__$1 = state_39026;
var statearr_39043_39085 = state_39026__$1;
(statearr_39043_39085[(2)] = inst_38960);

(statearr_39043_39085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (12))){
var inst_39000 = (state_39026[(14)]);
var inst_38986 = (state_39026[(15)]);
var inst_38981 = (state_39026[(16)]);
var inst_39000__$1 = inst_38981.call(null,inst_38986);
var state_39026__$1 = (function (){var statearr_39044 = state_39026;
(statearr_39044[(14)] = inst_39000__$1);

return statearr_39044;
})();
if(cljs.core.truth_(inst_39000__$1)){
var statearr_39045_39086 = state_39026__$1;
(statearr_39045_39086[(1)] = (17));

} else {
var statearr_39046_39087 = state_39026__$1;
(statearr_39046_39087[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (2))){
var inst_38960 = (state_39026[(9)]);
var inst_38963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38960);
var state_39026__$1 = state_39026;
var statearr_39047_39088 = state_39026__$1;
(statearr_39047_39088[(2)] = inst_38963);

(statearr_39047_39088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (23))){
var inst_39011 = (state_39026[(2)]);
var state_39026__$1 = state_39026;
if(cljs.core.truth_(inst_39011)){
var statearr_39048_39089 = state_39026__$1;
(statearr_39048_39089[(1)] = (24));

} else {
var statearr_39049_39090 = state_39026__$1;
(statearr_39049_39090[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (19))){
var inst_39008 = (state_39026[(2)]);
var state_39026__$1 = state_39026;
if(cljs.core.truth_(inst_39008)){
var statearr_39050_39091 = state_39026__$1;
(statearr_39050_39091[(1)] = (20));

} else {
var statearr_39051_39092 = state_39026__$1;
(statearr_39051_39092[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (11))){
var inst_38985 = (state_39026[(8)]);
var inst_38991 = (inst_38985 == null);
var state_39026__$1 = state_39026;
if(cljs.core.truth_(inst_38991)){
var statearr_39052_39093 = state_39026__$1;
(statearr_39052_39093[(1)] = (14));

} else {
var statearr_39053_39094 = state_39026__$1;
(statearr_39053_39094[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (9))){
var inst_38978 = (state_39026[(10)]);
var inst_38978__$1 = (state_39026[(2)]);
var inst_38979 = cljs.core.get.call(null,inst_38978__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38980 = cljs.core.get.call(null,inst_38978__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38981 = cljs.core.get.call(null,inst_38978__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_39026__$1 = (function (){var statearr_39054 = state_39026;
(statearr_39054[(17)] = inst_38980);

(statearr_39054[(10)] = inst_38978__$1);

(statearr_39054[(16)] = inst_38981);

return statearr_39054;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39026__$1,(10),inst_38979);
} else {
if((state_val_39027 === (5))){
var inst_38970 = (state_39026[(7)]);
var inst_38973 = cljs.core.seq_QMARK_.call(null,inst_38970);
var state_39026__$1 = state_39026;
if(inst_38973){
var statearr_39055_39095 = state_39026__$1;
(statearr_39055_39095[(1)] = (7));

} else {
var statearr_39056_39096 = state_39026__$1;
(statearr_39056_39096[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (14))){
var inst_38986 = (state_39026[(15)]);
var inst_38993 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38986);
var state_39026__$1 = state_39026;
var statearr_39057_39097 = state_39026__$1;
(statearr_39057_39097[(2)] = inst_38993);

(statearr_39057_39097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (26))){
var inst_39016 = (state_39026[(2)]);
var state_39026__$1 = state_39026;
var statearr_39058_39098 = state_39026__$1;
(statearr_39058_39098[(2)] = inst_39016);

(statearr_39058_39098[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (16))){
var inst_38996 = (state_39026[(2)]);
var inst_38997 = calc_state.call(null);
var inst_38970 = inst_38997;
var state_39026__$1 = (function (){var statearr_39059 = state_39026;
(statearr_39059[(18)] = inst_38996);

(statearr_39059[(7)] = inst_38970);

return statearr_39059;
})();
var statearr_39060_39099 = state_39026__$1;
(statearr_39060_39099[(2)] = null);

(statearr_39060_39099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (10))){
var inst_38986 = (state_39026[(15)]);
var inst_38985 = (state_39026[(8)]);
var inst_38984 = (state_39026[(2)]);
var inst_38985__$1 = cljs.core.nth.call(null,inst_38984,(0),null);
var inst_38986__$1 = cljs.core.nth.call(null,inst_38984,(1),null);
var inst_38987 = (inst_38985__$1 == null);
var inst_38988 = cljs.core._EQ_.call(null,inst_38986__$1,change);
var inst_38989 = (inst_38987) || (inst_38988);
var state_39026__$1 = (function (){var statearr_39061 = state_39026;
(statearr_39061[(15)] = inst_38986__$1);

(statearr_39061[(8)] = inst_38985__$1);

return statearr_39061;
})();
if(cljs.core.truth_(inst_38989)){
var statearr_39062_39100 = state_39026__$1;
(statearr_39062_39100[(1)] = (11));

} else {
var statearr_39063_39101 = state_39026__$1;
(statearr_39063_39101[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (18))){
var inst_38980 = (state_39026[(17)]);
var inst_38986 = (state_39026[(15)]);
var inst_38981 = (state_39026[(16)]);
var inst_39003 = cljs.core.empty_QMARK_.call(null,inst_38981);
var inst_39004 = inst_38980.call(null,inst_38986);
var inst_39005 = cljs.core.not.call(null,inst_39004);
var inst_39006 = (inst_39003) && (inst_39005);
var state_39026__$1 = state_39026;
var statearr_39064_39102 = state_39026__$1;
(statearr_39064_39102[(2)] = inst_39006);

(statearr_39064_39102[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39027 === (8))){
var inst_38970 = (state_39026[(7)]);
var state_39026__$1 = state_39026;
var statearr_39065_39103 = state_39026__$1;
(statearr_39065_39103[(2)] = inst_38970);

(statearr_39065_39103[(1)] = (9));


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
});})(c__6555__auto___39073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6493__auto__,c__6555__auto___39073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6494__auto__ = null;
var cljs$core$async$mix_$_state_machine__6494__auto____0 = (function (){
var statearr_39069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39069[(0)] = cljs$core$async$mix_$_state_machine__6494__auto__);

(statearr_39069[(1)] = (1));

return statearr_39069;
});
var cljs$core$async$mix_$_state_machine__6494__auto____1 = (function (state_39026){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39070){if((e39070 instanceof Object)){
var ex__6497__auto__ = e39070;
var statearr_39071_39104 = state_39026;
(statearr_39071_39104[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39105 = state_39026;
state_39026 = G__39105;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6494__auto__ = function(state_39026){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6494__auto____1.call(this,state_39026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6494__auto____0;
cljs$core$async$mix_$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6494__auto____1;
return cljs$core$async$mix_$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6557__auto__ = (function (){var statearr_39072 = f__6556__auto__.call(null);
(statearr_39072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39073);

return statearr_39072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj39107 = {};
return obj39107;
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
var G__39109 = arguments.length;
switch (G__39109) {
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
var G__39113 = arguments.length;
switch (G__39113) {
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
return (function (p1__39111_SHARP_){
if(cljs.core.truth_(p1__39111_SHARP_.call(null,topic))){
return p1__39111_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39111_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4197__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t39114 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39114 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta39115){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta39115 = meta39115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39114.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t39114.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t39114.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t39114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t39114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t39114.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t39114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39116){
var self__ = this;
var _39116__$1 = this;
return self__.meta39115;
});})(mults,ensure_mult))
;

cljs.core.async.t39114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39116,meta39115__$1){
var self__ = this;
var _39116__$1 = this;
return (new cljs.core.async.t39114(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta39115__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t39114.cljs$lang$type = true;

cljs.core.async.t39114.cljs$lang$ctorStr = "cljs.core.async/t39114";

cljs.core.async.t39114.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t39114");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t39114 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t39114(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta39115){
return (new cljs.core.async.t39114(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta39115));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t39114(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6555__auto___39237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39237,mults,ensure_mult,p){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39237,mults,ensure_mult,p){
return (function (state_39188){
var state_val_39189 = (state_39188[(1)]);
if((state_val_39189 === (7))){
var inst_39184 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39190_39238 = state_39188__$1;
(statearr_39190_39238[(2)] = inst_39184);

(statearr_39190_39238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (20))){
var state_39188__$1 = state_39188;
var statearr_39191_39239 = state_39188__$1;
(statearr_39191_39239[(2)] = null);

(statearr_39191_39239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (1))){
var state_39188__$1 = state_39188;
var statearr_39192_39240 = state_39188__$1;
(statearr_39192_39240[(2)] = null);

(statearr_39192_39240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (24))){
var inst_39167 = (state_39188[(7)]);
var inst_39176 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39167);
var state_39188__$1 = state_39188;
var statearr_39193_39241 = state_39188__$1;
(statearr_39193_39241[(2)] = inst_39176);

(statearr_39193_39241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (4))){
var inst_39119 = (state_39188[(8)]);
var inst_39119__$1 = (state_39188[(2)]);
var inst_39120 = (inst_39119__$1 == null);
var state_39188__$1 = (function (){var statearr_39194 = state_39188;
(statearr_39194[(8)] = inst_39119__$1);

return statearr_39194;
})();
if(cljs.core.truth_(inst_39120)){
var statearr_39195_39242 = state_39188__$1;
(statearr_39195_39242[(1)] = (5));

} else {
var statearr_39196_39243 = state_39188__$1;
(statearr_39196_39243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (15))){
var inst_39161 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39197_39244 = state_39188__$1;
(statearr_39197_39244[(2)] = inst_39161);

(statearr_39197_39244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (21))){
var inst_39181 = (state_39188[(2)]);
var state_39188__$1 = (function (){var statearr_39198 = state_39188;
(statearr_39198[(9)] = inst_39181);

return statearr_39198;
})();
var statearr_39199_39245 = state_39188__$1;
(statearr_39199_39245[(2)] = null);

(statearr_39199_39245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (13))){
var inst_39143 = (state_39188[(10)]);
var inst_39145 = cljs.core.chunked_seq_QMARK_.call(null,inst_39143);
var state_39188__$1 = state_39188;
if(inst_39145){
var statearr_39200_39246 = state_39188__$1;
(statearr_39200_39246[(1)] = (16));

} else {
var statearr_39201_39247 = state_39188__$1;
(statearr_39201_39247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (22))){
var inst_39173 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
if(cljs.core.truth_(inst_39173)){
var statearr_39202_39248 = state_39188__$1;
(statearr_39202_39248[(1)] = (23));

} else {
var statearr_39203_39249 = state_39188__$1;
(statearr_39203_39249[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (6))){
var inst_39167 = (state_39188[(7)]);
var inst_39169 = (state_39188[(11)]);
var inst_39119 = (state_39188[(8)]);
var inst_39167__$1 = topic_fn.call(null,inst_39119);
var inst_39168 = cljs.core.deref.call(null,mults);
var inst_39169__$1 = cljs.core.get.call(null,inst_39168,inst_39167__$1);
var state_39188__$1 = (function (){var statearr_39204 = state_39188;
(statearr_39204[(7)] = inst_39167__$1);

(statearr_39204[(11)] = inst_39169__$1);

return statearr_39204;
})();
if(cljs.core.truth_(inst_39169__$1)){
var statearr_39205_39250 = state_39188__$1;
(statearr_39205_39250[(1)] = (19));

} else {
var statearr_39206_39251 = state_39188__$1;
(statearr_39206_39251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (25))){
var inst_39178 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39207_39252 = state_39188__$1;
(statearr_39207_39252[(2)] = inst_39178);

(statearr_39207_39252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (17))){
var inst_39143 = (state_39188[(10)]);
var inst_39152 = cljs.core.first.call(null,inst_39143);
var inst_39153 = cljs.core.async.muxch_STAR_.call(null,inst_39152);
var inst_39154 = cljs.core.async.close_BANG_.call(null,inst_39153);
var inst_39155 = cljs.core.next.call(null,inst_39143);
var inst_39129 = inst_39155;
var inst_39130 = null;
var inst_39131 = (0);
var inst_39132 = (0);
var state_39188__$1 = (function (){var statearr_39208 = state_39188;
(statearr_39208[(12)] = inst_39130);

(statearr_39208[(13)] = inst_39129);

(statearr_39208[(14)] = inst_39131);

(statearr_39208[(15)] = inst_39132);

(statearr_39208[(16)] = inst_39154);

return statearr_39208;
})();
var statearr_39209_39253 = state_39188__$1;
(statearr_39209_39253[(2)] = null);

(statearr_39209_39253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (3))){
var inst_39186 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39188__$1,inst_39186);
} else {
if((state_val_39189 === (12))){
var inst_39163 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39210_39254 = state_39188__$1;
(statearr_39210_39254[(2)] = inst_39163);

(statearr_39210_39254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (2))){
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39188__$1,(4),ch);
} else {
if((state_val_39189 === (23))){
var state_39188__$1 = state_39188;
var statearr_39211_39255 = state_39188__$1;
(statearr_39211_39255[(2)] = null);

(statearr_39211_39255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (19))){
var inst_39169 = (state_39188[(11)]);
var inst_39119 = (state_39188[(8)]);
var inst_39171 = cljs.core.async.muxch_STAR_.call(null,inst_39169);
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39188__$1,(22),inst_39171,inst_39119);
} else {
if((state_val_39189 === (11))){
var inst_39129 = (state_39188[(13)]);
var inst_39143 = (state_39188[(10)]);
var inst_39143__$1 = cljs.core.seq.call(null,inst_39129);
var state_39188__$1 = (function (){var statearr_39212 = state_39188;
(statearr_39212[(10)] = inst_39143__$1);

return statearr_39212;
})();
if(inst_39143__$1){
var statearr_39213_39256 = state_39188__$1;
(statearr_39213_39256[(1)] = (13));

} else {
var statearr_39214_39257 = state_39188__$1;
(statearr_39214_39257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (9))){
var inst_39165 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39215_39258 = state_39188__$1;
(statearr_39215_39258[(2)] = inst_39165);

(statearr_39215_39258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (5))){
var inst_39126 = cljs.core.deref.call(null,mults);
var inst_39127 = cljs.core.vals.call(null,inst_39126);
var inst_39128 = cljs.core.seq.call(null,inst_39127);
var inst_39129 = inst_39128;
var inst_39130 = null;
var inst_39131 = (0);
var inst_39132 = (0);
var state_39188__$1 = (function (){var statearr_39216 = state_39188;
(statearr_39216[(12)] = inst_39130);

(statearr_39216[(13)] = inst_39129);

(statearr_39216[(14)] = inst_39131);

(statearr_39216[(15)] = inst_39132);

return statearr_39216;
})();
var statearr_39217_39259 = state_39188__$1;
(statearr_39217_39259[(2)] = null);

(statearr_39217_39259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (14))){
var state_39188__$1 = state_39188;
var statearr_39221_39260 = state_39188__$1;
(statearr_39221_39260[(2)] = null);

(statearr_39221_39260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (16))){
var inst_39143 = (state_39188[(10)]);
var inst_39147 = cljs.core.chunk_first.call(null,inst_39143);
var inst_39148 = cljs.core.chunk_rest.call(null,inst_39143);
var inst_39149 = cljs.core.count.call(null,inst_39147);
var inst_39129 = inst_39148;
var inst_39130 = inst_39147;
var inst_39131 = inst_39149;
var inst_39132 = (0);
var state_39188__$1 = (function (){var statearr_39222 = state_39188;
(statearr_39222[(12)] = inst_39130);

(statearr_39222[(13)] = inst_39129);

(statearr_39222[(14)] = inst_39131);

(statearr_39222[(15)] = inst_39132);

return statearr_39222;
})();
var statearr_39223_39261 = state_39188__$1;
(statearr_39223_39261[(2)] = null);

(statearr_39223_39261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (10))){
var inst_39130 = (state_39188[(12)]);
var inst_39129 = (state_39188[(13)]);
var inst_39131 = (state_39188[(14)]);
var inst_39132 = (state_39188[(15)]);
var inst_39137 = cljs.core._nth.call(null,inst_39130,inst_39132);
var inst_39138 = cljs.core.async.muxch_STAR_.call(null,inst_39137);
var inst_39139 = cljs.core.async.close_BANG_.call(null,inst_39138);
var inst_39140 = (inst_39132 + (1));
var tmp39218 = inst_39130;
var tmp39219 = inst_39129;
var tmp39220 = inst_39131;
var inst_39129__$1 = tmp39219;
var inst_39130__$1 = tmp39218;
var inst_39131__$1 = tmp39220;
var inst_39132__$1 = inst_39140;
var state_39188__$1 = (function (){var statearr_39224 = state_39188;
(statearr_39224[(12)] = inst_39130__$1);

(statearr_39224[(13)] = inst_39129__$1);

(statearr_39224[(14)] = inst_39131__$1);

(statearr_39224[(15)] = inst_39132__$1);

(statearr_39224[(17)] = inst_39139);

return statearr_39224;
})();
var statearr_39225_39262 = state_39188__$1;
(statearr_39225_39262[(2)] = null);

(statearr_39225_39262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (18))){
var inst_39158 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39226_39263 = state_39188__$1;
(statearr_39226_39263[(2)] = inst_39158);

(statearr_39226_39263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (8))){
var inst_39131 = (state_39188[(14)]);
var inst_39132 = (state_39188[(15)]);
var inst_39134 = (inst_39132 < inst_39131);
var inst_39135 = inst_39134;
var state_39188__$1 = state_39188;
if(cljs.core.truth_(inst_39135)){
var statearr_39227_39264 = state_39188__$1;
(statearr_39227_39264[(1)] = (10));

} else {
var statearr_39228_39265 = state_39188__$1;
(statearr_39228_39265[(1)] = (11));

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
});})(c__6555__auto___39237,mults,ensure_mult,p))
;
return ((function (switch__6493__auto__,c__6555__auto___39237,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_39232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39232[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_39232[(1)] = (1));

return statearr_39232;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_39188){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39233){if((e39233 instanceof Object)){
var ex__6497__auto__ = e39233;
var statearr_39234_39266 = state_39188;
(statearr_39234_39266[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39267 = state_39188;
state_39188 = G__39267;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_39188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_39188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39237,mults,ensure_mult,p))
})();
var state__6557__auto__ = (function (){var statearr_39235 = f__6556__auto__.call(null);
(statearr_39235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39237);

return statearr_39235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39237,mults,ensure_mult,p))
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
var G__39269 = arguments.length;
switch (G__39269) {
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
var G__39272 = arguments.length;
switch (G__39272) {
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
var G__39275 = arguments.length;
switch (G__39275) {
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
var c__6555__auto___39345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39314){
var state_val_39315 = (state_39314[(1)]);
if((state_val_39315 === (7))){
var state_39314__$1 = state_39314;
var statearr_39316_39346 = state_39314__$1;
(statearr_39316_39346[(2)] = null);

(statearr_39316_39346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (1))){
var state_39314__$1 = state_39314;
var statearr_39317_39347 = state_39314__$1;
(statearr_39317_39347[(2)] = null);

(statearr_39317_39347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (4))){
var inst_39278 = (state_39314[(7)]);
var inst_39280 = (inst_39278 < cnt);
var state_39314__$1 = state_39314;
if(cljs.core.truth_(inst_39280)){
var statearr_39318_39348 = state_39314__$1;
(statearr_39318_39348[(1)] = (6));

} else {
var statearr_39319_39349 = state_39314__$1;
(statearr_39319_39349[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (15))){
var inst_39310 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
var statearr_39320_39350 = state_39314__$1;
(statearr_39320_39350[(2)] = inst_39310);

(statearr_39320_39350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (13))){
var inst_39303 = cljs.core.async.close_BANG_.call(null,out);
var state_39314__$1 = state_39314;
var statearr_39321_39351 = state_39314__$1;
(statearr_39321_39351[(2)] = inst_39303);

(statearr_39321_39351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (6))){
var state_39314__$1 = state_39314;
var statearr_39322_39352 = state_39314__$1;
(statearr_39322_39352[(2)] = null);

(statearr_39322_39352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (3))){
var inst_39312 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39314__$1,inst_39312);
} else {
if((state_val_39315 === (12))){
var inst_39300 = (state_39314[(8)]);
var inst_39300__$1 = (state_39314[(2)]);
var inst_39301 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39300__$1);
var state_39314__$1 = (function (){var statearr_39323 = state_39314;
(statearr_39323[(8)] = inst_39300__$1);

return statearr_39323;
})();
if(cljs.core.truth_(inst_39301)){
var statearr_39324_39353 = state_39314__$1;
(statearr_39324_39353[(1)] = (13));

} else {
var statearr_39325_39354 = state_39314__$1;
(statearr_39325_39354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (2))){
var inst_39277 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39278 = (0);
var state_39314__$1 = (function (){var statearr_39326 = state_39314;
(statearr_39326[(9)] = inst_39277);

(statearr_39326[(7)] = inst_39278);

return statearr_39326;
})();
var statearr_39327_39355 = state_39314__$1;
(statearr_39327_39355[(2)] = null);

(statearr_39327_39355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (11))){
var inst_39278 = (state_39314[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39314,(10),Object,null,(9));
var inst_39287 = chs__$1.call(null,inst_39278);
var inst_39288 = done.call(null,inst_39278);
var inst_39289 = cljs.core.async.take_BANG_.call(null,inst_39287,inst_39288);
var state_39314__$1 = state_39314;
var statearr_39328_39356 = state_39314__$1;
(statearr_39328_39356[(2)] = inst_39289);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (9))){
var inst_39278 = (state_39314[(7)]);
var inst_39291 = (state_39314[(2)]);
var inst_39292 = (inst_39278 + (1));
var inst_39278__$1 = inst_39292;
var state_39314__$1 = (function (){var statearr_39329 = state_39314;
(statearr_39329[(10)] = inst_39291);

(statearr_39329[(7)] = inst_39278__$1);

return statearr_39329;
})();
var statearr_39330_39357 = state_39314__$1;
(statearr_39330_39357[(2)] = null);

(statearr_39330_39357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (5))){
var inst_39298 = (state_39314[(2)]);
var state_39314__$1 = (function (){var statearr_39331 = state_39314;
(statearr_39331[(11)] = inst_39298);

return statearr_39331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39314__$1,(12),dchan);
} else {
if((state_val_39315 === (14))){
var inst_39300 = (state_39314[(8)]);
var inst_39305 = cljs.core.apply.call(null,f,inst_39300);
var state_39314__$1 = state_39314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39314__$1,(16),out,inst_39305);
} else {
if((state_val_39315 === (16))){
var inst_39307 = (state_39314[(2)]);
var state_39314__$1 = (function (){var statearr_39332 = state_39314;
(statearr_39332[(12)] = inst_39307);

return statearr_39332;
})();
var statearr_39333_39358 = state_39314__$1;
(statearr_39333_39358[(2)] = null);

(statearr_39333_39358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (10))){
var inst_39282 = (state_39314[(2)]);
var inst_39283 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39314__$1 = (function (){var statearr_39334 = state_39314;
(statearr_39334[(13)] = inst_39282);

return statearr_39334;
})();
var statearr_39335_39359 = state_39314__$1;
(statearr_39335_39359[(2)] = inst_39283);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39315 === (8))){
var inst_39296 = (state_39314[(2)]);
var state_39314__$1 = state_39314;
var statearr_39336_39360 = state_39314__$1;
(statearr_39336_39360[(2)] = inst_39296);

(statearr_39336_39360[(1)] = (5));


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
});})(c__6555__auto___39345,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6493__auto__,c__6555__auto___39345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_39340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39340[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_39340[(1)] = (1));

return statearr_39340;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_39314){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39341){if((e39341 instanceof Object)){
var ex__6497__auto__ = e39341;
var statearr_39342_39361 = state_39314;
(statearr_39342_39361[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39362 = state_39314;
state_39314 = G__39362;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_39314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_39314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39345,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6557__auto__ = (function (){var statearr_39343 = f__6556__auto__.call(null);
(statearr_39343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39345);

return statearr_39343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39345,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__39365 = arguments.length;
switch (G__39365) {
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
var c__6555__auto___39420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39420,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39420,out){
return (function (state_39395){
var state_val_39396 = (state_39395[(1)]);
if((state_val_39396 === (7))){
var inst_39374 = (state_39395[(7)]);
var inst_39375 = (state_39395[(8)]);
var inst_39374__$1 = (state_39395[(2)]);
var inst_39375__$1 = cljs.core.nth.call(null,inst_39374__$1,(0),null);
var inst_39376 = cljs.core.nth.call(null,inst_39374__$1,(1),null);
var inst_39377 = (inst_39375__$1 == null);
var state_39395__$1 = (function (){var statearr_39397 = state_39395;
(statearr_39397[(7)] = inst_39374__$1);

(statearr_39397[(9)] = inst_39376);

(statearr_39397[(8)] = inst_39375__$1);

return statearr_39397;
})();
if(cljs.core.truth_(inst_39377)){
var statearr_39398_39421 = state_39395__$1;
(statearr_39398_39421[(1)] = (8));

} else {
var statearr_39399_39422 = state_39395__$1;
(statearr_39399_39422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39396 === (1))){
var inst_39366 = cljs.core.vec.call(null,chs);
var inst_39367 = inst_39366;
var state_39395__$1 = (function (){var statearr_39400 = state_39395;
(statearr_39400[(10)] = inst_39367);

return statearr_39400;
})();
var statearr_39401_39423 = state_39395__$1;
(statearr_39401_39423[(2)] = null);

(statearr_39401_39423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39396 === (4))){
var inst_39367 = (state_39395[(10)]);
var state_39395__$1 = state_39395;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39395__$1,(7),inst_39367);
} else {
if((state_val_39396 === (6))){
var inst_39391 = (state_39395[(2)]);
var state_39395__$1 = state_39395;
var statearr_39402_39424 = state_39395__$1;
(statearr_39402_39424[(2)] = inst_39391);

(statearr_39402_39424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39396 === (3))){
var inst_39393 = (state_39395[(2)]);
var state_39395__$1 = state_39395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39395__$1,inst_39393);
} else {
if((state_val_39396 === (2))){
var inst_39367 = (state_39395[(10)]);
var inst_39369 = cljs.core.count.call(null,inst_39367);
var inst_39370 = (inst_39369 > (0));
var state_39395__$1 = state_39395;
if(cljs.core.truth_(inst_39370)){
var statearr_39404_39425 = state_39395__$1;
(statearr_39404_39425[(1)] = (4));

} else {
var statearr_39405_39426 = state_39395__$1;
(statearr_39405_39426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39396 === (11))){
var inst_39367 = (state_39395[(10)]);
var inst_39384 = (state_39395[(2)]);
var tmp39403 = inst_39367;
var inst_39367__$1 = tmp39403;
var state_39395__$1 = (function (){var statearr_39406 = state_39395;
(statearr_39406[(10)] = inst_39367__$1);

(statearr_39406[(11)] = inst_39384);

return statearr_39406;
})();
var statearr_39407_39427 = state_39395__$1;
(statearr_39407_39427[(2)] = null);

(statearr_39407_39427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39396 === (9))){
var inst_39375 = (state_39395[(8)]);
var state_39395__$1 = state_39395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39395__$1,(11),out,inst_39375);
} else {
if((state_val_39396 === (5))){
var inst_39389 = cljs.core.async.close_BANG_.call(null,out);
var state_39395__$1 = state_39395;
var statearr_39408_39428 = state_39395__$1;
(statearr_39408_39428[(2)] = inst_39389);

(statearr_39408_39428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39396 === (10))){
var inst_39387 = (state_39395[(2)]);
var state_39395__$1 = state_39395;
var statearr_39409_39429 = state_39395__$1;
(statearr_39409_39429[(2)] = inst_39387);

(statearr_39409_39429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39396 === (8))){
var inst_39374 = (state_39395[(7)]);
var inst_39376 = (state_39395[(9)]);
var inst_39367 = (state_39395[(10)]);
var inst_39375 = (state_39395[(8)]);
var inst_39379 = (function (){var c = inst_39376;
var v = inst_39375;
var vec__39372 = inst_39374;
var cs = inst_39367;
return ((function (c,v,vec__39372,cs,inst_39374,inst_39376,inst_39367,inst_39375,state_val_39396,c__6555__auto___39420,out){
return (function (p1__39363_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39363_SHARP_);
});
;})(c,v,vec__39372,cs,inst_39374,inst_39376,inst_39367,inst_39375,state_val_39396,c__6555__auto___39420,out))
})();
var inst_39380 = cljs.core.filterv.call(null,inst_39379,inst_39367);
var inst_39367__$1 = inst_39380;
var state_39395__$1 = (function (){var statearr_39410 = state_39395;
(statearr_39410[(10)] = inst_39367__$1);

return statearr_39410;
})();
var statearr_39411_39430 = state_39395__$1;
(statearr_39411_39430[(2)] = null);

(statearr_39411_39430[(1)] = (2));


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
});})(c__6555__auto___39420,out))
;
return ((function (switch__6493__auto__,c__6555__auto___39420,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_39415 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39415[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_39415[(1)] = (1));

return statearr_39415;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_39395){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39416){if((e39416 instanceof Object)){
var ex__6497__auto__ = e39416;
var statearr_39417_39431 = state_39395;
(statearr_39417_39431[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39432 = state_39395;
state_39395 = G__39432;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_39395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_39395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39420,out))
})();
var state__6557__auto__ = (function (){var statearr_39418 = f__6556__auto__.call(null);
(statearr_39418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39420);

return statearr_39418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39420,out))
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
var G__39434 = arguments.length;
switch (G__39434) {
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
var c__6555__auto___39482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39482,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39482,out){
return (function (state_39458){
var state_val_39459 = (state_39458[(1)]);
if((state_val_39459 === (7))){
var inst_39440 = (state_39458[(7)]);
var inst_39440__$1 = (state_39458[(2)]);
var inst_39441 = (inst_39440__$1 == null);
var inst_39442 = cljs.core.not.call(null,inst_39441);
var state_39458__$1 = (function (){var statearr_39460 = state_39458;
(statearr_39460[(7)] = inst_39440__$1);

return statearr_39460;
})();
if(inst_39442){
var statearr_39461_39483 = state_39458__$1;
(statearr_39461_39483[(1)] = (8));

} else {
var statearr_39462_39484 = state_39458__$1;
(statearr_39462_39484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (1))){
var inst_39435 = (0);
var state_39458__$1 = (function (){var statearr_39463 = state_39458;
(statearr_39463[(8)] = inst_39435);

return statearr_39463;
})();
var statearr_39464_39485 = state_39458__$1;
(statearr_39464_39485[(2)] = null);

(statearr_39464_39485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (4))){
var state_39458__$1 = state_39458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39458__$1,(7),ch);
} else {
if((state_val_39459 === (6))){
var inst_39453 = (state_39458[(2)]);
var state_39458__$1 = state_39458;
var statearr_39465_39486 = state_39458__$1;
(statearr_39465_39486[(2)] = inst_39453);

(statearr_39465_39486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (3))){
var inst_39455 = (state_39458[(2)]);
var inst_39456 = cljs.core.async.close_BANG_.call(null,out);
var state_39458__$1 = (function (){var statearr_39466 = state_39458;
(statearr_39466[(9)] = inst_39455);

return statearr_39466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39458__$1,inst_39456);
} else {
if((state_val_39459 === (2))){
var inst_39435 = (state_39458[(8)]);
var inst_39437 = (inst_39435 < n);
var state_39458__$1 = state_39458;
if(cljs.core.truth_(inst_39437)){
var statearr_39467_39487 = state_39458__$1;
(statearr_39467_39487[(1)] = (4));

} else {
var statearr_39468_39488 = state_39458__$1;
(statearr_39468_39488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (11))){
var inst_39435 = (state_39458[(8)]);
var inst_39445 = (state_39458[(2)]);
var inst_39446 = (inst_39435 + (1));
var inst_39435__$1 = inst_39446;
var state_39458__$1 = (function (){var statearr_39469 = state_39458;
(statearr_39469[(8)] = inst_39435__$1);

(statearr_39469[(10)] = inst_39445);

return statearr_39469;
})();
var statearr_39470_39489 = state_39458__$1;
(statearr_39470_39489[(2)] = null);

(statearr_39470_39489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (9))){
var state_39458__$1 = state_39458;
var statearr_39471_39490 = state_39458__$1;
(statearr_39471_39490[(2)] = null);

(statearr_39471_39490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (5))){
var state_39458__$1 = state_39458;
var statearr_39472_39491 = state_39458__$1;
(statearr_39472_39491[(2)] = null);

(statearr_39472_39491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (10))){
var inst_39450 = (state_39458[(2)]);
var state_39458__$1 = state_39458;
var statearr_39473_39492 = state_39458__$1;
(statearr_39473_39492[(2)] = inst_39450);

(statearr_39473_39492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39459 === (8))){
var inst_39440 = (state_39458[(7)]);
var state_39458__$1 = state_39458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39458__$1,(11),out,inst_39440);
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
});})(c__6555__auto___39482,out))
;
return ((function (switch__6493__auto__,c__6555__auto___39482,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_39477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39477[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_39477[(1)] = (1));

return statearr_39477;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_39458){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39478){if((e39478 instanceof Object)){
var ex__6497__auto__ = e39478;
var statearr_39479_39493 = state_39458;
(statearr_39479_39493[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39494 = state_39458;
state_39458 = G__39494;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_39458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_39458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39482,out))
})();
var state__6557__auto__ = (function (){var statearr_39480 = f__6556__auto__.call(null);
(statearr_39480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39482);

return statearr_39480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39482,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t39502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39502 = (function (ch,f,map_LT_,meta39503){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39503 = meta39503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39502.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t39502.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t39505 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39505 = (function (fn1,_,meta39503,map_LT_,f,ch,meta39506){
this.fn1 = fn1;
this._ = _;
this.meta39503 = meta39503;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39506 = meta39506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39505.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t39505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39495_SHARP_){
return f1.call(null,(((p1__39495_SHARP_ == null))?null:self__.f.call(null,p1__39495_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t39505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39507){
var self__ = this;
var _39507__$1 = this;
return self__.meta39506;
});})(___$1))
;

cljs.core.async.t39505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39507,meta39506__$1){
var self__ = this;
var _39507__$1 = this;
return (new cljs.core.async.t39505(self__.fn1,self__._,self__.meta39503,self__.map_LT_,self__.f,self__.ch,meta39506__$1));
});})(___$1))
;

cljs.core.async.t39505.cljs$lang$type = true;

cljs.core.async.t39505.cljs$lang$ctorStr = "cljs.core.async/t39505";

cljs.core.async.t39505.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t39505");
});})(___$1))
;

cljs.core.async.__GT_t39505 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t39505(fn1__$1,___$2,meta39503__$1,map_LT___$1,f__$1,ch__$1,meta39506){
return (new cljs.core.async.t39505(fn1__$1,___$2,meta39503__$1,map_LT___$1,f__$1,ch__$1,meta39506));
});})(___$1))
;

}

return (new cljs.core.async.t39505(fn1,___$1,self__.meta39503,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t39502.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39502.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t39502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39504){
var self__ = this;
var _39504__$1 = this;
return self__.meta39503;
});

cljs.core.async.t39502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39504,meta39503__$1){
var self__ = this;
var _39504__$1 = this;
return (new cljs.core.async.t39502(self__.ch,self__.f,self__.map_LT_,meta39503__$1));
});

cljs.core.async.t39502.cljs$lang$type = true;

cljs.core.async.t39502.cljs$lang$ctorStr = "cljs.core.async/t39502";

cljs.core.async.t39502.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t39502");
});

cljs.core.async.__GT_t39502 = (function cljs$core$async$map_LT__$___GT_t39502(ch__$1,f__$1,map_LT___$1,meta39503){
return (new cljs.core.async.t39502(ch__$1,f__$1,map_LT___$1,meta39503));
});

}

return (new cljs.core.async.t39502(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t39511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39511 = (function (ch,f,map_GT_,meta39512){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta39512 = meta39512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t39511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t39511.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39513){
var self__ = this;
var _39513__$1 = this;
return self__.meta39512;
});

cljs.core.async.t39511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39513,meta39512__$1){
var self__ = this;
var _39513__$1 = this;
return (new cljs.core.async.t39511(self__.ch,self__.f,self__.map_GT_,meta39512__$1));
});

cljs.core.async.t39511.cljs$lang$type = true;

cljs.core.async.t39511.cljs$lang$ctorStr = "cljs.core.async/t39511";

cljs.core.async.t39511.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t39511");
});

cljs.core.async.__GT_t39511 = (function cljs$core$async$map_GT__$___GT_t39511(ch__$1,f__$1,map_GT___$1,meta39512){
return (new cljs.core.async.t39511(ch__$1,f__$1,map_GT___$1,meta39512));
});

}

return (new cljs.core.async.t39511(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t39517 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39517 = (function (ch,p,filter_GT_,meta39518){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta39518 = meta39518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39517.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t39517.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t39517.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39517.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t39517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39519){
var self__ = this;
var _39519__$1 = this;
return self__.meta39518;
});

cljs.core.async.t39517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39519,meta39518__$1){
var self__ = this;
var _39519__$1 = this;
return (new cljs.core.async.t39517(self__.ch,self__.p,self__.filter_GT_,meta39518__$1));
});

cljs.core.async.t39517.cljs$lang$type = true;

cljs.core.async.t39517.cljs$lang$ctorStr = "cljs.core.async/t39517";

cljs.core.async.t39517.cljs$lang$ctorPrWriter = (function (this__4776__auto__,writer__4777__auto__,opt__4778__auto__){
return cljs.core._write.call(null,writer__4777__auto__,"cljs.core.async/t39517");
});

cljs.core.async.__GT_t39517 = (function cljs$core$async$filter_GT__$___GT_t39517(ch__$1,p__$1,filter_GT___$1,meta39518){
return (new cljs.core.async.t39517(ch__$1,p__$1,filter_GT___$1,meta39518));
});

}

return (new cljs.core.async.t39517(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39521 = arguments.length;
switch (G__39521) {
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
var c__6555__auto___39564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39564,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39564,out){
return (function (state_39542){
var state_val_39543 = (state_39542[(1)]);
if((state_val_39543 === (7))){
var inst_39538 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
var statearr_39544_39565 = state_39542__$1;
(statearr_39544_39565[(2)] = inst_39538);

(statearr_39544_39565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (1))){
var state_39542__$1 = state_39542;
var statearr_39545_39566 = state_39542__$1;
(statearr_39545_39566[(2)] = null);

(statearr_39545_39566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (4))){
var inst_39524 = (state_39542[(7)]);
var inst_39524__$1 = (state_39542[(2)]);
var inst_39525 = (inst_39524__$1 == null);
var state_39542__$1 = (function (){var statearr_39546 = state_39542;
(statearr_39546[(7)] = inst_39524__$1);

return statearr_39546;
})();
if(cljs.core.truth_(inst_39525)){
var statearr_39547_39567 = state_39542__$1;
(statearr_39547_39567[(1)] = (5));

} else {
var statearr_39548_39568 = state_39542__$1;
(statearr_39548_39568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (6))){
var inst_39524 = (state_39542[(7)]);
var inst_39529 = p.call(null,inst_39524);
var state_39542__$1 = state_39542;
if(cljs.core.truth_(inst_39529)){
var statearr_39549_39569 = state_39542__$1;
(statearr_39549_39569[(1)] = (8));

} else {
var statearr_39550_39570 = state_39542__$1;
(statearr_39550_39570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (3))){
var inst_39540 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39542__$1,inst_39540);
} else {
if((state_val_39543 === (2))){
var state_39542__$1 = state_39542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39542__$1,(4),ch);
} else {
if((state_val_39543 === (11))){
var inst_39532 = (state_39542[(2)]);
var state_39542__$1 = state_39542;
var statearr_39551_39571 = state_39542__$1;
(statearr_39551_39571[(2)] = inst_39532);

(statearr_39551_39571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (9))){
var state_39542__$1 = state_39542;
var statearr_39552_39572 = state_39542__$1;
(statearr_39552_39572[(2)] = null);

(statearr_39552_39572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (5))){
var inst_39527 = cljs.core.async.close_BANG_.call(null,out);
var state_39542__$1 = state_39542;
var statearr_39553_39573 = state_39542__$1;
(statearr_39553_39573[(2)] = inst_39527);

(statearr_39553_39573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (10))){
var inst_39535 = (state_39542[(2)]);
var state_39542__$1 = (function (){var statearr_39554 = state_39542;
(statearr_39554[(8)] = inst_39535);

return statearr_39554;
})();
var statearr_39555_39574 = state_39542__$1;
(statearr_39555_39574[(2)] = null);

(statearr_39555_39574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39543 === (8))){
var inst_39524 = (state_39542[(7)]);
var state_39542__$1 = state_39542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39542__$1,(11),out,inst_39524);
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
});})(c__6555__auto___39564,out))
;
return ((function (switch__6493__auto__,c__6555__auto___39564,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_39559 = [null,null,null,null,null,null,null,null,null];
(statearr_39559[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_39559[(1)] = (1));

return statearr_39559;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_39542){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39560){if((e39560 instanceof Object)){
var ex__6497__auto__ = e39560;
var statearr_39561_39575 = state_39542;
(statearr_39561_39575[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39576 = state_39542;
state_39542 = G__39576;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_39542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_39542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39564,out))
})();
var state__6557__auto__ = (function (){var statearr_39562 = f__6556__auto__.call(null);
(statearr_39562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39564);

return statearr_39562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39564,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__39578 = arguments.length;
switch (G__39578) {
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
return (function (state_39745){
var state_val_39746 = (state_39745[(1)]);
if((state_val_39746 === (7))){
var inst_39741 = (state_39745[(2)]);
var state_39745__$1 = state_39745;
var statearr_39747_39788 = state_39745__$1;
(statearr_39747_39788[(2)] = inst_39741);

(statearr_39747_39788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (20))){
var inst_39711 = (state_39745[(7)]);
var inst_39722 = (state_39745[(2)]);
var inst_39723 = cljs.core.next.call(null,inst_39711);
var inst_39697 = inst_39723;
var inst_39698 = null;
var inst_39699 = (0);
var inst_39700 = (0);
var state_39745__$1 = (function (){var statearr_39748 = state_39745;
(statearr_39748[(8)] = inst_39700);

(statearr_39748[(9)] = inst_39722);

(statearr_39748[(10)] = inst_39697);

(statearr_39748[(11)] = inst_39698);

(statearr_39748[(12)] = inst_39699);

return statearr_39748;
})();
var statearr_39749_39789 = state_39745__$1;
(statearr_39749_39789[(2)] = null);

(statearr_39749_39789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (1))){
var state_39745__$1 = state_39745;
var statearr_39750_39790 = state_39745__$1;
(statearr_39750_39790[(2)] = null);

(statearr_39750_39790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (4))){
var inst_39686 = (state_39745[(13)]);
var inst_39686__$1 = (state_39745[(2)]);
var inst_39687 = (inst_39686__$1 == null);
var state_39745__$1 = (function (){var statearr_39751 = state_39745;
(statearr_39751[(13)] = inst_39686__$1);

return statearr_39751;
})();
if(cljs.core.truth_(inst_39687)){
var statearr_39752_39791 = state_39745__$1;
(statearr_39752_39791[(1)] = (5));

} else {
var statearr_39753_39792 = state_39745__$1;
(statearr_39753_39792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (15))){
var state_39745__$1 = state_39745;
var statearr_39757_39793 = state_39745__$1;
(statearr_39757_39793[(2)] = null);

(statearr_39757_39793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (21))){
var state_39745__$1 = state_39745;
var statearr_39758_39794 = state_39745__$1;
(statearr_39758_39794[(2)] = null);

(statearr_39758_39794[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (13))){
var inst_39700 = (state_39745[(8)]);
var inst_39697 = (state_39745[(10)]);
var inst_39698 = (state_39745[(11)]);
var inst_39699 = (state_39745[(12)]);
var inst_39707 = (state_39745[(2)]);
var inst_39708 = (inst_39700 + (1));
var tmp39754 = inst_39697;
var tmp39755 = inst_39698;
var tmp39756 = inst_39699;
var inst_39697__$1 = tmp39754;
var inst_39698__$1 = tmp39755;
var inst_39699__$1 = tmp39756;
var inst_39700__$1 = inst_39708;
var state_39745__$1 = (function (){var statearr_39759 = state_39745;
(statearr_39759[(8)] = inst_39700__$1);

(statearr_39759[(10)] = inst_39697__$1);

(statearr_39759[(14)] = inst_39707);

(statearr_39759[(11)] = inst_39698__$1);

(statearr_39759[(12)] = inst_39699__$1);

return statearr_39759;
})();
var statearr_39760_39795 = state_39745__$1;
(statearr_39760_39795[(2)] = null);

(statearr_39760_39795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (22))){
var state_39745__$1 = state_39745;
var statearr_39761_39796 = state_39745__$1;
(statearr_39761_39796[(2)] = null);

(statearr_39761_39796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (6))){
var inst_39686 = (state_39745[(13)]);
var inst_39695 = f.call(null,inst_39686);
var inst_39696 = cljs.core.seq.call(null,inst_39695);
var inst_39697 = inst_39696;
var inst_39698 = null;
var inst_39699 = (0);
var inst_39700 = (0);
var state_39745__$1 = (function (){var statearr_39762 = state_39745;
(statearr_39762[(8)] = inst_39700);

(statearr_39762[(10)] = inst_39697);

(statearr_39762[(11)] = inst_39698);

(statearr_39762[(12)] = inst_39699);

return statearr_39762;
})();
var statearr_39763_39797 = state_39745__$1;
(statearr_39763_39797[(2)] = null);

(statearr_39763_39797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (17))){
var inst_39711 = (state_39745[(7)]);
var inst_39715 = cljs.core.chunk_first.call(null,inst_39711);
var inst_39716 = cljs.core.chunk_rest.call(null,inst_39711);
var inst_39717 = cljs.core.count.call(null,inst_39715);
var inst_39697 = inst_39716;
var inst_39698 = inst_39715;
var inst_39699 = inst_39717;
var inst_39700 = (0);
var state_39745__$1 = (function (){var statearr_39764 = state_39745;
(statearr_39764[(8)] = inst_39700);

(statearr_39764[(10)] = inst_39697);

(statearr_39764[(11)] = inst_39698);

(statearr_39764[(12)] = inst_39699);

return statearr_39764;
})();
var statearr_39765_39798 = state_39745__$1;
(statearr_39765_39798[(2)] = null);

(statearr_39765_39798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (3))){
var inst_39743 = (state_39745[(2)]);
var state_39745__$1 = state_39745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39745__$1,inst_39743);
} else {
if((state_val_39746 === (12))){
var inst_39731 = (state_39745[(2)]);
var state_39745__$1 = state_39745;
var statearr_39766_39799 = state_39745__$1;
(statearr_39766_39799[(2)] = inst_39731);

(statearr_39766_39799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (2))){
var state_39745__$1 = state_39745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39745__$1,(4),in$);
} else {
if((state_val_39746 === (23))){
var inst_39739 = (state_39745[(2)]);
var state_39745__$1 = state_39745;
var statearr_39767_39800 = state_39745__$1;
(statearr_39767_39800[(2)] = inst_39739);

(statearr_39767_39800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (19))){
var inst_39726 = (state_39745[(2)]);
var state_39745__$1 = state_39745;
var statearr_39768_39801 = state_39745__$1;
(statearr_39768_39801[(2)] = inst_39726);

(statearr_39768_39801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (11))){
var inst_39711 = (state_39745[(7)]);
var inst_39697 = (state_39745[(10)]);
var inst_39711__$1 = cljs.core.seq.call(null,inst_39697);
var state_39745__$1 = (function (){var statearr_39769 = state_39745;
(statearr_39769[(7)] = inst_39711__$1);

return statearr_39769;
})();
if(inst_39711__$1){
var statearr_39770_39802 = state_39745__$1;
(statearr_39770_39802[(1)] = (14));

} else {
var statearr_39771_39803 = state_39745__$1;
(statearr_39771_39803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (9))){
var inst_39733 = (state_39745[(2)]);
var inst_39734 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39745__$1 = (function (){var statearr_39772 = state_39745;
(statearr_39772[(15)] = inst_39733);

return statearr_39772;
})();
if(cljs.core.truth_(inst_39734)){
var statearr_39773_39804 = state_39745__$1;
(statearr_39773_39804[(1)] = (21));

} else {
var statearr_39774_39805 = state_39745__$1;
(statearr_39774_39805[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (5))){
var inst_39689 = cljs.core.async.close_BANG_.call(null,out);
var state_39745__$1 = state_39745;
var statearr_39775_39806 = state_39745__$1;
(statearr_39775_39806[(2)] = inst_39689);

(statearr_39775_39806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (14))){
var inst_39711 = (state_39745[(7)]);
var inst_39713 = cljs.core.chunked_seq_QMARK_.call(null,inst_39711);
var state_39745__$1 = state_39745;
if(inst_39713){
var statearr_39776_39807 = state_39745__$1;
(statearr_39776_39807[(1)] = (17));

} else {
var statearr_39777_39808 = state_39745__$1;
(statearr_39777_39808[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (16))){
var inst_39729 = (state_39745[(2)]);
var state_39745__$1 = state_39745;
var statearr_39778_39809 = state_39745__$1;
(statearr_39778_39809[(2)] = inst_39729);

(statearr_39778_39809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39746 === (10))){
var inst_39700 = (state_39745[(8)]);
var inst_39698 = (state_39745[(11)]);
var inst_39705 = cljs.core._nth.call(null,inst_39698,inst_39700);
var state_39745__$1 = state_39745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39745__$1,(13),out,inst_39705);
} else {
if((state_val_39746 === (18))){
var inst_39711 = (state_39745[(7)]);
var inst_39720 = cljs.core.first.call(null,inst_39711);
var state_39745__$1 = state_39745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39745__$1,(20),out,inst_39720);
} else {
if((state_val_39746 === (8))){
var inst_39700 = (state_39745[(8)]);
var inst_39699 = (state_39745[(12)]);
var inst_39702 = (inst_39700 < inst_39699);
var inst_39703 = inst_39702;
var state_39745__$1 = state_39745;
if(cljs.core.truth_(inst_39703)){
var statearr_39779_39810 = state_39745__$1;
(statearr_39779_39810[(1)] = (10));

} else {
var statearr_39780_39811 = state_39745__$1;
(statearr_39780_39811[(1)] = (11));

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
var statearr_39784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39784[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__);

(statearr_39784[(1)] = (1));

return statearr_39784;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____1 = (function (state_39745){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39785){if((e39785 instanceof Object)){
var ex__6497__auto__ = e39785;
var statearr_39786_39812 = state_39745;
(statearr_39786_39812[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39813 = state_39745;
state_39745 = G__39813;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__ = function(state_39745){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____1.call(this,state_39745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6494__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto__))
})();
var state__6557__auto__ = (function (){var statearr_39787 = f__6556__auto__.call(null);
(statearr_39787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto__);

return statearr_39787;
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
var G__39815 = arguments.length;
switch (G__39815) {
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
var G__39818 = arguments.length;
switch (G__39818) {
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
var G__39821 = arguments.length;
switch (G__39821) {
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
var c__6555__auto___39871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39871,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39871,out){
return (function (state_39845){
var state_val_39846 = (state_39845[(1)]);
if((state_val_39846 === (7))){
var inst_39840 = (state_39845[(2)]);
var state_39845__$1 = state_39845;
var statearr_39847_39872 = state_39845__$1;
(statearr_39847_39872[(2)] = inst_39840);

(statearr_39847_39872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (1))){
var inst_39822 = null;
var state_39845__$1 = (function (){var statearr_39848 = state_39845;
(statearr_39848[(7)] = inst_39822);

return statearr_39848;
})();
var statearr_39849_39873 = state_39845__$1;
(statearr_39849_39873[(2)] = null);

(statearr_39849_39873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (4))){
var inst_39825 = (state_39845[(8)]);
var inst_39825__$1 = (state_39845[(2)]);
var inst_39826 = (inst_39825__$1 == null);
var inst_39827 = cljs.core.not.call(null,inst_39826);
var state_39845__$1 = (function (){var statearr_39850 = state_39845;
(statearr_39850[(8)] = inst_39825__$1);

return statearr_39850;
})();
if(inst_39827){
var statearr_39851_39874 = state_39845__$1;
(statearr_39851_39874[(1)] = (5));

} else {
var statearr_39852_39875 = state_39845__$1;
(statearr_39852_39875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (6))){
var state_39845__$1 = state_39845;
var statearr_39853_39876 = state_39845__$1;
(statearr_39853_39876[(2)] = null);

(statearr_39853_39876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (3))){
var inst_39842 = (state_39845[(2)]);
var inst_39843 = cljs.core.async.close_BANG_.call(null,out);
var state_39845__$1 = (function (){var statearr_39854 = state_39845;
(statearr_39854[(9)] = inst_39842);

return statearr_39854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39845__$1,inst_39843);
} else {
if((state_val_39846 === (2))){
var state_39845__$1 = state_39845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39845__$1,(4),ch);
} else {
if((state_val_39846 === (11))){
var inst_39825 = (state_39845[(8)]);
var inst_39834 = (state_39845[(2)]);
var inst_39822 = inst_39825;
var state_39845__$1 = (function (){var statearr_39855 = state_39845;
(statearr_39855[(7)] = inst_39822);

(statearr_39855[(10)] = inst_39834);

return statearr_39855;
})();
var statearr_39856_39877 = state_39845__$1;
(statearr_39856_39877[(2)] = null);

(statearr_39856_39877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (9))){
var inst_39825 = (state_39845[(8)]);
var state_39845__$1 = state_39845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39845__$1,(11),out,inst_39825);
} else {
if((state_val_39846 === (5))){
var inst_39822 = (state_39845[(7)]);
var inst_39825 = (state_39845[(8)]);
var inst_39829 = cljs.core._EQ_.call(null,inst_39825,inst_39822);
var state_39845__$1 = state_39845;
if(inst_39829){
var statearr_39858_39878 = state_39845__$1;
(statearr_39858_39878[(1)] = (8));

} else {
var statearr_39859_39879 = state_39845__$1;
(statearr_39859_39879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (10))){
var inst_39837 = (state_39845[(2)]);
var state_39845__$1 = state_39845;
var statearr_39860_39880 = state_39845__$1;
(statearr_39860_39880[(2)] = inst_39837);

(statearr_39860_39880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39846 === (8))){
var inst_39822 = (state_39845[(7)]);
var tmp39857 = inst_39822;
var inst_39822__$1 = tmp39857;
var state_39845__$1 = (function (){var statearr_39861 = state_39845;
(statearr_39861[(7)] = inst_39822__$1);

return statearr_39861;
})();
var statearr_39862_39881 = state_39845__$1;
(statearr_39862_39881[(2)] = null);

(statearr_39862_39881[(1)] = (2));


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
});})(c__6555__auto___39871,out))
;
return ((function (switch__6493__auto__,c__6555__auto___39871,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_39866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39866[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_39866[(1)] = (1));

return statearr_39866;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_39845){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39867){if((e39867 instanceof Object)){
var ex__6497__auto__ = e39867;
var statearr_39868_39882 = state_39845;
(statearr_39868_39882[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39883 = state_39845;
state_39845 = G__39883;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_39845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_39845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39871,out))
})();
var state__6557__auto__ = (function (){var statearr_39869 = f__6556__auto__.call(null);
(statearr_39869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39871);

return statearr_39869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39871,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__39885 = arguments.length;
switch (G__39885) {
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
var c__6555__auto___39954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___39954,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___39954,out){
return (function (state_39923){
var state_val_39924 = (state_39923[(1)]);
if((state_val_39924 === (7))){
var inst_39919 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39925_39955 = state_39923__$1;
(statearr_39925_39955[(2)] = inst_39919);

(statearr_39925_39955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (1))){
var inst_39886 = (new Array(n));
var inst_39887 = inst_39886;
var inst_39888 = (0);
var state_39923__$1 = (function (){var statearr_39926 = state_39923;
(statearr_39926[(7)] = inst_39888);

(statearr_39926[(8)] = inst_39887);

return statearr_39926;
})();
var statearr_39927_39956 = state_39923__$1;
(statearr_39927_39956[(2)] = null);

(statearr_39927_39956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (4))){
var inst_39891 = (state_39923[(9)]);
var inst_39891__$1 = (state_39923[(2)]);
var inst_39892 = (inst_39891__$1 == null);
var inst_39893 = cljs.core.not.call(null,inst_39892);
var state_39923__$1 = (function (){var statearr_39928 = state_39923;
(statearr_39928[(9)] = inst_39891__$1);

return statearr_39928;
})();
if(inst_39893){
var statearr_39929_39957 = state_39923__$1;
(statearr_39929_39957[(1)] = (5));

} else {
var statearr_39930_39958 = state_39923__$1;
(statearr_39930_39958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (15))){
var inst_39913 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39931_39959 = state_39923__$1;
(statearr_39931_39959[(2)] = inst_39913);

(statearr_39931_39959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (13))){
var state_39923__$1 = state_39923;
var statearr_39932_39960 = state_39923__$1;
(statearr_39932_39960[(2)] = null);

(statearr_39932_39960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (6))){
var inst_39888 = (state_39923[(7)]);
var inst_39909 = (inst_39888 > (0));
var state_39923__$1 = state_39923;
if(cljs.core.truth_(inst_39909)){
var statearr_39933_39961 = state_39923__$1;
(statearr_39933_39961[(1)] = (12));

} else {
var statearr_39934_39962 = state_39923__$1;
(statearr_39934_39962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (3))){
var inst_39921 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39923__$1,inst_39921);
} else {
if((state_val_39924 === (12))){
var inst_39887 = (state_39923[(8)]);
var inst_39911 = cljs.core.vec.call(null,inst_39887);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39923__$1,(15),out,inst_39911);
} else {
if((state_val_39924 === (2))){
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39923__$1,(4),ch);
} else {
if((state_val_39924 === (11))){
var inst_39903 = (state_39923[(2)]);
var inst_39904 = (new Array(n));
var inst_39887 = inst_39904;
var inst_39888 = (0);
var state_39923__$1 = (function (){var statearr_39935 = state_39923;
(statearr_39935[(10)] = inst_39903);

(statearr_39935[(7)] = inst_39888);

(statearr_39935[(8)] = inst_39887);

return statearr_39935;
})();
var statearr_39936_39963 = state_39923__$1;
(statearr_39936_39963[(2)] = null);

(statearr_39936_39963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (9))){
var inst_39887 = (state_39923[(8)]);
var inst_39901 = cljs.core.vec.call(null,inst_39887);
var state_39923__$1 = state_39923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39923__$1,(11),out,inst_39901);
} else {
if((state_val_39924 === (5))){
var inst_39891 = (state_39923[(9)]);
var inst_39896 = (state_39923[(11)]);
var inst_39888 = (state_39923[(7)]);
var inst_39887 = (state_39923[(8)]);
var inst_39895 = (inst_39887[inst_39888] = inst_39891);
var inst_39896__$1 = (inst_39888 + (1));
var inst_39897 = (inst_39896__$1 < n);
var state_39923__$1 = (function (){var statearr_39937 = state_39923;
(statearr_39937[(11)] = inst_39896__$1);

(statearr_39937[(12)] = inst_39895);

return statearr_39937;
})();
if(cljs.core.truth_(inst_39897)){
var statearr_39938_39964 = state_39923__$1;
(statearr_39938_39964[(1)] = (8));

} else {
var statearr_39939_39965 = state_39923__$1;
(statearr_39939_39965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (14))){
var inst_39916 = (state_39923[(2)]);
var inst_39917 = cljs.core.async.close_BANG_.call(null,out);
var state_39923__$1 = (function (){var statearr_39941 = state_39923;
(statearr_39941[(13)] = inst_39916);

return statearr_39941;
})();
var statearr_39942_39966 = state_39923__$1;
(statearr_39942_39966[(2)] = inst_39917);

(statearr_39942_39966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (10))){
var inst_39907 = (state_39923[(2)]);
var state_39923__$1 = state_39923;
var statearr_39943_39967 = state_39923__$1;
(statearr_39943_39967[(2)] = inst_39907);

(statearr_39943_39967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39924 === (8))){
var inst_39896 = (state_39923[(11)]);
var inst_39887 = (state_39923[(8)]);
var tmp39940 = inst_39887;
var inst_39887__$1 = tmp39940;
var inst_39888 = inst_39896;
var state_39923__$1 = (function (){var statearr_39944 = state_39923;
(statearr_39944[(7)] = inst_39888);

(statearr_39944[(8)] = inst_39887__$1);

return statearr_39944;
})();
var statearr_39945_39968 = state_39923__$1;
(statearr_39945_39968[(2)] = null);

(statearr_39945_39968[(1)] = (2));


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
});})(c__6555__auto___39954,out))
;
return ((function (switch__6493__auto__,c__6555__auto___39954,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_39949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39949[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_39949[(1)] = (1));

return statearr_39949;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_39923){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_39923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e39950){if((e39950 instanceof Object)){
var ex__6497__auto__ = e39950;
var statearr_39951_39969 = state_39923;
(statearr_39951_39969[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39970 = state_39923;
state_39923 = G__39970;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_39923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_39923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___39954,out))
})();
var state__6557__auto__ = (function (){var statearr_39952 = f__6556__auto__.call(null);
(statearr_39952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___39954);

return statearr_39952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___39954,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__39972 = arguments.length;
switch (G__39972) {
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
var c__6555__auto___40045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6555__auto___40045,out){
return (function (){
var f__6556__auto__ = (function (){var switch__6493__auto__ = ((function (c__6555__auto___40045,out){
return (function (state_40014){
var state_val_40015 = (state_40014[(1)]);
if((state_val_40015 === (7))){
var inst_40010 = (state_40014[(2)]);
var state_40014__$1 = state_40014;
var statearr_40016_40046 = state_40014__$1;
(statearr_40016_40046[(2)] = inst_40010);

(statearr_40016_40046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (1))){
var inst_39973 = [];
var inst_39974 = inst_39973;
var inst_39975 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40014__$1 = (function (){var statearr_40017 = state_40014;
(statearr_40017[(7)] = inst_39975);

(statearr_40017[(8)] = inst_39974);

return statearr_40017;
})();
var statearr_40018_40047 = state_40014__$1;
(statearr_40018_40047[(2)] = null);

(statearr_40018_40047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (4))){
var inst_39978 = (state_40014[(9)]);
var inst_39978__$1 = (state_40014[(2)]);
var inst_39979 = (inst_39978__$1 == null);
var inst_39980 = cljs.core.not.call(null,inst_39979);
var state_40014__$1 = (function (){var statearr_40019 = state_40014;
(statearr_40019[(9)] = inst_39978__$1);

return statearr_40019;
})();
if(inst_39980){
var statearr_40020_40048 = state_40014__$1;
(statearr_40020_40048[(1)] = (5));

} else {
var statearr_40021_40049 = state_40014__$1;
(statearr_40021_40049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (15))){
var inst_40004 = (state_40014[(2)]);
var state_40014__$1 = state_40014;
var statearr_40022_40050 = state_40014__$1;
(statearr_40022_40050[(2)] = inst_40004);

(statearr_40022_40050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (13))){
var state_40014__$1 = state_40014;
var statearr_40023_40051 = state_40014__$1;
(statearr_40023_40051[(2)] = null);

(statearr_40023_40051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (6))){
var inst_39974 = (state_40014[(8)]);
var inst_39999 = inst_39974.length;
var inst_40000 = (inst_39999 > (0));
var state_40014__$1 = state_40014;
if(cljs.core.truth_(inst_40000)){
var statearr_40024_40052 = state_40014__$1;
(statearr_40024_40052[(1)] = (12));

} else {
var statearr_40025_40053 = state_40014__$1;
(statearr_40025_40053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (3))){
var inst_40012 = (state_40014[(2)]);
var state_40014__$1 = state_40014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40014__$1,inst_40012);
} else {
if((state_val_40015 === (12))){
var inst_39974 = (state_40014[(8)]);
var inst_40002 = cljs.core.vec.call(null,inst_39974);
var state_40014__$1 = state_40014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40014__$1,(15),out,inst_40002);
} else {
if((state_val_40015 === (2))){
var state_40014__$1 = state_40014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40014__$1,(4),ch);
} else {
if((state_val_40015 === (11))){
var inst_39978 = (state_40014[(9)]);
var inst_39982 = (state_40014[(10)]);
var inst_39992 = (state_40014[(2)]);
var inst_39993 = [];
var inst_39994 = inst_39993.push(inst_39978);
var inst_39974 = inst_39993;
var inst_39975 = inst_39982;
var state_40014__$1 = (function (){var statearr_40026 = state_40014;
(statearr_40026[(7)] = inst_39975);

(statearr_40026[(11)] = inst_39992);

(statearr_40026[(12)] = inst_39994);

(statearr_40026[(8)] = inst_39974);

return statearr_40026;
})();
var statearr_40027_40054 = state_40014__$1;
(statearr_40027_40054[(2)] = null);

(statearr_40027_40054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (9))){
var inst_39974 = (state_40014[(8)]);
var inst_39990 = cljs.core.vec.call(null,inst_39974);
var state_40014__$1 = state_40014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40014__$1,(11),out,inst_39990);
} else {
if((state_val_40015 === (5))){
var inst_39975 = (state_40014[(7)]);
var inst_39978 = (state_40014[(9)]);
var inst_39982 = (state_40014[(10)]);
var inst_39982__$1 = f.call(null,inst_39978);
var inst_39983 = cljs.core._EQ_.call(null,inst_39982__$1,inst_39975);
var inst_39984 = cljs.core.keyword_identical_QMARK_.call(null,inst_39975,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39985 = (inst_39983) || (inst_39984);
var state_40014__$1 = (function (){var statearr_40028 = state_40014;
(statearr_40028[(10)] = inst_39982__$1);

return statearr_40028;
})();
if(cljs.core.truth_(inst_39985)){
var statearr_40029_40055 = state_40014__$1;
(statearr_40029_40055[(1)] = (8));

} else {
var statearr_40030_40056 = state_40014__$1;
(statearr_40030_40056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (14))){
var inst_40007 = (state_40014[(2)]);
var inst_40008 = cljs.core.async.close_BANG_.call(null,out);
var state_40014__$1 = (function (){var statearr_40032 = state_40014;
(statearr_40032[(13)] = inst_40007);

return statearr_40032;
})();
var statearr_40033_40057 = state_40014__$1;
(statearr_40033_40057[(2)] = inst_40008);

(statearr_40033_40057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (10))){
var inst_39997 = (state_40014[(2)]);
var state_40014__$1 = state_40014;
var statearr_40034_40058 = state_40014__$1;
(statearr_40034_40058[(2)] = inst_39997);

(statearr_40034_40058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40015 === (8))){
var inst_39978 = (state_40014[(9)]);
var inst_39982 = (state_40014[(10)]);
var inst_39974 = (state_40014[(8)]);
var inst_39987 = inst_39974.push(inst_39978);
var tmp40031 = inst_39974;
var inst_39974__$1 = tmp40031;
var inst_39975 = inst_39982;
var state_40014__$1 = (function (){var statearr_40035 = state_40014;
(statearr_40035[(7)] = inst_39975);

(statearr_40035[(8)] = inst_39974__$1);

(statearr_40035[(14)] = inst_39987);

return statearr_40035;
})();
var statearr_40036_40059 = state_40014__$1;
(statearr_40036_40059[(2)] = null);

(statearr_40036_40059[(1)] = (2));


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
});})(c__6555__auto___40045,out))
;
return ((function (switch__6493__auto__,c__6555__auto___40045,out){
return (function() {
var cljs$core$async$state_machine__6494__auto__ = null;
var cljs$core$async$state_machine__6494__auto____0 = (function (){
var statearr_40040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40040[(0)] = cljs$core$async$state_machine__6494__auto__);

(statearr_40040[(1)] = (1));

return statearr_40040;
});
var cljs$core$async$state_machine__6494__auto____1 = (function (state_40014){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_40014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e40041){if((e40041 instanceof Object)){
var ex__6497__auto__ = e40041;
var statearr_40042_40060 = state_40014;
(statearr_40042_40060[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40061 = state_40014;
state_40014 = G__40061;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
cljs$core$async$state_machine__6494__auto__ = function(state_40014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6494__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6494__auto____1.call(this,state_40014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6494__auto____0;
cljs$core$async$state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6494__auto____1;
return cljs$core$async$state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6555__auto___40045,out))
})();
var state__6557__auto__ = (function (){var statearr_40043 = f__6556__auto__.call(null);
(statearr_40043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6555__auto___40045);

return statearr_40043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6557__auto__);
});})(c__6555__auto___40045,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map