import { EMPRESA } from '../../data/empresa'
import { IMAGENES } from '../../data/imagenes'

/** Imagotipo oficial (letras blancas: usar solo sobre fondos oscuros, como el header y el footer). */
export default function Logo({ className = 'h-9 sm:h-11' }) {
  return (
    <img
      src={IMAGENES.marca.imagotipo}
      alt={EMPRESA.nombre}
      width="1856"
      height="371"
      className={`w-auto select-none ${className}`}
      draggable="false"
    />
  )
}
