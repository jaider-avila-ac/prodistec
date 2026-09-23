/** Logo provisional tipográfico — reemplazar por el logo oficial (SVG) cuando el cliente lo entregue. */
export default function Logo({ light = true }) {
  return (
    <span className="flex items-center gap-3 select-none">
      <span className="relative w-10 h-10 bg-accent flex items-center justify-center">
        <span className="font-display text-2xl font-extrabold text-ink leading-none">P</span>
        <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-white" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-2xl font-extrabold tracking-wide ${light ? 'text-white' : 'text-ink'}`}>PRODISTEC</span>
        <span className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400 mt-1">Obra civil y arquitectura</span>
      </span>
    </span>
  )
}
