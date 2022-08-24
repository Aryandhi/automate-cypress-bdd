import { Given, When, Then, And} from  "@badeball/cypress-cucumber-preprocessor";

const Homepage = require("../../../support/pages/Homepage");
let homepage = new Homepage();

const Promotions = require("../../../support/pages/Promotionspage");
let promotions = new Promotions();

// Given(/^User on Promotions page and will choose one of the tags$/, () => {
//   homepage.visit();
//   return homepage.choose_tabPromotions();
// })

When(/^User Choose Support Local tag$/, () => {
  return promotions.chooseSupportLocal();
})

Then(/^User not visible PWP label in List product$/, () => {
  return promotions.verifyProductSupportLocal();
})