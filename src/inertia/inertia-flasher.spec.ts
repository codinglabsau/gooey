describe("InertiaFlasher", () => {
  it("shows a toast from a response's flash data", () => {
    cy.visit("/components/inertia-flasher")

    cy.get('[data-cy="flash-success"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Success")
    cy.get("[data-sonner-toast]").contains("Saved")
  })

  it("shows the same message again from the next response", () => {
    cy.visit("/components/inertia-flasher")

    cy.get('[data-cy="flash-success"]').click()
    cy.get('[data-cy="flash-success"]').click()
    cy.get("[data-sonner-toast]").should("have.length", 2)
  })

  it("shows a toast id only once", () => {
    cy.visit("/components/inertia-flasher")

    cy.get('[data-cy="flash-replay"]').click()
    cy.get("[data-sonner-toast]").should("have.length", 1).contains("Shown once per id")

    cy.get('[data-cy="flash-replay"]').click()
    cy.wait(300)
    cy.get("[data-sonner-toast]").should("have.length", 1)
  })

  it("uses a flashed title in place of the type's default", () => {
    cy.visit("/components/inertia-flasher")

    cy.get('[data-cy="flash-titled"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Plan limit")
    cy.get("[data-sonner-toast]").contains("You have used 90% of your storage.")
  })

  it("shows validation errors as an error toast", () => {
    cy.visit("/components/inertia-flasher")

    cy.get('[data-cy="validation-error"]').click()
    cy.get("[data-sonner-toast]").should("be.visible").contains("Oh snap")
    cy.get("[data-sonner-toast]").contains("The email field is required.")
  })

  it("hands a flashed toast's action to @action", () => {
    cy.visit("/components/inertia-flasher")

    cy.get('[data-cy="flash-action"]').click()
    cy.get("[data-sonner-toast] [data-button]").contains("Undo").click()
    cy.get('[data-cy="last-action"]').should("contain", "post /items/1/restore")
  })
})
