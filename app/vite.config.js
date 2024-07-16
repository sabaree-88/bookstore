import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/user': {
        target: "https://bookstore-app-qy0h.onrender.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, ''),
      },
      '/book': {
        target: "https://bookstore-app-qy0h.onrender.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/book/, ''),
      },
    },
  },
})
