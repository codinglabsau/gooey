describe("laravel-paginator", () => {
  it("passes", () => {
    cy.visit("/components/laravel-paginator")
  })

  it("renders length-aware paginator with page numbers", () => {
    cy.visit("/components/laravel-paginator")

    cy.get('[data-cy="length-aware"]').within(() => {
      cy.contains("Showing 21 to 30 of 100 results")
      cy.contains("3")
    })
  })

  it("renders cursor paginator with prev/next", () => {
    cy.visit("/components/laravel-paginator")

    cy.get('[data-cy="cursor"]').within(() => {
      cy.contains("Previous")
      cy.contains("Next")
    })
  })

  it("disables navigation on empty paginator", () => {
    cy.visit("/components/laravel-paginator")

    cy.get('[data-cy="empty"]').within(() => {
      cy.contains("Showing 0 to 0 of 0 results")
    })
  })
})
