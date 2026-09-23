import { imagenesProyecto } from './imagenes'

// PROYECTOS DE EJEMPLO — el cliente debe reemplazarlos por su portafolio real
// (nombre, cliente/entidad, ubicación, año, área, alcance y fotos).
export const PROYECTOS = [
  {
    slug: 'sede-institucional-norte',
    titulo: 'Sede institucional Norte',
    categoria: 'Edificaciones',
    cliente: '[Entidad pública]',
    ubicacion: '[Ciudad, Departamento]',
    anio: 2024,
    area: '8.500 m²',
    estado: 'Ejecutado',
    resumen: 'Construcción de edificación institucional de cuatro niveles con estructura en concreto reforzado.',
    alcance: ['Cimentación profunda y estructura', 'Redes eléctricas e hidrosanitarias', 'Fachadas y acabados arquitectónicos', 'Urbanismo y parqueaderos'],
  },
  {
    slug: 'modernizacion-terminal-aerea',
    titulo: 'Modernización de terminal aérea',
    categoria: 'Aeroportuaria',
    cliente: '[Concesión aeroportuaria]',
    ubicacion: '[Ciudad, Departamento]',
    anio: 2025,
    area: '3.200 m²',
    estado: 'En ejecución',
    resumen: 'Participación en la ampliación y modernización de zonas de terminal manteniendo la operación.',
    alcance: ['Obras civiles en zona de operación', 'Adecuación de salas y circulaciones', 'Coordinación con seguridad aeroportuaria'],
  },
  {
    slug: 'corredor-vial-urbano',
    titulo: 'Corredor vial urbano',
    categoria: 'Infraestructura',
    cliente: '[Alcaldía municipal]',
    ubicacion: '[Ciudad, Departamento]',
    anio: 2023,
    area: '2,4 km',
    estado: 'Ejecutado',
    resumen: 'Rehabilitación de corredor vial con redes de drenaje, andenes y espacio público.',
    alcance: ['Pavimento rígido', 'Redes de alcantarillado pluvial', 'Andenes y señalización'],
  },
  {
    slug: 'complejo-educativo',
    titulo: 'Complejo educativo',
    categoria: 'Edificaciones',
    cliente: '[Secretaría de Educación]',
    ubicacion: '[Ciudad, Departamento]',
    anio: 2024,
    area: '5.100 m²',
    estado: 'Ejecutado',
    resumen: 'Construcción de aulas, laboratorios y zonas deportivas para institución educativa.',
    alcance: ['Bloques de aulas', 'Cubiertas metálicas', 'Placa polideportiva'],
  },
  {
    slug: 'adecuacion-sede-corporativa',
    titulo: 'Adecuación de sede corporativa',
    categoria: 'Remodelación',
    cliente: '[Empresa privada]',
    ubicacion: '[Ciudad, Departamento]',
    anio: 2025,
    area: '1.200 m²',
    estado: 'Ejecutado',
    resumen: 'Remodelación integral de oficinas sin interrumpir la operación del cliente.',
    alcance: ['Demoliciones y redistribución', 'Cielos, pisos y divisiones', 'Redes de datos y eléctricas'],
  },
  {
    slug: 'plataforma-logistica',
    titulo: 'Plataforma logística',
    categoria: 'Infraestructura',
    cliente: '[Empresa privada]',
    ubicacion: '[Ciudad, Departamento]',
    anio: 2026,
    area: '15.000 m²',
    estado: 'En ejecución',
    resumen: 'Bodegas, patios de maniobra y edificio administrativo para operación logística.',
    alcance: ['Naves industriales', 'Patios en pavimento', 'Edificio administrativo'],
  },
]

// Fotos en public/img/proyectos/<slug>/ (portada.webp + galeria-1..3.webp)
PROYECTOS.forEach((p) => Object.assign(p, imagenesProyecto(p.slug)))

export const CATEGORIAS_PROYECTO = ['Todos', ...new Set(PROYECTOS.map((p) => p.categoria))]
export const getProyecto = (slug) => PROYECTOS.find((p) => p.slug === slug)
