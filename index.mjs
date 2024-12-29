// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zerof@v0.1.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";function d(s,e,d,m){var a,o,f,j,l;if(s<=0)return NaN;if(1===s||0===d)return e[m];for(a=o=e[f=m],l=1;l<s;l++){if(j=e[f+=d],n(j))return j;j<o||j===o&&i(j)?o=j:(j>a||j===a&&r(j))&&(a=j)}return t(t(a+o)/2)}function m(s,t,r){return d(s,t,r,e(s,r))}s(m,"ndarray",d);export{m as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
