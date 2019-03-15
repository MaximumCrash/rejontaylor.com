<template>
  <section class="container works">
    <section class="works"> 
      <h1 class="behind-text">
        Works
      </h1>
      <div class="projects-container">
        <Project v-for="(project, index) in projects" 
                 :key="index"
                 :title="project.title"
                 :image="project.image"
                 :content="project.content"
                 :index="index"
                 :bgPos="project.bgPos"
                 :shouldShowTitle="project.shouldShowTitle"
                  />
      </div>
      <div :class="this.showScrollUp ? 'scroll-up' : 'scroll-up hide'" v-on:click="this.scrollToTop" >
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V9"/></svg>
      </div>
    </section>
  </section>
</template>

<script>
import charming from 'charming';
import Project from '~/components/Project.vue';
import Projects from '~/assets/works.json';

export default {
  head() {
    return {
      title: 'Works ✦ Réjon Taylor-Foster',
      meta: [
        {hid: 'description', name: 'description', content: 'The works of Réjon Taylor-Foster'}
      ]
    }
  },
  data() {
    return {
      animeStore: {},
      showScrollUp: false,
      projects: Projects.projects
    }
  },
  components: {
    Project
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    if (this.$store.state.headerAnime !== null && this.$store.state.oldPage === "index") 
    {
      this.$store.state.headerAnime.direction = "normal";
      this.$store.state.headerAnime.play();
    }

    window.onscroll = () => {
        this.showScrollUp = window.scrollY > window.innerHeight; 
    }

    let page = this.$el.querySelector('.works');
    let behindText = page.querySelector('.behind-text');

    charming(behindText);

    behindText = behindText.querySelectorAll('span');

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
  },
  beforeDestroy() {
    window.onscroll = null; 
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

.works.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative; 
  overflow: visible;
  flex-direction: column;
}

.works {
  position: relative; 
  width: 100%; 
  max-width: 1052px;
  padding-top: 5vh;
}

.works h1.behind-text {
  left: 5vw; 
  top:unset;
  bottom: 2vh;
     position: fixed;
    color: #1e1d69;
    font-size: 11vw;
    opacity: 0.2;
}

.works .behind-text span {
  position: relative; 
  display: inline-block;
}

.works .projects-container {
  margin-top: 4vh;
  padding-bottom: 3em;
}

.project .title h1 > span {
          position: relative;
          display: inline-block;
     }

    

     @media screen and (max-width: $breakPoint-tablet) and (min-width: $breakPoint-mobile) {
  .works {
    max-width: none; 
    padding-top: 64px;
  }

  .works .projects-container {
    margin-top: 0vh; 
    padding-bottom: 20vh; 
    padding-left: 2vw; 
    padding-right: 2vw; 
  }

  
}

@media screen and (max-width: $breakPoint-mobile) {
  .works .projects-container {
    padding-left: 4vw; 
    padding-right: 4vw; 
  }

  .works h1.behind-text {
    font-size: 23vw; 
    white-space: nowrap;
    bottom: 4vh; 
  }
}
</style>
