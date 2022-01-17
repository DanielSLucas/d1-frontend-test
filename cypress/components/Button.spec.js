import React from 'react';
import { mount } from '@cypress/react';
import { ThemeProvider } from 'styled-components';
import { PlusIcon } from 'react-line-awesome';

import Button from '../../src/components/Button';
import defaultTheme from '../../src/styles/themes/default';

describe('Button Component', () => {
  it('Should render a blue button', () => {
    mount(
      <ThemeProvider theme={defaultTheme} >
        <Button>Botao</Button>
      </ThemeProvider>
    );

    cy.get('button').should('be.visible').should('have.text', 'Botao');

    cy.contains('Botao')
      .should(
        'have.css',
        'background-image',
        'linear-gradient(rgb(17, 126, 255), rgb(17, 126, 255))'
      );
  });

  it('Should render a button with an icon', () => {
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
        <Button icon={<PlusIcon />} >Botao</Button>
      </ThemeProvider>
    );

    cy.get('button').should('be.visible').should('have.text', 'Botao');

    cy.contains('Botao')
      .should(
        'have.css',
        'background-image',
        'linear-gradient(rgb(17, 126, 255), rgb(17, 126, 255))'
      );

    cy.get(".la-plus").should('be.visible');
  });

  it('Should change button backgroun-image on hover', () => {
    mount(
      <ThemeProvider theme={defaultTheme} >
        <Button>Botao</Button>
      </ThemeProvider>
    );

    cy.get('button').should('be.visible').should('have.text', 'Botao');

    cy.contains('Botao')
      .should(
        'have.css',
        'background-image',
        'linear-gradient(rgb(17, 126, 255), rgb(17, 126, 255))'
      );

    cy.contains('Botao').realHover();

    cy.contains('Botao')
      .should(
        'have.css',
        'background-image',
        'linear-gradient(90deg, rgb(0, 225, 255), rgb(17, 126, 255))'
      );
  });
});
