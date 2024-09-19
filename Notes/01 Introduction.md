## Cypress Installation and Configuration Notes

**Installation:**

* Use npm to install Cypress globally: `npm install cypress --save-dev --force`
* This saves Cypress as a dependency in your `package.json` file.

**Initial Setup:**

* Run `npx cypress open` to open the Cypress Configurator.
* Choose "E2E testing" and select your preferred browser (e.g., Electron).
* Create a scaffold example spec to generate initial test files.

## Cypress Folder Structure

Cypress follows a specific folder structure to organize your test files and project assets. Here's a breakdown of the typical directory layout:

**Root Directory:**
* **cypress:** This is the main Cypress folder where all test files and configuration are stored.

**cypress/integration:**
* ***.spec.js:** This folder contains your actual test files. The `.spec.js` extension indicates that these files are test specifications.

**cypress/fixtures:**
* ***.json, *.txt, etc.:** This folder stores fixture data that can be used in your tests. Fixtures are static data that can be used to populate test inputs, expected outputs, or other test data.

**cypress/support:**
* **commands.js:** This file is used to define custom commands that can be used throughout your tests. Custom commands can simplify common test tasks.
* **index.js:** This file is used to configure global settings for Cypress.

**cypress.json:**
* This file contains global configuration settings for Cypress. You can customize various aspects of Cypress' behavior, such as the browser to use, test timeout, and more.

**Example Structure:**

```
cypress/
├── integration
│   ├── login.spec.js
│   └── products.spec.js
├── fixtures
│   ├── loginData.json
│   └── productData.txt
├── support
│   ├── commands.js
│   └── index.js
└── cypress.json
```

**Key points to remember:**

* The `integration` folder is where you write your actual test cases.
* The `fixtures` folder stores static data for your tests.
* The `support` folder is used to define custom commands and global configuration.
* The `cypress.json` file contains global configuration settings for Cypress.


**Key Points:**

* **Test execution:** Run tests by clicking on them in the Cypress Runner.
* **Time travel:** Hover over steps in the test runner to see corresponding browser actions.
* **Custom commands:** Define reusable actions in `commands.js`.
* **Configuration:** Modify settings in `cypress.config.js`.
* **Project structure:** Understand the purpose of each folder and file.
