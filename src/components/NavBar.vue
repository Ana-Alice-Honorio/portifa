<template>
  <v-card class="mx-auto header" max-width="100%">
    <v-layout>
      <v-app-bar color="teal-darken-4">
        <template v-slot:image>
          <v-img gradient="to top right, rgb(134, 101, 186),  #3f51b5"></v-img>
        </template>

        <v-app-bar-title class="name"
          >{{ $t('menu.title') }}<v-icon>mdi-star-outline</v-icon></v-app-bar-title
        >

        <v-spacer></v-spacer>

        <v-btn variant="text" @click="scrollTo('hero')" class="capriola-text">{{
          $t('menu.navbar.home')
        }}</v-btn>
        <v-btn variant="text" @click="scrollTo('about')" class="capriola-text">{{
          $t('menu.navbar.about')
        }}</v-btn>
        <v-btn variant="text" @click="scrollTo('projects')" class="capriola-text">{{
          $t('menu.navbar.projects')
        }}</v-btn>
        <v-btn variant="text" @click="scrollTo('contact')" class="capriola-text">{{
          $t('menu.navbar.contact')
        }}</v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.header {
  padding: 8px;
  position: fixed;
  left: 0;
  z-index: 100;
}

.name {
  font-family: 'Capriola', sans-serif;
  font-size: 20px;
}

.capriola-text {
  font-family: 'Capriola', sans-serif;
  font-size: 15px;
  text-transform: capitalize;
}
</style>
