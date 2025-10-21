describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/components/input")
  })

  it("contains placeholder", () => {
    cy.get("input").should("exist").and("have.attr", "placeholder", "Enter your name")
  })
})
