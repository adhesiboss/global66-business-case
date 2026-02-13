# Growth Thinking --- /precio/\* (Global66)

## 🌍 Entorno Live

Frontend Live: https://global66-business-case-front.onrender.com/

Backend Live: https://global66-business-case-back.onrender.com/

Ejemplo URL indexable:
https://global66-business-case-front.onrender.com/precio/peso-chileno

------------------------------------------------------------------------

## 1) Métricas clave a monitorear

### 📈 Adquisición / SEO

-   Impresiones orgánicas por slug (Search Console)
-   CTR por query ("precio dólar", "USD CLP", etc.)
-   Posición promedio por URL
-   Indexación correcta por canonical
-   Cobertura sitemap (si se agrega)

### 🔥 Engagement

-   Scroll depth (25/50/75/90)
-   Tiempo promedio en página
-   Clicks en CTA (App Store / Play Store)
-   Submit de formulario de lead

### 💰 Conversión

-   CTR hero → CTA
-   CVR formulario lead
-   Funnel Landing → Registro (si se implementa tracking)

### 🧠 Salud técnica

-   LCP por URL
-   INP y CLS
-   Latencia p95 endpoint `/api/rates`
-   Error rate 4xx/5xx en backend

------------------------------------------------------------------------

## 2) Caída del 20% orgánico --- Plan 72h

### 0--6h Diagnóstico

-   Revisar GSC: impresiones vs CTR vs posición
-   Confirmar canonical correcto
-   Revisar status codes 200 en SSR
-   Confirmar que la tasa se renderiza server-side

### 6--24h Fix rápido

-   Optimizar title + description orientado a intención
-   Revisar performance (LCP principalmente)
-   Revisar canibalización de URLs
-   Mejorar internal linking hacia /precio/\*

### 24--72h Optimización

-   Optimizar imagen LCP (preload si aplica)
-   Reducir JS innecesario
-   Implementar caching SSR en backend
-   Monitoreo continuo GSC

------------------------------------------------------------------------

## 3) Mejoras de performance sin afectar SEO

1.  Convertir imágenes PNG a WebP/AVIF
2.  Preload del recurso LCP
3.  Reducir tamaño del bundle JS
4.  Activar caching en Render (edge caching)

------------------------------------------------------------------------

## 4) Hipótesis A/B para mejorar conversión

### Hipótesis A --- CTA más directo

Cambiar: "Crear cuenta" por "Empieza gratis hoy"

Métrica: CTR hero → CTA

### Hipótesis B --- Prueba social

Agregar: "Más de 500.000 usuarios confían en Global66"

Métrica: Bounce rate + CTR

------------------------------------------------------------------------

## 5) Pensamiento Fintech

La estrategia apunta a:

-   Capturar intención alta (precio dólar hoy)
-   Transformar tráfico informativo en activación
-   Educar sobre producto desde intención de tipo de cambio
-   Usar contenido indexable como canal de adquisición orgánica

------------------------------------------------------------------------

## Tiempo estimado total

7--9 horas efectivas

-   SSR + SEO técnico
-   API robusta con validaciones
-   Maquetación responsive
-   Deploy full-stack
-   Documentación y Growth Thinking
