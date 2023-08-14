// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {

    head: {
      script: ['<meta name="google-site-verification" content="jdr9VkEaWVgXh7Pn5auGXxg81AKXc2vLStALqkz51vc" />'],
    }
  },

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
    '@pinia/nuxt',
  ],

  googleFonts: {
    families: {
      'Noto+Sans': [300, 400, 700],
    }
  },

  runtimeConfig: {
    youtubeApiKey: '',
    publicFolderPath: '',
    public: {
      apiBaseUrl: '',
      devApiBaseUrl: '',
      env: '',
    }
  },

  routeRules: {
    '/api/**': { cors: true },
  }
})


