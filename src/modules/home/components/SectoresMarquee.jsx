import { SECTORES } from '../../../data/nosotros'

/** Franja amarilla con los sectores atendidos en movimiento continuo. */
export default function SectoresMarquee() {
  const items = [...SECTORES, ...SECTORES]
  return (
    <section className="bg-accent py-6 overflow-hidden" aria-label="Sectores que atendemos">
      <div className="marquee-track flex w-max gap-10">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl sm:text-4xl font-bold uppercase text-ink whitespace-nowrap">
            {s}
            <span className="w-3 h-3 bg-ink rotate-45" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  )
}
