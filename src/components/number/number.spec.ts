describe("Number", () => {
  beforeEach(() => {
    cy.visit("/components/number")
  })

  it("renders the component", () => {
    cy.get('[data-cy="basic"]').should("exist")
  })

  it("updates the v-model on input", () => {
    cy.get('[data-cy="basic"]').type("42").blur()
    cy.get('[data-cy="model-value"]').should("contain.text", "42")
  })

  it("respects integer mode", () => {
    cy.get('[data-cy="integer"]').type("7.5").blur()
    cy.get('[data-cy="integer-value"]').should("contain.text", "8")
  })
})
