/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */

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
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.wait(1000);
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth`, (req) => {
      req.body = {
        username: 'nina',
        password: 'nina',
      };
      req.reply({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pbmEiLCJpYXQiOjE2NTg3Mzg0OTQsImV4cCI6MTY1ODc0NTY5NH0.w3kTqC6eBWdc_kuANzJf9-pJ6k_DeSkC-h83SxBz4ec',
      });
    });
    cy.wait(1000);
    cy.get('#loginBtn').click();
    cy.url().should('include', 'dashboard/main');
    cy.get('#logoutNav').click();
    cy.url().should('include', '/');
  });
});
