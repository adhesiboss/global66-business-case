# Global66 — Prueba Técnica (Lead Web Developer)

Landing dinámica de tipo de cambio implementada en **Nuxt 2 (SSR) + TailwindCSS** y API mínima en **Express** para tasas y captura de leads.

---

# 🎯 Objetivo

- Implementar `/precio/*` usando SSR.
- Consumir tasas desde un endpoint local mockeado.
- Aplicar buenas prácticas de SEO técnico.
- Demostrar criterio de Growth (medición, hipótesis, conversión).
- Implementar API con validaciones y manejo de errores coherente.

---

# 🧱 Stack

## Frontend
- Nuxt 2 (SSR habilitado)
- TailwindCSS
- Ruta dinámica `/precio/:slug`
- SEO dinámico (title, description, canonical, hreflang)

## Backend
- Node.js
- Express
- Zod (validación de payload)
- Morgan (logging)
- CORS

---

# 📂 Estructura del repositorio

```
/
  front/        → Nuxt 2 SSR + Tailwind
  back/         → Express API
  docs/         → Growth document
  README.md
```

---

# ⚙️ Requisitos

- Node.js **v18**
- npm

---

# 🚀 Cómo ejecutar localmente

## 1️⃣ Backend

```bash
cd back
npm install
npm run dev
```

Disponible en:
```
http://localhost:3001
```

Health check:
```
GET http://localhost:3001/health
```

---

## 2️⃣ Frontend

```bash
cd front
npm install
npm run dev
```

Disponible en:
```
http://localhost:3000
```

---

# 🌐 Rutas dinámicas

Ejemplos válidos:

- `/precio/peso-chileno` → USD/CLP
- `/precio/sol-peruano` → USD/PEN
- `/precio/dolares` → USD/USD

El `slug` se resuelve usando un diccionario local:

```
peso-chileno → CLP  
sol-peruano → PEN  
dolares → USD  
```

---

# 🔌 API

## GET `/api/rates`

Endpoint mockeado que simula tasas.

### Ejemplo

```bash
curl -s "http://localhost:3001/api/rates?base=USD&target=CLP"
```

### Respuesta

```json
{
  "base": "USD",
  "rates": { "CLP": 987.62 },
  "asOf": "2025-10-31T17:51:00Z"
}
```

### Validaciones

- `base` y `target` deben ser `^[A-Z]{3}$`
- Solo `USD` como base en mock
- Manejo de errores:
  - `400` → invalid query
  - `404` → rate not found
  - `500` → server error

---

## POST `/api/lead`

Captura de leads (`name`, `email`, `slug`).

Valida payload con Zod.

### Ejemplo

```bash
curl -s -X POST "http://localhost:3001/api/lead" \
  -H "Content-Type: application/json" \
  -d '{"name":"Raul","email":"raul@test.com","slug":"peso-chileno"}'
```

### Respuesta en modo mock

```json
{
  "ok": true,
  "saved": false,
  "requestId": "lead_XXXX",
  "receivedAt": "2026-02-12T06:24:54.648Z"
}
```

---

# 📊 Persistencia en Google Sheets

El endpoint está preparado para escribir en Google Sheets usando Service Account.

En este entorno, la creación de claves JSON está bloqueada por política organizacional:

```
iam.disableServiceAccountKeyCreation
```

Por lo tanto, se implementó fallback **mock** que:

- No bloquea el flujo
- Responde exitosamente
- Registra trazabilidad en consola

---

## Para habilitar persistencia real

1. Crear Service Account
2. Generar credencial JSON
3. Compartir Google Sheet con `client_email`
4. Configurar en `back/.env`:

```
SHEET_ID=xxxx
GOOGLE_SERVICE_ACCOUNT_JSON={...}
```

En producción se recomienda:
- Workload Identity Federation
- Secret Manager
- No usar claves JSON planas

---

# 🔎 SEO (SSR)

Cada ruta `/precio/*` renderiza:

- `<title>` dinámico
- `<meta name="description">`
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="es-CL">`

Verificación rápida:

```bash
curl -s http://localhost:3000/precio/peso-chileno | grep -i "<title"
```

---

# 🎨 Tailwind

- Uso obligatorio de utilidades
- Tokens alineados a Figma
- Responsive con breakpoints por defecto
- Sin CSS inline (salvo utilidades mínimas)

---

# 📈 Growth (Parte D)

Documento disponible en:

```
docs/growth.md
```

Incluye:
- Métricas técnicas y de negocio
- Investigación de caída SEO
- Mejoras de performance
- Hipótesis A/B testing
- Uso de IA

---

## Figma
https://www.figma.com/design/76zux3oFqZsMuqFDdaepuo/Prueba-t%C3%A9cnica-Web-Developer--Copia-?node-id=1-3896&t=88PyQHBDgpntqgGl-0

## Repo
https://github.com/adhesiboss/global66-business-case

---

# ☁️ Deploy (Live)

Front (SSR):
```
(PEGAR LINK LIVE FRONT)
```

Back:
```
(PEGAR LINK LIVE BACK)
```

---

# 🧠 Criterio técnico aplicado

- SSR para asegurar indexabilidad
- Canonical y hreflang mínimos
- Validaciones explícitas en API
- Manejo correcto de status codes
- Fallback robusto en caso de bloqueo IAM
- Arquitectura desacoplada Front / Back

---

# ⏱ Tiempo estimado

Implementación completa: ___ horas  
(Frontend SSR + API + SEO + Growth + Deploy)

IA utilizada para:
- Scaffold inicial
- Validaciones
- Checklist SEO
- Revisión de edge cases
- Optimización de estructura

---

# 📌 Notas finales

El proyecto está preparado para escalar a:
- API externa real de tasas
- Persistencia real en Google Sheets
- Instrumentación GA4 / GSC
- Caching SSR en producción

---