import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/challenge-innovation-2026-corsidonie/',
  plugins: [vue()],
  server: {
    port: 5173
  }
})
