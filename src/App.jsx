import { BrowserRouter, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import AppRoutes from './AppRoutes'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}
