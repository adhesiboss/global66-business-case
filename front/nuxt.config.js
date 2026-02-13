// front/nuxt.config.js
export default {
  ssr: true,
  target: 'server',
  components: true,

  // ✅ Montamos /api en el MISMO servidor Nuxt (evita Cloudflare 429 del back)
  serverMiddleware: [{ path: '/api', handler: '~/server/api/index.js' }],

  modules: ['@nuxtjs/axios'],

  /**
   * ✅ Clave: para SSR + Browser usamos SAME-ORIGIN por defecto
   * - asyncData hace $axios.$get('/api/rates'...) -> pega al front (serverMiddleware)
   * - en browser también pega al mismo dominio del front
   *
   * Si algún día quieres apuntar al back live, puedes setear:
   *   API_BASE_URL=https://global66-business-case-back.onrender.com
   * y hacer llamadas ABSOLUTAS desde código (no recomendado para SSR por CF).
   */
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_API_BASE_URL || process.env.API_BASE_URL || '/',
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
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