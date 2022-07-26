/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Social Links', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.wait(1000);
    cy.intercept('POST', `${Cypress.env('API_URL')}/auth`, {
      statusCode: 200,
      body: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pbmEiLCJpYXQiOjE2NTg3Mzg0OTQsImV4cCI6MTY1ODc0NTY5NH0.w3kTqC6eBWdc_kuANzJf9-pJ6k_DeSkC-h83SxBz4ec',
      },
    });
    cy.wait(1000);
    cy.get('#loginBtn').click();

    cy.wait(1000);
    Cypress.on('uncaught:exception', () => false);
    cy.socials('0');
    Cypress.on('uncaught:exception', () => false);
    cy.socials('1');
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
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err);
      return false;
    });
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
    cy.get('[data-cy="yellowBtn"]')
      .eq(0)
      .click({ multiple: true, force: true });
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('API_URL')}/edit-social/62de6b33fa5bc7d5027d043f`,

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
      `${Cypress.env('API_URL')}/delete-social/62de6b33fa5bc7d5027d043f`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.get('#cancelbtn').click();
    cy.url().should('include', 'dashboard/socials');
  });

  it('visitors CAN DELETE social link', () => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/social-media?page=0`, {
      fixture: `socialsp1`,
    }).as('socials');
    cy.visit('/dashboard/socials');
    cy.wait('@socials');
    cy.get('#socialsNav').click();
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      `${Cypress.env('API_URL')}/delete-social/62de6b3cfa5bc7d5027d045d`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.get('#deletebtn').click();
    cy.visit('/dashboard/socials');
    cy.wait('@socials');
    cy.wait(500);
    cy.url().should('include', '/socials');
  });
});
