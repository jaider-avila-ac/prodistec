// ─────────────────────────────────────────────────────────────────────────────
// Metadatos SEO de cada página (título, descripción, canonical, imagen para redes y
// datos estructurados). Cada página los declara con usePageMeta (utils/seo.js):
//  - al compilar, scripts/prerender.mjs los escribe en el HTML estático de la página,
//    que es lo que leen Google y las vistas previas de WhatsApp/Facebook;
//  - en el navegador, al cambiar de página, se actualizan en el <head>.
// ─────────────────────────────────────────────────────────────────────────────
import { EMPRESA } from '../data/empresa'
import datos from '../data/empresa.json'

export const SITIO = datos.sitioWeb.replace(/\/$/, '')
export const ID_EMPRESA = `${SITIO}/#empresa`

const IMAGEN_REDES = '/og-prodistec.jpg' // 1200 x 630
// Nombre de la empresa en el título de las pestañas y de Google
const MARCA = `${EMPRESA.nombreCorto} SAS`
const TITULO_INICIO = `${MARCA} | Constructora en Santa Marta, obra civil y arquitectura`

// Los rastreadores de WhatsApp/Facebook no siempre leen WebP: cada .webp tiene su .jpg al lado.
const aJpg = (ruta) => ruta.replace(/\.webp$/i, '.jpg')
const absoluta = (ruta) => (/^https?:/.test(ruta) ? ruta : `${SITIO}${ruta}`)
export const urlDe = (ruta) => (ruta === '/' ? `${SITIO}/` : `${SITIO}${ruta.replace(/\/+$/, '')}`)

/** Migas de pan en schema.org: Inicio > ... > página actual */
function migasLd(migas, url) {
  const items = [{ nombre: 'Inicio', url: `${SITIO}/` }, ...migas.map((m) => ({ nombre: m.label, url: m.to ? urlDe(m.to) : url }))]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.nombre, item: m.url })),
  }
}

/**
 * @param {object} p
 * @param {string} [p.titulo]      título corto de la página (se le agrega "| PRODISTEC")
 * @param {string} [p.descripcion] 120-160 caracteres, lo que muestra Google bajo el título
 * @param {string} [p.imagen]      ruta de la foto para redes (por defecto la general)
 * @param {Array}  [p.migas]       [{ label, to? }] sin "Inicio"; genera las migas de pan para Google
 * @param {Array}  [p.jsonLd]      datos estructurados adicionales de la página
 * @param {boolean} [p.noindex]    true en páginas que no deben salir en Google (404)
 */
export function construirMeta({ titulo, descripcion, imagen, migas, jsonLd = [], noindex = false }, ruta) {
  const url = urlDe(ruta)
  return {
    titulo: titulo ? `${titulo} | ${MARCA}` : TITULO_INICIO,
    descripcion: descripcion || EMPRESA.descripcion,
    url,
    imagen: absoluta(aJpg(imagen || IMAGEN_REDES)),
    noindex,
    jsonLd: [...(migas?.length ? [migasLd(migas, url)] : []), ...jsonLd],
  }
}

const escapar = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
// "<" escapado para que ningún texto pueda cerrar la etiqueta <script>
const jsonSeguro = (o) => JSON.stringify(o).replace(/</g, '\\u003c')

/** Etiquetas del <head> como texto (prerender). */
export function headHtml(m) {
  const t = escapar(m.titulo)
  const d = escapar(m.descripcion)
  const lineas = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="${m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    ...(m.noindex ? [] : [`<link rel="canonical" href="${m.url}" />`]),
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${m.url}" />`,
    `<meta property="og:image" content="${m.imagen}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${m.imagen}" />`,
    ...m.jsonLd.map((j) => `<script type="application/ld+json" data-seo-pagina>${jsonSeguro(j)}</script>`),
  ]
  return lineas.join('\n    ')
}

/** Mismas etiquetas aplicadas al documento al navegar dentro del sitio. */
export function aplicarMeta(m) {
  document.title = m.titulo
  const poner = (selector, atributos) => {
    let el = document.head.querySelector(selector)
    if (!el) {
      el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
      document.head.appendChild(el)
    }
    for (const [k, v] of Object.entries(atributos)) el.setAttribute(k, v)
  }
  poner('meta[name="description"]', { name: 'description', content: m.descripcion })
  poner('meta[name="robots"]', { name: 'robots', content: m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' })
  if (m.noindex) document.head.querySelector('link[rel="canonical"]')?.remove()
  else poner('link[rel="canonical"]', { rel: 'canonical', href: m.url })
  poner('meta[property="og:title"]', { property: 'og:title', content: m.titulo })
  poner('meta[property="og:description"]', { property: 'og:description', content: m.descripcion })
  poner('meta[property="og:url"]', { property: 'og:url', content: m.url })
  poner('meta[property="og:image"]', { property: 'og:image', content: m.imagen })
  poner('meta[name="twitter:title"]', { name: 'twitter:title', content: m.titulo })
  poner('meta[name="twitter:description"]', { name: 'twitter:description', content: m.descripcion })
  poner('meta[name="twitter:image"]', { name: 'twitter:image', content: m.imagen })

  document.head.querySelectorAll('script[data-seo-pagina]').forEach((s) => s.remove())
  for (const j of m.jsonLd) {
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.dataset.seoPagina = ''
    s.textContent = jsonSeguro(j)
    document.head.appendChild(s)
  }
}

/**
 * Datos estructurados de la empresa y del sitio, presentes en todas las páginas: es lo que
 * Google usa para el panel de la empresa (teléfono, dirección, horario) y para relacionar
 * búsquedas como "constructora en Santa Marta" o "empresa de obra civil" con el sitio.
 * Los campos vacíos de empresa.json se omiten.
 */
export function jsonLdGlobal(servicios) {
  const redes = Object.values(datos.redes).filter(Boolean)
  const empresa = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': ID_EMPRESA,
    name: datos.nombreCorto,
    legalName: datos.nombre,
    alternateName: [datos.nombre, `${datos.nombreCorto} SAS`],
    description: datos.descripcion,
    url: `${SITIO}/`,
    logo: `${SITIO}/isotipoproditec.svg`,
    image: `${SITIO}${IMAGEN_REDES}`,
    taxID: datos.nit,
    telephone: datos.telefono,
    ...(datos.correos.general && { email: datos.correos.general }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: datos.direccion,
      addressLocality: datos.ciudad,
      addressRegion: datos.departamento,
      addressCountry: 'CO',
    },
    areaServed: datos.zonaAtendida.map((name) => ({ '@type': 'Place', name })),
    openingHoursSpecification: datos.horarioEstructurado.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dias,
      opens: h.abre,
      closes: h.cierra,
    })),
    knowsAbout: servicios.map((s) => s.titulo),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios',
      itemListElement: servicios.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.titulo, url: `${SITIO}/servicios/${s.slug}` },
      })),
    },
    ...(redes.length && { sameAs: redes }),
  }
  const sitio = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITIO}/#sitio`,
    name: datos.nombreCorto,
    url: `${SITIO}/`,
    inLanguage: 'es-CO',
    publisher: { '@id': ID_EMPRESA },
  }
  return [empresa, sitio].map((j) => `<script type="application/ld+json">${jsonSeguro(j)}</script>`).join('\n    ')
}
