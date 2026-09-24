import { Quote } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { IMAGENES } from '../../../data/imagenes'
import { EMPRESA } from '../../../data/empresa'
import { COMPROMISO } from '../../../data/nosotros'
import PageHero from '../../../components/ui/PageHero'
import CtaBanner from '../../../components/ui/CtaBanner'
import Reveal from '../../../components/ui/Reveal'
import MisionVision from '../components/MisionVision'
import ValoresGrid from '../components/ValoresGrid'
import LineaTiempo from '../components/LineaTiempo'

export default function NosotrosPage() {
  usePageMeta('Nosotros', `Conozca ${EMPRESA.nombre}: misión, visión, valores e historia de nuestra empresa de obra civil y arquitectura.`)
  return (
    <>
      <PageHero
        title={`Somos ${EMPRESA.nombreCorto}`}
        subtitle="Una empresa de obra civil y arquitectura construida sobre la ingeniería, el cumplimiento y el respeto por las personas."
        image={IMAGENES.nosotros.cabecera}
        breadcrumb={[{ label: 'Nosotros' }]}
      />

      {/* Presentación */}
      <section className="py-24 sm:py-32">
        <div className="container-site grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">La empresa</span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-bold leading-[0.9]">Construimos con criterio técnico y visión de largo plazo</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7 space-y-5 text-gray-600 leading-relaxed">
            <p>
              {EMPRESA.nombre} es una sociedad colombiana especializada en obra civil y arquitectura.
              Participamos en proyectos de construcción, edificaciones, infraestructura urbana, vial,
              institucional y aeroportuaria, para entidades públicas y empresas privadas.
            </p>
            <p>
              Nuestro equipo integra ingenieros civiles, arquitectos, profesionales en seguridad y salud
              en el trabajo y personal técnico de obra, lo que nos permite acompañar cada proyecto desde
              su planeación hasta su entrega y cierre contractual.
            </p>
          </Reveal>
        </div>
        <div className="container-site mt-16 grid grid-cols-3 gap-4">
          <img src={IMAGENES.nosotros.presentacionGrande} alt="" className="col-span-2 h-64 sm:h-96 w-full object-cover" />
          <img src={IMAGENES.nosotros.presentacionPequena} alt="" className="h-64 sm:h-96 w-full object-cover" />
        </div>
      </section>

      <MisionVision />
      <LineaTiempo />
      <ValoresGrid />

      {/* Compromiso */}
      <section className="relative bg-ink text-white py-24 sm:py-32 overflow-hidden">
        <img src={IMAGENES.nosotros.politicaFondo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <Reveal className="relative container-site max-w-4xl text-center">
          <Quote size={48} className="mx-auto text-accent" />
          <span className="eyebrow !text-accent justify-center mt-6">Nuestro compromiso</span>
          <p className="mt-6 font-display text-3xl sm:text-4xl uppercase leading-tight">{COMPROMISO}</p>
        </Reveal>
      </section>

      <CtaBanner title="Trabajemos juntos" />
    </>
  )
}
