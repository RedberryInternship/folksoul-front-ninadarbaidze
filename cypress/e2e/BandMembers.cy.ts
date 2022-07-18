/// <reference types='cypress' />

/* eslint-disable cypress/no-unnecessary-waiting */
describe('Band Members', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.get('#loginBtn').click();
    cy.get('#membersNav').click();
  });
  afterEach(() => {
    cy.wait(1000);
  });

  it('create band member with name -ემილი-', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('ემილი');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('300');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ ემილი და მიყვარს ვიოლინო');
    cy.get('#addUpdateBtn').click();
  });
  it('create band member with name -თორნიკე-', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('თორნიკე');
    cy.get('#instrument').type('გიტარა');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ თორნიკე და მიყვარს გიტარა');
    cy.get('#addUpdateBtn').click();
  });
  it('create band member with name -ვარსენი-', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('ვარსენი');
    cy.get('#instrument').type('ტამტამი');
    cy.get('#orbitLength').type('500');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ ვარსენი და მიყვარს ტამტამი');
    cy.get('#addUpdateBtn').click();
  });

  it('create band member with name -ვეფხვია-', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('ვეფხვია');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ ვეფხვია და მიყვარს ვიოლინო');
    cy.get('#addUpdateBtn').click();
  });

  it('visitors CAN ADD band member information and try uploading image', () => {
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('შიშიკო');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ მიშიკო და მიყვარს ვიოლინო');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept('POST', `${Cypress.env('url')}/new-member`, {
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
      `${Cypress.env('url')}/addd-member`,

      {
        statusCode: 409,
      }
    );
    cy.get('#addUpdateBtn').click();
    cy.url().should('not.be', '/band-members');
  });

  it('visitors CAN EDIT band members', () => {
    cy.get('#membersNav').click();
    cy.get('#yellowButton').click();
    cy.get('#name').clear().type('იზოლდა');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('url')}/edit-social/id`,

      {
        statusCode: 200,
      }
    );
    cy.get('#addUpdateBtn').click();
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
    cy.get('#uploadBtn').click();
    cy.get('#saveBtn').click();
    cy.wait(1000);
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე ჯგუფის წევრის ავატარი').should('be.visible');
  });

  it('view social image', () => {
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

  it('visitors CAN EDIT band member information', () => {
    cy.get('#membersNav').click();
    cy.get('#yellowButton').click();
    cy.get('#name').type('ნინელი');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      `${Cypress.env('url')}/edit-member/id`,

      {
        statusCode: 200,
      }
    );
    cy.get('#addUpdateBtn').click();
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
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      `${Cypress.env('url')}/delete-member/id`,

      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.get('#cancelbtn').click();
    cy.url().should('include', '/band-members');
  });

  it('visitors CAN DELETE band member information', () => {
    cy.deleteBandMember('#membersNav');
    cy.wait(2000);
    cy.deleteBandMember('#membersNav');
    cy.deleteBandMember('#membersNav');
    cy.deleteBandMember('#membersNav');
  });
});
