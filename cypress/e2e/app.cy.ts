/// <reference types="cypress" />

describe('welcome page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('user can see welcome text', () => {
    cy.contains('შესვლა').should('be.visible');
  });
});
