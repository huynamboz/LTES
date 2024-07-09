// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: '_assets',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/logo.jpg' }],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    'nuxt-marquee',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: './tailwind.config.js',
  },
})
