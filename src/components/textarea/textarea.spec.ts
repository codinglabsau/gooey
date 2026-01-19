describe("Textarea component page", () => {
  beforeEach(() => {
    cy.visit("/components/textarea")
  })

  it("renders textarea", () => {
    cy.get("textarea").should("exist").and("have.attr", "placeholder", "Type your message here...")
  })
})
