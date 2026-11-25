describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/flasher")
  })

  // Regression: a Flasher mounted with a prop already set (e.g. a server-driven
  // flash) must fire on mount. An `immediate` watch fires during setup, before
  // the child Toaster subscribes, and the toast is dropped — so these assert the
  // toast appears with no interaction.
  it("shows info present at mount", () => {
    cy.visit("/components/flasher?info=Mounted")

    cy.get("[data-sonner-toast]").should("be.visible").contains("Mounted")
  })

  it("shows success present at mount", () => {
    cy.visit("/components/flasher?success=Mounted")

    cy.get("[data-sonner-toast]").should("be.visible").contains("Mounted")
  })

  it("shows warning present at mount", () => {
    cy.visit("/components/flasher?warning=Mounted")

    cy.get("[data-sonner-toast]").should("be.visible").contains("Mounted")
  })

  it("shows errors present at mount", () => {
    cy.visit("/components/flasher?errors=1")

    cy.get("[data-sonner-toast]").should("be.visible").contains("Oh snap")
  })

  it("shows info via props", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="prop-info"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("FYI")
  })

  it("shows success via props", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="prop-success"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Success")
  })

  it("shows warning via props", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="prop-warning"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Warning")
  })

  it("shows errors via props", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="prop-errors"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Oh snap")
  })

  it("shows errors via props with key", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="prop-errors-key"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Oh snap")
      .get("[data-sonner-toast]")
      .contains("firstname")
  })

  it("shows errors via props with both", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="prop-errors-both"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Oh snap")
      .get("[data-sonner-toast]")
      .contains("firstname: firstname is required")
  })

  it("shows success via helper", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="success"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Success")
  })

  it("shows warning via helper", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="warning"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Warning")
  })

  it("shows errors via helper", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="errors"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Oh snap")
  })

  it("shows errors via helper with key", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="errors-key"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Oh snap")
      .get("[data-sonner-toast]")
      .contains("firstname")
  })

  it("shows errors via helper with both", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="errors-both"]')
      .click()
      .get("[data-sonner-toast]")
      .should("be.visible")
      .contains("Oh snap")
      .get("[data-sonner-toast]")
      .contains("firstname: firstname is required")
  })

  it("shows the same message again for a new flash id", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="flash-id-repeat"]').click()
    cy.get("[data-sonner-toast]").should("have.length", 1).contains("Stock updated")

    cy.get('[data-cy="flash-id-repeat"]').click()
    cy.get("[data-sonner-toast]").should("have.length", 2)
  })

  it("does not replay a flash id it has already shown", () => {
    cy.visit("/components/flasher")

    // a, b, then a again: the third id was already shown
    cy.get('[data-cy="flash-id-replay"]').click()
    cy.get('[data-cy="flash-id-replay"]').click()
    cy.get('[data-cy="flash-id-replay"]').click()

    cy.get("[data-sonner-toast]").should("have.length", 2)
  })

  it("shows a server toast and hands its action to @action", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="toast-action"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Item deleted")
    cy.get("[data-sonner-toast]").contains("The hammer was removed")

    cy.get("[data-sonner-toast] [data-button]").contains("Undo").click()
    cy.get('[data-cy="last-action"]').should("contain", "post /cart/restore")
  })

  it("shows a server toast with an id only once", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="toast-id-replay"]').click()
    cy.get("[data-sonner-toast]").should("have.length", 1).contains("Shown once per id")

    cy.get('[data-cy="toast-id-replay"]').click()
    cy.wait(300)
    cy.get("[data-sonner-toast]").should("have.length", 1)
  })

  it("uses titles set on the Flasher", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="custom-titles"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Nice one")
  })

  it("overrides the title for one call", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="title-option"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Profile saved")
    cy.get("[data-sonner-toast]").contains("Your profile is live")
  })

  it("shows an error from a plain message", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="error-string"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Payment failed")
  })

  it("tracks a visit from loading to success", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="track-success"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Saving changes")

    cy.get("[data-sonner-toast]").should("have.length", 1).contains("Changes saved")
    cy.get("[data-sonner-toast]").should("not.contain", "Saving changes")
  })

  it("tracks a visit from loading to its validation errors", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="track-error"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Saving changes")

    cy.get("[data-sonner-toast]").should("have.length", 1).contains("name is required")
  })

  it("treats a null flash id as no id", () => {
    cy.visit("/components/flasher?nullFlashId=1")

    cy.get('[data-cy="prop-success"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Success")
  })

  it("shows server toasts with a null id and an unknown type every time", () => {
    cy.visit("/components/flasher")

    cy.get('[data-cy="toast-loose"]').click()
    cy.get("[data-sonner-toast]").should("have.length", 1).contains("Loose server toast")

    cy.get('[data-cy="toast-loose"]').click()
    cy.get("[data-sonner-toast]").should("have.length", 2)
  })
})
