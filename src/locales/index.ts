import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    menu: {
      title: 'Hi, I am Alice',
    },
  },
  pt: {
    menu: {
      title: 'Oi, sou Alice',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages,
})

export default i18n
