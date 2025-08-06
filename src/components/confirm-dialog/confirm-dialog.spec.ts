describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/confirm-dialog")
  })

  it("renders titles and description", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="base"]')
      .click()
      .get('[data-cy="alert-dialog-title"]')
      .contains("Default Confirm")
      .get('[data-cy="alert-dialog-description"]')
      .contains("Only requires; title, description and action callback.")
  })

  it("renders default labels", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="base"]')
      .click()
      .get('[data-cy="alert-dialog-cancel"]')
      .contains("Cancel")
      .get('[data-cy="alert-dialog-action"]')
      .contains("Confirm")
  })

  it("renders custom labels", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="custom-labels"]')
      .click()
      .get('[data-cy="alert-dialog-cancel"]')
      .contains("Custom Cancel Action Label")
      .get('[data-cy="alert-dialog-action"]')
      .contains("Custom Action Label")
  })

  it("calls custom cancel handler", () => {
    cy.visit("/components/confirm-dialog")

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert")
    })

    cy.get('[data-cy="custom-handlers"]').click().get('[data-cy="alert-dialog-cancel"]').click()

    cy.get("@alert").should("have.been.called")
  })

  it("calls custom action handler", () => {
    cy.visit("/components/confirm-dialog")

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert")
    })

    cy.get('[data-cy="custom-handlers"]').click().get('[data-cy="alert-dialog-action"]').click()

    cy.get("@alert").should("have.been.called")
  })
})
