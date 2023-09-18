describe("home page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get(".v-slide-group").should("exist");
  });

  it("show error page when api fails", () => {
    cy.visit("/");
    cy.get(".v-slide-group .v-card").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/show/74205')
    })
  });
});
