goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21650__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21651__i = 0, G__21651__a = new Array(arguments.length -  0);
while (G__21651__i < G__21651__a.length) {G__21651__a[G__21651__i] = arguments[G__21651__i + 0]; ++G__21651__i;}
  args = new cljs.core.IndexedSeq(G__21651__a,0,null);
} 
return G__21650__delegate.call(this,args);};
G__21650.cljs$lang$maxFixedArity = 0;
G__21650.cljs$lang$applyTo = (function (arglist__21652){
var args = cljs.core.seq(arglist__21652);
return G__21650__delegate(args);
});
G__21650.cljs$core$IFn$_invoke$arity$variadic = G__21650__delegate;
return G__21650;
})()
);

(o.error = (function() { 
var G__21653__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21654__i = 0, G__21654__a = new Array(arguments.length -  0);
while (G__21654__i < G__21654__a.length) {G__21654__a[G__21654__i] = arguments[G__21654__i + 0]; ++G__21654__i;}
  args = new cljs.core.IndexedSeq(G__21654__a,0,null);
} 
return G__21653__delegate.call(this,args);};
G__21653.cljs$lang$maxFixedArity = 0;
G__21653.cljs$lang$applyTo = (function (arglist__21656){
var args = cljs.core.seq(arglist__21656);
return G__21653__delegate(args);
});
G__21653.cljs$core$IFn$_invoke$arity$variadic = G__21653__delegate;
return G__21653;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
