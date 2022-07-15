import 'cypress-file-upload';
/* eslint-disable cypress/no-unnecessary-waiting */

Cypress.Commands.add('deleteBandMember', (membersNav) => {
  cy.get(membersNav).click();
  Cypress.on('uncaught:exception', () => false);
  cy.intercept(
    'DELETE',
    `${Cypress.env('url')}/delete-member/id`,

    {
      statusCode: 200,
    }
  );
  cy.get('#redButton').click();
  cy.get('#deletebtn').click();
  cy.wait(500);
  cy.url().should('include', '/band-members');
});
