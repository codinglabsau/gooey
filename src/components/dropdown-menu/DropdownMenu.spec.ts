describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/dropdown-menu")

    cy.get("[data-cy=\"button\"]").click()
    cy.get("[data-radix-menu-content]").contains("My Account")
  })
})
