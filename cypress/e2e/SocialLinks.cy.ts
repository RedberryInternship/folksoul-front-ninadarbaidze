/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Social Links', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.get('#loginBtn').click();
    cy.get('#socialsNav').click();
  });
  afterEach(() => {
    cy.wait(500);
  });

  it('create google social link', () => {
    cy.contains('დაამატე ახალი').click();
    cy.get('#social-name').type('google');
    cy.get('#url').type('https://google.com');
    cy.get('#addUpdateBtn').click();
  });

  it('visitors CAN ADD socials and try uploading image', () => {
    cy.contains('დაამატე ახალი').click();
    cy.get('#social-name').type('google');
    cy.get('#url').type('https://google.com');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      `${Cypress.env('url')}/add-social`,

      {
        statusCode: 201,
      }
    );
    cy.get('#addUpdateBtn').click();
    cy.get('#editPhoto').click();
    cy.get('#uploadBtn').click();
    cy.get('#saveBtn').click();
    cy.url().should('include', '/socials');
  });

  it('visitors CAN NOT ADD socials', () => {
    cy.contains('დაამატე ახალი').click();
    cy.get('#social-name').type('google');
    cy.get('#url').type('https://google.com');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      `${Cypress.env('url')}/addd-social`,

      {
        statusCode: 409,
      }
    );
    cy.get('#addUpdateBtn').click();
    cy.url().should('not.be', '/socials');
  });

  it('visitors CAN EDIT social links', () => {
    cy.get('#yellowButton').click();
    cy.get('#social-name').clear().type('Facebook');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('url')}/edit-social/id`,

      {
        statusCode: 200,
      }
    );
    cy.get('#addUpdateBtn').click();
    cy.url().should('contain', '/socials');
  });

  it('upload social image', () => {
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('Vano.png');
    cy.get('#uploadBtn').click();
    cy.get('#saveBtn').click();
    cy.wait(500);
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე სოციალური ბმულის ხატულა').should('be.visible');
  });

  it('view social image', () => {
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე სოციალური ბმულის ხატულა').should('be.visible');
    cy.get('#closeButton').click();
  });

  it('visitors CAN NOT ADD social links', () => {
    cy.contains('დაამატე ახალი').click();
    cy.get('#addUpdateBtn').click();
    cy.contains('სავალდებულო').should('be.visible');
    cy.contains('გადი უკან').click();
    cy.url().should('include', 'dashboard/socials');
  });

  it('visitors CAN DELETE social link', () => {
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      `${Cypress.env('url')}/delete-member/id`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.url().should('include', '/socials');
  });
});
