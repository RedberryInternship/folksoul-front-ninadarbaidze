/// <reference types='cypress' />
describe('Social Links', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.contains('შემობრძანდი').click();
    cy.contains('სოციალური ბმულები').click();
  });

  it('visitors CAN ADD socials and try uploading image', () => {
    cy.contains('დაამატე ახალი').click();
    cy.get('#social-name').type('Google');
    cy.get('#url').type('https://google.com');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      'https://folksoul-api.nina.redberryinternship.ge/add-social',
      {
        statusCode: 201,
      }
    );
    cy.contains('დაამატე სოციალური').click();
    cy.get('#editPhoto').click();
    cy.contains('ატვირთე').click();
    cy.contains('შეინახე').click();
    cy.url().should('include', '/socials');
  });

  it('visitors CAN DELETE social link', () => {
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'DELETE',
      'https://folksoul-api.nina.redberryinternship.ge/delete-member/id',
      {
        statusCode: 200,
      }
    );
    cy.get('#redButton').click();
    cy.wait(400);
    cy.url().should('include', '/socials');
  });

  it('upload social image', () => {
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('Vano.png');
    cy.contains('ატვირთე').click();
    cy.contains('შეინახე').click();
  });

  it('visitors CAN EDIT social links', () => {
    cy.get('#yellowButton').click();
    cy.get('#social-name').type('Google');
    cy.intercept(
      'PATCH',
      'https://folksoul-api.nina.redberryinternship.ge/edit-social/id',
      {
        statusCode: 200,
      }
    );
    cy.contains('განაახლე').click();
  });

  it('visitors CAN NOT ADD social links', () => {
    cy.contains('დაამატე ახალი').click();
    cy.contains('დაამატე სოციალური').click();
    cy.contains('სავალდებულო').should('be.visible');
  });
});
