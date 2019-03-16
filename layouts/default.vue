<template>
  <div class="app">
    <parallax-container class="bg not-mobile">
      <parallax-element class="dot-parallax" :parallaxStrength="100" :type="'translation'">
        <div class="dot-layer-0"></div>
      </parallax-element>
      <parallax-element class="dot-parallax" :parallaxStrength="72" :type="'translation'">
        <div class="dot-layer-1"></div>
      </parallax-element>
      <parallax-element class="dot-parallax" :parallaxStrength="50" :type="'translation'">
        <div class="dot-layer-2"></div>
      </parallax-element>
    </parallax-container>
    <div class="bg mobile-only">
      <div class="dot-layer-0 rellax" data-rellax-speed="-10">
        </div>
        <div class="dot-layer-1 rellax" data-rellax-speed="-5">
        </div>
        <div class="dot-layer-2 rellax" data-rellax-speed="-2">
          </div>
    </div>
    <header class="header" >
      <nuxt-link to="/" @click.native="hideHeader"><h2>Réjon</h2></nuxt-link>
      <div class="links">
        <nuxt-link :class="{'active': (page === 'about')}" to="/about">About</nuxt-link>
        <nuxt-link :class="{'active': (page === 'works')}" to="/works">Works</nuxt-link>
        <nuxt-link :class="{'active': (page === 'contact')}" to="/contact">Contact</nuxt-link>
      </div>
      <HeaderMenu :activePage="{page}"/>
    </header>
    <nuxt />
  </div>
</template>

<script>
import charming from 'charming';
import {mapState} from 'vuex';
import Rellax from 'rellax';
import HeaderMenu from '~/components/HeaderMenu.vue';

export default {
  components: {
    HeaderMenu
  },
  computed: mapState(['page']),
  mounted() {
      var rellax = new Rellax(".rellax");
    let headerName = this.$el.querySelector('header h2');
    charming(headerName)
    headerName.style.opacity = 1
    let headerNameTargets = headerName.querySelectorAll('span')
    headerNameTargets[0].innerText += 'e'

    let links = this.$el.querySelectorAll('header .links a');
    let headerMenu = this.$el.querySelector('header .header-menu').querySelector('.icon');
    let initialPage = this.$store.state.page; 
    let headerAnime = this.$anime.timeline({ autoplay: initialPage !== 'index'})
    
    headerAnime.add({
      targets: headerNameTargets,
      opacity: [0, 1],
      translateX: [160, 0],
      easing: 'easeOutQuart',
      duration: 450,
      delay: function(el, i) {
        return 60 + 64 * i
      },
    }).add({
      targets: links,
      opacity: [0, 1],
      translateX: [160, 0],
      easing: 'easeOutQuart',
      duration: 450,
      delay: function(el, i) {
        return 60 + 64 * i
      }
    }, '-=320')
    .add({
      targets: headerMenu,
      scale:[0, 1],
      easing: 'easeOutBack',
      duration: 450
    }, '-=640')
    ;

    this.$store.commit('setAnime', headerAnime);
  },
  methods: {
    hideHeader() {
      this.$store.state.headerAnime.direction = "reverse";
      this.$store.state.headerAnime.play();
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/main.scss';

* {
  -webkit-overflow-scrolling:  touch; 
}
.app {
  position: relative; 
  background: $pageGradient;
  background-attachment: fixed;
  background-size: 100% 100%; 
  overflow: hidden;
}

header {
  position: fixed;
  opacity: 1;
  pointer-events: all;
  z-index: 100; 
}

header > a {
  display: inline-block;
}

header h2 {
  color: $white;
  font-size: 3.2em;
  margin-left: 0em;
  position: relative; 
  left: -16px; 
  opacity: 0;
  text-shadow: 0 4px 7px #0101093d;
}

header h2 span {
  position: relative;
  display: inline-block;
  vertical-align: top;
}

header h2 span:first-of-type {
  left: 33px;
  width: 2ch;
  overflow: hidden;
  letter-spacing: 84px;
}

header > .links {
  display: inline-block;
  font-size: 1.4em; 
}

header > .links a {
  color: $white; 
  text-decoration: none; 
  margin-left: .5em; 
  margin-right: .5em; 
  padding: .1em;
  position: relative;
  display: inline-block;
  text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);
}

header > .links a::before {
    content: '';
    height: 110%;
    width: 0%;
    left: 50%;
    top: 50%;
    position: absolute;
    z-index: -10;
    transform: translate(-50%, -50%) skew(-10deg);
    transition: all ease-out .2s;
  }

  header > .links a:hover::before {
    width: 120%; 
    transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .1s;
  }

  header > .links a:not(.active)::after {
    content: '';
    position: absolute; 
    transform-origin: center;
    width: 0; 
    height: 2px;
    background: $white;
    left: 0;
    bottom: 0;
    transition: all .1s ease;
  }

  header > .links a.active::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: $white;
    left: 0;
    bottom: 0;
    transition: all .1s ease;
}

  header > .links a:nth-child(1)::before {
    background: $theme0;
  }

  header > .links a:nth-child(2)::before {
    background: $theme2;
  }

  header > .links a:nth-child(3)::before { 
    background: $theme4;
  }

.bg {
  position: absolute;
  z-index: 0; 
  left: 0; 
  top: 0; 
  height: 100%; 
  width: 100%; 
  pointer-events: none; 
}

.dot-layer-0 {
    background-image: $pageDots-0; 
    background-size: $dotSize-0;
    background-attachment: fixed; 
    height:100%; 
    width:100%;
    position: absolute;
  }

  .dot-layer-1 {
    background-image: $pageDots-1; 
    background-size: $dotSize-1;
    background-attachment: fixed; 
    height:100%; 
    width:100%;
    position: absolute;
  }

  .dot-layer-2 {
    background-image: $pageDots-2; 
    background-size: $dotSize-2;
    background-attachment: fixed;
    height:100%; 
    width:100%;
    position: absolute;
  }



html {
  font-family: 'Gibson', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1 {
  font-family: 'Brother-1816-Black-Italic';
  -moz-font-feature-settings:"swsh" 1; 
-ms-font-feature-settings:"swsh" 1; 
-o-font-feature-settings:"swsh" 1; 
-webkit-font-feature-settings:"swsh" 1; 
font-feature-settings:"swsh" 1;
font-size: 7em;
}

h2 {
  font-family: 'Brother-1816-ExtraBold-Italic';
    -moz-font-feature-settings:"swsh" 1; 
-ms-font-feature-settings:"swsh" 1; 
-o-font-feature-settings:"swsh" 1; 
-webkit-font-feature-settings:"swsh" 1; 
font-feature-settings:"swsh" 1;
}

h3, h4 {
  font-family: 'Brother-1816-Regular-Italic';
}

p {
  font-family: 'Gibson';
}

.nuxt-progress {
  background: linear-gradient(to right, $theme0, $theme1, $theme2, $theme3, $theme4) !important; 
  height: 4px !important;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.parallax-container {
  pointer-events: all; 
}


.parallax-element {
  width: 100%; 
  height: 100%; 
  position: absolute;
}

.mobile-only {
  display: none; 
}

.page-enter-active, .page-leave-active {
     transition: all cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
}

.page-enter, .page-leave-active {
     opacity: 0;
     transform: translateY(40px);
}

 .scroll-up {
       position: fixed; 
       width: 60px; 
       height: 60px; 
       right: 5vw;
       bottom: 10px;
       transform: translateY(-10px) scale(0.8);
       opacity: 1; 
       pointer-events: all; 
       cursor:pointer; 
       transform-origin: right;
       transition: all .32s cubic-bezier(0.075, 0.82, 0.165, 1);
     }

     .scroll-up svg {
       width: 100%; 
       height: 100%;
     }

     .scroll-up.hide {
       transform: translateY(0px) scale(0.8);
       opacity: 0; 
       transition: all .32s cubic-bezier(0.075, 0.82, 0.165, 1);
     }

    @media screen and (min-width: $breakPoint-tablet) {
      .scroll-up:not(.hide):hover {
        transform: translateY(-15px);
        transition: all .2s ease;
      }
    }


@media screen and (max-width: $breakPoint-tablet) and (min-width: $breakPoint-mobile) { 
  header {
    position: relative;
  }
}

@media screen and (max-width: $breakPoint-mobile) {
  .not-mobile {
  display: none; 
}
.mobile-only {
  display: initial;
}

  .bg.mobile-only .dot-layer-0, 
  .bg.mobile-only .dot-layer-1,
  .bg.mobile-only .dot-layer-2 {
    background-attachment:initial;
  }

  header {
    z-index: 1000; 
  }

  header > .links {
    display: none; 
    pointer-events: none; 
  }

  header h2 {
    font-size: 2.64em;
  }

  header h2 span:first-of-type {
    left: 27px;
  }

  header > a {
    position: relative; 
    left: -5px; 
    top: -5px;
    z-index: 10;
  }
  
}

</style>
