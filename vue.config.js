const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')

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
        new ImageminWebpWebpackPlugin({
          config: [{
            test: /\.(jpe?g|png)$/,
            options: {
              quality: 50,
            },
          }],
          detailedLogs: false,
          strict: false,
        }),
        new ImageminPlugin({
          disable: process.env.NODE_ENV !== 'production', // Disable during development
          svgoPlugins: [
            {
              removeViewBox: true,
            },
          ],
          jpegtran: null,
          pngquant: {
            quality: '65-90',
            speed: 4,
          },
          plugins: [
            imageminMozjpeg({
              quality: 80,
              progressive: true,
            }),
          ],
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
