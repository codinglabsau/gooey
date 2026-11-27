/**
 * Guards the slate theme's base rules.
 *
 * Unlayered CSS beats every cascade layer, so a `* { border-color }` outside a
 * layer overrides Tailwind's utilities and turns every `border-*` colour class
 * into a no-op. The theme default must stay overridable.
 */
describe("slate theme base styles", () => {
  const probe = (className: string) => {
    cy.visit("/components/card")

    cy.document().then((doc) => {
      doc.documentElement.classList.remove("dark")
      doc.body.classList.remove("dark")

      const element = doc.createElement("div")
      element.id = "border-probe"
      element.className = className
      doc.body.appendChild(element)
    })

    return cy.get("#border-probe")
  }

  it("gives plain borders the theme border colour", () => {
    probe("border").should("have.css", "border-top-color", "rgb(226, 232, 240)")
  })

  it("lets a border colour utility override the theme default", () => {
    probe("border border-[#ff0000]").should("have.css", "border-top-color", "rgb(255, 0, 0)")
  })
})

/**
 * Guards the chart colour variables `defaultColors()` builds on.
 *
 * `defaultColors()` emits `hsl(var(--vis-primary-color) / <alpha>)`, so these
 * must resolve to a real colour, not just be defined. The dark cases probe with
 * `.dark` scoped below the root as well as on it: custom properties inherit the
 * substituted value, so a `--vis-*` built from `var(--primary)` keeps the light
 * colour unless `.dark` redeclares it.
 */
describe("slate theme chart colours", () => {
  const probe = (dark: "html" | "body" | null) => {
    cy.visit("/components/card")

    cy.document().then((doc) => {
      doc.documentElement.classList.remove("dark")
      doc.body.classList.remove("dark")

      if (dark) {
        doc.querySelector(dark)!.classList.add("dark")
      }

      const element = doc.createElement("div")
      element.id = "vis-probe"
      // the shape defaultColors() builds
      element.style.color = "hsl(var(--vis-primary-color) / 1)"
      element.style.backgroundColor = "hsl(var(--vis-secondary-color) / 1)"
      doc.body.appendChild(element)
    })

    return cy.get("#vis-probe")
  }

  it("resolves light chart colours with no dark class", () => {
    probe(null)
      .should("have.css", "color", "rgb(15, 23, 42)")
      .and("have.css", "background-color", "rgb(19, 185, 130)")
  })

  it("resolves dark chart colours when dark is on the root", () => {
    probe("html")
      .should("have.css", "color", "rgb(248, 250, 252)")
      .and("have.css", "background-color", "rgb(19, 185, 130)")
  })

  it("resolves dark chart colours when dark is scoped below the root", () => {
    probe("body")
      .should("have.css", "color", "rgb(248, 250, 252)")
      .and("have.css", "background-color", "rgb(19, 185, 130)")
  })
})
