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
        contact: 'Cursos/Blog',
      },
    },
    hero: {
      title: 'Oi, eu sou Alice!',
      text: 'Sou uma desenvolvedora apaixonada por tecnologia, com experiência em desenvolvimento web. Trabalho com <strong> Angular.js</strong>, <strong>Vue.js</strong/>, <strong> Javascript </strong/> e outras tecnologias para criar aplicações incríveis.',
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
        see: 'Ver certificado',
        blog: 'Últimos Artigos',
        medium: 'Ler no Medium',
        more: 'Mais artigos',
      },
    },
    about: {
      xp: 'Experiências',
      curriculum: 'Currículo',
      techs: 'Tecnologias:',
      text: 'Sou uma profissional da área de TI cursando <strong>Análise e Desenvolvimento de Sistemas</strong>, onde aprendo sobre as melhores práticas e <strong>metodologias</strong> de desenvolvimento de software. Estou cursando uma pós em <strong>Segurança da Informação</strong>, buscando sempre me atualizar e expandir meus conhecimentos nessa área.',
    },
    projects: {
      title: 'Projetos recentes',
      subtitle:
        'Aqui estão alguns dos meus projetos mais recentes onde pude colocar minhas <strong>habilidades</strong> em prática. Existem projetos onde explorei o <strong>frontend</strong>, a área de <strong>UI/UX</strong>, o <strong>backend</strong>. Ambos com olhar para a <strong>acessibilidade</strong>.',
      link: ' <a href="https://github.com/Ana-Alice-Honorio" target="_blank">Clique</a> para ver os demais.',
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
