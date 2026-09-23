import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/** Cabecera de páginas internas: imagen de fondo, migas de pan, título y bajada. */
export default function PageHero({ title, subtitle, image, breadcrumb = [] }) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="relative container-site pt-36 pb-16 sm:pt-44 sm:pb-20">
        <nav className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-widest text-gray-400" aria-label="Migas de pan">
          <Link to="/" className="hover:text-accent">Inicio</Link>
          {breadcrumb.map((b) => (
            <span key={b.label} className="flex items-center gap-1">
              <ChevronRight size={12} />
              {b.to ? <Link to={b.to} className="hover:text-accent">{b.label}</Link> : <span className="text-white">{b.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="mt-5 text-5xl sm:text-7xl font-bold leading-[0.9] max-w-4xl break-words">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">{subtitle}</p>}
      </div>
      <div className="relative h-2 bg-accent w-1/3" />
    </section>
  )
}
