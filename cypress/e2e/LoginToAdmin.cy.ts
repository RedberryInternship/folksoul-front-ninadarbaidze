/// <reference types='cypress' />
describe('login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('visitors CANT proceed to another page if USER does NOT exists', () => {
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('shemishvi');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      'https://folksoul-api.nina.redberryinternship.ge/auth',
      {
        statusCode: 422,
      }
    );
    cy.contains('შემობრძანდი').click();
    cy.url().should('include', 'login');
  });

  it('visitors CANT proceed to another page if inputs are INVALID', () => {
    cy.contains('შემობრძანდი').click();
    cy.contains('სავალდებულო').should('be.visible');
    cy.url().should('include', 'login');
  });

  it('visitor CAN proceed to next page if inputs are VALID', () => {
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.contains('შემობრძანდი').click();
    cy.url().should('include', 'dashoboard/main');
  });
});
