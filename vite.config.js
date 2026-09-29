import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    // The contact form POSTs to /api/contact, which Vite does not serve.
    // server/dev-api.js does, so forward it there during `npm run dev`.
    proxy: {
      '/api': 'http://localhost:8787',
    },
  },
})
