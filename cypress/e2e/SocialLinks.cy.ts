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

  it('visitors CAN ADD socials and try uploading image', () => {
    cy.get('#socialsNav').click();
    cy.get('#addNewSocial').click();
    cy.get('#social-name').type('google');
    cy.get('#url').type('https://google.com');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      `${Cypress.env('API_URL')}/add-social`,

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
      `${Cypress.env('API_URL')}/add-social`,

      {
        statusCode: 409,
      }
    );
    cy.get('#addUpdateBtn').click();
    cy.url().should('not.be', '/socials');
  });

  it('visitors CAN EDIT social links and view image', () => {
    cy.get('#socialsNav').click();
    cy.get('[data-cy="yellowBtn"]').click({ multiple: true, force: true });
    cy.get('#social-name').clear().type('tumblr');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('API_URL')}/edit-social/62d93a5eda14c2df7bd92465`,

      {
        statusCode: 200,
      }
    );
    cy.get('#addUpdateBtn').click();
    cy.get('[data-cy="uploadImg"]')
      .eq(1)
      .click({ multiple: true, force: true });
    cy.get('#closeButton').click();

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
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('POST', `${Cypress.env('API_URL')}/change-social-icon`, {
      statusCode: 200,
    });
    cy.get('#uploadBtn').click();
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

  it('visitors CAN NOT DELETE socials information', () => {
    cy.get('#socialsNav').click();
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      `${Cypress.env('API_URL')}/delete-social/62d93a5eda14c2df7bd92465`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.get('#cancelbtn').click();
    cy.url().should('include', 'dashboard/socials');
  });

  it('visitors CAN DELETE social link', () => {
    cy.get('#socialsNav').click();
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      `${Cypress.env('API_URL')}/delete-social/62d93a5eda14c2df7bd92465`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.get('#deletebtn').click();
    cy.wait(500);
    cy.url().should('include', '/socials');
  });
});
