describe("Segurança e Sessão", () => {
  it("Deve impedir acesso à área logada após logout", () => {
    // 1. Loga usando seu comando customizado do commands.js
    cy.login("standard_user", "secret_sauce");
    
    // 2. Faz o logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    
    // 3. Tenta forçar a entrada na página de inventário
    cy.visit("https://www.saucedemo.com/inventory.html", { failOnStatusCode: false });
    
    // 4. Valida se o sistema barrou o acesso
    cy.get('[data-test="error"]').should("be.visible");
  });
});