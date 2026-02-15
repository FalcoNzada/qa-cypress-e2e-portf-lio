class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }

  
  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  clearFields() {
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').clear();
  }
}

export default new LoginPage();
