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
if(typeof cljs.core.async.t28737 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28737 = (function (f,fn_handler,meta28738){
this.f = f;
this.fn_handler = fn_handler;
this.meta28738 = meta28738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28737.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28739){
var self__ = this;
var _28739__$1 = this;
return self__.meta28738;
});

cljs.core.async.t28737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28739,meta28738__$1){
var self__ = this;
var _28739__$1 = this;
return (new cljs.core.async.t28737(self__.f,self__.fn_handler,meta28738__$1));
});

cljs.core.async.t28737.cljs$lang$type = true;

cljs.core.async.t28737.cljs$lang$ctorStr = "cljs.core.async/t28737";

cljs.core.async.t28737.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t28737");
});

cljs.core.async.__GT_t28737 = (function cljs$core$async$fn_handler_$___GT_t28737(f__$1,fn_handler__$1,meta28738){
return (new cljs.core.async.t28737(f__$1,fn_handler__$1,meta28738));
});

}

return (new cljs.core.async.t28737(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28741 = buff;
if(G__28741){
var bit__4856__auto__ = null;
if(cljs.core.truth_((function (){var or__4182__auto__ = bit__4856__auto__;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return G__28741.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28741.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28741);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28741);
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
var G__28743 = arguments.length;
switch (G__28743) {
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
var G__28746 = arguments.length;
switch (G__28746) {
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
var val_28748 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28748);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28748,ret){
return (function (){
return fn1.call(null,val_28748);
});})(val_28748,ret))
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
var G__28750 = arguments.length;
switch (G__28750) {
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
var n__5067__auto___28752 = n;
var x_28753 = (0);
while(true){
if((x_28753 < n__5067__auto___28752)){
(a[x_28753] = (0));

var G__28754 = (x_28753 + (1));
x_28753 = G__28754;
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

var G__28755 = (i + (1));
i = G__28755;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28759 = (function (flag,alt_flag,meta28760){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28760 = meta28760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28759.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28761){
var self__ = this;
var _28761__$1 = this;
return self__.meta28760;
});})(flag))
;

cljs.core.async.t28759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28761,meta28760__$1){
var self__ = this;
var _28761__$1 = this;
return (new cljs.core.async.t28759(self__.flag,self__.alt_flag,meta28760__$1));
});})(flag))
;

cljs.core.async.t28759.cljs$lang$type = true;

cljs.core.async.t28759.cljs$lang$ctorStr = "cljs.core.async/t28759";

cljs.core.async.t28759.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t28759");
});})(flag))
;

cljs.core.async.__GT_t28759 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28759(flag__$1,alt_flag__$1,meta28760){
return (new cljs.core.async.t28759(flag__$1,alt_flag__$1,meta28760));
});})(flag))
;

}

return (new cljs.core.async.t28759(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28765 = (function (cb,flag,alt_handler,meta28766){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28767){
var self__ = this;
var _28767__$1 = this;
return self__.meta28766;
});

cljs.core.async.t28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28767,meta28766__$1){
var self__ = this;
var _28767__$1 = this;
return (new cljs.core.async.t28765(self__.cb,self__.flag,self__.alt_handler,meta28766__$1));
});

cljs.core.async.t28765.cljs$lang$type = true;

cljs.core.async.t28765.cljs$lang$ctorStr = "cljs.core.async/t28765";

cljs.core.async.t28765.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t28765");
});

cljs.core.async.__GT_t28765 = (function cljs$core$async$alt_handler_$___GT_t28765(cb__$1,flag__$1,alt_handler__$1,meta28766){
return (new cljs.core.async.t28765(cb__$1,flag__$1,alt_handler__$1,meta28766));
});

}

return (new cljs.core.async.t28765(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28768_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28768_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28769_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28769_SHARP_,port], null));
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
var G__28770 = (i + (1));
i = G__28770;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28773){
var map__28774 = p__28773;
var map__28774__$1 = ((cljs.core.seq_QMARK_.call(null,map__28774))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);
var opts = map__28774__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28771){
var G__28772 = cljs.core.first.call(null,seq28771);
var seq28771__$1 = cljs.core.next.call(null,seq28771);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28772,seq28771__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28776 = arguments.length;
switch (G__28776) {
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
var c__6473__auto___28825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___28825){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___28825){
return (function (state_28800){
var state_val_28801 = (state_28800[(1)]);
if((state_val_28801 === (7))){
var inst_28796 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28802_28826 = state_28800__$1;
(statearr_28802_28826[(2)] = inst_28796);

(statearr_28802_28826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (1))){
var state_28800__$1 = state_28800;
var statearr_28803_28827 = state_28800__$1;
(statearr_28803_28827[(2)] = null);

(statearr_28803_28827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (4))){
var inst_28779 = (state_28800[(7)]);
var inst_28779__$1 = (state_28800[(2)]);
var inst_28780 = (inst_28779__$1 == null);
var state_28800__$1 = (function (){var statearr_28804 = state_28800;
(statearr_28804[(7)] = inst_28779__$1);

return statearr_28804;
})();
if(cljs.core.truth_(inst_28780)){
var statearr_28805_28828 = state_28800__$1;
(statearr_28805_28828[(1)] = (5));

} else {
var statearr_28806_28829 = state_28800__$1;
(statearr_28806_28829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (13))){
var state_28800__$1 = state_28800;
var statearr_28807_28830 = state_28800__$1;
(statearr_28807_28830[(2)] = null);

(statearr_28807_28830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (6))){
var inst_28779 = (state_28800[(7)]);
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28800__$1,(11),to,inst_28779);
} else {
if((state_val_28801 === (3))){
var inst_28798 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28800__$1,inst_28798);
} else {
if((state_val_28801 === (12))){
var state_28800__$1 = state_28800;
var statearr_28808_28831 = state_28800__$1;
(statearr_28808_28831[(2)] = null);

(statearr_28808_28831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (2))){
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28800__$1,(4),from);
} else {
if((state_val_28801 === (11))){
var inst_28789 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
if(cljs.core.truth_(inst_28789)){
var statearr_28809_28832 = state_28800__$1;
(statearr_28809_28832[(1)] = (12));

} else {
var statearr_28810_28833 = state_28800__$1;
(statearr_28810_28833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (9))){
var state_28800__$1 = state_28800;
var statearr_28811_28834 = state_28800__$1;
(statearr_28811_28834[(2)] = null);

(statearr_28811_28834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (5))){
var state_28800__$1 = state_28800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28812_28835 = state_28800__$1;
(statearr_28812_28835[(1)] = (8));

} else {
var statearr_28813_28836 = state_28800__$1;
(statearr_28813_28836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (14))){
var inst_28794 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28814_28837 = state_28800__$1;
(statearr_28814_28837[(2)] = inst_28794);

(statearr_28814_28837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (10))){
var inst_28786 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28815_28838 = state_28800__$1;
(statearr_28815_28838[(2)] = inst_28786);

(statearr_28815_28838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (8))){
var inst_28783 = cljs.core.async.close_BANG_.call(null,to);
var state_28800__$1 = state_28800;
var statearr_28816_28839 = state_28800__$1;
(statearr_28816_28839[(2)] = inst_28783);

(statearr_28816_28839[(1)] = (10));


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
});})(c__6473__auto___28825))
;
return ((function (switch__6452__auto__,c__6473__auto___28825){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_28820 = [null,null,null,null,null,null,null,null];
(statearr_28820[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_28820[(1)] = (1));

return statearr_28820;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_28800){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_28800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e28821){if((e28821 instanceof Object)){
var ex__6456__auto__ = e28821;
var statearr_28822_28840 = state_28800;
(statearr_28822_28840[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28841 = state_28800;
state_28800 = G__28841;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_28800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_28800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___28825))
})();
var state__6475__auto__ = (function (){var statearr_28823 = f__6474__auto__.call(null);
(statearr_28823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___28825);

return statearr_28823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___28825))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29025){
var vec__29026 = p__29025;
var v = cljs.core.nth.call(null,vec__29026,(0),null);
var p = cljs.core.nth.call(null,vec__29026,(1),null);
var job = vec__29026;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6473__auto___29208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___29208,res,vec__29026,v,p,job,jobs,results){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___29208,res,vec__29026,v,p,job,jobs,results){
return (function (state_29031){
var state_val_29032 = (state_29031[(1)]);
if((state_val_29032 === (2))){
var inst_29028 = (state_29031[(2)]);
var inst_29029 = cljs.core.async.close_BANG_.call(null,res);
var state_29031__$1 = (function (){var statearr_29033 = state_29031;
(statearr_29033[(7)] = inst_29028);

return statearr_29033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29031__$1,inst_29029);
} else {
if((state_val_29032 === (1))){
var state_29031__$1 = state_29031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29031__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6473__auto___29208,res,vec__29026,v,p,job,jobs,results))
;
return ((function (switch__6452__auto__,c__6473__auto___29208,res,vec__29026,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_29037 = [null,null,null,null,null,null,null,null];
(statearr_29037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_29037[(1)] = (1));

return statearr_29037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_29031){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29038){if((e29038 instanceof Object)){
var ex__6456__auto__ = e29038;
var statearr_29039_29209 = state_29031;
(statearr_29039_29209[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29210 = state_29031;
state_29031 = G__29210;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_29031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_29031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___29208,res,vec__29026,v,p,job,jobs,results))
})();
var state__6475__auto__ = (function (){var statearr_29040 = f__6474__auto__.call(null);
(statearr_29040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___29208);

return statearr_29040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___29208,res,vec__29026,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29041){
var vec__29042 = p__29041;
var v = cljs.core.nth.call(null,vec__29042,(0),null);
var p = cljs.core.nth.call(null,vec__29042,(1),null);
var job = vec__29042;
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
var n__5067__auto___29211 = n;
var __29212 = (0);
while(true){
if((__29212 < n__5067__auto___29211)){
var G__29043_29213 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29043_29213) {
case "async":
var c__6473__auto___29215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29212,c__6473__auto___29215,G__29043_29213,n__5067__auto___29211,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (__29212,c__6473__auto___29215,G__29043_29213,n__5067__auto___29211,jobs,results,process,async){
return (function (state_29056){
var state_val_29057 = (state_29056[(1)]);
if((state_val_29057 === (7))){
var inst_29052 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29058_29216 = state_29056__$1;
(statearr_29058_29216[(2)] = inst_29052);

(statearr_29058_29216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (6))){
var state_29056__$1 = state_29056;
var statearr_29059_29217 = state_29056__$1;
(statearr_29059_29217[(2)] = null);

(statearr_29059_29217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (5))){
var state_29056__$1 = state_29056;
var statearr_29060_29218 = state_29056__$1;
(statearr_29060_29218[(2)] = null);

(statearr_29060_29218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (4))){
var inst_29046 = (state_29056[(2)]);
var inst_29047 = async.call(null,inst_29046);
var state_29056__$1 = state_29056;
if(cljs.core.truth_(inst_29047)){
var statearr_29061_29219 = state_29056__$1;
(statearr_29061_29219[(1)] = (5));

} else {
var statearr_29062_29220 = state_29056__$1;
(statearr_29062_29220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (3))){
var inst_29054 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29056__$1,inst_29054);
} else {
if((state_val_29057 === (2))){
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29056__$1,(4),jobs);
} else {
if((state_val_29057 === (1))){
var state_29056__$1 = state_29056;
var statearr_29063_29221 = state_29056__$1;
(statearr_29063_29221[(2)] = null);

(statearr_29063_29221[(1)] = (2));


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
});})(__29212,c__6473__auto___29215,G__29043_29213,n__5067__auto___29211,jobs,results,process,async))
;
return ((function (__29212,switch__6452__auto__,c__6473__auto___29215,G__29043_29213,n__5067__auto___29211,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_29067 = [null,null,null,null,null,null,null];
(statearr_29067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_29067[(1)] = (1));

return statearr_29067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_29056){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29068){if((e29068 instanceof Object)){
var ex__6456__auto__ = e29068;
var statearr_29069_29222 = state_29056;
(statearr_29069_29222[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29223 = state_29056;
state_29056 = G__29223;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_29056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_29056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(__29212,switch__6452__auto__,c__6473__auto___29215,G__29043_29213,n__5067__auto___29211,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_29070 = f__6474__auto__.call(null);
(statearr_29070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___29215);

return statearr_29070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(__29212,c__6473__auto___29215,G__29043_29213,n__5067__auto___29211,jobs,results,process,async))
);


break;
case "compute":
var c__6473__auto___29224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29212,c__6473__auto___29224,G__29043_29213,n__5067__auto___29211,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (__29212,c__6473__auto___29224,G__29043_29213,n__5067__auto___29211,jobs,results,process,async){
return (function (state_29083){
var state_val_29084 = (state_29083[(1)]);
if((state_val_29084 === (7))){
var inst_29079 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
var statearr_29085_29225 = state_29083__$1;
(statearr_29085_29225[(2)] = inst_29079);

(statearr_29085_29225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (6))){
var state_29083__$1 = state_29083;
var statearr_29086_29226 = state_29083__$1;
(statearr_29086_29226[(2)] = null);

(statearr_29086_29226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (5))){
var state_29083__$1 = state_29083;
var statearr_29087_29227 = state_29083__$1;
(statearr_29087_29227[(2)] = null);

(statearr_29087_29227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (4))){
var inst_29073 = (state_29083[(2)]);
var inst_29074 = process.call(null,inst_29073);
var state_29083__$1 = state_29083;
if(cljs.core.truth_(inst_29074)){
var statearr_29088_29228 = state_29083__$1;
(statearr_29088_29228[(1)] = (5));

} else {
var statearr_29089_29229 = state_29083__$1;
(statearr_29089_29229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29084 === (3))){
var inst_29081 = (state_29083[(2)]);
var state_29083__$1 = state_29083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29083__$1,inst_29081);
} else {
if((state_val_29084 === (2))){
var state_29083__$1 = state_29083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29083__$1,(4),jobs);
} else {
if((state_val_29084 === (1))){
var state_29083__$1 = state_29083;
var statearr_29090_29230 = state_29083__$1;
(statearr_29090_29230[(2)] = null);

(statearr_29090_29230[(1)] = (2));


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
});})(__29212,c__6473__auto___29224,G__29043_29213,n__5067__auto___29211,jobs,results,process,async))
;
return ((function (__29212,switch__6452__auto__,c__6473__auto___29224,G__29043_29213,n__5067__auto___29211,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_29094 = [null,null,null,null,null,null,null];
(statearr_29094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_29094[(1)] = (1));

return statearr_29094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_29083){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29095){if((e29095 instanceof Object)){
var ex__6456__auto__ = e29095;
var statearr_29096_29231 = state_29083;
(statearr_29096_29231[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29232 = state_29083;
state_29083 = G__29232;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_29083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_29083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(__29212,switch__6452__auto__,c__6473__auto___29224,G__29043_29213,n__5067__auto___29211,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_29097 = f__6474__auto__.call(null);
(statearr_29097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___29224);

return statearr_29097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(__29212,c__6473__auto___29224,G__29043_29213,n__5067__auto___29211,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29233 = (__29212 + (1));
__29212 = G__29233;
continue;
} else {
}
break;
}

var c__6473__auto___29234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___29234,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___29234,jobs,results,process,async){
return (function (state_29119){
var state_val_29120 = (state_29119[(1)]);
if((state_val_29120 === (9))){
var inst_29112 = (state_29119[(2)]);
var state_29119__$1 = (function (){var statearr_29121 = state_29119;
(statearr_29121[(7)] = inst_29112);

return statearr_29121;
})();
var statearr_29122_29235 = state_29119__$1;
(statearr_29122_29235[(2)] = null);

(statearr_29122_29235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (8))){
var inst_29105 = (state_29119[(8)]);
var inst_29110 = (state_29119[(2)]);
var state_29119__$1 = (function (){var statearr_29123 = state_29119;
(statearr_29123[(9)] = inst_29110);

return statearr_29123;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29119__$1,(9),results,inst_29105);
} else {
if((state_val_29120 === (7))){
var inst_29115 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29124_29236 = state_29119__$1;
(statearr_29124_29236[(2)] = inst_29115);

(statearr_29124_29236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (6))){
var inst_29105 = (state_29119[(8)]);
var inst_29100 = (state_29119[(10)]);
var inst_29105__$1 = cljs.core.async.chan.call(null,(1));
var inst_29106 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29107 = [inst_29100,inst_29105__$1];
var inst_29108 = (new cljs.core.PersistentVector(null,2,(5),inst_29106,inst_29107,null));
var state_29119__$1 = (function (){var statearr_29125 = state_29119;
(statearr_29125[(8)] = inst_29105__$1);

return statearr_29125;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29119__$1,(8),jobs,inst_29108);
} else {
if((state_val_29120 === (5))){
var inst_29103 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29119__$1 = state_29119;
var statearr_29126_29237 = state_29119__$1;
(statearr_29126_29237[(2)] = inst_29103);

(statearr_29126_29237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (4))){
var inst_29100 = (state_29119[(10)]);
var inst_29100__$1 = (state_29119[(2)]);
var inst_29101 = (inst_29100__$1 == null);
var state_29119__$1 = (function (){var statearr_29127 = state_29119;
(statearr_29127[(10)] = inst_29100__$1);

return statearr_29127;
})();
if(cljs.core.truth_(inst_29101)){
var statearr_29128_29238 = state_29119__$1;
(statearr_29128_29238[(1)] = (5));

} else {
var statearr_29129_29239 = state_29119__$1;
(statearr_29129_29239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (3))){
var inst_29117 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29119__$1,inst_29117);
} else {
if((state_val_29120 === (2))){
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29119__$1,(4),from);
} else {
if((state_val_29120 === (1))){
var state_29119__$1 = state_29119;
var statearr_29130_29240 = state_29119__$1;
(statearr_29130_29240[(2)] = null);

(statearr_29130_29240[(1)] = (2));


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
});})(c__6473__auto___29234,jobs,results,process,async))
;
return ((function (switch__6452__auto__,c__6473__auto___29234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0 = (function (){
var statearr_29134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_29134[(1)] = (1));

return statearr_29134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_29119){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29135){if((e29135 instanceof Object)){
var ex__6456__auto__ = e29135;
var statearr_29136_29241 = state_29119;
(statearr_29136_29241[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29242 = state_29119;
state_29119 = G__29242;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_29119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_29119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___29234,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_29137 = f__6474__auto__.call(null);
(statearr_29137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___29234);

return statearr_29137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___29234,jobs,results,process,async))
);


var c__6473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto__,jobs,results,process,async){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto__,jobs,results,process,async){
return (function (state_29175){
var state_val_29176 = (state_29175[(1)]);
if((state_val_29176 === (7))){
var inst_29171 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29177_29243 = state_29175__$1;
(statearr_29177_29243[(2)] = inst_29171);

(statearr_29177_29243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (20))){
var state_29175__$1 = state_29175;
var statearr_29178_29244 = state_29175__$1;
(statearr_29178_29244[(2)] = null);

(statearr_29178_29244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (1))){
var state_29175__$1 = state_29175;
var statearr_29179_29245 = state_29175__$1;
(statearr_29179_29245[(2)] = null);

(statearr_29179_29245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (4))){
var inst_29140 = (state_29175[(7)]);
var inst_29140__$1 = (state_29175[(2)]);
var inst_29141 = (inst_29140__$1 == null);
var state_29175__$1 = (function (){var statearr_29180 = state_29175;
(statearr_29180[(7)] = inst_29140__$1);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29141)){
var statearr_29181_29246 = state_29175__$1;
(statearr_29181_29246[(1)] = (5));

} else {
var statearr_29182_29247 = state_29175__$1;
(statearr_29182_29247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (15))){
var inst_29153 = (state_29175[(8)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29175__$1,(18),to,inst_29153);
} else {
if((state_val_29176 === (21))){
var inst_29166 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29183_29248 = state_29175__$1;
(statearr_29183_29248[(2)] = inst_29166);

(statearr_29183_29248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (13))){
var inst_29168 = (state_29175[(2)]);
var state_29175__$1 = (function (){var statearr_29184 = state_29175;
(statearr_29184[(9)] = inst_29168);

return statearr_29184;
})();
var statearr_29185_29249 = state_29175__$1;
(statearr_29185_29249[(2)] = null);

(statearr_29185_29249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (6))){
var inst_29140 = (state_29175[(7)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29175__$1,(11),inst_29140);
} else {
if((state_val_29176 === (17))){
var inst_29161 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
if(cljs.core.truth_(inst_29161)){
var statearr_29186_29250 = state_29175__$1;
(statearr_29186_29250[(1)] = (19));

} else {
var statearr_29187_29251 = state_29175__$1;
(statearr_29187_29251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (3))){
var inst_29173 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29175__$1,inst_29173);
} else {
if((state_val_29176 === (12))){
var inst_29150 = (state_29175[(10)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29175__$1,(14),inst_29150);
} else {
if((state_val_29176 === (2))){
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29175__$1,(4),results);
} else {
if((state_val_29176 === (19))){
var state_29175__$1 = state_29175;
var statearr_29188_29252 = state_29175__$1;
(statearr_29188_29252[(2)] = null);

(statearr_29188_29252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (11))){
var inst_29150 = (state_29175[(2)]);
var state_29175__$1 = (function (){var statearr_29189 = state_29175;
(statearr_29189[(10)] = inst_29150);

return statearr_29189;
})();
var statearr_29190_29253 = state_29175__$1;
(statearr_29190_29253[(2)] = null);

(statearr_29190_29253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (9))){
var state_29175__$1 = state_29175;
var statearr_29191_29254 = state_29175__$1;
(statearr_29191_29254[(2)] = null);

(statearr_29191_29254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (5))){
var state_29175__$1 = state_29175;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29192_29255 = state_29175__$1;
(statearr_29192_29255[(1)] = (8));

} else {
var statearr_29193_29256 = state_29175__$1;
(statearr_29193_29256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (14))){
var inst_29155 = (state_29175[(11)]);
var inst_29153 = (state_29175[(8)]);
var inst_29153__$1 = (state_29175[(2)]);
var inst_29154 = (inst_29153__$1 == null);
var inst_29155__$1 = cljs.core.not.call(null,inst_29154);
var state_29175__$1 = (function (){var statearr_29194 = state_29175;
(statearr_29194[(11)] = inst_29155__$1);

(statearr_29194[(8)] = inst_29153__$1);

return statearr_29194;
})();
if(inst_29155__$1){
var statearr_29195_29257 = state_29175__$1;
(statearr_29195_29257[(1)] = (15));

} else {
var statearr_29196_29258 = state_29175__$1;
(statearr_29196_29258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (16))){
var inst_29155 = (state_29175[(11)]);
var state_29175__$1 = state_29175;
var statearr_29197_29259 = state_29175__$1;
(statearr_29197_29259[(2)] = inst_29155);

(statearr_29197_29259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (10))){
var inst_29147 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29198_29260 = state_29175__$1;
(statearr_29198_29260[(2)] = inst_29147);

(statearr_29198_29260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (18))){
var inst_29158 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29199_29261 = state_29175__$1;
(statearr_29199_29261[(2)] = inst_29158);

(statearr_29199_29261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (8))){
var inst_29144 = cljs.core.async.close_BANG_.call(null,to);
var state_29175__$1 = state_29175;
var statearr_29200_29262 = state_29175__$1;
(statearr_29200_29262[(2)] = inst_29144);

(statearr_29200_29262[(1)] = (10));


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
var statearr_29204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__);

(statearr_29204[(1)] = (1));

return statearr_29204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1 = (function (state_29175){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29205){if((e29205 instanceof Object)){
var ex__6456__auto__ = e29205;
var statearr_29206_29263 = state_29175;
(statearr_29206_29263[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29264 = state_29175;
state_29175 = G__29264;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__ = function(state_29175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1.call(this,state_29175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__,jobs,results,process,async))
})();
var state__6475__auto__ = (function (){var statearr_29207 = f__6474__auto__.call(null);
(statearr_29207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_29207;
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
var G__29266 = arguments.length;
switch (G__29266) {
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
var G__29269 = arguments.length;
switch (G__29269) {
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
var G__29272 = arguments.length;
switch (G__29272) {
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
var c__6473__auto___29324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___29324,tc,fc){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___29324,tc,fc){
return (function (state_29298){
var state_val_29299 = (state_29298[(1)]);
if((state_val_29299 === (7))){
var inst_29294 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29300_29325 = state_29298__$1;
(statearr_29300_29325[(2)] = inst_29294);

(statearr_29300_29325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (1))){
var state_29298__$1 = state_29298;
var statearr_29301_29326 = state_29298__$1;
(statearr_29301_29326[(2)] = null);

(statearr_29301_29326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (4))){
var inst_29275 = (state_29298[(7)]);
var inst_29275__$1 = (state_29298[(2)]);
var inst_29276 = (inst_29275__$1 == null);
var state_29298__$1 = (function (){var statearr_29302 = state_29298;
(statearr_29302[(7)] = inst_29275__$1);

return statearr_29302;
})();
if(cljs.core.truth_(inst_29276)){
var statearr_29303_29327 = state_29298__$1;
(statearr_29303_29327[(1)] = (5));

} else {
var statearr_29304_29328 = state_29298__$1;
(statearr_29304_29328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (13))){
var state_29298__$1 = state_29298;
var statearr_29305_29329 = state_29298__$1;
(statearr_29305_29329[(2)] = null);

(statearr_29305_29329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (6))){
var inst_29275 = (state_29298[(7)]);
var inst_29281 = p.call(null,inst_29275);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29281)){
var statearr_29306_29330 = state_29298__$1;
(statearr_29306_29330[(1)] = (9));

} else {
var statearr_29307_29331 = state_29298__$1;
(statearr_29307_29331[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (3))){
var inst_29296 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29298__$1,inst_29296);
} else {
if((state_val_29299 === (12))){
var state_29298__$1 = state_29298;
var statearr_29308_29332 = state_29298__$1;
(statearr_29308_29332[(2)] = null);

(statearr_29308_29332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (2))){
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29298__$1,(4),ch);
} else {
if((state_val_29299 === (11))){
var inst_29275 = (state_29298[(7)]);
var inst_29285 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29298__$1,(8),inst_29285,inst_29275);
} else {
if((state_val_29299 === (9))){
var state_29298__$1 = state_29298;
var statearr_29309_29333 = state_29298__$1;
(statearr_29309_29333[(2)] = tc);

(statearr_29309_29333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (5))){
var inst_29278 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29279 = cljs.core.async.close_BANG_.call(null,fc);
var state_29298__$1 = (function (){var statearr_29310 = state_29298;
(statearr_29310[(8)] = inst_29278);

return statearr_29310;
})();
var statearr_29311_29334 = state_29298__$1;
(statearr_29311_29334[(2)] = inst_29279);

(statearr_29311_29334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (14))){
var inst_29292 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29312_29335 = state_29298__$1;
(statearr_29312_29335[(2)] = inst_29292);

(statearr_29312_29335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (10))){
var state_29298__$1 = state_29298;
var statearr_29313_29336 = state_29298__$1;
(statearr_29313_29336[(2)] = fc);

(statearr_29313_29336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (8))){
var inst_29287 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29287)){
var statearr_29314_29337 = state_29298__$1;
(statearr_29314_29337[(1)] = (12));

} else {
var statearr_29315_29338 = state_29298__$1;
(statearr_29315_29338[(1)] = (13));

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
});})(c__6473__auto___29324,tc,fc))
;
return ((function (switch__6452__auto__,c__6473__auto___29324,tc,fc){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_29319 = [null,null,null,null,null,null,null,null,null];
(statearr_29319[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_29319[(1)] = (1));

return statearr_29319;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_29298){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29320){if((e29320 instanceof Object)){
var ex__6456__auto__ = e29320;
var statearr_29321_29339 = state_29298;
(statearr_29321_29339[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29340 = state_29298;
state_29298 = G__29340;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_29298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_29298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___29324,tc,fc))
})();
var state__6475__auto__ = (function (){var statearr_29322 = f__6474__auto__.call(null);
(statearr_29322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___29324);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___29324,tc,fc))
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
return (function (state_29387){
var state_val_29388 = (state_29387[(1)]);
if((state_val_29388 === (7))){
var inst_29383 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29389_29405 = state_29387__$1;
(statearr_29389_29405[(2)] = inst_29383);

(statearr_29389_29405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (6))){
var inst_29373 = (state_29387[(7)]);
var inst_29376 = (state_29387[(8)]);
var inst_29380 = f.call(null,inst_29373,inst_29376);
var inst_29373__$1 = inst_29380;
var state_29387__$1 = (function (){var statearr_29390 = state_29387;
(statearr_29390[(7)] = inst_29373__$1);

return statearr_29390;
})();
var statearr_29391_29406 = state_29387__$1;
(statearr_29391_29406[(2)] = null);

(statearr_29391_29406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (5))){
var inst_29373 = (state_29387[(7)]);
var state_29387__$1 = state_29387;
var statearr_29392_29407 = state_29387__$1;
(statearr_29392_29407[(2)] = inst_29373);

(statearr_29392_29407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (4))){
var inst_29376 = (state_29387[(8)]);
var inst_29376__$1 = (state_29387[(2)]);
var inst_29377 = (inst_29376__$1 == null);
var state_29387__$1 = (function (){var statearr_29393 = state_29387;
(statearr_29393[(8)] = inst_29376__$1);

return statearr_29393;
})();
if(cljs.core.truth_(inst_29377)){
var statearr_29394_29408 = state_29387__$1;
(statearr_29394_29408[(1)] = (5));

} else {
var statearr_29395_29409 = state_29387__$1;
(statearr_29395_29409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (3))){
var inst_29385 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29387__$1,inst_29385);
} else {
if((state_val_29388 === (2))){
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29387__$1,(4),ch);
} else {
if((state_val_29388 === (1))){
var inst_29373 = init;
var state_29387__$1 = (function (){var statearr_29396 = state_29387;
(statearr_29396[(7)] = inst_29373);

return statearr_29396;
})();
var statearr_29397_29410 = state_29387__$1;
(statearr_29397_29410[(2)] = null);

(statearr_29397_29410[(1)] = (2));


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
var statearr_29401 = [null,null,null,null,null,null,null,null,null];
(statearr_29401[(0)] = cljs$core$async$reduce_$_state_machine__6453__auto__);

(statearr_29401[(1)] = (1));

return statearr_29401;
});
var cljs$core$async$reduce_$_state_machine__6453__auto____1 = (function (state_29387){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29402){if((e29402 instanceof Object)){
var ex__6456__auto__ = e29402;
var statearr_29403_29411 = state_29387;
(statearr_29403_29411[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29412 = state_29387;
state_29387 = G__29412;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6453__auto__ = function(state_29387){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6453__auto____1.call(this,state_29387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6453__auto____0;
cljs$core$async$reduce_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6453__auto____1;
return cljs$core$async$reduce_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__))
})();
var state__6475__auto__ = (function (){var statearr_29404 = f__6474__auto__.call(null);
(statearr_29404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_29404;
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
var G__29414 = arguments.length;
switch (G__29414) {
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
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (7))){
var inst_29421 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29441_29465 = state_29439__$1;
(statearr_29441_29465[(2)] = inst_29421);

(statearr_29441_29465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (1))){
var inst_29415 = cljs.core.seq.call(null,coll);
var inst_29416 = inst_29415;
var state_29439__$1 = (function (){var statearr_29442 = state_29439;
(statearr_29442[(7)] = inst_29416);

return statearr_29442;
})();
var statearr_29443_29466 = state_29439__$1;
(statearr_29443_29466[(2)] = null);

(statearr_29443_29466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (4))){
var inst_29416 = (state_29439[(7)]);
var inst_29419 = cljs.core.first.call(null,inst_29416);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(7),ch,inst_29419);
} else {
if((state_val_29440 === (13))){
var inst_29433 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29444_29467 = state_29439__$1;
(statearr_29444_29467[(2)] = inst_29433);

(statearr_29444_29467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var inst_29424 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29424)){
var statearr_29445_29468 = state_29439__$1;
(statearr_29445_29468[(1)] = (8));

} else {
var statearr_29446_29469 = state_29439__$1;
(statearr_29446_29469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (3))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (12))){
var state_29439__$1 = state_29439;
var statearr_29447_29470 = state_29439__$1;
(statearr_29447_29470[(2)] = null);

(statearr_29447_29470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (2))){
var inst_29416 = (state_29439[(7)]);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29416)){
var statearr_29448_29471 = state_29439__$1;
(statearr_29448_29471[(1)] = (4));

} else {
var statearr_29449_29472 = state_29439__$1;
(statearr_29449_29472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (11))){
var inst_29430 = cljs.core.async.close_BANG_.call(null,ch);
var state_29439__$1 = state_29439;
var statearr_29450_29473 = state_29439__$1;
(statearr_29450_29473[(2)] = inst_29430);

(statearr_29450_29473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (9))){
var state_29439__$1 = state_29439;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29451_29474 = state_29439__$1;
(statearr_29451_29474[(1)] = (11));

} else {
var statearr_29452_29475 = state_29439__$1;
(statearr_29452_29475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (5))){
var inst_29416 = (state_29439[(7)]);
var state_29439__$1 = state_29439;
var statearr_29453_29476 = state_29439__$1;
(statearr_29453_29476[(2)] = inst_29416);

(statearr_29453_29476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (10))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29454_29477 = state_29439__$1;
(statearr_29454_29477[(2)] = inst_29435);

(statearr_29454_29477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (8))){
var inst_29416 = (state_29439[(7)]);
var inst_29426 = cljs.core.next.call(null,inst_29416);
var inst_29416__$1 = inst_29426;
var state_29439__$1 = (function (){var statearr_29455 = state_29439;
(statearr_29455[(7)] = inst_29416__$1);

return statearr_29455;
})();
var statearr_29456_29478 = state_29439__$1;
(statearr_29456_29478[(2)] = null);

(statearr_29456_29478[(1)] = (2));


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
var statearr_29460 = [null,null,null,null,null,null,null,null];
(statearr_29460[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_29460[(1)] = (1));

return statearr_29460;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_29439){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29461){if((e29461 instanceof Object)){
var ex__6456__auto__ = e29461;
var statearr_29462_29479 = state_29439;
(statearr_29462_29479[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29480 = state_29439;
state_29439 = G__29480;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__))
})();
var state__6475__auto__ = (function (){var statearr_29463 = f__6474__auto__.call(null);
(statearr_29463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_29463;
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

cljs.core.async.Mux = (function (){var obj29482 = {};
return obj29482;
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


cljs.core.async.Mult = (function (){var obj29484 = {};
return obj29484;
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
if(typeof cljs.core.async.t29706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29706 = (function (cs,ch,mult,meta29707){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29707 = meta29707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29706.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29706.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29708){
var self__ = this;
var _29708__$1 = this;
return self__.meta29707;
});})(cs))
;

cljs.core.async.t29706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29708,meta29707__$1){
var self__ = this;
var _29708__$1 = this;
return (new cljs.core.async.t29706(self__.cs,self__.ch,self__.mult,meta29707__$1));
});})(cs))
;

cljs.core.async.t29706.cljs$lang$type = true;

cljs.core.async.t29706.cljs$lang$ctorStr = "cljs.core.async/t29706";

cljs.core.async.t29706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t29706");
});})(cs))
;

cljs.core.async.__GT_t29706 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29706(cs__$1,ch__$1,mult__$1,meta29707){
return (new cljs.core.async.t29706(cs__$1,ch__$1,mult__$1,meta29707));
});})(cs))
;

}

return (new cljs.core.async.t29706(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6473__auto___29927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___29927,cs,m,dchan,dctr,done){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___29927,cs,m,dchan,dctr,done){
return (function (state_29839){
var state_val_29840 = (state_29839[(1)]);
if((state_val_29840 === (7))){
var inst_29835 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29841_29928 = state_29839__$1;
(statearr_29841_29928[(2)] = inst_29835);

(statearr_29841_29928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (20))){
var inst_29740 = (state_29839[(7)]);
var inst_29750 = cljs.core.first.call(null,inst_29740);
var inst_29751 = cljs.core.nth.call(null,inst_29750,(0),null);
var inst_29752 = cljs.core.nth.call(null,inst_29750,(1),null);
var state_29839__$1 = (function (){var statearr_29842 = state_29839;
(statearr_29842[(8)] = inst_29751);

return statearr_29842;
})();
if(cljs.core.truth_(inst_29752)){
var statearr_29843_29929 = state_29839__$1;
(statearr_29843_29929[(1)] = (22));

} else {
var statearr_29844_29930 = state_29839__$1;
(statearr_29844_29930[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (27))){
var inst_29782 = (state_29839[(9)]);
var inst_29780 = (state_29839[(10)]);
var inst_29787 = (state_29839[(11)]);
var inst_29711 = (state_29839[(12)]);
var inst_29787__$1 = cljs.core._nth.call(null,inst_29780,inst_29782);
var inst_29788 = cljs.core.async.put_BANG_.call(null,inst_29787__$1,inst_29711,done);
var state_29839__$1 = (function (){var statearr_29845 = state_29839;
(statearr_29845[(11)] = inst_29787__$1);

return statearr_29845;
})();
if(cljs.core.truth_(inst_29788)){
var statearr_29846_29931 = state_29839__$1;
(statearr_29846_29931[(1)] = (30));

} else {
var statearr_29847_29932 = state_29839__$1;
(statearr_29847_29932[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (1))){
var state_29839__$1 = state_29839;
var statearr_29848_29933 = state_29839__$1;
(statearr_29848_29933[(2)] = null);

(statearr_29848_29933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (24))){
var inst_29740 = (state_29839[(7)]);
var inst_29757 = (state_29839[(2)]);
var inst_29758 = cljs.core.next.call(null,inst_29740);
var inst_29720 = inst_29758;
var inst_29721 = null;
var inst_29722 = (0);
var inst_29723 = (0);
var state_29839__$1 = (function (){var statearr_29849 = state_29839;
(statearr_29849[(13)] = inst_29723);

(statearr_29849[(14)] = inst_29722);

(statearr_29849[(15)] = inst_29721);

(statearr_29849[(16)] = inst_29757);

(statearr_29849[(17)] = inst_29720);

return statearr_29849;
})();
var statearr_29850_29934 = state_29839__$1;
(statearr_29850_29934[(2)] = null);

(statearr_29850_29934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (39))){
var state_29839__$1 = state_29839;
var statearr_29854_29935 = state_29839__$1;
(statearr_29854_29935[(2)] = null);

(statearr_29854_29935[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (4))){
var inst_29711 = (state_29839[(12)]);
var inst_29711__$1 = (state_29839[(2)]);
var inst_29712 = (inst_29711__$1 == null);
var state_29839__$1 = (function (){var statearr_29855 = state_29839;
(statearr_29855[(12)] = inst_29711__$1);

return statearr_29855;
})();
if(cljs.core.truth_(inst_29712)){
var statearr_29856_29936 = state_29839__$1;
(statearr_29856_29936[(1)] = (5));

} else {
var statearr_29857_29937 = state_29839__$1;
(statearr_29857_29937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (15))){
var inst_29723 = (state_29839[(13)]);
var inst_29722 = (state_29839[(14)]);
var inst_29721 = (state_29839[(15)]);
var inst_29720 = (state_29839[(17)]);
var inst_29736 = (state_29839[(2)]);
var inst_29737 = (inst_29723 + (1));
var tmp29851 = inst_29722;
var tmp29852 = inst_29721;
var tmp29853 = inst_29720;
var inst_29720__$1 = tmp29853;
var inst_29721__$1 = tmp29852;
var inst_29722__$1 = tmp29851;
var inst_29723__$1 = inst_29737;
var state_29839__$1 = (function (){var statearr_29858 = state_29839;
(statearr_29858[(13)] = inst_29723__$1);

(statearr_29858[(14)] = inst_29722__$1);

(statearr_29858[(18)] = inst_29736);

(statearr_29858[(15)] = inst_29721__$1);

(statearr_29858[(17)] = inst_29720__$1);

return statearr_29858;
})();
var statearr_29859_29938 = state_29839__$1;
(statearr_29859_29938[(2)] = null);

(statearr_29859_29938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (21))){
var inst_29761 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29863_29939 = state_29839__$1;
(statearr_29863_29939[(2)] = inst_29761);

(statearr_29863_29939[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (31))){
var inst_29787 = (state_29839[(11)]);
var inst_29791 = done.call(null,null);
var inst_29792 = cljs.core.async.untap_STAR_.call(null,m,inst_29787);
var state_29839__$1 = (function (){var statearr_29864 = state_29839;
(statearr_29864[(19)] = inst_29791);

return statearr_29864;
})();
var statearr_29865_29940 = state_29839__$1;
(statearr_29865_29940[(2)] = inst_29792);

(statearr_29865_29940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (32))){
var inst_29779 = (state_29839[(20)]);
var inst_29782 = (state_29839[(9)]);
var inst_29780 = (state_29839[(10)]);
var inst_29781 = (state_29839[(21)]);
var inst_29794 = (state_29839[(2)]);
var inst_29795 = (inst_29782 + (1));
var tmp29860 = inst_29779;
var tmp29861 = inst_29780;
var tmp29862 = inst_29781;
var inst_29779__$1 = tmp29860;
var inst_29780__$1 = tmp29861;
var inst_29781__$1 = tmp29862;
var inst_29782__$1 = inst_29795;
var state_29839__$1 = (function (){var statearr_29866 = state_29839;
(statearr_29866[(20)] = inst_29779__$1);

(statearr_29866[(9)] = inst_29782__$1);

(statearr_29866[(10)] = inst_29780__$1);

(statearr_29866[(21)] = inst_29781__$1);

(statearr_29866[(22)] = inst_29794);

return statearr_29866;
})();
var statearr_29867_29941 = state_29839__$1;
(statearr_29867_29941[(2)] = null);

(statearr_29867_29941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (40))){
var inst_29807 = (state_29839[(23)]);
var inst_29811 = done.call(null,null);
var inst_29812 = cljs.core.async.untap_STAR_.call(null,m,inst_29807);
var state_29839__$1 = (function (){var statearr_29868 = state_29839;
(statearr_29868[(24)] = inst_29811);

return statearr_29868;
})();
var statearr_29869_29942 = state_29839__$1;
(statearr_29869_29942[(2)] = inst_29812);

(statearr_29869_29942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (33))){
var inst_29798 = (state_29839[(25)]);
var inst_29800 = cljs.core.chunked_seq_QMARK_.call(null,inst_29798);
var state_29839__$1 = state_29839;
if(inst_29800){
var statearr_29870_29943 = state_29839__$1;
(statearr_29870_29943[(1)] = (36));

} else {
var statearr_29871_29944 = state_29839__$1;
(statearr_29871_29944[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (13))){
var inst_29730 = (state_29839[(26)]);
var inst_29733 = cljs.core.async.close_BANG_.call(null,inst_29730);
var state_29839__$1 = state_29839;
var statearr_29872_29945 = state_29839__$1;
(statearr_29872_29945[(2)] = inst_29733);

(statearr_29872_29945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (22))){
var inst_29751 = (state_29839[(8)]);
var inst_29754 = cljs.core.async.close_BANG_.call(null,inst_29751);
var state_29839__$1 = state_29839;
var statearr_29873_29946 = state_29839__$1;
(statearr_29873_29946[(2)] = inst_29754);

(statearr_29873_29946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (36))){
var inst_29798 = (state_29839[(25)]);
var inst_29802 = cljs.core.chunk_first.call(null,inst_29798);
var inst_29803 = cljs.core.chunk_rest.call(null,inst_29798);
var inst_29804 = cljs.core.count.call(null,inst_29802);
var inst_29779 = inst_29803;
var inst_29780 = inst_29802;
var inst_29781 = inst_29804;
var inst_29782 = (0);
var state_29839__$1 = (function (){var statearr_29874 = state_29839;
(statearr_29874[(20)] = inst_29779);

(statearr_29874[(9)] = inst_29782);

(statearr_29874[(10)] = inst_29780);

(statearr_29874[(21)] = inst_29781);

return statearr_29874;
})();
var statearr_29875_29947 = state_29839__$1;
(statearr_29875_29947[(2)] = null);

(statearr_29875_29947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (41))){
var inst_29798 = (state_29839[(25)]);
var inst_29814 = (state_29839[(2)]);
var inst_29815 = cljs.core.next.call(null,inst_29798);
var inst_29779 = inst_29815;
var inst_29780 = null;
var inst_29781 = (0);
var inst_29782 = (0);
var state_29839__$1 = (function (){var statearr_29876 = state_29839;
(statearr_29876[(20)] = inst_29779);

(statearr_29876[(9)] = inst_29782);

(statearr_29876[(10)] = inst_29780);

(statearr_29876[(21)] = inst_29781);

(statearr_29876[(27)] = inst_29814);

return statearr_29876;
})();
var statearr_29877_29948 = state_29839__$1;
(statearr_29877_29948[(2)] = null);

(statearr_29877_29948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (43))){
var state_29839__$1 = state_29839;
var statearr_29878_29949 = state_29839__$1;
(statearr_29878_29949[(2)] = null);

(statearr_29878_29949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (29))){
var inst_29823 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29879_29950 = state_29839__$1;
(statearr_29879_29950[(2)] = inst_29823);

(statearr_29879_29950[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (44))){
var inst_29832 = (state_29839[(2)]);
var state_29839__$1 = (function (){var statearr_29880 = state_29839;
(statearr_29880[(28)] = inst_29832);

return statearr_29880;
})();
var statearr_29881_29951 = state_29839__$1;
(statearr_29881_29951[(2)] = null);

(statearr_29881_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (6))){
var inst_29771 = (state_29839[(29)]);
var inst_29770 = cljs.core.deref.call(null,cs);
var inst_29771__$1 = cljs.core.keys.call(null,inst_29770);
var inst_29772 = cljs.core.count.call(null,inst_29771__$1);
var inst_29773 = cljs.core.reset_BANG_.call(null,dctr,inst_29772);
var inst_29778 = cljs.core.seq.call(null,inst_29771__$1);
var inst_29779 = inst_29778;
var inst_29780 = null;
var inst_29781 = (0);
var inst_29782 = (0);
var state_29839__$1 = (function (){var statearr_29882 = state_29839;
(statearr_29882[(20)] = inst_29779);

(statearr_29882[(29)] = inst_29771__$1);

(statearr_29882[(9)] = inst_29782);

(statearr_29882[(10)] = inst_29780);

(statearr_29882[(21)] = inst_29781);

(statearr_29882[(30)] = inst_29773);

return statearr_29882;
})();
var statearr_29883_29952 = state_29839__$1;
(statearr_29883_29952[(2)] = null);

(statearr_29883_29952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (28))){
var inst_29779 = (state_29839[(20)]);
var inst_29798 = (state_29839[(25)]);
var inst_29798__$1 = cljs.core.seq.call(null,inst_29779);
var state_29839__$1 = (function (){var statearr_29884 = state_29839;
(statearr_29884[(25)] = inst_29798__$1);

return statearr_29884;
})();
if(inst_29798__$1){
var statearr_29885_29953 = state_29839__$1;
(statearr_29885_29953[(1)] = (33));

} else {
var statearr_29886_29954 = state_29839__$1;
(statearr_29886_29954[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (25))){
var inst_29782 = (state_29839[(9)]);
var inst_29781 = (state_29839[(21)]);
var inst_29784 = (inst_29782 < inst_29781);
var inst_29785 = inst_29784;
var state_29839__$1 = state_29839;
if(cljs.core.truth_(inst_29785)){
var statearr_29887_29955 = state_29839__$1;
(statearr_29887_29955[(1)] = (27));

} else {
var statearr_29888_29956 = state_29839__$1;
(statearr_29888_29956[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (34))){
var state_29839__$1 = state_29839;
var statearr_29889_29957 = state_29839__$1;
(statearr_29889_29957[(2)] = null);

(statearr_29889_29957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (17))){
var state_29839__$1 = state_29839;
var statearr_29890_29958 = state_29839__$1;
(statearr_29890_29958[(2)] = null);

(statearr_29890_29958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (3))){
var inst_29837 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29839__$1,inst_29837);
} else {
if((state_val_29840 === (12))){
var inst_29766 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29891_29959 = state_29839__$1;
(statearr_29891_29959[(2)] = inst_29766);

(statearr_29891_29959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (2))){
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29839__$1,(4),ch);
} else {
if((state_val_29840 === (23))){
var state_29839__$1 = state_29839;
var statearr_29892_29960 = state_29839__$1;
(statearr_29892_29960[(2)] = null);

(statearr_29892_29960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (35))){
var inst_29821 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29893_29961 = state_29839__$1;
(statearr_29893_29961[(2)] = inst_29821);

(statearr_29893_29961[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (19))){
var inst_29740 = (state_29839[(7)]);
var inst_29744 = cljs.core.chunk_first.call(null,inst_29740);
var inst_29745 = cljs.core.chunk_rest.call(null,inst_29740);
var inst_29746 = cljs.core.count.call(null,inst_29744);
var inst_29720 = inst_29745;
var inst_29721 = inst_29744;
var inst_29722 = inst_29746;
var inst_29723 = (0);
var state_29839__$1 = (function (){var statearr_29894 = state_29839;
(statearr_29894[(13)] = inst_29723);

(statearr_29894[(14)] = inst_29722);

(statearr_29894[(15)] = inst_29721);

(statearr_29894[(17)] = inst_29720);

return statearr_29894;
})();
var statearr_29895_29962 = state_29839__$1;
(statearr_29895_29962[(2)] = null);

(statearr_29895_29962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (11))){
var inst_29720 = (state_29839[(17)]);
var inst_29740 = (state_29839[(7)]);
var inst_29740__$1 = cljs.core.seq.call(null,inst_29720);
var state_29839__$1 = (function (){var statearr_29896 = state_29839;
(statearr_29896[(7)] = inst_29740__$1);

return statearr_29896;
})();
if(inst_29740__$1){
var statearr_29897_29963 = state_29839__$1;
(statearr_29897_29963[(1)] = (16));

} else {
var statearr_29898_29964 = state_29839__$1;
(statearr_29898_29964[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (9))){
var inst_29768 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29899_29965 = state_29839__$1;
(statearr_29899_29965[(2)] = inst_29768);

(statearr_29899_29965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (5))){
var inst_29718 = cljs.core.deref.call(null,cs);
var inst_29719 = cljs.core.seq.call(null,inst_29718);
var inst_29720 = inst_29719;
var inst_29721 = null;
var inst_29722 = (0);
var inst_29723 = (0);
var state_29839__$1 = (function (){var statearr_29900 = state_29839;
(statearr_29900[(13)] = inst_29723);

(statearr_29900[(14)] = inst_29722);

(statearr_29900[(15)] = inst_29721);

(statearr_29900[(17)] = inst_29720);

return statearr_29900;
})();
var statearr_29901_29966 = state_29839__$1;
(statearr_29901_29966[(2)] = null);

(statearr_29901_29966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (14))){
var state_29839__$1 = state_29839;
var statearr_29902_29967 = state_29839__$1;
(statearr_29902_29967[(2)] = null);

(statearr_29902_29967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (45))){
var inst_29829 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29903_29968 = state_29839__$1;
(statearr_29903_29968[(2)] = inst_29829);

(statearr_29903_29968[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (26))){
var inst_29771 = (state_29839[(29)]);
var inst_29825 = (state_29839[(2)]);
var inst_29826 = cljs.core.seq.call(null,inst_29771);
var state_29839__$1 = (function (){var statearr_29904 = state_29839;
(statearr_29904[(31)] = inst_29825);

return statearr_29904;
})();
if(inst_29826){
var statearr_29905_29969 = state_29839__$1;
(statearr_29905_29969[(1)] = (42));

} else {
var statearr_29906_29970 = state_29839__$1;
(statearr_29906_29970[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (16))){
var inst_29740 = (state_29839[(7)]);
var inst_29742 = cljs.core.chunked_seq_QMARK_.call(null,inst_29740);
var state_29839__$1 = state_29839;
if(inst_29742){
var statearr_29907_29971 = state_29839__$1;
(statearr_29907_29971[(1)] = (19));

} else {
var statearr_29908_29972 = state_29839__$1;
(statearr_29908_29972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (38))){
var inst_29818 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29909_29973 = state_29839__$1;
(statearr_29909_29973[(2)] = inst_29818);

(statearr_29909_29973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (30))){
var state_29839__$1 = state_29839;
var statearr_29910_29974 = state_29839__$1;
(statearr_29910_29974[(2)] = null);

(statearr_29910_29974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (10))){
var inst_29723 = (state_29839[(13)]);
var inst_29721 = (state_29839[(15)]);
var inst_29729 = cljs.core._nth.call(null,inst_29721,inst_29723);
var inst_29730 = cljs.core.nth.call(null,inst_29729,(0),null);
var inst_29731 = cljs.core.nth.call(null,inst_29729,(1),null);
var state_29839__$1 = (function (){var statearr_29911 = state_29839;
(statearr_29911[(26)] = inst_29730);

return statearr_29911;
})();
if(cljs.core.truth_(inst_29731)){
var statearr_29912_29975 = state_29839__$1;
(statearr_29912_29975[(1)] = (13));

} else {
var statearr_29913_29976 = state_29839__$1;
(statearr_29913_29976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (18))){
var inst_29764 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29914_29977 = state_29839__$1;
(statearr_29914_29977[(2)] = inst_29764);

(statearr_29914_29977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (42))){
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29839__$1,(45),dchan);
} else {
if((state_val_29840 === (37))){
var inst_29807 = (state_29839[(23)]);
var inst_29798 = (state_29839[(25)]);
var inst_29711 = (state_29839[(12)]);
var inst_29807__$1 = cljs.core.first.call(null,inst_29798);
var inst_29808 = cljs.core.async.put_BANG_.call(null,inst_29807__$1,inst_29711,done);
var state_29839__$1 = (function (){var statearr_29915 = state_29839;
(statearr_29915[(23)] = inst_29807__$1);

return statearr_29915;
})();
if(cljs.core.truth_(inst_29808)){
var statearr_29916_29978 = state_29839__$1;
(statearr_29916_29978[(1)] = (39));

} else {
var statearr_29917_29979 = state_29839__$1;
(statearr_29917_29979[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (8))){
var inst_29723 = (state_29839[(13)]);
var inst_29722 = (state_29839[(14)]);
var inst_29725 = (inst_29723 < inst_29722);
var inst_29726 = inst_29725;
var state_29839__$1 = state_29839;
if(cljs.core.truth_(inst_29726)){
var statearr_29918_29980 = state_29839__$1;
(statearr_29918_29980[(1)] = (10));

} else {
var statearr_29919_29981 = state_29839__$1;
(statearr_29919_29981[(1)] = (11));

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
});})(c__6473__auto___29927,cs,m,dchan,dctr,done))
;
return ((function (switch__6452__auto__,c__6473__auto___29927,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6453__auto__ = null;
var cljs$core$async$mult_$_state_machine__6453__auto____0 = (function (){
var statearr_29923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29923[(0)] = cljs$core$async$mult_$_state_machine__6453__auto__);

(statearr_29923[(1)] = (1));

return statearr_29923;
});
var cljs$core$async$mult_$_state_machine__6453__auto____1 = (function (state_29839){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_29839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e29924){if((e29924 instanceof Object)){
var ex__6456__auto__ = e29924;
var statearr_29925_29982 = state_29839;
(statearr_29925_29982[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29983 = state_29839;
state_29839 = G__29983;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6453__auto__ = function(state_29839){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6453__auto____1.call(this,state_29839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6453__auto____0;
cljs$core$async$mult_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6453__auto____1;
return cljs$core$async$mult_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___29927,cs,m,dchan,dctr,done))
})();
var state__6475__auto__ = (function (){var statearr_29926 = f__6474__auto__.call(null);
(statearr_29926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___29927);

return statearr_29926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___29927,cs,m,dchan,dctr,done))
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
var G__29985 = arguments.length;
switch (G__29985) {
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

cljs.core.async.Mix = (function (){var obj29988 = {};
return obj29988;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29993){
var map__29994 = p__29993;
var map__29994__$1 = ((cljs.core.seq_QMARK_.call(null,map__29994))?cljs.core.apply.call(null,cljs.core.hash_map,map__29994):map__29994);
var opts = map__29994__$1;
var statearr_29995_29998 = state;
(statearr_29995_29998[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29994,map__29994__$1,opts){
return (function (val){
var statearr_29996_29999 = state;
(statearr_29996_29999[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29994,map__29994__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29997_30000 = state;
(statearr_29997_30000[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29989){
var G__29990 = cljs.core.first.call(null,seq29989);
var seq29989__$1 = cljs.core.next.call(null,seq29989);
var G__29991 = cljs.core.first.call(null,seq29989__$1);
var seq29989__$2 = cljs.core.next.call(null,seq29989__$1);
var G__29992 = cljs.core.first.call(null,seq29989__$2);
var seq29989__$3 = cljs.core.next.call(null,seq29989__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29990,G__29991,G__29992,seq29989__$3);
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
if(typeof cljs.core.async.t30120 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30120 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30121){
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
this.meta30121 = meta30121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30120.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30120.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30122){
var self__ = this;
var _30122__$1 = this;
return self__.meta30121;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30122,meta30121__$1){
var self__ = this;
var _30122__$1 = this;
return (new cljs.core.async.t30120(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30121__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30120.cljs$lang$type = true;

cljs.core.async.t30120.cljs$lang$ctorStr = "cljs.core.async/t30120";

cljs.core.async.t30120.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30120");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30120 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30120(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30121){
return (new cljs.core.async.t30120(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30121));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30120(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6473__auto___30239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___30239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___30239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30192){
var state_val_30193 = (state_30192[(1)]);
if((state_val_30193 === (7))){
var inst_30136 = (state_30192[(7)]);
var inst_30141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30136);
var state_30192__$1 = state_30192;
var statearr_30194_30240 = state_30192__$1;
(statearr_30194_30240[(2)] = inst_30141);

(statearr_30194_30240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (20))){
var inst_30151 = (state_30192[(8)]);
var state_30192__$1 = state_30192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30192__$1,(23),out,inst_30151);
} else {
if((state_val_30193 === (1))){
var inst_30126 = (state_30192[(9)]);
var inst_30126__$1 = calc_state.call(null);
var inst_30127 = cljs.core.seq_QMARK_.call(null,inst_30126__$1);
var state_30192__$1 = (function (){var statearr_30195 = state_30192;
(statearr_30195[(9)] = inst_30126__$1);

return statearr_30195;
})();
if(inst_30127){
var statearr_30196_30241 = state_30192__$1;
(statearr_30196_30241[(1)] = (2));

} else {
var statearr_30197_30242 = state_30192__$1;
(statearr_30197_30242[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (24))){
var inst_30144 = (state_30192[(10)]);
var inst_30136 = inst_30144;
var state_30192__$1 = (function (){var statearr_30198 = state_30192;
(statearr_30198[(7)] = inst_30136);

return statearr_30198;
})();
var statearr_30199_30243 = state_30192__$1;
(statearr_30199_30243[(2)] = null);

(statearr_30199_30243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (4))){
var inst_30126 = (state_30192[(9)]);
var inst_30132 = (state_30192[(2)]);
var inst_30133 = cljs.core.get.call(null,inst_30132,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30134 = cljs.core.get.call(null,inst_30132,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30135 = cljs.core.get.call(null,inst_30132,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30136 = inst_30126;
var state_30192__$1 = (function (){var statearr_30200 = state_30192;
(statearr_30200[(7)] = inst_30136);

(statearr_30200[(11)] = inst_30134);

(statearr_30200[(12)] = inst_30133);

(statearr_30200[(13)] = inst_30135);

return statearr_30200;
})();
var statearr_30201_30244 = state_30192__$1;
(statearr_30201_30244[(2)] = null);

(statearr_30201_30244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (15))){
var state_30192__$1 = state_30192;
var statearr_30202_30245 = state_30192__$1;
(statearr_30202_30245[(2)] = null);

(statearr_30202_30245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (21))){
var inst_30144 = (state_30192[(10)]);
var inst_30136 = inst_30144;
var state_30192__$1 = (function (){var statearr_30203 = state_30192;
(statearr_30203[(7)] = inst_30136);

return statearr_30203;
})();
var statearr_30204_30246 = state_30192__$1;
(statearr_30204_30246[(2)] = null);

(statearr_30204_30246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (13))){
var inst_30188 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30205_30247 = state_30192__$1;
(statearr_30205_30247[(2)] = inst_30188);

(statearr_30205_30247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (22))){
var inst_30186 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30206_30248 = state_30192__$1;
(statearr_30206_30248[(2)] = inst_30186);

(statearr_30206_30248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (6))){
var inst_30190 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30192__$1,inst_30190);
} else {
if((state_val_30193 === (25))){
var state_30192__$1 = state_30192;
var statearr_30207_30249 = state_30192__$1;
(statearr_30207_30249[(2)] = null);

(statearr_30207_30249[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (17))){
var inst_30166 = (state_30192[(14)]);
var state_30192__$1 = state_30192;
var statearr_30208_30250 = state_30192__$1;
(statearr_30208_30250[(2)] = inst_30166);

(statearr_30208_30250[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (3))){
var inst_30126 = (state_30192[(9)]);
var state_30192__$1 = state_30192;
var statearr_30209_30251 = state_30192__$1;
(statearr_30209_30251[(2)] = inst_30126);

(statearr_30209_30251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (12))){
var inst_30147 = (state_30192[(15)]);
var inst_30152 = (state_30192[(16)]);
var inst_30166 = (state_30192[(14)]);
var inst_30166__$1 = inst_30147.call(null,inst_30152);
var state_30192__$1 = (function (){var statearr_30210 = state_30192;
(statearr_30210[(14)] = inst_30166__$1);

return statearr_30210;
})();
if(cljs.core.truth_(inst_30166__$1)){
var statearr_30211_30252 = state_30192__$1;
(statearr_30211_30252[(1)] = (17));

} else {
var statearr_30212_30253 = state_30192__$1;
(statearr_30212_30253[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (2))){
var inst_30126 = (state_30192[(9)]);
var inst_30129 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30126);
var state_30192__$1 = state_30192;
var statearr_30213_30254 = state_30192__$1;
(statearr_30213_30254[(2)] = inst_30129);

(statearr_30213_30254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (23))){
var inst_30177 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30177)){
var statearr_30214_30255 = state_30192__$1;
(statearr_30214_30255[(1)] = (24));

} else {
var statearr_30215_30256 = state_30192__$1;
(statearr_30215_30256[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (19))){
var inst_30174 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30174)){
var statearr_30216_30257 = state_30192__$1;
(statearr_30216_30257[(1)] = (20));

} else {
var statearr_30217_30258 = state_30192__$1;
(statearr_30217_30258[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (11))){
var inst_30151 = (state_30192[(8)]);
var inst_30157 = (inst_30151 == null);
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30157)){
var statearr_30218_30259 = state_30192__$1;
(statearr_30218_30259[(1)] = (14));

} else {
var statearr_30219_30260 = state_30192__$1;
(statearr_30219_30260[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (9))){
var inst_30144 = (state_30192[(10)]);
var inst_30144__$1 = (state_30192[(2)]);
var inst_30145 = cljs.core.get.call(null,inst_30144__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30146 = cljs.core.get.call(null,inst_30144__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30147 = cljs.core.get.call(null,inst_30144__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30192__$1 = (function (){var statearr_30220 = state_30192;
(statearr_30220[(17)] = inst_30146);

(statearr_30220[(15)] = inst_30147);

(statearr_30220[(10)] = inst_30144__$1);

return statearr_30220;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30192__$1,(10),inst_30145);
} else {
if((state_val_30193 === (5))){
var inst_30136 = (state_30192[(7)]);
var inst_30139 = cljs.core.seq_QMARK_.call(null,inst_30136);
var state_30192__$1 = state_30192;
if(inst_30139){
var statearr_30221_30261 = state_30192__$1;
(statearr_30221_30261[(1)] = (7));

} else {
var statearr_30222_30262 = state_30192__$1;
(statearr_30222_30262[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (14))){
var inst_30152 = (state_30192[(16)]);
var inst_30159 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30152);
var state_30192__$1 = state_30192;
var statearr_30223_30263 = state_30192__$1;
(statearr_30223_30263[(2)] = inst_30159);

(statearr_30223_30263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (26))){
var inst_30182 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30224_30264 = state_30192__$1;
(statearr_30224_30264[(2)] = inst_30182);

(statearr_30224_30264[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (16))){
var inst_30162 = (state_30192[(2)]);
var inst_30163 = calc_state.call(null);
var inst_30136 = inst_30163;
var state_30192__$1 = (function (){var statearr_30225 = state_30192;
(statearr_30225[(7)] = inst_30136);

(statearr_30225[(18)] = inst_30162);

return statearr_30225;
})();
var statearr_30226_30265 = state_30192__$1;
(statearr_30226_30265[(2)] = null);

(statearr_30226_30265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (10))){
var inst_30151 = (state_30192[(8)]);
var inst_30152 = (state_30192[(16)]);
var inst_30150 = (state_30192[(2)]);
var inst_30151__$1 = cljs.core.nth.call(null,inst_30150,(0),null);
var inst_30152__$1 = cljs.core.nth.call(null,inst_30150,(1),null);
var inst_30153 = (inst_30151__$1 == null);
var inst_30154 = cljs.core._EQ_.call(null,inst_30152__$1,change);
var inst_30155 = (inst_30153) || (inst_30154);
var state_30192__$1 = (function (){var statearr_30227 = state_30192;
(statearr_30227[(8)] = inst_30151__$1);

(statearr_30227[(16)] = inst_30152__$1);

return statearr_30227;
})();
if(cljs.core.truth_(inst_30155)){
var statearr_30228_30266 = state_30192__$1;
(statearr_30228_30266[(1)] = (11));

} else {
var statearr_30229_30267 = state_30192__$1;
(statearr_30229_30267[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (18))){
var inst_30146 = (state_30192[(17)]);
var inst_30147 = (state_30192[(15)]);
var inst_30152 = (state_30192[(16)]);
var inst_30169 = cljs.core.empty_QMARK_.call(null,inst_30147);
var inst_30170 = inst_30146.call(null,inst_30152);
var inst_30171 = cljs.core.not.call(null,inst_30170);
var inst_30172 = (inst_30169) && (inst_30171);
var state_30192__$1 = state_30192;
var statearr_30230_30268 = state_30192__$1;
(statearr_30230_30268[(2)] = inst_30172);

(statearr_30230_30268[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (8))){
var inst_30136 = (state_30192[(7)]);
var state_30192__$1 = state_30192;
var statearr_30231_30269 = state_30192__$1;
(statearr_30231_30269[(2)] = inst_30136);

(statearr_30231_30269[(1)] = (9));


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
});})(c__6473__auto___30239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6452__auto__,c__6473__auto___30239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6453__auto__ = null;
var cljs$core$async$mix_$_state_machine__6453__auto____0 = (function (){
var statearr_30235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30235[(0)] = cljs$core$async$mix_$_state_machine__6453__auto__);

(statearr_30235[(1)] = (1));

return statearr_30235;
});
var cljs$core$async$mix_$_state_machine__6453__auto____1 = (function (state_30192){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_30192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e30236){if((e30236 instanceof Object)){
var ex__6456__auto__ = e30236;
var statearr_30237_30270 = state_30192;
(statearr_30237_30270[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30271 = state_30192;
state_30192 = G__30271;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6453__auto__ = function(state_30192){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6453__auto____1.call(this,state_30192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6453__auto____0;
cljs$core$async$mix_$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6453__auto____1;
return cljs$core$async$mix_$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___30239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6475__auto__ = (function (){var statearr_30238 = f__6474__auto__.call(null);
(statearr_30238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___30239);

return statearr_30238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___30239,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30273 = {};
return obj30273;
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
var G__30275 = arguments.length;
switch (G__30275) {
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
var G__30279 = arguments.length;
switch (G__30279) {
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
return (function (p1__30277_SHARP_){
if(cljs.core.truth_(p1__30277_SHARP_.call(null,topic))){
return p1__30277_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30277_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30280 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30280 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta30281){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta30281 = meta30281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30280.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30280.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30282){
var self__ = this;
var _30282__$1 = this;
return self__.meta30281;
});})(mults,ensure_mult))
;

cljs.core.async.t30280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30282,meta30281__$1){
var self__ = this;
var _30282__$1 = this;
return (new cljs.core.async.t30280(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta30281__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30280.cljs$lang$type = true;

cljs.core.async.t30280.cljs$lang$ctorStr = "cljs.core.async/t30280";

cljs.core.async.t30280.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30280");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30280 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30280(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30281){
return (new cljs.core.async.t30280(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30281));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30280(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6473__auto___30403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___30403,mults,ensure_mult,p){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___30403,mults,ensure_mult,p){
return (function (state_30354){
var state_val_30355 = (state_30354[(1)]);
if((state_val_30355 === (7))){
var inst_30350 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
var statearr_30356_30404 = state_30354__$1;
(statearr_30356_30404[(2)] = inst_30350);

(statearr_30356_30404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (20))){
var state_30354__$1 = state_30354;
var statearr_30357_30405 = state_30354__$1;
(statearr_30357_30405[(2)] = null);

(statearr_30357_30405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (1))){
var state_30354__$1 = state_30354;
var statearr_30358_30406 = state_30354__$1;
(statearr_30358_30406[(2)] = null);

(statearr_30358_30406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (24))){
var inst_30333 = (state_30354[(7)]);
var inst_30342 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30333);
var state_30354__$1 = state_30354;
var statearr_30359_30407 = state_30354__$1;
(statearr_30359_30407[(2)] = inst_30342);

(statearr_30359_30407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (4))){
var inst_30285 = (state_30354[(8)]);
var inst_30285__$1 = (state_30354[(2)]);
var inst_30286 = (inst_30285__$1 == null);
var state_30354__$1 = (function (){var statearr_30360 = state_30354;
(statearr_30360[(8)] = inst_30285__$1);

return statearr_30360;
})();
if(cljs.core.truth_(inst_30286)){
var statearr_30361_30408 = state_30354__$1;
(statearr_30361_30408[(1)] = (5));

} else {
var statearr_30362_30409 = state_30354__$1;
(statearr_30362_30409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (15))){
var inst_30327 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
var statearr_30363_30410 = state_30354__$1;
(statearr_30363_30410[(2)] = inst_30327);

(statearr_30363_30410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (21))){
var inst_30347 = (state_30354[(2)]);
var state_30354__$1 = (function (){var statearr_30364 = state_30354;
(statearr_30364[(9)] = inst_30347);

return statearr_30364;
})();
var statearr_30365_30411 = state_30354__$1;
(statearr_30365_30411[(2)] = null);

(statearr_30365_30411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (13))){
var inst_30309 = (state_30354[(10)]);
var inst_30311 = cljs.core.chunked_seq_QMARK_.call(null,inst_30309);
var state_30354__$1 = state_30354;
if(inst_30311){
var statearr_30366_30412 = state_30354__$1;
(statearr_30366_30412[(1)] = (16));

} else {
var statearr_30367_30413 = state_30354__$1;
(statearr_30367_30413[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (22))){
var inst_30339 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
if(cljs.core.truth_(inst_30339)){
var statearr_30368_30414 = state_30354__$1;
(statearr_30368_30414[(1)] = (23));

} else {
var statearr_30369_30415 = state_30354__$1;
(statearr_30369_30415[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (6))){
var inst_30335 = (state_30354[(11)]);
var inst_30285 = (state_30354[(8)]);
var inst_30333 = (state_30354[(7)]);
var inst_30333__$1 = topic_fn.call(null,inst_30285);
var inst_30334 = cljs.core.deref.call(null,mults);
var inst_30335__$1 = cljs.core.get.call(null,inst_30334,inst_30333__$1);
var state_30354__$1 = (function (){var statearr_30370 = state_30354;
(statearr_30370[(11)] = inst_30335__$1);

(statearr_30370[(7)] = inst_30333__$1);

return statearr_30370;
})();
if(cljs.core.truth_(inst_30335__$1)){
var statearr_30371_30416 = state_30354__$1;
(statearr_30371_30416[(1)] = (19));

} else {
var statearr_30372_30417 = state_30354__$1;
(statearr_30372_30417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (25))){
var inst_30344 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
var statearr_30373_30418 = state_30354__$1;
(statearr_30373_30418[(2)] = inst_30344);

(statearr_30373_30418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (17))){
var inst_30309 = (state_30354[(10)]);
var inst_30318 = cljs.core.first.call(null,inst_30309);
var inst_30319 = cljs.core.async.muxch_STAR_.call(null,inst_30318);
var inst_30320 = cljs.core.async.close_BANG_.call(null,inst_30319);
var inst_30321 = cljs.core.next.call(null,inst_30309);
var inst_30295 = inst_30321;
var inst_30296 = null;
var inst_30297 = (0);
var inst_30298 = (0);
var state_30354__$1 = (function (){var statearr_30374 = state_30354;
(statearr_30374[(12)] = inst_30297);

(statearr_30374[(13)] = inst_30320);

(statearr_30374[(14)] = inst_30296);

(statearr_30374[(15)] = inst_30295);

(statearr_30374[(16)] = inst_30298);

return statearr_30374;
})();
var statearr_30375_30419 = state_30354__$1;
(statearr_30375_30419[(2)] = null);

(statearr_30375_30419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (3))){
var inst_30352 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30354__$1,inst_30352);
} else {
if((state_val_30355 === (12))){
var inst_30329 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
var statearr_30376_30420 = state_30354__$1;
(statearr_30376_30420[(2)] = inst_30329);

(statearr_30376_30420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (2))){
var state_30354__$1 = state_30354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30354__$1,(4),ch);
} else {
if((state_val_30355 === (23))){
var state_30354__$1 = state_30354;
var statearr_30377_30421 = state_30354__$1;
(statearr_30377_30421[(2)] = null);

(statearr_30377_30421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (19))){
var inst_30335 = (state_30354[(11)]);
var inst_30285 = (state_30354[(8)]);
var inst_30337 = cljs.core.async.muxch_STAR_.call(null,inst_30335);
var state_30354__$1 = state_30354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30354__$1,(22),inst_30337,inst_30285);
} else {
if((state_val_30355 === (11))){
var inst_30309 = (state_30354[(10)]);
var inst_30295 = (state_30354[(15)]);
var inst_30309__$1 = cljs.core.seq.call(null,inst_30295);
var state_30354__$1 = (function (){var statearr_30378 = state_30354;
(statearr_30378[(10)] = inst_30309__$1);

return statearr_30378;
})();
if(inst_30309__$1){
var statearr_30379_30422 = state_30354__$1;
(statearr_30379_30422[(1)] = (13));

} else {
var statearr_30380_30423 = state_30354__$1;
(statearr_30380_30423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (9))){
var inst_30331 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
var statearr_30381_30424 = state_30354__$1;
(statearr_30381_30424[(2)] = inst_30331);

(statearr_30381_30424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (5))){
var inst_30292 = cljs.core.deref.call(null,mults);
var inst_30293 = cljs.core.vals.call(null,inst_30292);
var inst_30294 = cljs.core.seq.call(null,inst_30293);
var inst_30295 = inst_30294;
var inst_30296 = null;
var inst_30297 = (0);
var inst_30298 = (0);
var state_30354__$1 = (function (){var statearr_30382 = state_30354;
(statearr_30382[(12)] = inst_30297);

(statearr_30382[(14)] = inst_30296);

(statearr_30382[(15)] = inst_30295);

(statearr_30382[(16)] = inst_30298);

return statearr_30382;
})();
var statearr_30383_30425 = state_30354__$1;
(statearr_30383_30425[(2)] = null);

(statearr_30383_30425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (14))){
var state_30354__$1 = state_30354;
var statearr_30387_30426 = state_30354__$1;
(statearr_30387_30426[(2)] = null);

(statearr_30387_30426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (16))){
var inst_30309 = (state_30354[(10)]);
var inst_30313 = cljs.core.chunk_first.call(null,inst_30309);
var inst_30314 = cljs.core.chunk_rest.call(null,inst_30309);
var inst_30315 = cljs.core.count.call(null,inst_30313);
var inst_30295 = inst_30314;
var inst_30296 = inst_30313;
var inst_30297 = inst_30315;
var inst_30298 = (0);
var state_30354__$1 = (function (){var statearr_30388 = state_30354;
(statearr_30388[(12)] = inst_30297);

(statearr_30388[(14)] = inst_30296);

(statearr_30388[(15)] = inst_30295);

(statearr_30388[(16)] = inst_30298);

return statearr_30388;
})();
var statearr_30389_30427 = state_30354__$1;
(statearr_30389_30427[(2)] = null);

(statearr_30389_30427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (10))){
var inst_30297 = (state_30354[(12)]);
var inst_30296 = (state_30354[(14)]);
var inst_30295 = (state_30354[(15)]);
var inst_30298 = (state_30354[(16)]);
var inst_30303 = cljs.core._nth.call(null,inst_30296,inst_30298);
var inst_30304 = cljs.core.async.muxch_STAR_.call(null,inst_30303);
var inst_30305 = cljs.core.async.close_BANG_.call(null,inst_30304);
var inst_30306 = (inst_30298 + (1));
var tmp30384 = inst_30297;
var tmp30385 = inst_30296;
var tmp30386 = inst_30295;
var inst_30295__$1 = tmp30386;
var inst_30296__$1 = tmp30385;
var inst_30297__$1 = tmp30384;
var inst_30298__$1 = inst_30306;
var state_30354__$1 = (function (){var statearr_30390 = state_30354;
(statearr_30390[(12)] = inst_30297__$1);

(statearr_30390[(17)] = inst_30305);

(statearr_30390[(14)] = inst_30296__$1);

(statearr_30390[(15)] = inst_30295__$1);

(statearr_30390[(16)] = inst_30298__$1);

return statearr_30390;
})();
var statearr_30391_30428 = state_30354__$1;
(statearr_30391_30428[(2)] = null);

(statearr_30391_30428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (18))){
var inst_30324 = (state_30354[(2)]);
var state_30354__$1 = state_30354;
var statearr_30392_30429 = state_30354__$1;
(statearr_30392_30429[(2)] = inst_30324);

(statearr_30392_30429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30355 === (8))){
var inst_30297 = (state_30354[(12)]);
var inst_30298 = (state_30354[(16)]);
var inst_30300 = (inst_30298 < inst_30297);
var inst_30301 = inst_30300;
var state_30354__$1 = state_30354;
if(cljs.core.truth_(inst_30301)){
var statearr_30393_30430 = state_30354__$1;
(statearr_30393_30430[(1)] = (10));

} else {
var statearr_30394_30431 = state_30354__$1;
(statearr_30394_30431[(1)] = (11));

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
});})(c__6473__auto___30403,mults,ensure_mult,p))
;
return ((function (switch__6452__auto__,c__6473__auto___30403,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_30398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30398[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_30398[(1)] = (1));

return statearr_30398;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_30354){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_30354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e30399){if((e30399 instanceof Object)){
var ex__6456__auto__ = e30399;
var statearr_30400_30432 = state_30354;
(statearr_30400_30432[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30433 = state_30354;
state_30354 = G__30433;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_30354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_30354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___30403,mults,ensure_mult,p))
})();
var state__6475__auto__ = (function (){var statearr_30401 = f__6474__auto__.call(null);
(statearr_30401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___30403);

return statearr_30401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___30403,mults,ensure_mult,p))
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
var G__30435 = arguments.length;
switch (G__30435) {
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
var G__30438 = arguments.length;
switch (G__30438) {
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
var G__30441 = arguments.length;
switch (G__30441) {
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
var c__6473__auto___30511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___30511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___30511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30480){
var state_val_30481 = (state_30480[(1)]);
if((state_val_30481 === (7))){
var state_30480__$1 = state_30480;
var statearr_30482_30512 = state_30480__$1;
(statearr_30482_30512[(2)] = null);

(statearr_30482_30512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (1))){
var state_30480__$1 = state_30480;
var statearr_30483_30513 = state_30480__$1;
(statearr_30483_30513[(2)] = null);

(statearr_30483_30513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (4))){
var inst_30444 = (state_30480[(7)]);
var inst_30446 = (inst_30444 < cnt);
var state_30480__$1 = state_30480;
if(cljs.core.truth_(inst_30446)){
var statearr_30484_30514 = state_30480__$1;
(statearr_30484_30514[(1)] = (6));

} else {
var statearr_30485_30515 = state_30480__$1;
(statearr_30485_30515[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (15))){
var inst_30476 = (state_30480[(2)]);
var state_30480__$1 = state_30480;
var statearr_30486_30516 = state_30480__$1;
(statearr_30486_30516[(2)] = inst_30476);

(statearr_30486_30516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (13))){
var inst_30469 = cljs.core.async.close_BANG_.call(null,out);
var state_30480__$1 = state_30480;
var statearr_30487_30517 = state_30480__$1;
(statearr_30487_30517[(2)] = inst_30469);

(statearr_30487_30517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (6))){
var state_30480__$1 = state_30480;
var statearr_30488_30518 = state_30480__$1;
(statearr_30488_30518[(2)] = null);

(statearr_30488_30518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (3))){
var inst_30478 = (state_30480[(2)]);
var state_30480__$1 = state_30480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30480__$1,inst_30478);
} else {
if((state_val_30481 === (12))){
var inst_30466 = (state_30480[(8)]);
var inst_30466__$1 = (state_30480[(2)]);
var inst_30467 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30466__$1);
var state_30480__$1 = (function (){var statearr_30489 = state_30480;
(statearr_30489[(8)] = inst_30466__$1);

return statearr_30489;
})();
if(cljs.core.truth_(inst_30467)){
var statearr_30490_30519 = state_30480__$1;
(statearr_30490_30519[(1)] = (13));

} else {
var statearr_30491_30520 = state_30480__$1;
(statearr_30491_30520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (2))){
var inst_30443 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30444 = (0);
var state_30480__$1 = (function (){var statearr_30492 = state_30480;
(statearr_30492[(7)] = inst_30444);

(statearr_30492[(9)] = inst_30443);

return statearr_30492;
})();
var statearr_30493_30521 = state_30480__$1;
(statearr_30493_30521[(2)] = null);

(statearr_30493_30521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (11))){
var inst_30444 = (state_30480[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30480,(10),Object,null,(9));
var inst_30453 = chs__$1.call(null,inst_30444);
var inst_30454 = done.call(null,inst_30444);
var inst_30455 = cljs.core.async.take_BANG_.call(null,inst_30453,inst_30454);
var state_30480__$1 = state_30480;
var statearr_30494_30522 = state_30480__$1;
(statearr_30494_30522[(2)] = inst_30455);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30480__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (9))){
var inst_30444 = (state_30480[(7)]);
var inst_30457 = (state_30480[(2)]);
var inst_30458 = (inst_30444 + (1));
var inst_30444__$1 = inst_30458;
var state_30480__$1 = (function (){var statearr_30495 = state_30480;
(statearr_30495[(7)] = inst_30444__$1);

(statearr_30495[(10)] = inst_30457);

return statearr_30495;
})();
var statearr_30496_30523 = state_30480__$1;
(statearr_30496_30523[(2)] = null);

(statearr_30496_30523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (5))){
var inst_30464 = (state_30480[(2)]);
var state_30480__$1 = (function (){var statearr_30497 = state_30480;
(statearr_30497[(11)] = inst_30464);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30480__$1,(12),dchan);
} else {
if((state_val_30481 === (14))){
var inst_30466 = (state_30480[(8)]);
var inst_30471 = cljs.core.apply.call(null,f,inst_30466);
var state_30480__$1 = state_30480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30480__$1,(16),out,inst_30471);
} else {
if((state_val_30481 === (16))){
var inst_30473 = (state_30480[(2)]);
var state_30480__$1 = (function (){var statearr_30498 = state_30480;
(statearr_30498[(12)] = inst_30473);

return statearr_30498;
})();
var statearr_30499_30524 = state_30480__$1;
(statearr_30499_30524[(2)] = null);

(statearr_30499_30524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (10))){
var inst_30448 = (state_30480[(2)]);
var inst_30449 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30480__$1 = (function (){var statearr_30500 = state_30480;
(statearr_30500[(13)] = inst_30448);

return statearr_30500;
})();
var statearr_30501_30525 = state_30480__$1;
(statearr_30501_30525[(2)] = inst_30449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30480__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30481 === (8))){
var inst_30462 = (state_30480[(2)]);
var state_30480__$1 = state_30480;
var statearr_30502_30526 = state_30480__$1;
(statearr_30502_30526[(2)] = inst_30462);

(statearr_30502_30526[(1)] = (5));


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
});})(c__6473__auto___30511,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6452__auto__,c__6473__auto___30511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_30506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30506[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_30506[(1)] = (1));

return statearr_30506;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_30480){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_30480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e30507){if((e30507 instanceof Object)){
var ex__6456__auto__ = e30507;
var statearr_30508_30527 = state_30480;
(statearr_30508_30527[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30528 = state_30480;
state_30480 = G__30528;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_30480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_30480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___30511,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6475__auto__ = (function (){var statearr_30509 = f__6474__auto__.call(null);
(statearr_30509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___30511);

return statearr_30509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___30511,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30531 = arguments.length;
switch (G__30531) {
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
var c__6473__auto___30586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___30586,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___30586,out){
return (function (state_30561){
var state_val_30562 = (state_30561[(1)]);
if((state_val_30562 === (7))){
var inst_30540 = (state_30561[(7)]);
var inst_30541 = (state_30561[(8)]);
var inst_30540__$1 = (state_30561[(2)]);
var inst_30541__$1 = cljs.core.nth.call(null,inst_30540__$1,(0),null);
var inst_30542 = cljs.core.nth.call(null,inst_30540__$1,(1),null);
var inst_30543 = (inst_30541__$1 == null);
var state_30561__$1 = (function (){var statearr_30563 = state_30561;
(statearr_30563[(9)] = inst_30542);

(statearr_30563[(7)] = inst_30540__$1);

(statearr_30563[(8)] = inst_30541__$1);

return statearr_30563;
})();
if(cljs.core.truth_(inst_30543)){
var statearr_30564_30587 = state_30561__$1;
(statearr_30564_30587[(1)] = (8));

} else {
var statearr_30565_30588 = state_30561__$1;
(statearr_30565_30588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (1))){
var inst_30532 = cljs.core.vec.call(null,chs);
var inst_30533 = inst_30532;
var state_30561__$1 = (function (){var statearr_30566 = state_30561;
(statearr_30566[(10)] = inst_30533);

return statearr_30566;
})();
var statearr_30567_30589 = state_30561__$1;
(statearr_30567_30589[(2)] = null);

(statearr_30567_30589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (4))){
var inst_30533 = (state_30561[(10)]);
var state_30561__$1 = state_30561;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30561__$1,(7),inst_30533);
} else {
if((state_val_30562 === (6))){
var inst_30557 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30568_30590 = state_30561__$1;
(statearr_30568_30590[(2)] = inst_30557);

(statearr_30568_30590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (3))){
var inst_30559 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30561__$1,inst_30559);
} else {
if((state_val_30562 === (2))){
var inst_30533 = (state_30561[(10)]);
var inst_30535 = cljs.core.count.call(null,inst_30533);
var inst_30536 = (inst_30535 > (0));
var state_30561__$1 = state_30561;
if(cljs.core.truth_(inst_30536)){
var statearr_30570_30591 = state_30561__$1;
(statearr_30570_30591[(1)] = (4));

} else {
var statearr_30571_30592 = state_30561__$1;
(statearr_30571_30592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (11))){
var inst_30533 = (state_30561[(10)]);
var inst_30550 = (state_30561[(2)]);
var tmp30569 = inst_30533;
var inst_30533__$1 = tmp30569;
var state_30561__$1 = (function (){var statearr_30572 = state_30561;
(statearr_30572[(11)] = inst_30550);

(statearr_30572[(10)] = inst_30533__$1);

return statearr_30572;
})();
var statearr_30573_30593 = state_30561__$1;
(statearr_30573_30593[(2)] = null);

(statearr_30573_30593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (9))){
var inst_30541 = (state_30561[(8)]);
var state_30561__$1 = state_30561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30561__$1,(11),out,inst_30541);
} else {
if((state_val_30562 === (5))){
var inst_30555 = cljs.core.async.close_BANG_.call(null,out);
var state_30561__$1 = state_30561;
var statearr_30574_30594 = state_30561__$1;
(statearr_30574_30594[(2)] = inst_30555);

(statearr_30574_30594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (10))){
var inst_30553 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30575_30595 = state_30561__$1;
(statearr_30575_30595[(2)] = inst_30553);

(statearr_30575_30595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30562 === (8))){
var inst_30542 = (state_30561[(9)]);
var inst_30540 = (state_30561[(7)]);
var inst_30533 = (state_30561[(10)]);
var inst_30541 = (state_30561[(8)]);
var inst_30545 = (function (){var c = inst_30542;
var v = inst_30541;
var vec__30538 = inst_30540;
var cs = inst_30533;
return ((function (c,v,vec__30538,cs,inst_30542,inst_30540,inst_30533,inst_30541,state_val_30562,c__6473__auto___30586,out){
return (function (p1__30529_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30529_SHARP_);
});
;})(c,v,vec__30538,cs,inst_30542,inst_30540,inst_30533,inst_30541,state_val_30562,c__6473__auto___30586,out))
})();
var inst_30546 = cljs.core.filterv.call(null,inst_30545,inst_30533);
var inst_30533__$1 = inst_30546;
var state_30561__$1 = (function (){var statearr_30576 = state_30561;
(statearr_30576[(10)] = inst_30533__$1);

return statearr_30576;
})();
var statearr_30577_30596 = state_30561__$1;
(statearr_30577_30596[(2)] = null);

(statearr_30577_30596[(1)] = (2));


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
});})(c__6473__auto___30586,out))
;
return ((function (switch__6452__auto__,c__6473__auto___30586,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_30581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30581[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_30581[(1)] = (1));

return statearr_30581;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_30561){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_30561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e30582){if((e30582 instanceof Object)){
var ex__6456__auto__ = e30582;
var statearr_30583_30597 = state_30561;
(statearr_30583_30597[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30598 = state_30561;
state_30561 = G__30598;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_30561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_30561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___30586,out))
})();
var state__6475__auto__ = (function (){var statearr_30584 = f__6474__auto__.call(null);
(statearr_30584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___30586);

return statearr_30584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___30586,out))
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
var G__30600 = arguments.length;
switch (G__30600) {
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
var c__6473__auto___30648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___30648,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___30648,out){
return (function (state_30624){
var state_val_30625 = (state_30624[(1)]);
if((state_val_30625 === (7))){
var inst_30606 = (state_30624[(7)]);
var inst_30606__$1 = (state_30624[(2)]);
var inst_30607 = (inst_30606__$1 == null);
var inst_30608 = cljs.core.not.call(null,inst_30607);
var state_30624__$1 = (function (){var statearr_30626 = state_30624;
(statearr_30626[(7)] = inst_30606__$1);

return statearr_30626;
})();
if(inst_30608){
var statearr_30627_30649 = state_30624__$1;
(statearr_30627_30649[(1)] = (8));

} else {
var statearr_30628_30650 = state_30624__$1;
(statearr_30628_30650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (1))){
var inst_30601 = (0);
var state_30624__$1 = (function (){var statearr_30629 = state_30624;
(statearr_30629[(8)] = inst_30601);

return statearr_30629;
})();
var statearr_30630_30651 = state_30624__$1;
(statearr_30630_30651[(2)] = null);

(statearr_30630_30651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (4))){
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30624__$1,(7),ch);
} else {
if((state_val_30625 === (6))){
var inst_30619 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30631_30652 = state_30624__$1;
(statearr_30631_30652[(2)] = inst_30619);

(statearr_30631_30652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (3))){
var inst_30621 = (state_30624[(2)]);
var inst_30622 = cljs.core.async.close_BANG_.call(null,out);
var state_30624__$1 = (function (){var statearr_30632 = state_30624;
(statearr_30632[(9)] = inst_30621);

return statearr_30632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30624__$1,inst_30622);
} else {
if((state_val_30625 === (2))){
var inst_30601 = (state_30624[(8)]);
var inst_30603 = (inst_30601 < n);
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30603)){
var statearr_30633_30653 = state_30624__$1;
(statearr_30633_30653[(1)] = (4));

} else {
var statearr_30634_30654 = state_30624__$1;
(statearr_30634_30654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (11))){
var inst_30601 = (state_30624[(8)]);
var inst_30611 = (state_30624[(2)]);
var inst_30612 = (inst_30601 + (1));
var inst_30601__$1 = inst_30612;
var state_30624__$1 = (function (){var statearr_30635 = state_30624;
(statearr_30635[(8)] = inst_30601__$1);

(statearr_30635[(10)] = inst_30611);

return statearr_30635;
})();
var statearr_30636_30655 = state_30624__$1;
(statearr_30636_30655[(2)] = null);

(statearr_30636_30655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (9))){
var state_30624__$1 = state_30624;
var statearr_30637_30656 = state_30624__$1;
(statearr_30637_30656[(2)] = null);

(statearr_30637_30656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (5))){
var state_30624__$1 = state_30624;
var statearr_30638_30657 = state_30624__$1;
(statearr_30638_30657[(2)] = null);

(statearr_30638_30657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (10))){
var inst_30616 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30639_30658 = state_30624__$1;
(statearr_30639_30658[(2)] = inst_30616);

(statearr_30639_30658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (8))){
var inst_30606 = (state_30624[(7)]);
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30624__$1,(11),out,inst_30606);
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
});})(c__6473__auto___30648,out))
;
return ((function (switch__6452__auto__,c__6473__auto___30648,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_30643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30643[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_30643[(1)] = (1));

return statearr_30643;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_30624){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_30624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e30644){if((e30644 instanceof Object)){
var ex__6456__auto__ = e30644;
var statearr_30645_30659 = state_30624;
(statearr_30645_30659[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30660 = state_30624;
state_30624 = G__30660;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_30624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_30624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___30648,out))
})();
var state__6475__auto__ = (function (){var statearr_30646 = f__6474__auto__.call(null);
(statearr_30646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___30648);

return statearr_30646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___30648,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30668 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30668 = (function (ch,f,map_LT_,meta30669){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30669 = meta30669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30668.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30668.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30668.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30668.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30671 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30671 = (function (fn1,_,meta30669,map_LT_,f,ch,meta30672){
this.fn1 = fn1;
this._ = _;
this.meta30669 = meta30669;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30672 = meta30672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30661_SHARP_){
return f1.call(null,(((p1__30661_SHARP_ == null))?null:self__.f.call(null,p1__30661_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30673){
var self__ = this;
var _30673__$1 = this;
return self__.meta30672;
});})(___$1))
;

cljs.core.async.t30671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30673,meta30672__$1){
var self__ = this;
var _30673__$1 = this;
return (new cljs.core.async.t30671(self__.fn1,self__._,self__.meta30669,self__.map_LT_,self__.f,self__.ch,meta30672__$1));
});})(___$1))
;

cljs.core.async.t30671.cljs$lang$type = true;

cljs.core.async.t30671.cljs$lang$ctorStr = "cljs.core.async/t30671";

cljs.core.async.t30671.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30671");
});})(___$1))
;

cljs.core.async.__GT_t30671 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30671(fn1__$1,___$2,meta30669__$1,map_LT___$1,f__$1,ch__$1,meta30672){
return (new cljs.core.async.t30671(fn1__$1,___$2,meta30669__$1,map_LT___$1,f__$1,ch__$1,meta30672));
});})(___$1))
;

}

return (new cljs.core.async.t30671(fn1,___$1,self__.meta30669,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t30668.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30668.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30668.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30670){
var self__ = this;
var _30670__$1 = this;
return self__.meta30669;
});

cljs.core.async.t30668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30670,meta30669__$1){
var self__ = this;
var _30670__$1 = this;
return (new cljs.core.async.t30668(self__.ch,self__.f,self__.map_LT_,meta30669__$1));
});

cljs.core.async.t30668.cljs$lang$type = true;

cljs.core.async.t30668.cljs$lang$ctorStr = "cljs.core.async/t30668";

cljs.core.async.t30668.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30668");
});

cljs.core.async.__GT_t30668 = (function cljs$core$async$map_LT__$___GT_t30668(ch__$1,f__$1,map_LT___$1,meta30669){
return (new cljs.core.async.t30668(ch__$1,f__$1,map_LT___$1,meta30669));
});

}

return (new cljs.core.async.t30668(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30677 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30677 = (function (ch,f,map_GT_,meta30678){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30678 = meta30678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30677.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30677.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30677.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30679){
var self__ = this;
var _30679__$1 = this;
return self__.meta30678;
});

cljs.core.async.t30677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30679,meta30678__$1){
var self__ = this;
var _30679__$1 = this;
return (new cljs.core.async.t30677(self__.ch,self__.f,self__.map_GT_,meta30678__$1));
});

cljs.core.async.t30677.cljs$lang$type = true;

cljs.core.async.t30677.cljs$lang$ctorStr = "cljs.core.async/t30677";

cljs.core.async.t30677.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30677");
});

cljs.core.async.__GT_t30677 = (function cljs$core$async$map_GT__$___GT_t30677(ch__$1,f__$1,map_GT___$1,meta30678){
return (new cljs.core.async.t30677(ch__$1,f__$1,map_GT___$1,meta30678));
});

}

return (new cljs.core.async.t30677(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30683 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30683 = (function (ch,p,filter_GT_,meta30684){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30684 = meta30684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30683.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30683.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30683.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30685){
var self__ = this;
var _30685__$1 = this;
return self__.meta30684;
});

cljs.core.async.t30683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30685,meta30684__$1){
var self__ = this;
var _30685__$1 = this;
return (new cljs.core.async.t30683(self__.ch,self__.p,self__.filter_GT_,meta30684__$1));
});

cljs.core.async.t30683.cljs$lang$type = true;

cljs.core.async.t30683.cljs$lang$ctorStr = "cljs.core.async/t30683";

cljs.core.async.t30683.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t30683");
});

cljs.core.async.__GT_t30683 = (function cljs$core$async$filter_GT__$___GT_t30683(ch__$1,p__$1,filter_GT___$1,meta30684){
return (new cljs.core.async.t30683(ch__$1,p__$1,filter_GT___$1,meta30684));
});

}

return (new cljs.core.async.t30683(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30687 = arguments.length;
switch (G__30687) {
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
var c__6473__auto___30730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___30730,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___30730,out){
return (function (state_30708){
var state_val_30709 = (state_30708[(1)]);
if((state_val_30709 === (7))){
var inst_30704 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
var statearr_30710_30731 = state_30708__$1;
(statearr_30710_30731[(2)] = inst_30704);

(statearr_30710_30731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (1))){
var state_30708__$1 = state_30708;
var statearr_30711_30732 = state_30708__$1;
(statearr_30711_30732[(2)] = null);

(statearr_30711_30732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (4))){
var inst_30690 = (state_30708[(7)]);
var inst_30690__$1 = (state_30708[(2)]);
var inst_30691 = (inst_30690__$1 == null);
var state_30708__$1 = (function (){var statearr_30712 = state_30708;
(statearr_30712[(7)] = inst_30690__$1);

return statearr_30712;
})();
if(cljs.core.truth_(inst_30691)){
var statearr_30713_30733 = state_30708__$1;
(statearr_30713_30733[(1)] = (5));

} else {
var statearr_30714_30734 = state_30708__$1;
(statearr_30714_30734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (6))){
var inst_30690 = (state_30708[(7)]);
var inst_30695 = p.call(null,inst_30690);
var state_30708__$1 = state_30708;
if(cljs.core.truth_(inst_30695)){
var statearr_30715_30735 = state_30708__$1;
(statearr_30715_30735[(1)] = (8));

} else {
var statearr_30716_30736 = state_30708__$1;
(statearr_30716_30736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (3))){
var inst_30706 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30708__$1,inst_30706);
} else {
if((state_val_30709 === (2))){
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30708__$1,(4),ch);
} else {
if((state_val_30709 === (11))){
var inst_30698 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
var statearr_30717_30737 = state_30708__$1;
(statearr_30717_30737[(2)] = inst_30698);

(statearr_30717_30737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (9))){
var state_30708__$1 = state_30708;
var statearr_30718_30738 = state_30708__$1;
(statearr_30718_30738[(2)] = null);

(statearr_30718_30738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (5))){
var inst_30693 = cljs.core.async.close_BANG_.call(null,out);
var state_30708__$1 = state_30708;
var statearr_30719_30739 = state_30708__$1;
(statearr_30719_30739[(2)] = inst_30693);

(statearr_30719_30739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (10))){
var inst_30701 = (state_30708[(2)]);
var state_30708__$1 = (function (){var statearr_30720 = state_30708;
(statearr_30720[(8)] = inst_30701);

return statearr_30720;
})();
var statearr_30721_30740 = state_30708__$1;
(statearr_30721_30740[(2)] = null);

(statearr_30721_30740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (8))){
var inst_30690 = (state_30708[(7)]);
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30708__$1,(11),out,inst_30690);
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
});})(c__6473__auto___30730,out))
;
return ((function (switch__6452__auto__,c__6473__auto___30730,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_30725 = [null,null,null,null,null,null,null,null,null];
(statearr_30725[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_30725[(1)] = (1));

return statearr_30725;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_30708){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_30708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e30726){if((e30726 instanceof Object)){
var ex__6456__auto__ = e30726;
var statearr_30727_30741 = state_30708;
(statearr_30727_30741[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30742 = state_30708;
state_30708 = G__30742;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_30708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_30708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___30730,out))
})();
var state__6475__auto__ = (function (){var statearr_30728 = f__6474__auto__.call(null);
(statearr_30728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___30730);

return statearr_30728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___30730,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30744 = arguments.length;
switch (G__30744) {
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
return (function (state_30911){
var state_val_30912 = (state_30911[(1)]);
if((state_val_30912 === (7))){
var inst_30907 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30913_30954 = state_30911__$1;
(statearr_30913_30954[(2)] = inst_30907);

(statearr_30913_30954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (20))){
var inst_30877 = (state_30911[(7)]);
var inst_30888 = (state_30911[(2)]);
var inst_30889 = cljs.core.next.call(null,inst_30877);
var inst_30863 = inst_30889;
var inst_30864 = null;
var inst_30865 = (0);
var inst_30866 = (0);
var state_30911__$1 = (function (){var statearr_30914 = state_30911;
(statearr_30914[(8)] = inst_30864);

(statearr_30914[(9)] = inst_30888);

(statearr_30914[(10)] = inst_30866);

(statearr_30914[(11)] = inst_30865);

(statearr_30914[(12)] = inst_30863);

return statearr_30914;
})();
var statearr_30915_30955 = state_30911__$1;
(statearr_30915_30955[(2)] = null);

(statearr_30915_30955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (1))){
var state_30911__$1 = state_30911;
var statearr_30916_30956 = state_30911__$1;
(statearr_30916_30956[(2)] = null);

(statearr_30916_30956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (4))){
var inst_30852 = (state_30911[(13)]);
var inst_30852__$1 = (state_30911[(2)]);
var inst_30853 = (inst_30852__$1 == null);
var state_30911__$1 = (function (){var statearr_30917 = state_30911;
(statearr_30917[(13)] = inst_30852__$1);

return statearr_30917;
})();
if(cljs.core.truth_(inst_30853)){
var statearr_30918_30957 = state_30911__$1;
(statearr_30918_30957[(1)] = (5));

} else {
var statearr_30919_30958 = state_30911__$1;
(statearr_30919_30958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (15))){
var state_30911__$1 = state_30911;
var statearr_30923_30959 = state_30911__$1;
(statearr_30923_30959[(2)] = null);

(statearr_30923_30959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (21))){
var state_30911__$1 = state_30911;
var statearr_30924_30960 = state_30911__$1;
(statearr_30924_30960[(2)] = null);

(statearr_30924_30960[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (13))){
var inst_30864 = (state_30911[(8)]);
var inst_30866 = (state_30911[(10)]);
var inst_30865 = (state_30911[(11)]);
var inst_30863 = (state_30911[(12)]);
var inst_30873 = (state_30911[(2)]);
var inst_30874 = (inst_30866 + (1));
var tmp30920 = inst_30864;
var tmp30921 = inst_30865;
var tmp30922 = inst_30863;
var inst_30863__$1 = tmp30922;
var inst_30864__$1 = tmp30920;
var inst_30865__$1 = tmp30921;
var inst_30866__$1 = inst_30874;
var state_30911__$1 = (function (){var statearr_30925 = state_30911;
(statearr_30925[(8)] = inst_30864__$1);

(statearr_30925[(14)] = inst_30873);

(statearr_30925[(10)] = inst_30866__$1);

(statearr_30925[(11)] = inst_30865__$1);

(statearr_30925[(12)] = inst_30863__$1);

return statearr_30925;
})();
var statearr_30926_30961 = state_30911__$1;
(statearr_30926_30961[(2)] = null);

(statearr_30926_30961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (22))){
var state_30911__$1 = state_30911;
var statearr_30927_30962 = state_30911__$1;
(statearr_30927_30962[(2)] = null);

(statearr_30927_30962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (6))){
var inst_30852 = (state_30911[(13)]);
var inst_30861 = f.call(null,inst_30852);
var inst_30862 = cljs.core.seq.call(null,inst_30861);
var inst_30863 = inst_30862;
var inst_30864 = null;
var inst_30865 = (0);
var inst_30866 = (0);
var state_30911__$1 = (function (){var statearr_30928 = state_30911;
(statearr_30928[(8)] = inst_30864);

(statearr_30928[(10)] = inst_30866);

(statearr_30928[(11)] = inst_30865);

(statearr_30928[(12)] = inst_30863);

return statearr_30928;
})();
var statearr_30929_30963 = state_30911__$1;
(statearr_30929_30963[(2)] = null);

(statearr_30929_30963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (17))){
var inst_30877 = (state_30911[(7)]);
var inst_30881 = cljs.core.chunk_first.call(null,inst_30877);
var inst_30882 = cljs.core.chunk_rest.call(null,inst_30877);
var inst_30883 = cljs.core.count.call(null,inst_30881);
var inst_30863 = inst_30882;
var inst_30864 = inst_30881;
var inst_30865 = inst_30883;
var inst_30866 = (0);
var state_30911__$1 = (function (){var statearr_30930 = state_30911;
(statearr_30930[(8)] = inst_30864);

(statearr_30930[(10)] = inst_30866);

(statearr_30930[(11)] = inst_30865);

(statearr_30930[(12)] = inst_30863);

return statearr_30930;
})();
var statearr_30931_30964 = state_30911__$1;
(statearr_30931_30964[(2)] = null);

(statearr_30931_30964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (3))){
var inst_30909 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30911__$1,inst_30909);
} else {
if((state_val_30912 === (12))){
var inst_30897 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30932_30965 = state_30911__$1;
(statearr_30932_30965[(2)] = inst_30897);

(statearr_30932_30965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (2))){
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(4),in$);
} else {
if((state_val_30912 === (23))){
var inst_30905 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30933_30966 = state_30911__$1;
(statearr_30933_30966[(2)] = inst_30905);

(statearr_30933_30966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (19))){
var inst_30892 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30934_30967 = state_30911__$1;
(statearr_30934_30967[(2)] = inst_30892);

(statearr_30934_30967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (11))){
var inst_30863 = (state_30911[(12)]);
var inst_30877 = (state_30911[(7)]);
var inst_30877__$1 = cljs.core.seq.call(null,inst_30863);
var state_30911__$1 = (function (){var statearr_30935 = state_30911;
(statearr_30935[(7)] = inst_30877__$1);

return statearr_30935;
})();
if(inst_30877__$1){
var statearr_30936_30968 = state_30911__$1;
(statearr_30936_30968[(1)] = (14));

} else {
var statearr_30937_30969 = state_30911__$1;
(statearr_30937_30969[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (9))){
var inst_30899 = (state_30911[(2)]);
var inst_30900 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30911__$1 = (function (){var statearr_30938 = state_30911;
(statearr_30938[(15)] = inst_30899);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30900)){
var statearr_30939_30970 = state_30911__$1;
(statearr_30939_30970[(1)] = (21));

} else {
var statearr_30940_30971 = state_30911__$1;
(statearr_30940_30971[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (5))){
var inst_30855 = cljs.core.async.close_BANG_.call(null,out);
var state_30911__$1 = state_30911;
var statearr_30941_30972 = state_30911__$1;
(statearr_30941_30972[(2)] = inst_30855);

(statearr_30941_30972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (14))){
var inst_30877 = (state_30911[(7)]);
var inst_30879 = cljs.core.chunked_seq_QMARK_.call(null,inst_30877);
var state_30911__$1 = state_30911;
if(inst_30879){
var statearr_30942_30973 = state_30911__$1;
(statearr_30942_30973[(1)] = (17));

} else {
var statearr_30943_30974 = state_30911__$1;
(statearr_30943_30974[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (16))){
var inst_30895 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30944_30975 = state_30911__$1;
(statearr_30944_30975[(2)] = inst_30895);

(statearr_30944_30975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (10))){
var inst_30864 = (state_30911[(8)]);
var inst_30866 = (state_30911[(10)]);
var inst_30871 = cljs.core._nth.call(null,inst_30864,inst_30866);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30911__$1,(13),out,inst_30871);
} else {
if((state_val_30912 === (18))){
var inst_30877 = (state_30911[(7)]);
var inst_30886 = cljs.core.first.call(null,inst_30877);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30911__$1,(20),out,inst_30886);
} else {
if((state_val_30912 === (8))){
var inst_30866 = (state_30911[(10)]);
var inst_30865 = (state_30911[(11)]);
var inst_30868 = (inst_30866 < inst_30865);
var inst_30869 = inst_30868;
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30869)){
var statearr_30945_30976 = state_30911__$1;
(statearr_30945_30976[(1)] = (10));

} else {
var statearr_30946_30977 = state_30911__$1;
(statearr_30946_30977[(1)] = (11));

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
var statearr_30950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30950[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__);

(statearr_30950[(1)] = (1));

return statearr_30950;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____1 = (function (state_30911){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_30911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e30951){if((e30951 instanceof Object)){
var ex__6456__auto__ = e30951;
var statearr_30952_30978 = state_30911;
(statearr_30952_30978[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30979 = state_30911;
state_30911 = G__30979;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__ = function(state_30911){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____1.call(this,state_30911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6453__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto__))
})();
var state__6475__auto__ = (function (){var statearr_30953 = f__6474__auto__.call(null);
(statearr_30953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto__);

return statearr_30953;
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
var G__30981 = arguments.length;
switch (G__30981) {
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
var G__30984 = arguments.length;
switch (G__30984) {
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
var G__30987 = arguments.length;
switch (G__30987) {
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
var c__6473__auto___31037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___31037,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___31037,out){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (7))){
var inst_31006 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31013_31038 = state_31011__$1;
(statearr_31013_31038[(2)] = inst_31006);

(statearr_31013_31038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (1))){
var inst_30988 = null;
var state_31011__$1 = (function (){var statearr_31014 = state_31011;
(statearr_31014[(7)] = inst_30988);

return statearr_31014;
})();
var statearr_31015_31039 = state_31011__$1;
(statearr_31015_31039[(2)] = null);

(statearr_31015_31039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (4))){
var inst_30991 = (state_31011[(8)]);
var inst_30991__$1 = (state_31011[(2)]);
var inst_30992 = (inst_30991__$1 == null);
var inst_30993 = cljs.core.not.call(null,inst_30992);
var state_31011__$1 = (function (){var statearr_31016 = state_31011;
(statearr_31016[(8)] = inst_30991__$1);

return statearr_31016;
})();
if(inst_30993){
var statearr_31017_31040 = state_31011__$1;
(statearr_31017_31040[(1)] = (5));

} else {
var statearr_31018_31041 = state_31011__$1;
(statearr_31018_31041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (6))){
var state_31011__$1 = state_31011;
var statearr_31019_31042 = state_31011__$1;
(statearr_31019_31042[(2)] = null);

(statearr_31019_31042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (3))){
var inst_31008 = (state_31011[(2)]);
var inst_31009 = cljs.core.async.close_BANG_.call(null,out);
var state_31011__$1 = (function (){var statearr_31020 = state_31011;
(statearr_31020[(9)] = inst_31008);

return statearr_31020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (2))){
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(4),ch);
} else {
if((state_val_31012 === (11))){
var inst_30991 = (state_31011[(8)]);
var inst_31000 = (state_31011[(2)]);
var inst_30988 = inst_30991;
var state_31011__$1 = (function (){var statearr_31021 = state_31011;
(statearr_31021[(10)] = inst_31000);

(statearr_31021[(7)] = inst_30988);

return statearr_31021;
})();
var statearr_31022_31043 = state_31011__$1;
(statearr_31022_31043[(2)] = null);

(statearr_31022_31043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (9))){
var inst_30991 = (state_31011[(8)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31011__$1,(11),out,inst_30991);
} else {
if((state_val_31012 === (5))){
var inst_30991 = (state_31011[(8)]);
var inst_30988 = (state_31011[(7)]);
var inst_30995 = cljs.core._EQ_.call(null,inst_30991,inst_30988);
var state_31011__$1 = state_31011;
if(inst_30995){
var statearr_31024_31044 = state_31011__$1;
(statearr_31024_31044[(1)] = (8));

} else {
var statearr_31025_31045 = state_31011__$1;
(statearr_31025_31045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (10))){
var inst_31003 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31026_31046 = state_31011__$1;
(statearr_31026_31046[(2)] = inst_31003);

(statearr_31026_31046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (8))){
var inst_30988 = (state_31011[(7)]);
var tmp31023 = inst_30988;
var inst_30988__$1 = tmp31023;
var state_31011__$1 = (function (){var statearr_31027 = state_31011;
(statearr_31027[(7)] = inst_30988__$1);

return statearr_31027;
})();
var statearr_31028_31047 = state_31011__$1;
(statearr_31028_31047[(2)] = null);

(statearr_31028_31047[(1)] = (2));


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
});})(c__6473__auto___31037,out))
;
return ((function (switch__6452__auto__,c__6473__auto___31037,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_31032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31032[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_31032[(1)] = (1));

return statearr_31032;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_31011){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_31011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e31033){if((e31033 instanceof Object)){
var ex__6456__auto__ = e31033;
var statearr_31034_31048 = state_31011;
(statearr_31034_31048[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31049 = state_31011;
state_31011 = G__31049;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___31037,out))
})();
var state__6475__auto__ = (function (){var statearr_31035 = f__6474__auto__.call(null);
(statearr_31035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___31037);

return statearr_31035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___31037,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__31051 = arguments.length;
switch (G__31051) {
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
var c__6473__auto___31120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___31120,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___31120,out){
return (function (state_31089){
var state_val_31090 = (state_31089[(1)]);
if((state_val_31090 === (7))){
var inst_31085 = (state_31089[(2)]);
var state_31089__$1 = state_31089;
var statearr_31091_31121 = state_31089__$1;
(statearr_31091_31121[(2)] = inst_31085);

(statearr_31091_31121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (1))){
var inst_31052 = (new Array(n));
var inst_31053 = inst_31052;
var inst_31054 = (0);
var state_31089__$1 = (function (){var statearr_31092 = state_31089;
(statearr_31092[(7)] = inst_31053);

(statearr_31092[(8)] = inst_31054);

return statearr_31092;
})();
var statearr_31093_31122 = state_31089__$1;
(statearr_31093_31122[(2)] = null);

(statearr_31093_31122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (4))){
var inst_31057 = (state_31089[(9)]);
var inst_31057__$1 = (state_31089[(2)]);
var inst_31058 = (inst_31057__$1 == null);
var inst_31059 = cljs.core.not.call(null,inst_31058);
var state_31089__$1 = (function (){var statearr_31094 = state_31089;
(statearr_31094[(9)] = inst_31057__$1);

return statearr_31094;
})();
if(inst_31059){
var statearr_31095_31123 = state_31089__$1;
(statearr_31095_31123[(1)] = (5));

} else {
var statearr_31096_31124 = state_31089__$1;
(statearr_31096_31124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (15))){
var inst_31079 = (state_31089[(2)]);
var state_31089__$1 = state_31089;
var statearr_31097_31125 = state_31089__$1;
(statearr_31097_31125[(2)] = inst_31079);

(statearr_31097_31125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (13))){
var state_31089__$1 = state_31089;
var statearr_31098_31126 = state_31089__$1;
(statearr_31098_31126[(2)] = null);

(statearr_31098_31126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (6))){
var inst_31054 = (state_31089[(8)]);
var inst_31075 = (inst_31054 > (0));
var state_31089__$1 = state_31089;
if(cljs.core.truth_(inst_31075)){
var statearr_31099_31127 = state_31089__$1;
(statearr_31099_31127[(1)] = (12));

} else {
var statearr_31100_31128 = state_31089__$1;
(statearr_31100_31128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (3))){
var inst_31087 = (state_31089[(2)]);
var state_31089__$1 = state_31089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31089__$1,inst_31087);
} else {
if((state_val_31090 === (12))){
var inst_31053 = (state_31089[(7)]);
var inst_31077 = cljs.core.vec.call(null,inst_31053);
var state_31089__$1 = state_31089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31089__$1,(15),out,inst_31077);
} else {
if((state_val_31090 === (2))){
var state_31089__$1 = state_31089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31089__$1,(4),ch);
} else {
if((state_val_31090 === (11))){
var inst_31069 = (state_31089[(2)]);
var inst_31070 = (new Array(n));
var inst_31053 = inst_31070;
var inst_31054 = (0);
var state_31089__$1 = (function (){var statearr_31101 = state_31089;
(statearr_31101[(7)] = inst_31053);

(statearr_31101[(10)] = inst_31069);

(statearr_31101[(8)] = inst_31054);

return statearr_31101;
})();
var statearr_31102_31129 = state_31089__$1;
(statearr_31102_31129[(2)] = null);

(statearr_31102_31129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (9))){
var inst_31053 = (state_31089[(7)]);
var inst_31067 = cljs.core.vec.call(null,inst_31053);
var state_31089__$1 = state_31089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31089__$1,(11),out,inst_31067);
} else {
if((state_val_31090 === (5))){
var inst_31053 = (state_31089[(7)]);
var inst_31062 = (state_31089[(11)]);
var inst_31057 = (state_31089[(9)]);
var inst_31054 = (state_31089[(8)]);
var inst_31061 = (inst_31053[inst_31054] = inst_31057);
var inst_31062__$1 = (inst_31054 + (1));
var inst_31063 = (inst_31062__$1 < n);
var state_31089__$1 = (function (){var statearr_31103 = state_31089;
(statearr_31103[(12)] = inst_31061);

(statearr_31103[(11)] = inst_31062__$1);

return statearr_31103;
})();
if(cljs.core.truth_(inst_31063)){
var statearr_31104_31130 = state_31089__$1;
(statearr_31104_31130[(1)] = (8));

} else {
var statearr_31105_31131 = state_31089__$1;
(statearr_31105_31131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (14))){
var inst_31082 = (state_31089[(2)]);
var inst_31083 = cljs.core.async.close_BANG_.call(null,out);
var state_31089__$1 = (function (){var statearr_31107 = state_31089;
(statearr_31107[(13)] = inst_31082);

return statearr_31107;
})();
var statearr_31108_31132 = state_31089__$1;
(statearr_31108_31132[(2)] = inst_31083);

(statearr_31108_31132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (10))){
var inst_31073 = (state_31089[(2)]);
var state_31089__$1 = state_31089;
var statearr_31109_31133 = state_31089__$1;
(statearr_31109_31133[(2)] = inst_31073);

(statearr_31109_31133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31090 === (8))){
var inst_31053 = (state_31089[(7)]);
var inst_31062 = (state_31089[(11)]);
var tmp31106 = inst_31053;
var inst_31053__$1 = tmp31106;
var inst_31054 = inst_31062;
var state_31089__$1 = (function (){var statearr_31110 = state_31089;
(statearr_31110[(7)] = inst_31053__$1);

(statearr_31110[(8)] = inst_31054);

return statearr_31110;
})();
var statearr_31111_31134 = state_31089__$1;
(statearr_31111_31134[(2)] = null);

(statearr_31111_31134[(1)] = (2));


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
});})(c__6473__auto___31120,out))
;
return ((function (switch__6452__auto__,c__6473__auto___31120,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_31115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31115[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_31115[(1)] = (1));

return statearr_31115;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_31089){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_31089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e31116){if((e31116 instanceof Object)){
var ex__6456__auto__ = e31116;
var statearr_31117_31135 = state_31089;
(statearr_31117_31135[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31136 = state_31089;
state_31089 = G__31136;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_31089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_31089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___31120,out))
})();
var state__6475__auto__ = (function (){var statearr_31118 = f__6474__auto__.call(null);
(statearr_31118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___31120);

return statearr_31118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___31120,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31138 = arguments.length;
switch (G__31138) {
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
var c__6473__auto___31211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___31211,out){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___31211,out){
return (function (state_31180){
var state_val_31181 = (state_31180[(1)]);
if((state_val_31181 === (7))){
var inst_31176 = (state_31180[(2)]);
var state_31180__$1 = state_31180;
var statearr_31182_31212 = state_31180__$1;
(statearr_31182_31212[(2)] = inst_31176);

(statearr_31182_31212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (1))){
var inst_31139 = [];
var inst_31140 = inst_31139;
var inst_31141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31180__$1 = (function (){var statearr_31183 = state_31180;
(statearr_31183[(7)] = inst_31140);

(statearr_31183[(8)] = inst_31141);

return statearr_31183;
})();
var statearr_31184_31213 = state_31180__$1;
(statearr_31184_31213[(2)] = null);

(statearr_31184_31213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (4))){
var inst_31144 = (state_31180[(9)]);
var inst_31144__$1 = (state_31180[(2)]);
var inst_31145 = (inst_31144__$1 == null);
var inst_31146 = cljs.core.not.call(null,inst_31145);
var state_31180__$1 = (function (){var statearr_31185 = state_31180;
(statearr_31185[(9)] = inst_31144__$1);

return statearr_31185;
})();
if(inst_31146){
var statearr_31186_31214 = state_31180__$1;
(statearr_31186_31214[(1)] = (5));

} else {
var statearr_31187_31215 = state_31180__$1;
(statearr_31187_31215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (15))){
var inst_31170 = (state_31180[(2)]);
var state_31180__$1 = state_31180;
var statearr_31188_31216 = state_31180__$1;
(statearr_31188_31216[(2)] = inst_31170);

(statearr_31188_31216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (13))){
var state_31180__$1 = state_31180;
var statearr_31189_31217 = state_31180__$1;
(statearr_31189_31217[(2)] = null);

(statearr_31189_31217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (6))){
var inst_31140 = (state_31180[(7)]);
var inst_31165 = inst_31140.length;
var inst_31166 = (inst_31165 > (0));
var state_31180__$1 = state_31180;
if(cljs.core.truth_(inst_31166)){
var statearr_31190_31218 = state_31180__$1;
(statearr_31190_31218[(1)] = (12));

} else {
var statearr_31191_31219 = state_31180__$1;
(statearr_31191_31219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (3))){
var inst_31178 = (state_31180[(2)]);
var state_31180__$1 = state_31180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31180__$1,inst_31178);
} else {
if((state_val_31181 === (12))){
var inst_31140 = (state_31180[(7)]);
var inst_31168 = cljs.core.vec.call(null,inst_31140);
var state_31180__$1 = state_31180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31180__$1,(15),out,inst_31168);
} else {
if((state_val_31181 === (2))){
var state_31180__$1 = state_31180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31180__$1,(4),ch);
} else {
if((state_val_31181 === (11))){
var inst_31144 = (state_31180[(9)]);
var inst_31148 = (state_31180[(10)]);
var inst_31158 = (state_31180[(2)]);
var inst_31159 = [];
var inst_31160 = inst_31159.push(inst_31144);
var inst_31140 = inst_31159;
var inst_31141 = inst_31148;
var state_31180__$1 = (function (){var statearr_31192 = state_31180;
(statearr_31192[(7)] = inst_31140);

(statearr_31192[(11)] = inst_31160);

(statearr_31192[(12)] = inst_31158);

(statearr_31192[(8)] = inst_31141);

return statearr_31192;
})();
var statearr_31193_31220 = state_31180__$1;
(statearr_31193_31220[(2)] = null);

(statearr_31193_31220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (9))){
var inst_31140 = (state_31180[(7)]);
var inst_31156 = cljs.core.vec.call(null,inst_31140);
var state_31180__$1 = state_31180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31180__$1,(11),out,inst_31156);
} else {
if((state_val_31181 === (5))){
var inst_31144 = (state_31180[(9)]);
var inst_31148 = (state_31180[(10)]);
var inst_31141 = (state_31180[(8)]);
var inst_31148__$1 = f.call(null,inst_31144);
var inst_31149 = cljs.core._EQ_.call(null,inst_31148__$1,inst_31141);
var inst_31150 = cljs.core.keyword_identical_QMARK_.call(null,inst_31141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31151 = (inst_31149) || (inst_31150);
var state_31180__$1 = (function (){var statearr_31194 = state_31180;
(statearr_31194[(10)] = inst_31148__$1);

return statearr_31194;
})();
if(cljs.core.truth_(inst_31151)){
var statearr_31195_31221 = state_31180__$1;
(statearr_31195_31221[(1)] = (8));

} else {
var statearr_31196_31222 = state_31180__$1;
(statearr_31196_31222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (14))){
var inst_31173 = (state_31180[(2)]);
var inst_31174 = cljs.core.async.close_BANG_.call(null,out);
var state_31180__$1 = (function (){var statearr_31198 = state_31180;
(statearr_31198[(13)] = inst_31173);

return statearr_31198;
})();
var statearr_31199_31223 = state_31180__$1;
(statearr_31199_31223[(2)] = inst_31174);

(statearr_31199_31223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (10))){
var inst_31163 = (state_31180[(2)]);
var state_31180__$1 = state_31180;
var statearr_31200_31224 = state_31180__$1;
(statearr_31200_31224[(2)] = inst_31163);

(statearr_31200_31224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (8))){
var inst_31140 = (state_31180[(7)]);
var inst_31144 = (state_31180[(9)]);
var inst_31148 = (state_31180[(10)]);
var inst_31153 = inst_31140.push(inst_31144);
var tmp31197 = inst_31140;
var inst_31140__$1 = tmp31197;
var inst_31141 = inst_31148;
var state_31180__$1 = (function (){var statearr_31201 = state_31180;
(statearr_31201[(7)] = inst_31140__$1);

(statearr_31201[(14)] = inst_31153);

(statearr_31201[(8)] = inst_31141);

return statearr_31201;
})();
var statearr_31202_31225 = state_31180__$1;
(statearr_31202_31225[(2)] = null);

(statearr_31202_31225[(1)] = (2));


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
});})(c__6473__auto___31211,out))
;
return ((function (switch__6452__auto__,c__6473__auto___31211,out){
return (function() {
var cljs$core$async$state_machine__6453__auto__ = null;
var cljs$core$async$state_machine__6453__auto____0 = (function (){
var statearr_31206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31206[(0)] = cljs$core$async$state_machine__6453__auto__);

(statearr_31206[(1)] = (1));

return statearr_31206;
});
var cljs$core$async$state_machine__6453__auto____1 = (function (state_31180){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_31180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e31207){if((e31207 instanceof Object)){
var ex__6456__auto__ = e31207;
var statearr_31208_31226 = state_31180;
(statearr_31208_31226[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31227 = state_31180;
state_31180 = G__31227;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
cljs$core$async$state_machine__6453__auto__ = function(state_31180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6453__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6453__auto____1.call(this,state_31180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6453__auto____0;
cljs$core$async$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6453__auto____1;
return cljs$core$async$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___31211,out))
})();
var state__6475__auto__ = (function (){var statearr_31209 = f__6474__auto__.call(null);
(statearr_31209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___31211);

return statearr_31209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___31211,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map