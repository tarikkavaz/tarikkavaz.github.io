(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function s(e){return o.p+"js/"+({about:"about",contact:"contact"}[e]||e)+"."+{about:"81487107",contact:"ec05706c"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"186e":function(e,t,a){},"2ac3":function(e,t,a){},"49f8":function(e,t,a){var n={"./en.json":"edd4","./tr.json":"ffeb"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="49f8"},"4d79":function(e,t,a){"use strict";a("2ac3")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("dc96"),r=a.n(i),s=a("1881"),o=a.n(s),l=a("f206"),c=a.n(l),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative font-sans text-white",attrs:{id:"app"}},[a("div",{staticClass:"fixed h-29"},[a("div",{staticClass:"fixed z-10 w-screen bg-black border-b border-gray-600 h-29"}),a("header",{staticClass:"fixed z-20 w-full"},[a("nav",{staticClass:"container relative px-8 pt-8 pb-5 mx-auto lg:flex lg:items-center lg:justify-between md:flex-wrap"},[a("div",{staticClass:"flex items-center lg:flex-none"},[a("div",{staticClass:"h-20 -mt-2 lg:mt-3 lg:h-32"},[a("router-link",{attrs:{to:"/"+e.$i18n.locale}},[a("img",{staticClass:"w-20 lg:w-32",attrs:{src:"/gfx/CG_Logo_Black.png",alt:"logo"}})])],1),a("div",{staticClass:"flex flex-1 -mt-6 place-content-end lg:hidden"},[a("button",{staticClass:"right-0 px-3 py-2 border border-gray-500 rounded hover:text-gray-400 hover:border-gray-600",on:{click:e.toggleMenu}},[a("svg",{staticClass:"w-3 h-3 current-color",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",fill:"gray"}})])])])]),a("div",{staticClass:"z-40 text-center bg-black lg:border-b lg:-mt-3 lg:border-gradient-r-curious rounded-b-xl"},[a("ul",{staticClass:"flex-grow block w-full p-4 font-bold tracking-wide uppercase lg:p-0.5 lg:px-2 lg:pb-1 gap-x-8 lg:flex lg:flex-initial lg:w-auto lg:mt-0",class:e.menuOpen?"block":"hidden"},[a("li",{staticClass:"mb-6 lg:mb-0"},[a("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/games"}},[e._v(e._s(e.$t("nav.games")))])],1),a("li",{staticClass:"mb-6 lg:mb-0"},[a("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/partners"}},[e._v(e._s(e.$t("nav.partners")))])],1),a("li",{staticClass:"mb-6 lg:mb-0"},[a("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/career"}},[e._v(e._s(e.$t("nav.career")))])],1),a("li",{staticClass:"mb-6 lg:mb-0"},[a("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/contact"}},[e._v(e._s(e.$t("nav.contact")))])],1)])])])])]),a("div",{staticClass:"-mt-3 text-lg"},[a("router-view")],1)])},d=[],m={name:"app",components:{},data:function(){return{menuOpen:!1}},methods:{toggleMenu:function(){this.menuOpen=!this.menuOpen}}},h=m,p=(a("4d79"),a("2877")),f=Object(p["a"])(h,u,d,!1,null,null,null),g=f.exports,v=a("8c4f"),b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-screen mx-auto scroll-container"},[a("section",{staticClass:"w-screen scroll-sequence__container show-container"},[a("div",{staticClass:"sticky inset-0 h-screen bg-center bg-no-repeat bg-cover -z-5 scroll-sequence show-sequence"}),a("div",{staticClass:"max-w-full p-16 text-white scroll-sequence__content"},[a("div",{staticClass:"grid mx-0 -mt-half mb-mega floater place-content-start"},[a("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[a("p",{staticClass:"text-xl font-bold"},[e._v("We push boundaries every day to entertain and maximize the gaming experience for players")])])]),a("div",{staticClass:"grid mx-0 my-mega floater place-content-end"},[a("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious place-self-end"},[a("h2",{staticClass:"mb-3 text-3xl font-bold md:text-4xl"},[e._v("Want to join our team?")]),a("p",{staticClass:"text-xl font-bold"},[e._v("Are you passionate about your craft? Check out our current job openings.")])])]),a("div",{staticClass:"grid mx-0 my-mega floater place-content-center"},[a("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[a("h2",{staticClass:"mb-3 text-3xl font-bold md:text-4xl"},[e._v("Time to Think Bigger!")]),a("p",{staticClass:"text-xl font-bold"},[e._v("Curious Games is best described as an end-to-end software factory where each element of a game is developed in-house. Every game is tweaked and tuned to the level of ultimate user experience.")])])])])]),a("div",{staticClass:"min-h-screen pt-40 text-center text-black bg-white content"},[a("h1",{staticClass:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue"},[e._v("Content")])])])}],k=(a("8e6e"),a("456d"),a("2397"),a("7618")),x=(a("55dd"),a("4e2b")),w=a("308d"),O=a("6bb5"),C=(a("c5f6"),a("87f3"),a("ac6a"),a("d225")),_=a("b0b4"),j=a("bd86"),I=a("2781"),E=a.n(I);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){Object(j["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e){var t=z();return function(){var a,n=Object(O["a"])(e);if(t){var i=Object(O["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(w["a"])(this,a)}}function z(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var R={components:{},mounted:function(){for(var e=[],t=0;t<=131;t++)e.push("".concat("000".concat(t).slice(-4),".jpg"));var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,n=function(){function e(){Object(C["a"])(this,e),Object(j["a"])(this,"listeners",{})}return Object(_["a"])(e,[{key:"addListener",value:function(e,t){return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t),this}},{key:"on",value:function(e,t){return this.addListener(e,t)}},{key:"once",value:function(e,t){var a=this;this.listeners[e]=this.listeners[e]||[];var n=function n(){t(),a.off(e,n)};return this.listeners[e].push(n),this}},{key:"off",value:function(e,t){return this.removeListener(e,t)}},{key:"removeListener",value:function(e,t){var a=this.listeners[e];if(!a)return this;for(var n=a.length;n>0;n--)if(a[n]===t){a.splice(n,1);break}return this}},{key:"emit",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var i=this.listeners[e];return!!i&&(i.forEach((function(e){e.apply(void 0,a)})),!0)}},{key:"listenerCount",value:function(e){var t=this.listeners[e]||[];return t.length}},{key:"rawListeners",value:function(e){return this.listeners[e]}}]),e}(),i=function(){function e(t){Object(C["a"])(this,e),this.images=t.images,this.container=t.container,this.cover=t.cover,this.displayIndex=0}return Object(_["a"])(e,[{key:"setup",value:function(){var e=this;this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),window.addEventListener("resize",(function(){return e.resize()})),this.resize()}},{key:"renderIndex",value:function(e){if(this.images[e])return this.drawImage(e);for(var t=Number.MAX_SAFE_INTEGER,a=e;a>=0;a--)if(this.images[a]){t=a;break}for(var n=Number.MAX_SAFE_INTEGER,i=e,r=this.images.length;i<r;i++)if(this.images[i]){n=i;break}this.images[t]?this.drawImage(t):this.images[n]&&this.drawImage(n)}},{key:"drawImage",value:function(e){this.displayIndex=e,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var t=Math.floor((this.canvas.width-this.images[this.displayIndex].naturalWidth)/2),a=Math.floor((this.canvas.height-this.images[this.displayIndex].naturalHeight)/2);this.cover?this.drawImageCover(this.ctx,this.images[this.displayIndex]):this.ctx.drawImage(this.images[this.displayIndex],t,a)}},{key:"resize",value:function(){var e=this.container.clientWidth,t=this.container.clientHeight;this.canvas.style.height="".concat(t,"px"),this.canvas.style.width="".concat(e,"px"),this.canvas.height=t,this.canvas.width=e,this.renderIndex(this.displayIndex)}},{key:"drawImageCover",value:function(e,t,a,n,i,r,s,o){2===arguments.length&&(a=n=0,i=e.canvas.width,r=e.canvas.height),s="number"===typeof s?s:.5,o="number"===typeof o?o:.5,s<0&&(s=0),o<0&&(o=0),s>1&&(s=1),o>1&&(o=1);var l,c,u,d,m=t.width,h=t.height,p=Math.min(i/m,r/h),f=m*p,g=h*p,v=1;f<i&&(v=i/f),Math.abs(v-1)<1e-14&&g<r&&(v=r/g),f*=v,g*=v,u=m/(f/i),d=h/(g/r),l=(m-u)*s,c=(h-d)*o,l<0&&(l=0),c<0&&(c=0),u>m&&(u=m),d>h&&(d=h),e.drawImage(t,l,c,u,d,a,n,i,r)}}]),e}(),r=function(e){Object(x["a"])(a,e);var t=L(a);function a(e){var n;return Object(C["a"])(this,a),n=t.call(this),n.images=e.imgsRef,n.imageNames=e.images,n.imagesRoot=e.imagesRoot,n.sequenceLength=e.images.length,n.priorityFranes=e.priorityFrames,n.complete=!1,n.loadIndex=0,n.priorityQueue=n.createPriorityQueue(),n.loadingQueue=n.createLoadingQueue(),n.loadNextImage(),n}return Object(_["a"])(a,[{key:"loadImage",value:function(e){var t=this;if(this.images[e])return this.loadNextImage();var a=function a(){n.removeEventListener("load",a),t.images[e]=n,0===e&&t.emit("FIRST_IMAGE_LOADED"),t.loadNextImage()},n=new Image;n.addEventListener("load",a),n.src=(this.imagesRoot?this.imagesRoot:"")+this.imageNames[e]}},{key:"loadNextImage",value:function(){this.priorityQueue.length?(this.loadImage(this.priorityQueue.shift()),this.priorityQueue.length||this.emit("PRIORITY_IMAGES_LOADED")):this.loadingQueue.length?this.loadImage(this.loadingQueue.shift()):(this.complete=!0,this.emit("IMAGES_LOADED"))}},{key:"createPriorityQueue",value:function(){var e=this.priorityFrames||[];return e.length||(e.push(0),e.push(Math.round(this.sequenceLength/2)),e.push(this.sequenceLength-1)),e}},{key:"createLoadingQueue",value:function(){var e=this;return this.imageNames.map((function(e,t){return t})).sort((function(t,a){return Math.abs(t-e.sequenceLength/2)-Math.abs(a-e.sequenceLength/2)}))}}]),a}(n),s=function(){function e(t){Object(C["a"])(this,e),this.opts=A({container:"body",starts:"out",ends:"out",imagesRoot:"",cover:!1},t),this.container="object"===Object(k["a"])(t.container)?t.container:document.querySelector(t.container),this.scrollWith=t.scrollWith?"object"===Object(k["a"])(t.scrollWith)?t.scrollWith:document.querySelector(t.scrollWith):this.container,this.images=Array(t.images.length),this.imagesToLoad=t.images,this.priorityFrames=t.priorityFrames,this.loader=new r({imgsRef:this.images,images:this.imagesToLoad,imagesRoot:this.opts.imagesRoot,priorityFrames:this.priorityFrames}),this.canvas=new i({container:this.container,images:this.images,cover:this.opts.cover}),this.init()}return Object(_["a"])(e,[{key:"init",value:function(){var e=this;this.canvas.setup(),this.loader.once("FIRST_IMAGE_LOADED",(function(){e.canvas.renderIndex(0)})),this.loader.once("PRIORITY_IMAGES_LOADED",(function(){window.addEventListener("scroll",(function(){return e.changeOnWindowScroll()}))})),this.loader.once("IMAGES_LOADED",(function(){console.log("Sequence Loaded")}))}},{key:"changeOnWindowScroll",value:function(){var e=this,t=100/(this.images.length-1),n=Math.floor(this.percentScrolled/t);a((function(){return e.canvas.renderIndex(n)}))}},{key:"percentScrolled",get:function(){var e=this.opts,t=e.starts,a=e.ends,n=this.scrollWith,i=document.documentElement,r=i.scrollTop||window.pageYOffset,s=n.clientHeight||n.offsetHeight,o=i.clientHeight,l=n,c=0;do{c+=l.offsetTop,l=l.offsetParent}while(l&&l!==window);var u=r-c,d=s+o;"out"===t&&(u+=o),"in"===a&&(d-=o),"in"==t&&(d-=o);var m=u/d*100;return m>100?100:m<0?0:m}}]),e}();new s({container:".show-sequence",scrollWith:".show-container",images:e,imagesRoot:"/img/sequence/placeholder/",priorityFrames:[0,20,40,60,80],cover:!0,playUntil:"scroll-out",starts:"in"}),new s({});E()({targets:".floater",cssProps:{viewportY:!0,visibleY:!0}})}},P=R,M=(a("86c9"),Object(p["a"])(P,b,y,!1,null,"ce70cafc",null)),S=M.exports,D=(a("4917"),a("a925"));function T(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var i=n[1];t[i]=e(a)}})),t}n["a"].use(D["a"]);var F=new D["a"]({locale:"en",fallbackLocale:"en",messages:T()});n["a"].use(v["a"]);var N=new v["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/".concat(F.locale)},{path:"/:lang",component:{render:function(e){return e("router-view")}},children:[{path:"/",name:"home",component:S},{path:"about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"games",name:"games",component:function(){return a.e("contact").then(a.bind(null,"a2e9"))}},{path:"partners",name:"partners",component:function(){return a.e("contact").then(a.bind(null,"1a8c"))}},{path:"career",name:"career",component:function(){return a.e("contact").then(a.bind(null,"6990"))}},{path:"contact",name:"contact",component:function(){return a.e("contact").then(a.bind(null,"b8fa"))}}]}]});n["a"].use(c.a),n["a"].use(r.a),n["a"].use(o.a),n["a"].config.productionTip=!1,N.beforeEach((function(e,t,a){var n=e.params.lang;n||(n="en"),F.locale=n,a()})),new n["a"]({router:N,i18n:F,render:function(e){return e(g)}}).$mount("#app")},"86c9":function(e,t,a){"use strict";a("186e")},edd4:function(e){e.exports=JSON.parse('{"nav":{"features":"Features","about":"About","games":"Games","partners":"Partners","career":"Career","contact":"Contact"},"home":{"title":"Home","content":"Lorem ipsum dolor sit amet consectetur <a href=\'#\' class=\'text-blue-600 hover:text-blue-800\'>adipisicing</a> elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint."},"about":{"title":"About","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint."}}')},ffeb:function(e){e.exports=JSON.parse('{"nav":{"features":"Özellikler","about":"Hakkımızda","games":"Oyunlar","partners":"Ortaklar","career":"İş Olanakları","contact":"İletişim"},"home":{"title":"Anasayfa","content":"Yapacakmış mıknatıslı <a href=\'#\' class=\'text-blue-600 hover:text-blue-800\'>okuma</a> sayfası gülüyorum de layıkıyla beğendim gül duyulmamış hesap makinesi yazın. Dışarı çıktılar anlamsız masanın gül değerli olduğu için salladı düşünüyor beğendim masaya doğru cesurca yaptı beğendim salladı lakin yapacakmış. Otobüs şafak ama mutlu oldular beğendim hesap makinesi sıradanlıktan un değirmeni lakin çakıl. Tv yazın filmini mi cezbelendi sarmal açılmadan dolayı sarmal açılmadan dolayı bundan dolayı mutlu oldular bilgiyasayarı ama sıla batarya kutusu değerli olduğu için. Ama türemiş sıfat koyun yapacakmış göze çarpan bilgiyasayarı ekşili çorba mutlu oldular masaya doğru öyle ki sokaklarda de göze çarpan tv. Uzattı eve doğru sıradanlıktan tv gitti göze çarpan sevindi salladı şafak layıkıyla. Kapının kulu batarya kutusu eve doğru biber hesap makinesi adanaya telefonu de batarya kutusu."},"about":{"title":"Hakkımızda","content":"Yapacakmış mıknatıslı okuma sayfası gülüyorum de layıkıyla beğendim gül duyulmamış hesap makinesi yazın. Dışarı çıktılar anlamsız masanın gül değerli olduğu için salladı düşünüyor beğendim masaya doğru cesurca yaptı beğendim salladı lakin yapacakmış. Otobüs şafak ama mutlu oldular beğendim hesap makinesi sıradanlıktan un değirmeni lakin çakıl. Tv yazın filmini mi cezbelendi sarmal açılmadan dolayı sarmal açılmadan dolayı bundan dolayı mutlu oldular bilgiyasayarı ama sıla batarya kutusu değerli olduğu için. Ama türemiş sıfat koyun yapacakmış göze çarpan bilgiyasayarı ekşili çorba mutlu oldular masaya doğru öyle ki sokaklarda de göze çarpan tv. Uzattı eve doğru sıradanlıktan tv gitti göze çarpan sevindi salladı şafak layıkıyla. Kapının kulu batarya kutusu eve doğru biber hesap makinesi adanaya telefonu de batarya kutusu."}}')}});
//# sourceMappingURL=app.4fb6d6b9.js.map