// Punto de entrada del prerender (scripts/prerender.mjs): dibuja cada página a HTML.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import AppRoutes from './AppRoutes'
import { SeoContext } from './utils/seo'
import { headHtml, jsonLdGlobal } from './seo/meta'
import { SERVICIOS } from './data/servicios'
import { PROYECTOS } from './data/proyectos'

export { SITIO } from './seo/meta'

/** Datos estructurados de la empresa y el sitio (van en todas las páginas). */
export const JSON_LD_GLOBAL = () => jsonLdGlobal(SERVICIOS)

const RUTAS_ESTATICAS = [
  { ruta: '/', prioridad: '1.0' },
  { ruta: '/servicios', prioridad: '0.9' },
  { ruta: '/proyectos', prioridad: '0.9' },
  { ruta: '/nosotros', prioridad: '0.8' },
  { ruta: '/contacto', prioridad: '0.8' },
  { ruta: '/calidad-y-seguridad', prioridad: '0.6' },
  { ruta: '/legal/terminos-y-condiciones', prioridad: '0.2' },
  { ruta: '/legal/politica-de-privacidad', prioridad: '0.2' },
  { ruta: '/legal/politica-de-cookies', prioridad: '0.2' },
]

/** Todas las páginas públicas (también es la lista del sitemap). */
export const RUTAS = [
  ...RUTAS_ESTATICAS,
  ...SERVICIOS.map((s) => ({ ruta: `/servicios/${s.slug}`, prioridad: '0.8' })),
  ...PROYECTOS.map((p) => ({ ruta: `/proyectos/${p.slug}`, prioridad: '0.7' })),
]

export function render(url) {
  const recolector = {}
  const html = renderToString(
    <SeoContext.Provider value={recolector}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </SeoContext.Provider>,
  )
  return { html, head: recolector.meta ? headHtml(recolector.meta) : '' }
}
