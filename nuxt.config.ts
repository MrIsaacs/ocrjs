export default defineNuxtConfig({
  app: {
    baseURL: '/ocrjs/'
  },
  css: [
    '@/assets/scss/styles.scss'
  ],

  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
    'usebootstrap'
  ]
})
