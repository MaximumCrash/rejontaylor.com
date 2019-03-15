const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Everything you wanted to know about Réjon in one place.'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  router: {
    middleware: 'pages'
  },

  /*
  ** Global CSS
  */
  css: [
    {src: '~/assets/fonts/Brother.css', lang: 'css'},
    {src: '~/assets/fonts/Gibson.css', lang: 'css'},
    {src: '~/assets/main.scss', lang: 'scss'},
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/aos", ssr: false},
    {src: '~/plugins/anime.js', ssr: false},
    {src: '~/plugins/mouse-parallax.js', ssr:false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-sass-resources-loader',
      [
        'assets/main.scss'
      ]
    ],
    '@nuxtjs/robots',
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      hostname: 'https://rejontaylor.com',
      generate: true,
      routes: [
        '/about',
        '/works',
        '/contact'
      ]
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
