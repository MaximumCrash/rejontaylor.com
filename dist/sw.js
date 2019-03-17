importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/059cb7e1cb3726d97871.js",
    "revision": "b5a70315a35cfcfe3807b3b6562d81f5"
  },
  {
    "url": "/_nuxt/722399934d0ae83861e8.js",
    "revision": "bfcde248e59084ab114ef1ce0b6e8c4c"
  },
  {
    "url": "/_nuxt/726205f11230306a98c1.js",
    "revision": "d2128214f8a3ba82976c62fa3ca5486b"
  },
  {
    "url": "/_nuxt/9f1895a096fab716f205.js",
    "revision": "58f7271e5bf4ef48ae949facd7a5f33e"
  },
  {
    "url": "/_nuxt/b07520f3cb36c96a41b1.js",
    "revision": "8c75ee2a5fae1a3336145bb22d2ef833"
  },
  {
    "url": "/_nuxt/cda041224a9701660094.js",
    "revision": "27e622ef2296d01afa1179c8d239ae4a"
  },
  {
    "url": "/_nuxt/e3715390c5f5fd732168.js",
    "revision": "433a3f8bbb9ba9f32885151bcd570d96"
  },
  {
    "url": "/_nuxt/f5cac2144d3f6a3d7c72.js",
    "revision": "778f473ac1f787b0a984d02abdf3de98"
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
