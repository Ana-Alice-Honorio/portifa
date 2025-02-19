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
      navbar: {
        home: 'Home',
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato',
      },
    },
    hero: {
      title: 'Oi, eu sou Alice!',
      subtitle: 'Desenvolvedora apaixonada por tecnologia, UI/UX e inovação.',
      curriculum: 'Currículo',
    },
    footer: {
      title: 'Construído com ❤️ por ',
      me: 'mim',
      conect: '. Conecte-se comigo nas redes sociais!',
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
