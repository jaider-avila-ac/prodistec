import { Link, NavLink, useParams } from 'react-router-dom'
import { Check, ArrowRight, Phone } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { EMPRESA } from '../../../data/empresa'
import { SERVICIOS, getServicio } from '../../../data/servicios'
import { PROCESO } from '../../../data/nosotros'
import PageHero from '../../../components/ui/PageHero'
import NotFoundPage from '../../error/pages/NotFoundPage'

export default function ServicioDetallePage() {
  const { slug } = useParams()
  const servicio = getServicio(slug)
  usePageMeta(servicio?.titulo, servicio?.resumen)
  if (!servicio) return <NotFoundPage />

  return (
    <>
      <PageHero
        title={servicio.titulo}
        subtitle={servicio.resumen}
        image={servicio.imagen}
        breadcrumb={[{ label: 'Servicios', to: '/servicios' }, { label: servicio.titulo }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid lg:grid-cols-12 gap-12">
          {/* Contenido */}
          <article className="lg:col-span-8">
            <img src={servicio.imagen} alt={servicio.titulo} className="w-full aspect-video object-cover" />
            <h2 className="mt-10 text-4xl font-bold">Descripción del servicio</h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">{servicio.descripcion}</p>

            <h2 className="mt-12 text-4xl font-bold">Alcance</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {servicio.alcances.map((a) => (
                <li key={a} className="bg-white p-5 flex gap-3 font-medium">
                  <span className="w-7 h-7 bg-accent flex items-center justify-center shrink-0"><Check size={16} strokeWidth={3} /></span>
                  {a}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-4xl font-bold">Metodología</h2>
            <div className="mt-6 grid sm:grid-cols-4 gap-4">
              {PROCESO.map((p) => (
                <div key={p.paso} className="border-t-4 border-ink pt-4">
                  <span className="font-display text-3xl font-bold text-accent-dark">{p.paso}</span>
                  <h3 className="mt-1 text-xl font-bold">{p.titulo}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.texto}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Lateral */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
            <div className="bg-gray-100">
              <h3 className="bg-ink text-white px-6 py-4 text-xl font-bold">Otros servicios</h3>
              <ul>
                {SERVICIOS.map((s) => (
                  <li key={s.slug}>
                    <NavLink
                      to={`/servicios/${s.slug}`}
                      className={({ isActive }) => `flex items-center justify-between px-6 py-3.5 text-sm font-semibold border-b border-gray-200 transition-colors ${isActive ? 'bg-accent text-ink' : 'hover:bg-white'}`}
                    >
                      {s.titulo} <ArrowRight size={14} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink text-white p-8">
              <h3 className="text-3xl font-bold leading-none">Solicite una cotización</h3>
              <p className="mt-3 text-sm text-gray-400">Cuéntenos sobre su proyecto y le contactamos.</p>
              <Link to="/contacto" className="btn-accent w-full mt-6">Contactar <ArrowRight size={16} /></Link>
              <a href={EMPRESA.telefonoHref} className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-accent"><Phone size={14} /> {EMPRESA.telefono}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
