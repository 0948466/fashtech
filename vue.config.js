const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    const module = {
        rules: [
          {
            test: /\.(pdf)(\?.*)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'pdf/[name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.(svg)(\?.*)?$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                  fallback: {
                    loader: 'file-loader',
                    options: {
                      name: 'img/[name].[hash:8].[ext]',
                    },
                  },
                },
              },
            ],
          },
        ],
      }
    if (process.env.NODE_ENV !== 'production') return { module }

    return {
      module,
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/imigize-token',
            '/imigize-apps',
            '/vision',
            '/news',
            '/team-and-partners',
            '/advisors',
          ],
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            timeout: 0,
            maxConcurrentRoutes: 1,
            renderAfterTime: 5000,
            injectProperty: 'PRERENDER_INJECTED',
            inject: {},
          }),
        }),
      ],
    }
  },

  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader')
  },
  css: {
    loaderOptions: {
      // передача настроек в sass-loader
      sass: {
        // @/ это псевдоним к каталогу src/ поэтому предполагается,
        // что у вас в проекте есть файл `src/variables.scss`
        data: '@import "@/scss/variables.scss";',
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },

  lintOnSave: true,
}
