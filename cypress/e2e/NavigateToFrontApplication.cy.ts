/// <reference types='cypress' />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Front Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("create band member with name -ქეთო- and change it's avatar", () => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.get('#loginBtn').click();
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('ქეთო');
    cy.get('#instrument').type('ვიოლინო');
    cy.get('#orbitLength').type('500');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ ქეთო და მიყვარს ვიოლინო');
    cy.get('#addUpdateBtn').click();
    cy.get('#editPhoto').click();
    cy.get('#uploadBtn').click();
    cy.get('input[type=file]')
      .invoke('removeClass', 'file_input_hidden')
      .attachFile('Vano.png');
    cy.get('#saveBtn').click();
    cy.wait(500);
    cy.url().should('include', '/band-members');
  });

  it('create band member with name -კოტე-', () => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.get('#loginBtn').click();
    cy.get('#membersNav').click();
    cy.get('#newMemberBtn').click();
    cy.get('#name').type('კოტე');
    cy.get('#instrument').type('გიტარა');
    cy.get('#orbitLength').type('400');
    cy.get('#color').type('#000098');
    cy.get('#biography').type('მე ვარ კოტე და მიყვარს გიტარა');
    cy.get('#addUpdateBtn').click();
    cy.url().should('include', '/band-members');
  });

  it('create social link', () => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.get('#loginBtn').click();
    cy.get('#socialsNav').click();
    cy.contains('დაამატე ახალი').click();
    cy.get('#social-name').type('twitter');
    cy.get('#url').type('https://twitter.com');
    cy.get('#addUpdateBtn').click();
  });

  it('test individual band members', () => {
    cy.wait(500);
    cy.contains('ქეთო').click({ force: true });
    cy.contains('კოტე').click({ force: true });
    cy.get('#sun').click();
  });
});
