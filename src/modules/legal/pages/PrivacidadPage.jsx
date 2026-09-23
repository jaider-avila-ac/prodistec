import { usePageMeta } from '../../../utils/seo'
import { EMPRESA } from '../../../data/empresa'
import LegalLayout from '../components/LegalLayout'

export default function PrivacidadPage() {
  usePageMeta('Política de tratamiento de datos personales')
  return (
    <LegalLayout title="Tratamiento de datos personales">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        {EMPRESA.nombre}, NIT {EMPRESA.nit}, domicilio {EMPRESA.direccion}, {EMPRESA.ciudad}. Correo: {EMPRESA.email}.
        Teléfono: {EMPRESA.telefono}.
      </p>

      <h2>2. Marco legal</h2>
      <p>
        Esta política se expide en cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el
        Decreto Único 1074 de 2015) y demás normas que las modifiquen o complementen.
      </p>

      <h2>3. Datos que recolectamos</h2>
      <ul>
        <li>Datos de identificación y contacto: nombre, empresa, correo electrónico y teléfono.</li>
        <li>Información que el titular incluya en sus mensajes o solicitudes.</li>
        <li>Hojas de vida y soportes de aspirantes a cargos.</li>
        <li>Información de proveedores y contratistas.</li>
        <li>Datos de navegación mediante cookies, según la política de cookies.</li>
      </ul>

      <h2>4. Finalidades</h2>
      <ul>
        <li>Atender solicitudes de información, cotizaciones, peticiones, quejas y reclamos.</li>
        <li>Adelantar procesos de selección de personal.</li>
        <li>Gestionar la relación con proveedores y contratistas.</li>
        <li>Enviar información sobre servicios, cuando el titular lo haya autorizado.</li>
        <li>Cumplir obligaciones legales y contractuales.</li>
      </ul>

      <h2>5. Derechos del titular</h2>
      <p>De acuerdo con el artículo 8 de la Ley 1581 de 2012, el titular puede:</p>
      <ul>
        <li>Conocer, actualizar y rectificar sus datos personales.</li>
        <li>Solicitar prueba de la autorización otorgada.</li>
        <li>Ser informado sobre el uso dado a sus datos.</li>
        <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
        <li>Revocar la autorización o solicitar la supresión de sus datos, cuando proceda.</li>
        <li>Acceder de forma gratuita a sus datos personales.</li>
      </ul>

      <h2>6. Procedimiento para consultas y reclamos</h2>
      <p>
        Las solicitudes se reciben en {EMPRESA.email}. Las consultas se atenderán en un término máximo de diez (10) días
        hábiles y los reclamos en un máximo de quince (15) días hábiles, prorrogables en los términos del artículo 15 de la
        Ley 1581 de 2012.
      </p>

      <h2>7. Seguridad de la información</h2>
      <p>
        La Empresa adopta medidas técnicas, humanas y administrativas razonables para proteger los datos contra acceso no
        autorizado, pérdida o uso fraudulento.
      </p>

      <h2>8. Vigencia</h2>
      <p>
        Esta política rige desde su publicación. Los datos se conservarán mientras sean necesarios para las finalidades
        descritas o mientras exista una obligación legal o contractual.
      </p>
    </LegalLayout>
  )
}
