import { Award, HardHat, Leaf } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { IMAGENES } from '../../../data/imagenes'
import { EMPRESA } from '../../../data/empresa'
import { COMPROMISO } from '../../../data/nosotros'
import PageHero from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import CtaBanner from '../../../components/ui/CtaBanner'
import Reveal from '../../../components/ui/Reveal'

const PILARES = [
  {
    icon: Award,
    titulo: 'Calidad',
    texto: 'Supervisión técnica y control de materiales en cada actividad de obra.',
    items: ['Revisión de materiales', 'Supervisión técnica en obra', 'Entrega documentada'],
  },
  {
    icon: HardHat,
    titulo: 'Seguridad y salud en el trabajo',
    texto: 'Prevención de riesgos y cuidado de las personas en cada frente de trabajo.',
    items: ['Identificación de riesgos', 'Elementos de protección personal', 'Charlas de seguridad'],
  },
  {
    icon: Leaf,
    titulo: 'Gestión ambiental',
    texto: 'Manejo responsable de los residuos y los recursos de la obra.',
    items: ['Orden y aseo en obra', 'Manejo de residuos', 'Uso eficiente de agua y energía'],
  },
]

export default function CalidadPage() {
  usePageMeta('Calidad y seguridad', `Compromiso con la calidad, la seguridad y salud en el trabajo y el cuidado ambiental en las obras de ${EMPRESA.nombre}`)
  return (
    <>
      <PageHero
        title="Calidad, seguridad y ambiente"
        subtitle="Protegemos a las personas, al entorno y el resultado de cada obra."
        image={IMAGENES.calidad.cabecera}
        breadcrumb={[{ label: 'Calidad y seguridad' }]}
      />

      <section className="bg-ink text-white">
        <div className="container-site grid md:grid-cols-3">
          {PILARES.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 120} className={`py-16 md:px-10 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-white/10' : 'md:pl-0'}`}>
              <p.icon size={44} strokeWidth={1.25} className="text-accent" />
              <h2 className="mt-6 text-3xl font-bold">{p.titulo}</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">{p.texto}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent" /> {it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-site grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading eyebrow="En cada obra" title="Nuestro compromiso" />
            <blockquote className="mt-8 border-l-4 border-accent pl-6 text-xl leading-relaxed text-gray-700">{COMPROMISO}</blockquote>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img src={IMAGENES.calidad.politica} alt="" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-accent p-6 max-w-[220px]">
              <div className="font-display text-5xl font-bold leading-none">0</div>
              <p className="mt-1 text-sm font-semibold">Meta de accidentes graves en obra</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
