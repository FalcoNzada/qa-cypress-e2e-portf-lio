class ProductsPage {
  // Seletores
  get inventoryList() { return cy.get('.inventory_list'); }
  get backpackAddToCartBtn() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); }
  get cartBadge() { return cy.get('.shopping_cart_badge'); }
  get cartLink() { return cy.get('.shopping_cart_link'); }
  get checkoutBtn() { return cy.get('[data-test="checkout"]'); }
  get firstNameInput() { return cy.get('[data-test="firstName"]'); }
  get lastNameInput() { return cy.get('[data-test="lastName"]'); }
  get postalCodeInput() { return cy.get('[data-test="postalCode"]'); }
  get continueBtn() { return cy.get('[data-test="continue"]'); }
  get finishBtn() { return cy.get('[data-test="finish"]'); }
  get completeHeader() { return cy.get('.complete-header'); }

  // Ações
  addBackpackToCart() {
    this.backpackAddToCartBtn.click();
  }

  goToCart() {
    this.cartLink.click();
  }

  fillCheckoutInfo(fName, lName, zip) {
    this.firstNameInput.type(fName);
    this.lastNameInput.type(lName);
    this.postalCodeInput.type(zip);
    this.continueBtn.click();
  }

  finishPurchase() {
    this.finishBtn.click();
  }
}

export default new ProductsPage();