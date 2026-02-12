# Growth Thinking — /precio/* (Global66)

## 1) Metas técnicas y de negocio a monitorear
**SEO / adquisición**
- Search Console por slug: impresiones, CTR, posición (ej. /precio/peso-chileno)
- Indexación/cobertura, canónicos, duplicidad
- Queries tipo “precio dólar”, “valor dólar hoy”, “dólar CLP”

**Conversión**
- CTR del CTA en hero
- Submit rate del formulario (lead conversion)
- Scroll depth y tiempo en página
- Rebote y exits por dispositivo

**Performance / calidad**
- Core Web Vitals: LCP, CLS, INP
- TTFB (SSR)
- Errores API (4xx/5xx)
- Calidad tracking: % sesiones con eventos críticos

## 2) Caída del 20% orgánico en “precio dólar” (CLP): plan 72h
**0–24h**
- Search Console: separar caída por posición vs CTR
- Coverage/canonical/noindex/robots/sitemap
- Revisar cambios recientes (deploy, SSR, performance)

**24–48h**
- Auditoría SERP y competidores (features, snippet, intención)
- Revisar CWV/TTFB
- Revisar logs del endpoint rates

**48–72h**
- Ajustar title/meta + reforzar H1/semántica
- Contenido útil (FAQ breve) sin inflar JS
- Mejorar internal linking a CLP
- Reindexación y monitoreo diario

## 3) 3 mejoras de velocidad
1. Reducir JS cliente (evitar libs pesadas, hydration mínima)
2. Optimizar SSR/TTFB (cache corto del rates endpoint)
3. Evitar render-blocking (fuentes no bloqueantes, CSS mínimo)

## 4) 2 hipótesis de conversión (A/B)
- H1: Copy con propuesta de valor aumenta CTR CTA.
- H2: Trust bar aumenta submits.

## 5) Tiempo + IA
IA usada para acelerar scaffolding y borradores; decisiones de arquitectura/SEO/performance diseñadas manualmente.
