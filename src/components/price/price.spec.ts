describe("Price", () => {
  beforeEach(() => {
    cy.visit("/components/price")
  })

  it("renders the component", () => {
    cy.get('[data-cy="basic"]').should("exist")
  })

  it("updates the v-model in dollars", () => {
    cy.get('[data-cy="basic"] input').type("19.99").blur()
    cy.get('[data-cy="model-value"]').should("contain.text", "19.99")
  })

  it("formats the displayed value with the currency symbol", () => {
    cy.get('[data-cy="basic"] input').type("19.99").blur()
    cy.get('[data-cy="basic"] input')
      .invoke("val")
      .should("match", /\$\s?19\.99/)
  })
})
