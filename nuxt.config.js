const pkg = require('./package')
import purgecss from '@fullhuman/postcss-purgecss';

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
      { hid: 'description', name: 'description', content: 'Everything you wanted to know about Réjon in one place.'},
      { name: 'robots', content: 'all' },
      { hid: 'keywords', name: 'keywords', content: 'rejon, rejon taylor-foster, maximum crash, portfolio'},
      { name: 'theme-color', content: '#08073f'},
      {property: 'og:site_name',content: 'Réjon Taylor-Foster'},
      { property: 'og:title', content:'Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist'},
      { property: 'og:type', content: 'website'},
      { property: 'og:description', content: 'Everything you wanted to know about Réjon in one place.'},
      { property: 'og:image', content: 'https://rejontaylor.com/Images/personal-twitter-card.png'},
      { property: 'og:url', content: 'https://rejontaylor.com'},
      { name: 'twitter:card', content:'summary_large_image'},
      { name: 'twitter:site', content:'@Maximum_Crash'},
      { name: 'twitter:title', content: 'Réjon Taylor-Foster'},
      { name: 'twitter:description', content: 'Developer ✦ Designer ✦ All Around Mad Scientist'},
      { name: 'twitter:image', content: 'https://rejontaylor.com/Images/personal-twitter-card.png'},
      { name: 'twitter:image:alt', content: 'Réjon Taylor-Foster'}
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
    }],
    [
    'nuxt-netlify-http2-server-push',
    {
      // Specify relative path to the dist directory and its content type
      resources: [
        { path: '**/*.js', as: 'script' },
        { path: 'fonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { path: 'fonts/*.otf', as: 'font', type: 'font/otf', crossorigin: 'anonymous' },
        { path: 'fonts/webfonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { path: 'fonts/webfonts/*.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
        { path: 'fonts/webfonts/*.eot', as: 'font', type: 'font/eot', crossorigin: 'anonymous' },
      ]
    }
  ]
  ],
  manifest: {
    "name": "Réjon Taylor-Foster | Developer ✦ Designer ✦ All Around Mad Scientist",
    "short_name": "Réjon Taylor-Foster",
    "start_url": "/",
    "background_color": "#08073f",
    "display": "standalone",
    "theme_color": "#e4259b"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, {isDev, isClient}) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              }
            }
          })
        }
      })

       // adding the new loader as the first in the list
       config.module.rules.unshift({
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            // disable: isDev,
            placeholder: true,
            quality: 85,
            placeholderSize: 30,
            name: 'img/[name].[hash:hex:7].[width].[ext]'
          }
        }
      })
      // remove old pattern from the older loader
      config.module.rules.forEach(value => {
        if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // reduce to svg and webp, as other images are handled above
          value.test = /\.(svg|webp)$/
          // keep the configuration from image-webpack-loader here unchanged
        }
      })
    },
    postcss: {
      plugins: [
        purgecss({
          content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './content/**/*.md', './content/**/*.json'],
          whitelist: ['html', 'body', 'has-navbar-fixed-top', 'nuxt-link-exact-active', 'nuxt-progress', 'aos', 'aos-init', 'aos-animate'],
          whitelistPatternsChildren: [/svg-inline--fa/, /__layout/, /__nuxt/],
        })
      ]
    }
  }
}
