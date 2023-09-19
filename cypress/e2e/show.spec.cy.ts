describe("show page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/shows?page=1", { fixture: "shows.json" });
    cy.intercept("GET", "**/lookup/shows?thetvdb=74205", {
      fixture: "show.json",
    });
    cy.intercept("GET", "**/lookup/shows?thetvdb=error_id", {
      fixture: null,
      statusCode: 404,
    });
  });

  it("should load", () => {
    cy.visit("/show/74205");

    cy.get("#showName ").contains("Band of Brothers");
    cy.get("#showGenres ").contains("Drama | Action | War");
    cy.get("#showSchedule ").contains("Schedule: Sunday ( ~ 59 min )");
    cy.get("#showStatus ").contains("Status: Ended");
    cy.get("#showType ").contains("Show type: Scripted");
    cy.get("#showLanguage ").contains("Language: English");
  });

  it("should show error component when api fails", () => {
    cy.visit("/show/error_id");

    cy.get("#errorTitle ").contains("Something went wrong!");
    cy.get("#errorMessage ").contains("Sorry, Please try again later.");

    cy.get("#backToHome").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
