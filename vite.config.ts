import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import { viteStaticCopy } from "vite-plugin-static-copy"
import Markdown from "unplugin-vue-markdown/vite"
import dts from "vite-plugin-dts"
import Shiki from "@shikijs/markdown-it"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: command === "build" ? { "process.env.NODE_ENV": '"production"' } : {},
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
    Markdown({
      async markdownItSetup(md) {
        md.use(await Shiki({
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        }))
      },
    }),
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
    dts({
      outDir: "dist/types",
      tsconfigPath: "./tsconfig.json",
      include: ["src/**/*"],
      exclude: ["src/**/*.spec.ts", "app/**/*"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./app"),
    },
  },
}))
