import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { IMAGENES } from '../../../data/imagenes'
import { EMPRESA } from '../../../data/empresa'
import Reveal from '../../../components/ui/Reveal'

const PUNTOS = [
  'Equipo de ingenieros, arquitectos y técnicos propios',
  'Experiencia en contratación pública y privada',
  'Control de calidad en cada etapa de la obra',
  'Acompañamiento desde la planeación hasta la entrega',
]

export default function NosotrosResumen() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="container-site grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-accent" />
          <img src={IMAGENES.inicio.quienesSomos} alt="Estructuras en concreto en ejecución" className="relative w-full aspect-[4/5] object-cover" />
          <div className="absolute -bottom-8 right-0 sm:-right-8 bg-ink text-white p-6 sm:p-8 max-w-[260px]">
            <div className="font-display text-5xl font-bold text-accent leading-none">08</div>
            <p className="mt-2 text-sm text-gray-300">Líneas de servicio para cubrir todo el proyecto.</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-bold leading-[0.9]">
            Ingeniería que se nota en cada obra
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            {EMPRESA.nombre} es una empresa colombiana dedicada a la obra civil y la arquitectura.
            Ejecutamos proyectos de construcción, edificaciones e infraestructura para clientes
            públicos y privados, desde la planeación hasta la entrega.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {PUNTOS.map((p) => (
              <li key={p} className="flex gap-3 text-sm font-medium">
                <span className="w-6 h-6 bg-ink text-accent flex items-center justify-center shrink-0"><Check size={14} strokeWidth={3} /></span>
                {p}
              </li>
            ))}
          </ul>
          <Link to="/nosotros" className="btn-dark mt-10">Conozca la empresa <ArrowRight size={16} /></Link>
        </Reveal>
      </div>
    </section>
  )
}
