(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0257c268"],{"28cd":function(t,e,n){},4606:function(t,e,n){"use strict";n("28cd")},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(z){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=_(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(z){return{type:"throw",arg:z}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function g(){}function y(){}var w={};u(w,o,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(N([])));E&&E!==n&&r.call(E,o)&&(w=E);var x=y.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(i,o,a,c){var u=l(t[i],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function _(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return C()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(P.prototype),u(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new P(s(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),u(x,c,"Generator"),u(x,o,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},ba9f:function(t,e,n){t.exports=n("c229")},c229:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r;function i(t){return["image/png","image/jpeg","image/gif"].some(e=>e===t)}n.r(e),n.d(e,"canvastoDataURL",(function(){return a})),n.d(e,"canvastoFile",(function(){return c})),n.d(e,"dataURLtoFile",(function(){return s})),n.d(e,"dataURLtoImage",(function(){return l})),n.d(e,"downloadFile",(function(){return h})),n.d(e,"filetoDataURL",(function(){return f})),n.d(e,"imagetoCanvas",(function(){return p})),n.d(e,"urltoBlob",(function(){return v})),n.d(e,"urltoImage",(function(){return m})),n.d(e,"compress",(function(){return y})),n.d(e,"compressAccurately",(function(){return w})),n.d(e,"EImageType",(function(){return r})),function(t){t.PNG="image/png",t.JPEG="image/jpeg",t.GIF="image/gif"}(r||(r={}));var o=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))};function a(t,e=.92,n=r.JPEG){return o(this,void 0,void 0,(function*(){return i(n)||(n=r.JPEG),t.toDataURL(n,e)}))}function c(t,e=.92,n=r.JPEG){return new Promise(r=>t.toBlob(t=>r(t),n,e))}var u=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))};function s(t,e){return u(this,void 0,void 0,(function*(){const n=t.split(",");let r=n[0].match(/:(.*?);/)[1];const o=atob(n[1]);let a=o.length;const c=new Uint8Array(a);for(;a--;)c[a]=o.charCodeAt(a);return i(e)&&(r=e),new Blob([c],{type:r})}))}function l(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>n(new Error("dataURLtoImage(): dataURL is illegal")),r.src=t})}function h(t,e){const n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.download=e||Date.now().toString(36),document.body.appendChild(n);const r=document.createEvent("MouseEvents");r.initEvent("click",!1,!1),n.dispatchEvent(r),document.body.removeChild(n)}function f(t){return new Promise(e=>{const n=new FileReader;n.onloadend=t=>e(t.target.result),n.readAsDataURL(t)})}var d=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))};function p(t,e={}){return d(this,void 0,void 0,(function*(){const n=Object.assign({},e),r=document.createElement("canvas"),i=r.getContext("2d");let o,a;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=Number(n[t]));if(n.scale){const e=n.scale>0&&n.scale<10?n.scale:1;a=t.width*e,o=t.height*e}else a=n.width||n.height*t.width/t.height||t.width,o=n.height||n.width*t.height/t.width||t.height;switch([5,6,7,8].some(t=>t===n.orientation)?(r.height=a,r.width=o):(r.height=o,r.width=a),n.orientation){case 3:i.rotate(180*Math.PI/180),i.drawImage(t,-r.width,-r.height,r.width,r.height);break;case 6:i.rotate(90*Math.PI/180),i.drawImage(t,0,-r.width,r.height,r.width);break;case 8:i.rotate(270*Math.PI/180),i.drawImage(t,-r.height,0,r.height,r.width);break;case 2:i.translate(r.width,0),i.scale(-1,1),i.drawImage(t,0,0,r.width,r.height);break;case 4:i.translate(r.width,0),i.scale(-1,1),i.rotate(180*Math.PI/180),i.drawImage(t,-r.width,-r.height,r.width,r.height);break;case 5:i.translate(r.width,0),i.scale(-1,1),i.rotate(90*Math.PI/180),i.drawImage(t,0,-r.width,r.height,r.width);break;case 7:i.translate(r.width,0),i.scale(-1,1),i.rotate(270*Math.PI/180),i.drawImage(t,-r.height,0,r.height,r.width);break;default:i.drawImage(t,0,0,r.width,r.height)}return r}))}function v(t){return fetch(t).then(t=>t.blob())}function m(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=()=>n(new Error("urltoImage(): Image failed to load, please check the image URL")),r.src=t})}var g=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))};function y(t,e={}){return g(this,void 0,void 0,(function*(){if(!(t instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if("object"!=typeof e&&(e=Object.assign({quality:e})),e.quality=Number(e.quality),Number.isNaN(e.quality))return t;const n=yield f(t);let o=n.split(",")[0].match(/:(.*?);/)[1],c=r.JPEG;i(e.type)&&(c=e.type,o=e.type);const u=yield l(n),h=yield p(u,Object.assign({},e)),d=yield a(h,e.quality,c),v=yield s(d,o);return v.size>t.size?t:v}))}function w(t,e={}){return g(this,void 0,void 0,(function*(){if(!(t instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if("object"!=typeof e&&(e=Object.assign({size:e})),e.size=Number(e.size),Number.isNaN(e.size))return t;if(1024*e.size>t.size)return t;e.accuracy=Number(e.accuracy),(!e.accuracy||e.accuracy<.8||e.accuracy>.99)&&(e.accuracy=.95);const n=e.size*(2-e.accuracy)*1024,o=1024*e.size,c=e.size*e.accuracy*1024,u=yield f(t);let h=u.split(",")[0].match(/:(.*?);/)[1],d=r.JPEG;i(e.type)&&(d=e.type,h=e.type);const v=yield l(u),m=yield p(v,Object.assign({},e));let g,y=.5;const w=[null,null];for(let t=1;t<=7;t++){g=yield a(m,y,d);const e=.75*g.length;if(7===t){(n<e||c>e)&&(g=[g,...w].filter(t=>t).sort((t,e)=>Math.abs(.75*t.length-o)-Math.abs(.75*e.length-o))[0]);break}if(n<e)w[1]=g,y-=Math.pow(.5,t+1);else{if(!(c>e))break;w[0]=g,y+=Math.pow(.5,t+1)}}const b=yield s(g,h);return b.size>t.size?t:b}))}}])}))},f97c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-compress"},[n("h1",[t._v("压缩图片到指定大小（右键保存）")]),n("div",{staticClass:"title"},[t._v("压缩参数")]),n("div",{staticClass:"wrapper input-wrapper"},[n("div",[n("span",[t._v("指定大小（默认700，单位KB）：")]),n("Input",{attrs:{placeholder:"指定大小"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),n("div",[n("span",[t._v("较短边最小像素（推荐1080，为空代表不压缩尺寸，单位PX）：")]),n("Input",{attrs:{placeholder:"最小像素"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)]),n("div",{staticClass:"ddd wrapper"},[n("div",{staticClass:"select-wrapper"},[n("label",{staticClass:"select-img",attrs:{for:"image"},on:{click:t.view1}},[t._v("选择文件")]),n("input",{staticStyle:{display:"none"},attrs:{capture:"camera",type:"file",accept:"image/*",id:"image",disabled:0==t.value1.length},on:{change:t.view2}})]),t._m(0)]),n("div",{staticClass:"title"},[t._v("图片查看")]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-wrapper"},[n("div",{staticClass:"message-box",attrs:{id:"message"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper examine-wrapper"},[n("div",[n("h4",[t._v("压缩前")]),n("div",[n("img",{attrs:{src:"",alt:"压缩前",id:"beforeCompression"}})])]),n("div",[n("h4",[t._v("压缩后")]),n("div",[n("img",{attrs:{src:"",alt:"压缩后",id:"afterCompression"}})])])])}];n("d3b7");function o(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)}))}}n("96cf"),n("b0c0");var c=n("ba9f"),u={name:"Home",data:function(){return{value1:700,value2:1080}},mounted:function(){this.$Notice.info({title:"提示",desc:"如果你发现压缩后的图片变色请调整参数",duration:3})},methods:{view1:function(){0==this.value1.length&&this.$Notice.warning({title:"参数不能为空！！！",duration:3})},view2:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var n,r,i,o,a,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.getElementById("image").files[0],r=4,e.next=4,t.calculateImageSize(n);case 4:if(i=e.sent,o={size:t.value1,accuracy:.99,type:n.type},a=i.width<=i.height,t.appendEle("----- 压缩开始 -----"),t.appendEle("源文件大小为：".concat(n.size/1024)),0==t.value2.length){e.next=20;break}a=a?"width":"height",o[a]=i[a]>t.value2?t.value2:i[a];case 12:return 0==r&&t.$Notice.warning({title:"指定最小像素无法压缩到指定大小，请调整。"}),o[a]=Math.round(o[a]/4*r--),e.next=16,c["compressAccurately"](n,o);case 16:u=e.sent;case 17:if(u.size>1024*o.size){e.next=12;break}case 18:e.next=23;break;case 20:return e.next=22,c["compressAccurately"](n,o);case 22:u=e.sent;case 23:return e.next=25,c["filetoDataURL"](u);case 25:document.getElementById("afterCompression").src=e.sent,s=new File([u],n.name,{type:u.type,lastModified:Date.now()}),t.appendEle("压缩后文件大小为：".concat(s.size/1024)),t.appendEle("压缩4\\"+(r+1)+"。最小分辨率为"+o[a]),t.appendEle("----- 压缩结束 -----"),document.getElementById("message").appendChild(document.createElement("br")),t.$Notice.info({title:"提示",desc:"如果你发现压缩后的图片变色请调整参数重新压缩",duration:3});case 32:case"end":return e.stop()}}),e)})))()},calculateImageSize:function(t){return new Promise((function(e,n){var r=new FileReader;r.addEventListener("loadend",(function(t){var n=document.createElement("img");n.addEventListener("load",(function(t){e({width:t.target.width,height:t.target.height})})),n.src=t.target.result,document.getElementById("beforeCompression").src=t.target.result})),r.readAsDataURL(t)}))},appendEle:function(t){var e=document.createElement("div");e.innerText=t,document.getElementById("message").appendChild(e)}}},s=u,l=(n("4606"),n("2877")),h=Object(l["a"])(s,r,i,!1,null,"a9a44e2a",null);e["default"]=h.exports}}]);