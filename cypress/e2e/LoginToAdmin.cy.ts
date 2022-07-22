/// <reference types='cypress' />
describe('login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('visitors CANT proceed to another page if USER does NOT exists', () => {
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('shemishvi');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth`, {
      statusCode: 401,
    });
    cy.get('#loginBtn').click();
    cy.url().should('include', 'login');
  });

  it('visitors CANT proceed to another page if inputs are INVALID', () => {
    cy.get('#loginBtn').click();
    cy.contains('სავალდებულო').should('be.visible');
    cy.url().should('include', 'login');
  });

  it('visitor CAN proceed to next page if inputs are VALID and then logout sucessfully', () => {
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.get('#loginBtn').click();
    cy.url().should('include', 'dashboard/main');
    cy.get('#logoutNav').click();
    cy.url().should('include', '/');
  });
});
