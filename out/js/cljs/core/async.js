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
if(typeof cljs.core.async.t19227 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19227 = (function (f,fn_handler,meta19228){
this.f = f;
this.fn_handler = fn_handler;
this.meta19228 = meta19228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19227.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19229){
var self__ = this;
var _19229__$1 = this;
return self__.meta19228;
});

cljs.core.async.t19227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19229,meta19228__$1){
var self__ = this;
var _19229__$1 = this;
return (new cljs.core.async.t19227(self__.f,self__.fn_handler,meta19228__$1));
});

cljs.core.async.t19227.cljs$lang$type = true;

cljs.core.async.t19227.cljs$lang$ctorStr = "cljs.core.async/t19227";

cljs.core.async.t19227.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t19227");
});

cljs.core.async.__GT_t19227 = (function cljs$core$async$fn_handler_$___GT_t19227(f__$1,fn_handler__$1,meta19228){
return (new cljs.core.async.t19227(f__$1,fn_handler__$1,meta19228));
});

}

return (new cljs.core.async.t19227(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19231 = buff;
if(G__19231){
var bit__4856__auto__ = null;
if(cljs.core.truth_((function (){var or__4182__auto__ = bit__4856__auto__;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return G__19231.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19231.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19231);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19231);
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
var G__19233 = arguments.length;
switch (G__19233) {
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
var G__19236 = arguments.length;
switch (G__19236) {
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
var val_19238 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19238);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19238,ret){
return (function (){
return fn1.call(null,val_19238);
});})(val_19238,ret))
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
var G__19240 = arguments.length;
switch (G__19240) {
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
var n__5067__auto___19242 = n;
var x_19243 = (0);
while(true){
if((x_19243 < n__5067__auto___19242)){
(a[x_19243] = (0));

var G__19244 = (x_19243 + (1));
x_19243 = G__19244;
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

var G__19245 = (i + (1));
i = G__19245;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19249 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19249 = (function (flag,alt_flag,meta19250){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19250 = meta19250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19249.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19251){
var self__ = this;
var _19251__$1 = this;
return self__.meta19250;
});})(flag))
;

cljs.core.async.t19249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19251,meta19250__$1){
var self__ = this;
var _19251__$1 = this;
return (new cljs.core.async.t19249(self__.flag,self__.alt_flag,meta19250__$1));
});})(flag))
;

cljs.core.async.t19249.cljs$lang$type = true;

cljs.core.async.t19249.cljs$lang$ctorStr = "cljs.core.async/t19249";

cljs.core.async.t19249.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t19249");
});})(flag))
;

cljs.core.async.__GT_t19249 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t19249(flag__$1,alt_flag__$1,meta19250){
return (new cljs.core.async.t19249(flag__$1,alt_flag__$1,meta19250));
});})(flag))
;

}

return (new cljs.core.async.t19249(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t19255 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19255 = (function (cb,flag,alt_handler,meta19256){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19256 = meta19256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19255.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19257){
var self__ = this;
var _19257__$1 = this;
return self__.meta19256;
});

cljs.core.async.t19255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19257,meta19256__$1){
var self__ = this;
var _19257__$1 = this;
return (new cljs.core.async.t19255(self__.cb,self__.flag,self__.alt_handler,meta19256__$1));
});

cljs.core.async.t19255.cljs$lang$type = true;

cljs.core.async.t19255.cljs$lang$ctorStr = "cljs.core.async/t19255";

cljs.core.async.t19255.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t19255");
});

cljs.core.async.__GT_t19255 = (function cljs$core$async$alt_handler_$___GT_t19255(cb__$1,flag__$1,alt_handler__$1,meta19256){
return (new cljs.core.async.t19255(cb__$1,flag__$1,alt_handler__$1,meta19256));
});

}

return (new cljs.core.async.t19255(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19258_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19258_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19259_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19259_SHARP_,port], null));
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
var G__19260 = (i + (1));
i = G__19260;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19263){
var map__19264 = p__19263;
var map__19264__$1 = ((cljs.core.seq_QMARK_.call(null,map__19264))?cljs.core.apply.call(null,cljs.core.hash_map,map__19264):map__19264);
var opts = map__19264__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19261){
var G__19262 = cljs.core.first.call(null,seq19261);
var seq19261__$1 = cljs.core.next.call(null,seq19261);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19262,seq19261__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__19266 = arguments.length;
switch (G__19266) {
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
var c__6473__auto___19315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___19315){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___19315){
return (function (state_19290){
var state_val_19291 = (state_19290[(1)]);
if((state_val_19291 === (7))){
var inst_19286 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19292_19316 = state_19290__$1;
(statearr_19292_19316[(2)] = inst_19286);

(statearr_19292_19316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (1))){
var state_19290__$1 = state_19290;
var statearr_19293_19317 = state_19290__$1;
(statearr_19293_19317[(2)] = null);

(statearr_19293_19317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (4))){
var inst_19269 = (state_19290[(7)]);
var inst_19269__$1 = (state_19290[(2)]);
var inst_19270 = (inst_19269__$1 == null);
var state_19290__$1 = (function (){var statearr_19294 = state_19290;
(statearr_19294[(7)] = inst_19269__$1);

return statearr_19294;
})();
if(cljs.core.truth_(inst_19270)){
var statearr_19295_19318 = state_19290__$1;
(statearr_19295_19318[(1)] = (5));

} else {
var statearr_19296_19319 = state_19290__$1;
(statearr_19296_19319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (13))){
var state_19290__$1 = state_19290;
var statearr_19297_19320 = state_19290__$1;
(statearr_19297_19320[(2)] = null);

(statearr_19297_19320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (6))){
var inst_19269 = (state_19290[(7)]);
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19290__$1,(11),to,inst_19269);
} else {
if((state_val_19291 === (3))){
var inst_19288 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19290__$1,inst_19288);
} else {
if((state_val_19291 === (12))){
var state_19290__$1 = state_19290;
var statearr_19298_19321 = state_19290__$1;
(statearr_19298_19321[(2)] = null);

(statearr_19298_19321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (2))){
var state_19290__$1 = state_19290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19290__$1,(4),from);
} else {
if((state_val_19291 === (11))){
var inst_19279 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
if(cljs.core.truth_(inst_19279)){
var statearr_19299_19322 = state_19290__$1;
(statearr_19299_19322[(1)] = (12));

} else {
var statearr_19300_19323 = state_19290__$1;
(statearr_19300_19323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (9))){
var state_19290__$1 = state_19290;
var statearr_19301_19324 = state_19290__$1;
(statearr_19301_19324[(2)] = null);

(statearr_19301_19324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (5))){
var state_19290__$1 = state_19290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19302_19325 = state_19290__$1;
(statearr_19302_19325[(1)] = (8));

} else {
var statearr_19303_19326 = state_19290__$1;
(statearr_19303_19326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (14))){
var inst_19284 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19304_19327 = state_19290__$1;
(statearr_19304_19327[(2)] = inst_19284);

(statearr_19304_19327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (10))){
var inst_19276 = (state_19290[(2)]);
var state_19290__$1 = state_19290;
var statearr_19305_19328 = state_19290__$1;
(statearr_19305_19328[(2)] = inst_19276);

(statearr_19305_19328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19291 === (8))){
var inst_19273 = cljs.core.async.close_BANG_.call(null,to);
var state_19290__$1 = state_19290;
var statearr_19306_19329 = state_19290__$1;
(statearr_19306_19329[(2)] = inst_19273);

(statearr_19306_19329[(1)] = (10));


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
});})(c__6473__auto___19315))
;
return ((function (switch__6452__auto__,c__6473__auto___19315){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_19310 = [null,null,null,null,null,null,null,null];
(statearr_19310[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_19310[(1)] = (1));

return statearr_19310;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_19290){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19311){if((e19311 instanceof Object)){
var ex__6456__auto__ = e19311;
var statearr_19312_19330 = state_19290;
(statearr_19312_19330[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19331 = state_19290;
state_19290 = G__19331;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_19290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_19290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___19315))
})();
var state__6475__auto__ = (function (){var statearr_19313 = f__6474__auto__.call(null);
(statearr_19313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___19315);

return statearr_19313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___19315))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19515){
var vec__19516 = p__19515;
var v = cljs.core.nth.call(null,vec__19516,(0),null);
var p = cljs.core.nth.call(null,vec__19516,(1),null);
var job = vec__19516;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6473__auto___19698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___19698,res,vec__19516,v,p,job,jobs,results){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___19698,res,vec__19516,v,p,job,jobs,results){
return (function (state_19521){
var state_val_19522 = (state_19521[(1)]);
if((state_val_19522 === (2))){
var inst_19518 = (state_19521[(2)]);
var inst_19519 = cljs.core.async.close_BANG_.call(null,res);
var state_19521__$1 = (function (){var statearr_19523 = state_19521;
(statearr_19523[(7)] = inst_19518);

return statearr_19523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19521__$1,inst_19519);
} else {
if((state_val_19522 === (1))){
var state_19521__$1 = state_19521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19521__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6473__auto___19698,res,vec__19516,v,p,job,jobs,results))
;
return ((function (switch__6452__auto__,c__6473__auto___19698,res,vec__19516,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_19527 = [null,null,null,null,null,null,null,null];
(statearr_19527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_19527[(1)] = (1));

return statearr_19527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_19521){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19528){if((e19528 instanceof Object)){
var ex__6456__auto__ = e19528;
var statearr_19529_19699 = state_19521;
(statearr_19529_19699[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19700 = state_19521;
state_19521 = G__19700;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_19521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_19521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___19698,res,vec__19516,v,p,job,jobs,results))
})();
var state__6475__auto__ = (function (){var statearr_19530 = f__6474__auto__.call(null);
(statearr_19530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___19698);

return statearr_19530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___19698,res,vec__19516,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19531){
var vec__19532 = p__19531;
var v = cljs.core.nth.call(null,vec__19532,(0),null);
var p = cljs.core.nth.call(null,vec__19532,(1),null);
var job = vec__19532;
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
var n__5067__auto___19701 = n;
var __19702 = (0);
while(true){
if((__19702 < n__5067__auto___19701)){
var G__19533_19703 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19533_19703) {
case "async":
var c__6473__auto___19705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19702,c__6473__auto___19705,G__19533_19703,n__5067__auto___19701,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (__19702,c__6473__auto___19705,G__19533_19703,n__5067__auto___19701,jobs,results,process,async){
return (function (state_19546){
var state_val_19547 = (state_19546[(1)]);
if((state_val_19547 === (7))){
var inst_19542 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
var statearr_19548_19706 = state_19546__$1;
(statearr_19548_19706[(2)] = inst_19542);

(statearr_19548_19706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (6))){
var state_19546__$1 = state_19546;
var statearr_19549_19707 = state_19546__$1;
(statearr_19549_19707[(2)] = null);

(statearr_19549_19707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (5))){
var state_19546__$1 = state_19546;
var statearr_19550_19708 = state_19546__$1;
(statearr_19550_19708[(2)] = null);

(statearr_19550_19708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (4))){
var inst_19536 = (state_19546[(2)]);
var inst_19537 = async.call(null,inst_19536);
var state_19546__$1 = state_19546;
if(cljs.core.truth_(inst_19537)){
var statearr_19551_19709 = state_19546__$1;
(statearr_19551_19709[(1)] = (5));

} else {
var statearr_19552_19710 = state_19546__$1;
(statearr_19552_19710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19547 === (3))){
var inst_19544 = (state_19546[(2)]);
var state_19546__$1 = state_19546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19546__$1,inst_19544);
} else {
if((state_val_19547 === (2))){
var state_19546__$1 = state_19546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19546__$1,(4),jobs);
} else {
if((state_val_19547 === (1))){
var state_19546__$1 = state_19546;
var statearr_19553_19711 = state_19546__$1;
(statearr_19553_19711[(2)] = null);

(statearr_19553_19711[(1)] = (2));


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
});})(__19702,c__6473__auto___19705,G__19533_19703,n__5067__auto___19701,jobs,results,process,async))
;
return ((function (__19702,switch__6452__auto__,c__6473__auto___19705,G__19533_19703,n__5067__auto___19701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_19557 = [null,null,null,null,null,null,null];
(statearr_19557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_19557[(1)] = (1));

return statearr_19557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_19546){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19558){if((e19558 instanceof Object)){
var ex__6456__auto__ = e19558;
var statearr_19559_19712 = state_19546;
(statearr_19559_19712[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19713 = state_19546;
state_19546 = G__19713;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_19546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_19546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(__19702,switch__6452__auto__,c__6473__auto___19705,G__19533_19703,n__5067__auto___19701,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_19560 = f__6474__auto__.call(null);
(statearr_19560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___19705);

return statearr_19560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(__19702,c__6473__auto___19705,G__19533_19703,n__5067__auto___19701,jobs,results,process,async))
);


break;
case "compute":
var c__6473__auto___19714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19702,c__6473__auto___19714,G__19533_19703,n__5067__auto___19701,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (__19702,c__6473__auto___19714,G__19533_19703,n__5067__auto___19701,jobs,results,process,async){
return (function (state_19573){
var state_val_19574 = (state_19573[(1)]);
if((state_val_19574 === (7))){
var inst_19569 = (state_19573[(2)]);
var state_19573__$1 = state_19573;
var statearr_19575_19715 = state_19573__$1;
(statearr_19575_19715[(2)] = inst_19569);

(statearr_19575_19715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19574 === (6))){
var state_19573__$1 = state_19573;
var statearr_19576_19716 = state_19573__$1;
(statearr_19576_19716[(2)] = null);

(statearr_19576_19716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19574 === (5))){
var state_19573__$1 = state_19573;
var statearr_19577_19717 = state_19573__$1;
(statearr_19577_19717[(2)] = null);

(statearr_19577_19717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19574 === (4))){
var inst_19563 = (state_19573[(2)]);
var inst_19564 = process.call(null,inst_19563);
var state_19573__$1 = state_19573;
if(cljs.core.truth_(inst_19564)){
var statearr_19578_19718 = state_19573__$1;
(statearr_19578_19718[(1)] = (5));

} else {
var statearr_19579_19719 = state_19573__$1;
(statearr_19579_19719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19574 === (3))){
var inst_19571 = (state_19573[(2)]);
var state_19573__$1 = state_19573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19573__$1,inst_19571);
} else {
if((state_val_19574 === (2))){
var state_19573__$1 = state_19573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19573__$1,(4),jobs);
} else {
if((state_val_19574 === (1))){
var state_19573__$1 = state_19573;
var statearr_19580_19720 = state_19573__$1;
(statearr_19580_19720[(2)] = null);

(statearr_19580_19720[(1)] = (2));


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
});})(__19702,c__6473__auto___19714,G__19533_19703,n__5067__auto___19701,jobs,results,process,async))
;
return ((function (__19702,switch__6452__auto__,c__6473__auto___19714,G__19533_19703,n__5067__auto___19701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_19584 = [null,null,null,null,null,null,null];
(statearr_19584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_19584[(1)] = (1));

return statearr_19584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_19573){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19585){if((e19585 instanceof Object)){
var ex__6456__auto__ = e19585;
var statearr_19586_19721 = state_19573;
(statearr_19586_19721[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19722 = state_19573;
state_19573 = G__19722;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_19573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_19573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(__19702,switch__6452__auto__,c__6473__auto___19714,G__19533_19703,n__5067__auto___19701,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_19587 = f__6474__auto__.call(null);
(statearr_19587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___19714);

return statearr_19587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(__19702,c__6473__auto___19714,G__19533_19703,n__5067__auto___19701,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19723 = (__19702 + (1));
__19702 = G__19723;
continue;
} else {
}
break;
}

var c__6473__auto___19724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___19724,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___19724,jobs,results,process,async){
return (function (state_19609){
var state_val_19610 = (state_19609[(1)]);
if((state_val_19610 === (9))){
var inst_19602 = (state_19609[(2)]);
var state_19609__$1 = (function (){var statearr_19611 = state_19609;
(statearr_19611[(7)] = inst_19602);

return statearr_19611;
})();
var statearr_19612_19725 = state_19609__$1;
(statearr_19612_19725[(2)] = null);

(statearr_19612_19725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (8))){
var inst_19595 = (state_19609[(8)]);
var inst_19600 = (state_19609[(2)]);
var state_19609__$1 = (function (){var statearr_19613 = state_19609;
(statearr_19613[(9)] = inst_19600);

return statearr_19613;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19609__$1,(9),results,inst_19595);
} else {
if((state_val_19610 === (7))){
var inst_19605 = (state_19609[(2)]);
var state_19609__$1 = state_19609;
var statearr_19614_19726 = state_19609__$1;
(statearr_19614_19726[(2)] = inst_19605);

(statearr_19614_19726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (6))){
var inst_19590 = (state_19609[(10)]);
var inst_19595 = (state_19609[(8)]);
var inst_19595__$1 = cljs.core.async.chan.call(null,(1));
var inst_19596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19597 = [inst_19590,inst_19595__$1];
var inst_19598 = (new cljs.core.PersistentVector(null,2,(5),inst_19596,inst_19597,null));
var state_19609__$1 = (function (){var statearr_19615 = state_19609;
(statearr_19615[(8)] = inst_19595__$1);

return statearr_19615;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19609__$1,(8),jobs,inst_19598);
} else {
if((state_val_19610 === (5))){
var inst_19593 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19609__$1 = state_19609;
var statearr_19616_19727 = state_19609__$1;
(statearr_19616_19727[(2)] = inst_19593);

(statearr_19616_19727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (4))){
var inst_19590 = (state_19609[(10)]);
var inst_19590__$1 = (state_19609[(2)]);
var inst_19591 = (inst_19590__$1 == null);
var state_19609__$1 = (function (){var statearr_19617 = state_19609;
(statearr_19617[(10)] = inst_19590__$1);

return statearr_19617;
})();
if(cljs.core.truth_(inst_19591)){
var statearr_19618_19728 = state_19609__$1;
(statearr_19618_19728[(1)] = (5));

} else {
var statearr_19619_19729 = state_19609__$1;
(statearr_19619_19729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19610 === (3))){
var inst_19607 = (state_19609[(2)]);
var state_19609__$1 = state_19609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19609__$1,inst_19607);
} else {
if((state_val_19610 === (2))){
var state_19609__$1 = state_19609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19609__$1,(4),from);
} else {
if((state_val_19610 === (1))){
var state_19609__$1 = state_19609;
var statearr_19620_19730 = state_19609__$1;
(statearr_19620_19730[(2)] = null);

(statearr_19620_19730[(1)] = (2));


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
});})(c__6473__auto___19724,jobs,results,process,async))
;
return ((function (switch__6452__auto__,c__6473__auto___19724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_19624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_19624[(1)] = (1));

return statearr_19624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_19609){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19625){if((e19625 instanceof Object)){
var ex__6456__auto__ = e19625;
var statearr_19626_19731 = state_19609;
(statearr_19626_19731[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19732 = state_19609;
state_19609 = G__19732;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_19609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_19609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___19724,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_19627 = f__6474__auto__.call(null);
(statearr_19627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___19724);

return statearr_19627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___19724,jobs,results,process,async))
);


var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__,jobs,results,process,async){
return (function (state_19665){
var state_val_19666 = (state_19665[(1)]);
if((state_val_19666 === (7))){
var inst_19661 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19667_19733 = state_19665__$1;
(statearr_19667_19733[(2)] = inst_19661);

(statearr_19667_19733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (20))){
var state_19665__$1 = state_19665;
var statearr_19668_19734 = state_19665__$1;
(statearr_19668_19734[(2)] = null);

(statearr_19668_19734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (1))){
var state_19665__$1 = state_19665;
var statearr_19669_19735 = state_19665__$1;
(statearr_19669_19735[(2)] = null);

(statearr_19669_19735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (4))){
var inst_19630 = (state_19665[(7)]);
var inst_19630__$1 = (state_19665[(2)]);
var inst_19631 = (inst_19630__$1 == null);
var state_19665__$1 = (function (){var statearr_19670 = state_19665;
(statearr_19670[(7)] = inst_19630__$1);

return statearr_19670;
})();
if(cljs.core.truth_(inst_19631)){
var statearr_19671_19736 = state_19665__$1;
(statearr_19671_19736[(1)] = (5));

} else {
var statearr_19672_19737 = state_19665__$1;
(statearr_19672_19737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (15))){
var inst_19643 = (state_19665[(8)]);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19665__$1,(18),to,inst_19643);
} else {
if((state_val_19666 === (21))){
var inst_19656 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19673_19738 = state_19665__$1;
(statearr_19673_19738[(2)] = inst_19656);

(statearr_19673_19738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (13))){
var inst_19658 = (state_19665[(2)]);
var state_19665__$1 = (function (){var statearr_19674 = state_19665;
(statearr_19674[(9)] = inst_19658);

return statearr_19674;
})();
var statearr_19675_19739 = state_19665__$1;
(statearr_19675_19739[(2)] = null);

(statearr_19675_19739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (6))){
var inst_19630 = (state_19665[(7)]);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19665__$1,(11),inst_19630);
} else {
if((state_val_19666 === (17))){
var inst_19651 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
if(cljs.core.truth_(inst_19651)){
var statearr_19676_19740 = state_19665__$1;
(statearr_19676_19740[(1)] = (19));

} else {
var statearr_19677_19741 = state_19665__$1;
(statearr_19677_19741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (3))){
var inst_19663 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19665__$1,inst_19663);
} else {
if((state_val_19666 === (12))){
var inst_19640 = (state_19665[(10)]);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19665__$1,(14),inst_19640);
} else {
if((state_val_19666 === (2))){
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19665__$1,(4),results);
} else {
if((state_val_19666 === (19))){
var state_19665__$1 = state_19665;
var statearr_19678_19742 = state_19665__$1;
(statearr_19678_19742[(2)] = null);

(statearr_19678_19742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (11))){
var inst_19640 = (state_19665[(2)]);
var state_19665__$1 = (function (){var statearr_19679 = state_19665;
(statearr_19679[(10)] = inst_19640);

return statearr_19679;
})();
var statearr_19680_19743 = state_19665__$1;
(statearr_19680_19743[(2)] = null);

(statearr_19680_19743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (9))){
var state_19665__$1 = state_19665;
var statearr_19681_19744 = state_19665__$1;
(statearr_19681_19744[(2)] = null);

(statearr_19681_19744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (5))){
var state_19665__$1 = state_19665;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19682_19745 = state_19665__$1;
(statearr_19682_19745[(1)] = (8));

} else {
var statearr_19683_19746 = state_19665__$1;
(statearr_19683_19746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (14))){
var inst_19643 = (state_19665[(8)]);
var inst_19645 = (state_19665[(11)]);
var inst_19643__$1 = (state_19665[(2)]);
var inst_19644 = (inst_19643__$1 == null);
var inst_19645__$1 = cljs.core.not.call(null,inst_19644);
var state_19665__$1 = (function (){var statearr_19684 = state_19665;
(statearr_19684[(8)] = inst_19643__$1);

(statearr_19684[(11)] = inst_19645__$1);

return statearr_19684;
})();
if(inst_19645__$1){
var statearr_19685_19747 = state_19665__$1;
(statearr_19685_19747[(1)] = (15));

} else {
var statearr_19686_19748 = state_19665__$1;
(statearr_19686_19748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (16))){
var inst_19645 = (state_19665[(11)]);
var state_19665__$1 = state_19665;
var statearr_19687_19749 = state_19665__$1;
(statearr_19687_19749[(2)] = inst_19645);

(statearr_19687_19749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (10))){
var inst_19637 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19688_19750 = state_19665__$1;
(statearr_19688_19750[(2)] = inst_19637);

(statearr_19688_19750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (18))){
var inst_19648 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19689_19751 = state_19665__$1;
(statearr_19689_19751[(2)] = inst_19648);

(statearr_19689_19751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19666 === (8))){
var inst_19634 = cljs.core.async.close_BANG_.call(null,to);
var state_19665__$1 = state_19665;
var statearr_19690_19752 = state_19665__$1;
(statearr_19690_19752[(2)] = inst_19634);

(statearr_19690_19752[(1)] = (10));


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
});})(c__6473__auto__,jobs,results,process,async))
;
return ((function (switch__6452__auto__,c__6473__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_19694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_19694[(1)] = (1));

return statearr_19694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_19665){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19695){if((e19695 instanceof Object)){
var ex__6456__auto__ = e19695;
var statearr_19696_19753 = state_19665;
(statearr_19696_19753[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19754 = state_19665;
state_19665 = G__19754;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_19665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_19665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_19697 = f__6474__auto__.call(null);
(statearr_19697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_19697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__,jobs,results,process,async))
);

return c__6473__auto__;
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
var G__19756 = arguments.length;
switch (G__19756) {
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
var G__19759 = arguments.length;
switch (G__19759) {
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
var G__19762 = arguments.length;
switch (G__19762) {
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
var c__6473__auto___19814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___19814,tc,fc){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___19814,tc,fc){
return (function (state_19788){
var state_val_19789 = (state_19788[(1)]);
if((state_val_19789 === (7))){
var inst_19784 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
var statearr_19790_19815 = state_19788__$1;
(statearr_19790_19815[(2)] = inst_19784);

(statearr_19790_19815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (1))){
var state_19788__$1 = state_19788;
var statearr_19791_19816 = state_19788__$1;
(statearr_19791_19816[(2)] = null);

(statearr_19791_19816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (4))){
var inst_19765 = (state_19788[(7)]);
var inst_19765__$1 = (state_19788[(2)]);
var inst_19766 = (inst_19765__$1 == null);
var state_19788__$1 = (function (){var statearr_19792 = state_19788;
(statearr_19792[(7)] = inst_19765__$1);

return statearr_19792;
})();
if(cljs.core.truth_(inst_19766)){
var statearr_19793_19817 = state_19788__$1;
(statearr_19793_19817[(1)] = (5));

} else {
var statearr_19794_19818 = state_19788__$1;
(statearr_19794_19818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (13))){
var state_19788__$1 = state_19788;
var statearr_19795_19819 = state_19788__$1;
(statearr_19795_19819[(2)] = null);

(statearr_19795_19819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (6))){
var inst_19765 = (state_19788[(7)]);
var inst_19771 = p.call(null,inst_19765);
var state_19788__$1 = state_19788;
if(cljs.core.truth_(inst_19771)){
var statearr_19796_19820 = state_19788__$1;
(statearr_19796_19820[(1)] = (9));

} else {
var statearr_19797_19821 = state_19788__$1;
(statearr_19797_19821[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (3))){
var inst_19786 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19788__$1,inst_19786);
} else {
if((state_val_19789 === (12))){
var state_19788__$1 = state_19788;
var statearr_19798_19822 = state_19788__$1;
(statearr_19798_19822[(2)] = null);

(statearr_19798_19822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (2))){
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19788__$1,(4),ch);
} else {
if((state_val_19789 === (11))){
var inst_19765 = (state_19788[(7)]);
var inst_19775 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19788__$1,(8),inst_19775,inst_19765);
} else {
if((state_val_19789 === (9))){
var state_19788__$1 = state_19788;
var statearr_19799_19823 = state_19788__$1;
(statearr_19799_19823[(2)] = tc);

(statearr_19799_19823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (5))){
var inst_19768 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19769 = cljs.core.async.close_BANG_.call(null,fc);
var state_19788__$1 = (function (){var statearr_19800 = state_19788;
(statearr_19800[(8)] = inst_19768);

return statearr_19800;
})();
var statearr_19801_19824 = state_19788__$1;
(statearr_19801_19824[(2)] = inst_19769);

(statearr_19801_19824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (14))){
var inst_19782 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
var statearr_19802_19825 = state_19788__$1;
(statearr_19802_19825[(2)] = inst_19782);

(statearr_19802_19825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (10))){
var state_19788__$1 = state_19788;
var statearr_19803_19826 = state_19788__$1;
(statearr_19803_19826[(2)] = fc);

(statearr_19803_19826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (8))){
var inst_19777 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
if(cljs.core.truth_(inst_19777)){
var statearr_19804_19827 = state_19788__$1;
(statearr_19804_19827[(1)] = (12));

} else {
var statearr_19805_19828 = state_19788__$1;
(statearr_19805_19828[(1)] = (13));

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
});})(c__6473__auto___19814,tc,fc))
;
return ((function (switch__6452__auto__,c__6473__auto___19814,tc,fc){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_19809 = [null,null,null,null,null,null,null,null,null];
(statearr_19809[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_19809[(1)] = (1));

return statearr_19809;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_19788){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19810){if((e19810 instanceof Object)){
var ex__6456__auto__ = e19810;
var statearr_19811_19829 = state_19788;
(statearr_19811_19829[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19830 = state_19788;
state_19788 = G__19830;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_19788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_19788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___19814,tc,fc))
})();
var state__6475__auto__ = (function (){var statearr_19812 = f__6474__auto__.call(null);
(statearr_19812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___19814);

return statearr_19812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___19814,tc,fc))
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
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__){
return (function (state_19877){
var state_val_19878 = (state_19877[(1)]);
if((state_val_19878 === (7))){
var inst_19873 = (state_19877[(2)]);
var state_19877__$1 = state_19877;
var statearr_19879_19895 = state_19877__$1;
(statearr_19879_19895[(2)] = inst_19873);

(statearr_19879_19895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19878 === (6))){
var inst_19863 = (state_19877[(7)]);
var inst_19866 = (state_19877[(8)]);
var inst_19870 = f.call(null,inst_19863,inst_19866);
var inst_19863__$1 = inst_19870;
var state_19877__$1 = (function (){var statearr_19880 = state_19877;
(statearr_19880[(7)] = inst_19863__$1);

return statearr_19880;
})();
var statearr_19881_19896 = state_19877__$1;
(statearr_19881_19896[(2)] = null);

(statearr_19881_19896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19878 === (5))){
var inst_19863 = (state_19877[(7)]);
var state_19877__$1 = state_19877;
var statearr_19882_19897 = state_19877__$1;
(statearr_19882_19897[(2)] = inst_19863);

(statearr_19882_19897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19878 === (4))){
var inst_19866 = (state_19877[(8)]);
var inst_19866__$1 = (state_19877[(2)]);
var inst_19867 = (inst_19866__$1 == null);
var state_19877__$1 = (function (){var statearr_19883 = state_19877;
(statearr_19883[(8)] = inst_19866__$1);

return statearr_19883;
})();
if(cljs.core.truth_(inst_19867)){
var statearr_19884_19898 = state_19877__$1;
(statearr_19884_19898[(1)] = (5));

} else {
var statearr_19885_19899 = state_19877__$1;
(statearr_19885_19899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19878 === (3))){
var inst_19875 = (state_19877[(2)]);
var state_19877__$1 = state_19877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19877__$1,inst_19875);
} else {
if((state_val_19878 === (2))){
var state_19877__$1 = state_19877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19877__$1,(4),ch);
} else {
if((state_val_19878 === (1))){
var inst_19863 = init;
var state_19877__$1 = (function (){var statearr_19886 = state_19877;
(statearr_19886[(7)] = inst_19863);

return statearr_19886;
})();
var statearr_19887_19900 = state_19877__$1;
(statearr_19887_19900[(2)] = null);

(statearr_19887_19900[(1)] = (2));


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
});})(c__6473__auto__))
;
return ((function (switch__6452__auto__,c__6473__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6453__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6453__auto____0 = (function (){
var statearr_19891 = [null,null,null,null,null,null,null,null,null];
(statearr_19891[(0)] = cljs$core$async$reduce_$_state_machine__6453__auto__);

(statearr_19891[(1)] = (1));

return statearr_19891;
});
var cljs$core$async$reduce_$_state_machine__6453__auto____1 = (function (state_19877){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19892){if((e19892 instanceof Object)){
var ex__6456__auto__ = e19892;
var statearr_19893_19901 = state_19877;
(statearr_19893_19901[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19902 = state_19877;
state_19877 = G__19902;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6453__auto__ = function(state_19877){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6453__auto____1.call(this,state_19877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6453__auto____0;
cljs$core$async$reduce_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6453__auto____1;
return cljs$core$async$reduce_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__))
})();
var state__6475__auto__ = (function (){var statearr_19894 = f__6474__auto__.call(null);
(statearr_19894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_19894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__))
);

return c__6473__auto__;
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
var G__19904 = arguments.length;
switch (G__19904) {
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
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__){
return (function (state_19929){
var state_val_19930 = (state_19929[(1)]);
if((state_val_19930 === (7))){
var inst_19911 = (state_19929[(2)]);
var state_19929__$1 = state_19929;
var statearr_19931_19955 = state_19929__$1;
(statearr_19931_19955[(2)] = inst_19911);

(statearr_19931_19955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (1))){
var inst_19905 = cljs.core.seq.call(null,coll);
var inst_19906 = inst_19905;
var state_19929__$1 = (function (){var statearr_19932 = state_19929;
(statearr_19932[(7)] = inst_19906);

return statearr_19932;
})();
var statearr_19933_19956 = state_19929__$1;
(statearr_19933_19956[(2)] = null);

(statearr_19933_19956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (4))){
var inst_19906 = (state_19929[(7)]);
var inst_19909 = cljs.core.first.call(null,inst_19906);
var state_19929__$1 = state_19929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19929__$1,(7),ch,inst_19909);
} else {
if((state_val_19930 === (13))){
var inst_19923 = (state_19929[(2)]);
var state_19929__$1 = state_19929;
var statearr_19934_19957 = state_19929__$1;
(statearr_19934_19957[(2)] = inst_19923);

(statearr_19934_19957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (6))){
var inst_19914 = (state_19929[(2)]);
var state_19929__$1 = state_19929;
if(cljs.core.truth_(inst_19914)){
var statearr_19935_19958 = state_19929__$1;
(statearr_19935_19958[(1)] = (8));

} else {
var statearr_19936_19959 = state_19929__$1;
(statearr_19936_19959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (3))){
var inst_19927 = (state_19929[(2)]);
var state_19929__$1 = state_19929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19929__$1,inst_19927);
} else {
if((state_val_19930 === (12))){
var state_19929__$1 = state_19929;
var statearr_19937_19960 = state_19929__$1;
(statearr_19937_19960[(2)] = null);

(statearr_19937_19960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (2))){
var inst_19906 = (state_19929[(7)]);
var state_19929__$1 = state_19929;
if(cljs.core.truth_(inst_19906)){
var statearr_19938_19961 = state_19929__$1;
(statearr_19938_19961[(1)] = (4));

} else {
var statearr_19939_19962 = state_19929__$1;
(statearr_19939_19962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (11))){
var inst_19920 = cljs.core.async.close_BANG_.call(null,ch);
var state_19929__$1 = state_19929;
var statearr_19940_19963 = state_19929__$1;
(statearr_19940_19963[(2)] = inst_19920);

(statearr_19940_19963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (9))){
var state_19929__$1 = state_19929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19941_19964 = state_19929__$1;
(statearr_19941_19964[(1)] = (11));

} else {
var statearr_19942_19965 = state_19929__$1;
(statearr_19942_19965[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (5))){
var inst_19906 = (state_19929[(7)]);
var state_19929__$1 = state_19929;
var statearr_19943_19966 = state_19929__$1;
(statearr_19943_19966[(2)] = inst_19906);

(statearr_19943_19966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (10))){
var inst_19925 = (state_19929[(2)]);
var state_19929__$1 = state_19929;
var statearr_19944_19967 = state_19929__$1;
(statearr_19944_19967[(2)] = inst_19925);

(statearr_19944_19967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19930 === (8))){
var inst_19906 = (state_19929[(7)]);
var inst_19916 = cljs.core.next.call(null,inst_19906);
var inst_19906__$1 = inst_19916;
var state_19929__$1 = (function (){var statearr_19945 = state_19929;
(statearr_19945[(7)] = inst_19906__$1);

return statearr_19945;
})();
var statearr_19946_19968 = state_19929__$1;
(statearr_19946_19968[(2)] = null);

(statearr_19946_19968[(1)] = (2));


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
});})(c__6473__auto__))
;
return ((function (switch__6452__auto__,c__6473__auto__){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_19950 = [null,null,null,null,null,null,null,null];
(statearr_19950[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_19950[(1)] = (1));

return statearr_19950;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_19929){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_19929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e19951){if((e19951 instanceof Object)){
var ex__6456__auto__ = e19951;
var statearr_19952_19969 = state_19929;
(statearr_19952_19969[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19970 = state_19929;
state_19929 = G__19970;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_19929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_19929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__))
})();
var state__6475__auto__ = (function (){var statearr_19953 = f__6474__auto__.call(null);
(statearr_19953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_19953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__))
);

return c__6473__auto__;
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

cljs.core.async.Mux = (function (){var obj19972 = {};
return obj19972;
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


cljs.core.async.Mult = (function (){var obj19974 = {};
return obj19974;
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
if(typeof cljs.core.async.t20196 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20196 = (function (cs,ch,mult,meta20197){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20197 = meta20197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20196.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20196.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20196.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20196.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20198){
var self__ = this;
var _20198__$1 = this;
return self__.meta20197;
});})(cs))
;

cljs.core.async.t20196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20198,meta20197__$1){
var self__ = this;
var _20198__$1 = this;
return (new cljs.core.async.t20196(self__.cs,self__.ch,self__.mult,meta20197__$1));
});})(cs))
;

cljs.core.async.t20196.cljs$lang$type = true;

cljs.core.async.t20196.cljs$lang$ctorStr = "cljs.core.async/t20196";

cljs.core.async.t20196.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t20196");
});})(cs))
;

cljs.core.async.__GT_t20196 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t20196(cs__$1,ch__$1,mult__$1,meta20197){
return (new cljs.core.async.t20196(cs__$1,ch__$1,mult__$1,meta20197));
});})(cs))
;

}

return (new cljs.core.async.t20196(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6473__auto___20417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___20417,cs,m,dchan,dctr,done){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___20417,cs,m,dchan,dctr,done){
return (function (state_20329){
var state_val_20330 = (state_20329[(1)]);
if((state_val_20330 === (7))){
var inst_20325 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20331_20418 = state_20329__$1;
(statearr_20331_20418[(2)] = inst_20325);

(statearr_20331_20418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (20))){
var inst_20230 = (state_20329[(7)]);
var inst_20240 = cljs.core.first.call(null,inst_20230);
var inst_20241 = cljs.core.nth.call(null,inst_20240,(0),null);
var inst_20242 = cljs.core.nth.call(null,inst_20240,(1),null);
var state_20329__$1 = (function (){var statearr_20332 = state_20329;
(statearr_20332[(8)] = inst_20241);

return statearr_20332;
})();
if(cljs.core.truth_(inst_20242)){
var statearr_20333_20419 = state_20329__$1;
(statearr_20333_20419[(1)] = (22));

} else {
var statearr_20334_20420 = state_20329__$1;
(statearr_20334_20420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (27))){
var inst_20201 = (state_20329[(9)]);
var inst_20272 = (state_20329[(10)]);
var inst_20277 = (state_20329[(11)]);
var inst_20270 = (state_20329[(12)]);
var inst_20277__$1 = cljs.core._nth.call(null,inst_20270,inst_20272);
var inst_20278 = cljs.core.async.put_BANG_.call(null,inst_20277__$1,inst_20201,done);
var state_20329__$1 = (function (){var statearr_20335 = state_20329;
(statearr_20335[(11)] = inst_20277__$1);

return statearr_20335;
})();
if(cljs.core.truth_(inst_20278)){
var statearr_20336_20421 = state_20329__$1;
(statearr_20336_20421[(1)] = (30));

} else {
var statearr_20337_20422 = state_20329__$1;
(statearr_20337_20422[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (1))){
var state_20329__$1 = state_20329;
var statearr_20338_20423 = state_20329__$1;
(statearr_20338_20423[(2)] = null);

(statearr_20338_20423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (24))){
var inst_20230 = (state_20329[(7)]);
var inst_20247 = (state_20329[(2)]);
var inst_20248 = cljs.core.next.call(null,inst_20230);
var inst_20210 = inst_20248;
var inst_20211 = null;
var inst_20212 = (0);
var inst_20213 = (0);
var state_20329__$1 = (function (){var statearr_20339 = state_20329;
(statearr_20339[(13)] = inst_20247);

(statearr_20339[(14)] = inst_20211);

(statearr_20339[(15)] = inst_20213);

(statearr_20339[(16)] = inst_20212);

(statearr_20339[(17)] = inst_20210);

return statearr_20339;
})();
var statearr_20340_20424 = state_20329__$1;
(statearr_20340_20424[(2)] = null);

(statearr_20340_20424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (39))){
var state_20329__$1 = state_20329;
var statearr_20344_20425 = state_20329__$1;
(statearr_20344_20425[(2)] = null);

(statearr_20344_20425[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (4))){
var inst_20201 = (state_20329[(9)]);
var inst_20201__$1 = (state_20329[(2)]);
var inst_20202 = (inst_20201__$1 == null);
var state_20329__$1 = (function (){var statearr_20345 = state_20329;
(statearr_20345[(9)] = inst_20201__$1);

return statearr_20345;
})();
if(cljs.core.truth_(inst_20202)){
var statearr_20346_20426 = state_20329__$1;
(statearr_20346_20426[(1)] = (5));

} else {
var statearr_20347_20427 = state_20329__$1;
(statearr_20347_20427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (15))){
var inst_20211 = (state_20329[(14)]);
var inst_20213 = (state_20329[(15)]);
var inst_20212 = (state_20329[(16)]);
var inst_20210 = (state_20329[(17)]);
var inst_20226 = (state_20329[(2)]);
var inst_20227 = (inst_20213 + (1));
var tmp20341 = inst_20211;
var tmp20342 = inst_20212;
var tmp20343 = inst_20210;
var inst_20210__$1 = tmp20343;
var inst_20211__$1 = tmp20341;
var inst_20212__$1 = tmp20342;
var inst_20213__$1 = inst_20227;
var state_20329__$1 = (function (){var statearr_20348 = state_20329;
(statearr_20348[(14)] = inst_20211__$1);

(statearr_20348[(15)] = inst_20213__$1);

(statearr_20348[(16)] = inst_20212__$1);

(statearr_20348[(17)] = inst_20210__$1);

(statearr_20348[(18)] = inst_20226);

return statearr_20348;
})();
var statearr_20349_20428 = state_20329__$1;
(statearr_20349_20428[(2)] = null);

(statearr_20349_20428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (21))){
var inst_20251 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20353_20429 = state_20329__$1;
(statearr_20353_20429[(2)] = inst_20251);

(statearr_20353_20429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (31))){
var inst_20277 = (state_20329[(11)]);
var inst_20281 = done.call(null,null);
var inst_20282 = cljs.core.async.untap_STAR_.call(null,m,inst_20277);
var state_20329__$1 = (function (){var statearr_20354 = state_20329;
(statearr_20354[(19)] = inst_20281);

return statearr_20354;
})();
var statearr_20355_20430 = state_20329__$1;
(statearr_20355_20430[(2)] = inst_20282);

(statearr_20355_20430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (32))){
var inst_20269 = (state_20329[(20)]);
var inst_20272 = (state_20329[(10)]);
var inst_20271 = (state_20329[(21)]);
var inst_20270 = (state_20329[(12)]);
var inst_20284 = (state_20329[(2)]);
var inst_20285 = (inst_20272 + (1));
var tmp20350 = inst_20269;
var tmp20351 = inst_20271;
var tmp20352 = inst_20270;
var inst_20269__$1 = tmp20350;
var inst_20270__$1 = tmp20352;
var inst_20271__$1 = tmp20351;
var inst_20272__$1 = inst_20285;
var state_20329__$1 = (function (){var statearr_20356 = state_20329;
(statearr_20356[(22)] = inst_20284);

(statearr_20356[(20)] = inst_20269__$1);

(statearr_20356[(10)] = inst_20272__$1);

(statearr_20356[(21)] = inst_20271__$1);

(statearr_20356[(12)] = inst_20270__$1);

return statearr_20356;
})();
var statearr_20357_20431 = state_20329__$1;
(statearr_20357_20431[(2)] = null);

(statearr_20357_20431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (40))){
var inst_20297 = (state_20329[(23)]);
var inst_20301 = done.call(null,null);
var inst_20302 = cljs.core.async.untap_STAR_.call(null,m,inst_20297);
var state_20329__$1 = (function (){var statearr_20358 = state_20329;
(statearr_20358[(24)] = inst_20301);

return statearr_20358;
})();
var statearr_20359_20432 = state_20329__$1;
(statearr_20359_20432[(2)] = inst_20302);

(statearr_20359_20432[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (33))){
var inst_20288 = (state_20329[(25)]);
var inst_20290 = cljs.core.chunked_seq_QMARK_.call(null,inst_20288);
var state_20329__$1 = state_20329;
if(inst_20290){
var statearr_20360_20433 = state_20329__$1;
(statearr_20360_20433[(1)] = (36));

} else {
var statearr_20361_20434 = state_20329__$1;
(statearr_20361_20434[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (13))){
var inst_20220 = (state_20329[(26)]);
var inst_20223 = cljs.core.async.close_BANG_.call(null,inst_20220);
var state_20329__$1 = state_20329;
var statearr_20362_20435 = state_20329__$1;
(statearr_20362_20435[(2)] = inst_20223);

(statearr_20362_20435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (22))){
var inst_20241 = (state_20329[(8)]);
var inst_20244 = cljs.core.async.close_BANG_.call(null,inst_20241);
var state_20329__$1 = state_20329;
var statearr_20363_20436 = state_20329__$1;
(statearr_20363_20436[(2)] = inst_20244);

(statearr_20363_20436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (36))){
var inst_20288 = (state_20329[(25)]);
var inst_20292 = cljs.core.chunk_first.call(null,inst_20288);
var inst_20293 = cljs.core.chunk_rest.call(null,inst_20288);
var inst_20294 = cljs.core.count.call(null,inst_20292);
var inst_20269 = inst_20293;
var inst_20270 = inst_20292;
var inst_20271 = inst_20294;
var inst_20272 = (0);
var state_20329__$1 = (function (){var statearr_20364 = state_20329;
(statearr_20364[(20)] = inst_20269);

(statearr_20364[(10)] = inst_20272);

(statearr_20364[(21)] = inst_20271);

(statearr_20364[(12)] = inst_20270);

return statearr_20364;
})();
var statearr_20365_20437 = state_20329__$1;
(statearr_20365_20437[(2)] = null);

(statearr_20365_20437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (41))){
var inst_20288 = (state_20329[(25)]);
var inst_20304 = (state_20329[(2)]);
var inst_20305 = cljs.core.next.call(null,inst_20288);
var inst_20269 = inst_20305;
var inst_20270 = null;
var inst_20271 = (0);
var inst_20272 = (0);
var state_20329__$1 = (function (){var statearr_20366 = state_20329;
(statearr_20366[(20)] = inst_20269);

(statearr_20366[(10)] = inst_20272);

(statearr_20366[(21)] = inst_20271);

(statearr_20366[(12)] = inst_20270);

(statearr_20366[(27)] = inst_20304);

return statearr_20366;
})();
var statearr_20367_20438 = state_20329__$1;
(statearr_20367_20438[(2)] = null);

(statearr_20367_20438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (43))){
var state_20329__$1 = state_20329;
var statearr_20368_20439 = state_20329__$1;
(statearr_20368_20439[(2)] = null);

(statearr_20368_20439[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (29))){
var inst_20313 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20369_20440 = state_20329__$1;
(statearr_20369_20440[(2)] = inst_20313);

(statearr_20369_20440[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (44))){
var inst_20322 = (state_20329[(2)]);
var state_20329__$1 = (function (){var statearr_20370 = state_20329;
(statearr_20370[(28)] = inst_20322);

return statearr_20370;
})();
var statearr_20371_20441 = state_20329__$1;
(statearr_20371_20441[(2)] = null);

(statearr_20371_20441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (6))){
var inst_20261 = (state_20329[(29)]);
var inst_20260 = cljs.core.deref.call(null,cs);
var inst_20261__$1 = cljs.core.keys.call(null,inst_20260);
var inst_20262 = cljs.core.count.call(null,inst_20261__$1);
var inst_20263 = cljs.core.reset_BANG_.call(null,dctr,inst_20262);
var inst_20268 = cljs.core.seq.call(null,inst_20261__$1);
var inst_20269 = inst_20268;
var inst_20270 = null;
var inst_20271 = (0);
var inst_20272 = (0);
var state_20329__$1 = (function (){var statearr_20372 = state_20329;
(statearr_20372[(30)] = inst_20263);

(statearr_20372[(20)] = inst_20269);

(statearr_20372[(10)] = inst_20272);

(statearr_20372[(21)] = inst_20271);

(statearr_20372[(29)] = inst_20261__$1);

(statearr_20372[(12)] = inst_20270);

return statearr_20372;
})();
var statearr_20373_20442 = state_20329__$1;
(statearr_20373_20442[(2)] = null);

(statearr_20373_20442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (28))){
var inst_20269 = (state_20329[(20)]);
var inst_20288 = (state_20329[(25)]);
var inst_20288__$1 = cljs.core.seq.call(null,inst_20269);
var state_20329__$1 = (function (){var statearr_20374 = state_20329;
(statearr_20374[(25)] = inst_20288__$1);

return statearr_20374;
})();
if(inst_20288__$1){
var statearr_20375_20443 = state_20329__$1;
(statearr_20375_20443[(1)] = (33));

} else {
var statearr_20376_20444 = state_20329__$1;
(statearr_20376_20444[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (25))){
var inst_20272 = (state_20329[(10)]);
var inst_20271 = (state_20329[(21)]);
var inst_20274 = (inst_20272 < inst_20271);
var inst_20275 = inst_20274;
var state_20329__$1 = state_20329;
if(cljs.core.truth_(inst_20275)){
var statearr_20377_20445 = state_20329__$1;
(statearr_20377_20445[(1)] = (27));

} else {
var statearr_20378_20446 = state_20329__$1;
(statearr_20378_20446[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (34))){
var state_20329__$1 = state_20329;
var statearr_20379_20447 = state_20329__$1;
(statearr_20379_20447[(2)] = null);

(statearr_20379_20447[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (17))){
var state_20329__$1 = state_20329;
var statearr_20380_20448 = state_20329__$1;
(statearr_20380_20448[(2)] = null);

(statearr_20380_20448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (3))){
var inst_20327 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20329__$1,inst_20327);
} else {
if((state_val_20330 === (12))){
var inst_20256 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20381_20449 = state_20329__$1;
(statearr_20381_20449[(2)] = inst_20256);

(statearr_20381_20449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (2))){
var state_20329__$1 = state_20329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20329__$1,(4),ch);
} else {
if((state_val_20330 === (23))){
var state_20329__$1 = state_20329;
var statearr_20382_20450 = state_20329__$1;
(statearr_20382_20450[(2)] = null);

(statearr_20382_20450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (35))){
var inst_20311 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20383_20451 = state_20329__$1;
(statearr_20383_20451[(2)] = inst_20311);

(statearr_20383_20451[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (19))){
var inst_20230 = (state_20329[(7)]);
var inst_20234 = cljs.core.chunk_first.call(null,inst_20230);
var inst_20235 = cljs.core.chunk_rest.call(null,inst_20230);
var inst_20236 = cljs.core.count.call(null,inst_20234);
var inst_20210 = inst_20235;
var inst_20211 = inst_20234;
var inst_20212 = inst_20236;
var inst_20213 = (0);
var state_20329__$1 = (function (){var statearr_20384 = state_20329;
(statearr_20384[(14)] = inst_20211);

(statearr_20384[(15)] = inst_20213);

(statearr_20384[(16)] = inst_20212);

(statearr_20384[(17)] = inst_20210);

return statearr_20384;
})();
var statearr_20385_20452 = state_20329__$1;
(statearr_20385_20452[(2)] = null);

(statearr_20385_20452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (11))){
var inst_20230 = (state_20329[(7)]);
var inst_20210 = (state_20329[(17)]);
var inst_20230__$1 = cljs.core.seq.call(null,inst_20210);
var state_20329__$1 = (function (){var statearr_20386 = state_20329;
(statearr_20386[(7)] = inst_20230__$1);

return statearr_20386;
})();
if(inst_20230__$1){
var statearr_20387_20453 = state_20329__$1;
(statearr_20387_20453[(1)] = (16));

} else {
var statearr_20388_20454 = state_20329__$1;
(statearr_20388_20454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (9))){
var inst_20258 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20389_20455 = state_20329__$1;
(statearr_20389_20455[(2)] = inst_20258);

(statearr_20389_20455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (5))){
var inst_20208 = cljs.core.deref.call(null,cs);
var inst_20209 = cljs.core.seq.call(null,inst_20208);
var inst_20210 = inst_20209;
var inst_20211 = null;
var inst_20212 = (0);
var inst_20213 = (0);
var state_20329__$1 = (function (){var statearr_20390 = state_20329;
(statearr_20390[(14)] = inst_20211);

(statearr_20390[(15)] = inst_20213);

(statearr_20390[(16)] = inst_20212);

(statearr_20390[(17)] = inst_20210);

return statearr_20390;
})();
var statearr_20391_20456 = state_20329__$1;
(statearr_20391_20456[(2)] = null);

(statearr_20391_20456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (14))){
var state_20329__$1 = state_20329;
var statearr_20392_20457 = state_20329__$1;
(statearr_20392_20457[(2)] = null);

(statearr_20392_20457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (45))){
var inst_20319 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20393_20458 = state_20329__$1;
(statearr_20393_20458[(2)] = inst_20319);

(statearr_20393_20458[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (26))){
var inst_20261 = (state_20329[(29)]);
var inst_20315 = (state_20329[(2)]);
var inst_20316 = cljs.core.seq.call(null,inst_20261);
var state_20329__$1 = (function (){var statearr_20394 = state_20329;
(statearr_20394[(31)] = inst_20315);

return statearr_20394;
})();
if(inst_20316){
var statearr_20395_20459 = state_20329__$1;
(statearr_20395_20459[(1)] = (42));

} else {
var statearr_20396_20460 = state_20329__$1;
(statearr_20396_20460[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (16))){
var inst_20230 = (state_20329[(7)]);
var inst_20232 = cljs.core.chunked_seq_QMARK_.call(null,inst_20230);
var state_20329__$1 = state_20329;
if(inst_20232){
var statearr_20397_20461 = state_20329__$1;
(statearr_20397_20461[(1)] = (19));

} else {
var statearr_20398_20462 = state_20329__$1;
(statearr_20398_20462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (38))){
var inst_20308 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20399_20463 = state_20329__$1;
(statearr_20399_20463[(2)] = inst_20308);

(statearr_20399_20463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (30))){
var state_20329__$1 = state_20329;
var statearr_20400_20464 = state_20329__$1;
(statearr_20400_20464[(2)] = null);

(statearr_20400_20464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (10))){
var inst_20211 = (state_20329[(14)]);
var inst_20213 = (state_20329[(15)]);
var inst_20219 = cljs.core._nth.call(null,inst_20211,inst_20213);
var inst_20220 = cljs.core.nth.call(null,inst_20219,(0),null);
var inst_20221 = cljs.core.nth.call(null,inst_20219,(1),null);
var state_20329__$1 = (function (){var statearr_20401 = state_20329;
(statearr_20401[(26)] = inst_20220);

return statearr_20401;
})();
if(cljs.core.truth_(inst_20221)){
var statearr_20402_20465 = state_20329__$1;
(statearr_20402_20465[(1)] = (13));

} else {
var statearr_20403_20466 = state_20329__$1;
(statearr_20403_20466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (18))){
var inst_20254 = (state_20329[(2)]);
var state_20329__$1 = state_20329;
var statearr_20404_20467 = state_20329__$1;
(statearr_20404_20467[(2)] = inst_20254);

(statearr_20404_20467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (42))){
var state_20329__$1 = state_20329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20329__$1,(45),dchan);
} else {
if((state_val_20330 === (37))){
var inst_20201 = (state_20329[(9)]);
var inst_20297 = (state_20329[(23)]);
var inst_20288 = (state_20329[(25)]);
var inst_20297__$1 = cljs.core.first.call(null,inst_20288);
var inst_20298 = cljs.core.async.put_BANG_.call(null,inst_20297__$1,inst_20201,done);
var state_20329__$1 = (function (){var statearr_20405 = state_20329;
(statearr_20405[(23)] = inst_20297__$1);

return statearr_20405;
})();
if(cljs.core.truth_(inst_20298)){
var statearr_20406_20468 = state_20329__$1;
(statearr_20406_20468[(1)] = (39));

} else {
var statearr_20407_20469 = state_20329__$1;
(statearr_20407_20469[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20330 === (8))){
var inst_20213 = (state_20329[(15)]);
var inst_20212 = (state_20329[(16)]);
var inst_20215 = (inst_20213 < inst_20212);
var inst_20216 = inst_20215;
var state_20329__$1 = state_20329;
if(cljs.core.truth_(inst_20216)){
var statearr_20408_20470 = state_20329__$1;
(statearr_20408_20470[(1)] = (10));

} else {
var statearr_20409_20471 = state_20329__$1;
(statearr_20409_20471[(1)] = (11));

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
});})(c__6473__auto___20417,cs,m,dchan,dctr,done))
;
return ((function (switch__6452__auto__,c__6473__auto___20417,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6453__auto__ = null;
var cljs$core$async$mult_$_state_machine__6453__auto____0 = (function (){
var statearr_20413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20413[(0)] = cljs$core$async$mult_$_state_machine__6453__auto__);

(statearr_20413[(1)] = (1));

return statearr_20413;
});
var cljs$core$async$mult_$_state_machine__6453__auto____1 = (function (state_20329){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_20329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e20414){if((e20414 instanceof Object)){
var ex__6456__auto__ = e20414;
var statearr_20415_20472 = state_20329;
(statearr_20415_20472[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20473 = state_20329;
state_20329 = G__20473;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6453__auto__ = function(state_20329){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6453__auto____1.call(this,state_20329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6453__auto____0;
cljs$core$async$mult_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6453__auto____1;
return cljs$core$async$mult_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___20417,cs,m,dchan,dctr,done))
})();
var state__6475__auto__ = (function (){var statearr_20416 = f__6474__auto__.call(null);
(statearr_20416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___20417);

return statearr_20416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___20417,cs,m,dchan,dctr,done))
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
var G__20475 = arguments.length;
switch (G__20475) {
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

cljs.core.async.Mix = (function (){var obj20478 = {};
return obj20478;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20483){
var map__20484 = p__20483;
var map__20484__$1 = ((cljs.core.seq_QMARK_.call(null,map__20484))?cljs.core.apply.call(null,cljs.core.hash_map,map__20484):map__20484);
var opts = map__20484__$1;
var statearr_20485_20488 = state;
(statearr_20485_20488[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20484,map__20484__$1,opts){
return (function (val){
var statearr_20486_20489 = state;
(statearr_20486_20489[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20484,map__20484__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20487_20490 = state;
(statearr_20487_20490[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20479){
var G__20480 = cljs.core.first.call(null,seq20479);
var seq20479__$1 = cljs.core.next.call(null,seq20479);
var G__20481 = cljs.core.first.call(null,seq20479__$1);
var seq20479__$2 = cljs.core.next.call(null,seq20479__$1);
var G__20482 = cljs.core.first.call(null,seq20479__$2);
var seq20479__$3 = cljs.core.next.call(null,seq20479__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20480,G__20481,G__20482,seq20479__$3);
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
if(typeof cljs.core.async.t20610 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20610 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20611){
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
this.meta20611 = meta20611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20610.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20610.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20612){
var self__ = this;
var _20612__$1 = this;
return self__.meta20611;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20612,meta20611__$1){
var self__ = this;
var _20612__$1 = this;
return (new cljs.core.async.t20610(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20611__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20610.cljs$lang$type = true;

cljs.core.async.t20610.cljs$lang$ctorStr = "cljs.core.async/t20610";

cljs.core.async.t20610.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t20610");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20610 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t20610(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20611){
return (new cljs.core.async.t20610(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20611));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20610(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6473__auto___20729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20682){
var state_val_20683 = (state_20682[(1)]);
if((state_val_20683 === (7))){
var inst_20626 = (state_20682[(7)]);
var inst_20631 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20626);
var state_20682__$1 = state_20682;
var statearr_20684_20730 = state_20682__$1;
(statearr_20684_20730[(2)] = inst_20631);

(statearr_20684_20730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (20))){
var inst_20641 = (state_20682[(8)]);
var state_20682__$1 = state_20682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20682__$1,(23),out,inst_20641);
} else {
if((state_val_20683 === (1))){
var inst_20616 = (state_20682[(9)]);
var inst_20616__$1 = calc_state.call(null);
var inst_20617 = cljs.core.seq_QMARK_.call(null,inst_20616__$1);
var state_20682__$1 = (function (){var statearr_20685 = state_20682;
(statearr_20685[(9)] = inst_20616__$1);

return statearr_20685;
})();
if(inst_20617){
var statearr_20686_20731 = state_20682__$1;
(statearr_20686_20731[(1)] = (2));

} else {
var statearr_20687_20732 = state_20682__$1;
(statearr_20687_20732[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (24))){
var inst_20634 = (state_20682[(10)]);
var inst_20626 = inst_20634;
var state_20682__$1 = (function (){var statearr_20688 = state_20682;
(statearr_20688[(7)] = inst_20626);

return statearr_20688;
})();
var statearr_20689_20733 = state_20682__$1;
(statearr_20689_20733[(2)] = null);

(statearr_20689_20733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (4))){
var inst_20616 = (state_20682[(9)]);
var inst_20622 = (state_20682[(2)]);
var inst_20623 = cljs.core.get.call(null,inst_20622,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20624 = cljs.core.get.call(null,inst_20622,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20625 = cljs.core.get.call(null,inst_20622,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20626 = inst_20616;
var state_20682__$1 = (function (){var statearr_20690 = state_20682;
(statearr_20690[(7)] = inst_20626);

(statearr_20690[(11)] = inst_20625);

(statearr_20690[(12)] = inst_20623);

(statearr_20690[(13)] = inst_20624);

return statearr_20690;
})();
var statearr_20691_20734 = state_20682__$1;
(statearr_20691_20734[(2)] = null);

(statearr_20691_20734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (15))){
var state_20682__$1 = state_20682;
var statearr_20692_20735 = state_20682__$1;
(statearr_20692_20735[(2)] = null);

(statearr_20692_20735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (21))){
var inst_20634 = (state_20682[(10)]);
var inst_20626 = inst_20634;
var state_20682__$1 = (function (){var statearr_20693 = state_20682;
(statearr_20693[(7)] = inst_20626);

return statearr_20693;
})();
var statearr_20694_20736 = state_20682__$1;
(statearr_20694_20736[(2)] = null);

(statearr_20694_20736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (13))){
var inst_20678 = (state_20682[(2)]);
var state_20682__$1 = state_20682;
var statearr_20695_20737 = state_20682__$1;
(statearr_20695_20737[(2)] = inst_20678);

(statearr_20695_20737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (22))){
var inst_20676 = (state_20682[(2)]);
var state_20682__$1 = state_20682;
var statearr_20696_20738 = state_20682__$1;
(statearr_20696_20738[(2)] = inst_20676);

(statearr_20696_20738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (6))){
var inst_20680 = (state_20682[(2)]);
var state_20682__$1 = state_20682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20682__$1,inst_20680);
} else {
if((state_val_20683 === (25))){
var state_20682__$1 = state_20682;
var statearr_20697_20739 = state_20682__$1;
(statearr_20697_20739[(2)] = null);

(statearr_20697_20739[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (17))){
var inst_20656 = (state_20682[(14)]);
var state_20682__$1 = state_20682;
var statearr_20698_20740 = state_20682__$1;
(statearr_20698_20740[(2)] = inst_20656);

(statearr_20698_20740[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (3))){
var inst_20616 = (state_20682[(9)]);
var state_20682__$1 = state_20682;
var statearr_20699_20741 = state_20682__$1;
(statearr_20699_20741[(2)] = inst_20616);

(statearr_20699_20741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (12))){
var inst_20637 = (state_20682[(15)]);
var inst_20656 = (state_20682[(14)]);
var inst_20642 = (state_20682[(16)]);
var inst_20656__$1 = inst_20637.call(null,inst_20642);
var state_20682__$1 = (function (){var statearr_20700 = state_20682;
(statearr_20700[(14)] = inst_20656__$1);

return statearr_20700;
})();
if(cljs.core.truth_(inst_20656__$1)){
var statearr_20701_20742 = state_20682__$1;
(statearr_20701_20742[(1)] = (17));

} else {
var statearr_20702_20743 = state_20682__$1;
(statearr_20702_20743[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (2))){
var inst_20616 = (state_20682[(9)]);
var inst_20619 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20616);
var state_20682__$1 = state_20682;
var statearr_20703_20744 = state_20682__$1;
(statearr_20703_20744[(2)] = inst_20619);

(statearr_20703_20744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (23))){
var inst_20667 = (state_20682[(2)]);
var state_20682__$1 = state_20682;
if(cljs.core.truth_(inst_20667)){
var statearr_20704_20745 = state_20682__$1;
(statearr_20704_20745[(1)] = (24));

} else {
var statearr_20705_20746 = state_20682__$1;
(statearr_20705_20746[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (19))){
var inst_20664 = (state_20682[(2)]);
var state_20682__$1 = state_20682;
if(cljs.core.truth_(inst_20664)){
var statearr_20706_20747 = state_20682__$1;
(statearr_20706_20747[(1)] = (20));

} else {
var statearr_20707_20748 = state_20682__$1;
(statearr_20707_20748[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (11))){
var inst_20641 = (state_20682[(8)]);
var inst_20647 = (inst_20641 == null);
var state_20682__$1 = state_20682;
if(cljs.core.truth_(inst_20647)){
var statearr_20708_20749 = state_20682__$1;
(statearr_20708_20749[(1)] = (14));

} else {
var statearr_20709_20750 = state_20682__$1;
(statearr_20709_20750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (9))){
var inst_20634 = (state_20682[(10)]);
var inst_20634__$1 = (state_20682[(2)]);
var inst_20635 = cljs.core.get.call(null,inst_20634__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20636 = cljs.core.get.call(null,inst_20634__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20637 = cljs.core.get.call(null,inst_20634__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20682__$1 = (function (){var statearr_20710 = state_20682;
(statearr_20710[(15)] = inst_20637);

(statearr_20710[(10)] = inst_20634__$1);

(statearr_20710[(17)] = inst_20636);

return statearr_20710;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20682__$1,(10),inst_20635);
} else {
if((state_val_20683 === (5))){
var inst_20626 = (state_20682[(7)]);
var inst_20629 = cljs.core.seq_QMARK_.call(null,inst_20626);
var state_20682__$1 = state_20682;
if(inst_20629){
var statearr_20711_20751 = state_20682__$1;
(statearr_20711_20751[(1)] = (7));

} else {
var statearr_20712_20752 = state_20682__$1;
(statearr_20712_20752[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (14))){
var inst_20642 = (state_20682[(16)]);
var inst_20649 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20642);
var state_20682__$1 = state_20682;
var statearr_20713_20753 = state_20682__$1;
(statearr_20713_20753[(2)] = inst_20649);

(statearr_20713_20753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (26))){
var inst_20672 = (state_20682[(2)]);
var state_20682__$1 = state_20682;
var statearr_20714_20754 = state_20682__$1;
(statearr_20714_20754[(2)] = inst_20672);

(statearr_20714_20754[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (16))){
var inst_20652 = (state_20682[(2)]);
var inst_20653 = calc_state.call(null);
var inst_20626 = inst_20653;
var state_20682__$1 = (function (){var statearr_20715 = state_20682;
(statearr_20715[(7)] = inst_20626);

(statearr_20715[(18)] = inst_20652);

return statearr_20715;
})();
var statearr_20716_20755 = state_20682__$1;
(statearr_20716_20755[(2)] = null);

(statearr_20716_20755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (10))){
var inst_20642 = (state_20682[(16)]);
var inst_20641 = (state_20682[(8)]);
var inst_20640 = (state_20682[(2)]);
var inst_20641__$1 = cljs.core.nth.call(null,inst_20640,(0),null);
var inst_20642__$1 = cljs.core.nth.call(null,inst_20640,(1),null);
var inst_20643 = (inst_20641__$1 == null);
var inst_20644 = cljs.core._EQ_.call(null,inst_20642__$1,change);
var inst_20645 = (inst_20643) || (inst_20644);
var state_20682__$1 = (function (){var statearr_20717 = state_20682;
(statearr_20717[(16)] = inst_20642__$1);

(statearr_20717[(8)] = inst_20641__$1);

return statearr_20717;
})();
if(cljs.core.truth_(inst_20645)){
var statearr_20718_20756 = state_20682__$1;
(statearr_20718_20756[(1)] = (11));

} else {
var statearr_20719_20757 = state_20682__$1;
(statearr_20719_20757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (18))){
var inst_20637 = (state_20682[(15)]);
var inst_20642 = (state_20682[(16)]);
var inst_20636 = (state_20682[(17)]);
var inst_20659 = cljs.core.empty_QMARK_.call(null,inst_20637);
var inst_20660 = inst_20636.call(null,inst_20642);
var inst_20661 = cljs.core.not.call(null,inst_20660);
var inst_20662 = (inst_20659) && (inst_20661);
var state_20682__$1 = state_20682;
var statearr_20720_20758 = state_20682__$1;
(statearr_20720_20758[(2)] = inst_20662);

(statearr_20720_20758[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20683 === (8))){
var inst_20626 = (state_20682[(7)]);
var state_20682__$1 = state_20682;
var statearr_20721_20759 = state_20682__$1;
(statearr_20721_20759[(2)] = inst_20626);

(statearr_20721_20759[(1)] = (9));


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
});})(c__6473__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6452__auto__,c__6473__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6453__auto__ = null;
var cljs$core$async$mix_$_state_machine__6453__auto____0 = (function (){
var statearr_20725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20725[(0)] = cljs$core$async$mix_$_state_machine__6453__auto__);

(statearr_20725[(1)] = (1));

return statearr_20725;
});
var cljs$core$async$mix_$_state_machine__6453__auto____1 = (function (state_20682){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_20682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e20726){if((e20726 instanceof Object)){
var ex__6456__auto__ = e20726;
var statearr_20727_20760 = state_20682;
(statearr_20727_20760[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20761 = state_20682;
state_20682 = G__20761;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6453__auto__ = function(state_20682){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6453__auto____1.call(this,state_20682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6453__auto____0;
cljs$core$async$mix_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6453__auto____1;
return cljs$core$async$mix_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6475__auto__ = (function (){var statearr_20728 = f__6474__auto__.call(null);
(statearr_20728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___20729);

return statearr_20728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20763 = {};
return obj20763;
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
var G__20765 = arguments.length;
switch (G__20765) {
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
var G__20769 = arguments.length;
switch (G__20769) {
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
return (function (p1__20767_SHARP_){
if(cljs.core.truth_(p1__20767_SHARP_.call(null,topic))){
return p1__20767_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20767_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20770 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20770 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta20771){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta20771 = meta20771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20770.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20770.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20770.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20770.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20772){
var self__ = this;
var _20772__$1 = this;
return self__.meta20771;
});})(mults,ensure_mult))
;

cljs.core.async.t20770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20772,meta20771__$1){
var self__ = this;
var _20772__$1 = this;
return (new cljs.core.async.t20770(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta20771__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20770.cljs$lang$type = true;

cljs.core.async.t20770.cljs$lang$ctorStr = "cljs.core.async/t20770";

cljs.core.async.t20770.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t20770");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20770 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t20770(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta20771){
return (new cljs.core.async.t20770(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta20771));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20770(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6473__auto___20893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___20893,mults,ensure_mult,p){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___20893,mults,ensure_mult,p){
return (function (state_20844){
var state_val_20845 = (state_20844[(1)]);
if((state_val_20845 === (7))){
var inst_20840 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20846_20894 = state_20844__$1;
(statearr_20846_20894[(2)] = inst_20840);

(statearr_20846_20894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (20))){
var state_20844__$1 = state_20844;
var statearr_20847_20895 = state_20844__$1;
(statearr_20847_20895[(2)] = null);

(statearr_20847_20895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (1))){
var state_20844__$1 = state_20844;
var statearr_20848_20896 = state_20844__$1;
(statearr_20848_20896[(2)] = null);

(statearr_20848_20896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (24))){
var inst_20823 = (state_20844[(7)]);
var inst_20832 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20823);
var state_20844__$1 = state_20844;
var statearr_20849_20897 = state_20844__$1;
(statearr_20849_20897[(2)] = inst_20832);

(statearr_20849_20897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (4))){
var inst_20775 = (state_20844[(8)]);
var inst_20775__$1 = (state_20844[(2)]);
var inst_20776 = (inst_20775__$1 == null);
var state_20844__$1 = (function (){var statearr_20850 = state_20844;
(statearr_20850[(8)] = inst_20775__$1);

return statearr_20850;
})();
if(cljs.core.truth_(inst_20776)){
var statearr_20851_20898 = state_20844__$1;
(statearr_20851_20898[(1)] = (5));

} else {
var statearr_20852_20899 = state_20844__$1;
(statearr_20852_20899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (15))){
var inst_20817 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20853_20900 = state_20844__$1;
(statearr_20853_20900[(2)] = inst_20817);

(statearr_20853_20900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (21))){
var inst_20837 = (state_20844[(2)]);
var state_20844__$1 = (function (){var statearr_20854 = state_20844;
(statearr_20854[(9)] = inst_20837);

return statearr_20854;
})();
var statearr_20855_20901 = state_20844__$1;
(statearr_20855_20901[(2)] = null);

(statearr_20855_20901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (13))){
var inst_20799 = (state_20844[(10)]);
var inst_20801 = cljs.core.chunked_seq_QMARK_.call(null,inst_20799);
var state_20844__$1 = state_20844;
if(inst_20801){
var statearr_20856_20902 = state_20844__$1;
(statearr_20856_20902[(1)] = (16));

} else {
var statearr_20857_20903 = state_20844__$1;
(statearr_20857_20903[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (22))){
var inst_20829 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
if(cljs.core.truth_(inst_20829)){
var statearr_20858_20904 = state_20844__$1;
(statearr_20858_20904[(1)] = (23));

} else {
var statearr_20859_20905 = state_20844__$1;
(statearr_20859_20905[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (6))){
var inst_20775 = (state_20844[(8)]);
var inst_20825 = (state_20844[(11)]);
var inst_20823 = (state_20844[(7)]);
var inst_20823__$1 = topic_fn.call(null,inst_20775);
var inst_20824 = cljs.core.deref.call(null,mults);
var inst_20825__$1 = cljs.core.get.call(null,inst_20824,inst_20823__$1);
var state_20844__$1 = (function (){var statearr_20860 = state_20844;
(statearr_20860[(11)] = inst_20825__$1);

(statearr_20860[(7)] = inst_20823__$1);

return statearr_20860;
})();
if(cljs.core.truth_(inst_20825__$1)){
var statearr_20861_20906 = state_20844__$1;
(statearr_20861_20906[(1)] = (19));

} else {
var statearr_20862_20907 = state_20844__$1;
(statearr_20862_20907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (25))){
var inst_20834 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20863_20908 = state_20844__$1;
(statearr_20863_20908[(2)] = inst_20834);

(statearr_20863_20908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (17))){
var inst_20799 = (state_20844[(10)]);
var inst_20808 = cljs.core.first.call(null,inst_20799);
var inst_20809 = cljs.core.async.muxch_STAR_.call(null,inst_20808);
var inst_20810 = cljs.core.async.close_BANG_.call(null,inst_20809);
var inst_20811 = cljs.core.next.call(null,inst_20799);
var inst_20785 = inst_20811;
var inst_20786 = null;
var inst_20787 = (0);
var inst_20788 = (0);
var state_20844__$1 = (function (){var statearr_20864 = state_20844;
(statearr_20864[(12)] = inst_20787);

(statearr_20864[(13)] = inst_20785);

(statearr_20864[(14)] = inst_20810);

(statearr_20864[(15)] = inst_20788);

(statearr_20864[(16)] = inst_20786);

return statearr_20864;
})();
var statearr_20865_20909 = state_20844__$1;
(statearr_20865_20909[(2)] = null);

(statearr_20865_20909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (3))){
var inst_20842 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20844__$1,inst_20842);
} else {
if((state_val_20845 === (12))){
var inst_20819 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20866_20910 = state_20844__$1;
(statearr_20866_20910[(2)] = inst_20819);

(statearr_20866_20910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (2))){
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20844__$1,(4),ch);
} else {
if((state_val_20845 === (23))){
var state_20844__$1 = state_20844;
var statearr_20867_20911 = state_20844__$1;
(statearr_20867_20911[(2)] = null);

(statearr_20867_20911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (19))){
var inst_20775 = (state_20844[(8)]);
var inst_20825 = (state_20844[(11)]);
var inst_20827 = cljs.core.async.muxch_STAR_.call(null,inst_20825);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20844__$1,(22),inst_20827,inst_20775);
} else {
if((state_val_20845 === (11))){
var inst_20785 = (state_20844[(13)]);
var inst_20799 = (state_20844[(10)]);
var inst_20799__$1 = cljs.core.seq.call(null,inst_20785);
var state_20844__$1 = (function (){var statearr_20868 = state_20844;
(statearr_20868[(10)] = inst_20799__$1);

return statearr_20868;
})();
if(inst_20799__$1){
var statearr_20869_20912 = state_20844__$1;
(statearr_20869_20912[(1)] = (13));

} else {
var statearr_20870_20913 = state_20844__$1;
(statearr_20870_20913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (9))){
var inst_20821 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20871_20914 = state_20844__$1;
(statearr_20871_20914[(2)] = inst_20821);

(statearr_20871_20914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (5))){
var inst_20782 = cljs.core.deref.call(null,mults);
var inst_20783 = cljs.core.vals.call(null,inst_20782);
var inst_20784 = cljs.core.seq.call(null,inst_20783);
var inst_20785 = inst_20784;
var inst_20786 = null;
var inst_20787 = (0);
var inst_20788 = (0);
var state_20844__$1 = (function (){var statearr_20872 = state_20844;
(statearr_20872[(12)] = inst_20787);

(statearr_20872[(13)] = inst_20785);

(statearr_20872[(15)] = inst_20788);

(statearr_20872[(16)] = inst_20786);

return statearr_20872;
})();
var statearr_20873_20915 = state_20844__$1;
(statearr_20873_20915[(2)] = null);

(statearr_20873_20915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (14))){
var state_20844__$1 = state_20844;
var statearr_20877_20916 = state_20844__$1;
(statearr_20877_20916[(2)] = null);

(statearr_20877_20916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (16))){
var inst_20799 = (state_20844[(10)]);
var inst_20803 = cljs.core.chunk_first.call(null,inst_20799);
var inst_20804 = cljs.core.chunk_rest.call(null,inst_20799);
var inst_20805 = cljs.core.count.call(null,inst_20803);
var inst_20785 = inst_20804;
var inst_20786 = inst_20803;
var inst_20787 = inst_20805;
var inst_20788 = (0);
var state_20844__$1 = (function (){var statearr_20878 = state_20844;
(statearr_20878[(12)] = inst_20787);

(statearr_20878[(13)] = inst_20785);

(statearr_20878[(15)] = inst_20788);

(statearr_20878[(16)] = inst_20786);

return statearr_20878;
})();
var statearr_20879_20917 = state_20844__$1;
(statearr_20879_20917[(2)] = null);

(statearr_20879_20917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (10))){
var inst_20787 = (state_20844[(12)]);
var inst_20785 = (state_20844[(13)]);
var inst_20788 = (state_20844[(15)]);
var inst_20786 = (state_20844[(16)]);
var inst_20793 = cljs.core._nth.call(null,inst_20786,inst_20788);
var inst_20794 = cljs.core.async.muxch_STAR_.call(null,inst_20793);
var inst_20795 = cljs.core.async.close_BANG_.call(null,inst_20794);
var inst_20796 = (inst_20788 + (1));
var tmp20874 = inst_20787;
var tmp20875 = inst_20785;
var tmp20876 = inst_20786;
var inst_20785__$1 = tmp20875;
var inst_20786__$1 = tmp20876;
var inst_20787__$1 = tmp20874;
var inst_20788__$1 = inst_20796;
var state_20844__$1 = (function (){var statearr_20880 = state_20844;
(statearr_20880[(12)] = inst_20787__$1);

(statearr_20880[(13)] = inst_20785__$1);

(statearr_20880[(17)] = inst_20795);

(statearr_20880[(15)] = inst_20788__$1);

(statearr_20880[(16)] = inst_20786__$1);

return statearr_20880;
})();
var statearr_20881_20918 = state_20844__$1;
(statearr_20881_20918[(2)] = null);

(statearr_20881_20918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (18))){
var inst_20814 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20882_20919 = state_20844__$1;
(statearr_20882_20919[(2)] = inst_20814);

(statearr_20882_20919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (8))){
var inst_20787 = (state_20844[(12)]);
var inst_20788 = (state_20844[(15)]);
var inst_20790 = (inst_20788 < inst_20787);
var inst_20791 = inst_20790;
var state_20844__$1 = state_20844;
if(cljs.core.truth_(inst_20791)){
var statearr_20883_20920 = state_20844__$1;
(statearr_20883_20920[(1)] = (10));

} else {
var statearr_20884_20921 = state_20844__$1;
(statearr_20884_20921[(1)] = (11));

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
});})(c__6473__auto___20893,mults,ensure_mult,p))
;
return ((function (switch__6452__auto__,c__6473__auto___20893,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_20888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20888[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_20888[(1)] = (1));

return statearr_20888;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_20844){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_20844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e20889){if((e20889 instanceof Object)){
var ex__6456__auto__ = e20889;
var statearr_20890_20922 = state_20844;
(statearr_20890_20922[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20923 = state_20844;
state_20844 = G__20923;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_20844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_20844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___20893,mults,ensure_mult,p))
})();
var state__6475__auto__ = (function (){var statearr_20891 = f__6474__auto__.call(null);
(statearr_20891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___20893);

return statearr_20891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___20893,mults,ensure_mult,p))
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
var G__20925 = arguments.length;
switch (G__20925) {
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
var G__20928 = arguments.length;
switch (G__20928) {
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
var G__20931 = arguments.length;
switch (G__20931) {
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
var c__6473__auto___21001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20970){
var state_val_20971 = (state_20970[(1)]);
if((state_val_20971 === (7))){
var state_20970__$1 = state_20970;
var statearr_20972_21002 = state_20970__$1;
(statearr_20972_21002[(2)] = null);

(statearr_20972_21002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (1))){
var state_20970__$1 = state_20970;
var statearr_20973_21003 = state_20970__$1;
(statearr_20973_21003[(2)] = null);

(statearr_20973_21003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (4))){
var inst_20934 = (state_20970[(7)]);
var inst_20936 = (inst_20934 < cnt);
var state_20970__$1 = state_20970;
if(cljs.core.truth_(inst_20936)){
var statearr_20974_21004 = state_20970__$1;
(statearr_20974_21004[(1)] = (6));

} else {
var statearr_20975_21005 = state_20970__$1;
(statearr_20975_21005[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (15))){
var inst_20966 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20976_21006 = state_20970__$1;
(statearr_20976_21006[(2)] = inst_20966);

(statearr_20976_21006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (13))){
var inst_20959 = cljs.core.async.close_BANG_.call(null,out);
var state_20970__$1 = state_20970;
var statearr_20977_21007 = state_20970__$1;
(statearr_20977_21007[(2)] = inst_20959);

(statearr_20977_21007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (6))){
var state_20970__$1 = state_20970;
var statearr_20978_21008 = state_20970__$1;
(statearr_20978_21008[(2)] = null);

(statearr_20978_21008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (3))){
var inst_20968 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20970__$1,inst_20968);
} else {
if((state_val_20971 === (12))){
var inst_20956 = (state_20970[(8)]);
var inst_20956__$1 = (state_20970[(2)]);
var inst_20957 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20956__$1);
var state_20970__$1 = (function (){var statearr_20979 = state_20970;
(statearr_20979[(8)] = inst_20956__$1);

return statearr_20979;
})();
if(cljs.core.truth_(inst_20957)){
var statearr_20980_21009 = state_20970__$1;
(statearr_20980_21009[(1)] = (13));

} else {
var statearr_20981_21010 = state_20970__$1;
(statearr_20981_21010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (2))){
var inst_20933 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20934 = (0);
var state_20970__$1 = (function (){var statearr_20982 = state_20970;
(statearr_20982[(9)] = inst_20933);

(statearr_20982[(7)] = inst_20934);

return statearr_20982;
})();
var statearr_20983_21011 = state_20970__$1;
(statearr_20983_21011[(2)] = null);

(statearr_20983_21011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (11))){
var inst_20934 = (state_20970[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20970,(10),Object,null,(9));
var inst_20943 = chs__$1.call(null,inst_20934);
var inst_20944 = done.call(null,inst_20934);
var inst_20945 = cljs.core.async.take_BANG_.call(null,inst_20943,inst_20944);
var state_20970__$1 = state_20970;
var statearr_20984_21012 = state_20970__$1;
(statearr_20984_21012[(2)] = inst_20945);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (9))){
var inst_20934 = (state_20970[(7)]);
var inst_20947 = (state_20970[(2)]);
var inst_20948 = (inst_20934 + (1));
var inst_20934__$1 = inst_20948;
var state_20970__$1 = (function (){var statearr_20985 = state_20970;
(statearr_20985[(10)] = inst_20947);

(statearr_20985[(7)] = inst_20934__$1);

return statearr_20985;
})();
var statearr_20986_21013 = state_20970__$1;
(statearr_20986_21013[(2)] = null);

(statearr_20986_21013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (5))){
var inst_20954 = (state_20970[(2)]);
var state_20970__$1 = (function (){var statearr_20987 = state_20970;
(statearr_20987[(11)] = inst_20954);

return statearr_20987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20970__$1,(12),dchan);
} else {
if((state_val_20971 === (14))){
var inst_20956 = (state_20970[(8)]);
var inst_20961 = cljs.core.apply.call(null,f,inst_20956);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20970__$1,(16),out,inst_20961);
} else {
if((state_val_20971 === (16))){
var inst_20963 = (state_20970[(2)]);
var state_20970__$1 = (function (){var statearr_20988 = state_20970;
(statearr_20988[(12)] = inst_20963);

return statearr_20988;
})();
var statearr_20989_21014 = state_20970__$1;
(statearr_20989_21014[(2)] = null);

(statearr_20989_21014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (10))){
var inst_20938 = (state_20970[(2)]);
var inst_20939 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20970__$1 = (function (){var statearr_20990 = state_20970;
(statearr_20990[(13)] = inst_20938);

return statearr_20990;
})();
var statearr_20991_21015 = state_20970__$1;
(statearr_20991_21015[(2)] = inst_20939);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (8))){
var inst_20952 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20992_21016 = state_20970__$1;
(statearr_20992_21016[(2)] = inst_20952);

(statearr_20992_21016[(1)] = (5));


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
});})(c__6473__auto___21001,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6452__auto__,c__6473__auto___21001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_20996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20996[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_20996[(1)] = (1));

return statearr_20996;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_20970){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_20970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e20997){if((e20997 instanceof Object)){
var ex__6456__auto__ = e20997;
var statearr_20998_21017 = state_20970;
(statearr_20998_21017[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21018 = state_20970;
state_20970 = G__21018;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_20970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_20970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21001,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6475__auto__ = (function (){var statearr_20999 = f__6474__auto__.call(null);
(statearr_20999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21001);

return statearr_20999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21001,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__21021 = arguments.length;
switch (G__21021) {
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
var c__6473__auto___21076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21076,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21076,out){
return (function (state_21051){
var state_val_21052 = (state_21051[(1)]);
if((state_val_21052 === (7))){
var inst_21031 = (state_21051[(7)]);
var inst_21030 = (state_21051[(8)]);
var inst_21030__$1 = (state_21051[(2)]);
var inst_21031__$1 = cljs.core.nth.call(null,inst_21030__$1,(0),null);
var inst_21032 = cljs.core.nth.call(null,inst_21030__$1,(1),null);
var inst_21033 = (inst_21031__$1 == null);
var state_21051__$1 = (function (){var statearr_21053 = state_21051;
(statearr_21053[(7)] = inst_21031__$1);

(statearr_21053[(8)] = inst_21030__$1);

(statearr_21053[(9)] = inst_21032);

return statearr_21053;
})();
if(cljs.core.truth_(inst_21033)){
var statearr_21054_21077 = state_21051__$1;
(statearr_21054_21077[(1)] = (8));

} else {
var statearr_21055_21078 = state_21051__$1;
(statearr_21055_21078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (1))){
var inst_21022 = cljs.core.vec.call(null,chs);
var inst_21023 = inst_21022;
var state_21051__$1 = (function (){var statearr_21056 = state_21051;
(statearr_21056[(10)] = inst_21023);

return statearr_21056;
})();
var statearr_21057_21079 = state_21051__$1;
(statearr_21057_21079[(2)] = null);

(statearr_21057_21079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (4))){
var inst_21023 = (state_21051[(10)]);
var state_21051__$1 = state_21051;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21051__$1,(7),inst_21023);
} else {
if((state_val_21052 === (6))){
var inst_21047 = (state_21051[(2)]);
var state_21051__$1 = state_21051;
var statearr_21058_21080 = state_21051__$1;
(statearr_21058_21080[(2)] = inst_21047);

(statearr_21058_21080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (3))){
var inst_21049 = (state_21051[(2)]);
var state_21051__$1 = state_21051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21051__$1,inst_21049);
} else {
if((state_val_21052 === (2))){
var inst_21023 = (state_21051[(10)]);
var inst_21025 = cljs.core.count.call(null,inst_21023);
var inst_21026 = (inst_21025 > (0));
var state_21051__$1 = state_21051;
if(cljs.core.truth_(inst_21026)){
var statearr_21060_21081 = state_21051__$1;
(statearr_21060_21081[(1)] = (4));

} else {
var statearr_21061_21082 = state_21051__$1;
(statearr_21061_21082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (11))){
var inst_21023 = (state_21051[(10)]);
var inst_21040 = (state_21051[(2)]);
var tmp21059 = inst_21023;
var inst_21023__$1 = tmp21059;
var state_21051__$1 = (function (){var statearr_21062 = state_21051;
(statearr_21062[(11)] = inst_21040);

(statearr_21062[(10)] = inst_21023__$1);

return statearr_21062;
})();
var statearr_21063_21083 = state_21051__$1;
(statearr_21063_21083[(2)] = null);

(statearr_21063_21083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (9))){
var inst_21031 = (state_21051[(7)]);
var state_21051__$1 = state_21051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21051__$1,(11),out,inst_21031);
} else {
if((state_val_21052 === (5))){
var inst_21045 = cljs.core.async.close_BANG_.call(null,out);
var state_21051__$1 = state_21051;
var statearr_21064_21084 = state_21051__$1;
(statearr_21064_21084[(2)] = inst_21045);

(statearr_21064_21084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (10))){
var inst_21043 = (state_21051[(2)]);
var state_21051__$1 = state_21051;
var statearr_21065_21085 = state_21051__$1;
(statearr_21065_21085[(2)] = inst_21043);

(statearr_21065_21085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21052 === (8))){
var inst_21031 = (state_21051[(7)]);
var inst_21030 = (state_21051[(8)]);
var inst_21032 = (state_21051[(9)]);
var inst_21023 = (state_21051[(10)]);
var inst_21035 = (function (){var c = inst_21032;
var v = inst_21031;
var vec__21028 = inst_21030;
var cs = inst_21023;
return ((function (c,v,vec__21028,cs,inst_21031,inst_21030,inst_21032,inst_21023,state_val_21052,c__6473__auto___21076,out){
return (function (p1__21019_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21019_SHARP_);
});
;})(c,v,vec__21028,cs,inst_21031,inst_21030,inst_21032,inst_21023,state_val_21052,c__6473__auto___21076,out))
})();
var inst_21036 = cljs.core.filterv.call(null,inst_21035,inst_21023);
var inst_21023__$1 = inst_21036;
var state_21051__$1 = (function (){var statearr_21066 = state_21051;
(statearr_21066[(10)] = inst_21023__$1);

return statearr_21066;
})();
var statearr_21067_21086 = state_21051__$1;
(statearr_21067_21086[(2)] = null);

(statearr_21067_21086[(1)] = (2));


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
});})(c__6473__auto___21076,out))
;
return ((function (switch__6452__auto__,c__6473__auto___21076,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_21071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21071[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_21071[(1)] = (1));

return statearr_21071;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_21051){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21072){if((e21072 instanceof Object)){
var ex__6456__auto__ = e21072;
var statearr_21073_21087 = state_21051;
(statearr_21073_21087[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21088 = state_21051;
state_21051 = G__21088;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_21051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_21051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21076,out))
})();
var state__6475__auto__ = (function (){var statearr_21074 = f__6474__auto__.call(null);
(statearr_21074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21076);

return statearr_21074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21076,out))
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
var G__21090 = arguments.length;
switch (G__21090) {
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
var c__6473__auto___21138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21138,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21138,out){
return (function (state_21114){
var state_val_21115 = (state_21114[(1)]);
if((state_val_21115 === (7))){
var inst_21096 = (state_21114[(7)]);
var inst_21096__$1 = (state_21114[(2)]);
var inst_21097 = (inst_21096__$1 == null);
var inst_21098 = cljs.core.not.call(null,inst_21097);
var state_21114__$1 = (function (){var statearr_21116 = state_21114;
(statearr_21116[(7)] = inst_21096__$1);

return statearr_21116;
})();
if(inst_21098){
var statearr_21117_21139 = state_21114__$1;
(statearr_21117_21139[(1)] = (8));

} else {
var statearr_21118_21140 = state_21114__$1;
(statearr_21118_21140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (1))){
var inst_21091 = (0);
var state_21114__$1 = (function (){var statearr_21119 = state_21114;
(statearr_21119[(8)] = inst_21091);

return statearr_21119;
})();
var statearr_21120_21141 = state_21114__$1;
(statearr_21120_21141[(2)] = null);

(statearr_21120_21141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (4))){
var state_21114__$1 = state_21114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21114__$1,(7),ch);
} else {
if((state_val_21115 === (6))){
var inst_21109 = (state_21114[(2)]);
var state_21114__$1 = state_21114;
var statearr_21121_21142 = state_21114__$1;
(statearr_21121_21142[(2)] = inst_21109);

(statearr_21121_21142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (3))){
var inst_21111 = (state_21114[(2)]);
var inst_21112 = cljs.core.async.close_BANG_.call(null,out);
var state_21114__$1 = (function (){var statearr_21122 = state_21114;
(statearr_21122[(9)] = inst_21111);

return statearr_21122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21114__$1,inst_21112);
} else {
if((state_val_21115 === (2))){
var inst_21091 = (state_21114[(8)]);
var inst_21093 = (inst_21091 < n);
var state_21114__$1 = state_21114;
if(cljs.core.truth_(inst_21093)){
var statearr_21123_21143 = state_21114__$1;
(statearr_21123_21143[(1)] = (4));

} else {
var statearr_21124_21144 = state_21114__$1;
(statearr_21124_21144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (11))){
var inst_21091 = (state_21114[(8)]);
var inst_21101 = (state_21114[(2)]);
var inst_21102 = (inst_21091 + (1));
var inst_21091__$1 = inst_21102;
var state_21114__$1 = (function (){var statearr_21125 = state_21114;
(statearr_21125[(10)] = inst_21101);

(statearr_21125[(8)] = inst_21091__$1);

return statearr_21125;
})();
var statearr_21126_21145 = state_21114__$1;
(statearr_21126_21145[(2)] = null);

(statearr_21126_21145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (9))){
var state_21114__$1 = state_21114;
var statearr_21127_21146 = state_21114__$1;
(statearr_21127_21146[(2)] = null);

(statearr_21127_21146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (5))){
var state_21114__$1 = state_21114;
var statearr_21128_21147 = state_21114__$1;
(statearr_21128_21147[(2)] = null);

(statearr_21128_21147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (10))){
var inst_21106 = (state_21114[(2)]);
var state_21114__$1 = state_21114;
var statearr_21129_21148 = state_21114__$1;
(statearr_21129_21148[(2)] = inst_21106);

(statearr_21129_21148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21115 === (8))){
var inst_21096 = (state_21114[(7)]);
var state_21114__$1 = state_21114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21114__$1,(11),out,inst_21096);
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
});})(c__6473__auto___21138,out))
;
return ((function (switch__6452__auto__,c__6473__auto___21138,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_21133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21133[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_21133[(1)] = (1));

return statearr_21133;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_21114){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21134){if((e21134 instanceof Object)){
var ex__6456__auto__ = e21134;
var statearr_21135_21149 = state_21114;
(statearr_21135_21149[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21150 = state_21114;
state_21114 = G__21150;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_21114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_21114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21138,out))
})();
var state__6475__auto__ = (function (){var statearr_21136 = f__6474__auto__.call(null);
(statearr_21136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21138);

return statearr_21136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21138,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t21158 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21158 = (function (ch,f,map_LT_,meta21159){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21159 = meta21159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21161 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21161 = (function (fn1,_,meta21159,map_LT_,f,ch,meta21162){
this.fn1 = fn1;
this._ = _;
this.meta21159 = meta21159;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21162 = meta21162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21161.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21151_SHARP_){
return f1.call(null,(((p1__21151_SHARP_ == null))?null:self__.f.call(null,p1__21151_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21163){
var self__ = this;
var _21163__$1 = this;
return self__.meta21162;
});})(___$1))
;

cljs.core.async.t21161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21163,meta21162__$1){
var self__ = this;
var _21163__$1 = this;
return (new cljs.core.async.t21161(self__.fn1,self__._,self__.meta21159,self__.map_LT_,self__.f,self__.ch,meta21162__$1));
});})(___$1))
;

cljs.core.async.t21161.cljs$lang$type = true;

cljs.core.async.t21161.cljs$lang$ctorStr = "cljs.core.async/t21161";

cljs.core.async.t21161.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t21161");
});})(___$1))
;

cljs.core.async.__GT_t21161 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t21161(fn1__$1,___$2,meta21159__$1,map_LT___$1,f__$1,ch__$1,meta21162){
return (new cljs.core.async.t21161(fn1__$1,___$2,meta21159__$1,map_LT___$1,f__$1,ch__$1,meta21162));
});})(___$1))
;

}

return (new cljs.core.async.t21161(fn1,___$1,self__.meta21159,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21160){
var self__ = this;
var _21160__$1 = this;
return self__.meta21159;
});

cljs.core.async.t21158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21160,meta21159__$1){
var self__ = this;
var _21160__$1 = this;
return (new cljs.core.async.t21158(self__.ch,self__.f,self__.map_LT_,meta21159__$1));
});

cljs.core.async.t21158.cljs$lang$type = true;

cljs.core.async.t21158.cljs$lang$ctorStr = "cljs.core.async/t21158";

cljs.core.async.t21158.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t21158");
});

cljs.core.async.__GT_t21158 = (function cljs$core$async$map_LT__$___GT_t21158(ch__$1,f__$1,map_LT___$1,meta21159){
return (new cljs.core.async.t21158(ch__$1,f__$1,map_LT___$1,meta21159));
});

}

return (new cljs.core.async.t21158(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t21167 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21167 = (function (ch,f,map_GT_,meta21168){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21168 = meta21168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21167.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21167.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21167.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21169){
var self__ = this;
var _21169__$1 = this;
return self__.meta21168;
});

cljs.core.async.t21167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21169,meta21168__$1){
var self__ = this;
var _21169__$1 = this;
return (new cljs.core.async.t21167(self__.ch,self__.f,self__.map_GT_,meta21168__$1));
});

cljs.core.async.t21167.cljs$lang$type = true;

cljs.core.async.t21167.cljs$lang$ctorStr = "cljs.core.async/t21167";

cljs.core.async.t21167.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t21167");
});

cljs.core.async.__GT_t21167 = (function cljs$core$async$map_GT__$___GT_t21167(ch__$1,f__$1,map_GT___$1,meta21168){
return (new cljs.core.async.t21167(ch__$1,f__$1,map_GT___$1,meta21168));
});

}

return (new cljs.core.async.t21167(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t21173 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21173 = (function (ch,p,filter_GT_,meta21174){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21174 = meta21174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21173.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21173.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21173.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21173.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21175){
var self__ = this;
var _21175__$1 = this;
return self__.meta21174;
});

cljs.core.async.t21173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21175,meta21174__$1){
var self__ = this;
var _21175__$1 = this;
return (new cljs.core.async.t21173(self__.ch,self__.p,self__.filter_GT_,meta21174__$1));
});

cljs.core.async.t21173.cljs$lang$type = true;

cljs.core.async.t21173.cljs$lang$ctorStr = "cljs.core.async/t21173";

cljs.core.async.t21173.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t21173");
});

cljs.core.async.__GT_t21173 = (function cljs$core$async$filter_GT__$___GT_t21173(ch__$1,p__$1,filter_GT___$1,meta21174){
return (new cljs.core.async.t21173(ch__$1,p__$1,filter_GT___$1,meta21174));
});

}

return (new cljs.core.async.t21173(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21177 = arguments.length;
switch (G__21177) {
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
var c__6473__auto___21220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21220,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21220,out){
return (function (state_21198){
var state_val_21199 = (state_21198[(1)]);
if((state_val_21199 === (7))){
var inst_21194 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21200_21221 = state_21198__$1;
(statearr_21200_21221[(2)] = inst_21194);

(statearr_21200_21221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (1))){
var state_21198__$1 = state_21198;
var statearr_21201_21222 = state_21198__$1;
(statearr_21201_21222[(2)] = null);

(statearr_21201_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (4))){
var inst_21180 = (state_21198[(7)]);
var inst_21180__$1 = (state_21198[(2)]);
var inst_21181 = (inst_21180__$1 == null);
var state_21198__$1 = (function (){var statearr_21202 = state_21198;
(statearr_21202[(7)] = inst_21180__$1);

return statearr_21202;
})();
if(cljs.core.truth_(inst_21181)){
var statearr_21203_21223 = state_21198__$1;
(statearr_21203_21223[(1)] = (5));

} else {
var statearr_21204_21224 = state_21198__$1;
(statearr_21204_21224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (6))){
var inst_21180 = (state_21198[(7)]);
var inst_21185 = p.call(null,inst_21180);
var state_21198__$1 = state_21198;
if(cljs.core.truth_(inst_21185)){
var statearr_21205_21225 = state_21198__$1;
(statearr_21205_21225[(1)] = (8));

} else {
var statearr_21206_21226 = state_21198__$1;
(statearr_21206_21226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (3))){
var inst_21196 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21198__$1,inst_21196);
} else {
if((state_val_21199 === (2))){
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21198__$1,(4),ch);
} else {
if((state_val_21199 === (11))){
var inst_21188 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21207_21227 = state_21198__$1;
(statearr_21207_21227[(2)] = inst_21188);

(statearr_21207_21227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (9))){
var state_21198__$1 = state_21198;
var statearr_21208_21228 = state_21198__$1;
(statearr_21208_21228[(2)] = null);

(statearr_21208_21228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (5))){
var inst_21183 = cljs.core.async.close_BANG_.call(null,out);
var state_21198__$1 = state_21198;
var statearr_21209_21229 = state_21198__$1;
(statearr_21209_21229[(2)] = inst_21183);

(statearr_21209_21229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (10))){
var inst_21191 = (state_21198[(2)]);
var state_21198__$1 = (function (){var statearr_21210 = state_21198;
(statearr_21210[(8)] = inst_21191);

return statearr_21210;
})();
var statearr_21211_21230 = state_21198__$1;
(statearr_21211_21230[(2)] = null);

(statearr_21211_21230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (8))){
var inst_21180 = (state_21198[(7)]);
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21198__$1,(11),out,inst_21180);
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
});})(c__6473__auto___21220,out))
;
return ((function (switch__6452__auto__,c__6473__auto___21220,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_21215 = [null,null,null,null,null,null,null,null,null];
(statearr_21215[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_21215[(1)] = (1));

return statearr_21215;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_21198){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21216){if((e21216 instanceof Object)){
var ex__6456__auto__ = e21216;
var statearr_21217_21231 = state_21198;
(statearr_21217_21231[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21232 = state_21198;
state_21198 = G__21232;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_21198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_21198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21220,out))
})();
var state__6475__auto__ = (function (){var statearr_21218 = f__6474__auto__.call(null);
(statearr_21218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21220);

return statearr_21218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21220,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__21234 = arguments.length;
switch (G__21234) {
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
var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__){
return (function (state_21401){
var state_val_21402 = (state_21401[(1)]);
if((state_val_21402 === (7))){
var inst_21397 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21403_21444 = state_21401__$1;
(statearr_21403_21444[(2)] = inst_21397);

(statearr_21403_21444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (20))){
var inst_21367 = (state_21401[(7)]);
var inst_21378 = (state_21401[(2)]);
var inst_21379 = cljs.core.next.call(null,inst_21367);
var inst_21353 = inst_21379;
var inst_21354 = null;
var inst_21355 = (0);
var inst_21356 = (0);
var state_21401__$1 = (function (){var statearr_21404 = state_21401;
(statearr_21404[(8)] = inst_21354);

(statearr_21404[(9)] = inst_21356);

(statearr_21404[(10)] = inst_21353);

(statearr_21404[(11)] = inst_21378);

(statearr_21404[(12)] = inst_21355);

return statearr_21404;
})();
var statearr_21405_21445 = state_21401__$1;
(statearr_21405_21445[(2)] = null);

(statearr_21405_21445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (1))){
var state_21401__$1 = state_21401;
var statearr_21406_21446 = state_21401__$1;
(statearr_21406_21446[(2)] = null);

(statearr_21406_21446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (4))){
var inst_21342 = (state_21401[(13)]);
var inst_21342__$1 = (state_21401[(2)]);
var inst_21343 = (inst_21342__$1 == null);
var state_21401__$1 = (function (){var statearr_21407 = state_21401;
(statearr_21407[(13)] = inst_21342__$1);

return statearr_21407;
})();
if(cljs.core.truth_(inst_21343)){
var statearr_21408_21447 = state_21401__$1;
(statearr_21408_21447[(1)] = (5));

} else {
var statearr_21409_21448 = state_21401__$1;
(statearr_21409_21448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (15))){
var state_21401__$1 = state_21401;
var statearr_21413_21449 = state_21401__$1;
(statearr_21413_21449[(2)] = null);

(statearr_21413_21449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (21))){
var state_21401__$1 = state_21401;
var statearr_21414_21450 = state_21401__$1;
(statearr_21414_21450[(2)] = null);

(statearr_21414_21450[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (13))){
var inst_21354 = (state_21401[(8)]);
var inst_21356 = (state_21401[(9)]);
var inst_21353 = (state_21401[(10)]);
var inst_21355 = (state_21401[(12)]);
var inst_21363 = (state_21401[(2)]);
var inst_21364 = (inst_21356 + (1));
var tmp21410 = inst_21354;
var tmp21411 = inst_21353;
var tmp21412 = inst_21355;
var inst_21353__$1 = tmp21411;
var inst_21354__$1 = tmp21410;
var inst_21355__$1 = tmp21412;
var inst_21356__$1 = inst_21364;
var state_21401__$1 = (function (){var statearr_21415 = state_21401;
(statearr_21415[(14)] = inst_21363);

(statearr_21415[(8)] = inst_21354__$1);

(statearr_21415[(9)] = inst_21356__$1);

(statearr_21415[(10)] = inst_21353__$1);

(statearr_21415[(12)] = inst_21355__$1);

return statearr_21415;
})();
var statearr_21416_21451 = state_21401__$1;
(statearr_21416_21451[(2)] = null);

(statearr_21416_21451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (22))){
var state_21401__$1 = state_21401;
var statearr_21417_21452 = state_21401__$1;
(statearr_21417_21452[(2)] = null);

(statearr_21417_21452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (6))){
var inst_21342 = (state_21401[(13)]);
var inst_21351 = f.call(null,inst_21342);
var inst_21352 = cljs.core.seq.call(null,inst_21351);
var inst_21353 = inst_21352;
var inst_21354 = null;
var inst_21355 = (0);
var inst_21356 = (0);
var state_21401__$1 = (function (){var statearr_21418 = state_21401;
(statearr_21418[(8)] = inst_21354);

(statearr_21418[(9)] = inst_21356);

(statearr_21418[(10)] = inst_21353);

(statearr_21418[(12)] = inst_21355);

return statearr_21418;
})();
var statearr_21419_21453 = state_21401__$1;
(statearr_21419_21453[(2)] = null);

(statearr_21419_21453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (17))){
var inst_21367 = (state_21401[(7)]);
var inst_21371 = cljs.core.chunk_first.call(null,inst_21367);
var inst_21372 = cljs.core.chunk_rest.call(null,inst_21367);
var inst_21373 = cljs.core.count.call(null,inst_21371);
var inst_21353 = inst_21372;
var inst_21354 = inst_21371;
var inst_21355 = inst_21373;
var inst_21356 = (0);
var state_21401__$1 = (function (){var statearr_21420 = state_21401;
(statearr_21420[(8)] = inst_21354);

(statearr_21420[(9)] = inst_21356);

(statearr_21420[(10)] = inst_21353);

(statearr_21420[(12)] = inst_21355);

return statearr_21420;
})();
var statearr_21421_21454 = state_21401__$1;
(statearr_21421_21454[(2)] = null);

(statearr_21421_21454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (3))){
var inst_21399 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21401__$1,inst_21399);
} else {
if((state_val_21402 === (12))){
var inst_21387 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21422_21455 = state_21401__$1;
(statearr_21422_21455[(2)] = inst_21387);

(statearr_21422_21455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (2))){
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21401__$1,(4),in$);
} else {
if((state_val_21402 === (23))){
var inst_21395 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21423_21456 = state_21401__$1;
(statearr_21423_21456[(2)] = inst_21395);

(statearr_21423_21456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (19))){
var inst_21382 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21424_21457 = state_21401__$1;
(statearr_21424_21457[(2)] = inst_21382);

(statearr_21424_21457[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (11))){
var inst_21353 = (state_21401[(10)]);
var inst_21367 = (state_21401[(7)]);
var inst_21367__$1 = cljs.core.seq.call(null,inst_21353);
var state_21401__$1 = (function (){var statearr_21425 = state_21401;
(statearr_21425[(7)] = inst_21367__$1);

return statearr_21425;
})();
if(inst_21367__$1){
var statearr_21426_21458 = state_21401__$1;
(statearr_21426_21458[(1)] = (14));

} else {
var statearr_21427_21459 = state_21401__$1;
(statearr_21427_21459[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (9))){
var inst_21389 = (state_21401[(2)]);
var inst_21390 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21401__$1 = (function (){var statearr_21428 = state_21401;
(statearr_21428[(15)] = inst_21389);

return statearr_21428;
})();
if(cljs.core.truth_(inst_21390)){
var statearr_21429_21460 = state_21401__$1;
(statearr_21429_21460[(1)] = (21));

} else {
var statearr_21430_21461 = state_21401__$1;
(statearr_21430_21461[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (5))){
var inst_21345 = cljs.core.async.close_BANG_.call(null,out);
var state_21401__$1 = state_21401;
var statearr_21431_21462 = state_21401__$1;
(statearr_21431_21462[(2)] = inst_21345);

(statearr_21431_21462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (14))){
var inst_21367 = (state_21401[(7)]);
var inst_21369 = cljs.core.chunked_seq_QMARK_.call(null,inst_21367);
var state_21401__$1 = state_21401;
if(inst_21369){
var statearr_21432_21463 = state_21401__$1;
(statearr_21432_21463[(1)] = (17));

} else {
var statearr_21433_21464 = state_21401__$1;
(statearr_21433_21464[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (16))){
var inst_21385 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21434_21465 = state_21401__$1;
(statearr_21434_21465[(2)] = inst_21385);

(statearr_21434_21465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (10))){
var inst_21354 = (state_21401[(8)]);
var inst_21356 = (state_21401[(9)]);
var inst_21361 = cljs.core._nth.call(null,inst_21354,inst_21356);
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21401__$1,(13),out,inst_21361);
} else {
if((state_val_21402 === (18))){
var inst_21367 = (state_21401[(7)]);
var inst_21376 = cljs.core.first.call(null,inst_21367);
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21401__$1,(20),out,inst_21376);
} else {
if((state_val_21402 === (8))){
var inst_21356 = (state_21401[(9)]);
var inst_21355 = (state_21401[(12)]);
var inst_21358 = (inst_21356 < inst_21355);
var inst_21359 = inst_21358;
var state_21401__$1 = state_21401;
if(cljs.core.truth_(inst_21359)){
var statearr_21435_21466 = state_21401__$1;
(statearr_21435_21466[(1)] = (10));

} else {
var statearr_21436_21467 = state_21401__$1;
(statearr_21436_21467[(1)] = (11));

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
});})(c__6473__auto__))
;
return ((function (switch__6452__auto__,c__6473__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_21440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21440[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__);

(statearr_21440[(1)] = (1));

return statearr_21440;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____1 = (function (state_21401){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21441){if((e21441 instanceof Object)){
var ex__6456__auto__ = e21441;
var statearr_21442_21468 = state_21401;
(statearr_21442_21468[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21469 = state_21401;
state_21401 = G__21469;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__ = function(state_21401){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____1.call(this,state_21401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__))
})();
var state__6475__auto__ = (function (){var statearr_21443 = f__6474__auto__.call(null);
(statearr_21443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_21443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto__))
);

return c__6473__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__21471 = arguments.length;
switch (G__21471) {
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
var G__21474 = arguments.length;
switch (G__21474) {
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
var G__21477 = arguments.length;
switch (G__21477) {
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
var c__6473__auto___21527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21527,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21527,out){
return (function (state_21501){
var state_val_21502 = (state_21501[(1)]);
if((state_val_21502 === (7))){
var inst_21496 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21503_21528 = state_21501__$1;
(statearr_21503_21528[(2)] = inst_21496);

(statearr_21503_21528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (1))){
var inst_21478 = null;
var state_21501__$1 = (function (){var statearr_21504 = state_21501;
(statearr_21504[(7)] = inst_21478);

return statearr_21504;
})();
var statearr_21505_21529 = state_21501__$1;
(statearr_21505_21529[(2)] = null);

(statearr_21505_21529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (4))){
var inst_21481 = (state_21501[(8)]);
var inst_21481__$1 = (state_21501[(2)]);
var inst_21482 = (inst_21481__$1 == null);
var inst_21483 = cljs.core.not.call(null,inst_21482);
var state_21501__$1 = (function (){var statearr_21506 = state_21501;
(statearr_21506[(8)] = inst_21481__$1);

return statearr_21506;
})();
if(inst_21483){
var statearr_21507_21530 = state_21501__$1;
(statearr_21507_21530[(1)] = (5));

} else {
var statearr_21508_21531 = state_21501__$1;
(statearr_21508_21531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (6))){
var state_21501__$1 = state_21501;
var statearr_21509_21532 = state_21501__$1;
(statearr_21509_21532[(2)] = null);

(statearr_21509_21532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (3))){
var inst_21498 = (state_21501[(2)]);
var inst_21499 = cljs.core.async.close_BANG_.call(null,out);
var state_21501__$1 = (function (){var statearr_21510 = state_21501;
(statearr_21510[(9)] = inst_21498);

return statearr_21510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else {
if((state_val_21502 === (2))){
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(4),ch);
} else {
if((state_val_21502 === (11))){
var inst_21481 = (state_21501[(8)]);
var inst_21490 = (state_21501[(2)]);
var inst_21478 = inst_21481;
var state_21501__$1 = (function (){var statearr_21511 = state_21501;
(statearr_21511[(10)] = inst_21490);

(statearr_21511[(7)] = inst_21478);

return statearr_21511;
})();
var statearr_21512_21533 = state_21501__$1;
(statearr_21512_21533[(2)] = null);

(statearr_21512_21533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (9))){
var inst_21481 = (state_21501[(8)]);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(11),out,inst_21481);
} else {
if((state_val_21502 === (5))){
var inst_21481 = (state_21501[(8)]);
var inst_21478 = (state_21501[(7)]);
var inst_21485 = cljs.core._EQ_.call(null,inst_21481,inst_21478);
var state_21501__$1 = state_21501;
if(inst_21485){
var statearr_21514_21534 = state_21501__$1;
(statearr_21514_21534[(1)] = (8));

} else {
var statearr_21515_21535 = state_21501__$1;
(statearr_21515_21535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (10))){
var inst_21493 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21516_21536 = state_21501__$1;
(statearr_21516_21536[(2)] = inst_21493);

(statearr_21516_21536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (8))){
var inst_21478 = (state_21501[(7)]);
var tmp21513 = inst_21478;
var inst_21478__$1 = tmp21513;
var state_21501__$1 = (function (){var statearr_21517 = state_21501;
(statearr_21517[(7)] = inst_21478__$1);

return statearr_21517;
})();
var statearr_21518_21537 = state_21501__$1;
(statearr_21518_21537[(2)] = null);

(statearr_21518_21537[(1)] = (2));


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
});})(c__6473__auto___21527,out))
;
return ((function (switch__6452__auto__,c__6473__auto___21527,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_21522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21522[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_21522[(1)] = (1));

return statearr_21522;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_21501){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21523){if((e21523 instanceof Object)){
var ex__6456__auto__ = e21523;
var statearr_21524_21538 = state_21501;
(statearr_21524_21538[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21539 = state_21501;
state_21501 = G__21539;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21527,out))
})();
var state__6475__auto__ = (function (){var statearr_21525 = f__6474__auto__.call(null);
(statearr_21525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21527);

return statearr_21525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21527,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__21541 = arguments.length;
switch (G__21541) {
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
var c__6473__auto___21610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21610,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21610,out){
return (function (state_21579){
var state_val_21580 = (state_21579[(1)]);
if((state_val_21580 === (7))){
var inst_21575 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21581_21611 = state_21579__$1;
(statearr_21581_21611[(2)] = inst_21575);

(statearr_21581_21611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (1))){
var inst_21542 = (new Array(n));
var inst_21543 = inst_21542;
var inst_21544 = (0);
var state_21579__$1 = (function (){var statearr_21582 = state_21579;
(statearr_21582[(7)] = inst_21543);

(statearr_21582[(8)] = inst_21544);

return statearr_21582;
})();
var statearr_21583_21612 = state_21579__$1;
(statearr_21583_21612[(2)] = null);

(statearr_21583_21612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (4))){
var inst_21547 = (state_21579[(9)]);
var inst_21547__$1 = (state_21579[(2)]);
var inst_21548 = (inst_21547__$1 == null);
var inst_21549 = cljs.core.not.call(null,inst_21548);
var state_21579__$1 = (function (){var statearr_21584 = state_21579;
(statearr_21584[(9)] = inst_21547__$1);

return statearr_21584;
})();
if(inst_21549){
var statearr_21585_21613 = state_21579__$1;
(statearr_21585_21613[(1)] = (5));

} else {
var statearr_21586_21614 = state_21579__$1;
(statearr_21586_21614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (15))){
var inst_21569 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21587_21615 = state_21579__$1;
(statearr_21587_21615[(2)] = inst_21569);

(statearr_21587_21615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (13))){
var state_21579__$1 = state_21579;
var statearr_21588_21616 = state_21579__$1;
(statearr_21588_21616[(2)] = null);

(statearr_21588_21616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (6))){
var inst_21544 = (state_21579[(8)]);
var inst_21565 = (inst_21544 > (0));
var state_21579__$1 = state_21579;
if(cljs.core.truth_(inst_21565)){
var statearr_21589_21617 = state_21579__$1;
(statearr_21589_21617[(1)] = (12));

} else {
var statearr_21590_21618 = state_21579__$1;
(statearr_21590_21618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (3))){
var inst_21577 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21579__$1,inst_21577);
} else {
if((state_val_21580 === (12))){
var inst_21543 = (state_21579[(7)]);
var inst_21567 = cljs.core.vec.call(null,inst_21543);
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21579__$1,(15),out,inst_21567);
} else {
if((state_val_21580 === (2))){
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21579__$1,(4),ch);
} else {
if((state_val_21580 === (11))){
var inst_21559 = (state_21579[(2)]);
var inst_21560 = (new Array(n));
var inst_21543 = inst_21560;
var inst_21544 = (0);
var state_21579__$1 = (function (){var statearr_21591 = state_21579;
(statearr_21591[(10)] = inst_21559);

(statearr_21591[(7)] = inst_21543);

(statearr_21591[(8)] = inst_21544);

return statearr_21591;
})();
var statearr_21592_21619 = state_21579__$1;
(statearr_21592_21619[(2)] = null);

(statearr_21592_21619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (9))){
var inst_21543 = (state_21579[(7)]);
var inst_21557 = cljs.core.vec.call(null,inst_21543);
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21579__$1,(11),out,inst_21557);
} else {
if((state_val_21580 === (5))){
var inst_21543 = (state_21579[(7)]);
var inst_21552 = (state_21579[(11)]);
var inst_21544 = (state_21579[(8)]);
var inst_21547 = (state_21579[(9)]);
var inst_21551 = (inst_21543[inst_21544] = inst_21547);
var inst_21552__$1 = (inst_21544 + (1));
var inst_21553 = (inst_21552__$1 < n);
var state_21579__$1 = (function (){var statearr_21593 = state_21579;
(statearr_21593[(11)] = inst_21552__$1);

(statearr_21593[(12)] = inst_21551);

return statearr_21593;
})();
if(cljs.core.truth_(inst_21553)){
var statearr_21594_21620 = state_21579__$1;
(statearr_21594_21620[(1)] = (8));

} else {
var statearr_21595_21621 = state_21579__$1;
(statearr_21595_21621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (14))){
var inst_21572 = (state_21579[(2)]);
var inst_21573 = cljs.core.async.close_BANG_.call(null,out);
var state_21579__$1 = (function (){var statearr_21597 = state_21579;
(statearr_21597[(13)] = inst_21572);

return statearr_21597;
})();
var statearr_21598_21622 = state_21579__$1;
(statearr_21598_21622[(2)] = inst_21573);

(statearr_21598_21622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (10))){
var inst_21563 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21599_21623 = state_21579__$1;
(statearr_21599_21623[(2)] = inst_21563);

(statearr_21599_21623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (8))){
var inst_21543 = (state_21579[(7)]);
var inst_21552 = (state_21579[(11)]);
var tmp21596 = inst_21543;
var inst_21543__$1 = tmp21596;
var inst_21544 = inst_21552;
var state_21579__$1 = (function (){var statearr_21600 = state_21579;
(statearr_21600[(7)] = inst_21543__$1);

(statearr_21600[(8)] = inst_21544);

return statearr_21600;
})();
var statearr_21601_21624 = state_21579__$1;
(statearr_21601_21624[(2)] = null);

(statearr_21601_21624[(1)] = (2));


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
});})(c__6473__auto___21610,out))
;
return ((function (switch__6452__auto__,c__6473__auto___21610,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_21605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21605[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_21605[(1)] = (1));

return statearr_21605;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_21579){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21606){if((e21606 instanceof Object)){
var ex__6456__auto__ = e21606;
var statearr_21607_21625 = state_21579;
(statearr_21607_21625[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21626 = state_21579;
state_21579 = G__21626;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_21579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_21579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21610,out))
})();
var state__6475__auto__ = (function (){var statearr_21608 = f__6474__auto__.call(null);
(statearr_21608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21610);

return statearr_21608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21610,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__21628 = arguments.length;
switch (G__21628) {
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
var c__6473__auto___21701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___21701,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___21701,out){
return (function (state_21670){
var state_val_21671 = (state_21670[(1)]);
if((state_val_21671 === (7))){
var inst_21666 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21672_21702 = state_21670__$1;
(statearr_21672_21702[(2)] = inst_21666);

(statearr_21672_21702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (1))){
var inst_21629 = [];
var inst_21630 = inst_21629;
var inst_21631 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21670__$1 = (function (){var statearr_21673 = state_21670;
(statearr_21673[(7)] = inst_21631);

(statearr_21673[(8)] = inst_21630);

return statearr_21673;
})();
var statearr_21674_21703 = state_21670__$1;
(statearr_21674_21703[(2)] = null);

(statearr_21674_21703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (4))){
var inst_21634 = (state_21670[(9)]);
var inst_21634__$1 = (state_21670[(2)]);
var inst_21635 = (inst_21634__$1 == null);
var inst_21636 = cljs.core.not.call(null,inst_21635);
var state_21670__$1 = (function (){var statearr_21675 = state_21670;
(statearr_21675[(9)] = inst_21634__$1);

return statearr_21675;
})();
if(inst_21636){
var statearr_21676_21704 = state_21670__$1;
(statearr_21676_21704[(1)] = (5));

} else {
var statearr_21677_21705 = state_21670__$1;
(statearr_21677_21705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (15))){
var inst_21660 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21678_21706 = state_21670__$1;
(statearr_21678_21706[(2)] = inst_21660);

(statearr_21678_21706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (13))){
var state_21670__$1 = state_21670;
var statearr_21679_21707 = state_21670__$1;
(statearr_21679_21707[(2)] = null);

(statearr_21679_21707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (6))){
var inst_21630 = (state_21670[(8)]);
var inst_21655 = inst_21630.length;
var inst_21656 = (inst_21655 > (0));
var state_21670__$1 = state_21670;
if(cljs.core.truth_(inst_21656)){
var statearr_21680_21708 = state_21670__$1;
(statearr_21680_21708[(1)] = (12));

} else {
var statearr_21681_21709 = state_21670__$1;
(statearr_21681_21709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (3))){
var inst_21668 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21670__$1,inst_21668);
} else {
if((state_val_21671 === (12))){
var inst_21630 = (state_21670[(8)]);
var inst_21658 = cljs.core.vec.call(null,inst_21630);
var state_21670__$1 = state_21670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21670__$1,(15),out,inst_21658);
} else {
if((state_val_21671 === (2))){
var state_21670__$1 = state_21670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21670__$1,(4),ch);
} else {
if((state_val_21671 === (11))){
var inst_21638 = (state_21670[(10)]);
var inst_21634 = (state_21670[(9)]);
var inst_21648 = (state_21670[(2)]);
var inst_21649 = [];
var inst_21650 = inst_21649.push(inst_21634);
var inst_21630 = inst_21649;
var inst_21631 = inst_21638;
var state_21670__$1 = (function (){var statearr_21682 = state_21670;
(statearr_21682[(7)] = inst_21631);

(statearr_21682[(8)] = inst_21630);

(statearr_21682[(11)] = inst_21650);

(statearr_21682[(12)] = inst_21648);

return statearr_21682;
})();
var statearr_21683_21710 = state_21670__$1;
(statearr_21683_21710[(2)] = null);

(statearr_21683_21710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (9))){
var inst_21630 = (state_21670[(8)]);
var inst_21646 = cljs.core.vec.call(null,inst_21630);
var state_21670__$1 = state_21670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21670__$1,(11),out,inst_21646);
} else {
if((state_val_21671 === (5))){
var inst_21631 = (state_21670[(7)]);
var inst_21638 = (state_21670[(10)]);
var inst_21634 = (state_21670[(9)]);
var inst_21638__$1 = f.call(null,inst_21634);
var inst_21639 = cljs.core._EQ_.call(null,inst_21638__$1,inst_21631);
var inst_21640 = cljs.core.keyword_identical_QMARK_.call(null,inst_21631,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21641 = (inst_21639) || (inst_21640);
var state_21670__$1 = (function (){var statearr_21684 = state_21670;
(statearr_21684[(10)] = inst_21638__$1);

return statearr_21684;
})();
if(cljs.core.truth_(inst_21641)){
var statearr_21685_21711 = state_21670__$1;
(statearr_21685_21711[(1)] = (8));

} else {
var statearr_21686_21712 = state_21670__$1;
(statearr_21686_21712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (14))){
var inst_21663 = (state_21670[(2)]);
var inst_21664 = cljs.core.async.close_BANG_.call(null,out);
var state_21670__$1 = (function (){var statearr_21688 = state_21670;
(statearr_21688[(13)] = inst_21663);

return statearr_21688;
})();
var statearr_21689_21713 = state_21670__$1;
(statearr_21689_21713[(2)] = inst_21664);

(statearr_21689_21713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (10))){
var inst_21653 = (state_21670[(2)]);
var state_21670__$1 = state_21670;
var statearr_21690_21714 = state_21670__$1;
(statearr_21690_21714[(2)] = inst_21653);

(statearr_21690_21714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21671 === (8))){
var inst_21630 = (state_21670[(8)]);
var inst_21638 = (state_21670[(10)]);
var inst_21634 = (state_21670[(9)]);
var inst_21643 = inst_21630.push(inst_21634);
var tmp21687 = inst_21630;
var inst_21630__$1 = tmp21687;
var inst_21631 = inst_21638;
var state_21670__$1 = (function (){var statearr_21691 = state_21670;
(statearr_21691[(14)] = inst_21643);

(statearr_21691[(7)] = inst_21631);

(statearr_21691[(8)] = inst_21630__$1);

return statearr_21691;
})();
var statearr_21692_21715 = state_21670__$1;
(statearr_21692_21715[(2)] = null);

(statearr_21692_21715[(1)] = (2));


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
});})(c__6473__auto___21701,out))
;
return ((function (switch__6452__auto__,c__6473__auto___21701,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_21696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21696[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_21696[(1)] = (1));

return statearr_21696;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_21670){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_21670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e21697){if((e21697 instanceof Object)){
var ex__6456__auto__ = e21697;
var statearr_21698_21716 = state_21670;
(statearr_21698_21716[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21717 = state_21670;
state_21670 = G__21717;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_21670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_21670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___21701,out))
})();
var state__6475__auto__ = (function (){var statearr_21699 = f__6474__auto__.call(null);
(statearr_21699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___21701);

return statearr_21699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___21701,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map