import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  
  plugins: [react()],

   server: {
    allowedHosts: ['74a3-2409-40f2-217f-6ea9-de36-434f-d313-2c6a.ngrok-free.app'],
   }
})
