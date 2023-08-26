import './assets/style.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import DateFnsAdapter from '@date-io/date-fns'
// import plPL from '@date-io/date-fns/locale/plPL'

const vuetify = createVuetify({
  components,
  directives
  // date: {
  //   adapter: DateFnsAdapter,
  //   locale: {
  //     pl: plPL
  //   }
  // }
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
