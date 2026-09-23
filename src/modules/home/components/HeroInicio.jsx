import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { IMAGENES } from '../../../data/imagenes'
import { EMPRESA } from '../../../data/empresa'

// Fondos que rotan en el hero (cada uno con zoom lento continuo).
const FONDOS = IMAGENES.inicio.heroFondos
const MS_FONDO = 6000

// Palabra amarilla que rota en el titular. Elegidas sin tilde: con el interlineado
// tan cerrado del titular, una tilde en mayúscula quedaría recortada.
const PALABRAS = ['infraestructura', 'edificaciones', 'aeropuertos', 'obras viales', 'arquitectura']
const MS_PALABRA = 2600

/** Índice que avanza en bucle cada `ms`. Al fijarlo a mano (setI) el conteo se reinicia. */
function useCiclo(total, ms) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % total), ms)
    return () => clearTimeout(t)
  }, [i, total, ms])
  return [i, setI]
}

export default function HeroInicio() {
  const [fondo, setFondo] = useCiclo(FONDOS.length, MS_FONDO)
  const [palabra] = useCiclo(PALABRAS.length, MS_PALABRA)
  const anterior = (palabra - 1 + PALABRAS.length) % PALABRAS.length

  return (
    <section className="relative min-h-[100svh] flex items-end bg-ink text-white overflow-hidden">
      {/* Fondos en fundido cruzado; todos animan siempre, así nunca hay un cuadro quieto */}
      {FONDOS.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === fondo ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== fondo}
        >
          <img
            src={img}
            alt={i === 0 ? `Obra en construcción de ${EMPRESA.nombreCorto}` : ''}
            className="w-full h-full object-cover hero-drift"
            style={{ animationDelay: `${-i * 5}s` }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

      <div className="relative container-site w-full pb-28 sm:pb-32 pt-40">
        <span className="eyebrow !text-accent">{EMPRESA.lema}</span>
        <h1 className="mt-6 text-[12.5vw] sm:text-8xl lg:text-[9rem] font-extrabold leading-[0.82] max-w-5xl">
          <span className="block hero-line" style={{ animationDelay: '0ms' }}>Construimos</span>
          {/* Palabras apiladas en la misma celda: entra desde abajo, sale hacia arriba */}
          <span className="grid overflow-hidden py-[0.04em] -my-[0.04em]" aria-live="polite">
            {PALABRAS.map((p, i) => (
              <span
                key={p}
                aria-hidden={i !== palabra}
                // La opacidad va desfasada del desplazamiento: la que sale se apaga rápido y la
                // que entra aparece tarde, para que ninguna se cruce con las líneas vecinas
                // (el interlineado cerrado del titular las solapa a mitad de recorrido).
                style={{
                  transition: i === palabra
                    ? 'transform 700ms cubic-bezier(.7,0,.2,1), opacity 350ms ease 300ms'
                    : 'transform 700ms cubic-bezier(.7,0,.2,1), opacity 250ms ease',
                }}
                className={`[grid-area:1/1] text-accent whitespace-nowrap
                  ${i === palabra ? 'translate-y-0 opacity-100' : i === anterior ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0'}`}
              >
                {p}
              </span>
            ))}
          </span>
          <span className="block hero-line" style={{ animationDelay: '150ms' }}>que perdura</span>
        </h1>
        <div className="mt-10 flex flex-col lg:flex-row lg:items-end gap-8 lg:justify-between">
          <p className="max-w-xl text-lg text-gray-300 leading-relaxed">
            Edificaciones, obras urbanas, viales, institucionales y aeroportuarias ejecutadas con
            ingeniería, seguridad y cumplimiento.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/proyectos" className="btn-accent">Ver proyectos <ArrowRight size={16} /></Link>
            <Link to="/servicios" className="btn-outline-light">Nuestros servicios</Link>
          </div>
        </div>
      </div>

      {/* Indicador de fondo: contador + selector de imagen */}
      <div className="absolute bottom-0 inset-x-0">
        <div className="container-site flex items-center gap-4 pb-6">
          <span className="font-display text-sm tracking-widest text-white/70 tabular-nums">
            {String(fondo + 1).padStart(2, '0')} / {String(FONDOS.length).padStart(2, '0')}
          </span>
          <div className="hidden sm:flex gap-1.5">
            {FONDOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setFondo(i)}
                aria-label={`Ver imagen ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${i === fondo ? 'w-8 bg-accent' : 'w-4 bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
          <a href="#cifras" className="ml-auto text-white/60 hover:text-accent animate-bounce" aria-label="Bajar">
            <ChevronDown size={26} />
          </a>
        </div>
      </div>
    </section>
  )
}
