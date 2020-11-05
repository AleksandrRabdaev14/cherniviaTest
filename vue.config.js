const path = require('path');
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'lang',
      enableInSFC: true
    }
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/css/_vars.scss";'
      }
    }
  }
}
