import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PROYECTOS } from '../../../data/proyectos'
import SectionHeading from '../../../components/ui/SectionHeading'
import ProyectoCard from '../../../components/ui/ProyectoCard'
import Reveal from '../../../components/ui/Reveal'

/** Grilla asimétrica: un proyecto grande y dos apilados, más una fila inferior. */
export default function ProyectosDestacados() {
  const [a, b, c, d, e] = PROYECTOS
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading dark eyebrow="Portafolio" title="Proyectos que nos respaldan" />
          <Link to="/proyectos" className="btn-outline-light self-start lg:self-auto">Ver portafolio <ArrowRight size={16} /></Link>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          <Reveal className="lg:col-span-2 lg:row-span-2"><ProyectoCard proyecto={a} alto="h-80 lg:h-full lg:min-h-[640px]" /></Reveal>
          <Reveal delay={100}><ProyectoCard proyecto={b} /></Reveal>
          <Reveal delay={200}><ProyectoCard proyecto={c} /></Reveal>
          <Reveal><ProyectoCard proyecto={d} alto="h-72" /></Reveal>
          <Reveal delay={100} className="lg:col-span-2"><ProyectoCard proyecto={e} alto="h-72" /></Reveal>
        </div>
      </div>
    </section>
  )
}
