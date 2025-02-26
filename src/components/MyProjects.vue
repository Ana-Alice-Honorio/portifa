<template>
  <section class="projects-container">
    <v-container>
      <v-row align="center" justify="center" id="projects">
        <v-col cols="12" md="6">
          <div class="project-text">
            <h1>{{ $t('projects.title') }}</h1>
            <p v-html="$t('projects.subtitle')"></p>
            <p v-html="$t('projects.link')"></p>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="project-carousel">
            <v-carousel
              height="400"
              show-arrows="hover"
              width="300px"
              cycle
              hide-delimiter-background
            >
              <v-carousel-item v-for="(project, i) in projects" :key="i">
                <v-sheet class="project-item">
                  <div
                    class="project-image"
                    :style="{ backgroundImage: `url(${project.image})` }"
                  ></div>

                  <div class="project-info">
                    <h3>{{ project.name }}</h3>
                    <div class="project-links">
                      <a :href="project.deployLink" target="_blank"
                        ><v-icon>mdi-tools</v-icon>{{ $t('projects.deploy') }}</a
                      >
                      <a :href="project.githubLink" target="_blank">
                        <v-icon>mdi-github</v-icon>{{ $t('projects.github') }}
                      </a>
                    </div>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  name: string
  deployLink: string
  githubLink: string
  image: string
}

const projects = ref<Project[]>([
  {
    name: 'Linktree',
    deployLink: 'https://geek-in-code.vercel.app/',
    githubLink: 'https://github.com/Ana-Alice-Honorio/linktree-insta',
    image: 'src/assets/images/linktree.png',
  },
  {
    name: 'Books Store',
    deployLink: 'https://deploy-projeto2.com',
    githubLink: 'https://github.com/Ana-Alice-Honorio/books-store',
    image: 'https;//url-da imagem',
  },
  {
    name: 'Todo Flow',
    deployLink: 'https://deploy-projeto2.com',
    githubLink: 'https://github.com/Ana-Alice-Honorio/todo-flow',
    image: 'https://github.com/Ana-Alice-Honorio/todo-flow/raw/main/public/todo-task.png',
  },
  {
    name: 'Coin Wise',
    deployLink: 'https://deploy-projeto2.com',
    githubLink: 'https://github.com/Ana-Alice-Honorio/coinWise',
    image: 'https://github.com/Ana-Alice-Honorio/coinWise/raw/main/public/coin%20wise.png',
  },
  {
    name: 'Deep Space',
    deployLink: 'https://deep-space-store-nine.vercel.app',
    githubLink: 'https://github.com/Ana-Alice-Honorio/deep-space-store',
    image: 'src/assets/images/deep-space.png',
  },
  {
    name: 'EcoVue',
    deployLink: 'https://eco-vue.vercel.app',
    githubLink: 'https://github.com/Ana-Alice-Honorio/EcoVue',
    image: 'src/assets/images/ecovue.png',
  },
])
</script>

<style scoped>
.projects-container {
  display: flex;
  background: #e6e6fa;
  min-height: 100vh;
  align-items: center;
}

.project-text {
  max-width: 450px;
  text-align: left;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
}

.project-text h1 {
  font-size: 25px;
}

.project-carousel {
  flex: 1;
  padding: 20px;
  border: 8px solid #3f51b5;
  border-radius: 16px;
  padding: 8px;
}

.project-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #222;
  color: white;
}

.project-image {
  flex: 3;
  background-size: cover;
  background-position: center;
}

.project-info {
  flex: 1;
  padding: 10px;
  text-align: center;
  background: linear-gradient(90deg, rgb(134, 101, 186), #3f51b5);
  color: white;
  font-family: 'Capriola', sans-serif;
}

.project-links {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

.project-links a {
  color: white;
  text-decoration: none;
  font-family: 'Capriola', sans-serif;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>
