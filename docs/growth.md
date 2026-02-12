# Growth Thinking --- /precio/\* (Global66)

## 1) ¿Qué metas técnicas y de negocio monitorearías?

### Adquisición / SEO

-   Impresiones + CTR orgánico por keyword y por slug (Search Console):
    "precio dólar", "USD CLP", etc.
-   Posición promedio por query/URL y share of voice vs competidores.
-   Indexación / cobertura (Sitemap + canonical correcto por slug).
-   Tráfico orgánico segmentado por país y divisa.
-   Evolución de keywords estratégicas vs competidores directos.

### Engagement

-   Scroll depth (25/50/75/90) y tiempo en página (GA4).
-   Clicks en CTA (App Store / Play Store / formulario).
-   Interacciones con el hero (ej. click "Crear cuenta", "Iniciar
    sesión").
-   Bounce rate por divisa y dispositivo.

### Conversión (Fintech-Focused)

-   CTR del hero → CTA principal.
-   CVR lead form (submit / view) por divisa/slug.
-   Funnel: Landing → Crear cuenta → Onboarding completado.
-   \% de usuarios que realizan primera acción clave (transferencia o
    compra de moneda).
-   Activación a 7 días por cohortes (según divisa/país).

### Salud técnica

-   Core Web Vitals por URL (LCP, INP, CLS).
-   Errores SSR / API rates (5xx) y latencia p95 del endpoint
    `/api/rates`.
-   \% de tráfico mobile y performance segmentada.
-   Errores de indexación y status codes en logs.

------------------------------------------------------------------------

## 2) Caída del 20% orgánico en "precio dólar" para CLP --- investigación + acciones en 72h

### 0--6h (diagnóstico rápido)

-   Search Console: caída en impresiones vs CTR vs posición.
-   Validar impacto real en negocio: caída de registros o activación
    desde esa URL.
-   Revisar Coverage/Indexing, canonical/hreflang, robots/noindex,
    status codes.
-   Comparar con deploys recientes y cambios en contenido o performance.

### 6--24h (hipótesis y fixes de alto impacto)

-   Si bajó posición: revisar Core Web Vitals, contenido, schema,
    canibalización, enlaces internos.
-   Si bajó CTR: test A/B de title/description orientado a intención.
-   Confirmar que la tasa se renderiza SSR (no depender de client
    fetch).
-   Analizar competidores que hayan mejorado snippet o contenido.

### 24--72h (acciones)

-   Optimizar LCP (imagen hero + preload), reducir JS innecesario.
-   Ajustar meta description para mayor intención ("Valor del dólar hoy
    en CLP actualizado").
-   Añadir internal linking desde home u otras landings relevantes.
-   Activar campaña SEM temporal para proteger captación mientras se
    recupera SEO.
-   Monitoreo diario y rollback si la caída coincide con release
    específico.

------------------------------------------------------------------------

## 3) 3 mejoras de velocidad sin sacrificar SEO

1.  **Optimización de imágenes:** convertir PNG a WebP/AVIF y servir
    tamaños responsivos.
2.  **Preload del recurso LCP:** precargar hero visual y usar
    `preconnect` cuando aplique.
3.  **Reducir JavaScript:** evitar dependencias pesadas,
    componentización limpia y caching SSR en backend.

------------------------------------------------------------------------

## 4) 2 hipótesis para mejorar conversión del hero + A/B testing

### Hipótesis A (CTA más directo)

Cambiar CTA de "Crear cuenta" a "Abrir Cuenta Global" o "Empieza gratis"
con microcopy de confianza. - Test A/B 50/50 midiendo CTR hero→CTA y
registro downstream.

### Hipótesis B (Prueba social + beneficio claro)

Agregar línea breve bajo el tipo de cambio: "Sin costos ocultos •
Transferencias rápidas • Seguridad bancaria". - Test A/B midiendo CTR a
CTA, scroll depth y tasa de rebote.

------------------------------------------------------------------------

## 5) Tiempo + uso de IA

**Tiempo total aproximado:** 7--9 horas efectivas.

**IA utilizada para acelerar:** - Scaffold inicial (Nuxt + Tailwind). -
Checklist SEO SSR (title, description, canonical, hreflang). -
Validaciones y manejo de errores (400/404/500). - Revisión de edge cases
y formato de fecha/número. - Estructuración del documento de Growth y
priorización estratégica.
