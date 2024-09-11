import Notification from "./Notification.vue"

describe("<Notification />", () => {
  it("renders nothing when mounted", () => {
    cy.mount(Notification)

    cy.get("div").then(($el) => {
      !Cypress.dom.isVisible($el)
    })
  })

  it("renders info messages", () => {
    cy.mount(Notification, {
      props: {
        info: "This is just a nightmare",
      },
    })

    // cy.get("div").should("have.text", "Badgering Badger")
  })

  // it("allows messages to be dismissed", () => {
  //   cy.mount(Notification, {
  //     props: {
  //       info: "This is just a nightmare",
  //     },
  //   })
  //
  //   cy.get("button").click()
  //
  //   cy.get("div").should("not.have.text", "Badgering Badger")
  // })
})
