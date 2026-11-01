import { EMPRESA } from './empresa'
import { ShieldCheck, Award, Handshake, Leaf, Users, Scale } from 'lucide-react'

// Misión y visión: textos del cliente (cuestionario recibido). Valores y compromiso
// siguen siendo la redacción de ejemplo, el cliente no pidió cambiarlos.
export const MISION =
  'Somos una empresa constructora dedicada al desarrollo de proyectos de obra civil, en los ámbitos público y privado. La misión de PRODISTEC S.A.S. es satisfacer las necesidades de sus clientes antes, durante y después de finalizado el proyecto, dando cumplimiento a los estándares de calidad, costos y plazos fijados, respetando la legislación laboral, técnica, medioambiental y social.'

export const VISION =
  'Posicionarnos como la mejor empresa en el sector de la construcción en el ámbito nacional, a través del desarrollo de los proyectos en tiempos óptimos, la mejora continua de nuestros procesos, la gestión del capital humano y el respeto a las normas para la conservación del medio ambiente, para así brindar siempre servicios de calidad a nuestros clientes.'

export const VALORES = [
  { titulo: 'Integridad', icon: Scale, texto: 'Actuamos con transparencia y ética en cada contrato y en cada relación.' },
  { titulo: 'Seguridad', icon: ShieldCheck, texto: 'La vida y la salud de las personas están por encima de cualquier plazo.' },
  { titulo: 'Calidad', icon: Award, texto: 'Construimos bien desde la primera vez, bajo norma y con control permanente.' },
  { titulo: 'Compromiso', icon: Handshake, texto: 'Cumplimos lo que prometemos: alcance, tiempo y presupuesto.' },
  { titulo: 'Responsabilidad ambiental', icon: Leaf, texto: 'Reducimos el impacto de nuestras obras en el entorno.' },
  { titulo: 'Trabajo en equipo', icon: Users, texto: 'Sumamos el talento de profesionales, técnicos y aliados.' },
]

// Hitos de la empresa ({ anio, titulo, texto }). El cliente aún no los entrega;
// con la lista vacía la sección "Nuestra historia" no se muestra.
export const HISTORIA = []

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
