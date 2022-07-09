/// <reference types='cypress' />
describe('Front Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('login', () => {
    cy.get('#memberSpinner').click();
    cy.get('#sun').click();
  });
});
