(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{7696:function(e,t,n){"use strict";n.d(t,{YM:function(){return U}});var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}u((r=r.apply(e,t||[])).next())}))};const o="application/font-woff",i="image/jpeg",s={woff:o,woff2:o,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:i,jpeg:i,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"},c=function(){let e=0;return()=>(e+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${e}`)}();function u(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return s[t]||""}function a(e){return-1!==e.search(/^(data:)/)}function l(e,t){return`data:${t};base64,${e}`}function f(e){return e.split(/,/)[1]}function d(e){const t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function h(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}function p(){let e,t;try{t=process}catch(r){}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}function m(e){return new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.src=e}))}const v={};function g(e,t){let n=e.replace(/\?.*/,"");if(/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),v[n])return v[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());const r=(window.fetch?window.fetch(e).then((e=>e.blob().then((t=>({blob:t,contentType:e.headers.get("Content-Type")||""}))))).then((({blob:e,contentType:t})=>new Promise(((n,r)=>{const o=new FileReader;o.onloadend=()=>n({contentType:t,blob:o.result}),o.onerror=r,o.readAsDataURL(e)})))).then((({blob:e,contentType:t})=>({contentType:t,blob:f(e)}))):new Promise(((t,n)=>{const r=new XMLHttpRequest;r.onreadystatechange=()=>{if(4!==r.readyState)return;if(200!==r.status)return void n(new Error(`Failed to fetch resource: ${e}, status: ${r.status}`));const o=new FileReader;o.onloadend=()=>{t({blob:f(o.result),contentType:r.getResponseHeader("Content-Type")||""})},o.readAsDataURL(r.response)},r.ontimeout=()=>{n(new Error(`Timeout of 30000ms occured while fetching resource: ${e}`))},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send()}))).catch((n=>{let r="";if(t.imagePlaceholder){const e=t.imagePlaceholder.split(/,/);e&&e[1]&&(r=e[1])}let o=`Failed to fetch resource: ${e}`;return n&&(o="string"===typeof n?n:n.message),o&&console.error(o),r}));return v[n]=r,r}var w;!function(e){e.clonePseudoElement=function(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=c();try{t.className=`${t.className} ${i}`}catch(u){return}const s=document.createElement("style");s.appendChild(function(e,t,n){const r=`.${e}:${t}`,o=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):function(e){return d(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}(i,n,r)),t.appendChild(s)}}(w||(w={}));var y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}u((r=r.apply(e,t||[])).next())}))};function b(e,t){return y(this,void 0,void 0,(function*(){return t instanceof Element?Promise.resolve().then((()=>function(e,t){const n=window.getComputedStyle(e),r=t.style;if(!r)return;n.cssText?r.cssText=n.cssText:d(n).forEach((e=>{r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))}))}(e,t))).then((()=>function(e,t){[":before",":after"].forEach((n=>w.clonePseudoElement(e,t,n)))}(e,t))).then((()=>function(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value);e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}(e,t))).then((()=>t)):t}))}function x(e,t,n){return y(this,void 0,void 0,(function*(){return n||!t.filter||t.filter(e)?Promise.resolve(e).then((e=>function(e,t){return y(this,void 0,void 0,(function*(){if(e instanceof HTMLCanvasElement){const t=e.toDataURL();return"data:,"===t?Promise.resolve(e.cloneNode(!1)):m(t)}return e instanceof HTMLVideoElement&&e.poster?Promise.resolve(e.poster).then((e=>g(e,t))).then((t=>l(t.blob,u(e.poster)||t.contentType))).then((e=>m(e))):Promise.resolve(e.cloneNode(!1))}))}(e,t))).then((n=>function(e,t,n){var r;return y(this,void 0,void 0,(function*(){const o=d((null!==(r=e.shadowRoot)&&void 0!==r?r:e).childNodes);return 0===o.length?Promise.resolve(t):o.reduce(((e,r)=>e.then((()=>x(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()).then((()=>t))}))}(e,n,t))).then((t=>b(e,t))):Promise.resolve(null)}))}const E=/url\((['"]?)([^'"]+?)\1\)/g,P=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,S=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function T(e){return-1!==e.search(E)}function C(e,t,n){if(!T(e))return Promise.resolve(e);const r=function(e,{preferredFontFormat:t}){return t?e.replace(S,(e=>{for(;;){const[n,,r]=P.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n);return Promise.resolve(r).then(R).then((e=>e.reduce(((e,r)=>e.then((e=>function(e,t,n,r,o){const i=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t);return o.href=e,o.href}(t,n):t;return Promise.resolve(i).then((e=>o?o(e):g(e,r))).then((e=>"string"===typeof e?l(e,u(t)):l(e.blob,u(t)||e.contentType))).then((n=>e.replace(function(e){return new RegExp(`(url\\(['"]?)(${function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}(e)})(['"]?\\))`,"g")}(t),`$1${n}$3`))).then((e=>e),(()=>i))}(e,r,t,n)))),Promise.resolve(r))))}function R(e){const t=[];return e.replace(E,((e,n,r)=>(t.push(r),e))),t.filter((e=>!a(e)))}var $=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}u((r=r.apply(e,t||[])).next())}))};function A(e,t){return $(this,void 0,void 0,(function*(){return e instanceof Element?Promise.resolve(e).then((e=>function(e,t){var n;return $(this,void 0,void 0,(function*(){const r=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then((e=>C(e,null,t))).then((t=>(e.style.setProperty("background",t,e.style.getPropertyPriority("background")),e))):Promise.resolve(e)}))}(e,t))).then((e=>function(e,t){if(!(e instanceof HTMLImageElement)||a(e.src))return Promise.resolve(e);const n=e.src;return Promise.resolve(n).then((e=>g(e,t))).then((e=>l(e.blob,u(n)||e.contentType))).then((t=>new Promise(((n,r)=>{e.onload=n,e.onerror=r,e.srcset="",e.src=t})))).then((()=>e),(()=>e))}(e,t))).then((e=>function(e,t){return $(this,void 0,void 0,(function*(){const n=d(e.childNodes).map((e=>A(e,t)));return Promise.all(n).then((()=>e))}))}(e,t))):Promise.resolve(e)}))}var I=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}u((r=r.apply(e,t||[])).next())}))};const N={};function M(e){return I(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{e.ownerDocument||n(new Error("Provided element is not within a Document")),t(d(e.ownerDocument.styleSheets))})).then((e=>function(e){return I(this,void 0,void 0,(function*(){const t=[],n=[];return e.forEach((t=>{if("cssRules"in t)try{d(t.cssRules).forEach(((e,r)=>{if(e.type===CSSRule.IMPORT_RULE){let o=r+1;n.push(O(e.href,t).then(j).then((e=>{L(e).forEach((e=>{try{t.insertRule(e,e.startsWith("@import")?o+=1:t.cssRules.length)}catch(n){console.log("Error inserting rule from remote css",{rule:e,error:n})}}))})).catch((e=>{console.log("Error loading remote css",e.toString())})))}}))}catch(r){const o=e.find((e=>null===e.href))||document.styleSheets[0];null!=t.href&&n.push(O(t.href,o).then(j).then((e=>{L(e).forEach((e=>{o.insertRule(e,t.cssRules.length)}))})).catch((e=>{console.log("Error loading remote stylesheet",e.toString())}))),console.log("Error inlining remote css file",r.toString())}})),Promise.all(n).then((()=>(e.forEach((e=>{if("cssRules"in e)try{d(e.cssRules).forEach((e=>{t.push(e)}))}catch(n){console.log(`Error while reading CSS rules from ${e.href}`,n.toString())}})),t)))}))}(e))).then(H)}))}function k(e,t){return I(this,void 0,void 0,(function*(){return(null!=t.fontEmbedCss?Promise.resolve(t.fontEmbedCss):function(e,t){return I(this,void 0,void 0,(function*(){return M(e).then((e=>Promise.all(e.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return C(e.cssText,n,t)}))))).then((e=>e.join("\n")))}))}(e,t)).then((t=>{const n=document.createElement("style"),r=document.createTextNode(t);return n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),e}))}))}function H(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>T(e.style.getPropertyValue("src"))))}function L(e){if(void 0===e)return[];let t=e;const n=[],r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;t=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");let i;for(;i=o.exec(t),null!==i;)n.push(i[0]);t=t.replace(o,"");const s=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){if(i=r.exec(t),null===i){if(i=s.exec(t),null===i)break;r.lastIndex=s.lastIndex}else s.lastIndex=r.lastIndex;n.push(i[0])}return n}function O(e,t){if(N[e])return N[e];const n=fetch(e).then((t=>({url:e,cssText:t.text()})),(e=>{console.log("ERROR FETCHING CSS: ",e.toString())}));return N[e]=n,n}function j(e){return I(this,void 0,void 0,(function*(){return e.cssText.then((t=>{let n=t;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((t=>{let o=t.replace(r,"$1");if(!o.startsWith("https://")){const t=e.url;o=new URL(o,t).href}return new Promise(((e,r)=>{fetch(o).then((e=>e.blob())).then((r=>{const o=new FileReader;o.addEventListener("load",(r=>{n=n.replace(t,`url(${o.result})`),e([t,o.result])})),o.readAsDataURL(r)})).catch(r)}))}));return Promise.all(o).then((()=>n))}))}))}function F(e,t,n){const o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),s=document.createElementNS(o,"foreignObject");return i.setAttributeNS("","width",`${t}`),i.setAttributeNS("","height",`${n}`),i.setAttributeNS("","viewBox",`0 0 ${t} ${n}`),s.setAttributeNS("","width","100%"),s.setAttributeNS("","height","100%"),s.setAttributeNS("","x","0"),s.setAttributeNS("","y","0"),s.setAttributeNS("","externalResourcesRequired","true"),i.appendChild(s),s.appendChild(e),function(e){return r(this,void 0,void 0,(function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))}))}(i)}var _=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}u((r=r.apply(e,t||[])).next())}))};function V(e,t={}){return{width:t.width||function(e){const t=h(e,"border-left-width"),n=h(e,"border-right-width");return e.clientWidth+t+n}(e),height:t.height||function(e){const t=h(e,"border-top-width"),n=h(e,"border-bottom-width");return e.clientHeight+t+n}(e)}}function B(e,t={}){return _(this,void 0,void 0,(function*(){const{width:n,height:r}=V(e,t);return x(e,t,!0).then((e=>k(e,t))).then((e=>A(e,t))).then((e=>function(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]})),e}(e,t))).then((e=>F(e,n,r)))}))}function D(e,t={}){return _(this,void 0,void 0,(function*(){return B(e,t).then(m).then((n=100,e=>new Promise((t=>{setTimeout((()=>{t(e)}),n)})))).then((n=>{const r=document.createElement("canvas"),o=r.getContext("2d"),i=t.pixelRatio||p(),{width:s,height:c}=V(e,t),u=t.canvasWidth||s,a=t.canvasHeight||c;return r.width=u*i,r.height=a*i,r.style.width=`${u}`,r.style.height=`${a}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(n,0,0,r.width,r.height),r}));var n}))}function U(e,t={}){return _(this,void 0,void 0,(function*(){return D(e,t).then((e=>e.toDataURL()))}))}},5093:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},2447:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s){try{var c=e[i](s),u=c.value}catch(a){return void n(a)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function c(e){r(s,o,i,c,u,"next",e)}function u(e){r(s,o,i,c,u,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return o}})},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(355);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9999:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5093);var o=n(355);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},355:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5093);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},2099:function(e){e.exports=function(){"use strict";function e(e,t){return void 0===t&&(t=document),"string"===typeof e?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}function t(e){return"scrollama__debug-offset--"+e}function n(e){var n=e.id,r=e.offsetVal,o=e.stepClass,i=document.createElement("div");i.id=t(n),i.className="scrollama__debug-offset",i.style.position="fixed",i.style.left="0",i.style.width="100%",i.style.height="0",i.style.borderTop="2px dashed black",i.style.zIndex="9999";var s=document.createElement("p");s.innerHTML='".'+o+'" trigger: <span>'+r+"</span>",s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",i.appendChild(s),document.body.appendChild(i)}function r(e){n({id:e.id,offsetVal:e.offsetVal,stepClass:e.stepEl[0].className})}function o(e){var n=e.id,r=e.offsetMargin,o=e.offsetVal,i="pixels"===e.format?"px":"",s=t(n),c=document.getElementById(s);c.style.top=r+"px",c.querySelector("span").innerText=""+o+i}function i(e){var t=e.id,n=e.index,r=e.state,o="scrollama__debug-step--"+t+"-"+n,i=document.getElementById(o+"_above"),s=document.getElementById(o+"_below"),c="enter"===r?"block":"none";i&&(i.style.display=c),s&&(s.style.display=c)}function s(){var t=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],n={},s={},c=null,u=[],a=[],l=[],f=[],d=0,h=0,p=0,m=0,v=0,g=0,w=!1,y=!1,b=!1,x=!1,E=!1,P=!1,S="down",T="percent",C=[];function R(e){console.error("scrollama error: "+e)}function $(){n={stepEnter:function(){},stepExit:function(){},stepProgress:function(){}},s={}}function A(){var e="abcdefghijklmnopqrstuv",t=e.length,n=Date.now();return""+[0,0,0].map((function(n){return e[Math.floor(Math.random()*t)]})).join("")+n}function I(e){return e.getBoundingClientRect().top+window.pageYOffset-(document.body.clientTop||0)}function N(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}function M(e){return+e.getAttribute("data-scrollama-index")}function k(){window.pageYOffset>v?S="down":window.pageYOffset<v&&(S="up"),v=window.pageYOffset}function H(e){s[e]&&s[e].forEach((function(e){return e.disconnect()}))}function L(){p=window.innerHeight,m=N(),h=d*("pixels"===T?1:p),w&&(a=u.map((function(e){return e.getBoundingClientRect().height})),l=u.map(I),y&&K()),b&&o({id:c,offsetMargin:h,offsetVal:d,format:T})}function O(e){if(e&&!y){if(!w)return R("scrollama error: enable() called before scroller was ready"),void(y=!1);K()}!e&&y&&t.forEach(H),y=e}function j(e){for(var t=Math.ceil(e/g),n=[],r=1/t,o=0;o<t;o+=1)n.push(o*r);return n}function F(e,t){var r=M(e);void 0!==t&&(f[r].progress=t);var o={element:e,index:r,progress:f[r].progress};"enter"===f[r].state&&n.stepProgress(o)}function _(e,t){if("above"===t)for(var n=0;n<e;n+=1){var r=f[n];"enter"!==r.state&&"down"!==r.direction?(V(u[n],"down",!1),B(u[n],"down")):"enter"===r.state&&B(u[n],"down")}else if("below"===t)for(var o=f.length-1;o>e;o-=1){var i=f[o];"enter"===i.state&&B(u[o],"up"),"down"===i.direction&&(V(u[o],"up",!1),B(u[o],"up"))}}function V(e,t,r){void 0===r&&(r=!0);var o=M(e),s={element:e,index:o,direction:t};f[o].direction=t,f[o].state="enter",E&&r&&"down"===t&&_(o,"above"),E&&r&&"up"===t&&_(o,"below"),n.stepEnter&&!C[o]&&(n.stepEnter(s,f),b&&i({id:c,index:o,state:"enter"}),P&&(C[o]=!0)),x&&F(e)}function B(e,t){var r=M(e),o={element:e,index:r,direction:t};x&&("down"===t&&f[r].progress<1?F(e,1):"up"===t&&f[r].progress>0&&F(e,0)),f[r].direction=t,f[r].state="exit",n.stepExit(o,f),b&&i({id:c,index:r,state:"exit"})}function D(e){var t=e[0];k();var n=t.isIntersecting,r=t.boundingClientRect,o=t.target,i=r.top,s=r.bottom,c=i-h,u=s-h,a=M(o),l=f[a];n&&c<=0&&u>=0&&"down"===S&&"enter"!==l.state&&V(o,S),!n&&c>0&&"up"===S&&"enter"===l.state&&B(o,S)}function U(e){var t=e[0];k();var n=t.isIntersecting,r=t.boundingClientRect,o=t.target,i=r.top,s=r.bottom,c=i-h,u=s-h,a=M(o),l=f[a];n&&c<=0&&u>=0&&"up"===S&&"enter"!==l.state&&V(o,S),!n&&u<0&&"down"===S&&"enter"===l.state&&B(o,S)}function Z(e){var t=e[0];k();var n=t.isIntersecting,r=t.target,o=M(r),i=f[o];n&&"down"===S&&"down"!==i.direction&&"enter"!==i.state&&(V(r,"down"),B(r,"down"))}function q(e){var t=e[0];k();var n=t.isIntersecting,r=t.target,o=M(r),i=f[o];n&&"up"===S&&"down"===i.direction&&"enter"!==i.state&&(V(r,"up"),B(r,"up"))}function z(e){var t=e[0];k();var n=t.isIntersecting,r=t.intersectionRatio,o=t.boundingClientRect,i=t.target,s=o.bottom;n&&s-h>=0&&F(i,+r)}function Y(){s.viewportAbove=u.map((function(e,t){var n=m-l[t],r=h-p-a[t],o=new IntersectionObserver(Z,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}))}function W(){s.viewportBelow=u.map((function(e,t){var n=-h-a[t],r=h-p+a[t]+m,o=new IntersectionObserver(q,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}))}function G(){s.stepAbove=u.map((function(e,t){var n=-h+a[t],r=new IntersectionObserver(D,{rootMargin:n+"px 0px "+(h-p)+"px 0px"});return r.observe(e),r}))}function X(){s.stepBelow=u.map((function(e,t){var n=-h,r=h-p+a[t],o=new IntersectionObserver(U,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}))}function J(){s.stepProgress=u.map((function(e,t){var n=a[t]-h+"px 0px "+(-p+h)+"px 0px",r=j(a[t]),o=new IntersectionObserver(z,{rootMargin:n,threshold:r});return o.observe(e),o}))}function K(){t.forEach(H),Y(),W(),G(),X(),x&&J()}function Q(){u.forEach((function(e,t){return e.setAttribute("data-scrollama-index",t)}))}function ee(){f=u.map((function(){return{direction:null,state:null,progress:0}}))}function te(){b&&r({id:c,stepEl:u,offsetVal:d})}function ne(e){var t=window.getComputedStyle(e);return("scroll"===t.overflowY||"auto"===t.overflowY)&&e.scrollHeight>e.clientHeight}function re(e){return!(!e||1!==e.nodeType)&&(ne(e)?e:re(e.parentNode))}var oe={setup:function(t){var n=t.step,r=t.parent,o=t.offset;void 0===o&&(o=.5);var i=t.progress;void 0===i&&(i=!1);var s=t.threshold;void 0===s&&(s=4);var a=t.debug;void 0===a&&(a=!1);var l=t.order;void 0===l&&(l=!0);var f=t.once;if(void 0===f&&(f=!1),$(),c=A(),!(u=e(n,r)).length)return R("no step elements"),oe;var d=u.reduce((function(e,t){return e||re(t.parentNode)}),!1);return d&&console.error("scrollama error: step elements cannot be children of a scrollable element. Remove any css on the parent element with overflow: scroll; or overflow: auto; on elements with fixed height.",d),b=a,x=i,E=l,P=f,oe.offsetTrigger(o),g=Math.max(1,+s),w=!0,te(),Q(),ee(),L(),oe.enable(),oe},resize:function(){return L(),oe},enable:function(){return O(!0),oe},disable:function(){return O(!1),oe},destroy:function(){O(!1),$()},offsetTrigger:function(e){if(null===e)return d;if("number"===typeof e)T="percent",e>1&&R("offset value is greater than 1. Fallback to 1."),e<0&&R("offset value is lower than 0. Fallback to 0."),d=Math.min(Math.max(0,e),1);else if("string"===typeof e&&e.indexOf("px")>0){var t=+e.replace("px","");isNaN(t)?(R("offset value must be in 'px' format. Fallback to 0.5."),d=.5):(T="pixels",d=t)}else R("offset value does not include 'px'. Fallback to 0.5."),d=.5;return oe},onStepEnter:function(e){return"function"===typeof e?n.stepEnter=e:R("onStepEnter requires a function"),oe},onStepExit:function(e){return"function"===typeof e?n.stepExit=e:R("onStepExit requires a function"),oe},onStepProgress:function(e){return"function"===typeof e?n.stepProgress=e:R("onStepProgress requires a function"),oe}};return oe}return s}()}}]);