import { EMPRESA } from './empresa'
import { ShieldCheck, Award, Handshake, Leaf, Users, Scale } from 'lucide-react'

// Redacción de EJEMPLO — el cliente debe validar o reemplazar misión, visión,
// valores, historia y compromiso.
export const MISION =
  'Ejecutar proyectos de obra civil, infraestructura y arquitectura con calidad, seguridad y cumplimiento, aportando soluciones técnicas que generen valor para nuestros clientes, nuestros colaboradores y las comunidades donde trabajamos.'

export const VISION =
  'Para 2030 ser reconocidos como una empresa de ingeniería y construcción de referencia en la región, por la calidad de nuestras obras, el cumplimiento de nuestros compromisos y nuestra participación en proyectos de infraestructura de alto impacto.'

export const VALORES = [
  { titulo: 'Integridad', icon: Scale, texto: 'Actuamos con transparencia y ética en cada contrato y en cada relación.' },
  { titulo: 'Seguridad', icon: ShieldCheck, texto: 'La vida y la salud de las personas están por encima de cualquier plazo.' },
  { titulo: 'Calidad', icon: Award, texto: 'Construimos bien desde la primera vez, bajo norma y con control permanente.' },
  { titulo: 'Compromiso', icon: Handshake, texto: 'Cumplimos lo que prometemos: alcance, tiempo y presupuesto.' },
  { titulo: 'Responsabilidad ambiental', icon: Leaf, texto: 'Reducimos el impacto de nuestras obras en el entorno.' },
  { titulo: 'Trabajo en equipo', icon: Users, texto: 'Sumamos el talento de profesionales, técnicos y aliados.' },
]

export const HISTORIA = [
  { anio: '2015', titulo: 'Fundación', texto: `Nace ${EMPRESA.nombre} como empresa de obra civil y arquitectura. [Por confirmar]` },
  { anio: '2018', titulo: 'Primeros contratos públicos', texto: 'Ejecutamos nuestras primeras obras para entidades públicas. [Por confirmar]' },
  { anio: '2021', titulo: 'Infraestructura aeroportuaria', texto: 'Participamos en nuestro primer proyecto de modernización aeroportuaria. [Por confirmar]' },
  { anio: '2024', titulo: 'Crecimiento regional', texto: 'Ampliamos nuestra presencia en proyectos de la región Caribe. [Por confirmar]' },
]

export const COMPROMISO =
  `En ${EMPRESA.nombre} nos comprometemos a satisfacer los requisitos de nuestros clientes, prevenir lesiones y enfermedades laborales, proteger el medio ambiente y cumplir la legislación aplicable, mediante la mejora continua de nuestros procesos.`

// Proceso de trabajo (inicio y servicios)
export const PROCESO = [
  { paso: '01', titulo: 'Diagnóstico', texto: 'Entendemos la necesidad, el sitio y las condiciones del proyecto.' },
  { paso: '02', titulo: 'Planeación', texto: 'Definimos alcance, presupuesto, cronograma y riesgos.' },
  { paso: '03', titulo: 'Ejecución', texto: 'Construimos con control técnico, de calidad y de seguridad.' },
  { paso: '04', titulo: 'Entrega', texto: 'Entregamos la obra con documentación, garantías y acompañamiento.' },
]

// Sectores que atiende la empresa (tira animada del inicio)
export const SECTORES = [
  'Sector público', 'Aeropuertos', 'Educación', 'Salud', 'Industria', 'Logística',
  'Comercio', 'Vías urbanas', 'Espacio público', 'Oficinas corporativas',
]
