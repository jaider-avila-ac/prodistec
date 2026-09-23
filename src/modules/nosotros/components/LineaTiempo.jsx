import { HISTORIA } from '../../../data/nosotros'
import SectionHeading from '../../../components/ui/SectionHeading'
import Reveal from '../../../components/ui/Reveal'

export default function LineaTiempo() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading eyebrow="Trayectoria" title="Nuestra historia" />
        <ol className="mt-16 relative border-l-2 border-gray-200 ml-3 lg:ml-0 lg:border-l-0 lg:grid lg:grid-cols-4 lg:border-t-2">
          {HISTORIA.map((h, i) => (
            <Reveal as="li" key={h.anio} delay={i * 120} className="relative pl-8 pb-12 lg:pl-0 lg:pb-0 lg:pt-10 lg:pr-8">
              <span className="absolute -left-[9px] top-1 lg:left-0 lg:-top-[9px] w-4 h-4 bg-accent" />
              <div className="font-display text-6xl font-bold text-gray-200 leading-none">{h.anio}</div>
              <h3 className="mt-3 text-2xl font-bold">{h.titulo}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{h.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
