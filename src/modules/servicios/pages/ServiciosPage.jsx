import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { IMAGENES } from '../../../data/imagenes'
import { SERVICIOS } from '../../../data/servicios'
import PageHero from '../../../components/ui/PageHero'
import CtaBanner from '../../../components/ui/CtaBanner'
import Reveal from '../../../components/ui/Reveal'

export default function ServiciosPage() {
  usePageMeta('Servicios', 'Construcción, edificaciones, infraestructura, infraestructura aeroportuaria, arquitectura, ingeniería civil, gestión de proyectos y remodelaciones.')
  return (
    <>
      <PageHero
        title="Servicios"
        subtitle="Ocho líneas de negocio que cubren el ciclo completo de un proyecto de obra civil y arquitectura."
        image={IMAGENES.servicios.cabecera}
        breadcrumb={[{ label: 'Servicios' }]}
      />

      {/* Índice rápido */}
      <nav className="border-b border-gray-200 bg-white sticky top-[var(--header-h)] z-20 overflow-x-auto" aria-label="Índice de servicios">
        <ul className="container-site flex gap-6 whitespace-nowrap">
          {SERVICIOS.map((s, i) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="block py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-ink border-b-2 border-transparent hover:border-accent">
                <span className="text-accent-dark mr-1">{String(i + 1).padStart(2, '0')}</span> {s.titulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Filas en zigzag */}
      <div>
        {SERVICIOS.map((s, i) => {
          const invertido = i % 2 === 1
          return (
            <section key={s.slug} id={s.slug} className={`scroll-mt-40 ${invertido ? 'bg-gray-100' : 'bg-white'}`}>
              <div className="container-site py-20 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal className={`relative ${invertido ? 'lg:order-2' : ''}`}>
                  <img src={s.imagen} alt={s.titulo} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <div className={`absolute -bottom-6 ${invertido ? 'left-6' : 'right-6'} bg-ink w-20 h-20 flex items-center justify-center`}>
                    <s.icon size={34} strokeWidth={1.5} className="text-accent" />
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <span className="font-display text-7xl font-bold text-gray-200 leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="mt-2 text-4xl sm:text-5xl font-bold leading-[0.95]">{s.titulo}</h2>
                  <p className="mt-2 text-accent-dark font-semibold">{s.resumen}</p>
                  <p className="mt-5 text-gray-600 leading-relaxed">{s.descripcion}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {s.alcances.map((a) => (
                      <li key={a} className="flex gap-2 text-sm"><Check size={16} className="text-accent-dark shrink-0 mt-0.5" /> {a}</li>
                    ))}
                  </ul>
                  <Link to={`/servicios/${s.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b-2 border-accent pb-1 hover:gap-3 transition-all">
                    Ver detalle <ArrowRight size={16} />
                  </Link>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>

      <CtaBanner />
    </>
  )
}
