import { defineConfig } from "cypress"
import fs from 'fs'

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite"
    },
    setupNodeEvents(on, config) {
      on("task", {
        // ref: https://docs.cypress.io/api/commands/task#Read-a-file-that-might-not-exist
        readFileMaybe(filename: string) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, "utf8")
          }

          return null
        }
      })
    }
  }
})
