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
})
