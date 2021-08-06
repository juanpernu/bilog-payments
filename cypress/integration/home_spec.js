describe('Home Flow', function () {
  it('Visit /pricing through cover-split button', function () {
    cy.visit('/');

    cy.get('button')
      .contains('¡Cotizá ahora!')
      .click();

    cy.url()
      .should('includes', '/pricing');
  });

  it('Visit /versions through header link', function () {
    cy.visit('/');

    cy.get('a')
      .contains('Versiones')
      .click();

    cy.url()
      .should('includes', '/versions');
  });

  it('Visit /small through version-card', function () {
    cy.visit('/');

    cy.get('a[href*="/versions?version=small&shallow=true"]')
      .click();

    cy.url()
      .should('includes', '/versions?version=small&shallow=true');
  });
});