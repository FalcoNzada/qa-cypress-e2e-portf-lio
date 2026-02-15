describe("Login com Fixture", () => {
  it("Deve logar usando fixture", () => {
    cy.fixture("user").then((user) => {
      cy.login(user.validUser.username, user.validUser.password);
      cy.url().should("include", "/inventory.html");
    });
  });
});
