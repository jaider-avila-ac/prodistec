import { EMPRESA } from '../data/empresa'

// El sitio es solo frontend: por ahora el formulario arma un correo prellenado
// (mailto). Si más adelante se conecta un backend o un servicio de formularios,
// solo hay que cambiar esta función; el componente no se toca.
export function enviarContacto({ nombre, empresa, email, telefono, servicio, mensaje }) {
  const asunto = `Solicitud de información — ${servicio || 'General'}`
  const datos = [
    `Nombre: ${nombre}`,
    empresa && `Empresa / entidad: ${empresa}`,
    `Correo: ${email}`,
    telefono && `Teléfono: ${telefono}`,
    `Servicio de interés: ${servicio || 'No especificado'}`,
  ].filter(Boolean).join('\n')
  const cuerpo = `${datos}\n\n${mensaje}`

  window.location.href = `mailto:${EMPRESA.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
  return Promise.resolve()
}
