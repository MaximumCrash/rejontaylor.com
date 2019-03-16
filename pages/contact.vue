<template>
  <section class="contacts container">
    <section class="contact"> 
      <h1 class="behind-text">Contact</h1>
      <div class="side-card">
        <div class="text">
          <h1>Get in</h1>
          <h1>Touch</h1>
        </div>  
        <div class="particles">
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#f9f7f4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#f9f7f4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#f9f7f4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
        <div class="image-holder">
          <div class="background"></div>
          <img :src="'/Images/contact.png'" :data-src="'/Images/contact.png'" alt="Rejon sliding in to request a call">
        </div>
        <div class="mobile-only scroll-cta">
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#f9f7f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <p class="copy">
        Let's make something great together.
        </br></br>
        <a href="mailto:rejon@maximumcrash.com">rejon@maximumcrash.com</a>
        </br></br>
        <ul class="socialLinks">
          <li>
            <a href="https://www.linkedin.com/in/rtaylorfoster/" rel="noopener" target="_blank">
              <img src="/Images/linkedIn_contact.svg"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Maximum_Crash" rel="noopener" target="_blank">
              <img src="/Images/twitter_contact.svg"/>
            </a>
          </li>
          <li>
            <a href="https://archive.maximumcrash.com/" rel="noopener" target="_blank">
              <img src="/Images/archive_contact.svg"/>
            </a>
          </li>
          <li>
            <a href="https://maximumcrash.com/" rel="noopener" target="_blank">
              <img src="/Images/crash_contact.svg"/>
            </a>
          </li>
        </ul>
      </p>
    </section>
  </section>
</template>

<script>
import charming from 'charming';

export default {
  head() {
    return {
      title: 'Get in Touch! ✦ Réjon Taylor-Foster',
      meta: [
        {hid: 'description', name: 'description', content: "Like what you see? Let's make something great together."}
      ]
    }
  },
  data() {
    return {
      animeStore: {}
    }
  },
  mounted() {
    if (this.$store.state.headerAnime !== null && this.$store.state.oldPage === "index") 
    {
      
      this.$store.state.headerAnime.direction = "normal";
      this.$store.state.headerAnime.play();
    }

    let page = this.$el.querySelector('.contact');
    let behindText = page.querySelector('.behind-text');
    let profileBackChars = page.querySelector('.side-card .text h1:first-of-type');
    let profileFrontChars = page.querySelector('.side-card .text h1:last-of-type');
    let profileBG = page.querySelector('.image-holder .background');
    let profilePic = page.querySelector('.image-holder img');
    let profileCopy = page.querySelector('.copy');
    let particle0 = page.querySelector('.side-card .particles svg:nth-child(1)');
    let particle1 = page.querySelector('.side-card .particles svg:nth-child(2)');
    let particle2 = page.querySelector('.side-card .particles svg:nth-child(3)');
    let scrollCTA = page.querySelector('.side-card .scroll-cta');

    charming(profileBackChars);
    charming(profileFrontChars);
    charming(behindText);
    profileBackChars = [].slice.call(profileBackChars.querySelectorAll('span'));

          profileBackChars = profileBackChars.filter(el => {
               if (el.textContent === ' ') {
                    el.textContent = String.fromCharCode(8194);
                    el.style.width = ".35ch";
               }

               return el;
          });

    behindText = behindText.querySelectorAll('span');
    profileFrontChars = profileFrontChars.querySelectorAll('span');

    this.animeStore = this.$anime.timeline({loop: false, autoplay: true});

    if (window.innerWidth > 786) {
      this.animeStore.add({
        targets: behindText,
        opacity: [0, 1],
        color: ["#f9f7f4","#1e1d69"],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 900,
        delay: function(el, i) {
          return 520 + 64 * i
        },
      }, '-=640')
    }

    this.animeStore.add({
        targets: profileBackChars,
        opacity: [0, 1],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 1000,
        delay: function(el, i) {
          return 320 + 32 * i
        },
      }, 64)
      .add({
        targets: profileFrontChars,
        opacity: [0, 1],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 1000,
        delay: function(el, i) {
          return 320 + 32 * i
        },
      }, 120)
      .add({
        targets: profileBG,
        opacity: [0, 1],
        scale: [0, 1],
        easing: 'easeOutQuart',
        duration: 800,
      }, 220)
      .add({
        targets: profilePic,
        opacity: [0, 1],
        translateX: [64, 0],
        scaleX: [-1, -1],
        easing: 'easeOutQuart',
        duration: 800,
      }, 400)
      .add({
        targets: profileCopy,
        opacity: [0, 1],
        translateY: [160, 0],
        easing: 'easeOutQuart',
        duration: 800,
      }, 520)
      .add({
        targets: particle0,
        scale: [0, 0.9],
        translateX: [30, 30], 
        translateY: [-20,-20],
        rotate: 32,
        duration: 900, 
        easing: 'easeOutBack'
      }, 480)
      .add({
        targets: particle1,
        scale: [0, 0.8],
        translateX: [30,30], 
        translateY: [0,0], 
        rotate: 0,
        duration: 900, 
        easing: 'easeOutBack'
      }, 530)
      .add({
        targets: particle2,
        scale: [0, 0.9],
        translateX: [30,30], 
        translateY: [20,20], 
        rotate: -32,
        duration: 900, 
        easing: 'easeOutBack'
      }, 590)
      .add({
        targets: scrollCTA, 
        translateY: [40, 0],
        translateX: ['-50%', '-50%'],
        scale: [0, 1],
        duration: 900,
        easing: 'easeOutQuart'
      }, 400)
  }
}
</script>

<style lang="scss">
@import '~/assets/main.scss';
.contact .particles {
  position: absolute; 
  z-index: 100; 
  top: 36%; 
  left: -11px; 
  transform: rotate(25deg);
}

.contact .particles > svg {
  position: absolute;
  transform-origin: right;
  filter: drop-shadow(0 11px 25px rgba(11, 11, 61, 0.61));
}

.contact .behind-text {
      position: fixed;
    color: #1e1d69;
    font-size: 11vw;
    right: 3vw;
    top: 3vw;
    left: 3vw;
    white-space: nowrap;
    opacity: 0.2;
}
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
  pointer-events: none; 
}

.contact {
  display: flex;
  justify-content: center;
  position: relative;
}

.side-card {
  display: inline-block; 
  margin-right: 2.5vw; 
  position: relative; 
}

.contact .side-card {
  .text {
    position: absolute;
    z-index: 1; 
    color: $white; 
    font-size: 1em; 
    left: -130px; 
    bottom: 30px; 
  }

  .text > h1 {
    position: relative; 
    font-size: 6em; 
    text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);
  }

  .text > h1:first-of-type {
    left: 0; 
    top: 66px; 
  }

  .text > h1:last-of-type {
    left: 35px; 
    top: 11px; 
  }

  .image-holder {
    width: 360px; 
    height: 560px; 
    position: relative; 
    overflow: hidden;
  }

  .image-holder .background {
    background: linear-gradient(32deg, #6c15b5, #5a04a2, #e4259b);
    background-size: 100% 164%;
    background-position: top right;
    border-radius: 6px;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 85%; 
    box-shadow: 0 10px 20px rgba(12, 5, 47, 0.19), 0 6px 6px rgba(10, 9, 44, 0.23);
  }
  .image-holder img {
    width: 130%; 
    position: absolute;
    right: -110px; 
    bottom: -140px;
  }
}

.contact .side-card .text > * > span,
.contact .behind-text > span {
    position: relative;
    display: inline-block;
  }

.contact .copy {
  display: inline-block; 
  width: 100%; 
  text-align: left; 
  margin-left: 2.5vw; 
  font-size: 1.64em; 
  color: $white; 
  align-self: center;
}

.contact .copy a {
  color: $white; 
  pointer-events: all;
}

.socialLinks {
  list-style-type: none;
  padding: 0; 
  pointer-events: all; 
}

.socialLinks li {
  display: inline-block; 
  width: 55px; 
  height: 55px; 
  position: relative; 
  top: 0;
  margin-right: 0.25em; 
  cursor: pointer;
  
  transform: scale(1);
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
}

.socialLinks li:hover {
  transform: scale(1.32);
}

@media screen and (max-width: $breakPoint-tablet) and (min-width: $breakPoint-mobile) {
  .contact .particles {
    left: unset; 
    right: 42%;
  }
  
  .contact .behind-text {
    top:unset;
  }

  .contacts .container {
    min-height: calc(100vh - 78px);
     margin-top:78px;
  }

  .contact {
    display: block; 
    padding-top: 0; 
    justify-content: unset; 
    position: relative;
    width: 100%; 
  }

  .contact .side-card {
    margin-right: 0;
    position: relative; 
    width: 100%; 
    margin-left: 0; 
    max-width: 782px;
  }

  .contact .side-card .text {
    left: 7%; 
    bottom: 20px; 
  } 

  .contact .side-card .image-holder {
    width: 100%; 
    height: 400px; 
    position: relative; 
    overflow: hidden;
    margin: auto; 
  }

  .contact .side-card .image-holder .background {
    width: 100%; 
    height: 60%; 
  }

  .contact .side-card .image-holder img {
    width: 348px; 
    right: -50px; 
    bottom: -128px; 
    display:inline-block; 
  }

  .contact .copy {
    display: block; 
    margin: auto; 
    margin-top: 2em;
    width: 84%;
    text-align: center;  
  }
}

@media screen and (max-width: $breakPoint-mobile) and (min-width: 539px) {
  .contact .side-card .text {
    font-size: 24px !important;
  }

  .contact .side-card .image-holder img {
    max-width: 684px !important;
    right: 0 !important; 
  }

  .contact .particles {
    display: none;
  }
} 

@media screen and (max-width: $breakPoint-mobile) {
  .contact {
    display: block; 
  }

  .contact .particles {
    top: 34%; 
    left: -2%; 
    transform: scale(1.3) rotate(20deg);
  }

  .contact .side-card {
    margin-right:0; 
    overflow: hidden; 
  }

  .contact .side-card .text {
    width:100%; 
    left: 50%; 
    bottom: 11vh; 
    font-size: 4vw;
    transform: translateX(-50%);
  }

  .contact .side-card .text > h1:first-of-type{
    left: -25px; 
    display: inline-block;
  }

  .contact .side-card .text h1:last-of-type {
    left: 7px; 
    display: inline-block; 
  }
  .contact .side-card .image-holder {
    width: 100vw; 
    height: 100vh; 

  }

  .contact .side-card .image-holder .background {
    border-radius: 0; 
    height: 100%; 
    width: 100%; 
        background: linear-gradient(692deg, #e4259b, #df0077, #6c15b5);
            background-size: 100% 134%;
  }

  .contact .side-card .image-holder img {
    width: 119%; 
    right: -120px; 
    bottom: -45px;
    max-width:837px;
  }

  .contact .side-card .scroll-cta {
    position: absolute; 
    bottom: -85px; 
    border: 3px solid $white; 
    width: 43vw; 
    height: 43vw; 
    max-width: 164px; 
    max-height: 164px; 
    transform: translateX(-50%);
    left: 50%; 
    border-radius: 100%; 
    z-index: 100; 
    pointer-events: all;
  }

  @keyframes spinner {
  from {
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -moz-transform: rotateY(-360deg);
    -ms-transform: rotateY(-360deg);
    transform: rotateY(-360deg);
  }
}


  .contact .side-card .scroll-cta svg {
    filter: drop-shadow(0 11px 25px rgba(11, 11, 61, 0.61));
    position: relative; 
    top: 3%; 
    animation-name: spinner;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 3.64s;
  }

  .contact .copy {
    padding: 1em; 
    margin: 0; 
    margin-top: 1em; 
    padding-bottom: 2.5em;
    padding-top: 0; 
    font-size: 1.45em; 
    width: 100%; 
    text-align: center;
  }

  .contact .behind-text {
        word-break: break-word;
    position: fixed;
    color: #1e1d69;
    opacity: 0.2;
    text-align: left;
    z-index: -1;
    line-height: 11vh;
    white-space: nowrap;
    top: unset;
    font-size: 23vw;
    left: 50%;
    transform: translateX(-50%);
    right: unset;
    bottom: 4vh;
  }

  .next-up {
    display: block; 
    text-align: left; 
    padding: 1.4em; 
    z-index: 10; 
    color: $white; 
    pointer-events: all;
  }

  .next-up h2 {
    font-size: 11vw; 
  }

  .next-up a {
    color: $white;
    text-decoration-color: rgba(255,255,255,0.3);
  }

  .next-up p {
    font-size: 30px; 
    margin-bottom: .5em;
  }
}
</style>
