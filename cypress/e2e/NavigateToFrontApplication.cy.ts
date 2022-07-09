/// <reference types='cypress' />
describe('Front Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('login', () => {
    cy.contains('ნინალოზი').click();
    cy.contains('ვეფხო').click();
    cy.get('#sun').click();
  });
});
