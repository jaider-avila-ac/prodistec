import { MessageCircle } from 'lucide-react'
import { enlaceWhatsApp } from '../../data/empresa'

export default function WhatsAppButton() {
  return (
    <a
      href={enlaceWhatsApp('Hola, quisiera información sobre sus servicios.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-30 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/25 hover:bg-[#1eb457] transition-colors"
    >
      <MessageCircle size={26} />
    </a>
  )
}
