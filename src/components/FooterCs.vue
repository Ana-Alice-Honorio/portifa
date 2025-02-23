<template>
  <section class="footer-container">
    <v-row class="d-flex flex-column" align="center" id="contact">
      <h2 class="text-center">{{ $t('footer.cards.title') }}</h2>
      <v-container class="learning-section">
        <v-row>
          <v-col cols="12" md="6">
            <h3>{{ $t('footer.cards.courses') }}</h3>
            <v-list>
              <v-list-item v-for="course in courses" :key="course.title">
                <v-list-item-title>
                  <strong>{{ course.title }}</strong> - {{ course.platform }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <a :href="course.link" target="_blank" v-html="$t('footer.cards.see')"></a>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" md="6">
            <h3>Últimos Artigos</h3>
            <v-list>
              <v-list-item v-for="post in blogPosts" :key="post.title">
                <v-list-item-title>
                  <strong>{{ post.title }}</strong>
                </v-list-item-title>
                <v-list-item-subtitle>{{ post.date }}</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <a :href="post.link" target="_blank">Ler no Medium</a>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

      <v-col cols="12" md="12">
        <v-footer class="body-footer text-center d-flex flex-column">
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
import { ref } from 'vue'

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
    platform: 'Escola da NUvem',
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
    title: 'Outros cursos',
    platform: 'Várias',
    link: 'https://drive.google.com/drive/folders/1FE-IC0uWjHRToY2LgBSTaR5_KMPnyXvo',
  },
  {
    title: 'Outros cursos',
    platform: 'Várias',
    link: 'https://drive.google.com/drive/folders/1FE-IC0uWjHRToY2LgBSTaR5_KMPnyXvo',
  },
  {
    title: 'Outros cursos',
    platform: 'Várias',
    link: 'https://drive.google.com/drive/folders/1FE-IC0uWjHRToY2LgBSTaR5_KMPnyXvo',
  },
  {
    title: 'Outros cursos',
    platform: 'Várias',
    link: 'https://drive.google.com/drive/folders/1FE-IC0uWjHRToY2LgBSTaR5_KMPnyXvo',
  },
  {
    title: 'Outros cursos',
    platform: 'Várias',
    link: 'https://drive.google.com/drive/folders/1FE-IC0uWjHRToY2LgBSTaR5_KMPnyXvo',
  },
  {
    title: 'Outros cursos',
    platform: 'Várias',
    link: 'https://drive.google.com/drive/folders/1FE-IC0uWjHRToY2LgBSTaR5_KMPnyXvo',
  },
])

const blogPosts = ref([
  { title: 'Melhores práticas em Vue.js', date: 'Jan 2024', link: 'https://medium.com/seuartigo1' },
  {
    title: 'Dicas para desenvolvedores iniciantes',
    date: 'Fev 2024',
    link: 'https://medium.com/seuartigo2',
  },
  { title: 'Melhores práticas em Vue.js', date: 'Jan 2024', link: 'https://medium.com/seuartigo1' },
  {
    title: 'Dicas para desenvolvedores iniciantes',
    date: 'Fev 2024',
    link: 'https://medium.com/seuartigo2',
  },
  { title: 'Melhores práticas em Vue.js', date: 'Jan 2024', link: 'https://medium.com/seuartigo1' },
  {
    title: 'Dicas para desenvolvedores iniciantes',
    date: 'Fev 2024',
    link: 'https://medium.com/seuartigo2',
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

.learning-section h3 {
  margin-bottom: 16px;
}
.learning-section h2 {
  font-family: 'Capriola', 'sans-serif';
  font-size: 25px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.body-footer {
  background: linear-gradient(90deg, rgb(134, 101, 186), #3f51b5);
  color: white;
}

.footer-container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
