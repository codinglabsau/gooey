describe("SimpleSelect", () => {
  beforeEach(() => {
    cy.visit("/components/simple-select")
  })

  it("renders the component", () => {
    cy.get('[data-cy="basic"]').should("exist")
  })

  it("shows placeholder text", () => {
    cy.get('[data-cy="basic"]').contains("Select a country")
  })

  it("opens dropdown and shows options", () => {
    cy.get('[data-cy="basic"]').click()
    cy.get('[role="listbox"]').should("be.visible")
    cy.get('[role="option"]').should("have.length", 4)
    cy.get('[role="option"]').contains("Australia")
  })

  it("selects an option and updates model", () => {
    cy.get('[data-cy="basic"]').click()
    cy.get('[role="option"]').contains("Australia").click()
    cy.get('[data-cy="basic"]').contains("Australia")
    cy.get('[data-cy="selected-value"]').contains("Selected: au")
  })

  it("supports disabled options", () => {
    cy.get('[data-cy="disabled-options"]').click()
    cy.get('[role="option"]')
      .contains("Pending")
      .parents('[role="option"]')
      .should("have.attr", "data-disabled")
  })
})
