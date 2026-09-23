// ─────────────────────────────────────────────────────────────────────────────
// Datos corporativos. Todo lo que está entre corchetes [ ] es PROVISIONAL y lo
// debe suministrar el cliente (ver README.md → "Información pendiente").
// ─────────────────────────────────────────────────────────────────────────────
export const EMPRESA = {
  nombre: 'PRODISTEC S.A.S.',
  nombreCorto: 'PRODISTEC',
  lema: 'Obra civil y arquitectura',
  nit: '900.914.555-3',
  direccion: 'Calle 24 # 3-99, Oficina 1506',
  ciudad: 'Santa Marta, Magdalena',
  telefono: '+57 324 569 2973',
  telefonoHref: 'tel:+573245692973',
  whatsapp: '573245692973', // solo dígitos, con indicativo (mismo celular, confirmado)
  email: 'contacto@prodistec.com.co', // [por confirmar]
  emailTalento: 'talentohumano@prodistec.com.co', // [por confirmar]
  emailProveedores: 'compras@prodistec.com.co', // [por confirmar]
  horario: 'Lunes a viernes, 7:00 a. m. a 5:00 p. m.',
  mapaQuery: 'Calle 24 # 3-99, Santa Marta, Magdalena, Colombia', // mapa de /contacto
  redes: {
    linkedin: '#',
    instagram: '#',
    facebook: '#',
  },
}

// Cifras de la franja de inicio — [valores de ejemplo, confirmar con el cliente]
export const CIFRAS = [
  { valor: 10, sufijo: '+', etiqueta: 'Años de experiencia' },
  { valor: 60, sufijo: '+', etiqueta: 'Proyectos ejecutados' },
  { valor: 120, sufijo: 'K', etiqueta: 'm² construidos' },
  { valor: 8, sufijo: '', etiqueta: 'Líneas de servicio' },
]

export const NAV = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/calidad-y-seguridad', label: 'Calidad y seguridad' },
  { to: '/trabaja-con-nosotros', label: 'Trabaje con nosotros' },
]
