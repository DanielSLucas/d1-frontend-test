import React from 'react';
import { mount } from '@cypress/react';
import { ThemeProvider } from 'styled-components';
import { SearchIcon } from 'react-line-awesome';

import Input from '../../src/components/Input';
import defaultTheme from '../../src/styles/themes/default';

describe('Input Component', () => {
  it('Should render an input with "Buscar" as placeholder', () => {
    mount(
      <ThemeProvider theme={defaultTheme} >
        <Input placeholder='Buscar'/>
      </ThemeProvider>
    );

    cy.get('input')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Buscar');
  });

  it('Should render an input with an icon', () => {
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

    mount(
      <ThemeProvider theme={defaultTheme} >
        <Input icon={<SearchIcon />} placeholder='Buscar'/>
      </ThemeProvider>
    );

    cy.get('input')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Buscar');


    cy.get(".la-search").should('be.visible');

  });

  it('Should have a box shadow when focused', () => {
    mount(
      <ThemeProvider theme={defaultTheme} >
        <Input placeholder='Buscar'/>
      </ThemeProvider>
    );

    cy.get('input').click();

    cy.get('input')
      .parent('div')
      .should(
        'have.css',
        'box-shadow',
        'rgba(0, 0, 0, 0.15) 5px 5px 5px 0px'
      );
  });
});
