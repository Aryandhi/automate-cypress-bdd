import { Given, When, Then, And} from  "@badeball/cypress-cucumber-preprocessor";

const Homepage = require("../../../support/pages/Homepage");
let homepage = new Homepage();

Given(/^User successfully load website$/, () => {
  homepage.visit("/");
})
When(/^User click Promotions tab$/, () => {
  homepage.choose_tabPromotions();
})
Then(/^User move to Promotions page$/, () => {
  homepage.verifyPromotionspage();
})