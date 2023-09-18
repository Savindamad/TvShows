describe("show page", () => {
  it("successfully loads", () => {
    cy.visit("/show/74205");

    cy.get("#showName ").contains("Band of Brothers");
    cy.get("#showGenres ").contains("Drama | Action | War");
    cy.get("#showSchedule ").contains("Schedule: Sunday ( ~ 59 min )");
    cy.get("#showStatus ").contains("Status: Ended");
    cy.get("#showType ").contains("Show type: Scripted");
    cy.get("#showLanguage ").contains("Language: English");
  });

  it("show error component when api fails", () => {
    cy.visit("/show/error_id");

    cy.get("#errorTitle ").contains("Something went wrong!");
    cy.get("#errorMessage ").contains("Sorry, Please try again later.");

    cy.get("#backToHome").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
