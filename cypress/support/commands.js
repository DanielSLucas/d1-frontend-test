import "cypress-real-events/support";

Cypress.Commands.add('clickButton', (btn) => {
  cy.contains(btn).first().click()
});
