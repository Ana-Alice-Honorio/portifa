import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    menu: {
      title: 'Hi, I am Alice',
    },
  },
  pt: {
    menu: {
      title: 'Alice',
      navbar: {
        home: 'Home',
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato',
      },
    },
    hero: {
      title: 'Oi, eu sou Alice!',
      text: 'Sou uma desenvolvedora apaixonada por tecnologia, com experiência em desenvolvimento web. Trabalho com <strong>Vue.js</strong/>, <strong> Javascript </strong/> e outras tecnologias para criar aplicações incríveis.',
      texttwo:
        'Tenho experiência com <strong>desenvolvimento de software</strong>, <strong>resolução de problemas</strong> complexos e atendimento ao usuário do software.',
    },
    footer: {
      title: 'Construído com ❤️ por ',
      me: 'mim',
      conect: '. Conecte-se comigo nas redes sociais!',
      cards: {
        title: 'Aprendizado & Conteúdo',
        courses: 'Cursos Realizados',
        see: '<a href="https://github.com/Ana-Alice-Honorio" target="_blank"> Ver Curso</a>',
      },
    },
    about: {
      xp: 'Experiências',
      curriculum: 'Currículo',
      techs: 'Tecnologias:',
      text: 'Sou uma profissional da área de TI cursando o 3° período de <strong>Análise e Desenvolvimento de Sistemas</strong>, onde aprendo sobre as melhores práticas e <strong>metodologias</strong> de desenvolvimento de software. Atualmente, estou me aprimorando e tenho um grande interesse em <strong>infra/DevOps</strong>, buscando sempre me atualizar e expandir meus conhecimentos nessa área.',
    },
    projects: {
      title: 'Projetos recentes',
      subtitle:
        'Aqui estão alguns dos meus projetos mais recentes. <a href="https://github.com/Ana-Alice-Honorio" target="_blank">Clique</a> para ver os demais.',
      github: 'Código',
      deploy: 'Deploy',
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
