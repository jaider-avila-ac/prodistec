/** Encabezado estándar de sección: etiqueta pequeña + título + texto opcional. */
export default function SectionHeading({ eyebrow, title, text, dark = false, center = false, className = '' }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}>
      {eyebrow && <span className={`eyebrow ${center ? 'justify-center' : ''} ${dark ? 'text-accent' : ''}`}>{eyebrow}</span>}
      <h2 className={`mt-4 text-4xl sm:text-5xl font-bold leading-[0.95] ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{text}</p>}
    </div>
  )
}
