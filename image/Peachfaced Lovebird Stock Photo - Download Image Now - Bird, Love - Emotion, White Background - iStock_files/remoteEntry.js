var global_nav;!function(){"use strict";var e,a,n,t,c,r,o,f,s,i,d,u,l,b,p,g,_,h,v,y={5938:function(e,a,n){var t={"./Footer":function(){return Promise.all([n.e(8083),n.e(2747),n.e(2848),n.e(9097)]).then((function(){return function(){return n(5468)}}))},"./Header":function(){return Promise.all([n.e(8083),n.e(5630),n.e(2747),n.e(2848),n.e(9351)]).then((function(){return function(){return n(2934)}}))}},c=function(e,a){return n.R=a,a=n.o(t,e)?t[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),n.R=void 0,a},r=function(e,a){if(n.S){var t="default",c=n.S[t];if(c&&c!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return n.S[t]=e,n.I(t,a)}};n.d(a,{get:function(){return c},init:function(){return r}})}},k={};function m(e){var a=k[e];if(void 0!==a)return a.exports;var n=k[e]={id:e,loaded:!1,exports:{}};return y[e].call(n.exports,n,n.exports,m),n.loaded=!0,n.exports}m.m=y,m.c=k,m.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(a,{a:a}),a},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},m.t=function(n,t){if(1&t&&(n=this(n)),8&t)return n;if("object"==typeof n&&n){if(4&t&&n.__esModule)return n;if(16&t&&"function"==typeof n.then)return n}var c=Object.create(null);m.r(c);var r={};e=e||[null,a({}),a([]),a(a)];for(var o=2&t&&n;"object"==typeof o&&!~e.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((function(e){r[e]=function(){return n[e]}}));return r.default=function(){return n},m.d(c,r),c},m.d=function(e,a){for(var n in a)m.o(a,n)&&!m.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},m.f={},m.e=function(e){return Promise.all(Object.keys(m.f).reduce((function(a,n){return m.f[n](e,a),a}),[]))},m.u=function(e){return({20:"locales-istock-ko",206:"Flags-JPN",216:"Flags-IRL",254:"Flags-NLD",359:"icons-play_store_badges-it",521:"Flags-BRA",734:"icons-app_store_badges-ja",766:"icons-app_store_badges-it",929:"Flags-ISR",1024:"locales-istock-pl",1273:"Flags-USA",1797:"Flags-FRA",1879:"locales-istock-id",1979:"locales-istock-ja",2005:"icons-app_store_badges-fi",2062:"icons-app_store_badges-pt-pt",2081:"icons-play_store_badges-th",2126:"icons-play_store_badges-ja",2175:"Flags-MEX",2365:"icons-play_store_badges-nl",2408:"LocaleModal-LocaleModal",2493:"locales-istock-hu",2658:"Flags-ROU",3009:"icons-play_store_badges-uk",3037:"Flags-IND",3147:"Flags-CAN",3186:"icons-play_store_badges-fr",3212:"Flags-ARE",3215:"Flags-DNK",3240:"icons-app_store_badges-cs",3256:"icons-play_store_badges-cs",3418:"Flags-NOR",3650:"icons-app_store_badges-zh-hk",3657:"Flags-MYS",3683:"icons-app_store_badges-uk",3703:"Flags-AUT",3750:"locales-istock-nl",3875:"Flags-KOR",4012:"icons-app_store_badges-ko",4236:"locales-istock-tr",4349:"locales-istock-uk",4442:"Flags-POL",4481:"locales-istock-en-gb",4512:"icons-app_store_badges-ro",4526:"icons-app_store_badges-vi",4632:"icons-app_store_badges-tr",4792:"locales-istock-sv",4971:"icons-play_store_badges-vi",4994:"Flags-TUR",5007:"locales-istock-th",5056:"Flags-FIN",5146:"Flags-ZAF",5290:"Flags-CZE",5351:"icons-app_store_badges-en-us",5514:"icons-app_store_badges-hu",5540:"Flags-VNM",5608:"Flags-UKR",5683:"icons-play_store_badges-pt-pt",5738:"icons-app_store_badges-sv",5911:"locales-istock-fi",5975:"Flags-DEU",5982:"icons-play_store_badges-fi",6017:"icons-app_store_badges-pl",6077:"Flags-BEL",6196:"locales-istock-fr",6317:"Flags-AUS",6322:"icons-app_store_badges-fr",6383:"locales-istock-ro",6552:"Flags-IDN",6733:"Flags-ESP",6799:"Flags-HUN",6879:"Flags-GBR",7004:"LanguageModal-LanguageModal",7152:"locales-istock-pt-pt",7228:"locales-istock-zh-hk",7253:"icons-app_store_badges-nl",7258:"locales-istock-it",7361:"locales-istock-pt-br",7433:"icons-app_store_badges-",7604:"icons-play_store_badges-hu",7669:"Flags-PRT",7758:"locales-istock-vi",7848:"Flags-ITA",7894:"icons-play_store_badges-zh-hk",8021:"icons-play_store_badges-pl",8062:"locales-istock-cs",8093:"Flags-SWE",8115:"locales-istock-de",8254:"icons-app_store_badges-id",8397:"icons-play_store_badges-sv",8474:"Flags-CHE",8511:"Flags-SGP",8536:"icons-app_store_badges-th",8561:"Flags-NZL",8568:"icons-app_store_badges-ru",8631:"icons-play_store_badges-id",8831:"Flags-THA",8882:"locales-istock-es",8890:"icons-play_store_badges-ko",9021:"icons-play_store_badges-ru",9097:"Footer",9144:"icons-app_store_badges-de",9164:"Flags-HKG",9193:"locales-istock-en-us",9267:"icons-play_store_badges-es",9335:"icons-play_store_badges-pt-br",9351:"Header",9461:"icons-app_store_badges-pt-br",9566:"icons-play_store_badges-de",9624:"icons-play_store_badges-ro",9783:"locales-istock-ru",9882:"Flags-RUS",9900:"icons-play_store_badges-en-us",9926:"icons-play_store_badges-tr",9979:"icons-app_store_badges-es",9995:"Flags-"}[e]||e)+"-"+{20:"33b24008baf0a67eee4c",206:"2713beb0a2a69ee4f64b",216:"81561e9a649638e98394",254:"6b747812cd9c98a4b598",359:"262b214aa18e47804e0a",521:"ef3327eba62dc8edb329",734:"fef646988f6b939af604",766:"763876091731067ad72c",929:"cbe9a5885c17de1f79e4",1024:"b726f610f8aaf565fde3",1273:"d8d9a0c4096eb473985d",1721:"9ebcb8aa47545226db6a",1797:"047b8b4b9442f570ef3c",1879:"886de20d86f46c3273e3",1979:"fcc9da28b2143e9af6b0",2005:"f92673560c5104864747",2062:"d2ecf56bff8c950dc9a6",2081:"c2ca94a2823b3915d51f",2126:"0d0ddfa9ef27b43697ab",2175:"17c857de9d60f9f85d7b",2365:"51efcbd6d120412db93c",2408:"b5733eaf321be94c654e",2493:"d2ec031623513606cae5",2658:"7b3b2585facb3db4ca8b",2747:"b33cf3c1f4716687a279",2848:"d69a76be454652219619",3009:"6e8cc47e646caf60aacb",3037:"9c7baf9bd2a857303a3f",3147:"314b48b3b7eb5f245491",3186:"67eb06da35d949950257",3212:"a03e79a085e4b57602b6",3215:"0f23eb1c01f94f56896a",3240:"0ae30bb7f4acb472b0a9",3256:"bd5864b7c8f95c3f8969",3418:"0cf7753401419e7ead8c",3650:"78b6b245e1a0a374a14c",3657:"4ae6ac848285144f9f78",3683:"0c6eb820754ea16a9535",3703:"eef81da12f72b3a1e339",3750:"db16346e81df3ccf0d47",3875:"e0661aba10f0c008a432",3935:"53c3e957f78aac2b6d2e",4012:"22bb159ed3d0d923b774",4236:"6f024920f331d76537dd",4349:"e4301bd0bf34589edd25",4442:"56556db1a950c9f9fac1",4481:"5026bcc041415b281d60",4512:"1fe2bc0b0ca5e887141d",4526:"ac5140a2bc675b686d98",4632:"5db874beb2d9b3f7cbc1",4792:"c609d70ec509e035b2b2",4971:"1d791d358db8cf22878a",4994:"193b22c40e8b400c7ae4",5007:"bfc22595f580602e99da",5056:"00d1058774bc2f5d3eab",5146:"0443c36f86f4020f77e4",5290:"c1991e049ebc61edbb90",5351:"7c22c99adbf54188226b",5514:"8069aab60a5fbb37499e",5540:"0f90510bf39f8bc68c53",5608:"1fb13d03572c600d6ac5",5630:"a13fd67c91e226f64e02",5683:"71d51e29923c682ae77f",5738:"b8e21f1492ac3e2ccdd8",5911:"b5102c01d1debcfcdabf",5975:"3511ac073b47dc7730ea",5982:"9b4e0491275b31ccc3ee",6017:"292f519ffb884587eec4",6077:"839d993d8e75849360c5",6196:"1d8806e83443074cd189",6317:"d9904eb2fc618f04a789",6322:"b2b1ad90a4be723d3b23",6383:"5e1e9d5500a8c85615d0",6552:"6f1b1517f01302a850db",6733:"32d9fb5d0f4b10a2d232",6799:"3b11bcf5cca166f966b0",6851:"e2a7d9d192f9dbee65dd",6879:"0f9b4f891b199a35eb38",7004:"675bfa7a3fcceaf9e83f",7152:"e35efb34155d99176d6d",7178:"59b09d0f2b29e694c8a7",7228:"8476dfe1663c259b503d",7253:"68ca8a22ad4610460226",7258:"36bc51dc85e135f7889d",7294:"44cd0b26ee229cefa58f",7361:"9f344cc30471c219fb28",7433:"6e90794098f829277fcf",7604:"ceb4d355e072be24a51f",7669:"2227c8ed41af64e286a1",7758:"bc434088b3dccf20ea2f",7848:"f2490e0e04e15a9a5207",7894:"208f1e1ff0fdcb736f74",7941:"d7be68d8d8c6c7dff05a",8021:"b52e71d24ca3f780d8bb",8062:"a16c68412f829f51d7aa",8083:"6242a94e88b562c6f290",8093:"67c3ead0c530dc189242",8115:"f3b9621626eeae8036f5",8254:"b9eab8ca411fee755970",8397:"b91dfbb8889ca27759b3",8474:"0fc2a6eca98e41a75c31",8511:"1a06bd143e3067f36fec",8536:"6e089c255bfbbf142d0d",8561:"073eb35ee4c40651a05e",8568:"b1de9050fd12c65086ee",8631:"7cdc3aa007950b0a3903",8831:"32ea9441895074e917ac",8882:"60ef4829a684987f4231",8890:"a285e55669cc6b9ff6f0",9021:"1613b4b064c13302eee2",9097:"c61673c8e854e128b105",9144:"640c8b6271a082b5563b",9164:"efe0d570e0be07ade8aa",9193:"4a63b9903d14260f400e",9267:"a39591081efdf08f0607",9335:"a9836a65c59dbc4665fc",9351:"7072dec112e80fefe41e",9461:"541cd1b3e75bff710bab",9566:"228b3dfad7c17db3330e",9624:"6f307e8a835ec2c32c20",9783:"d56067b85c4341bede9a",9882:"b32d93437e2cd48187d8",9900:"e594894c8f03da936ced",9926:"a17be9d84dbf4ee29d0f",9979:"37200441779fbd90cfeb",9995:"fd7f5df37b9d563d30c0"}[e]+".js"},m.miniCssF=function(e){return"css/"+({2408:"LocaleModal-LocaleModal",7004:"LanguageModal-LanguageModal",9097:"Footer",9351:"Header"}[e]||e)+"-"+{2408:"083690b8",6851:"4795845c",7004:"d3d211b0",8083:"566aa0ea",9097:"f685e219",9351:"a9c7084c"}[e]+".chunk.css"},m.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n={},t="@unisporkal/global-nav:",m.l=function(e,a,c,r){if(n[e])n[e].push(a);else{var o,f;if(void 0!==c)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var d=s[i];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+c){o=d;break}}o||(f=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,m.nc&&o.setAttribute("nonce",m.nc),o.setAttribute("data-webpack",t+c),o.src=e),n[e]=[a];var u=function(a,t){o.onerror=o.onload=null,clearTimeout(l);var c=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),c&&c.forEach((function(e){return e(t)})),a)return a(t)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),f&&document.head.appendChild(o)}},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){m.S={};var e={},a={};m.I=function(n,t){t||(t=[]);var c=a[n];if(c||(c=a[n]={}),!(t.indexOf(c)>=0)){if(t.push(c),e[n])return e[n];m.o(m.S,n)||(m.S[n]={});var r=m.S[n],o="@unisporkal/global-nav",f=function(e,a,n,t){var c=r[e]=r[e]||{},f=c[a];(!f||!f.loaded&&(!t!=!f.eager?t:o>f.from))&&(c[a]={get:n,from:o,eager:!!t})},s=[];if("default"===n)f("@tanstack/react-query","4.26.1",(function(){return Promise.all([m.e(7941),m.e(2747)]).then((function(){return function(){return m(7941)}}))})),f("axios","1.1.3",(function(){return m.e(1721).then((function(){return function(){return m(1721)}}))})),f("react-dom","18.2.0",(function(){return Promise.all([m.e(3935),m.e(2747)]).then((function(){return function(){return m(3935)}}))})),f("react","18.2.0",(function(){return m.e(7294).then((function(){return function(){return m(7294)}}))}));return s.length?e[n]=Promise.all(s).then((function(){return e[n]=1})):e[n]=1}}}(),m.p="/components/global-nav/static/",c=function(e){var a=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),t=n[1]?a(n[1]):[];return n[2]&&(t.length++,t.push.apply(t,a(n[2]))),n[3]&&(t.push([]),t.push.apply(t,a(n[3]))),t},r=function(e,a){e=c(e),a=c(a);for(var n=0;;){if(n>=e.length)return n<a.length&&"u"!=(typeof a[n])[0];var t=e[n],r=(typeof t)[0];if(n>=a.length)return"u"==r;var o=a[n],f=(typeof o)[0];if(r!=f)return"o"==r&&"n"==f||"s"==f||"u"==r;if("o"!=r&&"u"!=r&&t!=o)return t<o;n++}},o=function(e,a){if(0 in e){a=c(a);var n=e[0],t=n<0;t&&(n=-n-1);for(var r=0,f=1,s=!0;;f++,r++){var i,d,u=f<e.length?(typeof e[f])[0]:"";if(r>=a.length||"o"==(d=(typeof(i=a[r]))[0]))return!s||("u"==u?f>n&&!t:""==u!=t);if("u"==d){if(!s||"u"!=u)return!1}else if(s)if(u==d)if(f<=n){if(i!=e[f])return!1}else{if(t?i>e[f]:i<e[f])return!1;i!=e[f]&&(s=!1)}else if("s"!=u&&"n"!=u){if(t||f<=n)return!1;s=!1,f--}else{if(f<=n||d<u!=t)return!1;s=!1}else"s"!=u&&"n"!=u&&(s=!1,f--)}}var l=[],b=l.pop.bind(l);for(r=1;r<e.length;r++){var p=e[r];l.push(1==p?b()|b():2==p?b()&b():p?o(p,a):!b())}return!!b()},f=function(e,a){var n=e[a];return Object.keys(n).reduce((function(e,a){return!e||!n[e].loaded&&r(e,a)?a:e}),0)},s=function(e,a,n,t){var c=f(e,n);return o(t,c)||"undefined"!=typeof console&&console.warn,d(e[n][c])},i=function(e,a,n){var t=e[a];return(a=Object.keys(t).reduce((function(e,a){return!o(n,a)||e&&!r(e,a)?e:a}),0))&&t[a]},d=function(e){return e.loaded=1,e.get()},l=(u=function(e){return function(a,n,t,c){var r=m.I(a);return r&&r.then?r.then(e.bind(e,a,m.S[a],n,t,c)):e(a,m.S[a],n,t,c)}})((function(e,a,n,t,c){return a&&m.o(a,n)?s(a,0,n,t):c()})),b=u((function(e,a,n,t,c){var r=a&&m.o(a,n)&&i(a,n,t);return r?d(r):c()})),p={},g={2747:function(){return l("default","react",[4,18,2,0],(function(){return m.e(7294).then((function(){return function(){return m(7294)}}))}))},56:function(){return l("default","react-dom",[4,18,2,0],(function(){return m.e(3935).then((function(){return function(){return m(3935)}}))}))},2973:function(){return b("default","axios",[4,1,1,3],(function(){return m.e(1721).then((function(){return function(){return m(1721)}}))}))},3013:function(){return l("default","@tanstack/react-query",[4,4,26,1],(function(){return m.e(7941).then((function(){return function(){return m(7941)}}))}))}},_={2747:[2747],2848:[56,2973,3013]},m.f.consumes=function(e,a){m.o(_,e)&&_[e].forEach((function(e){if(m.o(p,e))return a.push(p[e]);var n=function(a){p[e]=0,m.m[e]=function(n){delete m.c[e],n.exports=a()}},t=function(a){delete p[e],m.m[e]=function(n){throw delete m.c[e],a}};try{var c=g[e]();c.then?a.push(p[e]=c.then(n).catch(t)):n(c)}catch(e){t(e)}}))},h=function(e){return new Promise((function(a,n){var t=m.miniCssF(e),c=m.p+t;if(function(e,a){for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var c=(o=n[t]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===e||c===a))return o}var r=document.getElementsByTagName("style");for(t=0;t<r.length;t++){var o;if((c=(o=r[t]).getAttribute("data-href"))===e||c===a)return o}}(t,c))return a();!function(e,a,n,t){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=function(r){if(c.onerror=c.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.href||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=f,c.parentNode.removeChild(c),t(s)}},c.href=a,(e=>{document.body.appendChild(e)})(c)}(e,c,a,n)}))},v={9794:0},m.f.miniCss=function(e,a){v[e]?a.push(v[e]):0!==v[e]&&{2408:1,6851:1,7004:1,8083:1,9097:1,9351:1}[e]&&a.push(v[e]=h(e).then((function(){v[e]=0}),(function(a){throw delete v[e],a})))},function(){var e={9794:0};m.f.j=function(a,n){var t=m.o(e,a)?e[a]:void 0;if(0!==t)if(t)n.push(t[2]);else if(/^2(747|848)$/.test(a))e[a]=0;else{var c=new Promise((function(n,c){t=e[a]=[n,c]}));n.push(t[2]=c);var r=m.p+m.u(a),o=new Error;m.l(r,(function(n){if(m.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+a+" failed.\n("+c+": "+r+")",o.name="ChunkLoadError",o.type=c,o.request=r,t[1](o)}}),"chunk-"+a,a)}};var a=function(a,n){var t,c,r=n[0],o=n[1],f=n[2],s=0;if(r.some((function(a){return 0!==e[a]}))){for(t in o)m.o(o,t)&&(m.m[t]=o[t]);if(f)f(m)}for(a&&a(n);s<r.length;s++)c=r[s],m.o(e,c)&&e[c]&&e[c][0](),e[c]=0},n=self.webpackChunk_unisporkal_global_nav=self.webpackChunk_unisporkal_global_nav||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var F=m(5938);global_nav=F}();
//# sourceMappingURL=remoteEntry.js.map