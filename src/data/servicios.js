import { HardHat, Building2, Route, PlaneTakeoff, DraftingCompass, Cog, ClipboardList, Hammer } from 'lucide-react'
import { imagenServicio } from './imagenes'

// Líneas de negocio suministradas por el cliente. "resumen" es el texto original;
// "descripcion" y "alcances" son redacción de ejemplo para que el cliente la ajuste.
export const SERVICIOS = [
  {
    slug: 'construccion',
    titulo: 'Construcción',
    icon: HardHat,
    resumen: 'Ejecución de obras civiles y proyectos de infraestructura.',
    descripcion: 'Ejecutamos obras civiles de principio a fin: desde el replanteo y los movimientos de tierra hasta la entrega de la obra terminada, con control de calidad, cronograma y presupuesto en cada etapa.',
    alcances: ['Movimientos de tierra y cimentaciones', 'Estructuras en concreto y acero', 'Redes hidrosanitarias y eléctricas', 'Mampostería, acabados y obras exteriores'],
  },
  {
    slug: 'edificaciones',
    titulo: 'Edificaciones',
    icon: Building2,
    resumen: 'Construcción, adecuación y mejoramiento de edificaciones.',
    descripcion: 'Construimos y mejoramos edificaciones institucionales, comerciales e industriales, de acuerdo con los requisitos técnicos de cada cliente.',
    alcances: ['Edificaciones institucionales y educativas', 'Sedes corporativas y comerciales', 'Bodegas y naves industriales', 'Reforzamiento estructural'],
  },
  {
    slug: 'infraestructura',
    titulo: 'Infraestructura',
    icon: Route,
    resumen: 'Obras de infraestructura urbana, vial e institucional.',
    descripcion: 'Desarrollamos obras que conectan y mejoran las ciudades: vías, espacio público, redes de servicios y equipamientos institucionales.',
    alcances: ['Vías urbanas y pavimentos', 'Andenes, plazas y espacio público', 'Redes de acueducto, alcantarillado y drenaje', 'Obras de contención y estabilización'],
  },
  {
    slug: 'infraestructura-aeroportuaria',
    titulo: 'Infraestructura aeroportuaria',
    icon: PlaneTakeoff,
    resumen: 'Participación en proyectos de construcción y modernización aeroportuaria.',
    descripcion: 'Participamos en proyectos de construcción y modernización aeroportuaria, trabajando bajo los protocolos de seguridad operacional que exige un entorno en operación.',
    alcances: ['Terminales y edificaciones de apoyo', 'Plataformas, calles de rodaje y zonas de seguridad', 'Adecuaciones en zonas de operación', 'Coordinación con autoridades aeroportuarias'],
  },
  {
    slug: 'arquitectura-y-diseno',
    titulo: 'Arquitectura y diseño',
    icon: DraftingCompass,
    resumen: 'Diseño y desarrollo arquitectónico como servicio complementario.',
    descripcion: 'Acompañamos a nuestros clientes desde la idea: diseño arquitectónico, coordinación técnica y desarrollo de planos para que el proyecto llegue a obra listo para construirse.',
    alcances: ['Anteproyecto y diseño arquitectónico', 'Planos de construcción y detalles', 'Coordinación de diseños técnicos', 'Apoyo en trámites y licencias'],
  },
  {
    slug: 'ingenieria-civil',
    titulo: 'Ingeniería civil',
    icon: Cog,
    resumen: 'Planeación, coordinación y ejecución de proyectos de ingeniería.',
    descripcion: 'Aportamos la ingeniería que hace viable cada proyecto: planeación, programación de obra, presupuestos y control técnico durante la ejecución.',
    alcances: ['Planeación y programación de obra', 'Presupuestos y análisis de precios', 'Control técnico y de calidad', 'Estudios y diseños de ingeniería'],
  },
  {
    slug: 'gestion-de-proyectos',
    titulo: 'Gestión de proyectos',
    icon: ClipboardList,
    resumen: 'Administración, coordinación y ejecución contractual de proyectos.',
    descripcion: 'Administramos proyectos con enfoque en el cumplimiento contractual: alcance, tiempo, costo, calidad y riesgos bajo control, con informes claros para el cliente.',
    alcances: ['Gerencia y administración de obra', 'Ejecución de contratos públicos y privados', 'Control de costos y cronogramas', 'Informes de avance y cierre contractual'],
  },
  {
    slug: 'adecuaciones-y-remodelaciones',
    titulo: 'Adecuaciones y remodelaciones',
    icon: Hammer,
    resumen: 'Intervención, mejoramiento y actualización de infraestructura existente.',
    descripcion: 'Intervenimos espacios existentes para actualizarlos a nuevas necesidades, minimizando la afectación a la operación diaria de nuestros clientes.',
    alcances: ['Remodelación de oficinas y sedes', 'Actualización de redes y acabados', 'Accesibilidad y cumplimiento normativo', 'Mantenimiento de infraestructura'],
  },
]

// Cada servicio usa public/img/servicios/<slug>.webp
SERVICIOS.forEach((s) => { s.imagen = imagenServicio(s.slug) })

export const getServicio = (slug) => SERVICIOS.find((s) => s.slug === slug)
