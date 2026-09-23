// ─────────────────────────────────────────────────────────────────────────────
// Los datos de la empresa (NIT, dirección, teléfonos, correos, redes...) se editan
// ÚNICAMENTE en empresa.json. Este archivo solo arma los valores derivados
// (enlaces tel:, WhatsApp, mapa) para que no haya que repetirlos a mano.
// El mismo JSON se inyecta en index.html al compilar (ver vite.config.js).
// ─────────────────────────────────────────────────────────────────────────────
import datos from './empresa.json'

const soloDigitos = (tel) => tel.replace(/\D/g, '')

export const EMPRESA = {
  nombre: datos.nombre,
  nombreCorto: datos.nombreCorto,
  lema: datos.lema,
  descripcion: datos.descripcion,
  nit: datos.nit,
  direccion: datos.direccion,
  ciudad: `${datos.ciudad}, ${datos.departamento}`,
  telefono: datos.telefono,
  telefonoHref: `tel:+${soloDigitos(datos.telefono)}`,
  whatsapp: soloDigitos(datos.whatsapp),
  email: datos.correos.general,
  emailTalento: datos.correos.talentoHumano,
  emailProveedores: datos.correos.compras,
  horario: datos.horario,
  mapaQuery: `${datos.direccion.split(',')[0]}, ${datos.ciudad}, ${datos.departamento}, ${datos.pais}`,
  redes: datos.redes, // una red con valor vacío no se muestra
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
