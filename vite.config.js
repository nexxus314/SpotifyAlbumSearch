import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  
  plugins: [react()],

   server: {
    allowedHosts: ['8699-2409-40f2-3f-3a11-bba9-5fe2-d318-f8ba.ngrok-free.app'],
   }
})
