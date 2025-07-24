import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  
  plugins: [react()],

   server: {
    allowedHosts: ["8cf0-2409-40f2-1040-986c-1e06-9de4-c4b0-ab02.ngrok-free.app"],
   }
})
