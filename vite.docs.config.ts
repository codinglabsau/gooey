import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import Markdown from "unplugin-vue-markdown/vite"
import Shiki from "@shikijs/markdown-it"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: "/gooey/",
  build: {
    outDir: "docs-dist",
    emptyOutDir: true,
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      async markdownItSetup(md) {
        md.use(
          await Shiki({
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
            transformers: [
              {
                name: "copy-button",
                pre(node) {
                  node.children.push({
                    type: "element",
                    tagName: "button",
                    properties: {
                      class: "copy-button",
                      onclick: `navigator.clipboard.writeText(this.parentElement.querySelector('code').textContent).then(()=>{this.classList.add('copied');setTimeout(()=>this.classList.remove('copied'),2000)})`,
                    },
                    children: [],
                  })
                },
              },
            ],
          }),
        )
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./app"),
    },
  },
})
