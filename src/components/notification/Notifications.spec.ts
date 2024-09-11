describe('template spec', () => {
  it('shows notifications when props are updated', () => {
    cy.visit('/notifications')
    cy.get("div").then(($el) => {
      !Cypress.dom.isVisible($el)
    })
  })
})
