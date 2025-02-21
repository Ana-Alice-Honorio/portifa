<template>
  <section id="projects" class="d-flex">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <div class="project-text">
          <h1>{{ $t('projects.title') }}</h1>
          <p>Aqui estão alguns dos meus projetos mais recentes. Clique para ver mais detalhes.</p>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-center">
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
                    <a :href="project.deployLink" target="_blank">🔗 Ver Deploy</a>
                    <a :href="project.githubLink" target="_blank">
                      <v-icon>mdi-github</v-icon> GitHub
                    </a>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
       
    </v-row>
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
    name: 'Projeto 1',
    deployLink: 'https://deploy-projeto1.com',
    githubLink: 'https://github.com/username/projeto1',
    image: 'https;//url-da imagem',
  },
  {
    name: 'Projeto 2',
    deployLink: 'https://deploy-projeto2.com',
    githubLink: 'https://github.com/username/projeto2',
    image: 'https;//url-da imagem',
  },
])
</script>

<style scoped>
#projects {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #e6e6fa;
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
}

.project-links {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

.project-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>
