import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, MessageCircle, CheckCircle2, AlertTriangle } from 'lucide-react'
import { SERVICIOS } from '../../../data/servicios'
import { enviarContacto, enlaceWhatsAppContacto, CANAL_CONTACTO } from '../../../services/contactoService'

const INICIAL = { nombre: '', empresa: '', ciudad: '', email: '', telefono: '', servicio: '', mensaje: '', acepta: false, aceptaComercial: false, honey: '' }
const POR_WHATSAPP = CANAL_CONTACTO === 'whatsapp'

const CONFIRMACION = {
  formulario: 'Recibimos su mensaje. Le responderemos lo antes posible.',
  correo: 'Se abrió su programa de correo con el mensaje listo para enviar.',
  whatsapp: 'Se abrió WhatsApp con su mensaje. Solo falta presionar enviar en el chat.',
}

export default function ContactoForm() {
  const [form, setForm] = useState(INICIAL)
  const [estado, setEstado] = useState('editando') // editando | enviando | enviado | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (estado === 'enviando') return
    setEstado('enviando')
    try {
      await enviarContacto(form)
      setEstado('enviado')
      setForm(INICIAL)
    } catch {
      setEstado('error') // se conservan los datos para reintentar o enviarlos por WhatsApp
    }
  }

  if (estado === 'enviado') {
    return (
      <div className="border border-gray-200 p-10 text-center fade-in">
        <CheckCircle2 size={48} className="mx-auto text-accent-dark" />
        <h3 className="mt-4 text-3xl font-bold">Gracias por escribirnos</h3>
        <p className="mt-2 text-gray-600">{CONFIRMACION[CANAL_CONTACTO]}</p>
        <button type="button" onClick={() => setEstado('editando')} className="btn-dark mt-6">Enviar otro mensaje</button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
      {/* Trampa para robots: oculta para las personas */}
      <input type="text" name="_honey" value={form.honey} onChange={set('honey')} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label className="label" htmlFor="nombre">Nombre completo *</label>
        <input id="nombre" required className="input" value={form.nombre} onChange={set('nombre')} autoComplete="name" />
      </div>
      <div>
        <label className="label" htmlFor="empresa">Empresa / entidad</label>
        <input id="empresa" className="input" value={form.empresa} onChange={set('empresa')} autoComplete="organization" />
      </div>
      <div>
        <label className="label" htmlFor="email">Correo electrónico{POR_WHATSAPP ? '' : ' *'}</label>
        <input id="email" type="email" required={!POR_WHATSAPP} className="input" value={form.email} onChange={set('email')} autoComplete="email" />
      </div>
      <div>
        <label className="label" htmlFor="telefono">{POR_WHATSAPP ? 'Otro teléfono de contacto' : 'Teléfono / WhatsApp'}</label>
        <input id="telefono" type="tel" className="input" value={form.telefono} onChange={set('telefono')} autoComplete="tel" />
      </div>
      <div>
        <label className="label" htmlFor="servicio">Servicio de interés</label>
        <select id="servicio" className="input" value={form.servicio} onChange={set('servicio')}>
          <option value="">Seleccione una opción</option>
          {SERVICIOS.map((s) => <option key={s.slug} value={s.titulo}>{s.titulo}</option>)}
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="ciudad">Ciudad o municipio de la obra</label>
        <input id="ciudad" className="input" value={form.ciudad} onChange={set('ciudad')} autoComplete="address-level2" />
      </div>
      <div className="sm:col-span-2">
        <label className="label" htmlFor="mensaje">Cuéntenos sobre su proyecto *</label>
        <textarea id="mensaje" required rows={5} className="input resize-y" value={form.mensaje} onChange={set('mensaje')} />
      </div>
      <label className="sm:col-span-2 flex items-start gap-3 text-sm text-gray-600">
        <input type="checkbox" required checked={form.acepta} onChange={set('acepta')} className="mt-1 w-4 h-4 accent-ink" />
        <span>
          Autorizo el tratamiento de mis datos personales conforme a la{' '}
          <Link to="/legal/politica-de-privacidad" className="underline hover:text-ink">política de tratamiento de datos</Link>.
        </span>
      </label>
      <label className="sm:col-span-2 flex items-start gap-3 text-sm text-gray-600">
        <input type="checkbox" checked={form.aceptaComercial} onChange={set('aceptaComercial')} className="mt-1 w-4 h-4 accent-ink" />
        <span>Acepto recibir información comercial y novedades de la empresa (opcional).</span>
      </label>

      {estado === 'error' && (
        <div className="sm:col-span-2 border-l-4 border-red-600 bg-red-50 p-4 text-sm text-gray-700 fade-in" role="alert">
          <p className="flex items-center gap-2 font-semibold"><AlertTriangle size={16} className="text-red-600" /> No pudimos enviar su mensaje.</p>
          <p className="mt-1">Intente de nuevo o envíelo por WhatsApp; sus datos ya quedan escritos en el mensaje.</p>
          <a href={enlaceWhatsAppContacto(form)} target="_blank" rel="noopener noreferrer" className="btn-dark mt-4">
            <MessageCircle size={16} /> Enviar por WhatsApp
          </a>
        </div>
      )}

      <div className="sm:col-span-2">
        <button type="submit" disabled={estado === 'enviando'} className="btn-accent w-full sm:w-auto disabled:opacity-60">
          {estado === 'enviando' ? 'Enviando…' : POR_WHATSAPP ? <>Enviar por WhatsApp <MessageCircle size={16} /></> : <>Enviar mensaje <Send size={16} /></>}
        </button>
        {POR_WHATSAPP && <p className="mt-3 text-xs text-gray-500">Se abrirá WhatsApp con su mensaje ya escrito; solo tiene que presionar enviar.</p>}
      </div>
    </form>
  )
}
