describe("Number", () => {
  beforeEach(() => {
    cy.visit("/components/number")
  })

  it("renders the component", () => {
    cy.get('[data-cy="basic"]').should("exist")
  })

  it("updates the v-model on input", () => {
    cy.get('[data-cy="basic"] input').type("42").blur()
    cy.get('[data-cy="model-value"]').should("contain.text", "42")
  })

  it("respects integer mode", () => {
    cy.get('[data-cy="integer"] input').type("7.5").blur()
    cy.get('[data-cy="integer-value"]')
      .invoke("text")
      .should("match", /^\s*Value:\s*\d+\s*$/)
  })

  it("renders an empty string as an empty input", () => {
    cy.get('[data-cy="nullable"] input').should("have.value", "")
  })

  it("sets the v-model to null when cleared", () => {
    cy.get('[data-cy="nullable"] input').type("5").blur()
    cy.get('[data-cy="nullable-value"]').should("contain.text", "Value: 5")
    cy.get('[data-cy="nullable"] input').clear().blur()
    cy.get('[data-cy="nullable-value"]').should("contain.text", "Value: null")
  })
})
