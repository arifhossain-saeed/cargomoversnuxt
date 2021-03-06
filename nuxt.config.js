export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'cargomovers',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/Favicon.png'},
      {href: "https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic"},

      {href: "https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900"},

      {href: "https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic"},

      {href: "https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic"},

      {href: "https://fonts.googleapis.com/css?family=Alegreya:400,400italic,700,700italic,900,900italic"},

      {href: "https://fonts.googleapis.com/css?family=PT+Serif:400,400italic,700,700italic"},
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cargomoverscanada.com/assets/front/plugins/bootstrap/css/bootstrap.min.css'
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        type: "text/css"
      },
      {
        rel: "stylesheet",
        href: "https://cargomoverscanada.com/assets/front/plugins/Stroke-Gap-Icons-Webfont/style.css",
        type: "text/css"
      },
      {
        rel: "stylesheet",
        href: "https://cargomoverscanada.com/assets/front/plugins/flaticon/flaticon.css",
        type: "text/css"
      },
      {
        rel: "stylesheet",
        href: "https://cargomoverscanada.com/assets/front/plugins/jquery-ui-1.11.4/jquery-ui.min.css",
        type: "text/css"
      },
      {
        rel: "stylesheet",
        href: "https://cargomoverscanada.com/assets/front/plugins/owl.carousel-2/assets/owl.carousel.css",
        type: "text/css"
      },
      {
        rel: "stylesheet",
        href: "https://cargomoverscanada.com/assets/front/plugins/owl.carousel-2/assets/owl.theme.default.min.css",
        type: "text/css"
      },
      {rel: "stylesheet", href: "https://cargomoverscanada.com/assets/front/plugins/animate.min.css", type: "text/css"},
      {
        rel: "stylesheet",
        href: "https://cargomoverscanada.com/assets/front/plugins/fancyapps-fancyBox/source/jquery.fancybox.css",
        type: "text/css"
      },
    ],
    script:[
      // { src: "https://cargomoverscanada.com/assets/js/jquery-input-mask-phone-number.min.js" },
      // { src: "https://cargomoverscanada.com/assets/front/autocomplete.js" },
      // { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSlhXQ8ixpBW6CLmCJWOIvQXmwzXwlbj4&v=3.exp&sensor=false&libraries=places" },
      // { src: "https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/style.css',
    '~assets/css/responsive.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // nuxt sitemap
    '@nuxtjs/sitemap',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  sitemap: {
    hostname: 'http://localhost:3000',
    path: '/sitemap.xml',
    // cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    generate: true,
    // routes: dyRoutes
  },

  generate: {
    fallback: true
  },
}
