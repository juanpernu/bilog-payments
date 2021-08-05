describe('My first test', function () {
  it('Visit a website', function () {
    cy.visit('https://example.cypress.io');

    cy.pause();

    cy.contains('type').click();

    cy.url()
      .should('includes', '/commands/actions');

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});