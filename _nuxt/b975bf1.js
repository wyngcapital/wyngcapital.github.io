(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{230:function(e,t,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(101).default)("73d16316",content,!0,{sourceMap:!1})},232:function(e,t,n){"use strict";n(230)},233:function(e,t,n){var o=n(100),r=n(174),c=n(234),l=o(!1),d=r(c);l.push([e.i,".header[data-v-3836ee8c]{position:relative;height:80px;z-index:999;background-color:#000}.header.fixed[data-v-3836ee8c]{position:fixed;top:0;left:0;width:100%}.header-wrap[data-v-3836ee8c]{bottom:8px;left:50%;transform:translateX(-50%);height:40px}.head-logo[data-v-3836ee8c],.header-wrap[data-v-3836ee8c]{position:absolute}.head-logo .logo-pic[data-v-3836ee8c]{position:absolute;left:0;width:100px;height:40px;background-image:url("+d+');background-repeat:no-repeat;background-size:cover}.head-link[data-v-3836ee8c]{float:right;height:100%}.head-link ul[data-v-3836ee8c]{font-size:0;height:100%}.head-link ul[data-v-3836ee8c]:before{content:"";height:100%}.head-link li[data-v-3836ee8c],.head-link ul[data-v-3836ee8c]:before{display:inline-block;vertical-align:middle}.head-link li[data-v-3836ee8c]{margin:0 20px}.head-link li[data-v-3836ee8c]:last-child{margin-right:0}.head-link a[data-v-3836ee8c]{font-size:16px;color:#646466;font-weight:medium}.head-link a.active[data-v-3836ee8c],.head-link a[data-v-3836ee8c]:hover{color:#f2f2f2}.head-menu[data-v-3836ee8c]{display:none;position:absolute;top:50%;transform:translateY(-50%);right:0}@media (max-width:991px){.header[data-v-3836ee8c]{height:50px}.header-wrap[data-v-3836ee8c]{height:100%;bottom:0}.head-link[data-v-3836ee8c]{display:none;float:none;min-width:100%;min-height:100px;background:#000;margin:0 -14px;padding:0 14px;transform-origin:0 0;-webkit-animation:menuDown-data-v-3836ee8c .6s cubic-bezier(.86,0,.07,1);animation:menuDown-data-v-3836ee8c .6s cubic-bezier(.86,0,.07,1)}.head-link[data-v-3836ee8c],.head-link ul[data-v-3836ee8c]{height:auto}.head-link li[data-v-3836ee8c]{display:block;height:40px;line-height:40px;margin:0;border-bottom:1px solid rgba(150,17,255,.2)}.head-link.on[data-v-3836ee8c]{display:block}.head-logo[data-v-3836ee8c]{position:relative;width:100%;left:0;top:0;height:50px;line-height:50px}.head-logo .logo-pic[data-v-3836ee8c]{width:75px;height:30px;top:50%;margin-top:-15px}.head-menu[data-v-3836ee8c]{display:block;cursor:pointer}.head-menu span[data-v-3836ee8c]{display:block;width:20px;height:2px;background:#9611ff;transition:all .3s}.head-menu span.t-top[data-v-3836ee8c]{transform:rotate(-45deg) translate3d(-5px,5px,0)}.head-menu span.t-mid[data-v-3836ee8c]{transform:rotate(45deg)}.head-menu span.t-bot[data-v-3836ee8c]{display:none}.head-menu .menu[data-v-3836ee8c]{margin-top:5px}}@-webkit-keyframes menuDown-data-v-3836ee8c{0%{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleX(1)}}@keyframes menuDown-data-v-3836ee8c{0%{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleX(1)}}',""]),e.exports=l},234:function(e,t,n){e.exports=n.p+"img/logo.d85b160.svg"},237:function(e,t,n){"use strict";n.r(t);n(53),n(16),n(41),n(54),n(34),n(26),n(33),n(55),n(56),n(35);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw c}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var c={name:"Nav",props:["scrollHeight","navData"],data:function(){return{isOpen:!1}},methods:{menuClick:function(){this.isOpen=!this.isOpen},heightToTop:function(e){var t=document.body,n=0;do{n+=e.offsetTop,e=e.offsetParent}while(e!==t);return n},itemClick:function(e){var t,n=e.id,r=document.querySelector(".header").clientHeight,c=o(this.navData);try{for(c.s();!(t=c.n()).done;){t.value.active=!1}}catch(e){c.e(e)}finally{c.f()}e.active=!0,window.scrollTo({top:this.heightToTop(document.getElementById(n))-r,behavior:"smooth"}),this.isOpen&&(this.isOpen=!1)}}},l=(n(232),n(42)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header",class:{fixed:e.scrollHeight}},[n("div",{staticClass:"header-wrap basic-width clearfix"},[n("div",{staticClass:"head-logo"},[n("a",{staticClass:"logo-pic",attrs:{href:"#"}}),e._v(" "),n("div",{staticClass:"head-menu",on:{click:e.menuClick}},[n("span",{staticClass:"top",class:{"t-top":e.isOpen}}),e._v(" "),n("span",{staticClass:"menu",class:{"t-mid":e.isOpen}}),e._v(" "),n("span",{staticClass:"menu",class:{"t-bot":e.isOpen}})])]),e._v(" "),n("div",{staticClass:"head-link",class:{on:e.isOpen}},[n("ul",e._l(e.navData,(function(t,o){return n("li",{key:o,on:{click:function(n){return e.itemClick(t)}}},[n("a",{class:{active:t.active},attrs:{href:"javascript: void(0)"}},[e._v(e._s(t.name))])])})),0)])])])}),[],!1,null,"3836ee8c",null);t.default=component.exports}}]);