describe("Email", () => {
  beforeEach(() => {
    cy.visit("/components/email")
  })

  it("renders the component", () => {
    cy.get('[data-cy="basic"]')
      .should("exist")
      .and("have.attr", "type", "email")
      .and("have.attr", "inputmode", "email")
      .and("have.attr", "autocomplete", "email")
  })

  it("updates the v-model on input", () => {
    cy.get('[data-cy="basic"]').type("ada@example.com")
    cy.get('[data-cy="model-value"]').should("contain.text", "ada@example.com")
  })
})
