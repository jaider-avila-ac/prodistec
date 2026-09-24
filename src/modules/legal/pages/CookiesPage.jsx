import { usePageMeta } from '../../../utils/seo'
import LegalLayout from '../components/LegalLayout'

export default function CookiesPage() {
  usePageMeta('Política de cookies')
  return (
    <LegalLayout title="Política de cookies">
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en el navegador del usuario para recordar información sobre
        su visita.
      </p>

      <h2>2. Cookies que usa este sitio</h2>
      <h3>Técnicas o necesarias</h3>
      <p>Permiten el funcionamiento básico del sitio. No requieren consentimiento.</p>
      <h3>De terceros</h3>
      <p>
        Algunos contenidos incrustados, como el mapa de ubicación (Google Maps), pueden instalar cookies propias de esos
        servicios, sujetas a sus políticas de privacidad.
      </p>

      <h2>3. Cómo desactivarlas</h2>
      <p>
        El usuario puede bloquear o eliminar las cookies desde la configuración de su navegador. Desactivarlas puede afectar el
        funcionamiento de algunas partes del sitio.
      </p>

      <h2>4. Cambios</h2>
      <p>Esta política puede actualizarse; la versión vigente será la publicada en esta página.</p>
    </LegalLayout>
  )
}
