import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const RUTA_EMPRESA = new URL('./src/data/empresa.json', import.meta.url)

const escaparHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Reemplaza los marcadores %EMPRESA_*% de index.html con los datos de empresa.json.
 *  El meta de cada página y los datos estructurados los escribe scripts/prerender.mjs. */
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
      return salida
    },
  }
}

export default defineConfig({
  plugins: [react(), empresaEnHtml()],
})
