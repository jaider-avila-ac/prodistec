// ─────────────────────────────────────────────────────────────────────────────
// Los datos de la empresa (NIT, dirección, teléfonos, correos, redes...) se editan
// ÚNICAMENTE en empresa.json. Este archivo solo arma los valores derivados
// (enlaces tel: y WhatsApp) para que no haya que repetirlos a mano.
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
  // Correos opcionales: uno vacío hereda el general; si el general también está
  // vacío, el sitio no muestra correo y los mensajes se envían por WhatsApp.
  email: datos.correos.general,
  emailTalento: datos.correos.talentoHumano || datos.correos.general,
  emailProveedores: datos.correos.compras || datos.correos.general,
  emailDatos: datos.correos.datosPersonales || datos.correos.general,
  // Correo que recibe los mensajes del formulario de contacto (vía FormSubmit). No se
  // muestra en el sitio. La primera vez, FormSubmit envía a ese correo un enlace
  // "Activate Form" que el dueño debe presionar una sola vez.
  correoFormulario: datos.correoFormulario,
  horario: datos.horario,
  atencionOficina: datos.atencionOficina,
  legal: datos.legal,
  redes: datos.redes, // una red con valor vacío no se muestra
}

/** Enlace de WhatsApp con un mensaje prellenado */
export const enlaceWhatsApp = (texto) =>
  `https://wa.me/${EMPRESA.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`


// Cifras de la franja de inicio: solo datos reales confirmados por el cliente
// ({ valor, sufijo, etiqueta }). Si la lista está vacía, la franja no se muestra.
export const CIFRAS = []

export const NAV = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/calidad-y-seguridad', label: 'Calidad y seguridad' },
]
