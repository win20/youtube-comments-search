// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/css/input.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],

  googleFonts: {
    families: {
      'Noto+Sans': [300, 400, 700],
    }
  }
})


