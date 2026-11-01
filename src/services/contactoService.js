import { EMPRESA, enlaceWhatsApp } from '../data/empresa'

// El sitio es solo frontend: el formulario arma un correo prellenado (mailto) o, si
// la empresa no tiene correo publicado, un mensaje de WhatsApp. Si más adelante se
// conecta un backend o un servicio de formularios, solo hay que cambiar esta función;
// el componente no se toca.
export const CANAL_CONTACTO = EMPRESA.email ? 'correo' : 'whatsapp'

export function enviarContacto({ nombre, empresa, email, telefono, servicio, mensaje, aceptaComercial }) {
  const asunto = `Solicitud de información — ${servicio || 'General'}`
  const datos = [
    `Nombre: ${nombre}`,
    empresa && `Empresa / entidad: ${empresa}`,
    `Correo: ${email}`,
    telefono && `Teléfono: ${telefono}`,
    `Servicio de interés: ${servicio || 'No especificado'}`,
    `Acepta recibir información comercial: ${aceptaComercial ? 'Sí' : 'No'}`,
  ].filter(Boolean).join('\n')
  const cuerpo = `${datos}\n\n${mensaje}`

  if (CANAL_CONTACTO === 'correo') {
    window.location.href = `mailto:${EMPRESA.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
  } else {
    window.open(enlaceWhatsApp(`${asunto}\n\n${cuerpo}`), '_blank', 'noopener')
  }
  return Promise.resolve()
}
