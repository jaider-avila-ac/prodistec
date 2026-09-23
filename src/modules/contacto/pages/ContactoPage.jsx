import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { usePageMeta } from '../../../utils/seo'
import { EMPRESA } from '../../../data/empresa'
import { IMAGENES } from '../../../data/imagenes'
import PageHero from '../../../components/ui/PageHero'
import ContactoForm from '../components/ContactoForm'

const CANALES = [
  { icon: Phone, titulo: 'Teléfono', valor: EMPRESA.telefono, href: EMPRESA.telefonoHref },
  { icon: MessageCircle, titulo: 'WhatsApp', valor: 'Escríbanos', href: `https://wa.me/${EMPRESA.whatsapp}` },
  { icon: Mail, titulo: 'Correo', valor: EMPRESA.email, href: `mailto:${EMPRESA.email}` },
  { icon: MapPin, titulo: 'Oficina', valor: `${EMPRESA.direccion}, ${EMPRESA.ciudad}` },
  { icon: Clock, titulo: 'Horario', valor: EMPRESA.horario },
]

export default function ContactoPage() {
  usePageMeta('Contacto', 'Contáctenos para cotizar su proyecto de obra civil, edificación o infraestructura.')
  return (
    <>
      <PageHero
        title="Contacto"
        subtitle="Cuéntenos sobre su proyecto. Respondemos en un plazo máximo de un día hábil."
        image={IMAGENES.contacto.cabecera}
        breadcrumb={[{ label: 'Contacto' }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Formulario</span>
            <h2 className="mt-4 mb-10 text-4xl sm:text-5xl font-bold">Solicite información o cotización</h2>
            <ContactoForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-ink text-white p-8 sm:p-10">
              <h2 className="text-3xl font-bold">Canales de atención</h2>
              <ul className="mt-8 space-y-6">
                {CANALES.map((c) => {
                  const contenido = (
                    <>
                      <span className="w-12 h-12 bg-accent text-ink flex items-center justify-center shrink-0"><c.icon size={20} /></span>
                      <span>
                        <span className="block text-xs uppercase tracking-widest text-gray-400">{c.titulo}</span>
                        <span className="block mt-1 font-semibold break-all">{c.valor}</span>
                      </span>
                    </>
                  )
                  return (
                    <li key={c.titulo}>
                      {c.href
                        ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex gap-4 hover:text-accent transition-colors">{contenido}</a>
                        : <div className="flex gap-4">{contenido}</div>}
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="h-96 bg-gray-200">
        <iframe
          title="Ubicación de la oficina"
          src={`https://www.google.com/maps?q=${encodeURIComponent(EMPRESA.mapaQuery)}&output=embed`}
          className="w-full h-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
