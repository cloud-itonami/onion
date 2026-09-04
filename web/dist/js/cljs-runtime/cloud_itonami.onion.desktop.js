goog.provide('cloud_itonami.onion.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.onion !== 'undefined') && (typeof cloud_itonami.onion.desktop !== 'undefined') && (typeof cloud_itonami.onion.desktop.root !== 'undefined')){
} else {
cloud_itonami.onion.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.onion.desktop.mount_BANG_ = (function cloud_itonami$onion$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.onion.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.onion.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.onion.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.onion.ui.root], null));
});
cloud_itonami.onion.desktop.init_BANG_ = (function cloud_itonami$onion$desktop$init_BANG_(){
return cloud_itonami.onion.desktop.mount_BANG_();
});

//# sourceMappingURL=cloud_itonami.onion.desktop.js.map
