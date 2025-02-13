import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//vue i18n
import i18n from './locales'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Importação do MDI Icons
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(i18n)

app.mount('#app')
