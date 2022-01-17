import React from 'react';
import { mount } from '@cypress/react';
import { ThemeProvider } from 'styled-components';
import { PlusIcon, SearchIcon } from 'react-line-awesome';

import IconWithTooltip from '../../src/components/IconWithTooltip';
import defaultTheme from '../../src/styles/themes/default';

describe('IconWithTooltip Component', () => {
  beforeEach(() => {
    const iconsLink1 = document.createElement('link');
    iconsLink1.setAttribute('rel', 'stylesheet');
    iconsLink1.setAttribute(
      'href',
      'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css'
    );

    const iconsLink2 = document.createElement('link');
    iconsLink2.setAttribute('rel', 'stylesheet');
    iconsLink2.setAttribute(
      'href',
      'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
    );

    if (document.head) {
      document.head.appendChild(iconsLink1);
      document.head.appendChild(iconsLink2);
    }
  });
  it('Should render an icon link that, on hover, shows a tooltip with the text "buscar"', () => {
    mount(
      <ThemeProvider theme={defaultTheme} >
        <IconWithTooltip iconColor='black' altText='Buscar' >
          <SearchIcon />
        </IconWithTooltip>
      </ThemeProvider>
    );

    cy.get('.la-search')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('a')
      .should('be.visible')
      .should('have.attr', 'href', '/#');

    cy.get('.la-search').realHover();

    cy.get('span')
      .should('be.visible')
      .should('have.text', 'Buscar');
  });

  it('Should render an icon button that, on hover, shows a tooltip with the text "adicionar"', () => {
    mount(
      <ThemeProvider theme={defaultTheme} >
        <IconWithTooltip iconColor='black' altText='Adicionar' type='button' >
          <PlusIcon />
        </IconWithTooltip>
      </ThemeProvider>
    );

    cy.get('.la-plus')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('button')
      .should('be.visible')

    cy.get('button').realHover();

    cy.get('span')
      .should('be.visible')
      .should('have.text', 'Adicionar');
  });
});
