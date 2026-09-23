import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { PROYECTOS, getProyecto } from '../../../data/proyectos'
import PageHero from '../../../components/ui/PageHero'
import ProyectoCard from '../../../components/ui/ProyectoCard'
import NotFoundPage from '../../error/pages/NotFoundPage'

export default function ProyectoDetallePage() {
  const { slug } = useParams()
  const proyecto = getProyecto(slug)
  const [visor, setVisor] = useState(null)
  usePageMeta(proyecto?.titulo, proyecto?.resumen)
  if (!proyecto) return <NotFoundPage />

  const idx = PROYECTOS.indexOf(proyecto)
  const siguiente = PROYECTOS[(idx + 1) % PROYECTOS.length]
  const relacionados = PROYECTOS.filter((p) => p.slug !== slug).slice(0, 3)
  const ficha = [
    ['Cliente', proyecto.cliente],
    ['Ubicación', proyecto.ubicacion],
    ['Año', proyecto.anio],
    ['Área / longitud', proyecto.area],
    ['Categoría', proyecto.categoria],
    ['Estado', proyecto.estado],
  ]

  return (
    <>
      <PageHero
        title={proyecto.titulo}
        subtitle={proyecto.resumen}
        image={proyecto.imagen}
        breadcrumb={[{ label: 'Proyectos', to: '/proyectos' }, { label: proyecto.titulo }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full aspect-video object-cover" />
            <div className="mt-4 grid grid-cols-3 gap-4">
              {proyecto.galeria.map((img, i) => (
                <button key={i} type="button" onClick={() => setVisor(img)} className="group relative overflow-hidden" aria-label={`Ampliar imagen ${i + 1}`}>
                  <img src={img} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110" />
                </button>
              ))}
            </div>

            <h2 className="mt-12 text-4xl font-bold">Alcance de la obra</h2>
            <ul className="mt-6 space-y-3">
              {proyecto.alcance.map((a) => (
                <li key={a} className="flex gap-3"><Check size={18} className="text-accent-dark shrink-0 mt-0.5" /> {a}</li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="bg-ink text-white">
              <h3 className="px-8 pt-8 text-3xl font-bold">Ficha técnica</h3>
              <dl className="p-8 pt-4">
                {ficha.map(([k, v]) => (
                  <div key={k} className="py-4 border-b border-white/10 flex justify-between gap-4">
                    <dt className="text-xs uppercase tracking-widest text-gray-400">{k}</dt>
                    <dd className={`text-sm font-semibold text-right ${k === 'Estado' ? 'text-accent' : ''}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Link to={`/proyectos/${siguiente.slug}`} className="mt-4 flex items-center justify-between bg-accent p-6 group">
              <span>
                <span className="block text-xs uppercase tracking-widest text-ink/70">Siguiente proyecto</span>
                <span className="block font-display text-2xl font-bold uppercase text-ink">{siguiente.titulo}</span>
              </span>
              <ArrowRight className="text-ink transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container-site">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Otros proyectos</h2>
            <Link to="/proyectos" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider"><ArrowLeft size={16} /> Portafolio</Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {relacionados.map((p) => <ProyectoCard key={p.slug} proyecto={p} alto="h-72" />)}
          </div>
        </div>
      </section>

      {visor && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 fade-in" onClick={() => setVisor(null)} role="dialog" aria-modal="true">
          <button type="button" className="absolute top-4 right-4 w-12 h-12 bg-white text-ink flex items-center justify-center" aria-label="Cerrar">
            <X size={22} />
          </button>
          <img src={visor} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </>
  )
}
