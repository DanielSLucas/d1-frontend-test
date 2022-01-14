/// <reference types="cypress" />

describe("Integration test", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get('table').should('be.visible');

    cy.get("thead").contains('th', 'Nome');
    cy.get("thead").contains('th', 'Destinatários');
    cy.get("thead").contains('th', 'Sucesso');
    cy.get("thead").contains('th', 'Status');

    cy.get('tbody').children().should('have.length', 8)
  });

  it('Should filter journeys based on selected status', () => {
    cy.clickButton('Enviando');

    cy.get('tbody').children().should('have.length', 2)

    cy.clickButton('Configurando');

    cy.get('tbody').children().should('have.length', 3)
  });

  it('Should filter journeys based on user search', () => {
    cy.get('input').type('ção');

    cy.get('tbody')
      .children()
      .should('have.length', 5)
      .should('include.text', 'ção');
  });

  it('Should open a modal when clicking "nova jornada" button', () => {
    cy.clickButton('Nova Jornada');

    cy.get('#jorneyName').should('be.visible');

    cy.get(':nth-child(2) > p')
      .should('have.text', 'Dê um nome para essa Jornada');

    cy.get('section > :nth-child(2) > span')
      .should('have.text', 'Você poderá alterar essa informação depois.')

    cy.get('footer > div > :nth-child(1)').should('have.text', 'Continuar');
    cy.get('footer > div > :nth-child(2)').should('have.text', 'Cancelar');

    cy.clickButton('Continuar');

    cy.get('#jorneyName').should('not.exist');
  })
})
