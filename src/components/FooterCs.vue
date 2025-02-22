<template>
  <section class="footer-container">
    <v-container>
      <v-row class="d-flex flex-column" align="center" id="contact">
        <v-col cols="12" md="12">
          <div>
            <p>
              Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
              of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
              in 45 BC. This book is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
              a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
              Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="12">
          <v-footer class="body-footer text-center d-flex flex-column">
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
              <p>
                {{ $t('footer.title') }} <strong>{{ $t('footer.me') }}</strong>
                {{ $t('footer.conect') }}
              </p>
            </div>

            <v-divider class="my-2"></v-divider>

            <div>&copy; {{ new Date().getFullYear() }}</div>
          </v-footer>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SocialLink {
  name: string
  icon: string
  url: string
}

const socialLinks = ref<SocialLink[]>([
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/Ana-Alice-Honorio' },
  { name: 'Medium', icon: 'mdi-alpha-m-circle', url: 'https://medium.com/@anaalicehonorio' },
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/anaalicehonorio' },
  { name: 'Instagram', icon: 'mdi-instagram', url: 'https://instagram.com/geek_in_code' },
])
</script>

<style scoped>
.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.body-footer {
  background: linear-gradient(90deg, rgb(134, 101, 186), #3f51b5);
  color: white;
}

.footer-container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  background: #f5fffa;
}
</style>
