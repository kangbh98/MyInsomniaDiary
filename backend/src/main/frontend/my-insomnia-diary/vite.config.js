import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: 'http://ec2-15-164-210-112.ap-northeast-2.compute.amazonaws.com:8080'
  }
})
