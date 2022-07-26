/// <reference types="cypress" />
import 'cypress-file-upload';
/* eslint-disable cypress/no-unnecessary-waiting */

Cypress.Commands.add('bandMembers', (page) => {
  cy.intercept('GET', `${Cypress.env('API_URL')}/band-members?page=${page}`, {
    fixture: `membersp${page}`,
  }).as('members');
  cy.visit('/dashboard/band-members');
  cy.wait('@members');
});

Cypress.Commands.add('bandMembersAll', (fixture) => {
  cy.intercept('GET', `${Cypress.env('API_URL')}/band-members`, {
    fixture: `${fixture}`,
  }).as('members');
  cy.visit('/');
  cy.wait('@members');
});

Cypress.Commands.add('socialsAll', (fixture) => {
  cy.intercept('GET', `${Cypress.env('API_URL')}/social-media`, {
    fixture: `${fixture}`,
  }).as('socialsAll');
  cy.visit('/');
  cy.wait('@socialsAll');
});

Cypress.Commands.add('socials', (page) => {
  cy.intercept('GET', `${Cypress.env('API_URL')}/social-media?page=${page}`, {
    fixture: `socialsp${page}`,
  }).as('socials');
  cy.visit('/dashboard/socials');
  cy.wait('@socials');
});

Cypress.Commands.add('bands', (fixture) => {
  cy.intercept('GET', `${Cypress.env('API_URL')}/bands`, {
    fixture: `${fixture}`,
  }).as('band');
  cy.visit('/dashboard/about-band');
  cy.wait('@band');
});
