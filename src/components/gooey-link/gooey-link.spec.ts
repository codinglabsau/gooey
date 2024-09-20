describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/gooey-link")
  })

  it("can use router-link component", () => {
    cy.visit("/components/gooey-link")

    cy.get('[data-cy="router-link"]')
      .click()

    cy.location('search').should('eq', '?router-link=true')
  })
})
