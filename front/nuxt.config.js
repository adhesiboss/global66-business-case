// front/nuxt.config.js
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

export default {
  ssr: true,
  target: 'server',
  components: true,

  serverMiddleware: [{ path: '/api', handler: '~/server/api/index.js' }],

  modules: ['@nuxtjs/axios'],

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: '/', // browser => same-origin
    },
  },

  privateRuntimeConfig: {
    axios: {
      // SSR => se llama a sí mismo
      baseURL: isProd
        ? `http://127.0.0.1:${port}` // Render/producción
        : `http://localhost:${port}`, // local
    },
  },

  css: ['~/assets/css/tailwind.css'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: { tailwindcss: {}, autoprefixer: {} },
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