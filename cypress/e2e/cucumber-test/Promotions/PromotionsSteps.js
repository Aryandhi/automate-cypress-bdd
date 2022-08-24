import { Given, When, Then, And} from  "@badeball/cypress-cucumber-preprocessor";

const Homepage = require("../../../support/pages/Homepage");
let homepage = new Homepage();

const Promotions = require("../../../support/pages/Promotionspage");
let promotions = new Promotions();

Given(/^User on Promotions page$/, () => {
  homepage.visit();
  return homepage.choose_tabPromotions();
})

And(/^Visible Label PWP, Weekly Deals, Digital Club Exclusive$/, () => {
  return promotions.verifyLabelPromotions();
})

When(/^User choose Any Tag$/, () => {
  return promotions.chooseAnyTag();
})

Then(/^User Choose PWP Tag and visible product has PWP Label$/, () => {
  return promotions.verifyLabelPWP();
})