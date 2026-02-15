import loginPage from "../pages/LoginPage";

describe("Login - Cenários Negativos e Exceções", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Deve exibir erro ao tentar logar com usuário bloqueado", () => {
    loginPage.login("locked_out_user", "secret_sauce");
    loginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("Deve exibir erro ao deixar campos vazios", () => {
    loginPage.clickLogin();
    loginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Username is required");
  });
});

describe("Login - Cenários Negativos", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Deve exibir erro para usuário bloqueado", () => {
    loginPage.login("locked_out_user", "secret_sauce");
    loginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("Deve validar campos obrigatórios", () => {
    loginPage.clickLogin();
    loginPage.getErrorMessage().should("contain", "Username is required");
  });
});