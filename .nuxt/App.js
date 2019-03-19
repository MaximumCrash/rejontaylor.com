import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\fonts\\Brother.css'

import '..\\assets\\fonts\\Gibson.css'

import '..\\assets\\main.scss'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Everything you wanted to know about Réjon in one place."},{"hid":"robots","name":"robots","content":"all"},{"hid":"keywords","name":"keywords","content":"rejon, rejon taylor-foster, maximum crash, portfolio"},{"hid":"theme-color","name":"theme-color","content":"#08073f"},{"property":"og:site_name","content":"Réjon Taylor-Foster"},{"property":"og:title","content":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist"},{"property":"og:description","content":"Everything you wanted to know about Réjon in one place."},{"property":"og:image","content":"https:\u002F\u002Frejontaylor.com\u002FImages\u002Fpersonal-twitter-card.png"},{"property":"og:url","content":"https:\u002F\u002Frejontaylor.com"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@Maximum_Crash"},{"name":"twitter:title","content":"Réjon Taylor-Foster"},{"name":"twitter:description","content":"Developer ✦ Designer ✦ All Around Mad Scientist"},{"name":"twitter:image","content":"https:\u002F\u002Frejontaylor.com\u002FImages\u002Fpersonal-twitter-card.png"},{"name":"twitter:image:alt","content":"Réjon Taylor-Foster"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist"},{"hid":"author","name":"author","content":"Rejon Taylor-Foster"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.57cdc0b0.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.dy0oxF6p0lI.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.dy0oxF6p0lI.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

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
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

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
