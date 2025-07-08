import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config: any = {
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    }
  }

  // Solo usar el prefijo /heroes-app/ en producción (build)
  if (command === 'build') {
    config.base = '/heroes-app/'
  }

  return config
})
