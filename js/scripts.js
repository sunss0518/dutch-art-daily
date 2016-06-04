!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,i,o,a;for(var c in w)if(w.hasOwnProperty(c)){if(e=[],t=w[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?y[a[0]]=s:(!y[a[0]]||y[a[0]]instanceof Boolean||(y[a[0]]=new Boolean(y[a[0]])),y[a[0]][a[1]]=s),A.push((s?"":"no-")+a.join("-"))}}function i(e){var t=b.className,n=y._config.classPrefix||"";if(E&&(t=t.baseVal),y._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}y._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?b.className.baseVal=t:b.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=o(E?"svg":"body"),e.fake=!0),e}function c(e,n,r,s){var i,c,u,l,d="modernizr",f=o("div"),p=a();if(parseInt(r,10))for(;r--;)u=o("div"),u.id=s?s[r]:d+(r+1),f.appendChild(u);return i=o("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",l=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),c=n(f,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=l,b.offsetHeight):f.parentNode.removeChild(f),!!c}function u(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var s;for(var i in e)if(e[i]in t)return n===!1?e[i]:(s=t[e[i]],r(s,"function")?d(s,n||t):s);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+p(t[s])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,s,i){function a(){d&&(delete L.style,delete L.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var c=m(e,s);if(!r(c,"undefined"))return c}for(var d,f,p,h,g,v=["modernizr","tspan"];!L.style;)d=!0,L.modElem=o(v.shift()),L.style=L.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],g=L.style[h],u(h,"-")&&(h=l(h)),L.style[h]!==n){if(i||r(s,"undefined"))return a(),"pfx"==t?h:!0;try{L.style[h]=s}catch(A){}if(L.style[h]!=g)return a(),"pfx"==t?h:!0}return a(),!1}function g(e,t,n,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+x.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,s,i):(a=(e+" "+M.join(o+" ")+o).split(" "),f(a,t,n))}function v(e,t,r){return g(e,n,n,t,r)}var A=[],w=[],S={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},y=function(){};y.prototype=S,y=new y,y.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var b=t.documentElement,E="svg"===b.nodeName.toLowerCase();y.addTest("inlinesvg",function(){var e=o("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var C=S.testStyles=c;C("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);y.addTest("cssvhunit",r==n)});var T="Moz O ms Webkit",x=S._config.usePrefixes?T.split(" "):[];S._cssomPrefixes=x;var M=S._config.usePrefixes?T.toLowerCase().split(" "):[];S._domPrefixes=M;var z=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=z,y.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",z.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");C(r,function(e){n=9===e.offsetTop})}return n});var R={elem:o("modernizr")};y._q.push(function(){delete R.elem});var L={style:R.elem.style};y._q.unshift(function(){delete L.style}),S.testAllProps=g,S.testAllProps=v,y.addTest("borderimage",v("borderImage","url() 1",!0)),s(),i(A),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<y._q.length;N++)y._q[N]();e.Modernizr=y}(window,document),!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),o&&o.addListener&&o.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(e,t,n){"use strict";function r(e){return" "===e||"	"===e||"\n"===e||"\f"===e||"\r"===e}function s(t,n){var r=new e.Image;return r.onerror=function(){x[t]=!1,te()},r.onload=function(){x[t]=1===r.width,te()},r.src=n,"pending"}function i(){D=!1,H=e.devicePixelRatio,B={},_={},A.DPR=H||1,$.width=Math.max(e.innerWidth||0,T.clientWidth),$.height=Math.max(e.innerHeight||0,T.clientHeight),$.vw=$.width/100,$.vh=$.height/100,v=[$.height,$.width,H].join("-"),$.em=A.getEmValue(),$.rem=$.em}function o(e,t,n,r){var s,i,o,a;return"saveData"===M.algorithm?e>2.7?a=n+1:(i=t-n,s=Math.pow(e-.6,1.5),o=i*s,r&&(o+=.1*s),a=e+o):a=n>1?Math.sqrt(e*t):e,a>n}function a(e){var t,n=A.getSet(e),r=!1;"pending"!==n&&(r=v,n&&(t=A.setRes(n),A.applySetCandidate(t,e))),e[A.ns].evaled=r}function c(e,t){return e.res-t.res}function u(e,t,n){var r;return!n&&t&&(n=e[A.ns].sets,n=n&&n[n.length-1]),r=l(t,n),r&&(t=A.makeUrl(t),e[A.ns].curSrc=t,e[A.ns].curCan=r,r.res||ee(r,r.set.sizes)),r}function l(e,t){var n,r,s;if(e&&t)for(s=A.parseSet(t),e=A.makeUrl(e),n=0;n<s.length;n++)if(e===A.makeUrl(s[n].url)){r=s[n];break}return r}function d(e,t){var n,r,s,i,o=e.getElementsByTagName("source");for(n=0,r=o.length;r>n;n++)s=o[n],s[A.ns]=!0,i=s.getAttribute("srcset"),i&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function f(e,t){function n(t){var n,r=t.exec(e.substring(f));return r?(n=r[0],f+=n.length,n):void 0}function s(){var e,n,r,s,i,c,u,l,d,f=!1,m={};for(s=0;s<a.length;s++)i=a[s],c=i[i.length-1],u=i.substring(0,i.length-1),l=parseInt(u,10),d=parseFloat(u),J.test(u)&&"w"===c?((e||n)&&(f=!0),0===l?f=!0:e=l):K.test(u)&&"x"===c?((e||n||r)&&(f=!0),0>d?f=!0:n=d):J.test(u)&&"h"===c?((r||n)&&(f=!0),0===l?f=!0:r=l):f=!0;f||(m.url=o,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function i(){for(n(F),c="",u="in descriptor";;){if(l=e.charAt(f),"in descriptor"===u)if(r(l))c&&(a.push(c),c="",u="after descriptor");else{if(","===l)return f+=1,c&&a.push(c),void s();if("("===l)c+=l,u="in parens";else{if(""===l)return c&&a.push(c),void s();c+=l}}else if("in parens"===u)if(")"===l)c+=l,u="in descriptor";else{if(""===l)return a.push(c),void s();c+=l}else if("after descriptor"===u)if(r(l));else{if(""===l)return void s();u="in descriptor",f-=1}f+=1}}for(var o,a,c,u,l,d=e.length,f=0,p=[];;){if(n(q),f>=d)return p;o=n(Q),a=[],","===o.slice(-1)?(o=o.replace(V,""),s()):i()}}function p(e){function t(e){function t(){i&&(o.push(i),i="")}function n(){o[0]&&(a.push(o),o=[])}for(var s,i="",o=[],a=[],c=0,u=0,l=!1;;){if(s=e.charAt(u),""===s)return t(),n(),a;if(l){if("*"===s&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(r(s)){if(e.charAt(u-1)&&r(e.charAt(u-1))||!i){u+=1;continue}if(0===c){t(),u+=1;continue}s=" "}else if("("===s)c+=1;else if(")"===s)c-=1;else{if(","===s){t(),n(),u+=1;continue}if("/"===s&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=s,u+=1}}}function n(e){return l.test(e)&&parseFloat(e)>=0?!0:d.test(e)?!0:"0"===e||"-0"===e||"+0"===e?!0:!1}var s,i,o,a,c,u,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,d=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=t(e),o=i.length,s=0;o>s;s++)if(a=i[s],c=a[a.length-1],n(c)){if(u=c,a.pop(),0===a.length)return u;if(a=a.join(" "),A.matchesMedia(a))return u}return"100vw"}t.createElement("picture");var m,h,g,v,A={},w=!1,S=function(){},y=t.createElement("img"),b=y.getAttribute,E=y.setAttribute,C=y.removeAttribute,T=t.documentElement,x={},M={algorithm:""},z="data-pfsrc",R=z+"set",L=navigator.userAgent,N=/rident/.test(L)||/ecko/.test(L)&&L.match(/rv\:(\d+)/)&&RegExp.$1>35,P="currentSrc",I=/\s+\+?\d+(e\d+)?w/,k=/(\([^)]+\))?\s*(.+)/,U=e.picturefillCFG,O="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",j="font-size:100%!important;",D=!0,B={},_={},H=e.devicePixelRatio,$={px:1,"in":96},G=t.createElement("a"),W=!1,F=/^[ \t\n\r\u000c]+/,q=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,V=/[,]+$/,J=/^\d+$/,K=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,X=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Z=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Y=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=Z(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var s;if(!(t in B))if(B[t]=!1,r&&(s=t.match(e)))B[t]=s[1]*$[s[2]];else try{B[t]=new Function("e",n(t))($)}catch(i){}return B[t]}}(),ee=function(e,t){return e.w?(e.cWidth=A.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},te=function(e){if(w){var n,r,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=i.elements||A.qsa(i.context||t,i.reevaluate||i.reselect?A.sel:A.selShort),s=n.length){for(A.setupRun(i),W=!0,r=0;s>r;r++)A.fillImg(n[r],i);A.teardownRun(i)}}};m=e.console&&console.warn?function(e){console.warn(e)}:S,P in y||(P="src"),x["image/jpeg"]=!0,x["image/gif"]=!0,x["image/png"]=!0,x["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),A.ns=("pf"+(new Date).getTime()).substr(0,9),A.supSrcset="srcset"in y,A.supSizes="sizes"in y,A.supPicture=!!e.HTMLPictureElement,A.supSrcset&&A.supPicture&&!A.supSizes&&!function(e){y.srcset="data:,a",e.src="data:,a",A.supSrcset=y.complete===e.complete,A.supPicture=A.supSrcset&&A.supPicture}(t.createElement("img")),A.supSrcset&&!A.supSizes?!function(){var e="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",n="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",r=t.createElement("img"),s=function(){var e=r.width;2===e&&(A.supSizes=!0),g=A.supSrcset&&!A.supSizes,w=!0,setTimeout(te)};r.onload=s,r.onerror=s,r.setAttribute("sizes","9px"),r.srcset=n+" 1w,"+e+" 9w",r.src=n}():w=!0,A.selShort="picture>img,img[srcset]",A.sel=A.selShort,A.cfg=M,A.DPR=H||1,A.u=$,A.types=x,A.setSize=S,A.makeUrl=Z(function(e){return G.href=e,G.href}),A.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},A.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?A.matchesMedia=function(e){return!e||matchMedia(e).matches}:A.matchesMedia=A.mMQ,A.matchesMedia.apply(this,arguments)},A.mMQ=function(e){return e?Y(e):!0},A.calcLength=function(e){var t=Y(e,!0)||!1;return 0>t&&(t=!1),t},A.supportsType=function(e){return e?x[e]:!0},A.parseSize=Z(function(e){var t=(e||"").match(k);return{media:t&&t[1],length:t&&t[2]}}),A.parseSet=function(e){return e.cands||(e.cands=f(e.srcset,e)),e.cands},A.getEmValue=function(){var e;if(!h&&(e=t.body)){var n=t.createElement("div"),r=T.style.cssText,s=e.style.cssText;n.style.cssText=O,T.style.cssText=j,e.style.cssText=j,e.appendChild(n),h=n.offsetWidth,e.removeChild(n),h=parseFloat(h,10),T.style.cssText=r,e.style.cssText=s}return h||16},A.calcListLength=function(e){if(!(e in _)||M.uT){var t=A.calcLength(p(e));_[e]=t?t:$.width}return _[e]},A.setRes=function(e){var t;if(e){t=A.parseSet(e);for(var n=0,r=t.length;r>n;n++)ee(t[n],e.sizes)}return t},A.setRes.res=ee,A.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,l,d,f,p,m=t[A.ns],h=A.DPR;if(l=m.curSrc||t[P],d=m.curCan||u(t,l,e[0].set),d&&d.set===e[0].set&&(p=N&&!t.complete&&d.res-.1>h,p||(d.cached=!0,d.res>=h&&(a=d))),!a)for(e.sort(c),i=e.length,a=e[i-1],r=0;i>r;r++)if(n=e[r],n.res>=h){s=r-1,a=e[s]&&(p||l!==A.makeUrl(n.url))&&o(e[s].res,n.res,h,e[s].cached)?e[s]:n;break}a&&(f=A.makeUrl(a.url),m.curSrc=f,m.curCan=a,f!==l&&A.setSrc(t,a),A.setSize(t))}},A.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},A.getSet=function(e){var t,n,r,s=!1,i=e[A.ns].sets;for(t=0;t<i.length&&!s;t++)if(n=i[t],n.srcset&&A.matchesMedia(n.media)&&(r=A.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},A.parseSets=function(e,t,r){var s,i,o,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[A.ns];(u.src===n||r.src)&&(u.src=b.call(e,"src"),u.src?E.call(e,z,u.src):C.call(e,z)),(u.srcset===n||r.srcset||!A.supSrcset||e.srcset)&&(s=b.call(e,"srcset"),u.srcset=s,a=!0),u.sets=[],c&&(u.pic=!0,d(t,u.sets)),u.srcset?(i={srcset:u.srcset,sizes:b.call(e,"sizes")},u.sets.push(i),o=(g||u.src)&&I.test(u.srcset||""),o||!u.src||l(u.src,i)||i.has1x||(i.srcset+=", "+u.src,i.cands.push({url:u.src,d:1,set:i}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=n,u.supported=!(c||i&&!A.supSrcset||o&&!A.supSizes),a&&A.supSrcset&&!u.supported&&(s?(E.call(e,R,s),e.srcset=""):C.call(e,R)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==A.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},A.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[A.ns]||(e[A.ns]={}),n=e[A.ns],(r||n.evaled!==v)&&((!n.parsed||t.reevaluate)&&A.parseSets(e,e.parentNode,t),n.supported?n.evaled=v:a(e))},A.setupRun=function(){(!W||D||H!==e.devicePixelRatio)&&i()},A.supPicture?(te=S,A.fillImg=S):!function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,s=function(){var e=t.readyState||"";i=setTimeout(s,"loading"===e?200:999),t.body&&(A.fillImgs(),n=n||r.test(e),n&&clearTimeout(i))},i=setTimeout(s,t.body?9:99),o=function(e,t){var n,r,s=function(){var i=new Date-r;t>i?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}},a=T.clientHeight,c=function(){D=Math.max(e.innerWidth||0,T.clientWidth)!==$.width||T.clientHeight!==a,a=T.clientHeight,D&&A.fillImgs()};X(e,"resize",o(c,99)),X(t,"readystatechange",s)}(),A.picturefill=te,A.fillImgs=te,A.teardownRun=S,te._=A,e.picturefillCFG={pf:A,push:function(e){var t=e.shift();"function"==typeof A[t]?A[t].apply(A,e):(M[t]=e[0],W&&A.fillImgs({reselect:!0}))}};for(;U&&U.length;)e.picturefillCFG.push(U.shift());e.picturefill=te,"object"==typeof module&&"object"==typeof module.exports?module.exports=te:"function"==typeof define&&define.amd&&define("picturefill",function(){return te}),A.supPicture||(x["image/webp"]=s("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),!function(e){"use strict";var t,n=0,r=function(){window.picturefill&&e(window.picturefill),(window.picturefill||n>9999)&&clearInterval(t),n++};t=setInterval(r,8),r()}(function(e){"use strict";var t=window.document,n=window.Element,r=window.MutationObserver,s=function(){},i={disconnect:s,take:s,observe:s,start:s,stop:s,connected:!1},o=/^loade|^c|^i/.test(t.readyState||""),a=e._;if(a.mutationSupport=!1,a.observer=i,Object.keys&&window.HTMLSourceElement&&t.addEventListener){var c,u,l,d,f={src:1,srcset:1,sizes:1,media:1},p=Object.keys(f),m={attributes:!0,childList:!0,subtree:!0,attributeFilter:p},h=n&&n.prototype,g={},v=function(e,t){g[e]=a[e],a[e]=t};h&&!h.matches&&(h.matches=h.matchesSelector||h.mozMatchesSelector||h.webkitMatchesSelector||h.msMatchesSelector),h&&h.matches&&(c=function(e,t){return e.matches(t)},a.mutationSupport=!(!Object.create||!Object.defineProperties)),a.mutationSupport&&(i.observe=function(){l&&(i.connected=!0,u&&u.observe(t.documentElement,m))},i.disconnect=function(){i.connected=!1,u&&u.disconnect()},i.take=function(){u?a.onMutations(u.takeRecords()):d&&d.take()},i.start=function(){l=!0,i.observe()},i.stop=function(){l=!1,i.disconnect()},v("setupRun",function(){return i.disconnect(),g.setupRun.apply(this,arguments)}),v("teardownRun",function(){var e=g.setupRun.apply(this,arguments);return i.observe(),e}),v("setSrc",function(){var e,t=i.connected;return i.disconnect(),e=g.setSrc.apply(this,arguments),t&&i.observe(),e}),a.onMutations=function(e){var t,n,r=[];for(t=0,n=e.length;n>t;t++)o&&"childList"===e[t].type?a.onSubtreeChange(e[t],r):"attributes"===e[t].type&&a.onAttrChange(e[t],r);r.length&&a.fillImgs({elements:r,reevaluate:!0})},a.onSubtreeChange=function(e,t){a.findAddedMutations(e.addedNodes,t),a.findRemovedMutations(e.removedNodes,e.target,t)},a.findAddedMutations=function(e,t){var n,r,s,i;for(n=0,r=e.length;r>n;n++)s=e[n],1===s.nodeType&&(i=s.nodeName.toUpperCase(),"PICTURE"===i?a.addToElements(s.getElementsByTagName("img")[0],t):"IMG"===i&&c(s,a.selShort)?a.addToElements(s,t):"SOURCE"===i?a.addImgForSource(s,s.parentNode,t):a.addToElements(a.qsa(s,a.selShort),t))},a.findRemovedMutations=function(e,t,n){var r,s,i;for(r=0,s=e.length;s>r;r++)i=e[r],1===i.nodeType&&"SOURCE"===i.nodeName.toUpperCase()&&a.addImgForSource(i,t,n)},a.addImgForSource=function(e,t,n){t&&"PICTURE"!==(t.nodeName||"").toUpperCase()&&(t=t.parentNode,t&&"PICTURE"===(t.nodeName||"").toUpperCase()||(t=null)),t&&a.addToElements(t.getElementsByTagName("img")[0],n)},a.addToElements=function(e,t){var n,r;if(e)if("length"in e&&!e.nodeType)for(n=0,r=e.length;r>n;n++)a.addToElements(e[n],t);else e.parentNode&&-1===t.indexOf(e)&&t.push(e)},a.onAttrChange=function(e,t){var n,r=e.target[a.ns];r||"srcset"!==e.attributeName||"IMG"!==(n=e.target.nodeName.toUpperCase())?r&&(n||(n=e.target.nodeName.toUpperCase()),"IMG"===n?(e.attributeName in r&&(r[e.attributeName]=void 0),a.addToElements(e.target,t)):"SOURCE"===n&&a.addImgForSource(e.target,e.target.parentNode,t)):a.addToElements(e.target,t)},a.supPicture||(r&&!a.testMutationEvents?u=new r(a.onMutations):(d=function(){var e=!1,t=[],n=window.setImmediate||window.setTimeout;return function(r){e||(e=!0,d.take||(d.take=function(){t.length&&(a.onMutations(t),t=[]),e=!1}),n(d.take)),t.push(r)}}(),t.documentElement.addEventListener("DOMNodeInserted",function(e){i.connected&&o&&d({type:"childList",addedNodes:[e.target],removedNodes:[]})},!0),t.documentElement.addEventListener("DOMNodeRemoved",function(e){i.connected&&o&&"SOURCE"===(e.target||{}).nodeName&&d({type:"childList",addedNodes:[],removedNodes:[e.target],target:e.target.parentNode})},!0),t.documentElement.addEventListener("DOMAttrModified",function(e){i.connected&&f[e.attrName]&&d({type:"attributes",target:e.target,attributeName:e.attrName})},!0)),window.HTMLImageElement&&Object.defineProperties&&!function(){var e=t.createElement("img"),n=[],r=e.getAttribute,s=e.setAttribute,i={src:1};a.supSrcset&&!a.supSizes&&(i.srcset=1),Object.defineProperties(HTMLImageElement.prototype,{getAttribute:{value:function(e){var t;return i[e]&&(t=this[a.ns])&&void 0!==t[e]?t[e]:r.apply(this,arguments)},writeable:!0,enumerable:!0,configurable:!0}}),a.supSrcset||n.push("srcset"),a.supSizes||n.push("sizes"),n.forEach(function(e){Object.defineProperty(HTMLImageElement.prototype,e,{set:function(t){s.call(this,e,t)},get:function(){return r.call(this,e)||""},enumerable:!0,configurable:!0})}),"currentSrc"in e||!function(){var e,n=function(e,t){null==t&&(t=e.src||""),Object.defineProperty(e,"pfCurrentSrc",{value:t,writable:!0})},r=n;a.supSrcset&&window.devicePixelRatio&&(e=function(e,t){var n=e.d||e.w||e.res,r=t.d||t.w||t.res;return n-r},n=function(t){var n,s,i,o,c=t[a.ns];if(c&&c.supported&&c.srcset&&c.sets&&(s=a.parseSet(c.sets[0]))&&s.sort){for(s.sort(e),i=s.length,o=s[i-1],n=0;i>n;n++)if(s[n].d>=window.devicePixelRatio){o=s[n];break}o&&(o=a.makeUrl(o.url))}r(t,o)}),t.addEventListener("load",function(e){"IMG"===e.target.nodeName.toUpperCase()&&n(e.target)},!0),Object.defineProperty(HTMLImageElement.prototype,"currentSrc",{set:function(){window.console&&console.warn&&console.warn("currentSrc can't be set on img element")},get:function(){return this.complete&&n(this),this.src||this.srcset?this.pfCurrentSrc||"":""},enumerable:!0,configurable:!0})}(),!window.HTMLSourceElement||"srcset"in t.createElement("source")||["srcset","sizes"].forEach(function(e){Object.defineProperty(window.HTMLSourceElement.prototype,e,{set:function(t){this.setAttribute(e,t)},get:function(){return this.getAttribute(e)||""},enumerable:!0,configurable:!0})})}(),i.start()),o||t.addEventListener("DOMContentLoaded",function(){o=!0}))}});