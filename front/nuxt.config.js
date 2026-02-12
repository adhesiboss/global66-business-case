// front/nuxt.config.js
export default {
  ssr: true,
  target: 'server',
  components: true,

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: (process.env.API_BASE_URL || 'http://localhost:3001').replace(/\/+$/, ''),
  },

  css: ['~/assets/css/tailwind.css'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  head: {
    htmlAttrs: { lang: 'es-CL' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
}