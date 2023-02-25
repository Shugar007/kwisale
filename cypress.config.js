const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://app-kwiksell.bluegreensoft.com/",
    "defaultCommandTimeout": 60000,
    "pageLoadTimeout": 60000,
    "viewportHeight": 800,
    "viewportWidth": 1500,

    "reporter": "mocha-junit-reporter",
    "reporterOptions": {
      "mochaFile": "cypress/reports/junit/test-results.[hash].xml",
      "testsuitesTitle": false
    }
  },
});
