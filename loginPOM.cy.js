import loginPage from "../pages/LoginPage"; 

describe("Login usando Page Object", () => {
  it("Deve logar com sucesso", () => {
    // Carrega os dados do arquivo cypress/fixtures/user.json
    cy.fixture("user").then((user) => {
      loginPage.visit(); // Acessa a URL
      loginPage.login(user.validUser.username, user.validUser.password); // Executa o fluxo de login

      // Valida se o redirecionamento ocorreu para a página de inventário
      cy.url().should("include", "/inventory.html");
    });
  });
});
