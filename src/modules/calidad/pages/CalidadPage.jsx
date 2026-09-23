import { Award, HardHat, Leaf, FileCheck2 } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { IMAGENES } from '../../../data/imagenes'
import { COMPROMISO } from '../../../data/nosotros'
import PageHero from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import CtaBanner from '../../../components/ui/CtaBanner'
import Reveal from '../../../components/ui/Reveal'

const PILARES = [
  {
    icon: Award,
    titulo: 'Calidad',
    texto: 'Planes de inspección y ensayo, control de materiales y trazabilidad de cada actividad de obra.',
    items: ['Planes de calidad por proyecto', 'Ensayos de laboratorio', 'Control documental'],
  },
  {
    icon: HardHat,
    titulo: 'Seguridad y salud en el trabajo',
    texto: 'SG-SST conforme al Decreto 1072 de 2015 y la Resolución 0312 de 2019.',
    items: ['Trabajo seguro en alturas', 'Análisis de riesgos por actividad', 'Capacitación permanente'],
  },
  {
    icon: Leaf,
    titulo: 'Gestión ambiental',
    texto: 'Manejo responsable de residuos de construcción y demolición (RCD) y de los recursos de la obra.',
    items: ['Planes de manejo ambiental', 'Gestión de RCD', 'Uso eficiente de agua y energía'],
  },
]

// Normativa que la empresa aplica en obra. La empresa NO tiene certificaciones ISO
// (confirmado por el cliente, 2026-09-23): no anunciarlas aquí hasta que las obtenga.
const NORMATIVA = [
  { codigo: 'NSR-10', nombre: 'Reglamento colombiano de construcción sismo resistente' },
  { codigo: 'Decreto 1072', nombre: 'Sistema de gestión de seguridad y salud en el trabajo (2015)' },
  { codigo: 'Res. 0312', nombre: 'Estándares mínimos del SG-SST (2019)' },
  { codigo: 'Res. 4272', nombre: 'Trabajo seguro en alturas (2021)' },
]

export default function CalidadPage() {
  usePageMeta('Calidad y seguridad', 'Compromiso con la calidad, la seguridad y salud en el trabajo y el cuidado ambiental en las obras de PRODISTEC S.A.S.')
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

      <section className="bg-gray-100 py-24">
        <div className="container-site">
          <SectionHeading center eyebrow="Marco normativo" title="Normativa que aplicamos" text="Cada obra se ejecuta cumpliendo la regulación técnica y de seguridad vigente en Colombia." />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {NORMATIVA.map((n) => (
              <div key={n.codigo} className="bg-white border border-gray-200 p-8 text-center hover:border-ink transition-colors">
                <FileCheck2 size={32} strokeWidth={1.5} className="mx-auto text-accent-dark" />
                <div className="mt-4 font-display text-3xl font-bold">{n.codigo}</div>
                <div className="mt-1 text-sm text-gray-600">{n.nombre}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
