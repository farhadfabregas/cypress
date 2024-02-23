const { defineConfig } = require('cypress')

module.exports = defineConfig({
  'cypress-cucumber-preprocessor': {
    nonGlobalStepDefinitions: false,
    step_definitions: './cypress/support/step_definitions/',
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/*.feature',
    supportFile: false
  },
});