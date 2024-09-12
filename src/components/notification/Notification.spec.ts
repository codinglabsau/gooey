describe("template spec", () => {
  it("shows notifications when props are updated", () => {
    cy.visit("/notification")
    cy.get("div").then(($el) => {
      !Cypress.dom.isVisible($el)
    })
  })
})
