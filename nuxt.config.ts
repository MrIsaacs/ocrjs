export default defineNuxtConfig({
  app: {
    baseURL: '/ocrjs/'
  },
  css: [
    '@/assets/scss/styles.scss'
  ],

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    "usebootstrap"
  ]
})
