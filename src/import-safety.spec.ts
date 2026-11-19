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
 */
describe("import safety", () => {
  it("reads no cookie at module scope in the built bundle", () => {
    cy.readFile("dist/gooey.js").then((bundle: string) => {
      // the hoisted form a shadcn overwrite would restore: `default: !doc?.cookie…`
      expect(bundle, "a prop default reads document.cookie at module scope").not.to.match(
        /default:\s*!?\s*\w+\?\.cookie/,
      )
    })
  })

  it("defaults the sidebar cookie reads from a factory", () => {
    cy.readFile("dist/gooey.js").then((bundle: string) => {
      const factories = bundle.match(/default:\s*\(\)\s*=>\s*!?\s*\w+\?\.cookie/g) ?? []

      expect(
        factories,
        "SidebarProvider and CollapsibleTwoColumnLayout",
      ).to.have.length.of.at.least(2)
    })
  })
})
