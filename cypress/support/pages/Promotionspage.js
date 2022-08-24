const locator = require("../locator/PromotionsLocator");
const dataset = require("../dataset/PromotionspageData");

class Promotionspage {
  async verifyLabelPromotions() {
    let data = dataset.datatest.label_promotion;
    for(let i = 0; i < data.length; i++) {
      cy.get(locator.selector.all_label).should("contain", data[i]);
    }
  }

  async chooseAnyTag() {
    cy.get(locator.selector.tag_carton).click();
    cy.url().should("eq", "https://www.fairprice.com.sg/promotions?tag=carton-and-bundle-deals");
    
  }

  async verifyLabelPWP() {
    cy.get(locator.selector.pwp_button).click();
    cy.get(locator.selector.pwp_label).should("contain", "PWP");
  }

  async chooseSupportLocal() {
    cy.get(locator.selector.supportLocal_tag).click();
    cy.url().should("eq", "https://www.fairprice.com.sg/promotions?tag=support-local");  
  }

  async verifyProductSupportLocal() {
    cy.get(locator.selector.production_collection).should("not.include", 
      cy.get(locator.selector.pwp_label));
  }
}

module.exports = Promotionspage;