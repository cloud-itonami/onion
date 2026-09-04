goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23180_SHARP_){
return cljs.core.contains_QMARK_(m,p1__23180_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23181(s__23182){
return (new cljs.core.LazySeq(null,(function (){
var s__23182__$1 = s__23182;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23182__$1);
if(temp__5825__auto__){
var s__23182__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23182__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23182__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23184 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23183 = (0);
while(true){
if((i__23183 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23183);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__23184,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23256 = (i__23183 + (1));
i__23183 = G__23256;
continue;
} else {
var G__23257 = (i__23183 + (1));
i__23183 = G__23257;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23184),byoubu$spec$problems_$_iter__23181(cljs.core.chunk_rest(s__23182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23184),null);
}
} else {
var k = cljs.core.first(s__23182__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__23181(cljs.core.rest(s__23182__$2)));
} else {
var G__23258 = cljs.core.rest(s__23182__$2);
s__23182__$1 = G__23258;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23185(s__23186){
return (new cljs.core.LazySeq(null,(function (){
var s__23186__$1 = s__23186;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23186__$1);
if(temp__5825__auto__){
var s__23186__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23186__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23186__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23188 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23187 = (0);
while(true){
if((i__23187 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23187);
cljs.core.chunk_append(b__23188,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23261 = (i__23187 + (1));
i__23187 = G__23261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23188),byoubu$spec$problems_$_iter__23185(cljs.core.chunk_rest(s__23186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23188),null);
}
} else {
var k = cljs.core.first(s__23186__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__23185(cljs.core.rest(s__23186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23189(s__23190){
return (new cljs.core.LazySeq(null,(function (){
var s__23190__$1 = s__23190;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23190__$1);
if(temp__5825__auto__){
var s__23190__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23190__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23190__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23192 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23191 = (0);
while(true){
if((i__23191 < size__5479__auto__)){
var vec__23193 = cljs.core._nth(c__5478__auto__,i__23191);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23193,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__23192,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__23263 = (i__23191 + (1));
i__23191 = G__23263;
continue;
} else {
var G__23264 = (i__23191 + (1));
i__23191 = G__23264;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23192),byoubu$spec$problems_$_iter__23189(cljs.core.chunk_rest(s__23190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23192),null);
}
} else {
var vec__23196 = cljs.core.first(s__23190__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23196,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23196,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__23189(cljs.core.rest(s__23190__$2)));
} else {
var G__23265 = cljs.core.rest(s__23190__$2);
s__23190__$1 = G__23265;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23199(s__23200){
return (new cljs.core.LazySeq(null,(function (){
var s__23200__$1 = s__23200;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23200__$1);
if(temp__5825__auto__){
var s__23200__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23200__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23200__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23202 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23201 = (0);
while(true){
if((i__23201 < size__5479__auto__)){
var vec__23203 = cljs.core._nth(c__5478__auto__,i__23201);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__23202,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23267 = (i__23201 + (1));
i__23201 = G__23267;
continue;
} else {
var G__23268 = (i__23201 + (1));
i__23201 = G__23268;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23202),byoubu$spec$problems_$_iter__23199(cljs.core.chunk_rest(s__23200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23202),null);
}
} else {
var vec__23206 = cljs.core.first(s__23200__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__23199(cljs.core.rest(s__23200__$2)));
} else {
var G__23269 = cljs.core.rest(s__23200__$2);
s__23200__$1 = G__23269;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23209(s__23210){
return (new cljs.core.LazySeq(null,(function (){
var s__23210__$1 = s__23210;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23210__$1);
if(temp__5825__auto__){
var s__23210__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23210__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23210__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23212 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23211 = (0);
while(true){
if((i__23211 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23211);
cljs.core.chunk_append(b__23212,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23272 = (i__23211 + (1));
i__23211 = G__23272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23212),byoubu$spec$problems_$_iter__23209(cljs.core.chunk_rest(s__23210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23212),null);
}
} else {
var k = cljs.core.first(s__23210__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__23209(cljs.core.rest(s__23210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23213(s__23214){
return (new cljs.core.LazySeq(null,(function (){
var s__23214__$1 = s__23214;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23214__$1);
if(temp__5825__auto__){
var s__23214__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23214__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23214__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23216 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23215 = (0);
while(true){
if((i__23215 < size__5479__auto__)){
var vec__23221 = cljs.core._nth(c__5478__auto__,i__23215);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23221,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23221,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__23216,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__23273 = (i__23215 + (1));
i__23215 = G__23273;
continue;
} else {
var G__23274 = (i__23215 + (1));
i__23215 = G__23274;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23216),byoubu$spec$problems_$_iter__23213(cljs.core.chunk_rest(s__23214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23216),null);
}
} else {
var vec__23224 = cljs.core.first(s__23214__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__23213(cljs.core.rest(s__23214__$2)));
} else {
var G__23314 = cljs.core.rest(s__23214__$2);
s__23214__$1 = G__23314;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__23240(s__23241){
return (new cljs.core.LazySeq(null,(function (){
var s__23241__$1 = s__23241;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23241__$1);
if(temp__5825__auto__){
var s__23241__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23241__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23241__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23243 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23242 = (0);
while(true){
if((i__23242 < size__5479__auto__)){
var vec__23250 = cljs.core._nth(c__5478__auto__,i__23242);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__23243,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__23335 = (i__23242 + (1));
i__23242 = G__23335;
continue;
} else {
var G__23336 = (i__23242 + (1));
i__23242 = G__23336;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23243),byoubu$spec$problems_$_iter__23240(cljs.core.chunk_rest(s__23241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23243),null);
}
} else {
var vec__23253 = cljs.core.first(s__23241__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23253,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__23240(cljs.core.rest(s__23241__$2)));
} else {
var G__23344 = cljs.core.rest(s__23241__$2);
s__23241__$1 = G__23344;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
