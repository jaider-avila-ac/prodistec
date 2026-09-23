import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react'
import { EMPRESA, NAV } from '../../data/empresa'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Todas las páginas abren con una cabecera oscura, así que el menú arranca transparente
  // sobre ella y pasa a sólido al hacer scroll.
  const solid = scrolled || open

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${solid ? 'bg-ink shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      {/* Barra superior de contacto */}
      <div className={`hidden lg:block border-b border-white/10 transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="container-site flex items-center justify-between h-10 text-xs text-gray-300">
          <span>{EMPRESA.lema} · NIT {EMPRESA.nit}</span>
          <div className="flex items-center gap-6">
            <a href={EMPRESA.telefonoHref} className="flex items-center gap-2 hover:text-accent"><Phone size={13} /> {EMPRESA.telefono}</a>
            <a href={`mailto:${EMPRESA.email}`} className="flex items-center gap-2 hover:text-accent"><Mail size={13} /> {EMPRESA.email}</a>
          </div>
        </div>
      </div>

      <div className="container-site flex items-center justify-between h-[var(--header-h)]">
        <Link to="/" aria-label={`${EMPRESA.nombre} — inicio`}><Logo /></Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative text-[13px] font-semibold uppercase tracking-wider py-2 transition-colors ${isActive ? 'text-accent' : 'text-white hover:text-accent'}
                 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-accent after:transition-all ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contacto" className="hidden sm:inline-flex btn-accent !py-2.5 !px-5">
            Contacto <ArrowRight size={15} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-white border border-white/20"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="lg:hidden fade-in bg-ink border-t border-white/10 h-[calc(100dvh-var(--header-h))] overflow-y-auto">
          <nav className="container-site py-6 flex flex-col">
            {[...NAV, { to: '/contacto', label: 'Contacto' }].map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 py-4 border-b border-white/10 font-display text-3xl uppercase font-bold ${isActive ? 'text-accent' : 'text-white'}`
                }
              >
                <span className="text-xs font-sans text-gray-500 w-6">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </NavLink>
            ))}
            <div className="mt-8 space-y-3 text-sm text-gray-300">
              <a href={EMPRESA.telefonoHref} className="flex items-center gap-3"><Phone size={16} className="text-accent" /> {EMPRESA.telefono}</a>
              <a href={`mailto:${EMPRESA.email}`} className="flex items-center gap-3"><Mail size={16} className="text-accent" /> {EMPRESA.email}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
