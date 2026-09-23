import { useEffect, useRef, useState } from 'react'

/** Devuelve [ref, visible]: visible pasa a true la primera vez que el elemento
 *  entra en pantalla y ya no vuelve a false (animaciones de entrada, contadores). */
export function useInViewOnce(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return [ref, visible]
}
