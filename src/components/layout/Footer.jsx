import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook } from 'lucide-react'
import { EMPRESA } from '../../data/empresa'
import { SERVICIOS } from '../../data/servicios'
import Logo from './Logo'

const EMPRESA_LINKS = [
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/calidad-y-seguridad', label: 'Calidad y seguridad' },
  { to: '/trabaja-con-nosotros', label: 'Trabaje con nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

const LEGAL_LINKS = [
  { to: '/legal/terminos-y-condiciones', label: 'Términos y condiciones' },
  { to: '/legal/politica-de-privacidad', label: 'Política de tratamiento de datos' },
  { to: '/legal/politica-de-cookies', label: 'Política de cookies' },
]

// Solo se muestran las redes que tengan enlace en empresa.json
const REDES = [
  { href: EMPRESA.redes.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: EMPRESA.redes.instagram, icon: Instagram, label: 'Instagram' },
  { href: EMPRESA.redes.facebook, icon: Facebook, label: 'Facebook' },
].filter((r) => r.href)

function Columna({ titulo, children }) {
  return (
    <div>
      <h3 className="text-sm font-sans font-bold tracking-[0.2em] text-white mb-5">{titulo}</h3>
      {children}
    </div>
  )
}

export default function Footer() {
  const anio = new Date().getFullYear()
  return (
    <footer className="bg-ink text-gray-400">
      <div className="h-1 bg-accent" />
      <div className="container-site py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 text-sm leading-relaxed max-w-sm">
            Empresa colombiana de obra civil y arquitectura. Ejecutamos proyectos de construcción,
            edificaciones e infraestructura urbana, vial, institucional y aeroportuaria.
          </p>
          {REDES.length > 0 && (
            <div className="mt-6 flex gap-2">
              {REDES.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-accent hover:text-ink hover:border-accent transition-colors">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-3">
          <Columna titulo="Servicios">
            <ul className="space-y-2.5 text-sm">
              {SERVICIOS.map((s) => (
                <li key={s.slug}><Link to={`/servicios/${s.slug}`} className="hover:text-accent">{s.titulo}</Link></li>
              ))}
            </ul>
          </Columna>
        </div>

        <div className="lg:col-span-2">
          <Columna titulo="Empresa">
            <ul className="space-y-2.5 text-sm">
              {EMPRESA_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>
              ))}
            </ul>
          </Columna>
        </div>

        <div className="lg:col-span-3">
          <Columna titulo="Contacto">
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={16} className="text-accent shrink-0 mt-0.5" /> <span>{EMPRESA.direccion}<br />{EMPRESA.ciudad}</span></li>
              <li><a href={EMPRESA.telefonoHref} className="flex gap-3 hover:text-accent"><Phone size={16} className="text-accent shrink-0" /> {EMPRESA.telefono}</a></li>
              <li><a href={`mailto:${EMPRESA.email}`} className="flex gap-3 hover:text-accent break-all"><Mail size={16} className="text-accent shrink-0" /> {EMPRESA.email}</a></li>
              <li className="flex gap-3"><Clock size={16} className="text-accent shrink-0 mt-0.5" /> {EMPRESA.horario}</li>
            </ul>
          </Columna>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between text-xs">
          <p>© {anio} {EMPRESA.nombre} · NIT {EMPRESA.nit}. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
