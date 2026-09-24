// ─────────────────────────────────────────────────────────────────────────────
// Imágenes del sitio, organizadas por página en public/img/<pagina>/.
// Para cambiar una foto basta con reemplazar el archivo manteniendo el MISMO
// nombre (recomendado: WebP horizontal de 1600 px de ancho, unos 300 KB).
//
// Las de servicios y proyectos se definen en servicios.js y proyectos.js
// (public/img/servicios/<servicio>.webp y public/img/proyectos/<proyecto>/...).
//
// Fotos actuales: de EJEMPLO (Pexels, perfil @betongsmcsg).
// ─────────────────────────────────────────────────────────────────────────────
const IMG = '/img'

export const IMAGENES = {
  // Logos oficiales (en la raíz de public/). El isotipo también es el ícono de la
  // pestaña del navegador, declarado en index.html.
  marca: {
    imagotipo: '/imagotipo-proditec.svg', // logo completo: header y footer
    isotipo: '/isotipoproditec.svg', // solo el símbolo circular
  },
  general: {
    ctaCotizacion: `${IMG}/general/cta-cotizacion.webp`, // franja amarilla "¿Tiene un proyecto en mente?"
  },
  inicio: {
    heroFondos: [
      `${IMG}/inicio/hero-fondo-1.webp`,
      `${IMG}/inicio/hero-fondo-2.webp`,
      `${IMG}/inicio/hero-fondo-3.webp`,
      `${IMG}/inicio/hero-fondo-4.webp`,
    ],
    quienesSomos: `${IMG}/inicio/quienes-somos.webp`,
  },
  nosotros: {
    cabecera: `${IMG}/nosotros/cabecera.webp`,
    presentacionGrande: `${IMG}/nosotros/presentacion-grande.webp`,
    presentacionPequena: `${IMG}/nosotros/presentacion-pequena.webp`,
    politicaFondo: `${IMG}/nosotros/politica-fondo.webp`,
  },
  servicios: {
    cabecera: `${IMG}/servicios/cabecera.webp`,
  },
  proyectos: {
    cabecera: `${IMG}/proyectos/cabecera.webp`,
  },
  calidad: {
    cabecera: `${IMG}/calidad-y-seguridad/cabecera.webp`,
    politica: `${IMG}/calidad-y-seguridad/politica.webp`,
  },
  trabajaConNosotros: {
    cabecera: `${IMG}/trabaja-con-nosotros/cabecera.webp`,
  },
  contacto: {
    cabecera: `${IMG}/contacto/cabecera.webp`,
  },
  error404: {
    fondo: `${IMG}/error-404/fondo.webp`,
  },
}

/** Ruta de la imagen de un servicio: public/img/servicios/<slug>.webp */
export const imagenServicio = (slug) => `${IMG}/servicios/${slug}.webp`

/** Portada y galería de un proyecto: public/img/proyectos/<slug>/portada.webp y galeria-N.webp */
export const imagenesProyecto = (slug, fotosGaleria = 3) => ({
  imagen: `${IMG}/proyectos/${slug}/portada.webp`,
  galeria: Array.from({ length: fotosGaleria }, (_, i) => `${IMG}/proyectos/${slug}/galeria-${i + 1}.webp`),
})
