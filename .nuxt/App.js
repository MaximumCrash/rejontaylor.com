import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\fonts\\Brother.css'

import '..\\assets\\fonts\\Gibson.css'

import '..\\assets\\main.scss'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Everything you wanted to know about Réjon in one place."},{"hid":"robots","name":"robots","content":"all"},{"hid":"keywords","name":"keywords","content":"rejon, rejon taylor-foster, maximum crash, portfolio"},{"hid":"theme-color","name":"theme-color","content":"#08073f"},{"hid":"og:site_name","property":"og:site_name","content":"Réjon Taylor-Foster"},{"hid":"og:title","property":"og:title","content":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:description","property":"og:description","content":"Everything you wanted to know about Réjon in one place."},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Frejontaylor.com\u002FImages\u002Fpersonal-twitter-card.png"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Frejontaylor.com"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:site","name":"twitter:site","content":"@Maximum_Crash"},{"hid":"twitter:title","name":"twitter:title","content":"Réjon Taylor-Foster"},{"hid":"twitter:description","name":"twitter:description","content":"Developer ✦ Designer ✦ All Around Mad Scientist"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Frejontaylor.com\u002FImages\u002Fpersonal-twitter-card.png"},{"hid":"twitter:image:alt","name":"twitter:image:alt","content":"Réjon Taylor-Foster"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist"},{"hid":"author","name":"author","content":"Rejon Taylor-Foster"},{"hid":"author","name":"author","content":"https:\u002F\u002Frejontaylor.com"},{"hid":"publisher","name":"publisher","content":"https:\u002F\u002Frejontaylor.com"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist"},{"hid":"og:title","name":"og:title","content":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist"},{"hid":"og:description","name":"og:description","content":"Everything you wanted to know about Réjon in one place."},{"hid":"og:type","name":"og:type","content":"website"},{"hid":"og:url","name":"og:url","content":"https:\u002F\u002Frejontaylor.com"},{"hid":"og:image","name":"og:image","content":"https:\u002F\u002Frejontaylor.com\u002FImages\u002Fpersonal-twitter-card.png"},{"hid":"og:locale","name":"og:locale","content":"en-US"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:site","name":"twitter:site","content":"@maximum_crash"},{"hid":"twitter:creator","name":"twitter:creator","content":"@maximum_crash"},{"hid":"twitter:title","name":"twitter:title","content":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist"},{"hid":"twitter:description","name":"twitter:description","content":"Everything you wanted to know about Réjon in one place."},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Frejontaylor.com\u002FImages\u002Fpersonal-twitter-card.png"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.231afe59.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.dy0oxF6p0lI.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.dy0oxF6p0lI.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
