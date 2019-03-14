import ParallaxContainer from './components/ParallaxContainer.vue'
import ParallaxElement from './components/ParallaxElement.vue'

export default {
  install (Vue) {
    Vue.component('parallax-container', ParallaxContainer)
    Vue.component('parallax-element', ParallaxElement)
  },
}

export { ParallaxContainer, ParallaxElement }
