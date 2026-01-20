describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/flasher")
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
