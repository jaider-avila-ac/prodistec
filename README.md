# PRODISTEC S.A.S. — Sitio web

Sitio informativo de **PRODISTEC S.A.S. — Obra civil y arquitectura**. Solo frontend.

- **Framework**: React 18 + Vite
- **Estilos**: Tailwind CSS v3 (esquinas rectas, sin emojis; iconos de `lucide-react`)
- **Puerto dev**: 5176 (`npm run dev`)
- **Deploy**: `Dockerfile` + `nginx.conf` (build estático servido por nginx)

## Estructura

```
src/
  components/
    layout/   Navbar, Footer, Layout, Logo, WhatsAppButton
    ui/       PageHero, SectionHeading, CtaBanner, ProyectoCard, Reveal
  data/       CONTENIDO DEL SITIO (empresa, servicios, proyectos, nosotros, imagenes)
  hooks/      useInViewOnce
  services/   contactoService (hoy abre un correo prellenado)
  utils/      seo (título y descripción por página)
  modules/
    home/       Inicio
    nosotros/   Empresa, misión, visión, historia, valores, política
    servicios/  Listado + detalle por servicio
    proyectos/  Portafolio filtrable + detalle de proyecto
    calidad/    Calidad, SST y ambiente, normativa aplicada
    empleo/     Trabaje con nosotros (desactivada: sin ruta ni enlaces, ver App.jsx)
    contacto/   Formulario, canales y mapa
    legal/      Términos, tratamiento de datos, cookies
    error/      404
```

Para cambiar el color de marca, edite **solo** `tailwind.config.js` → `theme.extend.colors`.
Todo el texto editable está en `src/data/`: el cliente no necesita tocar componentes.

### Datos de la empresa: `src/data/empresa.json`

Nombre, NIT, dirección, teléfono, WhatsApp, correos, horario y redes sociales se cambian
**solo en este archivo** y se actualizan en todo el sitio. Los enlaces `tel:`, WhatsApp y el
mapa se generan solos a partir del teléfono y la dirección. Una red social con valor `""`
no muestra su ícono.

Al compilar (`npm run build`), esos datos también se escriben en el `index.html` (título,
descripción, etiquetas Open Graph y datos estructurados schema.org para Google), así que
quedan en el HTML aunque el navegador no ejecute JavaScript. Esto lo hace el plugin
`empresaEnHtml` de `vite.config.js`.

## Información pendiente del cliente

El sitio ya no muestra notas de "provisional": lo pendiente se lista aquí y en el
cuestionario para el cliente (`Cuestionario_PRODISTEC.docx`, fuera de este repositorio).

Cuestionario recibido y aplicado: horario, atención con cita previa, misión, visión y datos
para las páginas legales (cotizaciones gratuitas con validez de 30 días, reclamos en Santa Marta,
consultas de datos personales a cargo de Recursos Humanos, hojas de vida guardadas 6 meses).

**Datos corporativos** (`src/data/empresa.json`; cifras en `src/data/empresa.js`)
- Ya recibidos: NIT, dirección, cel. y WhatsApp, horario y atención en oficina
- Correo de la empresa (usa Gmail u Outlook, pero no lo escribió). Mientras esté vacío, el sitio
  no muestra correo y el formulario, las hojas de vida y los proveedores se envían por WhatsApp
- Redes sociales (las dejó en blanco: no se muestran). No tiene perfil de Google Maps
- Cifras reales: años de experiencia, proyectos ejecutados, m² construidos. Sin datos, la franja
  de cifras del inicio no se muestra

**Nosotros** (`src/data/nosotros.js`)
- Año de fundación e hitos de la historia. Sin datos, la sección "Nuestra historia" no se muestra
- Valores y compromiso: no marcó ninguna opción, siguen los textos de ejemplo

**Servicios** (`src/data/servicios.js`)
- Confirmó las afirmaciones del sitio (equipo propio, clientes públicos y privados, proyectos aeroportuarios)

**Proyectos** (`src/data/proyectos.js`)
- Fotos reales recibidas. Faltan año, área y nombre del cliente de cada proyecto (y si se puede publicar)

**Calidad y seguridad**
- No tiene certificaciones ISO (confirmado). El sitio no menciona certificaciones, sistemas
  de gestión ni leyes o decretos. Solo agregarlos si el cliente los confirma por escrito.

**Legal**
- Revisión de términos, política de datos y cookies por su asesor jurídico

## Imágenes

Todas las fotos están en `public/img/`, una carpeta por página, en formato WebP
(1600 px de ancho). Para cambiar una foto, reemplace el archivo **con el mismo nombre**:

```
public/img/
  general/               cta-cotizacion.webp (franja amarilla de cierre, varias páginas)
  inicio/                hero-fondo-1..4.webp, quienes-somos.webp
  nosotros/              cabecera, presentacion-grande, presentacion-pequena, politica-fondo
  servicios/             cabecera.webp + una foto por servicio (construccion.webp, edificaciones.webp, ...)
  proyectos/             cabecera.webp + una carpeta por proyecto: portada.webp, galeria-1..3.webp
  calidad-y-seguridad/   cabecera.webp, politica.webp
  trabaja-con-nosotros/  cabecera.webp
  contacto/              cabecera.webp
  error-404/             fondo.webp
```

Las rutas se definen en `src/data/imagenes.js`. Las fotos actuales son de ejemplo
(Pexels, perfil @betongsmcsg).
