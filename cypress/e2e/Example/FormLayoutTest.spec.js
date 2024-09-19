describe("Form Layout Suits",  ()=>{

  it('Visit Form layout with various locator', ()=>{
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
})
