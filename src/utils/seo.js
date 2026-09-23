import { useEffect } from 'react'
import { EMPRESA } from '../data/empresa'

const DESCRIPCION_BASE = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? ''

/** Título y descripción por página. */
export function usePageMeta(titulo, descripcion) {
  useEffect(() => {
    document.title = titulo ? `${titulo} | ${EMPRESA.nombre}` : `${EMPRESA.nombre} | ${EMPRESA.lema}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', descripcion || DESCRIPCION_BASE)
  }, [titulo, descripcion])
}
