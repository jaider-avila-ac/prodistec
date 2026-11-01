import { EMPRESA, enlaceWhatsApp } from '../data/empresa'

// El sitio es solo frontend. Los mensajes del formulario se entregan así:
// - 'formulario': se envían por FormSubmit (formsubmit.co) a EMPRESA.correoFormulario,
//   sin que la persona salga del sitio. Si falla, se ofrece WhatsApp como respaldo.
// - 'correo': sin correoFormulario pero con correo publicado, se abre un mailto.
// - 'whatsapp': sin ningún correo, se abre WhatsApp con el mensaje escrito.
export const CANAL_CONTACTO = EMPRESA.correoFormulario ? 'formulario' : EMPRESA.email ? 'correo' : 'whatsapp'

const limpio = (v) => String(v ?? '').trim()
const tituloDe = (form) => `Solicitud de información — ${form.servicio || 'General'}`

/** Campos del mensaje en orden; los vacíos se omiten. */
const camposDe = (form) => [
  ['Nombre', form.nombre],
  ['Empresa / entidad', form.empresa],
  ['Ciudad de la obra', form.ciudad],
  ['Correo', form.email],
  ['Teléfono', form.telefono],
].filter(([, v]) => limpio(v))

/** Texto del mensaje. En WhatsApp los *asteriscos* se ven en negrita. */
function armarTexto(form, negrita) {
  const b = (t) => (negrita ? `*${t}*` : t)
  const cierre = `Autorizó el tratamiento de datos. Acepta información comercial: ${form.aceptaComercial ? 'Sí' : 'No'}.`
  return [
    `Hola, ${EMPRESA.nombreCorto}. Les escribo desde el sitio web.`,
    b(tituloDe(form)), // el servicio de interés ya va en el título
    camposDe(form).map(([k, v]) => `${b(`${k}:`)} ${limpio(v)}`).join('\n'),
    `${b('Mensaje:')}\n${limpio(form.mensaje)}`,
    negrita ? `_${cierre}_` : cierre,
  ].join('\n\n')
}

/** Enlace de WhatsApp con el mensaje del formulario ya escrito. */
export const enlaceWhatsAppContacto = (form) => enlaceWhatsApp(armarTexto(form, true))

/** Abre un enlace en pestaña nueva; si el navegador la bloquea, en la misma. */
function abrir(url) {
  const ventana = window.open(url, '_blank')
  if (ventana) ventana.opener = null
  else window.location.href = url
}

async function enviarPorFormSubmit(form) {
  const res = await fetch(`https://formsubmit.co/ajax/${EMPRESA.correoFormulario}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: `${tituloDe(form)} — sitio web ${EMPRESA.nombreCorto}`,
      _template: 'table',
      _captcha: 'false',
      _honey: form.honey, // campo oculto: si un robot lo llena, FormSubmit descarta el envío
      ...Object.fromEntries(camposDe(form).map(([k, v]) => [k, limpio(v)])),
      email: limpio(form.email), // FormSubmit lo usa como "responder a"
      'Servicio de interés': form.servicio || 'No especificado',
      Mensaje: limpio(form.mensaje),
      'Tratamiento de datos': 'Autorizado',
      'Acepta información comercial': form.aceptaComercial ? 'Sí' : 'No',
    }),
  })
  const datos = await res.json().catch(() => ({}))
  // FormSubmit responde success "true" (texto) cuando entregó el mensaje
  if (!res.ok || String(datos.success) !== 'true') {
    throw new Error(datos.message || 'No se pudo enviar el mensaje')
  }
}

/** Entrega el mensaje por el canal configurado. Lanza un error si el envío falla. */
export async function enviarContacto(form) {
  if (CANAL_CONTACTO === 'formulario') return enviarPorFormSubmit(form)
  if (CANAL_CONTACTO === 'correo') {
    const url = `mailto:${EMPRESA.email}?subject=${encodeURIComponent(tituloDe(form))}&body=${encodeURIComponent(armarTexto(form, false))}`
    window.location.href = url
    return
  }
  abrir(enlaceWhatsAppContacto(form))
}
