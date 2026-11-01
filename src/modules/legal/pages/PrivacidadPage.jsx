import { usePageMeta } from '../../../utils/seo'
import { EMPRESA } from '../../../data/empresa'
import LegalLayout from '../components/LegalLayout'

// Canal para consultas y reclamos: el correo de datos personales (o el general) si
// existe; si no, WhatsApp y teléfono.
const CANAL_DATOS = EMPRESA.emailDatos
  ? `el correo electrónico ${EMPRESA.emailDatos}`
  : `WhatsApp o llamada al ${EMPRESA.telefono}`

export default function PrivacidadPage() {
  usePageMeta('Política de tratamiento de datos personales')
  const { legal } = EMPRESA
  return (
    <LegalLayout title="Tratamiento de datos personales">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        {EMPRESA.nombre}, NIT {EMPRESA.nit}, domicilio {EMPRESA.direccion}, {EMPRESA.ciudad}.
        {EMPRESA.email && <> Correo: {EMPRESA.email}.</>} Teléfono y WhatsApp: {EMPRESA.telefono}.
      </p>

      <h2>2. Datos que recolectamos</h2>
      <ul>
        <li>Datos de identificación y contacto: nombre, empresa, correo electrónico y teléfono.</li>
        <li>Información que el titular incluya en sus mensajes o solicitudes.</li>
        <li>Hojas de vida y soportes de aspirantes a cargos.</li>
        <li>Información de proveedores y contratistas.</li>
        <li>Datos de navegación mediante cookies, según la política de cookies.</li>
      </ul>

      <h2>3. Finalidades</h2>
      <ul>
        <li>Atender solicitudes de información, cotizaciones, peticiones, quejas y reclamos.</li>
        <li>Adelantar procesos de selección de personal.</li>
        <li>Gestionar la relación con proveedores y contratistas.</li>
        <li>Enviar información comercial y novedades de la Empresa, solo cuando el titular lo haya autorizado.</li>
        <li>Cumplir obligaciones legales y contractuales.</li>
      </ul>

      <h2>4. Conservación de hojas de vida</h2>
      <p>
        Las hojas de vida de los aspirantes que no sean seleccionados se conservan durante {legal.conservacionHojasDeVida} para
        tenerlas en cuenta en futuros procesos de selección. Cumplido ese plazo, se eliminan.
      </p>

      <h2>5. Entrega de datos a terceros</h2>
      <p>
        La Empresa podrá compartir los datos personales con terceros únicamente cuando sea necesario para cumplir las
        finalidades descritas en esta política. Los mensajes del formulario de contacto se entregan a la Empresa por medio de
        un servicio externo de envío de correo. Los datos no se venden ni se ceden para fines distintos.
      </p>

      <h2>6. Derechos del titular</h2>
      <p>El titular de los datos puede:</p>
      <ul>
        <li>Conocer, actualizar y rectificar sus datos personales.</li>
        <li>Solicitar prueba de la autorización otorgada.</li>
        <li>Ser informado sobre el uso dado a sus datos.</li>
        <li>Presentar quejas ante la autoridad competente.</li>
        <li>Revocar la autorización o solicitar la supresión de sus datos, cuando proceda.</li>
        <li>Acceder de forma gratuita a sus datos personales.</li>
      </ul>

      <h2>7. Procedimiento para consultas y reclamos</h2>
      <p>
        Las consultas y reclamos sobre datos personales los atiende el área de {legal.areaDatosPersonales} y se reciben a
        través de {CANAL_DATOS}, o por escrito en la oficina. Las consultas se atenderán en un término máximo de diez (10)
        días hábiles y los reclamos en un máximo de quince (15) días hábiles.
      </p>

      <h2>8. Seguridad de la información</h2>
      <p>
        La Empresa adopta medidas técnicas, humanas y administrativas razonables para proteger los datos contra acceso no
        autorizado, pérdida o uso fraudulento.
      </p>

      <h2>9. Vigencia</h2>
      <p>
        Esta política rige desde su publicación. Los datos se conservarán mientras sean necesarios para las finalidades
        descritas o mientras exista una obligación legal o contractual.
      </p>
    </LegalLayout>
  )
}
