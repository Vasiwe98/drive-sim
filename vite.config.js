import { defineConfig } from 'vite'

// GitHub Pages serves at /drive-sim/, so all asset URLs must be prefixed.
export default defineConfig({
  base: '/drive-sim/',
  server: {
    host: true,
  },
})
