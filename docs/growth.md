# Growth Thinking — /precio/* (Global66)

## 1) ¿Qué metas técnicas y de negocio monitorearías?
**Adquisición / SEO**
- Impresiones + CTR orgánico por keyword y por slug (Search Console): “precio dólar”, “USD CLP”, etc.
- Posición promedio por query/URL y share of voice vs competidores.
- Indexación / cobertura (Sitemap + canonical correcto por slug).

**Engagement**
- Scroll depth (25/50/75/90) y tiempo en página (GA4).
- Clicks en CTA (App Store / Play Store / formulario).
- Interacciones con el hero (ej. click “Crear cuenta”, “Iniciar sesión”).

**Conversión**
- CTR del hero → CTA principal.
- CVR lead form (submit / view) por divisa/slug.
- Funnel: Landing → Crear cuenta → Onboarding (si existiera tracking end-to-end).

**Salud técnica**
- Core Web Vitals por URL (LCP, INP, CLS).
- Errores SSR / API rates (5xx) y latencia p95 del endpoint `/api/rates`.
- % de tráfico mobile y performance segmentada.

---

## 2) Caída del 20% orgánico en “precio dólar” para CLP — investigación + acciones en 72h
**0–6h (diagnóstico rápido)**
- Search Console: caída en impresiones vs CTR vs posición (si bajó posición → SEO; si bajó CTR → snippet/título).
- Revisar Coverage/Indexing, canonical/hreflang, robots/noindex, status codes, logs SSR.
- Comparar con cambios recientes (deploy, contenido, performance).

**6–24h (hipótesis y fixes de alto impacto)**
- Si bajó posición: revisar CWV, contenido, schema, canibalización (otras URLs compitiendo), enlaces internos.
- Si bajó CTR: test A/B de title/description (sin cambiar intención) + rich results si aplica.
- Validar que la tasa se renderice SSR (no depender de client fetch).

**24–72h (acciones)**
- Optimizar LCP (imagen hero, preload), reducir JS, caching SSR.
- Mejorar snippet: title + meta description orientado a intención (“Valor del dólar hoy en CLP – actualizado”).
- Añadir internal linking desde home / secciones relacionadas a `/precio/peso-chileno`.
- Monitoreo diario en GSC + rollback si el impacto coincide con release.

---

## 3) 3 mejoras de velocidad sin sacrificar SEO
1) **Optimizar imágenes**: convertir PNG a WebP/AVIF, servir tamaños responsive, lazy-load donde aplique (no en LCP).
2) **Preload del recurso LCP** (hero visual) + `preconnect` a dominios externos si existieran.
3) **Reducir/particionar JS**: evitar librerías pesadas, usar componentes simples, caching SSR en el back (si fuera prod).

---

## 4) 2 hipótesis para mejorar conversión del hero + A/B testing
**Hipótesis A (CTA más directo)**
- Cambiar CTA de “Crear cuenta” a “Abrir Cuenta Global” o “Empieza gratis” + microcopy de confianza.
**Test**: A/B 50/50 midiendo CTR hero→CTA y downstream (registro).

**Hipótesis B (Prueba social + beneficio)**
- Agregar línea breve bajo el tipo de cambio: “Sin costos ocultos • Transferencias rápidas” + sellos de confianza.
**Test**: A/B midiendo CTR a CTA + scroll depth + tasa de rebote.

---

## 5) Tiempo + uso de IA
**Tiempo total aproximado**: X horas (frontend SSR + API + maquetación + documentación + deploy).
**IA utilizada para acelerar**:
- Generación de estructura inicial de Nuxt + Tailwind, validaciones de API, checklist SEO (canonical/hreflang/meta),
- y revisión rápida de edge cases (errores 400/404/500, formato de fecha y número).