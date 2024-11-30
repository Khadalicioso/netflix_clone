import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/netflix__clone/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
