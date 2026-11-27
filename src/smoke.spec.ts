/**
 * Showcase smoke tests.
 *
 * Each of these was its own spec file containing a bare `cy.visit` and no
 * assertion. Cypress boots a browser per spec *file*, not per test, so 58
 * files cost ~10s each in fixed overhead to assert that a page loads. They
 * live in one file now: one boot, one `it` per route, so a failure still
 * names the page that broke.
 *
 * `cy.visit` is the whole assertion, exactly as it was before: it fails on a
 * non-2xx response or an uncaught exception from the page. Adding a
 * `cy.get(...)` check on top looked like an improvement but made the suite
 * flaky — cy.get uses the 4s command timeout while cy.visit gets the 60s page
 * load timeout, and these routes are transformed cold by Vite on first visit.
 * Asserting something real here is worth doing, but it needs a stable selector
 * and an explicit timeout rather than a drive-by.
 */
const showcases = {
  accordion: "/components/accord",
  alert: "/components/alert",
  "alert-dialog": "/components/alert-dialog",
  "aspect-ratio": "/components/aspect-ratio",
  avatar: "/components/avatar",
  badge: "/components/badge",
  breadcrumb: "/components/breadcrumb",
  button: "/components/button",
  "button-group": "/components/button-group",
  calendar: "/components/calendar",
  card: "/components/card",
  carousel: "/components/carousel",
  chart: "/components/chart",
  checkbox: "/components/checkbox",
  collapsible: "/components/collapsible",
  combobox: "/components/combobox",
  command: "/components/command",
  "context-menu": "/components/context-menu",
  "date-picker": "/components/date-picker",
  dialog: "/components/dialog",
  drawer: "/components/drawer",
  empty: "/components/empty",
  field: "/components/field",
  form: "/components/form",
  "hover-card": "/components/hover-card",
  input: "/components/input",
  "input-group": "/components/input-group",
  "input-otp": "/components/input-otp",
  item: "/components/item",
  kbd: "/components/kbd",
  label: "/components/label",
  layout: "/components/two-column-layout",
  menubar: "/components/menubar",
  "number-field": "/components/number-field",
  pagination: "/components/pagination",
  "pin-input": "/components/pin-input",
  popover: "/components/popover",
  progress: "/components/progress",
  "radio-group": "/components/radio-group",
  "range-calendar": "/components/range-calendar",
  resizable: "/components/resizable",
  "scroll-area": "/components/scroll-area",
  select: "/components/select",
  separator: "/components/separator",
  sheet: "/components/sheet",
  sidebar: "/components/sidebar",
  skeleton: "/components/skeleton",
  slider: "/components/slider",
  sonner: "/components/sonner",
  spinner: "/components/spinner",
  stepper: "/components/stepper",
  switch: "/components/button",
  table: "/components/table",
  tabs: "/components/tabs",
  "tags-input": "/components/tags-input",
  toggle: "/components/toggle",
  "toggle-group": "/components/toggle-group",
  tooltip: "/components/tip",
}

describe("showcase pages", () => {
  for (const [name, url] of Object.entries(showcases)) {
    it(`renders the ${name} page`, () => {
      cy.visit(url)
    })
  }
})
