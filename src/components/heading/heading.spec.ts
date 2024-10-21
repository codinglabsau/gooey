describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/heading")

    cy.get('[data-cy="default"] .font-bold').should("have.prop", "tagName").and("equal", "H2")
  })

  it("provides as prop to set heading type", () => {
    cy.visit("/components/heading")

    cy.get('[data-cy="h1"] .font-bold').should("have.prop", "tagName").and("equal", "H1")
  })
})
