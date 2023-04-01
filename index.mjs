// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zerof@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@esm/index.mjs";function i(e,i,a){var d,m,o,f,l;if(e<=0)return NaN;if(1===e||0===a)return i[0];for(d=m=i[o=a<0?(1-e)*a:0],l=1;l<e;l++){if(f=i[o+=a],n(f))return f;f<m||f===m&&s(f)?m=f:(f>d||f===d&&t(f))&&(d=f)}return r(r(d+m)/2)}function a(e,i,a,d){var m,o,f,l,j;if(e<=0)return NaN;if(1===e||0===a)return i[d];for(m=o=i[f=d],j=1;j<e;j++){if(l=i[f+=a],n(l))return l;l<o||l===o&&s(l)?o=l:(l>m||l===m&&t(l))&&(m=l)}return r(r(m+o)/2)}e(i,"ndarray",a);export{i as default,a as ndarray};
//# sourceMappingURL=index.mjs.map
