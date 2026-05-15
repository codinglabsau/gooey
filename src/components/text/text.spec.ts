describe("Text", () => {
  beforeEach(() => {
    cy.visit("/components/text")
  })

  it("renders the component", () => {
    cy.get('[data-cy="basic"]').should("exist").and("have.attr", "type", "text")
  })

  it("updates the v-model on input", () => {
    cy.get('[data-cy="basic"]').type("Hello world")
    cy.get('[data-cy="model-value"]').should("contain.text", "Hello world")
  })
})
