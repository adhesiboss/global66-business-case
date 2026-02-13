// front/server/api/index.js
const express = require('express')
const router = express.Router()

router.get('/rates', (req, res) => {
  try {
    const base = String(req.query.base || 'USD').toUpperCase()
    const target = String(req.query.target || '').toUpperCase()

    const isCode = (v) => /^[A-Z]{3}$/.test(v)
    if (!isCode(base) || !isCode(target)) {
      return res.status(400).json({ error: 'Invalid query. Use base/target as ISO-3 (e.g. USD, CLP).' })
    }

    const USD_RATES = { CLP: 987.62, PEN: 3.81, USD: 1 }
    const asOf = '2025-10-31T17:51:00Z'

    // USD -> target
    if (base === 'USD') {
      const rate = USD_RATES[target]
      if (!rate) return res.status(404).json({ error: 'Rate not found' })
      return res.json({ base, rates: { [target]: rate }, asOf })
    }

    // base -> USD
    if (target === 'USD') {
      const usdToBase = USD_RATES[base]
      if (!usdToBase) return res.status(404).json({ error: 'Rate not found' })
      return res.json({ base, rates: { USD: 1 / usdToBase }, asOf })
    }

    // cross vía USD
    const usdToBase = USD_RATES[base]
    const usdToTarget = USD_RATES[target]
    if (!usdToBase || !usdToTarget) return res.status(404).json({ error: 'Rate not found' })

    const baseToTarget = (1 / usdToBase) * usdToTarget
    return res.json({ base, rates: { [target]: baseToTarget }, asOf })
  } catch (e) {
    console.error('[FRONT /api/rates] error', e)
    return res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router