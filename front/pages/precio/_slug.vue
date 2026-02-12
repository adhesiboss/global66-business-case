<template>
  <main class="min-h-screen bg-gray-50">
    <section class="mx-auto max-w-5xl px-4 py-10">
      <div
        class="rounded-xl bg-surface shadow-soft border border-border p-6 md:p-10"
      >
        <p class="text-sm font-semibold text-muted">
          Global66 · Tipo de cambio
        </p>

        <h1 class="mt-3 text-3xl md:text-5xl font-extrabold text-ink">
          Valor del dólar hoy
        </h1>

        <p class="mt-4 text-base md:text-lg text-muted">
          1 {{ base }} =
          <span class="font-semibold text-ink">{{ formattedRate }}</span>
          <span class="font-semibold text-ink">{{ target }}</span>
        </p>

        <p class="mt-2 text-sm text-muted">
          Tipo de cambio para {{ asOfDate }} a las {{ asOfTime }} UTC
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#cta"
            class="btn-primary bg-brand text-white hover:opacity-95"
          >
            Recibir info
          </a>
          <a
            :href="canonical"
            class="btn-primary bg-white text-ink border border-border hover:bg-gray-50"
          >
            URL canónica
          </a>
        </div>

        <div id="cta" class="mt-10 border-t border-border pt-6">
          <h2 class="text-lg font-bold text-ink">
            Recibe el tipo de cambio por correo
          </h2>

          <form
            class="mt-4 flex flex-col md:flex-row gap-3"
            @submit.prevent="submitLead"
          >
            <input
              v-model.trim="name"
              class="w-full rounded-xl border border-border px-4 py-3"
              placeholder="Nombre"
            />
            <input
              v-model.trim="email"
              class="w-full rounded-xl border border-border px-4 py-3"
              placeholder="Email"
            />
            <button
              class="btn-primary bg-ink text-white"
              type="submit"
              :disabled="loading"
            >
              {{ loading ? 'Enviando...' : 'Enviar' }}
            </button>
          </form>

          <p
            v-if="status"
            class="mt-3 text-sm"
            :class="status.ok ? 'text-green-600' : 'text-red-600'"
          >
            {{ status.message }}
          </p>
        </div>
      </div>
    </section>
  </main>
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

    // Canonical dinámico según host (SSR-safe)
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
      return new Intl.NumberFormat('es-CL', { maximumFractionDigits: 2 }).format(
        this.rate
      )
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
      meta: [{ hid: 'description', name: 'description', content: description }],
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
        : `Enviado (mock) ✅ (${r.requestId})`,
    }

    this.name = ''
    this.email = ''
  } catch (e) {
    this.status = { ok: false, message: 'No se pudo enviar. Intenta nuevamente.' }
  } finally {
    this.loading = false
  }
}
  },
}
</script>