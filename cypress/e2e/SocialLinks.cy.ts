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
    cy.wait(1000);
  });

  it('create facebook social link', () => {
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
    cy.get('#social-name').type('google');
    cy.get('#url').type('https://google.com');
    cy.get('#addUpdateBtn').click();
  });

  it('create facebook social link', () => {
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
    cy.get('#social-name').type('facebook');
    cy.get('#url').type('https://facebook.com');
    cy.get('#addUpdateBtn').click();
  });

  it('create twitter social link', () => {
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
    cy.get('#social-name').type('twitter');
    cy.get('#url').type('https://twitter.com');
    cy.get('#addUpdateBtn').click();
  });

  it('create tinder social link', () => {
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
    cy.get('#social-name').type('tinder');
    cy.get('#url').type('https://tinder.com');
    cy.get('#addUpdateBtn').click();
  });

  it('visitors CAN ADD socials and try uploading image', () => {
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
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
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
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
    cy.get('#socialsNav').click();
    cy.get('#yellowButton').click();
    cy.get('#social-name').clear().type('tumblr');
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
    cy.get('#socialsNav').click();
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('Vano.png');
    cy.get('#uploadBtn').click();
    cy.get('#saveBtn').click();
    cy.wait(1000);
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე სოციალური ბმულის ხატულა').should('be.visible');
  });

  it('view social image', () => {
    cy.get('#socialsNav').click();
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე სოციალური ბმულის ხატულა').should('be.visible');
    cy.get('#closeButton').click();
  });

  it('visitors CAN use pagination', () => {
    cy.get('#socialsNav').click();
    cy.get('#1').click({ force: true });
    cy.url().should('include', '/socials');
  });

  it('visitors CAN NOT ADD social links', () => {
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
    cy.get('#addUpdateBtn').click();
    cy.contains('სავალდებულო').should('be.visible');
    cy.get('#goBackBtn').click();
    cy.url().should('include', 'dashboard/socials');
  });

  it('visitors CAN NOT DELETE band member information', () => {
    cy.get('#socialsNav').click();
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      `${Cypress.env('url')}/delete-social/id`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.get('#cancelbtn').click();
    cy.url().should('include', 'dashboard/socials');
  });

  it('visitors CAN DELETE social link', () => {
    cy.deleteSocial('#socialsNav');
    cy.wait(1000);
    cy.deleteSocial('#socialsNav');
    cy.wait(1000);
    cy.deleteSocial('#socialsNav');
    cy.wait(1000);
    cy.deleteSocial('#socialsNav');
  });
});
