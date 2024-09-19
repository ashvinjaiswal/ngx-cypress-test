const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // e2e options here
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: ['**/getting-started*', '**advanced-examples*'],
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    viewportWidth: 1920,
  },
})
