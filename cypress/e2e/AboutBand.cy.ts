/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('About Band', () => {
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
  });
  afterEach(() => {
    cy.wait(1000);
  });

  it('upload band image', () => {
    cy.wait(1000);
    cy.bands('band');
    cy.get('#aboutNav').click();
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('tamar.png');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('POST', `${Cypress.env('API_URL')}/change-band-logo`, {
      statusCode: 200,
    });
    cy.get('#uploadBtn').click();
    cy.wait(500);
    cy.url().should('include', '/about-band');
    cy.get('#logoutNav').click();
  });

  it('CAN NOT upload band image', () => {
    cy.bands('band');
    cy.get('#aboutNav').click();
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('toobig.png');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('PATCH', `${Cypress.env('API_URL')}/change-band-logo`, {
      statusCode: 413,
    });
    cy.get('#uploadBtn').click();
    cy.get('#saveBtn').click();
    cy.get('#closeButton').click();
    cy.url().should('include', '/about-band');
    cy.get('#logoutNav').click();
  });

  it('visitors CAN EDIT band about', () => {
    cy.bands('band2');
    cy.get('#aboutNav').click();
    cy.get('#editIcon').click();
    cy.get('#goBackBtn').click();
    cy.get('#editIcon').click();
    cy.get('#about').type(
      'დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში.'
    );
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('API_URL')}/edit-band/62c9483da24de73b212bcd2c`,
      {
        statusCode: 200,
      }
    );
    cy.get('#saveBtn').click();
    cy.wait(800);
    cy.url().should('include', '/about-band');
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.url().should('include', '/about-band');
  });

  it('visitors CAN NOT EDIT band about', () => {
    cy.bands('band');
    cy.get('#aboutNav').click();
    cy.get('#editIcon').click();
    cy.get('#goBackBtn').click();
    cy.get('#editIcon').click();
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('API_URL')}/edit-band/62c9483da24de73b212bcd2c`,
      {
        statusCode: 422,
      }
    );
    cy.get('#saveBtn').click();
    cy.wait(800);
    cy.url().should('include', '/about-band');
  });
});
