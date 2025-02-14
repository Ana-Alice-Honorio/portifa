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

        <v-app-bar-title>
          Oi, sou Alice
          <v-icon>mdi-star-outline</v-icon>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn v-for="link in menuLinks" :key="link.text" @click="scrollToSection(link.href)">
          {{ link.text }}
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
export default {
  data: () => ({
    menuLinks: [
      { text: 'Início', href: 'hero' },
      { text: 'Sobre', href: 'about' },
      { text: 'Projetos', href: 'projects' },
      { text: 'Contato', href: 'contact' },
    ],
  }),
  methods: {
    scrollToSection(sectionId: string) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped>
.v-app-bar {
  width: 100%;
}

.v-app-bar-title {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
