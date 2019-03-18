<template>
  <section class="container">
    <section class="home"> 
      <div class="multi title">
        <h1 class="layer0">Réjon</h1>
        <h1 class="layer1">Réjon</h1>
        <h1 class="layer2">Réjon</h1>
        <h1 class="layer3">Réjon</h1>
        <h1 class="layer4">Réjon</h1>
        <h2>Taylor-Foster</h2>
      </div>
      <div class="sub-title">
        <p>Developer</p>
        <p>•</p>
        <p>Designer</p>
        <p>•</p>
        <p>All Around Mad Scientist</p>
      </div>
      <div class="quick-links">
        <nuxt-link class="link-text" to="/about">About</nuxt-link>
        <nuxt-link class="link-text" to="/works">Works</nuxt-link>
        <nuxt-link class="link-text" to="/contact">Contact</nuxt-link>
      </div>

    </section>
  </section>
</template>

<script>
import charming from 'charming';

export default {
  data() {
    return {
      animeStore: {}
    }
  },
  mounted() {
    
    //Define possible animations~!
    let homeSection = this.$el.querySelector(".home");
    let multiCollection = homeSection.querySelector(".multi.title");
    
    this.animeStore = this.$anime.timeline({autoplay: true});

    //First Name Animation element set up. Split into individual characters and animate.
    let firstNameWrappers = multiCollection.querySelectorAll("h1");
    let firstNameLetters = [];

    firstNameWrappers.forEach(element => {
      charming(element);
      element.style.opacity = 1; 
      let target = element.querySelectorAll('span');
      target[0].innerText += 'é'; //Cheat for getting swish on first letter
      
      
      firstNameLetters.push(target);
    });

    let secondNameWrapper = multiCollection.querySelector("h2");
    charming(secondNameWrapper);
    let secondNameLetters = secondNameWrapper.querySelectorAll('span');

    let subTitle = homeSection.querySelector(".sub-title");

    let heroLinks = homeSection.querySelector(".quick-links");

    this.animeStore.add({
        targets: firstNameLetters[0],
        opacity: [0, 1],
        translateX: [320, 0],
        easing: 'easeOutQuart',
        duration: 900,
        delay: function(el, i) {
          if (i == 1) {
            return 320 + 64 - (10 * i)
          }
          return 320 + 64 * i
          
        },
      }, '-=320')
      .add({
        targets: secondNameLetters,
        opacity: [0, 1],
        translateX: [320, 0],
        easing: 'easeOutQuart',
        duration: 470,
        delay: function(el, i) {
          return 180 + 40 * i
        },
      }, 232)
      .add({
        targets: firstNameLetters[1],
        opacity: [0, 1],
        translateX: [320, 0],
        easing: 'easeOutQuart',
        duration: 800,
        delay: function(el, i) {
          return 40 + 64 * i
        },
      }, 32)
      .add({
        targets: firstNameLetters[2],
        opacity: [0, 1],
        translateX: [320, 0],
        easing: 'easeOutQuart',
        duration: 1000,
        delay: function(el, i) {
          return 5 + 64 * i
        },
      }, 64)
      .add({
        targets: firstNameLetters[3],
        opacity: [0, 1],
        translateX: [320, 0],
        easing: 'easeOutQuart',
        duration: 1150,
        delay: function(el, i) {
          return 0.625 + 64 * i
        },
      }, 64)
      .add({
        targets: firstNameLetters[4],
        opacity: [0, 1],
        translateX: [320, 0],
        easing: 'easeOutQuart',
        duration: 1300,
        delay: function(el, i) {
          return 0.078 + 64 * i
        },
      }, 64)
      .add({
        targets: firstNameLetters[5],
        opacity: [0, 1],
        translateX: [320, 0],
        easing: 'easeOutQuart',
        duration: 1450,
        delay: function(el, i) {
          return 0.009 + 64 * i
        },
        complete: function() {
          firstNameWrappers[1].style.display = 'none'; 
          firstNameWrappers[2].style.display = 'none'; 
          firstNameWrappers[3].style.display = 'none'; 
          firstNameWrappers[4].style.display = 'none'; 
        }
      }, 64)
      .add({
        targets: subTitle,
        opacity: [0, 0.8],
        translateY: [80, 0],
        easing: 'easeOutBack',
        duration: 1200,
      }, 120)
      .add({
        targets: heroLinks,
        opacity: [0, 1],
        translateY: [90, 0],
        easing: 'easeOutBack',
        duration: 1000,
        delay: function(el, i) {
          return 64 * i
        },
      }, 264)
  }
}
</script>

<style lang="scss">
@import '~/assets/main.scss';
.center-line {
  position: fixed;
  width: 1px;
  height: 100vh;
  left: 50vw;
  background: teal;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative; 
  overflow: hidden;
  flex-direction: column;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

  .container > section {
    position: relative;
    z-index: 1;
  }

  .multi {
    position: relative;
  }

  .multi > .layer0 {
    color: $white; 
    z-index: 5;
    position: relative;
  }

  .home .multi.title h1 {
    left: 18px;
  }

  .multi > h1 > span,
  .home .multi.title > h2 > span{
    position: relative;
    display: inline-block;
  }

  .home .multi.title > h1 > span:not(:first-of-type) {
    position: relative;
    left: -60px; 
  }

  .home .multi.title > h1 > span:nth-child(2) {
    visibility: hidden;
  }

  .home .multi.title > h2 {
    color: $white; 
    font-size: 2.25em; 
    position: relative;
    display: inline-block; 
    right: -116px; 
    top: -44px; 
    z-index: 10;
  }

  .multi > h1:not(.layer0) {
    position: absolute;
    left: 0; 
    top: 0; 
    width: 100%; 
  }

  .multi .layer1 {
    color: $theme4; 
    z-index: 4; 
  }

  .multi .layer2 {
    color: $theme3; 
    z-index: 3;
  }

  .multi .layer3 {
    color: $theme2;
    z-index: 2; 
  }

  .multi .layer4 {
    color: $theme1; 
    z-index: 1;
  }

  .multi .layer5 {
    color: $theme0; 
    z-index: 0;
  }

  .home .sub-title {
        color: $white;
    display: flex;
    font-size: 1.64em;
    justify-content: space-around;
    width: 110%;
  }

  .quick-links {
    display: flex;
    justify-content: space-around;
    position: relative;
    margin-top: 2em;
    font-size: 1.9em;
  }

  .quick-links > a {
    position: relative;
    font-weight: 600;
    cursor:pointer; 
    text-decoration: none; 
    color: $white; 
    pointer-events: initial;
  }

  .quick-links > a::before {
    content: '';
    height: 110%;
    width: 0%;
    left: 50%;
    top: 50%;
    position: absolute;
    z-index: -10;
    transform: translate(-50%, -50%) skew(0deg);
    transition: all ease-out .2s;
  }

  .quick-links > a:hover::before {
    width: 120%; 
    transform: translate(-50%, -50%) skew(-10deg);
    transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .1s;
  }

  .quick-links > a:nth-child(1)::before {
    background: $theme0;
  }

  .quick-links > a:nth-child(2)::before {
    background: $theme2;
  }

  .quick-links > a:nth-child(3)::before { 
    background: $theme4;
  }

  @media screen and (max-width: $breakPoint-tablet) and (min-width: $breakPoint-mobile) {
    header.header {
      position:absolute !important;
    }
  }

  @media screen and (max-width: $breakPoint-mobile) { 
    .home .multi.title >h1 {
     left: 18px; 
     font-size: 78.25px; 
    }

    .home .multi.title > h1 > span:not(:first-of-type) {
      position: relative;
      left: -40.69px;
    }

    .home .multi.title > h2 {
      left: unset; 
      right: unset; 
      top: -10px; 
      font-size: 31.3px; 
    }

    .home .sub-title {
      display: none; 
    }

    .quick-links {
      flex-direction: column; 
    }

    .quick-links > a {
      padding-top: 2vh; 
      padding-bottom: 2vh; 
    }
  }

  @media screen and (max-width: $breakPoint-mobile) and (min-width: 539px) {
  .home .multi.title > h2 {
    font-size: 6vw; 
  }

  .home .multi.title h1 {
    font-size: 16vw; 
  }

  .home .multi.title > h1 > span:not(:first-of-type) {
    left: -8.5vw;
  }
} 
</style>
