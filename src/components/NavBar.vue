<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="100%">
    <v-layout>
      <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
          <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>{{ $t('menu.title') }}<v-icon>mdi-star-outline</v-icon></v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" @click="scrollTo('hero')">{{ $t('menu.navbar.home') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('about')">{{ $t('menu.navbar.about') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('projects')">{{ $t('menu.navbar.projects') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('contact')">{{ $t('menu.navbar.contact') }}</v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
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
