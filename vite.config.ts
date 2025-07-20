import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react({
        fastRefresh: true,  // Habilita actualización instantánea
        jsxRuntime: 'classic'
      })],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            octalframework: ['./src/lib/octalframework'],
            games: ['./src/components/focus-session/mental-games']
          }
        }
      }
    },
    server: {
        host: true,  // Accesible en la red local
        port: 5173,  // Puerto por defecto
        open: true,   // Abre navegador automáticamente
        watch: {
          usePolling: true  // Mejor compatibilidad con Docker/WSL
        }
    },
    assetsInclude: ['**/*.lockb', '**/*.wasm']  // Soporte para archivos especiales
  });