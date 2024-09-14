describe("template spec", () => {
  it("passes", () => {
    cy.visit("/components/toast")
  })

  it("toasts", () => {
    cy.visit("/components/toast")

    cy.get('[data-cy="toast"]')
      .click()
      .get("[data-radix-vue-collection-item]")
      .then(($el) => Cypress.dom.isVisible($el))
      .get("[data-radix-vue-collection-item]")
      .contains("FYI")
  })

  it("toasts with icon", () => {
    cy.visit("/components/toast")

    cy.get('[data-cy="toast-icon"]')
      .click()
      .get("[data-radix-vue-collection-item]")
      .then(($el) => Cypress.dom.isVisible($el))
      .get("[data-radix-vue-collection-item]")
      .get("svg")
      .should("have.class", "lucide-ghost-icon")
  })

  it("toasts with object", () => {
    cy.visit("/components/toast")

    cy.get('[data-cy="toast-object"]')
      .click()
      .get("[data-radix-vue-collection-item]")
      .then(($el) => Cypress.dom.isVisible($el))
      .get("[data-radix-vue-collection-item]")
      .contains("Identity theft is not a joke, Jim!")
      .get("[data-radix-vue-collection-item]")
      .should("not.contain", "Dwight")
  })

  it("toasts with key", () => {
    cy.visit("/components/toast")

    cy.get('[data-cy="toast-object-key"]')
      .click()
      .get("[data-radix-vue-collection-item]")
      .then(($el) => Cypress.dom.isVisible($el))
      .get("[data-radix-vue-collection-item]")
      .contains("Kelly")
      .get("[data-radix-vue-collection-item]")
      .should("not.contain", "I have a lot of questions. Number one, how dare you?")
  })

  it("toasts with both", () => {
    cy.visit("/components/toast")

    cy.get('[data-cy="toast-object-both"]')
      .click()
      .get("[data-radix-vue-collection-item]")
      .then(($el) => Cypress.dom.isVisible($el))
      .get("[data-radix-vue-collection-item]")
      .contains("Michael: That's what she said.")
  })
})
