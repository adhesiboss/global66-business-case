// front/nuxt.config.js

export default {
  ssr: true,
  target: 'server',
  components: true,

  /*
   * ✅ MUY IMPORTANTE
   * Montamos /api en el MISMO servidor Nuxt.
   * Esto evita que SSR pegue al BACK (Cloudflare 429).
   */
  serverMiddleware: [
    { path: '/api', handler: '~/server/api/index.js' },
  ],

  modules: ['@nuxtjs/axios'],

  /*
   * ✅ Axios SAME-ORIGIN
   * - En SSR: $axios('/api/...') pega al mismo server Nuxt
   * - En Browser: igual (mismo dominio del front)
   *
   * NO apuntamos al back externo.
   */
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: '/', // siempre front
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: '/', // SSR usa mismo servidor
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
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
}