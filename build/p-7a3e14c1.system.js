var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function o(e){try{l(n.next(e))}catch(r){i(r)}}function s(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(o,s)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(r){return l([e,r])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;a=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){t.label=o[1];break}if(o[0]===6&&t.label<i[1]){t.label=i[1];i=o;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(o);break}if(i[2])t.ops.pop();t.trys.pop();continue}o=r.call(e,t)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="umc-research";var a=0;var i=false;var o;var s;var l;var f=false;var $=false;var u=false;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p=new WeakMap;var y=function(e){return p.get(e)};var b=e("r",(function(e,r){return p.set(r.$lazyInstance$=e,r)}));var w=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return p.set(e,r)};var N=function(e,r){return r in e};var R=function(e){return console.error(e)};var S=new Map;var x=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=S.get(i);if(o){return o[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{S.set(i,e)}return e[a]}),R)};var _=new Map;var C=[];var T=[];var E=[];var L=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&h.$flags$&4){U(k)}else{h.raf(k)}}}};var A=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){R(t)}}e.length=0};var j=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){R(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var k=function(){a++;A(C);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(T,e);j(E,e);if(T.length>0){E.push.apply(E,T);T.length=0}if(i=C.length+T.length+E.length>0){h.raf(k)}else{a=0}};var U=function(e){return Promise.resolve().then(e)};var P=L(T,true);var B={};var I=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var O=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var H=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return r.import("./p-447ccb56.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var V=e("p",(function(){{h.$cssShim$=v.__stencil_cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){t.resourcesUrl=new URL(".",a).href}else{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,v.location.href)).href;q(t.resourcesUrl,e);if(!window.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return t}))}}return Promise.resolve(t)}));var q=function(e,r){var t=O(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;v[t]=function(n){var i=new URL(n,e).href;var o=a.get(i);if(!o){var s=d.createElement("script");s.type="module";s.crossOrigin=r.crossOrigin;s.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){s.onload=function(){e(v[t].m);s.remove()}}));a.set(i,o);d.head.appendChild(s)}return o}}};var z=function(e,r){if(e!=null&&!M(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var W="r";var F="o";var G="s";var Q="t";var D="hydrated";var J="s-id";var K="sty-id";var X="c-id";var Y=function(e,r){if(r===void 0){r=""}{return function(){return}}};var Z=function(e,r){{return function(){return}}};var ee=new WeakMap;var re=function(e,r,t){var n=_.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}_.set(e,n)};var te=function(e,r,t,n){var a=ae(r.$tagName$);var i=_.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var o=ee.get(e);var s=void 0;if(!o){ee.set(e,o=new Set)}if(!o.has(a)){if(e.host&&(s=e.querySelector("["+K+'="'+a+'"]'))){s.innerHTML=i}else{if(h.$cssShim$){s=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=s["s-sc"];if(l){a=l;o=null}}else{s=d.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var ne=function(e,r,t){var n=Y("attachStyles",r.$tagName$);var a=te(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var ae=function(e,r){return"sc-"+e};var ie=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var oe=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var o=false;var s=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!M(a)){a=String(a)}if(o&&s){l[l.length-1].$text$+=a}else{l.push(o?se(null,a):a)}s=o}}};f(t);if(r){if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=se(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var se=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var le=e("H",{});var fe=function(e){return e&&e.$tag$===le};var $e=function(e,r,t,n,a,i){if(t===n){return}var o=N(e,r);var s=r.toLowerCase();if(r==="class"){var l=e.classList;var f=ce(t);var $=ce(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(!o&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(N(v,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var u=M(n);if((o||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(r==="list"){o=false}else if(t==null||e[r]!=c){e[r]=c}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!o||i&4||a)&&!u){n=n===true?"":n;{e.setAttribute(r,n)}}}};var ue=/\s/;var ce=function(e){return!e?[]:e.split(ue)};var ve=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||B;var o=r.$attrs$||B;{for(n in i){if(!(n in o)){$e(a,n,i[n],undefined,t,r.$flags$)}}}for(n in o){$e(a,n,i[n],o[n],t,r.$flags$)}};var de=function(e,r,t,n){var a=r.$children$[t];var i=0;var $;var v;var h;if(!f){u=true;if(a.$tag$==="slot"){if(o){n.classList.add(o+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){$=a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){$=a.$elm$=d.createTextNode("")}else{$=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ve(null,a,c)}if(I(o)&&$["s-si"]!==o){$.classList.add($["s-si"]=o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=de(e,a,i,$);if(v){$.appendChild(v)}}}}{$["s-hn"]=l;if(a.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=s;$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===a.$tag$&&e.$elm$){he(e.$elm$,false)}}}return $};var he=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==l&&a["s-ol"]){we(a).insertBefore(a,be(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(r){he(a,r)}}h.$flags$&=~1};var me=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var s;if(o.shadowRoot&&o.tagName===l){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=de(null,t,a,e);if(s){n[a].$elm$=s;o.insertBefore(s,be(r))}}}};var ge=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{he(a,true)}}a.remove()}}};var pe=function(e,r,t,n){var a=0;var i=0;var o=r.length-1;var s=r[0];var l=r[o];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=o&&i<=f){if(s==null){s=r[++a]}else if(l==null){l=r[--o]}else if($==null){$=n[++i]}else if(u==null){u=n[--f]}else if(ye(s,$)){Ne(s,$);s=r[++a];$=n[++i]}else if(ye(l,u)){Ne(l,u);l=r[--o];u=n[--f]}else if(ye(s,u)){if(s.$tag$==="slot"||u.$tag$==="slot"){he(s.$elm$.parentNode,false)}Ne(s,u);e.insertBefore(s.$elm$,l.$elm$.nextSibling);s=r[++a];u=n[--f]}else if(ye(l,$)){if(s.$tag$==="slot"||u.$tag$==="slot"){he(l.$elm$.parentNode,false)}Ne(l,$);e.insertBefore(l.$elm$,s.$elm$);l=r[--o];$=n[++i]}else{{c=de(r&&r[i],t,i,e);$=n[++i]}if(c){{we(s.$elm$).insertBefore(c,be(s.$elm$))}}}}if(a>o){me(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){ge(r,a,o)}};var ye=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var be=function(e){return e&&e["s-ol"]||e};var we=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Ne=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var o=r.$text$;var s;if(o===null){{if(i==="slot");else{ve(e,r,c)}}if(n!==null&&a!==null){pe(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}me(t,null,r,a,0,a.length-1)}else if(n!==null){ge(n,0,n.length-1)}}else if(s=t["s-cr"]){s.parentNode.textContent=o}else if(e.$text$!==o){t.data=o}};var Re=function(e){var r=e.childNodes;var t;var n;var a;var i;var o;var s;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){o=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){s=r[i].nodeType;if(o!==""){if(s===1&&o===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}Re(t)}}};var Se=[];var xe=function(e){var r;var t;var n;var a;var i;var o;var s=0;var l=e.childNodes;var f=l.length;for(;s<f;s++){r=l[s];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(o=n.length-1;o>=0;o--){t=n[o];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(_e(t,a)){i=Se.find((function(e){return e.$nodeToRelocate$===t}));$=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{Se.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){Se.forEach((function(e){if(_e(e.$nodeToRelocate$,t["s-sn"])){i=Se.find((function(e){return e.$nodeToRelocate$===t}));if(i){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!Se.some((function(e){return e.$nodeToRelocate$===t}))){Se.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){xe(r)}}};var _e=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var Ce=function(e,r,t,n){l=e.tagName;var a=r.$vnode$||se(null,null);var i=fe(n)?n:oe(null,null,n);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{o=e["s-sc"]}{s=e["s-cr"];f=m&&(t.$flags$&1)!==0;$=false}Ne(a,i);{if(u){xe(i.$elm$);var c=void 0;var v=void 0;var g=void 0;var p=void 0;var y=void 0;var b=void 0;var w=0;for(;w<Se.length;w++){c=Se[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){g=d.createTextNode("");g["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=g,v)}}h.$flags$|=1;for(w=0;w<Se.length;w++){c=Se[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){p=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;g=v["s-ol"];while(g=g.previousSibling){b=g["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}p.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}h.$flags$&=~1}if($){Re(i.$elm$)}Se.length=0}};var Te=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Ee=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=Y("scheduleUpdate",t.$tagName$);var i=r.$ancestorComponent$;var o=r.$lazyInstance$;var s=function(){return Le(e,r,t,o,n)};Te(r,i);var l;if(n){{l=Pe(o,"componentWillLoad")}}a();return Be(l,(function(){return P(s)}))};var Le=function(e,r,t,n,a){var i=Y("update",t.$tagName$);var o=e["s-rc"];if(a){ne(e,t,r.$modeName$)}var s=Y("render",t.$tagName$);{{Ce(e,r,t,Ae(n))}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(o){o.forEach((function(e){return e()}));e["s-rc"]=undefined}s();i();{var l=e["s-p"];var f=function(){return je(e,r,t)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var Ae=function(e,r){try{e=e.render&&e.render()}catch(t){R(t)}return e};var je=function(e,r,t){var n=Y("postUpdate",t.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(D)}n();{r.$onReadyResolve$(e);if(!a){Ue()}}}else{n()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){U((function(){return Ee(e,r,t,false)}))}r.$flags$&=~(4|512)}};var ke=function(e,r){{var t=y(e);var n=t.$hostElement$.isConnected;if(n&&(t.$flags$&(2|16))===2){Ee(e,t,r,false)}return n}};var Ue=function(e){{d.documentElement.classList.add(D)}{h.$flags$|=2}};var Pe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){R(n)}}return undefined};var Be=function(e,r){return e&&e.then?e.then(r):r()};var Ie=function(e,r){return y(e).$instanceValues$.get(r)};var Me=function(e,r,t,n){var a=y(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;t=z(t,n.$members$[r][0]);if(t!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(r,t);if(l){if((s&(2|16))===2){Ee(i,a,n,false)}}}};var Oe=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ie(this,n)},set:function(e){Me(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var He=function(e,r,t,n){var a=Y("hydrateClient",r);var i=e.shadowRoot;var o=[];var s=[];var l=i?[]:null;var f=n.$vnode$=se(r,null);if(!h.$orgLocNodes$){qe(d.body,h.$orgLocNodes$=new Map)}e[J]=t;e.removeAttribute(J);Ve(f,o,s,l,e,e,t);o.forEach((function(e){var t=e.$hostId$+"."+e.$nodeId$;var n=h.$orgLocNodes$.get(t);var a=e.$elm$;if(n&&(m&&n["s-en"]==="")){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=r;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}h.$orgLocNodes$.delete(t)}));if(i){l.forEach((function(e){if(e){i.appendChild(e)}}))}a()};var Ve=function(e,r,t,n,a,i,o){var s;var l;var f;var $;if(i.nodeType===1){s=i.getAttribute(X);if(s){l=s.split(".");if(l[0]===o||l[0]==="0"){f={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};r.push(f);i.removeAttribute(X);if(!e.$children$){e.$children$=[]}e.$children$[f.$index$]=f;e=f;if(n&&f.$depth$==="0"){n[f.$index$]=f.$elm$}}}for($=i.childNodes.length-1;$>=0;$--){Ve(e,r,t,n,a,i.childNodes[$],o)}if(i.shadowRoot){for($=i.shadowRoot.childNodes.length-1;$>=0;$--){Ve(e,r,t,n,a,i.shadowRoot.childNodes[$],o)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===o||l[1]==="0"){s=l[0];f={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(s===Q){f.$elm$=i.nextSibling;if(f.$elm$&&f.$elm$.nodeType===3){f.$text$=f.$elm$.textContent;r.push(f);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[f.$index$]=f;if(n&&f.$depth$==="0"){n[f.$index$]=f.$elm$}}}else if(f.$hostId$===o){if(s===G){f.$tag$="slot";if(l[5]){i["s-sn"]=f.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){f.$elm$=d.createElement(f.$tag$);if(f.$name$){f.$elm$.setAttribute("name",f.$name$)}i.parentNode.insertBefore(f.$elm$,i);i.remove();if(f.$depth$==="0"){n[f.$index$]=f.$elm$}}t.push(f);if(!e.$children$){e.$children$=[]}e.$children$[f.$index$]=f}else if(s===W){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=se(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var qe=function(e,r){if(e.nodeType===1){var t=0;for(;t<e.childNodes.length;t++){qe(e.childNodes[t],r)}if(e.shadowRoot){for(t=0;t<e.shadowRoot.childNodes.length;t++){qe(e.shadowRoot.childNodes[t],r)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===F){r.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var ze=function(e,n,a,i,o){return __awaiter(t,void 0,void 0,(function(){var t,i,s,l,f,$,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;o=x(a);if(!o.then)return[3,2];t=Z();return[4,o];case 1:o=c.sent();t();c.label=2;case 2:if(!o.isProxied){Oe(o,a,2);o.isProxied=true}i=Y("createInstance",a.$tagName$);{n.$flags$|=8}try{new o(n)}catch(v){R(v)}{n.$flags$&=~8}i();s=ae(a.$tagName$);if(!(!_.has(s)&&o.style))return[3,5];l=Y("registerStyles",a.$tagName$);f=o.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-6cef36c5.system.js").then((function(e){return e.scopeCss(f,s,false)}))];case 3:f=c.sent();c.label=4;case 4:re(s,f,!!(a.$flags$&1));l();c.label=5;case 5:$=n.$ancestorComponent$;u=function(){return Ee(e,n,a,true)};if($&&$["s-rc"]){$["s-rc"].push(u)}else{u()}return[2]}}))}))};var We=function(e,r){if((h.$flags$&1)===0){var t=Y("connectedCallback",r.$tagName$);var n=y(e);if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;{a=e.getAttribute(J);if(a){if(m&&r.$flags$&1){var i=te(e.shadowRoot,r);e.classList.remove(i+"-h",i+"-s")}He(e,r.$tagName$,a,n)}}if(!a){if(r.$flags$&4||r.$flags$&8){Fe(e)}}{var o=e;while(o=o.parentNode||o.host){if(o.nodeType===1&&o.hasAttribute("s-id")||o["s-p"]){Te(n,n.$ancestorComponent$=o);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{U((function(){return ze(e,n,r)}))}}t()}};var Fe=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Ge=function(e){if((h.$flags$&1)===0){var r=y(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var Qe=e("b",(function(e,r){if(r===void 0){r={}}var t=Y();var n=[];var a=r.exclude||[];var i=d.head;var o=v.customElements;var s=i.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $=d.querySelectorAll("["+K+"]");var u;var c=true;var g=0;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;if(r.syncQueue){h.$flags$|=4}{h.$flags$|=2}{for(;g<$.length;g++){re($[g].getAttribute(K),ie($[g].innerHTML),true)}}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}if(!m&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;w(r);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){f.push(this)}else{h.jmp((function(){return We(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Ge(e)}))};r.prototype.forceUpdate=function(){ke(this,t)};r.prototype.componentOnReady=function(){return y(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!o.get(i)){n.push(i);o.define(i,Oe(s,t,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,s?s.nextSibling:i.firstChild);c=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return u=setTimeout(Ue,30,"timeout")}))}t()}));var De=e("c",(function(e,r,t){var n=Je(e);return{emit:function(e){var a=new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e});n.dispatchEvent(a);return a}}}));var Je=e("g",(function(e){return y(e).$hostElement$}))}}}));