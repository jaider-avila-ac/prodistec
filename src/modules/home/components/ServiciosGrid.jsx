import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SERVICIOS } from '../../../data/servicios'
import SectionHeading from '../../../components/ui/SectionHeading'
import Reveal from '../../../components/ui/Reveal'

export default function ServiciosGrid() {
  return (
    <section className="bg-gray-100 py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Líneas de negocio"
            title="Ocho frentes, un mismo estándar"
            text="Cubrimos el ciclo completo del proyecto: diseño, ingeniería, construcción y gestión contractual."
          />
          <Link to="/servicios" className="btn-dark self-start lg:self-auto">Todos los servicios</Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 bg-gray-300 gap-px border border-gray-300">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 80}>
              <Link
                to={`/servicios/${s.slug}`}
                className="group relative flex flex-col h-full min-h-[280px] bg-white p-8 overflow-hidden transition-colors duration-300 hover:bg-ink"
              >
                <span className="absolute top-6 right-6 font-display text-5xl font-bold text-gray-100 group-hover:text-white/10 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <s.icon size={36} strokeWidth={1.5} className="text-accent-dark group-hover:text-accent transition-colors" />
                <h3 className="mt-auto pt-10 text-2xl font-bold leading-none text-ink group-hover:text-white transition-colors">{s.titulo}</h3>
                <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-400 transition-colors">{s.resumen}</p>
                <ArrowUpRight size={18} className="mt-5 text-ink group-hover:text-accent transition-all group-hover:translate-x-1" />
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
