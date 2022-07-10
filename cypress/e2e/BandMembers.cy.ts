/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Band Members', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.contains('შემობრძანდი').click();
    cy.contains('ჯგუფის წევრები').click();
  });
  afterEach(() => {
    cy.wait(500);
  });

  it('create band member with name -ვეფხვია-', () => {
    cy.contains('ახალი წევრი').click();
    cy.get('#name').type('ვეფხვია');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ ვეფხვია და მიყვარს ვიოლინო');
    cy.contains('დაამატე წევრი').click();
  });

  it('visitors CAN ADD band member information and try uploading image', () => {
    cy.contains('ჯგუფის წევრები').click();
    cy.contains('ახალი წევრი').click();
    cy.get('#name').type('შიშიკო');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ მიშიკო და მიყვარს ვიოლინო');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      'https://folksoul-api.nina.redberryinternship.ge/new-member',
      {
        statusCode: 201,
      }
    );
    cy.contains('დაამატე წევრი').click();
    cy.get('#editPhoto').click();
    cy.contains('ატვირთე').click();
    cy.contains('შეინახე').click();
    cy.url().should('include', '/band-members');
  });

  it('visitors CAN NOT ADD band members', () => {
    cy.contains('ახალი წევრი').click();
    cy.get('#name').type('ვეფხვია');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ მიშიკო და მიყვარს ვიოლინო');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      'https://folksoul-api.nina.redberryinternship.ge/addd-member',
      {
        statusCode: 409,
      }
    );
    cy.contains('დაამატე წევრი').click();
    cy.url().should('not.be', '/band-members');
  });

  it('visitors CAN EDIT band members', () => {
    cy.get('#yellowButton').click();
    cy.get('#name').clear().type('იზოლდა');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      'https://folksoul-api.nina.redberryinternship.ge/edit-social/id',
      {
        statusCode: 200,
      }
    );
    cy.contains('განაახლე').click();
    cy.url().should('contain', '/band-members');
  });

  it('upload band member image', () => {
    cy.contains('ჯგუფის წევრები').click();
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('Vano.png');
    cy.contains('ატვირთე').click();
    cy.contains('შეინახე').click();
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე ჯგუფის წევრის ავატარი').should('be.visible');
  });

  it('view social image', () => {
    cy.get('#editPhoto').click();
    cy.contains('შეცვალე ჯგუფის წევრის ავატარი').should('be.visible');
    cy.get('#closeButton').click();
  });

  it('visitors CAN see band member detailed information and use pagination', () => {
    cy.contains('ჯგუფის წევრები').click();
    cy.get('#greenButton').click();
    cy.get('#closeButton').click();
    cy.get('#1').click();
    cy.url().should('include', '/band-members');
  });

  it('visitors CAN EDIT band member information', () => {
    cy.contains('ჯგუფის წევრები').click();
    cy.get('#yellowButton').click();
    cy.get('#name').type('ნინელი');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      'https://folksoul-api.nina.redberryinternship.ge/edit-member/id',
      {
        statusCode: 200,
      }
    );
    cy.contains('განაახლე').click();
  });

  it('visitors CAN NOT ADD band member information', () => {
    cy.contains('ჯგუფის წევრები').click();
    cy.contains('ახალი წევრი').click();
    cy.contains('დაამატე წევრი').click();
    cy.contains('სავალდებულო').should('be.visible');
    cy.contains('გადი უკან').click();
    cy.url().should('include', 'dashoboard/band-members');
  });

  it('visitors CAN DELETE band member information', () => {
    cy.contains('ჯგუფის წევრები').click();
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      'https://folksoul-api.nina.redberryinternship.ge/delete-member/id',
      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.url().should('include', '/band-members');
  });
});
