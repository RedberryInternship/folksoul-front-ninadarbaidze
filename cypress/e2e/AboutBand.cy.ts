/// <reference types='cypress' />
describe('Social Links', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.contains('შემობრძანდი').click();
    cy.contains('ბენდის შესახებ').click();
  });
  afterEach(() => {
    cy.wait(500);
  });

  it('upload band image', () => {
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.get('#editPhoto').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('tamar.png');
    cy.contains('ატვირთე').click();
    cy.contains('შეინახე').click();
    cy.url().should('include', '/about-band');
  });

  it('visitors CAN EDIT band about', () => {
    cy.get('#editIcon').click();
    cy.contains('გადი უკან').click();
    cy.get('#editIcon').click();
    cy.get('#about').type(
      'დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში.'
    );
    Cypress.on('uncaught:exception', () => false);
    cy.intercept(
      'PATCH',
      'https://folksoul-api.nina.redberryinternship.ge/edit-band/id',
      {
        statusCode: 200,
      }
    );
    cy.contains('შეინახე').click();
    cy.wait(500);
    cy.url().should('include', '/about-band');
    cy.get('#editPhoto').click();
    cy.get('#closeButton').click();
    cy.url().should('include', '/about-band');
  });
});
