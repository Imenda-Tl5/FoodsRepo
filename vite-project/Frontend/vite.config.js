import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.env.VITE_API_URL": JSON.stringify("https://foodsrepo.onrender.com"),
  },
});
