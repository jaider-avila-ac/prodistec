import { Link } from 'react-router-dom'
import { usePageMeta } from '../../../utils/seo'
import { EMPRESA } from '../../../data/empresa'
import LegalLayout from '../components/LegalLayout'

export default function TerminosPage() {
  usePageMeta('Términos y condiciones')
  return (
    <LegalLayout title="Términos y condiciones">
      <h2>1. Identificación</h2>
      <p>
        El presente sitio web es administrado por {EMPRESA.nombre}, identificada con NIT {EMPRESA.nit}, con domicilio en{' '}
        {EMPRESA.direccion}, {EMPRESA.ciudad}, correo electrónico {EMPRESA.email} (en adelante, "la Empresa").
      </p>

      <h2>2. Objeto</h2>
      <p>
        Estos términos regulan el acceso y uso del sitio web, cuyo propósito es informativo: presentar la empresa, sus servicios,
        proyectos y canales de contacto. El sitio no realiza ventas en línea ni celebra contratos a través de él.
      </p>

      <h2>3. Aceptación</h2>
      <p>
        Al navegar en el sitio, el usuario acepta estos términos. Si no está de acuerdo con ellos, debe abstenerse de usarlo.
      </p>

      <h2>4. Uso permitido</h2>
      <p>El usuario se compromete a hacer un uso lícito del sitio y, en particular, a no:</p>
      <ul>
        <li>Suministrar información falsa a través de los formularios.</li>
        <li>Intentar acceder sin autorización a sistemas o datos de la Empresa.</li>
        <li>Introducir código malicioso o afectar el funcionamiento del sitio.</li>
        <li>Usar el contenido con fines contrarios a la ley o a los derechos de terceros.</li>
      </ul>

      <h2>5. Propiedad intelectual</h2>
      <p>
        Los textos, logotipos, fotografías, planos, diseños y demás contenidos del sitio son propiedad de la Empresa o se usan con
        autorización de sus titulares, y están protegidos por la Ley 23 de 1982 y la Decisión Andina 351 de 1993. Se prohíbe su
        reproducción, distribución o modificación sin autorización previa y por escrito.
      </p>

      <h2>6. Información publicada</h2>
      <p>
        La información sobre servicios y proyectos es de carácter general y no constituye una oferta comercial vinculante. Las
        condiciones de cada proyecto se definen en la propuesta y el contrato correspondientes.
      </p>

      <h2>7. Enlaces a terceros</h2>
      <p>
        El sitio puede contener enlaces a sitios de terceros (por ejemplo, redes sociales o mapas). La Empresa no es responsable
        por su contenido ni por sus políticas de privacidad.
      </p>

      <h2>8. Responsabilidad</h2>
      <p>
        La Empresa procura que el sitio esté disponible y actualizado, pero no garantiza la ausencia de interrupciones o errores,
        ni responde por daños derivados del uso de la información publicada.
      </p>

      <h2>9. Datos personales</h2>
      <p>
        Los datos que el usuario suministre se tratarán conforme a la{' '}
        <Link to="/legal/politica-de-privacidad" className="underline">política de tratamiento de datos personales</Link>.
      </p>

      <h2>10. Modificaciones y ley aplicable</h2>
      <p>
        La Empresa puede modificar estos términos en cualquier momento; la versión vigente será la publicada en el sitio. Estos
        términos se rigen por las leyes de la República de Colombia.
      </p>
    </LegalLayout>
  )
}
