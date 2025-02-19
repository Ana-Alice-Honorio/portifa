<template>
  <main class="home-container">
    <section id="hero"><HeroComp /></section>
    <section id="about"><AboutMe /></section>
    <section id="projects"><MyProjects /></section>
    <section id="contact"><FooterCs /></section>
  </main>
</template>

<script setup lang="ts">
import HeroComp from '../components/HeroComp.vue'
import AboutMe from '../components/AboutMe.vue'
import MyProjects from '../components/MyProjects.vue'
import FooterCs from '../components/FooterCs.vue'
</script>

<style scoped>
.home-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}
</style>
