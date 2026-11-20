describe("CollapsibleTwoColumnLayout", () => {
  it("renders the showcase page with both demos", () => {
    cy.visit("/components/two-column-layout")
    cy.contains("Basic Two Column Layout")
    cy.contains("Collapsible Two Column Layout")
    cy.get('[data-cy="basic-demo"]').should("exist")
    cy.get('[data-cy="collapsible-demo"]').should("exist")
  })

  it("renders the collapsible demo page", () => {
    cy.visit("/demo/collapsible-two-column-layout")
    cy.get("h1").contains("Dashboard")
  })

  it("has a working sidebar trigger", () => {
    cy.visit("/demo/collapsible-two-column-layout")
    cy.get('[data-sidebar="trigger"]').should("be.visible")
  })

  it("starts collapsed when the sidebar cookie says so", () => {
    cy.viewport(1280, 800)
    cy.setCookie("sidebar_state", "false")
    cy.visit("/demo/collapsible-two-column-layout")
    cy.get('[data-collapsible][data-state="collapsed"]').should("exist")
  })

  it("starts expanded without the cookie", () => {
    cy.viewport(1280, 800)
    cy.clearCookies()
    cy.visit("/demo/collapsible-two-column-layout")
    cy.get('[data-collapsible][data-state="expanded"]').should("exist")
  })
})
