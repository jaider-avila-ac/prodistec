/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Color de marca ──────────────────────────────────────────────────
        // Cambiar SOLO estos valores para actualizar el color en todo el sitio.
        // accent      → barras, fondos de CTA, detalles (amarillo de obra)
        // accent-dark → hover de botones CTA
        // ink         → fondos oscuros (secciones, footer)
        // ────────────────────────────────────────────────────────────────────
        accent:        '#FBB603',
        'accent-dark': '#D99A00',
        ink:           '#0E1116',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
