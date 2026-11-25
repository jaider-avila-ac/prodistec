import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { construirMeta, aplicarMeta } from '../seo/meta'

/** Solo existe al prerenderizar: ahí se recoge el meta de la página para escribirlo en su HTML. */
export const SeoContext = createContext(null)

/**
 * Título, descripción, imagen y datos estructurados de la página (ver seo/meta.js).
 * Pasar null cuando la página no aplica (p. ej. un detalle que termina mostrando el 404,
 * que declara su propio meta).
 */
export function usePageMeta(opciones) {
  const { pathname } = useLocation()
  const recolector = useContext(SeoContext)
  const meta = opciones ? construirMeta(opciones, pathname) : null

  if (recolector && meta) recolector.meta = meta

  const clave = meta && JSON.stringify(meta)
  useEffect(() => {
    if (meta) aplicarMeta(meta)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clave])
}
