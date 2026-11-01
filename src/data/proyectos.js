import { imagenesProyecto } from './imagenes'

// Portafolio real de PRODISTEC. Los campos de la ficha técnica que no estén
// confirmados por el cliente (cliente, año, área...) se omiten y no se muestran.
export const PROYECTOS = [
  {
    slug: 'aeropuerto-contador-pitalito',
    titulo: 'Aeropuerto Contador',
    categoria: 'Aeroportuaria',
    cliente: 'Aeronáutica Civil',
    ubicacion: 'Pitalito, Huila',
    estado: 'En ejecución',
    resumen: 'Construcción del nuevo terminal del Aeropuerto Contador de Pitalito, con sus obras de urbanismo, plataformas y pavimentos.',
    alcance: ['Estructura y cubierta del edificio terminal', 'Mampostería y acabados interiores', 'Pavimentos, adoquines y obras de urbanismo', 'Redes y obras complementarias'],
    fotos: 9,
  },
  {
    slug: 'institucion-educativa-aracataca',
    titulo: 'Institución educativa en Aracataca',
    categoria: 'Edificaciones',
    ubicacion: 'Aracataca, Magdalena',
    estado: 'Ejecutado',
    resumen: 'Construcción de sede educativa de dos niveles con aulas, baterías sanitarias, cubiertas metálicas y zonas verdes.',
    alcance: ['Bloques de aulas en dos niveles', 'Cubiertas metálicas y escaleras', 'Baterías sanitarias', 'Paisajismo y senderos peatonales'],
    fotos: 9,
  },
  {
    slug: 'institucion-educativa-pivijay',
    titulo: 'Institución educativa en Pivijay',
    categoria: 'Edificaciones',
    ubicacion: 'Pivijay, Magdalena',
    estado: 'Ejecutado',
    resumen: 'Construcción de sede educativa con aulas, corredores, baterías sanitarias y zonas exteriores.',
    alcance: ['Aulas y corredores de circulación', 'Pisos y acabados', 'Baterías sanitarias', 'Barandas, cerramiento y zonas verdes'],
    fotos: 9,
  },
  {
    slug: 'escuela-palafitica-nueva-venecia',
    titulo: 'Escuela palafítica Nueva Venecia',
    categoria: 'Edificaciones',
    ubicacion: 'Nueva Venecia, Magdalena',
    estado: 'Ejecutado',
    resumen: 'Construcción en madera de aulas sobre palafitos y puentes peatonales en el corregimiento de Nueva Venecia, en la Ciénaga Grande.',
    alcance: ['Aulas en estructura de madera', 'Cubiertas a dos aguas', 'Puentes y pasarelas peatonales', 'Carpintería de puertas y ventanas'],
    fotos: 9,
  },
  {
    slug: 'mi-calle-nueva-colombia',
    titulo: 'Mi Calle — Sector Nueva Colombia',
    categoria: 'Infraestructura',
    ubicacion: 'Santa Marta, Magdalena',
    estado: 'Ejecutado',
    resumen: 'Pavimentación de vías urbanas en el sector Nueva Colombia, con bordillos y señalización.',
    alcance: ['Pavimento rígido en concreto', 'Bordillos y andenes', 'Demarcación y señalización vial'],
    fotos: 2,
  },
]

// Fotos en public/img/proyectos/<slug>/ (portada.webp + galeria-1..N.webp)
PROYECTOS.forEach((p) => Object.assign(p, imagenesProyecto(p.slug, p.fotos)))

export const CATEGORIAS_PROYECTO = ['Todos', ...new Set(PROYECTOS.map((p) => p.categoria))]
export const getProyecto = (slug) => PROYECTOS.find((p) => p.slug === slug)
