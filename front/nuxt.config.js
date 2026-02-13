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
  serverMiddleware: [{ path: '/api', handler: '~/server/api/index.js' }],

  modules: ['@nuxtjs/axios'],

  /*
   * ✅ Axios SAME-ORIGIN
   * - Browser: siempre same-origin (dominio del front)
   * - SSR: debe llamar a ESTE MISMO server usando PORT (Render)
   *
   * ⚠️ Importante:
   * NO uses API_BASE_URL aquí, porque si apunta al back, vuelve el 429.
   */
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: '/', // browser -> front
    },
  },

  privateRuntimeConfig: {
    axios: {
      // SSR -> self-call al server Nuxt actual (Render)
      baseURL: `http://127.0.0.1:${process.env.PORT || 3000}`,
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}