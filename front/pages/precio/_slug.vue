<template>
  <div>
    <!-- NAVBAR -->
    <header class="bg-primary text-white">
  <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
    <!-- LEFT -->
    <div class="flex items-center gap-10">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img
          src="/images/text-right.svg"
          alt="Global66"
          class="h-6 md:h-7 w-auto object-contain"
        />
      </a>

      <!-- Personas / Empresas -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-semibold tracking-wide">
        <a
  href="#"
  class="relative text-accent font-semibold tracking-wide
         after:content-[''] after:absolute after:left-0 after:-bottom-2
         after:h-[3px] after:w-12 after:bg-accent after:rounded-full"
>
  PERSONAS
</a>
        <a href="#" class="opacity-90 hover:opacity-100">EMPRESAS</a>
      </nav>
    </div>

    <!-- CENTER -->
    <!-- CENTER -->
<nav class="hidden lg:flex items-center gap-10 text-sm font-semibold">
  <a href="#" class="flex items-center gap-2 opacity-95 hover:opacity-100">
    Productos <span class="text-white/80">⌄</span>
  </a>
  <a href="#" class="flex items-center gap-2 opacity-95 hover:opacity-100">
    Beneficios <span class="text-white/80">⌄</span>
  </a>
  <a href="#" class="opacity-95 hover:opacity-100">
    Ayuda
  </a>
</nav>

<!-- RIGHT -->
<div class="flex items-center gap-5 text-sm font-semibold">
  <!-- Flag + chevron -->
  <button type="button" class="hidden md:flex items-center gap-2 opacity-95 hover:opacity-100">
    <img src="/images/Flag.svg" alt="Chile" class="h-5 w-5" />
    <span class="text-white/80">⌄</span>
  </button>

  <!-- Divider -->
  <div class="hidden md:block h-6 w-px bg-white/30" />

  <!-- Login -->
  <a href="#" class="opacity-95 hover:opacity-100">
    Iniciar Sesión
  </a>

  <!-- CTA Outline -->
  <a
    href="#"
    class="px-5 py-2 rounded-full border border-white/80 text-white hover:border-white hover:bg-white/10"
  >
    Crear cuenta
  </a>
</div>
  </div>
</header>

    <!-- HERO -->
    <section class="bg-primary text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- LEFT -->
        <div class="max-w-xl">
          <h1 class="text-4xl md:text-5xl font-light leading-tight">
            Valor del dolar hoy
          </h1>

          <div class="mt-6 md:mt-8 text-3xl md:text-5xl font-extrabold tracking-tight">
            1 {{ base }} = {{ formattedRate }} {{ target }}
          </div>

          <p class="mt-4 md:mt-6 text-base md:text-lg opacity-90">
            Tipo de cambio para {{ asOfDate }} a las {{ asOfTime }} UTC
          </p>
        </div>

        <!-- RIGHT (composición con tus assets) -->
        <!-- RIGHT (Hero visual) -->
<!-- RIGHT (Hero visual) -->
<!-- RIGHT (Hero visual, improved) -->
<!-- RIGHT (Hero visual, stand.svg + arrow fixed) -->
<div class="relative w-full md:w-[560px] flex justify-center md:justify-end">
  <div class="relative w-[560px] h-[340px] md:scale-[1.02] md:origin-right">

    <!-- Glow azul sutil detrás -->
    <div
      class="absolute right-[80px] bottom-[70px] w-[220px] h-[220px]
             rounded-full bg-blue-400/20 blur-3xl z-[1]"
    ></div>

    <!-- Stand / base (asset real) -->
    <img
      src="/images/stand.svg"
      alt=""
      class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[560px] z-[2]
             drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
    />

    <!-- Chile (atrás) -->
    <div class="absolute left-[95px] top-[52px] w-[230px] h-[230px] z-[10]">
      <div
        class="absolute inset-0 rounded-full
               bg-gradient-to-br from-white/30 to-blue-200/20"
        style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
      ></div>
      <div class="absolute inset-[10px] rounded-full bg-white shadow-xl"></div>
      <img
        src="/images/Flag.svg"
        alt="Chile"
        class="absolute inset-[18px] w-[194px] h-[194px] object-cover rounded-full"
      />
    </div>

    <!-- USA (adelante) -->
    <div class="absolute left-[255px] top-[62px] w-[245px] h-[245px] z-[20]">
      <div
        class="absolute inset-0 rounded-full
               bg-gradient-to-br from-white/35 to-blue-200/25"
        style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);"
      ></div>
      <div class="absolute inset-[10px] rounded-full bg-white shadow-2xl"></div>
      <img
        src="/images/united-states-of-america.svg"
        alt="USA"
        class="absolute inset-[18px] w-[209px] h-[209px] object-cover rounded-full"
      />
    </div>

    <!-- Flecha (mover izquierda) -->
    <img
      src="/images/arrow.svg"
      alt=""
      class="absolute left-[230px] top-[16px] w-[120px] z-[30]
             drop-shadow-[0_10px_16px_rgba(0,0,0,0.25)]"
    />
  </div>
</div>
      </div>
    </section>

    <!-- SECTION GRIS -->
 <section class="bg-white py-24">
  <div class="max-w-7xl mx-auto px-6">
    <div class="relative pb-10 md:pb-14 pr-6 md:pr-10">
      <!-- PANEL GRIS (fondo) -->
      <div class="bg-[#F4F7FF] rounded-3xl px-10 py-14">
        <div class="grid md:grid-cols-2 items-center gap-10">
          <!-- LEFT -->
          <div class="max-w-md">
            <h2 class="text-5xl font-light leading-tight text-gray-900">
              Sé Global,
            </h2>

            <h2 class="text-5xl font-extrabold text-primary mt-2">
              paga como local
            </h2>

            <p class="mt-6 text-lg text-gray-600">
              Tu Cuenta Global para pagar, convertir, enviar dinero y más.
            </p>

            <div class="mt-8 flex gap-4">
              <img src="/images/playstore.svg" alt="Google Play" class="h-12" />
              <img src="/images/appstore.svg" alt="App Store" class="h-12" />
            </div>
          </div>

          <!-- RIGHT placeholder: solo para reservar espacio -->
          <div class="hidden md:block h-[420px]" />
        </div>
      </div>

      <!-- IMAGEN FLOTANTE (encima del panel) -->
      <div class="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <img
          src="/images/banner-img.png"
          alt="Global66 app"
          class="w-[700px] max-w-none translate-x-8 -translate-y-4"
        />
      </div>

      <!-- MOBILE: imagen normal debajo (sin flotante) -->
      <div class="md:hidden mt-10 flex justify-center">
        <img
          src="/images/banner-img.png"
          alt="Global66 app"
          class="w-full max-w-[520px]"
        />
      </div>
    </div>
  </div>
</section>
    <!-- CTA -->
    <section id="cta" class="bg-white py-16">
      <div class="max-w-3xl mx-auto px-6">
        <div class="border border-gray-200 rounded-2xl p-6 md:p-10 shadow-soft">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900">Recibe el tipo de cambio por correo</h3>

          <form class="mt-6 flex flex-col md:flex-row gap-3" @submit.prevent="submitLead">
            <input v-model.trim="name" class="w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Nombre" />
            <input v-model.trim="email" class="w-full rounded-xl border border-gray-200 px-4 py-3" placeholder="Email" />
            <button class="btn-primary bg-gray-900 text-white" type="submit" :disabled="loading">
              {{ loading ? 'Enviando...' : 'Enviar' }}
            </button>
          </form>

          <p v-if="status" class="mt-3 text-sm" :class="status.ok ? 'text-green-600' : 'text-red-600'">
            {{ status.message }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const CURRENCY_MAP = {
  'peso-chileno': 'CLP',
  'sol-peruano': 'PEN',
  dolares: 'USD',
}

export default {
  data() {
    return {
      name: '',
      email: '',
      loading: false,
      status: null,
    }
  },

  async asyncData({ params, $axios, error, req }) {
    const slug = params.slug
    const target = CURRENCY_MAP[slug]
    if (!target) return error({ statusCode: 404, message: 'Divisa no soportada' })

    const host = req?.headers?.host || 'localhost:3000'
    const protocol = host.includes('localhost') ? 'http' : 'https'
    const origin = `${protocol}://${host}`

    const base = 'USD'
    let data
    try {
      data = await $axios.$get('/api/rates', { params: { base, target } })
    } catch (e) {
      return error({ statusCode: 500, message: 'Error cargando tasas' })
    }

    const rate = data?.rates?.[target]
    if (!rate) return error({ statusCode: 404, message: 'Tasa no encontrada' })

    return { slug, base, target, rate, asOf: data.asOf, origin }
  },

  computed: {
    canonical() {
      return `${this.origin}/precio/${this.slug}`
    },
    formattedRate() {
      return new Intl.NumberFormat('es-CL', { maximumFractionDigits: 2 }).format(this.rate)
    },
    asOfDate() {
      const d = new Date(this.asOf)
      return d.toISOString().slice(0, 10)
    },
    asOfTime() {
      const d = new Date(this.asOf)
      return d.toISOString().slice(11, 16)
    },
  },

  head() {
    const title = `Valor del dólar hoy en ${this.target} | Global66`
    const description = `Consulta el valor del dólar en ${this.target} actualizado. Tipo de cambio ${this.base}/${this.target} con fecha y hora (UTC).`

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },

        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:type', property: 'og:type', content: 'website' },

        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
      ],
      link: [
        { rel: 'canonical', href: this.canonical },
        { rel: 'alternate', hrefLang: 'es-CL', href: this.canonical },
      ],
    }
  },

  methods: {
    async submitLead() {
      this.status = null
      if (!this.name || !this.email) {
        this.status = { ok: false, message: 'Completa nombre y email.' }
        return
      }

      this.loading = true
      try {
        const r = await this.$axios.$post('/api/lead', {
          name: this.name,
          email: this.email,
          slug: this.slug,
        })

        this.status = {
          ok: true,
          message: r.saved
            ? `Guardado ✅ (${r.requestId})`
            : `Enviado (mock) ✅ (${r.requestId}) · ${r.receivedAt}`,
        }

        this.name = ''
        this.email = ''
      } catch (e) {
        this.status = { ok: false, message: 'No se pudo enviar. Intenta nuevamente.' }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>