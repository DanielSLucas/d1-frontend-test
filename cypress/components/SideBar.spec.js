import React from 'react';
import { mount } from '@cypress/react';
import { ThemeProvider } from 'styled-components';

import SideBar from '../../src/components/SideBar';
import defaultTheme from '../../src/styles/themes/default';

describe('Input Component', () => {
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
  it('Should render a Sidebar with 10 icon links/buttons', () => {
    mount(
      <ThemeProvider theme={defaultTheme} >
        <SideBar />
      </ThemeProvider>
    );

    cy.get('nav').should('be.visible');

    cy.get('.la')
      .should('be.visible')
      .should('have.length', 10);
  });
});
