!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n="object"==typeof exports?t(require("vue")):t(e.Vue);for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib/",n(n.s=110)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,i,u,f){var s,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=s):r&&(s=f?function(){r.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(a.functional){a._injectStyles=s;var c=a.render;a.render=function(e,t){return s.call(t),c(e,t)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:a}}n.d(t,"a",(function(){return o}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},110:function(e,t,n){"use strict";var o=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=o(n(69)),u=o(n(111)),f=o(n(112));f.default.newInstance=function(e){(0,i.default)(this,void 0);var t=e||{},n=new u.default({render:function(e){return e(f.default,{props:t})}}).$mount();document.body.appendChild(n.$el);var o=n.$children[0];return{add:function(e){o.add(e)},remove:function(e){}}}.bind(void 0);var s=function(e){(0,i.default)(this,void 0),(r=r||f.default.newInstance()).add(e)}.bind(void 0);t.default=s},111:function(t,n){t.exports=e},112:function(e,t,n){"use strict";n.r(t);var o=n(65),r=n(44);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var u=n(0),f=Object(u.a)(r.default,o.a,o.b,!1,null,null,null);t.default=f.exports},44:function(e,t,n){"use strict";n.r(t);var o=n(45),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t.default=r.a},45:function(e,t,n){"use strict";var o=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(69)),i={name:"FeNotice",data:function(){return{notices:[]}},methods:{add:function(e){var t=this,n=+new Date;e.id=n,this.notices.push(e);var o=e.duration;setTimeout(function(){(0,r.default)(this,t),this.remove(n)}.bind(this),1e3*o)},remove:function(e){for(var t=0;t<this.notices.length;t++)if(this.notices[t].id===e){this.notices.splice(t,1);break}}}};t.default=i},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fe-notice"},e._l(e.notices,(function(t){return n("div",{key:t.id,staticClass:"fe-notice__main"},[n("div",{staticClass:"fe-notice__title"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"fe-notice__content"},[e._v(e._s(t.content))])])})),0)},r=[]},69:function(e,t){e.exports=function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")},e.exports.__esModule=!0,e.exports.default=e.exports}})}));
//# sourceMappingURL=notice.js.map