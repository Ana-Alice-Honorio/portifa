<template>
  <v-card class="mx-auto header" max-width="100%">
    <v-layout>
      <v-app-bar color="teal-darken-4">
        <template v-slot:image>
          <v-img gradient="to top right, rgb(134, 101, 186), #3f51b5"></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title class="name">
          {{ $t('menu.title') }}
          <v-icon>mdi-star-outline</v-icon>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <div class="d-none d-md-flex">
          <v-btn variant="text" @click="scrollTo('hero')" class="capriola-text">
            {{ $t('menu.navbar.home') }}
          </v-btn>
          <v-btn variant="text" @click="scrollTo('about')" class="capriola-text">
            {{ $t('menu.navbar.about') }}
          </v-btn>
          <v-btn variant="text" @click="scrollTo('projects')" class="capriola-text">
            {{ $t('menu.navbar.projects') }}
          </v-btn>
          <v-btn variant="text" @click="scrollTo('contact')" class="capriola-text">
            {{ $t('menu.navbar.contact') }}
          </v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item @click="scrollTo('hero')">
            {{ $t('menu.navbar.home') }}
          </v-list-item>
          <v-list-item @click="scrollTo('about')">
            {{ $t('menu.navbar.about') }}
          </v-list-item>
          <v-list-item @click="scrollTo('projects')">
            {{ $t('menu.navbar.projects') }}
          </v-list-item>
          <v-list-item @click="scrollTo('contact')">
            {{ $t('menu.navbar.contact') }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    drawer.value = false
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(90deg, rgb(134, 101, 186), #3f51b5);
  color: white;
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
