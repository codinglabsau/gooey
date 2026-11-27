describe("Number", () => {
  beforeEach(() => {
    cy.visit("/components/number")
  })

  it("renders the component", () => {
    cy.get('[data-cy="basic"]').should("exist")
  })

  it("updates the v-model on input", () => {
    cy.get('[data-cy="basic"] input').type("42").blur()
    cy.get('[data-cy="model-value"]').should("contain.text", "42")
  })

  it("respects integer mode", () => {
    cy.get('[data-cy="integer"] input').type("7.5").blur()
    cy.get('[data-cy="integer-value"]')
      .invoke("text")
      .should("match", /^\s*Value:\s*\d+\s*$/)
  })

  it("renders an empty string as an empty input", () => {
    cy.get('[data-cy="nullable"] input').should("have.value", "")
  })

  it("leaves the v-model undefined when cleared by default", () => {
    cy.get('[data-cy="basic"] input').type("5").blur()
    cy.get('[data-cy="model-value"]').should("contain.text", "5")
    cy.get('[data-cy="basic"] input').clear().blur()
    cy.get('[data-cy="model-value"]').should("not.exist")
  })

  it("sets the v-model to null when cleared with an empty value of null", () => {
    cy.get('[data-cy="nullable"] input').type("5").blur()
    cy.get('[data-cy="nullable-value"]').should("contain.text", "Value: 5")
    cy.get('[data-cy="nullable"] input').clear().blur()
    cy.get('[data-cy="nullable-value"]').should("contain.text", "Value: null")
  })

  it("reads a plain numeric string as a number", () => {
    cy.get('[data-cy="numeric-string"] input').should("have.value", "1,234.5")
  })

  it("renders a blank string as an empty input", () => {
    cy.get('[data-cy="blank-string"] input').should("have.value", "")
  })

  it("renders a formatted string as an empty input and warns", () => {
    cy.visit("/components/number", {
      onBeforeLoad(win) {
        cy.spy(win.console, "warn").as("consoleWarn")
      },
    })

    cy.get('[data-cy="formatted-string"] input').should("have.value", "")
    cy.get("@consoleWarn").should(
      "have.been.calledWithMatch",
      /Cannot read "1,234\.56" as a number/,
    )
  })
})
