import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { IMAGENES } from '../../../data/imagenes'

export default function NotFoundPage() {
  usePageMeta('Página no encontrada')
  return (
    <section className="relative min-h-[80vh] flex items-center bg-ink text-white overflow-hidden">
      <img src={IMAGENES.error404.fondo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative container-site pt-32 pb-20">
        <div className="font-display text-[10rem] sm:text-[14rem] font-extrabold leading-none text-accent">404</div>
        <h1 className="text-4xl sm:text-6xl font-bold">Esta página sigue en obra</h1>
        <p className="mt-4 text-gray-300 max-w-md">La dirección que busca no existe o fue trasladada.</p>
        <Link to="/" className="btn-accent mt-8"><ArrowLeft size={16} /> Volver al inicio</Link>
      </div>
    </section>
  )
}
