"use strict";var f=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var l=f(function(B,m){
var q=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/math-base-assert-is-positive-zerof/dist'),F=require('@stdlib/math-base-assert-is-negative-zerof/dist'),P=require('@stdlib/math-base-assert-is-nanf/dist');function R(n,i,t){var u,a,v,r,e;if(n<=0)return NaN;if(n===1||t===0)return i[0];for(t<0?v=(1-n)*t:v=0,a=i[v],u=a,e=1;e<n;e++){if(v+=t,r=i[v],P(r))return r;r<a||r===a&&F(r)?a=r:(r>u||r===u&&j(r))&&(u=r)}return q(q(u+a)/2)}m.exports=R
});var p=f(function(C,g){
var c=require('@stdlib/number-float64-base-to-float32/dist'),T=require('@stdlib/math-base-assert-is-positive-zerof/dist'),_=require('@stdlib/math-base-assert-is-negative-zerof/dist'),E=require('@stdlib/math-base-assert-is-nanf/dist');function N(n,i,t,u){var a,v,r,e,s;if(n<=0)return NaN;if(n===1||t===0)return i[u];for(r=u,v=i[r],a=v,s=1;s<n;s++){if(r+=t,e=i[r],E(e))return e;e<v||e===v&&_(e)?v=e:(e>a||e===a&&T(e))&&(a=e)}return c(c(a+v)/2)}g.exports=N
});var y=f(function(D,x){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=l(),b=p();O(d,"ndarray",b);x.exports=d
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),o,Z=k(h(__dirname,"./native.js"));w(Z)?o=z:o=Z;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
