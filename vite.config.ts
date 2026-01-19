import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import { viteStaticCopy } from "vite-plugin-static-copy"
import Markdown from "unplugin-vue-markdown/vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "gooey",
      fileName: "gooey",
    },
    rollupOptions: {
      external: ["vue"],
    },
    copyPublicDir: false,
    emptyOutDir: true,
  },
  plugins: [
    tailwindcss(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    viteStaticCopy({
      targets: [
        {
          src: "src/presets/slate.css",
          dest: "presets",
        },
        {
          src: "src/presets/v4/preset.css",
          dest: "presets/v4",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./app"),
    },
  },
})
