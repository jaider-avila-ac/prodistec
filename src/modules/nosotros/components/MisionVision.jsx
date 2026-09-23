import { Target, Eye } from 'lucide-react'
import { MISION, VISION } from '../../../data/nosotros'
import Reveal from '../../../components/ui/Reveal'

/** Dos paneles contrastados: misión en oscuro, visión en color de marca. */
export default function MisionVision() {
  return (
    <section className="grid lg:grid-cols-2">
      <Reveal className="bg-ink text-white p-10 sm:p-16 lg:p-20">
        <Target size={40} strokeWidth={1.5} className="text-accent" />
        <h2 className="mt-8 text-5xl sm:text-6xl font-bold">Misión</h2>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">{MISION}</p>
      </Reveal>
      <Reveal delay={120} className="bg-accent text-ink p-10 sm:p-16 lg:p-20">
        <Eye size={40} strokeWidth={1.5} />
        <h2 className="mt-8 text-5xl sm:text-6xl font-bold">Visión</h2>
        <p className="mt-6 text-lg text-ink/80 leading-relaxed max-w-xl">{VISION}</p>
      </Reveal>
    </section>
  )
}
