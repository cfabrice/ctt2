const pkg = require('./package')

var glob = require('glob-all');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/actus': 'actus/*.json',
  '/': '/*.json'
});

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      //{ rel: 'stylesheet', href:"https://fonts.googleapis.com/css?family=Fugaz+One"}
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#FFFFFF'
  },

  /*
   ** Route config for pre-rendering
   */
  generate: {
    routes: dynamicRoutes,
    routes: ['404']

  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/app.scss', // use our build, as entered via app.scss
  ],
  //   transition: {
  //     name:"page"
  // //    mode: "out-in"
  //   },

  transition: {
    // mode: 'out-in'
  },
  layoutTransition: {
    mode: ''
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/filters.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios', ['@nuxtjs/markdownit', {
      injected: true
    }],
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', {
      css: false,
      materialDesignIcons: true
    }],
    ['@nuxtjs/moment', ['fr']]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, {
          cwd: 'content'
        })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
