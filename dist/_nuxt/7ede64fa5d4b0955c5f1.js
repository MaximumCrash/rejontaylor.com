(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("265da9ba",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";var o=n(190);n.n(o).a},207:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,'.page-enter-active,.page-leave-active{transition:all .25s cubic-bezier(.165,.84,.44,1)}.page-enter,.page-leave-active{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}.center-line{position:fixed;width:1px;height:100vh;left:50vw;background:teal}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;position:relative;overflow:hidden;flex-direction:column}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.container>section{position:relative;z-index:1}.multi,.multi>.layer0{position:relative}.multi>.layer0{color:#f9f7f4;z-index:5}.home .multi.title h1{left:18px}.home .multi.title>h2>span,.multi>h1>span{position:relative;display:inline-block}.home .multi.title>h1>span:not(:first-of-type){position:relative;left:-60px}.home .multi.title>h2{color:#f9f7f4;font-size:2.25em;position:relative;display:inline-block;right:-116px;top:-44px;z-index:10}.multi>h1:not(.layer0){position:absolute;left:0;top:0;width:100%}.multi .layer1{color:#df0077;z-index:4}.multi .layer2{color:#e4259b;z-index:3}.multi .layer3{color:#cc02ff;z-index:2}.multi .layer4{color:#884bd3;z-index:1}.multi .layer5{color:#5a04a2;z-index:0}.home .sub-title{color:#f9f7f4;font-size:1.64em;width:110%}.home .sub-title,.quick-links{display:flex;justify-content:space-around}.quick-links{position:relative;margin-top:2em;font-size:1.9em;pointer-events:all}.quick-links>a{position:relative;font-weight:600;cursor:pointer;text-decoration:none;color:#f9f7f4}.quick-links>a:before{content:"";height:110%;width:0;left:50%;top:50%;position:absolute;z-index:-10;-webkit-transform:translate(-50%,-50%) skew(0deg);transform:translate(-50%,-50%) skew(0deg);transition:all .2s ease-out}.quick-links>a:hover:before{width:120%;-webkit-transform:translate(-50%,-50%) skew(-10deg);transform:translate(-50%,-50%) skew(-10deg);transition:all .1s cubic-bezier(.165,.84,.44,1)}.quick-links>a:first-child:before{background:#5a04a2}.quick-links>a:nth-child(2):before{background:#cc02ff}.quick-links>a:nth-child(3):before{background:#df0077}@media screen and (max-width:1290px) and (min-width:786px){header.header{position:absolute!important}}@media screen and (max-width:786px){.home .multi.title>h1{left:18px;font-size:78.25px}.home .multi.title>h1>span:not(:first-of-type){position:relative;left:-40.69px}.home .multi.title>h2{left:unset;right:unset;top:-10px;font-size:31.3px}.home .sub-title{display:none}.quick-links{flex-direction:column}.quick-links>a{padding-top:2vh;padding-bottom:2vh}}@media screen and (max-width:786px) and (min-width:539px){.home .multi.title>h2{font-size:6vw}.home .multi.title h1{font-size:16vw}.home .multi.title>h1>span:not(:first-of-type){left:-8.5vw}}',""])},211:function(t,e,n){"use strict";n.r(e);n(20);var o=n(69),l=n.n(o),r={data:function(){return{animeStore:{}}},mounted:function(){var t=this.$el.querySelector(".home"),e=t.querySelector(".multi.title");this.animeStore=this.$anime.timeline({autoplay:!0});var n=e.querySelectorAll("h1"),o=[];n.forEach(function(element){l()(element),element.style.opacity=1;var t=element.querySelectorAll("span");t[0].innerText+="e",o.push(t)});var r=e.querySelector("h2");l()(r);var c=r.querySelectorAll("span"),d=t.querySelector(".sub-title"),f=t.querySelector(".quick-links");this.animeStore.add({targets:o[0],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:900,delay:function(t,i){return 1==i?384-10*i:320+64*i}},"-=320").add({targets:c,opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:470,delay:function(t,i){return 180+40*i}},232).add({targets:o[1],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:800,delay:function(t,i){return 40+64*i}},32).add({targets:o[2],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1e3,delay:function(t,i){return 5+64*i}},64).add({targets:o[3],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1150,delay:function(t,i){return.625+64*i}},64).add({targets:o[4],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1300,delay:function(t,i){return.078+64*i}},64).add({targets:o[5],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1450,delay:function(t,i){return.009+64*i},complete:function(){n[1].style.display="none",n[2].style.display="none",n[3].style.display="none",n[4].style.display="none"}},64).add({targets:d,opacity:[0,.8],translateY:[80,0],easing:"easeOutBack",duration:1200},120).add({targets:f,opacity:[0,1],translateY:[90,0],easing:"easeOutBack",duration:1e3,delay:function(t,i){return 64*i}},264)}},c=(n(206),n(14)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("section",{staticClass:"home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"quick-links"},[n("nuxt-link",{staticClass:"link-text",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("nuxt-link",{staticClass:"link-text",attrs:{to:"/works"}},[t._v("Works")]),t._v(" "),n("nuxt-link",{staticClass:"link-text",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multi title"},[n("h1",{staticClass:"layer0"},[t._v("Réjon")]),t._v(" "),n("h1",{staticClass:"layer1"},[t._v("Réjon")]),t._v(" "),n("h1",{staticClass:"layer2"},[t._v("Réjon")]),t._v(" "),n("h1",{staticClass:"layer3"},[t._v("Réjon")]),t._v(" "),n("h1",{staticClass:"layer4"},[t._v("Réjon")]),t._v(" "),n("h2",[t._v("Taylor-Foster")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-title"},[n("p",[t._v("Developer")]),t._v(" "),n("p",[t._v("•")]),t._v(" "),n("p",[t._v("Designer")]),t._v(" "),n("p",[t._v("•")]),t._v(" "),n("p",[t._v("All Around Mad Scientist")])])}],!1,null,null,null);e.default=component.exports}}]);