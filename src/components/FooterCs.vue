<template>
  <section class="footer-container">
    <v-row class="d-flex flex-column" align="center" id="contact">
      <h1 class="text-center">{{ $t('footer.cards.title') }}</h1>
      <v-container class="learning-section">
        <v-row class="flex-column flex-md-row">
          <v-col cols="12" md="6" class="text-center">
            <h3>{{ $t('footer.cards.courses') }}</h3>
            <v-list class="list w-100">
              <v-list-item v-for="course in courses" :key="course.title">
                <v-list-item-title>
                  <h5 class="title">
                    {{
                      course.title.length > 30 ? course.title.slice(0, 30) + '...' : course.title
                    }}
                    <strong class="platform">- {{ course.platform }}</strong>
                  </h5>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <a :href="course.link" target="_blank" class="link">{{
                    $t('footer.cards.see')
                  }}</a>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" md="6" class="text-center">
            <h3>{{ $t('footer.cards.blog') }}</h3>
            <v-list class="list w-100">
              <v-list-item v-for="post in blogPosts" :key="post.title">
                <v-list-item-content class="post-item">
                  <v-list-item-title>
                    <h5 class="title">
                      {{ post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title }} -
                      <span class="date">{{ post.date }}</span>
                    </h5>
                  </v-list-item-title>

                  <v-list-item-subtitle>
                    <a :href="post.link" target="_blank" class="link">{{
                      $t('footer.cards.medium')
                    }}</a>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <v-row class="justify-left">
          <v-col cols="12" md="6" class="text-center mt-4">
            <h3>{{ $t('footer.cards.more') }}</h3>
            <v-list class="list w-100">
              <v-list-item-subtitle>
                <a href="https://anaalicehonorio.medium.com/" target="_blank" class="link">
                  {{ $t('footer.cards.medium') }}
                </a>
              </v-list-item-subtitle>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

      <v-col cols="12">
        <v-footer class="body-footer text-center d-flex flex-column w-100">
          <div class="social-icons">
            <v-btn
              v-for="icon in socialLinks"
              :key="icon.name"
              :href="icon.url"
              target="_blank"
              :icon="icon.icon"
              class="mx-2"
              variant="text"
            ></v-btn>
          </div>

          <div class="pt-2">
            <p>
              {{ $t('footer.title') }} <strong>{{ $t('footer.me') }}</strong>
              {{ $t('footer.conect') }}
            </p>
          </div>

          <v-divider class="my-2"></v-divider>

          <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import xml2js from 'xml-js'

interface BlogPost {
  title: string
  date: string
  link: string
}

interface MediumFeed {
  rss: {
    channel: {
      item: MediumPost[]
    }
  }
}

interface MediumPost {
  title?: { _cdata?: string; _text?: string }
  link?: { _text?: string }
  pubDate?: { _text?: string }
}

const blogPosts = ref<BlogPost[]>([])

const fetchMediumPosts = async () => {
  try {
    const response = await axios.get(
      'https://api.allorigins.win/get?url=' +
        encodeURIComponent('https://medium.com/feed/@anaalicehonorio'),
    )
    const data = xml2js.xml2json(response.data.contents, { compact: true, spaces: 2 })
    const parsedData: MediumFeed = JSON.parse(data)

    blogPosts.value = parsedData.rss.channel.item.slice(0, 10).map((post) => ({
      title: post.title?._cdata || post.title?._text || 'Título Desconhecido',
      link: post.link?._text || '#',
      date: post.pubDate?._text
        ? new Date(post.pubDate._text).toLocaleDateString('pt-BR')
        : 'Data Desconhecida',
    }))
  } catch (error) {
    console.error('Erro ao buscar posts do Medium:', error)
  }
}

onMounted(fetchMediumPosts)

interface SocialLink {
  name: string
  icon: string
  url: string
}

const courses = ref([
  {
    title: 'AWS Academy Introduction to Cloud Semester 1',
    platform: 'AWS',
    link: 'https://www.credly.com/badges/4681ad85-59e0-4135-87d9-f20d91120d2f/public_url',
  },
  {
    title: 'Introduction to FinOps',
    platform: 'Finops Foundation',
    link: 'https://verify.skilljar.com/c/jtjcihj4sapo',
  },
  {
    title: 'LFC131: Green Software for Practitioners',
    platform: 'The Linux Foundation',
    link: 'https://www.credly.com/badges/23548ca2-5c95-4af4-a1dc-f28aad777561/public_url',
  },
  {
    title: 'Fundamentos AWS',
    platform: 'Escola da Nuvem',
    link: 'https://drive.google.com/file/d/195iy8XTFsr0kqf24TL0mCCIa7rANPyNf/view',
  },
  {
    title: 'Fundamentos de desenvolvimento web',
    platform: 'Trybe',
    link: 'https://drive.google.com/file/d/1HB96VwkTppucpELvT9K5FS5gY6L7TARW/view',
  },
  {
    title: 'Desenvolvimento Frontend',
    platform: 'Trybe',
    link: 'https://drive.google.com/file/d/1HFBioHBSRIBHB5Ofe--iR6xd0J0LS5H5/view',
  },
  {
    title: 'Vue 3 - explorando o framework',
    platform: 'Alura',
    link: 'https://drive.google.com/file/d/1HXj5ybFRZYEeGDXdW_W1aWH_yLuDzr-B/view?usp=sharing',
  },
  {
    title: 'Vue 3 - avançando com o framework',
    platform: 'Alura',
    link: 'https://drive.google.com/file/d/1HYWJJdYfHqdJGa2TEDmZW-jvBvVcH8p_/view?usp=sharing',
  },
  {
    title: 'SEO - otimização de sites',
    platform: 'Alura',
    link: 'https://drive.google.com/file/d/1HbD3REW4-gBrYamMuN2YDL9D2tfR6NkK/view?usp=sharing',
  },
  {
    title: 'Bootcamp Frontend',
    platform: 'Italents',
    link: 'https://drive.google.com/file/d/1yaXzeGva2hcoClnoUM7143-fjF6A8Oqo/view?usp=sharing',
  },
  {
    title: 'Docker - criando e gerenciando conteiners',
    platform: 'Alura',
    link: 'https://drive.google.com/file/d/1yrQmeHKufFur2eGJyzbcp9gLw9oKpC6i/view?usp=sharing',
  },
  {
    title: 'Outros cursos',
    platform: 'Várias',
    link: 'https://drive.google.com/drive/folders/1FE-IC0uWjHRToY2LgBSTaR5_KMPnyXvo',
  },
])

const socialLinks = ref<SocialLink[]>([
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/Ana-Alice-Honorio' },
  { name: 'Medium', icon: 'mdi-alpha-m-circle', url: 'https://medium.com/@anaalicehonorio' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/anaalicehonorio' },
  { name: 'Instagram', icon: 'mdi-instagram', url: 'https://instagram.com/geek_in_code' },
])
</script>

<style scoped>
.learning-section {
  padding: 60px 0;
  background: #f5f5f5;
}

.footer-container h3 {
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
  font-size: 20px;
}

.footer-container h1 {
  font-family: 'Capriola', 'sans-serif';
  font-size: 25px;
  padding-top: 45px;
}

.link {
  text-decoration: none;
  color: blue;
}

.list {
  position: relative;
  background-image: url('/images/back.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  width: 100%;
}

.list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}

.title {
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
  font-size: 15px;
  font-weight: 100;
  display: inline-block;
}

.date {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 10px;
}

.link {
  margin-top: 5px;
  font-size: 14px;
  color: #1e88e5;
}

.platform {
  font-weight: bold !important;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.body-footer {
  background: linear-gradient(90deg, rgb(134, 101, 186), #3f51b5);
  color: white;
  width: 100%;
}

.footer-container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .social-icons {
    max-width: 400px;
    margin: 0 auto;
  }

  .list {
    margin: 0 auto;
    max-width: 90%;
  }

  .learning-section {
    padding: 40px 10px;
  }

  .footer-container h1 {
    font-size: 22px;
    text-align: center;
  }
  .platform {
    display: none;
  }
}
</style>
