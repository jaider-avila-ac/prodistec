import { Mail, Users, Truck, ArrowRight } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { EMPRESA } from '../../../data/empresa'
import { IMAGENES } from '../../../data/imagenes'
import PageHero from '../../../components/ui/PageHero'
import Reveal from '../../../components/ui/Reveal'

const PERFILES = ['Ingenieros civiles', 'Arquitectos', 'Residentes de obra', 'Profesionales SST', 'Maestros de obra', 'Técnicos y oficiales']

export default function TrabajaConNosotrosPage() {
  usePageMeta('Trabaje con nosotros', `Envíe su hoja de vida o inscríbase como proveedor de ${EMPRESA.nombre}`)
  return (
    <>
      <PageHero
        title="Trabaje con nosotros"
        subtitle="Buscamos personas y aliados que compartan nuestra forma de construir."
        image={IMAGENES.trabajaConNosotros.cabecera}
        breadcrumb={[{ label: 'Trabaje con nosotros' }]}
      />

      <section className="py-24 sm:py-32">
        <div className="container-site grid lg:grid-cols-2 gap-6">
          {/* Talento */}
          <Reveal className="relative bg-ink text-white p-10 sm:p-14 overflow-hidden">
            <Users size={44} strokeWidth={1.25} className="text-accent" />
            <h2 className="mt-8 text-5xl font-bold leading-none">Talento humano</h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Si quiere hacer parte de nuestro equipo, envíenos su hoja de vida indicando el cargo al que aspira
              y su ciudad de residencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {PERFILES.map((p) => (
                <span key={p} className="border border-white/20 px-3 py-1.5 text-xs uppercase tracking-wider text-gray-300">{p}</span>
              ))}
            </div>
            <a href={`mailto:${EMPRESA.emailTalento}?subject=Hoja de vida`} className="btn-accent mt-10">
              <Mail size={16} /> Enviar hoja de vida
            </a>
            <p className="mt-4 text-xs text-gray-500">{EMPRESA.emailTalento}</p>
          </Reveal>

          {/* Proveedores */}
          <Reveal delay={120} className="bg-accent text-ink p-10 sm:p-14">
            <Truck size={44} strokeWidth={1.25} />
            <h2 className="mt-8 text-5xl font-bold leading-none">Proveedores y contratistas</h2>
            <p className="mt-5 text-ink/80 leading-relaxed">
              Si su empresa suministra materiales, equipos o servicios para la construcción, envíe su portafolio
              con los siguientes documentos:
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium">
              {['Certificado de existencia y representación legal', 'RUT actualizado', 'Portafolio de productos o servicios', 'Certificación bancaria'].map((d) => (
                <li key={d} className="flex items-center gap-3"><span className="w-2 h-2 bg-ink" /> {d}</li>
              ))}
            </ul>
            <a href={`mailto:${EMPRESA.emailProveedores}?subject=Inscripción de proveedor`} className="btn-dark mt-10">
              Inscribirse como proveedor <ArrowRight size={16} />
            </a>
            <p className="mt-4 text-xs text-ink/60">{EMPRESA.emailProveedores}</p>
          </Reveal>
        </div>
        <p className="container-site mt-8 text-sm text-gray-500">
          Los datos personales recibidos se tratarán conforme a nuestra política de tratamiento de datos personales.
        </p>
      </section>
    </>
  )
}
