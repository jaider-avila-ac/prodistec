import { NavLink } from 'react-router-dom'
import { FileText } from 'lucide-react'
import PageHero from '../../../components/ui/PageHero'

const DOCUMENTOS = [
  { to: '/legal/terminos-y-condiciones', label: 'Términos y condiciones' },
  { to: '/legal/politica-de-privacidad', label: 'Tratamiento de datos personales' },
  { to: '/legal/politica-de-cookies', label: 'Política de cookies' },
]

// Fecha de la última revisión de los textos legales — actualizar al modificarlos.
const ULTIMA_ACTUALIZACION = '23 de septiembre de 2026'

/** Estructura común de los documentos legales: cabecera, índice lateral y cuerpo. */
export default function LegalLayout({ title, children }) {
  return (
    <>
      <PageHero title={title} breadcrumb={[{ label: 'Legal' }, { label: title }]} />
      <section className="py-16 sm:py-20">
        <div className="container-site grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Documentos legales</p>
            <ul className="border-l-2 border-gray-200">
              {DOCUMENTOS.map((d) => (
                <li key={d.to}>
                  <NavLink
                    to={d.to}
                    className={({ isActive }) => `flex items-center gap-2 -ml-[2px] border-l-2 pl-4 py-2.5 text-sm transition-colors ${isActive ? 'border-accent font-semibold text-ink' : 'border-transparent text-gray-500 hover:text-ink'}`}
                  >
                    <FileText size={14} /> {d.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-gray-400">Última actualización: {ULTIMA_ACTUALIZACION}</p>
          </aside>
          <article className="lg:col-span-8 lg:col-start-5 prose-legal">
            <p className="!text-sm bg-gray-100 border-l-4 border-accent p-4">
              Documento de referencia. Debe ser revisado y ajustado por el asesor jurídico de la empresa antes de su publicación definitiva.
            </p>
            {children}
          </article>
        </div>
      </section>
    </>
  )
}
