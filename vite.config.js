import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'home': ['./src/pages/Home.jsx'],
          'about': ['./src/pages/About.jsx'],
          'dashboard': ['./src/pages/Dashboard.jsx'],
          'profile': ['./src/pages/Profile.jsx']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
