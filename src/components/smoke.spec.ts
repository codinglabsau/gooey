// Smoke tests for every component showcase route.
// Consolidated into one spec so Cypress only spins up the browser once,
// instead of paying the ~10s warmup cost for each component.
//
// Keep this list in sync with app/router/index.ts. Functional specs that
// assert behaviour beyond "the page renders" live in their own *.spec.ts
// file alongside the component (e.g. flasher, confirm-dialog, simple-select).

const smokeRoutes = [
  "/components/accordion",
  "/components/alert",
  "/components/alert-dialog",
  "/components/aspect-ratio",
  "/components/avatar",
  "/components/badge",
  "/components/breadcrumb",
  "/components/button",
  "/components/button-group",
  "/components/calendar",
  "/components/card",
  "/components/carousel",
  "/components/chart",
  "/components/checkbox",
  "/components/collapsible",
  "/components/combobox",
  "/components/command",
  "/components/context-menu",
  "/components/date-picker",
  "/components/dialog",
  "/components/drawer",
  "/components/empty",
  "/components/field",
  "/components/form",
  "/components/hover-card",
  "/components/input",
  "/components/input-group",
  "/components/input-otp",
  "/components/item",
  "/components/kbd",
  "/components/label",
  "/components/menubar",
  "/components/number-field",
  "/components/pagination",
  "/components/pin-input",
  "/components/popover",
  "/components/progress",
  "/components/radio-group",
  "/components/range-calendar",
  "/components/resizable",
  "/components/scroll-area",
  "/components/select",
  "/components/separator",
  "/components/sheet",
  "/components/sidebar",
  "/components/skeleton",
  "/components/slider",
  "/components/sonner",
  "/components/spinner",
  "/components/stepper",
  "/components/switch",
  "/components/table",
  "/components/tabs",
  "/components/tags-input",
  "/components/tip",
  "/components/toggle",
  "/components/toggle-group",
  "/components/two-column-layout",
]

describe("Component smoke tests", () => {
  smokeRoutes.forEach((route) => {
    it(`renders ${route}`, () => {
      cy.visit(route)
      cy.get("h1, h2").should("exist")
    })
  })
})
