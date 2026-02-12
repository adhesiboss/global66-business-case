export default {
  ssr: true,
  target: 'server',
  components: true,

  modules: ['@nuxtjs/axios'],

  // ✅ Proxy para que /api/* funcione en SSR y client
  axios: { proxy: true },
proxy: {
  '/api/': {
    target: process.env.API_BASE_URL || 'http://127.0.0.1:3001',
    changeOrigin: true,
  },
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