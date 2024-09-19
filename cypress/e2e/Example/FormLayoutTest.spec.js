/// <reference types="cypress" />

describe("Form Layout Suits",  ()=>{

  it.skip('Visit Form layout with various locator', ()=>{
    //Visit page
    cy.visit('/');

    //find element and click
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    //By Tag
    cy.get('input');

    //CSS ID
    cy.get('#inputEmail');

    //CSS Clsass
    cy.get('.input-full-width');

    //Element Attribute
    cy.get('[fullwidth]');

    //Element Attribute and value
    cy.get('[placeholder="Email"]');

    //By entire Class value
    cy.get('.input-full-width.size-medium.shape-rectangle');

    //By two attribute
    cy.get('[placeholder="Email"][fullwidth]');

    //By tag, attribute id and class
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

    //Recommended, cypress tag
    cy.get('[data-cy="imputEmail1"]');
  })

  it("Visit Form layout with other locator methods",()=>{
    //Visit page
    cy.visit('/');

    //find element and click
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();


    //1 cy.get():Finds elements globally on the page based on a locator.
    //Returns a chainable object representing the found elements.

    //2. cy.find():Finds child elements within a parent element.
    // Must be chained after a cy.get() or another command that returns an element.

    //3. cy.contains(): Finds elements containing specific text.

    //Find El by content cy.contains(content)
    cy.log('Find element by Sign in content')
    cy.contains('Sign in')

    //Find El by selector and content cy.contains(selector, content)
    cy.log('Find element with selector and content')
    cy.contains('[status="warning"]','Sign in');
    cy.contains('nb-card','Using the Grid');

    //Finds child elements within a parent element. .find(selector)
    cy.log('Find child element within a paraent element by tag')
    cy.contains('nb-card','Using the Grid').find('button');
    cy.log('Find child element within a paraent element by cotnent')
    cy.contains('nb-card','Using the Grid').contains('Sign in')

    cy.get('#inputEmail3')
    .parents('form')
    .find('button')
    .should('contain', 'Sign in')
    .parents('form')
    .find('nb-checkbox')
    .click();
  })
})
