# Automate-Cypress-BDD
Cypress is a tool that helps us productive do testing and reporting a project that build use Javascript.
Below step-by-step that must be completed  for build this project
```
Objective 
👩‍💻 Init project
👩‍💻 Install Depedency
👩‍💻 Project Structuring
👩‍💻 Config
👩‍💻 Test Case
👩‍💻 Result ViewReport Cypress E2E
👩‍💻 Report index-default.html
👩‍💻 Summary
```

## 👩‍💻 Init project
For started a project node we must started with `$npm init` for generated file package.json
## 👩‍💻 Install Depedency
Cypress has some dependency from npm, cause it, we must install dependency that we need
- `$npm install Cypress --save-dev`
- `$npm install –-save-dev @badeball/cypress-cucumber-preprocessor`
- `$npm install –-save-dev @bahmutov/cypress-esbuild-preprocessor`
- `$npm install –-save-dev @esbuild-plugins/node-modules-polyfill`
- `$npm install –-save-dev esbuild`

### link reference:
- [cypress-cucumber](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor)
- [cypress-cucumber-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [node-modules-polyfill](https://www.npmjs.com/package/@esbuild-plugins/node-modules-polyfill)
- [esbuild](https://esbuild.github.io/getting-started/)

## 👩‍💻 Project Structuring

#### Root
![root](https://github.com/Aryandhi/automate-cypress-bdd/blob/master/project%20structuring%20automate-cypress-bdd/root.jpg)
#### cucumber-test
![cucumber-test](https://github.com/Aryandhi/automate-cypress-bdd/blob/master/project%20structuring%20automate-cypress-bdd/cucumber-test.jpg)
#### support-folder
![support-folder](https://github.com/Aryandhi/automate-cypress-bdd/blob/master/project%20structuring%20automate-cypress-bdd/support%20folder.jpg)

## 👩‍💻 Config file
### package.json
```package.json
"scripts": {
    "test": "npx cypress run",
    "cypress:open": "npx cypress open",
    "delete:reportFolder": "rm -rf cypress/reports/ && mkdir cypress/reports/",
    "delete:reportFolder:win": "rmdir cypress/reports/ ; mkdir cypress/reports/",
    "convert:Json": "more cucumber-messages.ndjson | cucumber-json-formatter-win.exe > cypress/reports/cucumber-results.json",
    "reporter": "npm run delete:reportFolder:win ; npm run convert:Json ; node cypress/support/reporter"
  },
```

```package.json
"cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/cucumber-test/**/*.{js,ts}",
    "filterSpecs": true,
    "omitFiltered": true,
    "html": {
      "enabled": true,
      "output": "cypress/reports/index-default.html"
    }
  }
```

### cypress.config.js
```cypress.config.js
const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    supportFile: false,
    baseUrl: 'https://www.fairprice.com.sg/',
    specPattern: ["**/*.feature"]
  },
});

```

## 👩‍💻 Test Case
### Homepage.feature
```Homepage.feature
Feature: FairPrice E-Commerce
  User Want able to visit the website
  @Home
  Scenario: User be able visit the website
    Given User successfully load website
    When User click Promotions tab
    Then User move to Promotions page
```

### Promotions.feature
```Promotions.feature
Feature: Promotion Page
  User want verify Label Promotion and List product of PWP Label
  @Promotion
  Scenario: User want verify Label Promotion
    Given User on Promotions page
    And Visible Label PWP, Weekly Deals, Digital Club Exclusive
    When User choose Any Tag
    Then User Choose PWP Tag and visible product has PWP Label

  @PromotionNegative
  Scenario: User want verify label PWP on List product of Support Local Tag
    When User Choose Support Local tag
    Then User not visible PWP label in List product
```
## 👩‍💻 Result ViewReport Cypress E2E
### Video Testing Homepage
[Testing Homepage](https://drive.google.com/file/d/1AyykNoqSuJJcHqXjYcuVi7av8Sh3xNo9/view)
### Video Testing Promotionspage
[Video Testing Promotionspage](https://drive.google.com/file/d/1mA5xiDX9Zc1tJxCQhYvLxO3_2usOF69X/view?usp=sharing)
## 👩‍💻 Report index-default.html
[report](https://github.com/Aryandhi/automate-cypress-bdd/blob/master/cypress/reports/index-default.html)
## 👩‍💻 Summary
## Installation

Clone Repository

```bash
  git clone https://github.com/Aryandhi/automate-cypress-bdd.git
  cd my-project
```
install dependency

```bash
  npm install
```
run cypress

```bash
  npx cypress open
```
run cypress-cucumber (all tags)

```bash
  npm test
```
or selected tag
```bash
  npm test -- -e TAGS="nameTags"
```
