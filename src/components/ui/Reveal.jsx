import { useInViewOnce } from '../../hooks/useInViewOnce'

/** Envuelve un bloque para que aparezca con un desplazamiento suave al entrar en pantalla. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useInViewOnce()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
