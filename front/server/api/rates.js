// front/server/api/rates.js
export default function rates(req, res) {
  try {
    const url = new URL(req.url, 'http://localhost')
    const base = (url.searchParams.get('base') || 'USD').toUpperCase()
    const target = (url.searchParams.get('target') || '').toUpperCase()

    // Validaciones mínimas (alineado al back)
    const codeRegex = /^[A-Z]{3}$/
    if (!codeRegex.test(base)) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify({ ok: false, error: 'Invalid base' }))
    }
    if (target && !codeRegex.test(target)) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify({ ok: false, error: 'Invalid target' }))
    }

    // Mock (requisito prueba)
    const MOCK = {
      base: 'USD',
      rates: { CLP: 987.62, PEN: 3.81, USD: 1 },
      asOf: '2025-10-31T17:51:00Z',
    }

    // Solo USD como base en mock
    if (base !== 'USD') {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify({ ok: false, error: 'Base not supported in mock' }))
    }

    if (target) {
      const rate = MOCK.rates[target]
      if (!rate) {
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify({ ok: false, error: 'Rate not found' }))
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify({ base: MOCK.base, rates: { [target]: rate }, asOf: MOCK.asOf }))
    }

    // sin target: devuelve todo el set (opcional)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({ base: MOCK.base, rates: MOCK.rates, asOf: MOCK.asOf }))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[FRONT_API_RATES_ERROR]', e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({ ok: false, error: 'Server error' }))
  }
}