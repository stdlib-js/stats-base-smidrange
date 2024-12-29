"use strict";var v=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var o=v(function(A,d){
var m=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/math-base-assert-is-positive-zerof/dist'),R=require('@stdlib/math-base-assert-is-negative-zerof/dist'),Z=require('@stdlib/math-base-assert-is-nanf/dist');function _(i,e,t,f){var n,a,u,r,s;if(i<=0)return NaN;if(i===1||t===0)return e[f];for(u=f,a=e[u],n=a,s=1;s<i;s++){if(u+=t,r=e[u],Z(r))return r;r<a||r===a&&R(r)?a=r:(r>n||r===n&&j(r))&&(n=r)}return m(m(n+a)/2)}d.exports=_
});var g=v(function(B,c){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=o();function O(i,e,t){return F(i,e,t,E(i,t))}c.exports=O
});var y=v(function(C,p){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),T=o();P(l,"ndarray",T);p.exports=l
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),q,x=h(b(__dirname,"./native.js"));k(x)?q=w:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
