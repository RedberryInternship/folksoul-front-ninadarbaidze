import './commands';
import '@cypress/code-coverage/support';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      bandMembers(value: string): Chainable<Element>;
      bands(value: string): Chainable<Element>;
      socials(value: string): Chainable<Element>;
      bandMembersAll(value: string): Chainable<Element>;
      socialsAll(value: string): Chainable<Element>;
    }
  }
}
