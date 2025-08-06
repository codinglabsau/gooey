import path from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import removeAttr from "remove-attr"
import { viteStaticCopy } from "vite-plugin-static-copy"
import Markdown from 'unplugin-vue-markdown/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === "build"

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "./src/index.ts"),
        name: "gooey",
        fileName: "gooey"
      },
      rollupOptions: {
        external: [
          "vue",
          "@inertiajs/vue3"
        ]
      },
      copyPublicDir: false,
      emptyOutDir: false
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      isBuild && removeAttr({
        //extensions: ['vue' ],
        attributes: ['data-cy']
      }),
      Markdown({ /* options */ }),
      viteStaticCopy({
        targets: [
          {
            src: "src/presets/slate.css",
            dest: "presets"
          }
        ]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@app": path.resolve(__dirname, "./app")
      }
    }
  }
})
