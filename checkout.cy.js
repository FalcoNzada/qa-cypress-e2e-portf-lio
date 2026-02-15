import productsPage from "../../pages/ProductsPage";
import loginPage from "../../pages/LoginPage";
describe("Fluxo de Compra - SauceDemo", () => {
  beforeEach(() => {
    // 1. Carrega a massa de dados da fixture
    cy.fixture("user").then((user) => {
      // 2. Realiza o login usando seu comando customizado
      cy.login(user.validUser.username, user.validUser.password);
    });
  });

  it("Deve adicionar um produto ao carrinho e finalizar a compra com sucesso", () => {
    // 3. Adiciona produto e valida o contador do carrinho
    productsPage.addBackpackToCart();
    productsPage.cartBadge.should("have.text", "1");

    // 4. Navega até o carrinho
    productsPage.goToCart();
    
    // 5. Inicia o checkout
    productsPage.checkoutBtn.click();

    // 6. Preenche informações e avança
    productsPage.fillCheckoutInfo("João", "QA", "12345");

    // 7. Finaliza a compra
    productsPage.finishPurchase();

    // 8. Valida a mensagem de sucesso final
    productsPage.completeHeader.should("be.visible").and("contain", "Thank you for your order!");
  });
});