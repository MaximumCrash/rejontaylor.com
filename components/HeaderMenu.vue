<template>
  <div :class="open ? 'header-menu open' : 'header-menu'">
       <div :class="showFader ? 'fader' : 'fader hide'"></div>
       <div class="back-closer" @mouseup="closeMenu"></div>
       <div class="icon" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
       </div>

       <div class="links">
            <div class="backdrop"></div>
          <nuxt-link @click.native="closeMenu" :class="{'active': (activePage.page === 'about')}" to="/about">About</nuxt-link>
          <nuxt-link @click.native="closeMenu" :class="{'active': (activePage.page === 'works')}" to="/works">Works</nuxt-link>
          <nuxt-link @click.native="closeMenu" :class="{'active': (activePage.page === 'contact')}" to="/contact">Contact</nuxt-link>
       </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';

     export default {
          props:['activePage'],
          data() {
               return {
                    open: false,
                    showFader: false
               }
          },
          methods: {
               toggleMenu() {
                    this.open = !this.open; 

               },
               closeMenu() {
                    this.open = false; 
               }
          },
          updated() {
               if (this.activePage.page === 'index') {
                    this.open = false;
               }
          },
          mounted() {
               window.addEventListener('scroll', debounce(() => {
                    if (this.open) {
                         this.closeMenu();
                    }
                    
                    if (this.activePage.page === 'works') {
                         this.showFader = window.scrollY > window.innerHeight * .3;
                    }
                    else {
                         this.showFader = window.scrollY > window.innerHeight;
                    }
                    
               }, 100))
          },
          beforeDestroy() {
               window.removeEventListener('scroll', () => this.closeMenu())
          }
     }
</script>

<style lang="scss">
@import '~/assets/main.scss';
.header-menu {
     position:fixed; 
     right: 0; 
     top: 0; 
     pointer-events: none; 

}

.header-menu .back-closer {
     width: 100vw; 
     left: 0; 
     top: 0; 
     height: 100vh;
     position:fixed; 
     pointer-events: all;  
}

.header-menu:not(.open) .back-closer {
     pointer-events: none; 
}

.header-menu .icon {
     position: relative; 
     height:14vw; 
     width: 14vw; 
     padding: 0vw;
     margin: auto; 
     margin-top: 8px; 
     margin-right: 8px; 
     max-height: 46px; 
     max-width: 46px; 
     min-width:42px;
     min-height: 42px;
     border: 3px solid $white; 
     border-radius: 100%; 
}

.header-menu .icon svg {
     position: absolute; 
     height: 64%; 
     width: 64%;
     left: 50%; 
     top: 50%; 
     transform: translate(-50%,-50%); 
     transform-origin: center;
}

.header-menu .icon > svg:last-of-type {
     opacity: 0;
     transform: rotate(180deg) translate(-50%, -50%);
     transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
}

.header-menu .icon > svg:first-of-type {
     opacity: 1; 
     transform: rotate(0deg) translate(-50%, -50%);
     transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
}

.header-menu.open .icon > svg:last-of-type {
     opacity:1; 
     transform: rotate(0deg) translate(-50%, -50%);
     transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
}

.header-menu.open .icon > svg:first-of-type {
     opacity: 0; 
     transform: rotate(180deg) translate(-50%, -50%);
     transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .2s;
}

.header-menu .links {
     position: fixed; 
     width: 80vw; 
     max-width: 364px; 
     height: auto; 
     padding: 1em; 
     left: 50%; 
     top: 50%; 
     opacity: 0;
     pointer-events: none; 
     transform: translate(-50%, -40%);
     border-radius: 8px; 
     text-align: center; 
     box-shadow: 0 10px 20px rgba(12, 5, 47, 0.19), 0 6px 6px rgba(10, 9, 44, 0.23);
     transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.header-menu.open .links {
     pointer-events: all; 
     opacity: 1; 
     transform: translate(-50%, -50%);
     transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.header-menu .links a {
     font-size: 29px;
     text-decoration: none; 
     color: $white; 
     font-weight: normal; 
     display: block; 
     padding: 2vh; 
     z-index: 1000;
     text-shadow: 0 4px 7px #0101093d;
}

.header-menu .links a.active {
     font-weight: 600; 
}


.header-menu .links .backdrop {
     background: rgba(5, 5, 27, 0.85);   
     width: 100%;
     height: 100%;
     opacity: 0; 
     transform: translateY(20px);
     transition: all .2s cubic-bezier(0.165, 0.84, 0.44, 1); 
     position: absolute;
     left: 0; 
     top: 0; 
     border-radius: 8px;       
}

.header-menu.open .links .backdrop {
     opacity: 1;
     transform: translateY(0);
     transition: all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
}

.header-menu .fader {
         height: 20vh;
         max-height: 120px;
    position: fixed;
    width: 100%;
    background: linear-gradient(to bottom, #08073f, #02021400);
    left: 0;
    opacity: 1; 
    z-index: -10;
    transform: translateY(0%);
    transition: all .2s ease;
}

.header-menu .fader.hide {
     opacity: 0; 
     transform: translateY(-100%);
     transition: all .2s ease;
}

@supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))) {
     .header-menu .links .backdrop {
          background: rgba(5, 5, 27, 0.4);
          -webkit-backdrop-filter: blur(2em);
          backdrop-filter: blur(2em);
     }
}

@media screen and (max-width: $breakPoint-mobile) {
     .header-menu {
          pointer-events: all;
     }
}

@media screen and (min-width: $breakPoint-mobile) {
     .header-menu {
          display: none; 
          pointer-events: none; 
     }
}

@media screen and (max-width: $breakPoint-mobile) and (min-width: 539px) {
.header-menu .links a {
     font-size: 5vw; 
}
}
</style>
