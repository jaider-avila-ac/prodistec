import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const raiz = document.getElementById('root')
const app = <React.StrictMode><App /></React.StrictMode>

// Las páginas vienen prerenderizadas (scripts/prerender.mjs): React toma ese HTML sin
// volver a dibujarlo. Si la URL no es la que se prerenderizó (p. ej. la página 404 servida
// para una dirección inexistente), se dibuja desde cero.
if (raiz.dataset.ruta && raiz.dataset.ruta === window.location.pathname.replace(/(.)\/+$/, '$1')) {
  ReactDOM.hydrateRoot(raiz, app)
} else {
  ReactDOM.createRoot(raiz).render(app)
}
