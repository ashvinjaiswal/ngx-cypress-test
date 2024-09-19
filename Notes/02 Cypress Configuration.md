## Cypress Configuration Notes
[Official Doc](https://docs.cypress.io/guides/references/configuration)

**Cypress Configuration File:**
* Located at `cypress.config.js`.
* Contains global settings for Cypress.

**Key Configuration Options:**

* **`baseUrl`:** Sets the base URL for your application.
* **`excludeSpecPattern`:** Specifies patterns to exclude tests from the runner.
* **`specPattern`:** Defines the pattern for test files.
* **`viewportWidth`:** Sets the browser viewport width.
* **`viewportHeight`:** Sets the browser viewport height.
* **`video`:** Enables or disables video recording (set to `false` to disable).

**Configuration Example:**

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: ['**/getting-started*', '**advanced-examples*'],
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
  },
});
```

**Explanation:**

* Sets the base URL to `http://localhost:42100`.
* Excludes tests in the `getting-started` and `advanced-examples` folders.
* Uses the `*.spec.js` pattern for test files.
* Sets the viewport to 1920x1080.
* Disables video recording.

**Additional Notes:**

* Refer to the Cypress documentation for a complete list of configuration options.
* Customize these settings to match your project's specific needs.
* Consider using environment variables for dynamic configuration.
* Experiment with different configurations to optimize your testing workflow.
