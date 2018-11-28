import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys()
    .forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })
  return messages
}

function initStartLocale(locales) {
  let locale

  try {
    locale = (navigator.languages
      ? navigator.languages[0]
      : (navigator.language || navigator.userLanguage)).substr(0, 2)
      .toLowerCase()
  } catch (e) {
    console.log(e)
    locale = 'en'
  }

  if (!locales.includes(locale)) {
    locale = 'en'
  }

  document.querySelector('html')
    .setAttribute('lang', locale)

  return locale
}


const messages = loadLocaleMessages()
const locales = Object.keys(messages)

export default new VueI18n({
  locale: initStartLocale(locales),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
})
