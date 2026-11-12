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
