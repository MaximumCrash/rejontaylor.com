(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(n,t,e){var content=e(201);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(12).default)("042417f4",content,!0,{sourceMap:!1})},200:function(n,t,e){"use strict";var o=e(190);e.n(o).a},201:function(n,t,e){(n.exports=e(11)(!1)).push([n.i,"/*\r\nDefinitions and Such Go Here\r\n*/\n.center-line {\n  position: fixed;\n  width: 1px;\n  height: 100vh;\n  left: 50vw;\n  background: teal;\n}\n.container {\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  flex-direction: column;\n}\n.subtitle {\n  font-weight: 300;\n  font-size: 42px;\n  color: #526488;\n  word-spacing: 5px;\n  padding-bottom: 15px;\n}\n.links {\n  padding-top: 15px;\n}\n.container > section {\n  position: relative;\n  z-index: 1;\n}\n.multi {\n  position: relative;\n}\n.multi > .layer0 {\n  color: #f9f7f4;\n  z-index: 5;\n  position: relative;\n}\n.home .multi.title h1 {\n  left: 18px;\n}\n.multi > h1 > span,\n.home .multi.title > h2 > span {\n  position: relative;\n  display: inline-block;\n}\n.home .multi.title > h1 > span:not(:first-of-type) {\n  position: relative;\n  left: -60px;\n}\n.home .multi.title > h1 > span:nth-child(2) {\n  visibility: hidden;\n}\n.home .multi.title > h2 {\n  color: #f9f7f4;\n  font-size: 2.25em;\n  position: relative;\n  display: inline-block;\n  right: -116px;\n  top: -44px;\n  z-index: 10;\n}\n.multi > h1:not(.layer0) {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n.multi .layer1 {\n  color: #df0077;\n  z-index: 4;\n}\n.multi .layer2 {\n  color: #e4259b;\n  z-index: 3;\n}\n.multi .layer3 {\n  color: #cc02ff;\n  z-index: 2;\n}\n.multi .layer4 {\n  color: #884bd3;\n  z-index: 1;\n}\n.multi .layer5 {\n  color: #5a04a2;\n  z-index: 0;\n}\n.home .sub-title {\n  color: #f9f7f4;\n  display: flex;\n  font-size: 1.64em;\n  justify-content: space-around;\n  width: 110%;\n}\n.quick-links {\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n  margin-top: 2em;\n  font-size: 1.9em;\n}\n.quick-links > a {\n  position: relative;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  color: #f9f7f4;\n  pointer-events: initial;\n}\n.quick-links > a::before {\n  content: '';\n  height: 110%;\n  width: 0%;\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  z-index: -10;\n  transform: translate(-50%, -50%) skew(0deg);\n  transition: all ease-out .2s;\n}\n.quick-links > a:hover::before {\n  width: 120%;\n  transform: translate(-50%, -50%) skew(-10deg);\n  transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s;\n}\n.quick-links > a:nth-child(1)::before {\n  background: #5a04a2;\n}\n.quick-links > a:nth-child(2)::before {\n  background: #cc02ff;\n}\n.quick-links > a:nth-child(3)::before {\n  background: #df0077;\n}\n@media screen and (max-width: 1290px) and (min-width: 786px) {\nheader.header {\n    position: absolute !important;\n}\n}\n@media screen and (max-width: 786px) {\n.home .multi.title > h1 {\n    left: 18px;\n    font-size: 78.25px;\n}\n.home .multi.title > h1 > span:not(:first-of-type) {\n    position: relative;\n    left: -40.69px;\n}\n.home .multi.title > h2 {\n    left: unset;\n    right: unset;\n    top: -10px;\n    font-size: 31.3px;\n}\n.home .sub-title {\n    display: none;\n}\n.quick-links {\n    flex-direction: column;\n}\n.quick-links > a {\n    padding-top: 2vh;\n    padding-bottom: 2vh;\n}\n}\n@media screen and (max-width: 786px) and (min-width: 539px) {\n.home .multi.title > h2 {\n    font-size: 6vw;\n}\n.home .multi.title h1 {\n    font-size: 16vw;\n}\n.home .multi.title > h1 > span:not(:first-of-type) {\n    left: -8.5vw;\n}\n}\n",""])},205:function(n,t,e){"use strict";e.r(t);e(21);var o=e(68),l=e.n(o),r={data:function(){return{animeStore:{}}},mounted:function(){var n=this.$el.querySelector(".home"),t=n.querySelector(".multi.title");this.animeStore=this.$anime.timeline({autoplay:!0});var e=t.querySelectorAll("h1"),o=[];e.forEach(function(element){l()(element),element.style.opacity=1;var n=element.querySelectorAll("span");n[0].innerText+="é",o.push(n)});var r=t.querySelector("h2");l()(r);var c=r.querySelectorAll("span"),d=n.querySelector(".sub-title"),f=n.querySelector(".quick-links");this.animeStore.add({targets:o[0],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:900,delay:function(n,i){return 1==i?384-10*i:320+64*i}},"-=320").add({targets:c,opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:470,delay:function(n,i){return 180+40*i}},232).add({targets:o[1],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:800,delay:function(n,i){return 40+64*i}},32).add({targets:o[2],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1e3,delay:function(n,i){return 5+64*i}},64).add({targets:o[3],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1150,delay:function(n,i){return.625+64*i}},64).add({targets:o[4],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1300,delay:function(n,i){return.078+64*i}},64).add({targets:o[5],opacity:[0,1],translateX:[320,0],easing:"easeOutQuart",duration:1450,delay:function(n,i){return.009+64*i},complete:function(){e[1].style.display="none",e[2].style.display="none",e[3].style.display="none",e[4].style.display="none"}},64).add({targets:d,opacity:[0,.8],translateY:[80,0],easing:"easeOutBack",duration:1200},120).add({targets:f,opacity:[0,1],translateY:[90,0],easing:"easeOutBack",duration:1e3,delay:function(n,i){return 64*i}},264)}},c=(e(200),e(14)),component=Object(c.a)(r,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"container"},[e("section",{staticClass:"home"},[n._m(0),n._v(" "),n._m(1),n._v(" "),e("div",{staticClass:"quick-links"},[e("nuxt-link",{staticClass:"link-text",attrs:{to:"/about"}},[n._v("About")]),n._v(" "),e("nuxt-link",{staticClass:"link-text",attrs:{to:"/works"}},[n._v("Works")]),n._v(" "),e("nuxt-link",{staticClass:"link-text",attrs:{to:"/contact"}},[n._v("Contact")])],1)])])},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"multi title"},[e("h1",{staticClass:"layer0"},[n._v("Réjon")]),n._v(" "),e("h1",{staticClass:"layer1"},[n._v("Réjon")]),n._v(" "),e("h1",{staticClass:"layer2"},[n._v("Réjon")]),n._v(" "),e("h1",{staticClass:"layer3"},[n._v("Réjon")]),n._v(" "),e("h1",{staticClass:"layer4"},[n._v("Réjon")]),n._v(" "),e("h2",[n._v("Taylor-Foster")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"sub-title"},[e("p",[n._v("Developer")]),n._v(" "),e("p",[n._v("•")]),n._v(" "),e("p",[n._v("Designer")]),n._v(" "),e("p",[n._v("•")]),n._v(" "),e("p",[n._v("All Around Mad Scientist")])])}],!1,null,null,null);t.default=component.exports}}]);