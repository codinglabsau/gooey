import path from 'node:path'
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "gooey",
      fileName: "gooey",
    },
    rollupOptions: {
      external: ["vue", "@inertiajs/vue3"],
    },
    emptyOutDir: false,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
