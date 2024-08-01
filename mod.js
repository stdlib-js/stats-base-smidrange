// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var a=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=a(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=a(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,a=parseFloat(r.arg);if(!isFinite(a)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);a=r.arg}switch(r.specifier){case"e":case"E":n=a.toExponential(r.precision);break;case"f":case"F":n=a.toFixed(r.precision);break;case"g":case"G":l(a)<1e-4?((e=r.precision)>0&&(e-=1),n=a.toExponential(e)):n=a.toPrecision(r.precision),r.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,v,"e"),n=f.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,u,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,y,"$1.e")),a>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function A(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,o,l,s,p,f,u,g,d,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,p=0;p<r.length;p++)if(n=r[p],"string"==typeof n)l+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,A(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(u=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-u.length)<0?u:u=d?u+m(y):m(y)+u)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,a;for(t=[],a=0,n=x.exec(r);n;)(e=r.slice(a,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),a=x.lastIndex,n=x.exec(r);return(e=r.slice(a)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var T,V=Object.prototype,$=V.toString,O=V.__defineGetter__,U=V.__defineSetter__,C=V.__lookupGetter__,N=V.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(C.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,o="set"in t,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&O&&O.call(r,e,t.get),o&&U&&U.call(r,e,t.set),r};var P=T;var R="function"==typeof Math.fround?Math.fround:null;var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var G=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var L,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"";L=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,a,i;if(null==r)return G.call(r);t=r[X],i=X,e=null!=(a=r)&&W.call(a,i);try{r[X]=void 0}catch(e){return G.call(r)}return n=G.call(r),e?r[X]=t:delete r[X],n}:function(r){return G.call(r)};var z=L,Y="function"==typeof Float32Array;var q=Number.POSITIVE_INFINITY,B="function"==typeof Float32Array?Float32Array:null;var D,H="function"==typeof Float32Array?Float32Array:void 0;D=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B([1,3.14,-3.14,5e40]),t=e,r=(Y&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===q}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")};var J=D,K=new J(1);var Q="function"==typeof R?R:function(r){return K[0]=r,K[0]},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ar=tr,ir=new J(1);new ar(ir.buffer)[0]=2139095040;var or=ir[0];function cr(r){return 0===r&&1/r===or}var lr=new J(1);new ar(lr.buffer)[0]=4286578688;var sr=lr[0];function pr(r){return 0===r&&1/r===sr}function fr(r){return r!=r}function ur(r,e,t){var n,a,i,o,c;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(n=a=e[i=t<0?(1-r)*t:0],c=1;c<r;c++){if(fr(o=e[i+=t]))return o;o<a||o===a&&pr(o)?a=o:(o>n||o===n&&cr(o))&&(n=o)}return Q(Q(n+a)/2)}function gr(r,e,t,n){var a,i,o,c,l;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(a=i=e[o=n],l=1;l<r;l++){if(fr(c=e[o+=t]))return c;c<i||c===i&&pr(c)?i=c:(c>a||c===a&&cr(c))&&(a=c)}return Q(Q(a+i)/2)}P(ur,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:gr});export{ur as default,gr as ndarray};
//# sourceMappingURL=mod.js.map