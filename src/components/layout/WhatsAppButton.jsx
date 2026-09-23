import { MessageCircle } from 'lucide-react'
import { EMPRESA } from '../../data/empresa'

export default function WhatsAppButton() {
  const texto = encodeURIComponent('Hola, quisiera información sobre sus servicios.')
  return (
    <a
      href={`https://wa.me/${EMPRESA.whatsapp}?text=${texto}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-30 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/25 hover:bg-[#1eb457] transition-colors"
    >
      <MessageCircle size={26} />
    </a>
  )
}
