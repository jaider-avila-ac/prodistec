import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main key={pathname} className="flex-1 page-in">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
