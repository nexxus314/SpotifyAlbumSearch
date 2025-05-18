import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  
  plugins: [react()],

   server: {
    allowedHosts: ["e1e3-2409-40f2-217f-6ea9-123-6a8-7177-a035.ngrok-free.app"],
   }
})
