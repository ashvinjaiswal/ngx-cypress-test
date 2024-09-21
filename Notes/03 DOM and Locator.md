## HTML DOM and Locators

**HTML DOM (Document Object Model):**

* Represents the structure of an HTML document as a tree.
* Nodes in the tree represent elements, attributes, and text content.
* Used to interact with and manipulate web pages using JavaScript.

**HTML Elements:**

* Building blocks of HTML documents.
* Have tags (e.g., `<div>`, `<input>`) and attributes (e.g., `id`, `class`, `type`).
* May contain nested elements and text content.

**HTML Attributes:**

* Provide additional information about elements.
* Have names and values (e.g., `<input type="email">`).
* `id` and `class` are special attributes:
    * `id` should be unique within a document.
    * `class` can have multiple values separated by spaces.

**HTML Structure:**

* Parent-child relationships:
    * Elements nested within others are children.
    * Elements at the same level are siblings.
* Text content:
    * Located between opening and closing tags.
    * May be hidden or dynamically generated.

**Locators:**

* Used to identify and interact with elements in automation.
* Common types:
    * **ID:** Unique identifier for an element.
    * **Class:** One or more classes associated with an element.
    * **Name:** Value of the `name` attribute.
    * **XPath:** A complex expression to locate elements based on their position in the DOM.
    * **CSS selector:** A CSS-like expression to select elements.

**Key Points:**

* Understanding the HTML DOM is essential for effective automation.
* Locators are used to target specific elements.
* Choose appropriate locators based on element uniqueness and maintainability.
* Consider using a combination of locators for robustness.

**Additional Notes:**

* Explore the Cypress documentation for more information on locators and selectors.
* Practice using different locator strategies in your tests.
* Be aware of potential challenges like dynamic content and changing element attributes.


## Cypress Test Structure and Hooks

**Test Structure:**

* **`describe` or `context`:** Defines a test suite.
* **`it`:** Defines a test case within a suite.
* **Nested `describe`:** Creates sections or sub-suites.

**Example:**

```javascript
describe('First Test Suite', () => {
  it('First Test', () => {
    // Test code here
  });

  it('Second Test', () => {
    // Test code here
  });

  describe('Test Section', () => {
    it('Test within Section', () => {
      // Test code here
    });
  });
});
```

**Hooks:**

* **`beforeEach`:** Runs before each test within a suite.
* **`afterEach`:** Runs after each test within a suite.
* **`before`:** Runs once before all tests in a spec file.
* **`after`:** Runs once after all tests in a spec file.

**Example:**

```javascript
describe('Login Tests', () => {
  beforeEach(() => {
    // Login logic here
  });

  it('Successful Login', () => {
    // Test successful login
  });

  it('Failed Login', () => {
    // Test failed login
  });
});
```

**Key Points:**

* Use `describe` and `it` to organize tests into suites and cases.
* Nest `describe` blocks to create sections within suites.
* Use hooks to set up and tear down test environments.
* Before/after hooks apply to all tests in a spec file.
* BeforeEach/afterEach hooks apply to each test within a suite.
* Choose appropriate hooks based on your testing needs.

## Cypress Locators and Syntax Rules

**Locators:**

* Used to identify and interact with elements on a web page.
* Cypress supports various locator strategies.

**Common Locator Strategies:**

* **Tag Name:** `cy.get('input')`
* **ID:** `cy.get('#inputEmail1')`
* **Class:** `cy.get('.input-full-width')`
* **Attribute:** `cy.get('[placeholder="Email"]')`
* **Attribute and Value:** `cy.get('[placeholder="Email"][type="email"]')`
* **Entire Class Value:** `cy.get('.input-full-width.size-medium.shape-rectangle')`
* **Custom Data Attribute:** `cy.get('[data-cy="email-input"]')`

**Example:**

```javascript
cy.visit('/forms/form-layouts');

cy.get('input').should('have.length', 20); // Find all input elements
cy.get('#inputEmail1').should('exist'); // Find by ID
cy.get('.input-full-width').should('have.length', 14); // Find by class
cy.get('[placeholder="Email"]').should('have.length', 5); // Find by attribute
cy.get('[placeholder="Email"][type="email"]').should('have.length', 1); // Find by multiple attributes
cy.get('[data-cy="email-input"]').should('exist'); // Find by custom data attribute
```

**Key Points:**

* Choose locators that are specific and unique to avoid unintended interactions.
* Consider using custom data attributes for better maintainability.
* Combine locators when necessary to ensure accurate targeting.
* Avoid using XPath in Cypress, as it can be less reliable and harder to maintain.
* Use Cypress's built-in methods and assertions for effective testing.

**Additional Notes:**

* Experiment with different locator strategies to find the most suitable ones for your application.
* Be aware of potential challenges like dynamic content and changing element attributes.
* Consider using a linter to maintain consistent locator formatting.
* Explore Cypress's documentation for more advanced locator techniques and best practices.


## Cypress Methods for Interacting with Elements

**Cypress provides three primary methods for interacting with web elements:**

1. **`cy.get()`:** [Doc](https://docs.cypress.io/api/commands/get)
   * Finds elements globally on the page based on a locator.
   * Returns a chainable object representing the found elements.

2. **`cy.find()`:** [Doc](https://docs.cypress.io/api/commands/find)
   * Finds child elements within a parent element.
   * Must be chained after a `cy.get()` or another command that returns an element.

3. **`cy.contains()`:** [Doc](https://docs.cypress.io/api/commands/contains)
   * Finds elements containing specific text.
   * Can be used to find elements by their text content or to find elements within a parent element that contain a specific text.

**Example:**

```javascript
cy.visit('/forms/form-layouts');

// Find an element by ID
cy.get('#inputEmail1').should('exist');

// Find a child element within a parent
cy.get('.form-group').find('input').should('have.length', 2);

// Find an element by text
cy.contains('Sign In').click();

// Find an element by text and a specific attribute
cy.contains('Sign In', '[data-cy="primary-button"]').click();
```

**Key Points:**

* **`cy.get()`** is the most versatile method for finding elements.
* **`cy.find()`** is used for finding child elements within a parent.
* **`cy.contains()`** is useful for finding elements based on their text content.
* You can chain multiple methods together to create complex locators.
* Use the `should` assertion to verify that elements were found and meet expectations.

**Additional Notes:**

* Cypress provides other methods for interacting with elements, such as `cy.click()`, `cy.type()`, `cy.should()`, and more.
* Experiment with different locator strategies to find the most suitable ones for your application.
* Consider using custom data attributes for more reliable and maintainable locators.

## Cypress Aliases and `then()` Method

**Cypress Aliases:** [Doc](https://docs.cypress.io/guides/core-concepts/variables-and-aliases)

* Store a reference to a Cypress command's subject.
* Can be used to reuse elements or values throughout a test.
* Defined using the `.as()` command.

**Example:**

```javascript
cy.get('.form-group').as('formGroup');

cy.get('@formGroup').find('input').should('exist');
```

**`then()` Method:** [Doc](https://docs.cypress.io/api/commands/then)

* Chains commands together and provides access to the subject of the previous command.
* Returns a jQuery object, which requires wrapping with `cy.wrap()` to use Cypress commands.

**Example:**

```javascript
cy.get('.form-group').then((form) => {
  // Use form as a jQuery object
  cy.wrap(form).find('input').should('exist');
});
```

**Key Points:**

* Aliases are useful for storing frequently used elements or values.
* `then()` provides access to the subject of a command within a callback function.
* Use `cy.wrap()` to convert jQuery objects back to Cypress chainable objects.
* Choose the appropriate approach based on your testing needs and preferences.

**Additional Notes:**

* Aliases are scoped to the current test.
* Use `cy.wrap()` with caution, as it can introduce potential issues if not used correctly.
* Consider using a linter to enforce consistent alias naming conventions.
* Experiment with both approaches to understand their benefits and limitations.

## Cypress: Extracting Text Values from Web Pages

### Methods for Extracting Text:

1. **jQuery Text Method (then())**
   - Use `.get()` to find the element.
   - Use `.then()` to access the element as a jQuery object.
   - Use the jQuery `.text()` method to extract the HTML text.
   - Example:

   ```javascript
   cy.get('input#email').then(($el) => {
     const text = $el.text();
     // Use the extracted text (text) for assertions, assignments, etc.
   });
   ```

2. **Cypress `invoke('text')` Method**
   - Use `.get()` to find the element.
   - Use `.invoke('text')` to extract the pure text value.
   - Example:

   ```javascript
   cy.get('label').invoke('text').then((text) => {
     expect(text).to.equal('Email Address');
   });
   ```

3. **Cypress Aliases**
   - Use `.get()` to find the element.
   - Use `.as()` to save the element as an alias for later use.
   - Example:

   ```javascript
   cy.get('label').as('labelText');
   cy.get('@labelText').should('contain.text', 'Email Address');
   ```

### Extracting Attributes and Properties:

1. **Cypress `invoke('attr', 'attributeName')`**
   - Use `.get()` to find the element.
   - Use `.invoke('attr', 'attributeName')` to extract the value of an attribute.
   - Example (get class value):

   ```javascript
   cy.get('#checkbox').invoke('attr', 'class').then((classValue) => {
     expect(classValue).to.include('checked');
   });
   ```

2. **Cypress `invoke('prop', 'propertyName')`**
   - Use `.get()` to find the element.
   - Use `.invoke('prop', 'propertyName')` to extract the value of a property (e.g., input value).
   - Example (get input field value):

   ```javascript
   cy.get('#emailInput').type('test@test.com').then(() => {
     cy.get('#emailInput').invoke('prop', 'value').then((value) => {
       expect(value).to.equal('test@test.com');
     });
   });
   ```

### Key Points:

* Choose the appropriate method based on your needs:
   - jQuery `.text()` for HTML text.
   - Cypress `invoke('text')` for pure text value.
   - Cypress `invoke('attr')` and `invoke('prop')` for attributes and properties.
* Use Cypress assertions (`expect`, `should`) to verify extracted values.
* Consider using aliases for reusable elements.
* Be mindful of the difference between HTML text and element properties.

**Cypress `invoke` Method:** [Doc](https://docs.cypress.io/api/commands/invoke)

* **Purpose:** Used to invoke JavaScript methods on DOM elements, allowing you to extract attributes, properties, or perform custom actions.
* **Syntax:** `cy.get(selector).invoke(methodName, args)`
    - `selector`: A CSS selector or other locator to find the element.
    - `methodName`: The name of the JavaScript method to invoke.
    - `args`: Optional arguments to pass to the method.

**Common Use Cases:**

1. **Extracting Attributes:**
   - Get the value of an attribute:
     ```javascript
     cy.get('input#email').invoke('attr', 'type').should('equal', 'email');
     ```
   - Check if an attribute exists:
     ```javascript
     cy.get('button').invoke('attr', 'disabled').should('not.exist');
     ```

2. **Extracting Properties:**
   - Get the value of a property (e.g., `value` for input fields):
     ```javascript
     cy.get('#passwordInput').type('myPassword').invoke('prop', 'value').should('equal', 'myPassword');
     ```
   - Check if a property has a specific value:
     ```javascript
     cy.get('select').invoke('prop', 'selectedIndex').should('equal', 1);
     ```

3. **Calling Custom Methods:**
   - If you've defined custom JavaScript methods on your elements, you can invoke them:
     ```javascript
     cy.get('button.custom-button').invoke('myCustomMethod', 'arg1', 'arg2').should('equal', 'result');
     ```

4. **Chaining Commands:**
   - You can chain `invoke` with other Cypress commands for more complex operations:
     ```javascript
     cy.get('input#email').invoke('val', 'test@example.com').should('have.value', 'test@example.com');
     ```

**Additional Notes:**

* The `invoke` method returns a Cypress chainable object, allowing you to continue chaining commands.
* For most common DOM properties and attributes, you can use dedicated Cypress commands (e.g., `cy.val()` for input values, `cy.text()` for text content).
* If you need to access a property that Cypress doesn't have a built-in method for, `invoke` is the way to go.
* Explore the Cypress documentation for a complete list of available `invoke` methods and their usage.

By effectively using the `invoke` method, you can extract a wide range of information from web elements and perform complex assertions and interactions.


## Cypress: Working with Radio Buttons and Checkboxes

**Key Points:**

* Use `cy.get()` to find the radio button or checkbox elements.
* Use `cy.check()` and `cy.uncheck()` to interact with these elements.
* Consider using `cy.check({ force: true })` to override Cypress's default visibility checks.
* For radio buttons, only one button can be selected at a time.
* For checkboxes, multiple buttons can be selected or deselected independently.

**Example:**

```javascript
cy.visit('/forms/form-layouts');

cy.get('[type="radio"]').eq(0).check({ force: true }); // Check the first radio button
cy.get('[type="radio"]').eq(1).check({ force: true }); // Check the second radio button
cy.get('[type="radio"]').eq(0).should('not.be.checked'); // Verify the first radio button is unchecked

cy.get('[type="checkbox"]').check(); // Check all checkboxes
cy.get('[type="checkbox"]').eq(1).uncheck(); // Uncheck the second checkbox
```

**Additional Notes:**

* You can use `cy.contains()` to find elements by their text content if necessary.
* For more complex scenarios, you might need to combine different locators or use custom commands.
* Always test your automation scripts thoroughly to ensure they are reliable and robust.

**Cypress `cy.check()` Method:**

* **Purpose:** Used to check or uncheck checkboxes.
* **Syntax:** `cy.get(selector).check(options)`
    - `selector`: A CSS selector or other locator to find the checkbox element.
    - `options`: Optional object with configuration properties:
        - `force`: Set to `true` to override Cypress's default visibility checks.
        - `label`: If you want to check a checkbox by its label text instead of its element, provide the label text here.

**Example:**

```javascript
cy.visit('/forms/form-layouts');

// Check a checkbox by its element
cy.get('[type="checkbox"]').eq(0).check({ force: true });

// Check a checkbox by its label
cy.contains('Checkbox 1').check();

// Uncheck a checkbox
cy.get('[type="checkbox"]').eq(1).uncheck();
```

**Key Points:**

* The `cy.check()` method automatically handles the state of the checkbox, checking it if it's unchecked and unchecking it if it's checked.
* If the checkbox is hidden or not visible, you can use the `force: true` option to override Cypress's default checks.
* You can check or uncheck multiple checkboxes at once by using the `cy.check()` method on a collection of elements.
* For more complex scenarios, you might need to combine `cy.check()` with other Cypress methods, like `cy.contains()` or `cy.get()`.

By understanding these additional details about the `cy.check()` method, you can effectively automate interactions with checkboxes in your Cypress tests.
