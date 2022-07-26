/// <reference types='cypress' />

/* eslint-disable cypress/no-unnecessary-waiting */
describe('Band Members', () => {
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
    cy.bandMembers('0');
    cy.bandMembers('1');
  });
  afterEach(() => {
    cy.wait(1000);
  });

  it('visitors CAN ADD band member information and try uploading image', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('გია');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ გია და მიყვარს ვიოლინო');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('POST', `${Cypress.env('API_URL')}/new-member`, {
      statusCode: 201,
    });

    cy.get('#addUpdateBtn').click();
    cy.get('#editPhoto').click();
    cy.get('#uploadBtn').click();
    cy.get('#saveBtn').click();
    cy.url().should('include', '/band-members');
  });

  it('visitors CAN NOT ADD band members', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('ვეფხვია');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ მიშიკო და მიყვარს ვიოლინო');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      `${Cypress.env('API_URL')}/new-member`,

      {
        statusCode: 409,
      }
    );
    cy.get('#addUpdateBtn').click();
    cy.url().should('not.be', '/band-members');
  });

  it('visitors CAN EDIT band members and view image', () => {
    cy.get('#membersNav').click();
    cy.get('[data-cy="yellowBtn"]')
      .eq(0)
      .click({ multiple: true, force: true });
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('API_URL')}/edit-member/62de83dbfa5bc7d5027d05f2`,

      {
        statusCode: 200,
      }
    );
    cy.wait(500);
    cy.get('#addUpdateBtn').click();
    cy.wait(1000);
    cy.get('[data-cy="uploadImg"]')
      .eq(1)
      .click({ multiple: true, force: true });
    cy.get('#closeButton').click();
    cy.url().should('contain', '/band-members');
  });

  it('upload band member image', () => {
    cy.get('#membersNav').click();
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('Vano.png');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('POST', `${Cypress.env('API_URL')}/change-avatar`, {
      statusCode: 200,
    });
    cy.get('#uploadBtn').click();
    cy.wait(1000);
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე ჯგუფის წევრის ავატარი').should('be.visible');
  });

  it('view band member image', () => {
    cy.get('#membersNav').click();
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე ჯგუფის წევრის ავატარი').should('be.visible');
    cy.get('#closeButton').click();
  });

  it('visitors CAN see band member detailed information and use pagination', () => {
    cy.get('#membersNav').click();
    cy.get('#greenButton').click();
    cy.get('#closeButton').click();
    cy.get('#1').click({ force: true });
    cy.url().should('include', '/band-members');
  });

  it('visitors CAN NOT ADD band member information', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#addUpdateBtn').click();
    cy.contains('სავალდებულო').should('be.visible');
    cy.get('#goBackBtn').click();
    cy.url().should('include', 'dashboard/band-members');
  });

  it('visitors CAN NOT DELETE band member information', () => {
    cy.get('#membersNav').click();
    cy.get('#redButton').click();
    cy.get('#cancelbtn').click();
    cy.url().should('include', '/band-members');
  });

  it('visitors CAN DELETE band member information', () => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/band-members?page=0`, {
      fixture: `membersp1`,
    }).as('members');
    cy.visit('/dashboard/band-members');
    cy.wait('@members');
    cy.get('#membersNav').click();
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      `${Cypress.env('API_URL')}/delete-member/62de8jcbfa5bc7d5027d05ed`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.get('#deletebtn').click();
    cy.visit('/dashboard/band-members');
    cy.wait('@members');
    cy.wait(500);
    cy.url().should('include', '/band-members');
  });
});
