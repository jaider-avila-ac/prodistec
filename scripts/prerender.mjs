// ─────────────────────────────────────────────────────────────────────────────
// Prerender: después de "vite build", genera un HTML estático por página con su contenido,
// título, descripción, canonical, imagen para redes y datos estructurados. Google y las
// vistas previas de WhatsApp/Facebook leen ese HTML directamente, sin ejecutar JavaScript.
// También genera sitemap.xml, robots.txt y 404.html.
//
// Salida: dist/index.html (inicio) y dist/<ruta>.html (p. ej. dist/servicios/construccion.html);
// public/.htaccess sirve /servicios/construccion desde ese archivo.
// ─────────────────────────────────────────────────────────────────────────────
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(raiz, 'dist')
const ssr = resolve(raiz, 'dist-ssr')

const { render, RUTAS, SITIO, JSON_LD_GLOBAL } = await import(pathToFileURL(resolve(ssr, 'entry-server.js')).href)

const plantilla = readFileSync(resolve(dist, 'index.html'), 'utf-8')
const SEO = /<!--seo:inicio-->[\s\S]*?<!--seo:fin-->/
if (!SEO.test(plantilla) || !plantilla.includes('<!--app-->')) {
  throw new Error('index.html no tiene los marcadores <!--seo:inicio-->...<!--seo:fin--> y <!--app-->')
}
const jsonLd = JSON_LD_GLOBAL()

function pagina(url, ruta) {
  const { html, head } = render(url)
  if (!head) throw new Error(`La página ${url} no declara usePageMeta`)
  return plantilla
    .replace(SEO, () => `${head}\n    ${jsonLd}`)
    .replace('<div id="root"><!--app--></div>', () => `<div id="root" data-ruta="${ruta ?? ''}">${html}</div>`)
}

function escribir(archivo, contenido) {
  const destino = resolve(dist, archivo)
  mkdirSync(dirname(destino), { recursive: true })
  writeFileSync(destino, contenido)
}

for (const { ruta } of RUTAS) {
  escribir(ruta === '/' ? 'index.html' : `${ruta.slice(1)}.html`, pagina(ruta, ruta))
}
// Se sirve con estado 404 para cualquier dirección inexistente (ver .htaccess). Sin
// data-ruta: en el navegador se dibuja de nuevo para la URL real.
escribir('404.html', pagina('/404'))

const hoy = new Date().toISOString().slice(0, 10)
escribir('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${RUTAS.map(({ ruta, prioridad }) => `  <url>
    <loc>${ruta === '/' ? `${SITIO}/` : `${SITIO}${ruta}`}</loc>
    <lastmod>${hoy}</lastmod>
    <priority>${prioridad}</priority>
  </url>`).join('\n')}
</urlset>
`)

escribir('robots.txt', `User-agent: *
Allow: /

Sitemap: ${SITIO}/sitemap.xml
`)

rmSync(ssr, { recursive: true, force: true })
console.log(`Prerender: ${RUTAS.length} páginas + 404.html, sitemap.xml y robots.txt`)
