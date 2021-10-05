import env from './env'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EasyYa易芽_一站式跨境电商选品运营数据分析工具_供应链服务平台',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~assets/css/element-variables.scss', lang: 'scss'},
    'animate.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/route',
    '~/directives/draggle'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'https://api.easyya.com/easyya-account-user',
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },

  env: {
    MODE: process.env.MODE,
    api_url: env[process.env.MODE].api_url,
    hy_host: env[process.env.MODE].hy_host,
    www_host: env[process.env.MODE].www_host,
    buy_host: env[process.env.MODE].buy_host,
    account_host: env[process.env.MODE].account_host
  },
  server: env[process.env.MODE].server
}
