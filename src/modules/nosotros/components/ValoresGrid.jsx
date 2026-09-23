import { VALORES } from '../../../data/nosotros'
import SectionHeading from '../../../components/ui/SectionHeading'
import Reveal from '../../../components/ui/Reveal'

export default function ValoresGrid() {
  return (
    <section className="py-24 sm:py-32 bg-gray-100">
      <div className="container-site grid lg:grid-cols-3 gap-12">
        <div className="lg:sticky lg:top-32 self-start">
          <SectionHeading
            eyebrow="Valores corporativos"
            title="Lo que no negociamos"
            text="Seis principios que orientan cada decisión en la oficina y en la obra."
          />
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {VALORES.map((v, i) => (
            <Reveal key={v.titulo} delay={(i % 2) * 100} className="bg-white p-8 border-l-4 border-accent">
              <v.icon size={30} strokeWidth={1.5} className="text-ink" />
              <h3 className="mt-5 text-2xl font-bold">{v.titulo}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{v.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
