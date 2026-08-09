describe('Chatbox app - E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the pseudo form on the home page', () => {
    cy.get('label[for="pseudo"]').should('contain.text', 'Entrez votre pseudo');
    cy.get('input#pseudo').should('have.attr', 'required');
    cy.get('button[type="submit"]').should('contain.text', 'GO');
  });

  it('navigates to the chatbox page after submitting a pseudo', () => {
    const pseudo = 'TestUser';
    cy.get('input#pseudo').type(pseudo);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', `/chatbox/${pseudo}`);
    cy.contains('h2', 'Chatbox').should('be.visible');
  });

  it('loads the chatbox page directly', () => {
    cy.visit('/chatbox/direct-test');
    cy.contains('h2', 'Chatbox').should('be.visible');
  });
});
