import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const RUTA_EMPRESA = new URL('./src/data/empresa.json', import.meta.url)

const escaparHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Datos estructurados schema.org de la empresa (lo que Google lee para mostrar
 *  teléfono, dirección y redes). Se omiten los campos que estén vacíos. */
function datosEstructurados(e) {
  const redes = Object.values(e.redes).filter(Boolean)
  const json = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: e.nombreCorto,
    legalName: e.nombre,
    description: e.descripcion,
    taxID: e.nit,
    telephone: e.telefono,
    email: e.correos.general,
    address: {
      '@type': 'PostalAddress',
      streetAddress: e.direccion,
      addressLocality: e.ciudad,
      addressRegion: e.departamento,
      addressCountry: 'CO',
    },
    ...(e.sitioWeb && { url: e.sitioWeb }),
    ...(redes.length && { sameAs: redes }),
  }
  // "<" escapado para que ningún texto pueda cerrar la etiqueta <script>
  return JSON.stringify(json, null, 2).replace(/</g, '\\u003c')
}

/** Reemplaza los marcadores %EMPRESA_*% de index.html e inserta los datos
 *  estructurados, para que queden en el HTML estático y no dependan de JavaScript. */
function empresaEnHtml() {
  return {
    name: 'empresa-en-html',
    configureServer(server) {
      // En desarrollo, recargar la página al editar empresa.json
      server.watcher.add(fileURLToPath(RUTA_EMPRESA))
    },
    transformIndexHtml(html) {
      const e = JSON.parse(readFileSync(RUTA_EMPRESA, 'utf-8'))
      const marcadores = {
        '%EMPRESA_NOMBRE%': e.nombre,
        '%EMPRESA_NOMBRE_CORTO%': e.nombreCorto,
        '%EMPRESA_LEMA%': e.lema,
        '%EMPRESA_DESCRIPCION%': e.descripcion,
      }
      let salida = html
      for (const [marca, valor] of Object.entries(marcadores)) {
        salida = salida.replaceAll(marca, escaparHtml(valor))
      }
      return salida.replace(
        '</head>',
        `  <script type="application/ld+json">\n${datosEstructurados(e)}\n    </script>\n  </head>`,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), empresaEnHtml()],
})
