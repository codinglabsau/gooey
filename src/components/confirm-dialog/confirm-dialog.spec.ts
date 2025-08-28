describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/confirm-dialog")
  })

  it("renders titles and description", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="base"]')
      .click()
      .get('[role="alertdialog"]')
      .contains("Default Confirm")
      .get('[role="alertdialog"]')
      .contains("Only requires; title, description and action callback.")
  })

  it("renders default labels", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="base"]')
      .click()
      .get('[role="alertdialog"] button')
      .eq(0)
      .contains("Cancel")
      .get('[role="alertdialog"] button')
      .eq(1)
      .contains("Confirm")
  })

  it("renders custom labels", () => {
    cy.visit("/components/confirm-dialog")

    cy.get('[data-cy="custom-labels"]')
      .click()
      .get('[role="alertdialog"] button')
      .eq(0)
      .contains("Custom Cancel Action Label")
      .get('[role="alertdialog"] button')
      .eq(1)
      .contains("Custom Action Label")
  })

  it("calls custom cancel handler", () => {
    cy.visit("/components/confirm-dialog")

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert")
    })

    cy.get('[data-cy="custom-handlers"]').click().get('[role="alertdialog"] button').eq(0).click()

    cy.get("@alert").should("have.been.called")
  })

  it("calls custom action handler", () => {
    cy.visit("/components/confirm-dialog")

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert")
    })

    cy.get('[data-cy="custom-handlers"]').click().get('[role="alertdialog"] button').eq(1).click()

    cy.get("@alert").should("have.been.called")
  })
})
