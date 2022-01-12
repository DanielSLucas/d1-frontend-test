import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: GothamBook;
    src: url('/fonts/Gotham/GothamBook.ttf');
  }

  @font-face {
    font-family: GothamBold;
    src: url('/fonts/Gotham/GothamBold.ttf');
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    transition: background-color 0.4s, color 0.1s;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem GothamBook, sans-serif;
  }

  h1, h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  @media(min-width: 320px) {
    html {
      font-size: 70%;
    }
  }

  @media(min-width: 375px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(min-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(min-width: 1080px) {
    html {
      font-size: 100%;
    }
  }
`;
