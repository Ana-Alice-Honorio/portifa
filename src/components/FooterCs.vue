<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
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
      <p>Construído com ❤️ usando <strong>Vuetify</strong>. Conecte-se comigo nas redes sociais!</p>
    </div>

    <v-divider class="my-2"></v-divider>

    <div>&copy; {{ new Date().getFullYear() }} — <strong>Meu Portfólio</strong></div>
  </v-footer>
</template>

<script lang="ts">
export default {
  data: () => ({
    socialLinks: [
      { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/Ana-Alice-Honorio' },
      { name: 'Medium', icon: 'mdi-alpha-m-circle', url: 'https://medium.com/@anaalicehonorio' },

      {
        name: 'LinkedIn',
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/anaalicehonorio',
      },
      { name: 'Instagram', icon: 'mdi-instagram', url: 'https://instagram.com/geek_in_code' },
    ],
  }),
}
</script>

<style scoped>
.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
