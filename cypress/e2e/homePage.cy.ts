describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("[data-cy=title]").should("have.text", "Do you need help?");
  });
});
