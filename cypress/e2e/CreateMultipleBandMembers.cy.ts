/// <reference types='cypress' />
describe('Band Members', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('#login-usr').type('nina');
    cy.get('#password').type('nina');
    cy.contains('შემობრძანდი').click();
    cy.contains('ჯგუფის წევრები').click();
  });

  it('create band member with name -ანი-', () => {
    cy.contains('ახალი წევრი').click();
    cy.get('#name').type('ანი');
    cy.get('#instrument').type('დოლი');
    cy.get('#orbitLength').type('550');
    cy.get('#color').type('#FF0063');
    cy.get('#biography').type(
      'მე ვარ ანი და მიყვარს დოლზე დაკვრა, არა ხელები არ მეღლება'
    );
    cy.contains('დაამატე წევრი').click();
  });

  it('create band member with name -გივი-', () => {
    cy.contains('ახალი წევრი').click();
    cy.get('#name').type('გივი');
    cy.get('#instrument').type('ტამტამი');
    cy.get('#orbitLength').type('500');
    cy.get('#color').type('#3AB0FF');
    cy.get('#biography').type(
      'მე ვარ გივი და მიყვარს ტამტამზე დაკვრა, ცეცხლს ვანთებ, სადაც ვუკრავ'
    );
    cy.contains('დაამატე წევრი').click();
  });

  it('create band member with name -ბეჟო-', () => {
    cy.contains('ახალი წევრი').click();
    cy.get('#name').type('ქეთი');
    cy.get('#instrument').type('სალამური');
    cy.get('#orbitLength').type('350');
    cy.get('#color').type('#00C897');
    cy.get('#biography').type(
      'მე ვარ ბეჟო და მიყვარს სალამურზე დაკვრა, მინდორი იწყებს ბიბინს რომ ვუკრავ'
    );
    cy.contains('დაამატე წევრი').click();
  });
});
