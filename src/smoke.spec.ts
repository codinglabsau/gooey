/**
 * The docs app boots.
 *
 * This was 58 tests, one per showcase route. They existed because most
 * components had no other coverage, not because anyone needed to know each
 * docs page renders — and each cost a browser page load to assert almost
 * nothing.
 *
 * Components are covered directly now, in mount.browser.ts and
 * compositions.browser.ts. What is left here is the one thing those cannot
 * tell you: that the showcase app itself still builds and serves.
 */
describe("docs app", () => {
  it("serves a showcase page", () => {
    cy.visit("/components/button")
    cy.get("body").should("not.be.empty")
  })
})
