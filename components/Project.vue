<template>
     <div :class="projectClass" data-aos="fade-up" data-aos-once="true" :data-aos-id="'project-' + index" data-aos-anchor-placement="top-bottom">
         
         <div class="heading" v-on:click="toggleProject">
          <div :class="shouldShowTitle ? 'title' : 'title hide'">
              <h1 v-html="title"> </h1>
          </div>
          <div class="slides">
               <div class="slide0"></div>
               <div class="slide1"></div>
               <div class="slide2"></div>
               <div class="slide3"></div>
               <div class="slide4"></div>
          </div>
          <div class="image" :style="{backgroundImage: `url(${image})`, backgroundPosition: bgPos}"></div>
          
          <div class="more-arrow left">
               <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          
          </div>
          <div class="more-arrow right">
               <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </div>
          </div>
          <div class="project-copy" v-html="content">
          </div>
     </div>
</template>
<script>
import charming from 'charming';

export default {
     props:['index', 'title', 'image', 'content', 'link', 'bgPos', 'shouldShowTitle'],
     data() {
          return {
                   animeStore: {},
                   open: false,
                   dirty: false
                   }
     },
     computed: {
          projectClass: function () {
               return {
                    open: this.open,
                    dirty: this.dirty,
                    project: true
               }
          }
     },
     methods: {
          toggleProject() {
               if (!this.open) {
                window.scrollTo({
                    top: this.$el.offsetTop - 32, 
                    behavior: 'smooth'
               })
               }
              

               this.open = !this.open;
               this.dirty = true;
               
          }
     },
     mounted() {
          let isOnScreen = this.$el.offsetTop <= window.innerHeight;
          this.animeStore = this.$anime.timeline({loop: false, autoplay: isOnScreen})
          
          let slides =  this.$el.querySelectorAll('.slides div')
          let image = this.$el.querySelector('.image');
          
          let text = this.$el.querySelector('.title h1');
          charming(text);
          text = [].slice.call(text.querySelectorAll('span'));

          text = text.filter(el => {
               if (el.textContent === ' ') {
                    el.textContent = String.fromCharCode(8194);
                    el.style.width = ".35ch";
               }

               return el;
          })
          
          slides.forEach((ele, index) => {



               this.animeStore.add({
                    targets: ele,
                    translateX: ['-120%', '120%'],
                    skew: ['-16deg', '-16deg'],
                    easing: 'easeOutExpo',
                    duration: 1200, 
                    update: function(anim) {
                         if (index == 0 && anim.progress > 30) {
                              image.style.opacity = 1; 
                         }
                    }
               }, 300 + 100 * index)
          })

          if (window.innerWidth > 768) {
               this.animeStore.add({
               targets: text,
               opacity: [0, 1],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 700,
        delay: function(el, i) {
          return 190 + 32 * i
        }
          }, 68)
          }
          document.addEventListener('aos:in:' + 'project-' + this.index, ({detail}) => {
               this.animeStore.play();
          })
     }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
     .project {
          width: 100%; 
          position: relative;
          margin-bottom: 1.64em;
          
          
          
          transition: all .2s ease; 
          pointer-events: all;

     }

     .heading {
          position: relative;
          width:100%; 
          height: 30vh;
          cursor: pointer; 
          transform: translateY(0px);
          box-shadow: 0 0px 0px hsla(250, 81%, 5%, 0.33), 0 0px 0px hsla(250, 81%, 5%, 0.33);
          transition: all .2s ease; 
     }

     .project:not(.open) .heading:hover {
          transform: translateY(-16px);
          box-shadow: 0 19px 28px hsla(250, 81%, 5%, 0.48), 0 15px 12px hsla(250, 81%, 5%, 0.48);
          transition: all .2s ease; 
     }

     .project.open .heading {
          height: 42vh; 
          transition: all .2s cubic-bezier(0.165, 0.84, 0.44, 1);
     }

     .project.open .title {
          opacity: 0;
          transition: opacity .2s cubic-bezier(0.165, 0.84, 0.44, 1);
     }

     .title {
          color: $white; 
          position: absolute; 
          bottom: 5px; 
          left: 10px; 
          text-align: left; 
          z-index: 2;
          opacity: 1; 
          white-space: nowrap; 
          transition: opacity .2s cubic-bezier(0.165, 0.84, 0.44, 1);
     }

     .title.hide {
          display: none;
     }

     .title h1 {
          font-size: 3.64em;
          
          text-shadow: 0 6px 9px rgba(11, 11, 61, 0.7), -1px 0 rgba(11, 11, 61, 0.7), 0 1px rgba(11, 11, 61, 0.7), 1px 0 rgba(11, 11, 61, 0.7), 0 -1px rgba(11, 11, 61, 0.7);
     
          /deep/ br { 
               display:none;
          }
     }

     

     .title p {
          font-size: 1.32em;
     }

     .slides {
          width: 100%; 
          height: 100%; 
          position:absolute;
          overflow: hidden; 
          z-index: 1;
          border-radius: 6px;
     }

     .slides > div {
          width: 100%; 
          height: 100%; 
          position: absolute;
          transform: skew(-16deg) translateX(calc(-100% - 43px));
     }

     .slides .slide0 {
          background: $theme0; 
          z-index: 5; 
     }

     .slides .slide1 {
          background: $theme1; 
          z-index: 4; 
     }

     .slides .slide2 {
          background: $theme2; 
          z-index: 3; 
     }

     .slides .slide3 {
          background: $theme3; 
          z-index: 2; 
     }

     .slides .slide0 {
          background: $theme4; 
          z-index: 1; 
     }

     .image {
          width: 100%; 
          height: 100%; 
          opacity: 0;
          position: absolute;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center; 
          border-radius: 6px;
          z-index:0; 
     }


     .more-arrow {
          position: absolute;
          bottom: 0; 
          z-index: -1; 
          opacity: 0; 
          transition: opacity  cubic-bezier(0.165, 0.84, 0.44, 1) .1s;
     }

     .more-arrow.left {
          left: -60px; 
          transform: translateX(100%);
          transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
     }

     .more-arrow.right {
          right: -60px; 
          transform: translateX(-100%);
          transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
     }
     .project:not(.open) .heading:hover .more-arrow.left,
     .project:not(.open) .heading:hover .more-arrow.right,
     .project.open .heading .more-arrow.left {
          opacity: 1; 
          transform: translateX(0%);
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
     }

     .project.open .heading:hover .more-arrow.left {
          transform: translateX(-10px);
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
     }

     .project .more-arrow svg {
          filter: drop-shadow(0 11px 25px rgba(11, 11, 61, 0.61));
     }

     .project .more-arrow.left svg:last-of-type {
          opacity: 0; 
          transform: rotate(0);
          
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
     }

     .project .more-arrow.left svg:first-of-type,
     .project.open .more-arrow.right svg:first-of-type { 
          opacity: 1;
          transform: rotate(0deg);
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
     }

     .project.open .more-arrow.left svg:last-of-type {
          opacity: 1; 
          transform: rotate(180deg);
          position:absolute;
          left:0;
          top: 0;
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
     }

     .project.open .more-arrow.left svg:first-of-type,
     .project.open .more-arrow.right svg:first-of-type { 
          opacity: 0;
          transform: rotate(180deg);
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
     }

     .project-copy {
          color: $white; 
          transform-origin: top; 
          overflow: hidden;
          text-align: left;
          height:0;
          opacity: 0;
          transform: translateY(-10px);
          font-size: 1.32rem; 
          line-height: 1.8rem;
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
     }

     .project.open .project-copy {
          padding: 1em;
     }

     .project.open .project-copy {
          opacity: 1;
          transform: translateY(0px);
          height: 100%; 
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
     }

     .project-copy {
          /deep/ *{
               margin-bottom: .5em;
          }

          /deep/ a {
               color: $white;
          }
     }

     /*NOTE(Rejon): We need this cause AOS seems to be fading out some elements on close*/
     .project.dirty {
          opacity: 1 !important; 
          transform: translate3d(0,0,0) !important; 
     }

     @media screen and (max-width: $breakPoint-tablet) and (min-width: $breakPoint-mobile) {
          .project:not(.open) .heading:hover .more-arrow.left,
     .project:not(.open) .heading:hover .more-arrow.right {
          opacity: 0;
     }

  .project:not(.open) .heading:hover .more-arrow {
    opacity: 0;
  }

  .project.open .more-arrow.left {
    opacity: 1; 
    left: unset; 
    right: 0; 
    z-index: 100;
    transform: scale(1);
  }

  .project.open .heading:hover .more-arrow.left {
    transform: scale(1.2);
  }
     .heading {
          height: 35vh;
     }
     }

     @media screen and (max-width: $breakPoint-mobile) {
          .project.open .heading { 
                  height: 35vh;
          }


          .title h1 {
               /deep/ br { 
               display:block;
          }
          }          

           .project:not(.open) .heading:hover .more-arrow.left,
     .project:not(.open) .heading:hover .more-arrow.right {
          opacity: 0;
     }

.project:not(.open) .heading:hover .more-arrow {
    opacity: 0;
  }

  .project.open .more-arrow.left {
    opacity: 1; 
    left: unset; 
    right: 0; 
    z-index: 100;
    transform: scale(1);
  }

  .project.open .heading:hover .more-arrow.left {
    transform: scale(1.2);
  }
     .heading {
          height: 35vh;
     }
          .title {
               top: 50%; 
               left: 50%; 
               bottom: unset; 
               width: 95%; 
               text-align: center; 
               word-wrap: break-word;
               transform: translate(-50%, -50%);
               display: none;
          }

          .title h1  {
               font-size: 10.5vw;
          }

          .image {
               background-attachment:unset;
          }
     }
</style>

