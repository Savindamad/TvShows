describe("search page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/shows?page=1", { fixture: "shows.json" });
    cy.intercept("GET", "**//search/shows?q=abc", {
      fixture: "search.json",
    });
  });

  it("should load", () => {
    cy.visit("/search?q=abc");
    cy.get("#searchInput").should("have.value", "abc");

    cy.get(".d-flex.child-flex.img-container").should("have.length", 10);
  });

  it("should navigate to search page", () => {
    cy.visit("/");
    cy.get("#searchInput").clear().type("abc");
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/search");
      expect(loc.search).to.eq("?q=abc");
    });
    cy.get("#searchInput").clear();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
