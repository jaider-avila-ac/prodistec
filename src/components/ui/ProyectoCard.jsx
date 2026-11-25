import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'

/** Tarjeta de proyecto del portafolio. `alto` permite variar la altura para romper la grilla;
 *  `nivel` es el encabezado del título según la página (h2 si no hay otro h2 encima). */
export default function ProyectoCard({ proyecto, alto = 'h-80', nivel: Titulo = 'h3' }) {
  return (
    <Link to={`/proyectos/${proyecto.slug}`} className={`group relative block overflow-hidden bg-ink ${alto}`}>
      <img
        src={proyecto.imagen}
        alt={`${proyecto.titulo}, ${proyecto.ubicacion}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <span className="absolute top-0 left-0 bg-accent text-ink text-[11px] font-bold uppercase tracking-widest px-3 py-1.5">
        {proyecto.categoria}
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <Titulo className="text-2xl sm:text-3xl font-bold leading-none">{proyecto.titulo}</Titulo>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-300">
          <span className="flex items-center gap-1.5"><MapPin size={14} /> {proyecto.ubicacion}</span>
          <ArrowUpRight size={20} className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  )
}
