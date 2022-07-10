/// <reference types='cypress' />
describe('Social Links', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.contains('შემობრძანდი').click();
    cy.contains('სოციალური ბმულები').click();
  });
  afterEach(() => {
    cy.wait(500);
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

  it('visitors CAN NOT ADD socials', () => {
    cy.contains('დაამატე ახალი').click();
    cy.get('#social-name').type('google');
    cy.get('#url').type('https://google.com');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'POST',
      'https://folksoul-api.nina.redberryinternship.ge/addd-social',
      {
        statusCode: 422,
      }
    );
    cy.contains('დაამატე სოციალური').click();
    // cy.url().should('include', '/socials');
  });

  it('visitors CAN NOT EDIT social links', () => {
    cy.get('#yellowButton').click();
    cy.get('#social-name').clear().type('google');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      'https://folksoul-api.nina.redberryinternship.ge/edit-social/id',
      {
        statusCode: 422,
      }
    );
    cy.contains('განაახლე').click();
  });

  //boloshi iyo
  it('visitors CAN EDIT social links', () => {
    cy.get('#yellowButton').click();
    cy.get('#social-name').clear().type('Facebook');
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      'https://folksoul-api.nina.redberryinternship.ge/edit-social/id',
      {
        statusCode: 200,
      }
    );
    cy.contains('განაახლე').click();
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
    cy.contains('დაამატე სოციალური').click();
    cy.contains('სავალდებულო').should('be.visible');
    cy.contains('გადი უკან').click();
    cy.url().should('include', 'dashoboard/socials');
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
    cy.url().should('include', '/socials');
  });
});
