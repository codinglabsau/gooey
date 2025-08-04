describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/confirm-dialog")
  })

  it("renders default labels", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="base"]')
      .click()
      .get('[data-cy="cancel"]')
      .contains("Cancel")
      .get('[data-cy="action"]')
      .contains("Confirm")
  })

  it("renders custom labels", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="custom-labels"]')
      .click()
      .get('[data-cy="cancel"]')
      .contains("Custom Cancel Action Label")
      .get('[data-cy="action"]')
      .contains("Custom Action Label")
  })

  it("calls custom cancel handler", () => {
    cy.visit("/components/confirm-dialog")

    cy.window().then(win => {
      cy.stub(win, 'alert').as('alert')
    })

    cy.get('[data-cy="custom-handlers"]')
      .click()
      .get('[data-cy="cancel"]')
      .click()

    cy.get('@alert').should('have.been.called')
  })

  it("calls custom action handler", () => {
    cy.visit("/components/confirm-dialog")

    cy.window().then(win => {
      cy.stub(win, 'alert').as('alert')
    })

    cy.get('[data-cy="custom-handlers"]')
      .click()
      .get('[data-cy="action"]')
      .click()

    cy.get('@alert').should('have.been.called')
  })
})
