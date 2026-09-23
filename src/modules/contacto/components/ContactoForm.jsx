import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, CheckCircle2 } from 'lucide-react'
import { SERVICIOS } from '../../../data/servicios'
import { enviarContacto } from '../../../services/contactoService'

const INICIAL = { nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '', acepta: false }

export default function ContactoForm() {
  const [form, setForm] = useState(INICIAL)
  const [enviado, setEnviado] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    await enviarContacto(form)
    setEnviado(true)
    setForm(INICIAL)
  }

  if (enviado) {
    return (
      <div className="border border-gray-200 p-10 text-center fade-in">
        <CheckCircle2 size={48} className="mx-auto text-accent-dark" />
        <h3 className="mt-4 text-3xl font-bold">Gracias por escribirnos</h3>
        <p className="mt-2 text-gray-600">Se abrió su programa de correo con el mensaje listo para enviar.</p>
        <button type="button" onClick={() => setEnviado(false)} className="btn-dark mt-6">Enviar otro mensaje</button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
      <div>
        <label className="label" htmlFor="nombre">Nombre completo *</label>
        <input id="nombre" required className="input" value={form.nombre} onChange={set('nombre')} autoComplete="name" />
      </div>
      <div>
        <label className="label" htmlFor="empresa">Empresa / entidad</label>
        <input id="empresa" className="input" value={form.empresa} onChange={set('empresa')} autoComplete="organization" />
      </div>
      <div>
        <label className="label" htmlFor="email">Correo electrónico *</label>
        <input id="email" type="email" required className="input" value={form.email} onChange={set('email')} autoComplete="email" />
      </div>
      <div>
        <label className="label" htmlFor="telefono">Teléfono</label>
        <input id="telefono" type="tel" className="input" value={form.telefono} onChange={set('telefono')} autoComplete="tel" />
      </div>
      <div className="sm:col-span-2">
        <label className="label" htmlFor="servicio">Servicio de interés</label>
        <select id="servicio" className="input" value={form.servicio} onChange={set('servicio')}>
          <option value="">Seleccione una opción</option>
          {SERVICIOS.map((s) => <option key={s.slug} value={s.titulo}>{s.titulo}</option>)}
          <option value="Otro">Otro</option>
        </select>
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
      <div className="sm:col-span-2">
        <button type="submit" className="btn-accent w-full sm:w-auto">Enviar mensaje <Send size={16} /></button>
      </div>
    </form>
  )
}
