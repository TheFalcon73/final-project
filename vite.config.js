import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    transformMode: {
      web: [/\.[jt]sx$/], // Asegúrate de que Jest o Vitest puedan procesar estos archivos
    },
  },
});
