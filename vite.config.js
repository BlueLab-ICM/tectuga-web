import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative base: the built site works from any path (GitHub Pages, a sub-folder of icm.csic.es, ...)
export default defineConfig({
  base: './',
  plugins: [vue()],
})
