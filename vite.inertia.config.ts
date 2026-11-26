import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig, type Plugin } from "vite"
import vue from "@vitejs/plugin-vue"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Points the entry's imports of the library at the published package, so the app
 * shares one copy of the Flasher (and its toast store) between both entries.
 */
function importLibraryFromPackage(): Plugin {
  return {
    name: "gooey:import-library-from-package",
    enforce: "pre",
    resolveId(id) {
      if (id.startsWith("@/")) {
        return { id: "@codinglabsau/gooey", external: true }
      }
    },
  }
}

// Builds the optional `@codinglabsau/gooey/inertia` entry on top of the main build.
export default defineConfig({
  define: { "process.env.NODE_ENV": '"production"' },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/inertia/index.ts"),
      formats: ["es"],
      fileName: () => "inertia.js",
    },
    rollupOptions: {
      external: ["vue", /^@inertiajs\//],
    },
    copyPublicDir: false,
    emptyOutDir: false,
  },
  plugins: [importLibraryFromPackage(), vue()],
})
