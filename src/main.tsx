import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Render principal
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Herramientas de desarrollo (solo en modo DEV)
if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById('dev-tools')!).render(
    <React.StrictMode>
      {import.meta.env.DEV && (await import('./dev/DevTools')).default}
    </React.StrictMode>
  )
}