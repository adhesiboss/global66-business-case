// front/server/api/index.js
import rates from './rates.js'

export default function api(req, res, next) {
  // req.url viene como "/rates?base=USD..."
  if (req.url.startsWith('/rates')) return rates(req, res)
  return next()
}