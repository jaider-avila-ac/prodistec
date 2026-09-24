import { useMemo, useState } from 'react'
import { usePageMeta } from '../../../utils/seo'
import { IMAGENES } from '../../../data/imagenes'
import { EMPRESA } from '../../../data/empresa'
import { PROYECTOS, CATEGORIAS_PROYECTO } from '../../../data/proyectos'
import PageHero from '../../../components/ui/PageHero'
import ProyectoCard from '../../../components/ui/ProyectoCard'
import CtaBanner from '../../../components/ui/CtaBanner'

// Alturas alternas para que la grilla no se vea uniforme.
const ALTOS = ['h-96', 'h-72', 'h-80', 'h-72', 'h-96', 'h-80']

export default function ProyectosPage() {
  usePageMeta('Proyectos', `Portafolio de proyectos de obra civil, edificaciones e infraestructura ejecutados por ${EMPRESA.nombre}`)
  const [categoria, setCategoria] = useState('Todos')

  const lista = useMemo(
    () => (categoria === 'Todos' ? PROYECTOS : PROYECTOS.filter((p) => p.categoria === categoria)),
    [categoria],
  )

  return (
    <>
      <PageHero
        title="Proyectos"
        subtitle="Obras ejecutadas y en ejecución para clientes públicos y privados."
        image={IMAGENES.proyectos.cabecera}
        breadcrumb={[{ label: 'Proyectos' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoría">
              {CATEGORIAS_PROYECTO.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={categoria === c}
                  onClick={() => setCategoria(c)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider border transition-colors ${categoria === c ? 'bg-ink text-white border-ink' : 'border-gray-300 text-gray-600 hover:border-ink hover:text-ink'}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500">{lista.length} {lista.length === 1 ? 'proyecto' : 'proyectos'}</p>
          </div>

          <div key={categoria} className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 fade-in">
            {lista.map((p, i) => (
              <div key={p.slug} className="mb-4 break-inside-avoid">
                <ProyectoCard proyecto={p} alto={ALTOS[i % ALTOS.length]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Su proyecto puede ser el siguiente" />
    </>
  )
}
