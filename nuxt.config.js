const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-vue-bootswatch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // jquery,popper.js,bootstrapは、bootswatch用
    vendor: ['axios', 'jquery', 'popper.js', 'bootstrap', 'bootstrap-vue'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // bootstrap-vueで、bootstrapをカスタマイズする用
  css: [
    // Bootstrap Custumize
    '~/assets/scss/custom/bootstrap.scss'
  ],
  modules: [
    // bootstrap-vue
    // 'bootstrap-vue/nuxt'
    ['bootstrap-vue/nuxt', { css: false }]
  ]
}
