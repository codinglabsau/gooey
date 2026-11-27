/**
 * Guards the invariant that importing the library touches no browser storage.
 *
 * `SidebarProvider` and `CollapsibleTwoColumnLayout` default `defaultOpen` from
 * a cookie. Written inline, the SFC compiler hoists that expression to module
 * scope, so `document.cookie` is read the moment the library is imported — which
 * throws `SecurityError` in an iframe sandboxed without `allow-same-origin`, in
 * apps that never render a sidebar at all. A factory default defers the read to
 * component creation.
 *
 * This asserts against the built bundle rather than the components, because that
 * is what ships and because the repo encourages regenerating these components
 * with `npx shadcn-vue@latest add <name> --overwrite`. Upstream still has the
 * inline form, so an overwrite silently reintroduces the bug; no component-level
 * test survives being overwritten alongside the component it guards.
 *
 * It reads a file and matches a regex, so it is a plain Node check — running it
 * as a browser test cost a full Cypress boot for no reason.
 */
import { readFile } from "node:fs/promises"

const BUNDLE = "dist/gooey.js"

// the hoisted form a shadcn overwrite would restore: `default: !doc?.cookie…`
const INLINE = /default:\s*!?\s*\w+\?\.cookie/
const FACTORY = /default:\s*\(\)\s*=>\s*!?\s*\w+\?\.cookie/g

const bundle = await readFile(BUNDLE, "utf8").catch(() => {
  console.error(`✖ ${BUNDLE} not found — build before running this check.`)
  process.exit(1)
})

const failures = []

const inline = bundle.match(INLINE)
if (inline) {
  failures.push(`a prop default reads document.cookie at module scope: ${inline[0]}`)
}

const factories = bundle.match(FACTORY) ?? []
if (factories.length < 2) {
  failures.push(
    `expected at least 2 factory cookie defaults (SidebarProvider and ` +
      `CollapsibleTwoColumnLayout), found ${factories.length}`,
  )
}

if (failures.length) {
  console.error(`✖ import safety: ${BUNDLE}`)
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}

console.log(`✔ import safety: no module-scope cookie read in ${BUNDLE}`)
