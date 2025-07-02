<template>
  <section id="about">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="400">
            <v-img color="surface-variant" height="200" src="/images/cat.gif" cover>
              <v-toolbar color="transparent">
                <v-toolbar-title class="text-h6"></v-toolbar-title>
              </v-toolbar>
            </v-img>

            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">
                {{ $t('about.xp') }}
              </div>

              <v-timeline align="start" density="compact">
                <v-timeline-item
                  v-for="experience in experiences"
                  :key="experience.dateRange"
                  :dot-color="experience.color"
                  size="x-small"
                >
                  <div class="mb-4">
                    <div class="font-weight-normal">
                      <strong>{{ experience.from }}</strong> ({{ experience.dateRange }})
                    </div>
                    <div>{{ experience.message }}</div>
                    <div
                      class="tech-stack"
                      v-if="experience.technologies && experience.technologies.length > 0"
                    >
                      {{ $t('about.techs') }}
                      <strong>{{ experience.technologies.join(', ') }}</strong>
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <div class="about-text">
            <p v-html="$t('about.text')"></p>
          </div>

          <div class="tech-icons">
            <v-tooltip v-for="tech in technologies" :key="tech.name" location="top">
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" class="tech-icon" :style="{ color: tech.color }">
                  {{ tech.icon }}
                </v-icon>
              </template>
              <span>{{ tech.name }}</span>
            </v-tooltip>
          </div>

          <v-btn
            variant="flat"
            :href="'/docs/Ana.Alice.Honorio.pdf'"
            target="_blank"
            download
            class="btn"
          >
            <v-icon left>mdi-download</v-icon>
            {{ $t('about.curriculum') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Technology {
  name: string
  icon: string
  color: string
}

interface Experiences {
  from: string
  message: string
  dateRange: string
  technologies: string[]
  color: string
}

const technologies = ref<Technology[]>([
  { name: 'Angular.js', icon: 'mdi-angular', color: '#dd0031' },
  { name: 'React.js', icon: 'mdi-react', color: '#61dafb' },
  { name: 'Node.js', icon: 'mdi-nodejs', color: '#8CC84B' },
  { name: 'Vue.js', icon: 'mdi-vuejs', color: '#42b883' },
  { name: 'JavaScript', icon: 'mdi-language-javascript', color: '#d0b13b' },
  { name: 'TypeScript', icon: 'mdi-language-typescript', color: '#3178c6' },
  { name: 'Git', icon: 'mdi-git', color: '#f34f29' },
  { name: 'Vuetify', icon: 'mdi-vuetify', color: '#1867c0' },
  { name: 'Docker', icon: 'mdi-docker', color: '#2496ed' },
  { name: 'MongoDB', icon: 'mdi-leaf', color: '#47a248' },
  { name: 'PostgreSQL', icon: 'mdi-database', color: '#336791' },
  { name: 'MySQL', icon: 'mdi-database', color: '#00758f' },
  { name: 'Linux', icon: 'mdi-linux', color: '#323b4f' },
  { name: 'HTML', icon: 'mdi-language-html5', color: '#D2691E' },
  { name: 'CSS', icon: 'mdi-language-css3', color: '#1E90FF' },
])

const experiences = ref<Experiences[]>([
  {
    from: 'NuageIT',
    message: 'Desenvolvimento de aplicações web fullstack.',
    dateRange: '04/2025 até o momento',
    technologies: ['Angular.js', 'Javascript', 'CSS', 'HTML'],
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'Comunix',
    message: 'Desenvolvimento de aplicações web frontend.',
    dateRange: '09/2023 a 04/2025',
    technologies: ['Vue.js', 'Javascript', 'Node.js', 'Docker', 'Linux'],
    color: 'deep-purple-lighten-1',
  },
  {
    from: 'Tegra',
    message: 'Suporte técnico.',
    dateRange: '07/2023 a 08/2023',
    technologies: ['ServiceNow', 'Linux', 'AWS'],
    color: 'green',
  },
  {
    from: 'Tegra',
    message: 'Desenvolvimento web frontend.',
    dateRange: '11/2022 a 05/2023',
    technologies: ['Vue.js', 'React.js', 'Javascript', 'Node.js', 'PostgreSQL', 'Linux'],
    color: 'deep-purple-lighten-1',
  },
])
</script>

<style scoped>
#about {
  background-color: #f8ecd4;
  padding: 40px 0;
}

.about-text {
  max-width: 500px;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
  margin-bottom: 10px;
}

.about-text h2 {
  font-size: 24px;
  color: #333;
}

.about-text p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.btn {
  text-transform: capitalize;
  font-family: 'Capriola', sans-serif;
  max-width: 200px;
  background: linear-gradient(90deg, rgb(134, 101, 186), #3f51b5);
  color: white;
}

.tech-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.tech-icon {
  font-size: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.tech-icon:hover {
  transform: scale(1.2);
}
</style>
