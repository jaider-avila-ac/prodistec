import { useEffect, useState } from 'react'
import { CIFRAS } from '../../../data/empresa'
import { useInViewOnce } from '../../../hooks/useInViewOnce'

function Contador({ valor, activo }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!activo) return
    const dur = 1400
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setN(Math.round(valor * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [activo, valor])
  return n
}

export default function CifrasBand() {
  const [ref, visible] = useInViewOnce({ threshold: 0.4 })
  return (
    <section id="cifras" ref={ref} className="bg-ink text-white border-t border-white/10">
      <div className="container-site grid grid-cols-2 lg:grid-cols-4">
        {CIFRAS.map((c, i) => (
          <div key={c.etiqueta} className={`py-10 sm:py-14 px-4 sm:px-8 ${i > 0 ? 'lg:border-l' : ''} ${i % 2 ? 'border-l lg:border-l' : ''} ${i > 1 ? 'border-t lg:border-t-0' : ''} border-white/10`}>
            <div className="font-display text-6xl sm:text-7xl font-bold text-accent leading-none">
              <Contador valor={c.valor} activo={visible} />{c.sufijo}
            </div>
            <div className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-gray-400">{c.etiqueta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
