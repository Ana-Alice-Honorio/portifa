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
      text: 'Sou Desenvolvedora de Software com foco em soluções <strong>Fullstack</strong> e <strong>Cloud</strong>. Onde equilibro a entrega de aplicações resilientes com a evolução contínua em arquitetura e segurança da informação.',
      listTitle: 'O que eu trago para o jogo:',
      listFrontend:
        '<strong>Frontend Moderno:</strong> Domínio de ecossistemas Vue.js, Angular e React, focando sempre em performance e experiência do usuário.',
      listBackend:
        '<strong>Backend & Cloud:</strong> Experiência no desenvolvimento de APIs com Python e gerenciamento de infraestrutura em nuvem (AWS), utilizando serviços como IAM, Lambda e S3.',
      listSecurity:
        '<strong>Segurança e Governança:</strong> Pós-graduanda em Direito Digital e Segurança da Informação, aplico conceitos de proteção de dados, segurança defensiva e conformidade técnica no ciclo de desenvolvimento de software.',
      texttwo:
        'Minha trajetória é marcada pela resolução de problemas complexos, onde a <strong>agilidade</strong> e a <strong>autonomia</strong> são fundamentais. Sou movida por desafios que unem tecnologia de ponta e rigor técnico, o mesmo foco que aplico na minha rotina de estudos e desenvolvimento de projetos pessoais.',
    },
    footer: {
      title: 'Construído com ❤️ por ',
      me: 'Ana Alice Honório',
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
      text: 'Sou uma profissional da área de TI cursando último período do curso de <strong>Análise e Desenvolvimento de Sistemas</strong>, onde aprendo sobre as melhores práticas e metodologias de desenvolvimento de software. Finalizei uma pós em <strong>Segurança da Informação</strong> e iniciei uma pós em <strong>Direito Digital</strong>, buscando sempre me atualizar e expandir meus conhecimentos nessa área.',
    },
    projects: {
      title: 'Projetos recentes',
      subtitle:
        'Aqui estão alguns dos meus projetos mais recentes onde pude colocar minhas <strong>habilidades</strong> em prática. Existem projetos onde explorei o <strong>frontend</strong>, a área de <strong>UI/UX</strong>, o <strong>backend</strong>, <strong>cloud</strong> e <strong>IAs</strong>. Ambos com olhar para a <strong>acessibilidade</strong> e <strong>segurança</strong>.',
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
