import { defineConfig, mergeConfig } from "vite"
import docsConfig from "./vite.docs.config"

// CI build of the showcase app: same as docs but served from `/` so Cypress
// URLs (`cy.visit("/components/...")`) work without a base-path prefix.
export default mergeConfig(docsConfig, defineConfig({ base: "/" }))
