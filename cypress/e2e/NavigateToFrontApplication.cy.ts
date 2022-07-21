/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Front Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('test individual band members', () => {
    cy.wait(500);
    cy.get('#62d93687da14c2df7bd9209c').click({ force: true });
    cy.get('#62d9368bda14c2df7bd920a6').click({ force: true });
    cy.get('#sun').click();
  });
});
