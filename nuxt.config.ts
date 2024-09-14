export default defineNuxtConfig({
  css: [
    '@/assets/scss/styles.scss'
  ],

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    "usebootstrap"
  ]
})