const locator = require("../locator/HomepageLocator");
const dataset = require("../dataset/PromotionspageData");
class Homepage {
  
  async visit() {
    cy.visit("");
    cy.viewport(1289, 720);
    return cy.url().should("eq", "https://www.fairprice.com.sg/");
  }

  async verifyHomepage() {
    return cy.get(locator.selector.logo).should("be.visible");
  }

  async choose_tabPromotions() {
    return cy.get(locator.selector.tab_promotion).click();
  }

  async verifyPromotionspage() {
    cy.get(locator.selector.listproduct_tabpromotions).should("be.visible");
  }
}

module.exports = Homepage;