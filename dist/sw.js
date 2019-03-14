importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1fe4a908aea59fda8fee.js",
    "revision": "5b909bbc86053ad09c5d72563720bfe6"
  },
  {
    "url": "/_nuxt/494e5ccd0ea6953fc643.js",
    "revision": "b555a0fbafc2353f45c7e4fd417dd984"
  },
  {
    "url": "/_nuxt/5823064427bfe787d581.js",
    "revision": "ede43b73227be7c4485ecd960a34f4ce"
  },
  {
    "url": "/_nuxt/7ede64fa5d4b0955c5f1.js",
    "revision": "372e3f0f8001f5cc88e9007552ae479e"
  },
  {
    "url": "/_nuxt/91e0c953b91131b380e6.js",
    "revision": "b0c58968cb2f6ffaeacea2023a1e2b2b"
  },
  {
    "url": "/_nuxt/dde44d050c96f7d49c12.js",
    "revision": "2c4e4765ca619d10f9b338b2a8ac481c"
  },
  {
    "url": "/_nuxt/dedc0083386c473c9d1a.js",
    "revision": "d8d716880e9d792f312de022f64dbc3a"
  },
  {
    "url": "/_nuxt/f0ab8f66711259b69dec.js",
    "revision": "4e557fdfa0f2f4689ce378de65cb20f4"
  }
], {
  "cacheId": "RTF_2019Site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
