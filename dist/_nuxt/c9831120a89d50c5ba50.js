(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(t,n,e){var content=e(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("0b378d90",content,!0,{sourceMap:!1})},193:function(t,n,e){"use strict";var o=e(187);e.n(o).a},194:function(t,n,e){(t.exports=e(11)(!1)).push([t.i,"/*\r\nDefinitions and Such Go Here\r\n*/\n.contact .particles {\n  position: absolute;\n  z-index: 100;\n  top: 36%;\n  left: -11px;\n  transform: rotate(25deg);\n}\n.contact .particles > svg {\n  position: absolute;\n  transform-origin: right;\n  filter: drop-shadow(0 11px 25px rgba(11, 11, 61, 0.61));\n}\n.contact .behind-text {\n  position: fixed;\n  color: #1e1d69;\n  font-size: 11vw;\n  right: 3vw;\n  top: 3vw;\n  left: 3vw;\n  white-space: nowrap;\n  opacity: 0.2;\n}\n.center-line {\n  position: fixed;\n  width: 1px;\n  height: 100vh;\n  left: 50vw;\n  background: teal;\n}\n.container {\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  flex-direction: column;\n  pointer-events: none;\n}\n.contact {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.side-card {\n  display: inline-block;\n  margin-right: 2.5vw;\n  position: relative;\n}\n.contact .side-card .text {\n  position: absolute;\n  z-index: 1;\n  color: #f9f7f4;\n  font-size: 1em;\n  left: -130px;\n  bottom: 30px;\n}\n.contact .side-card .text > h1 {\n  position: relative;\n  font-size: 6em;\n  text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);\n}\n.contact .side-card .text > h1:first-of-type {\n  left: 0;\n  top: 66px;\n}\n.contact .side-card .text > h1:last-of-type {\n  left: 35px;\n  top: 11px;\n}\n.contact .side-card .image-holder {\n  width: 360px;\n  height: 560px;\n  position: relative;\n  overflow: hidden;\n}\n.contact .side-card .image-holder .background {\n  background: linear-gradient(32deg, #6c15b5, #5a04a2, #e4259b);\n  background-size: 100% 164%;\n  background-position: top right;\n  border-radius: 6px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 85%;\n  box-shadow: 0 10px 20px rgba(12, 5, 47, 0.19), 0 6px 6px rgba(10, 9, 44, 0.23);\n}\n.contact .side-card .image-holder img {\n  width: 130%;\n  position: absolute;\n  right: -110px;\n  bottom: -140px;\n}\n.contact .side-card .text > * > span,\n.contact .behind-text > span {\n  position: relative;\n  display: inline-block;\n}\n.contact .copy {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  margin-left: 2.5vw;\n  font-size: 1.64em;\n  color: #f9f7f4;\n  align-self: center;\n}\n.contact .copy a {\n  color: #f9f7f4;\n  pointer-events: all;\n}\n.socialLinks {\n  list-style-type: none;\n  padding: 0;\n  pointer-events: all;\n}\n.socialLinks li {\n  display: inline-block;\n  width: 55px;\n  height: 55px;\n  position: relative;\n  top: 0;\n  margin-right: 0.25em;\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s;\n}\n.socialLinks li:hover {\n  transform: scale(1.32);\n}\n@media screen and (max-width: 1290px) and (min-width: 786px) {\n.contact .particles {\n    left: unset;\n    right: 42%;\n}\n.contact .behind-text {\n    top: unset;\n}\n.contacts .container {\n    min-height: calc(100vh - 78px);\n    margin-top: 78px;\n}\n.contact {\n    display: block;\n    padding-top: 0;\n    justify-content: unset;\n    position: relative;\n    width: 100%;\n}\n.contact .side-card {\n    margin-right: 0;\n    position: relative;\n    width: 100%;\n    margin-left: 0;\n    max-width: 782px;\n}\n.contact .side-card .text {\n    left: 7%;\n    bottom: 20px;\n}\n.contact .side-card .image-holder {\n    width: 100%;\n    height: 400px;\n    position: relative;\n    overflow: hidden;\n    margin: auto;\n}\n.contact .side-card .image-holder .background {\n    width: 100%;\n    height: 60%;\n}\n.contact .side-card .image-holder img {\n    width: 348px;\n    right: -50px;\n    bottom: -128px;\n    display: inline-block;\n}\n.contact .copy {\n    display: block;\n    margin: auto;\n    margin-top: 2em;\n    width: 84%;\n    text-align: center;\n}\n}\n@media screen and (max-width: 786px) and (min-width: 539px) {\n.contact .side-card .text {\n    font-size: 24px !important;\n}\n.contact .side-card .image-holder img {\n    max-width: 684px !important;\n    right: 0 !important;\n}\n.contact .particles {\n    display: none;\n}\n}\n@media screen and (max-width: 786px) {\n.contact {\n    display: block;\n}\n.contact .particles {\n    top: 34%;\n    left: -2%;\n    transform: scale(1.3) rotate(20deg);\n}\n.contact .side-card {\n    margin-right: 0;\n    overflow: hidden;\n}\n.contact .side-card .text {\n    width: 100%;\n    left: 50%;\n    bottom: 11vh;\n    font-size: 4vw;\n    transform: translateX(-50%);\n}\n.contact .side-card .text > h1:first-of-type {\n    left: -25px;\n    display: inline-block;\n}\n.contact .side-card .text h1:last-of-type {\n    left: 7px;\n    display: inline-block;\n}\n.contact .side-card .image-holder {\n    width: 100vw;\n    height: 100vh;\n}\n.contact .side-card .image-holder .background {\n    border-radius: 0;\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(692deg, #e4259b, #df0077, #6c15b5);\n    background-size: 100% 134%;\n}\n.contact .side-card .image-holder img {\n    width: 119%;\n    right: -120px;\n    bottom: -45px;\n    max-width: 837px;\n}\n.contact .side-card .scroll-cta {\n    position: absolute;\n    bottom: -85px;\n    border: 3px solid #f9f7f4;\n    width: 43vw;\n    height: 43vw;\n    max-width: 164px;\n    max-height: 164px;\n    transform: translateX(-50%);\n    left: 50%;\n    border-radius: 100%;\n    z-index: 100;\n    pointer-events: all;\n}\n@keyframes spinner {\nfrom {\n      -moz-transform: rotateY(0deg);\n      -ms-transform: rotateY(0deg);\n      transform: rotateY(0deg);\n}\nto {\n      -moz-transform: rotateY(-360deg);\n      -ms-transform: rotateY(-360deg);\n      transform: rotateY(-360deg);\n}\n}\n.contact .side-card .scroll-cta svg {\n    filter: drop-shadow(0 11px 25px rgba(11, 11, 61, 0.61));\n    position: relative;\n    top: 3%;\n    animation-name: spinner;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-duration: 3.64s;\n}\n.contact .copy {\n    padding: 1em;\n    margin: 0;\n    margin-top: 1em;\n    padding-bottom: 2.5em;\n    padding-top: 0;\n    font-size: 1.45em;\n    width: 100%;\n    text-align: center;\n}\n.contact .behind-text {\n    word-break: break-word;\n    position: fixed;\n    color: #1e1d69;\n    opacity: 0.2;\n    text-align: left;\n    z-index: -1;\n    line-height: 11vh;\n    white-space: nowrap;\n    top: unset;\n    font-size: 23vw;\n    left: 50%;\n    transform: translateX(-50%);\n    right: unset;\n    bottom: 4vh;\n}\n.next-up {\n    display: block;\n    text-align: left;\n    padding: 1.4em;\n    z-index: 10;\n    color: #f9f7f4;\n    pointer-events: all;\n}\n.next-up h2 {\n    font-size: 11vw;\n}\n.next-up a {\n    color: #f9f7f4;\n    text-decoration-color: rgba(255, 255, 255, 0.3);\n}\n.next-up p {\n    font-size: 30px;\n    margin-bottom: .5em;\n}\n}\n",""])},204:function(t,n,e){"use strict";e.r(n);var o=e(68),r=e.n(o),c={head:function(){return{title:"Get in Touch! ✦ Réjon Taylor-Foster",meta:[{hid:"description",name:"description",content:"Like what you see? Let's make something great together."}]}},data:function(){return{animeStore:{}}},mounted:function(){null!==this.$store.state.headerAnime&&"index"===this.$store.state.oldPage&&(this.$store.state.headerAnime.direction="normal",this.$store.state.headerAnime.play());var t=this.$el.querySelector(".contact"),n=t.querySelector(".behind-text"),e=t.querySelector(".side-card .text h1:first-of-type"),o=t.querySelector(".side-card .text h1:last-of-type"),c=t.querySelector(".image-holder .background"),l=t.querySelector(".image-holder img"),d=t.querySelector(".copy"),h=t.querySelector(".side-card .particles svg:nth-child(1)"),m=t.querySelector(".side-card .particles svg:nth-child(2)"),f=t.querySelector(".side-card .particles svg:nth-child(3)"),x=t.querySelector(".side-card .scroll-cta");r()(e),r()(o),r()(n),e=(e=[].slice.call(e.querySelectorAll("span"))).filter(function(t){return" "===t.textContent&&(t.textContent=String.fromCharCode(8194),t.style.width=".35ch"),t}),n=n.querySelectorAll("span"),o=o.querySelectorAll("span"),this.animeStore=this.$anime.timeline({loop:!1,autoplay:!0}),window.innerWidth>786&&this.animeStore.add({targets:n,opacity:[0,1],color:["#f9f7f4","#1e1d69"],translateX:[64,0],easing:"easeOutQuart",duration:900,delay:function(t,i){return 520+64*i}},"-=640"),this.animeStore.add({targets:e,opacity:[0,1],translateX:[64,0],easing:"easeOutQuart",duration:1e3,delay:function(t,i){return 320+32*i}},64).add({targets:o,opacity:[0,1],translateX:[64,0],easing:"easeOutQuart",duration:1e3,delay:function(t,i){return 320+32*i}},120).add({targets:c,opacity:[0,1],scale:[0,1],easing:"easeOutQuart",duration:800},220).add({targets:l,opacity:[0,1],translateX:[64,0],scaleX:[-1,-1],easing:"easeOutQuart",duration:800},400).add({targets:d,opacity:[0,1],translateY:[160,0],easing:"easeOutQuart",duration:800},520).add({targets:h,scale:[0,.9],translateX:[30,30],translateY:[-20,-20],rotate:32,duration:900,easing:"easeOutBack"},480).add({targets:m,scale:[0,.8],translateX:[30,30],translateY:[0,0],rotate:0,duration:900,easing:"easeOutBack"},530).add({targets:f,scale:[0,.9],translateX:[30,30],translateY:[20,20],rotate:-32,duration:900,easing:"easeOutBack"},590).add({targets:x,translateY:[40,0],translateX:["-50%","-50%"],scale:[0,1],duration:900,easing:"easeOutQuart"},400)}},l=(e(193),e(14)),component=Object(l.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"contacts container"},[e("section",{staticClass:"contact"},[e("h1",{staticClass:"behind-text"},[t._v("Contact")]),t._v(" "),e("div",{staticClass:"side-card"},[t._m(0),t._v(" "),e("div",{staticClass:"particles"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"76",height:"76",viewBox:"0 0 24 24",fill:"none",stroke:"#f9f7f4","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}},[e("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"76",height:"76",viewBox:"0 0 24 24",fill:"none",stroke:"#f9f7f4","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}},[e("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"76",height:"76",viewBox:"0 0 24 24",fill:"none",stroke:"#f9f7f4","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}},[e("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])]),t._v(" "),e("div",{staticClass:"image-holder"},[e("div",{staticClass:"background"}),t._v(" "),e("img",{attrs:{src:"/Images/contact.png","data-src":"/Images/contact.png",alt:"Rejon sliding in to request a call"}})]),t._v(" "),e("div",{staticClass:"mobile-only scroll-cta"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"76",height:"76",viewBox:"0 0 24 24",fill:"none",stroke:"#f9f7f4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"arcs"}},[e("path",{attrs:{d:"M6 9l6 6 6-6"}})])])]),t._v(" "),t._m(1)])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"text"},[n("h1",[this._v("Get in")]),this._v(" "),n("h1",[this._v("Touch")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"copy"},[t._v("\n      Let's make something great together.\n      "),e("br"),e("br"),t._v(" "),e("a",{attrs:{href:"mailto:rejon@maximumcrash.com"}},[t._v("rejon@maximumcrash.com")]),t._v(" "),e("br"),e("br"),t._v(" "),e("ul",{staticClass:"socialLinks"},[e("li",[e("a",{attrs:{href:"https://www.linkedin.com/in/rtaylorfoster/",rel:"noopener",target:"_blank"}},[e("img",{attrs:{src:"/Images/linkedIn_contact.svg"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/Maximum_Crash",rel:"noopener",target:"_blank"}},[e("img",{attrs:{src:"/Images/twitter_contact.svg"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://archive.maximumcrash.com/",rel:"noopener",target:"_blank"}},[e("img",{attrs:{src:"/Images/archive_contact.svg"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://maximumcrash.com/",rel:"noopener",target:"_blank"}},[e("img",{attrs:{src:"/Images/crash_contact.svg"}})])])])])}],!1,null,null,null);n.default=component.exports}}]);