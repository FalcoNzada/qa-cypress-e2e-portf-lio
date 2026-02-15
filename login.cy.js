describe("Login - SauceDemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Deve realizar login com sucesso", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
  });

  it("Não deve logar com senha inválida", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("senha_errada");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should("be.visible");
  });
});
