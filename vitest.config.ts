import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import { playwright } from "@vitest/browser-playwright"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./app"),
    },
  },
  test: {
    // Cypress owns src/**/*.spec.ts; these are the component tests.
    include: ["src/**/*.browser.ts"],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
})
