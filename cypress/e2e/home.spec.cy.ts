describe("home page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/shows?page=1", { fixture: "shows.json" });
    cy.intercept("GET", "**/show/shows?thetvdb=74205", { fixture: "show.json" });
    cy.visit("/");
  });

  it("should load", () => {
    cy.get(".v-slide-group").should("exist");
  });

  it("should show error page when api fails", () => {
    cy.get(".v-slide-group .v-card").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/show/74205");
    });
  });
});
