// back/server.js
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { z } = require('zod')
const { google } = require('googleapis')

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny')) // log simple

// Health (útil para Render)
app.get('/health', (_req, res) => res.json({ ok: true }))

// ---------- GET /api/rates ----------
const MOCK = {
  // tasas por 1 USD
  base: 'USD',
  rates: { CLP: 987.62, PEN: 3.81, USD: 1 },
  asOf: '2025-10-31T17:51:00Z',
}

const isCurrency = (v) => typeof v === 'string' && /^[A-Z]{3}$/.test(v)

app.get('/api/rates', (req, res) => {
  try {
    const base = String(req.query.base || 'USD').toUpperCase()
    const target = String(req.query.target || '').toUpperCase()

    // validaciones
    if (!isCurrency(base)) {
      return res.status(400).json({ error: 'Invalid base currency. Use ISO-3 (e.g. USD, CLP).' })
    }
    if (!isCurrency(target)) {
      return res.status(400).json({ error: 'Invalid target currency. Use ISO-3 (e.g. USD, CLP).' })
    }

    const USD_RATES = MOCK.rates
    const asOf = MOCK.asOf

    // ✅ Caso directo: USD -> target
    if (base === 'USD') {
      const rate = USD_RATES[target]
      if (!rate) return res.status(404).json({ error: 'Rate not found' })
      return res.json({ base, rates: { [target]: rate }, asOf })
    }

    // ✅ Caso inverso: base -> USD (CLP->USD, PEN->USD)
    if (target === 'USD') {
      const usdToBase = USD_RATES[base]
      if (!usdToBase) return res.status(404).json({ error: 'Rate not found' })
      const baseToUsd = 1 / usdToBase
      return res.json({ base, rates: { USD: baseToUsd }, asOf })
    }

    // ✅ Cross rate: base != USD y target != USD (vía USD)
    // base->target = (base->USD) * (USD->target)
    const usdToBase = USD_RATES[base]
    const usdToTarget = USD_RATES[target]
    if (!usdToBase || !usdToTarget) return res.status(404).json({ error: 'Rate not found' })

    const baseToTarget = (1 / usdToBase) * usdToTarget
    return res.json({ base, rates: { [target]: baseToTarget }, asOf })
  } catch (e) {
    console.error('[GET /api/rates] error', e)
    return res.status(500).json({ error: 'Server error' })
  }
})

// ---------- POST /api/lead ----------
const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  slug: z.string().optional(),
})

async function getSheetsClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_JSON')

  const creds = JSON.parse(raw)

  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return google.sheets({ version: 'v4', auth })
}

app.post('/api/lead', async (req, res) => {
  const parsed = leadSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid payload', details: parsed.error.flatten() })
  }

  const { name, email, slug } = parsed.data
  const spreadsheetId = process.env.SHEET_ID

  const requestId = `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`
  const receivedAt = new Date().toISOString()

  // Fallback: si no hay credenciales, no bloquea el flujo (igual cumple API + logs)
  if (!spreadsheetId || !process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    console.log('[LEAD MOCK]', { requestId, receivedAt, name, email, slug })
    return res.json({ ok: true, saved: false, requestId, receivedAt })
  }

  try {
    const sheets = await getSheetsClient()
    const now = receivedAt

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[now, name, email, slug || '']],
      },
    })

    return res.json({ ok: true, saved: true, requestId, receivedAt })
  } catch (e) {
    console.error('[SHEETS_ERROR]', requestId, e?.message || e)
    return res.status(500).json({ error: 'Failed to write to sheet', requestId })
  }
})

// ✅ Deploy-ready (Render / Railway / etc.)
const PORT = process.env.PORT || 3001
app.listen(PORT, '0.0.0.0', () => console.log(`API running on http://localhost:${PORT}`))