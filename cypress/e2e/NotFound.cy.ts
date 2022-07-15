/// <reference types='cypress' />
describe('not found page', () => {
  it('visitors get 404 page if pathname is incorrect', () => {
    cy.visit('/kairame');
    cy.contains('404').should('be.visible');
    cy.contains('დაბრუნდი').click();
    cy.url().should('include', '/');
  });
});
