import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

import App from './App.vue'
import router from './router'

import Vue3ColorPicker from 'vue3-colorpicker'
import 'vue3-colorpicker/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3ColorPicker)
app.use(vuetify)

app.mount('#app')
