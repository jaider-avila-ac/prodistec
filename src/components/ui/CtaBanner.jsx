import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { EMPRESA } from '../../data/empresa'
import { IMAGENES } from '../../data/imagenes'

/** Llamado a la acción de cierre, reutilizado al final de varias páginas. */
export default function CtaBanner({
  title = '¿Tiene un proyecto en mente?',
  text = 'Cuéntenos qué necesita construir, adecuar o diseñar. Le respondemos con una propuesta técnica y económica.',
}) {
  return (
    <section className="relative overflow-hidden bg-accent">
      <img src={IMAGENES.general.ctaCotizacion} alt="" className="absolute inset-y-0 right-0 w-1/2 h-full object-cover hidden lg:block" />
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block bg-gradient-to-r from-accent to-transparent" />
      <div className="relative container-site py-16 sm:py-20">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-6xl font-bold leading-[0.9] text-ink">{title}</h2>
          <p className="mt-5 text-ink/80 leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacto" className="btn-dark">Solicitar cotización <ArrowRight size={16} /></Link>
            <a href={EMPRESA.telefonoHref} className="inline-flex items-center gap-2 border-2 border-ink px-6 py-3 font-semibold text-sm uppercase tracking-wider text-ink hover:bg-ink hover:text-white transition-colors">
              <Phone size={16} /> Llamar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
