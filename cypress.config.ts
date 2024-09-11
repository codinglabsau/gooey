import { defineConfig } from "cypress"
import vitePreprocessor from "cypress-vite"
import fs from "fs"

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
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: 'src/components/**/*.spec.ts',

    setupNodeEvents(on, config) {
      // todo: get vite to launch if not already running
      // on("before:run", () => {
      //   const viteProcess = spawn("npm", ["run", "dev"], { stdio: "inherit" })
      //
      //   // Wait for the Vite server to start
      //   return new Promise((resolve) => {
      //     viteProcess.stdout.on("data", (data) => {
      //       if (data.toString().includes("Vite v")) {
      //         resolve()
      //       }
      //     })
      //   }).then(() => {
      //     console.log("Vite server started")
      //   })
      // })

      on("file:preprocessor", vitePreprocessor())
    }
  }
})
