import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }): UserConfig => {
  const config: UserConfig = {
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
