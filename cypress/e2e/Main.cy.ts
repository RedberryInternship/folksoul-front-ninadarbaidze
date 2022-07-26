/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Main', () => {
  beforeEach(() => {
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

    cy.wait(1000);
    Cypress.on('uncaught:exception', () => false);
    cy.bands('band');
  });
  afterEach(() => {
    cy.wait(1000);
  });

  it('can see band logo', () => {
    cy.get('#mainNav').click();
    cy.contains('დილამშვიდობისა').should('be.visible');
  });
});
