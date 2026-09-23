import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Layout from './components/layout/Layout'
import { HomePage } from './modules/home'
import { NosotrosPage } from './modules/nosotros'
import { ServiciosPage, ServicioDetallePage } from './modules/servicios'
import { ProyectosPage, ProyectoDetallePage } from './modules/proyectos'
import { CalidadPage } from './modules/calidad'
import { TrabajaConNosotrosPage } from './modules/empleo'
import { ContactoPage } from './modules/contacto'
import { TerminosPage, PrivacidadPage, CookiesPage } from './modules/legal'
import { NotFoundPage } from './modules/error'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="servicios/:slug" element={<ServicioDetallePage />} />
          <Route path="proyectos" element={<ProyectosPage />} />
          <Route path="proyectos/:slug" element={<ProyectoDetallePage />} />
          <Route path="calidad-y-seguridad" element={<CalidadPage />} />
          <Route path="trabaja-con-nosotros" element={<TrabajaConNosotrosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="legal/terminos-y-condiciones" element={<TerminosPage />} />
          <Route path="legal/politica-de-privacidad" element={<PrivacidadPage />} />
          <Route path="legal/politica-de-cookies" element={<CookiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
