import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import en from './locales/en.json'
import es from './locales/es.json'
import Home from './views/Home.vue'

const getLang = () => {
  const lang = navigator.language
  const resp = lang.startsWith('es') ? 'es' : 'en'
  localStorage.setItem('language', resp)

  return resp
}
const langToUse = localStorage.getItem('language') ?? getLang()

const i18n = createI18n({
  legacy: false,
  locale: langToUse,
  fallbackLocale: langToUse,
  messages: { en, es }
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Professional CV'
      }
    }
  ]
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(createPinia())
app.mount('#app')