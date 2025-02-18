<template>
  <section id="projects">
    <h2>Meus Projetos</h2>
    <div v-for="project in projects" :key="project.id">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  { id: 1, name: 'Portfolio Vue', description: 'SPA dinâmica com Vue Router.' },
  { id: 2, name: 'App de Tarefas', description: 'Gerenciador de tarefas com Vuex.' },
])
</script>

<style scoped>
#projects {
  background: #ceebd1;
}
</style>
