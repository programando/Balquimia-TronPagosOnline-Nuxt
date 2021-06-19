import dotenv from "dotenv"; dotenv.config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Balquimia-Pagos Online',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
 server: {
    port: process.env.PORT
  },
    env: {
      APP_NAME   : process.env.APP_NAME,
      SIGNATURE  : process.env.SIGNATURE,
      ACCOUNT_ID : process.env.ACCOUNT_ID,
      MERCHANT_ID: process.env.MERCHANT_ID,
      
      URL_BASE: process.env.URL_BASE,
      URL_API: process.env.URL_API,
      URL_WEB: process.env.URL_WEB,
      URL_RESET_PASS: process.env.URL_RESET_PASS,
  },
    
  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
