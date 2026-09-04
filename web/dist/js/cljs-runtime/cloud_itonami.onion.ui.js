goog.provide('cloud_itonami.onion.ui');
cloud_itonami.onion.ui.css_text = "\n.onion-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.onion-top { margin-bottom: 18px; }\n.onion-top p, .onion-top span, .onion-muted, .onion-app h2, .onion-facts span { color: #96a6b8; }\n.onion-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.onion-app h1, .onion-app h2, .onion-app p { margin: 0; }\n.onion-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.onion-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.onion-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.onion-facts > div, .onion-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.onion-facts > div { padding: 14px; }\n.onion-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.onion-facts strong { overflow-wrap: anywhere; }\n.onion-panel { margin-bottom: 12px; padding: 16px; }\n.onion-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.onion-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.onion-app li, .onion-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.onion-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .onion-app { padding: 18px; } .onion-facts { grid-template-columns: 1fr; } }\n";
cloud_itonami.onion.ui.panel = (function cloud_itonami$onion$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.onion-panel","section.onion-panel",-602089610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
cloud_itonami.onion.ui.facts = (function cloud_itonami$onion$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.onion-facts","section.onion-facts",-1611943537),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
cloud_itonami.onion.ui.public_routes = (function cloud_itonami$onion$ui$public_routes(p__24033){
var map__24034 = p__24033;
var map__24034__$1 = cljs.core.__destructure_map(map__24034);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24034__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.onion.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function cloud_itonami$onion$ui$public_routes_$_iter__24038(s__24039){
return (new cljs.core.LazySeq(null,(function (){
var s__24039__$1 = s__24039;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__24039__$1);
if(temp__5825__auto__){
var s__24039__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24039__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24039__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24041 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24040 = (0);
while(true){
if((i__24040 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__24040);
cljs.core.chunk_append(b__24041,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__24069 = (i__24040 + (1));
i__24040 = G__24069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24041),cloud_itonami$onion$ui$public_routes_$_iter__24038(cljs.core.chunk_rest(s__24039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24041),null);
}
} else {
var r = cljs.core.first(s__24039__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),cloud_itonami$onion$ui$public_routes_$_iter__24038(cljs.core.rest(s__24039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.onion-muted","p.onion-muted",331510560),"No public route is declared next to this app surface."], null))], null);
});
cloud_itonami.onion.ui.runtime_bindings = (function cloud_itonami$onion$ui$runtime_bindings(p__24051){
var map__24052 = p__24051;
var map__24052__$1 = cljs.core.__destructure_map(map__24052);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24052__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.onion.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.onion-chips","ul.onion-chips",1669289467),(function (){var iter__5480__auto__ = (function cloud_itonami$onion$ui$runtime_bindings_$_iter__24054(s__24055){
return (new cljs.core.LazySeq(null,(function (){
var s__24055__$1 = s__24055;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__24055__$1);
if(temp__5825__auto__){
var s__24055__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24055__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24055__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24057 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24056 = (0);
while(true){
if((i__24056 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__24056);
cljs.core.chunk_append(b__24057,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__24070 = (i__24056 + (1));
i__24056 = G__24070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24057),cloud_itonami$onion$ui$runtime_bindings_$_iter__24054(cljs.core.chunk_rest(s__24055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24057),null);
}
} else {
var k = cljs.core.first(s__24055__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),cloud_itonami$onion$ui$runtime_bindings_$_iter__24054(cljs.core.rest(s__24055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.onion-muted","p.onion-muted",331510560),"No public vars are declared in the nearest wrangler config."], null))], null);
});
cloud_itonami.onion.ui.source = (function cloud_itonami$onion$ui$source(p__24058){
var map__24059 = p__24058;
var map__24059__$1 = cljs.core.__destructure_map(map__24059);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24059__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.onion-panel.onion-path","section.onion-panel.onion-path",-1683715995),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
cloud_itonami.onion.ui.root = (function cloud_itonami$onion$ui$root(){
var map__24060 = cljs.core.deref(cloud_itonami.onion.state.state);
var map__24060__$1 = cljs.core.__destructure_map(map__24060);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24060__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.onion.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.onion-app","main.onion-app",-1542715455),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.onion-top","section.onion-top",662626766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.onion.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.onion.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.onion.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.onion.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.onion.ui.js.map
