/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Front Application', () => {
  beforeEach(() => {
    cy.bandMembersAll('membersAll');
    cy.visit('/');
  });

  it('test individual band members', () => {
    cy.bandMembersAll('membersAll');
    cy.socialsAll('socialsAll');
    cy.wait(500);
    cy.get('#62de83dbfa5bc7d5027d05f2').click({ force: true });
    cy.get('#62de83cbfa5bc7d50f7d05ed').click({ force: true });
    cy.get('#sun').click();
  });
});
