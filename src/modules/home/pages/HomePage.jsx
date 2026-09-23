import { usePageMeta } from '../../../utils/seo'
import CtaBanner from '../../../components/ui/CtaBanner'
import HeroInicio from '../components/HeroInicio'
import CifrasBand from '../components/CifrasBand'
import NosotrosResumen from '../components/NosotrosResumen'
import ServiciosGrid from '../components/ServiciosGrid'
import SectoresMarquee from '../components/SectoresMarquee'
import ProyectosDestacados from '../components/ProyectosDestacados'
import ProcesoTrabajo from '../components/ProcesoTrabajo'

export default function HomePage() {
  usePageMeta()
  return (
    <>
      <HeroInicio />
      <CifrasBand />
      <NosotrosResumen />
      <ServiciosGrid />
      <SectoresMarquee />
      <ProyectosDestacados />
      <ProcesoTrabajo />
      <CtaBanner />
    </>
  )
}
