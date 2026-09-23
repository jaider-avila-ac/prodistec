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
    empleo/     Trabaje con nosotros (hojas de vida y proveedores)
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

Todo lo que aparece entre corchetes `[ ]` en el sitio es provisional.

**Datos corporativos** (`src/data/empresa.json`; cifras en `src/data/empresa.js`)
- Ya recibidos: NIT 900.914.555-3, Calle 24 # 3-99 Of. 1506 (Santa Marta), cel. y WhatsApp +57 324 569 2973
- Correos (general, talento humano, compras), horario de atención, redes sociales
- Cifras reales: años de experiencia, proyectos ejecutados, m² construidos
- Logo oficial en SVG (hoy hay uno provisional tipográfico en `Logo.jsx`)

**Nosotros** (`src/data/nosotros.js`)
- Reseña de la empresa, misión, visión y valores definitivos
- Hitos de la historia (año de fundación y principales logros)
- Texto de compromiso con la calidad, la seguridad y el ambiente

**Servicios** (`src/data/servicios.js`)
- Validar la descripción y el alcance de cada una de las 8 líneas de negocio

**Proyectos** (`src/data/proyectos.js`)
- Portafolio real: nombre, cliente o entidad, ubicación, año, área, estado, alcance
- 3 a 6 fotografías por proyecto (horizontales, mínimo 1600 px de ancho)

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
