import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@popperjs/core'],
    esbuildOptions: {
      target: 'es2020',
      platform: 'browser'
    }
  },
  build: {
    target: 'es2020',
    commonjsOptions: {
      include: [/@popperjs\/core/, /node_modules/]
    }
  },
  resolve: {
    alias: {
      '@popperjs/core': '@popperjs/core/dist/umd/popper.js'
    }
  }
})
