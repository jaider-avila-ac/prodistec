import { PROCESO } from '../../../data/nosotros'
import SectionHeading from '../../../components/ui/SectionHeading'
import Reveal from '../../../components/ui/Reveal'

export default function ProcesoTrabajo() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading center eyebrow="Cómo trabajamos" title="Del diagnóstico a la entrega" />
        <ol className="mt-16 grid md:grid-cols-4 relative">
          <span className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gray-300" aria-hidden />
          {PROCESO.map((p, i) => (
            <Reveal as="li" key={p.paso} delay={i * 120} className="relative px-4 pb-10 md:pb-0 md:text-center">
              <div className="relative mx-0 md:mx-auto w-16 h-16 bg-ink text-accent font-display text-2xl font-bold flex items-center justify-center">
                {p.paso}
              </div>
              <h3 className="mt-6 text-2xl font-bold">{p.titulo}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xs md:mx-auto">{p.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
