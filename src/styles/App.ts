import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    height: 100%;
    width: 100%;

    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font: 1rem GothamBold;
    }

    & > div {
      height: 100%;
      width: 100%;

      margin-top: 2rem;

      display: flex;
      flex-direction: row;
    }

    .todas {
      color: #d190dd;
    }

    .enviando {
      color: #c1ca4f;
    }

    .ativadas {
      color: #35c667;
    }

    .configurando {
      color: #3fa8f4;
    }

    .ociosa {
      color: #ebbd3e;
    }

    .concluida {
      color: #9fabd5;
    }
  }
`;

export const Header = styled.div`
  width: 100%;

  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;

  & > div:first-child {
    position: relative;

    height: 1.5rem;
    width: 1.5rem;

    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;

    font-family: GothamBold;
    font-size: 0.875rem;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 1.5rem;

    & > span {
      display: none;
    }

    &:hover > span {
      animation: ${fadeIn} 0.5s;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem 1rem;

      background: ${props => props.theme.colors.primary};

      position: absolute;

      left: 130%;
      z-index: 998;
      white-space: nowrap;

      border-radius: 0.5rem;

      &::before {
        content: '';
        border-style: solid;
        border-color: ${props => props.theme.colors.primary} transparent;
        border-width: 6px 6px 0 6px;
        bottom: 20px;
        top: 42%;
        position: absolute;
        z-index: 999;
        left: -6%;
        transform: rotate(90deg);
      }
    }
  }

  & > div:last-child {
    position: relative;

    width: 5.5rem;
    height: 2rem;

    background: ${props => props.theme.colors.lighterBackground};

    border: 1px solid ${props => props.theme.colors.lighterBorder};
    border-radius: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderRightSide = styled.div`
  width: 35%;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > div:first-child {
    margin-right: 1rem;
    width: 65%;
  }

  & > div:last-child {
    width: 35%;
    white-space: nowrap;
  }
`;

export const Aside = styled.aside`
  height: fit-content;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;

  font-size: 1rem;

  button {
    border: 0;
    background: 0;
    text-align: start;
  }

  span {
    height: 1.5rem;
    width: 1.5rem;

    background: ${props => props.theme.colors.darkerBackground};

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${props => props.theme.colors.lighterBorder};
    border-radius: 50%;

    font-family: GothamBold;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.complementaryText};
  }

  button.selected {
    color: ${props => props.theme.colors.secondary};
    font-family: GothamBold;
  }

  span.selected {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
  }
`;

export const GridItem = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
`;

export const ResultsTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  width: 100%;
  max-width: 55rem;
  height: fit-content;

  margin: 0 auto 0 16rem;
  text-align: start;

  .centeredText {
    text-align: center;
    padding: 0;
  }

  thead {
    /* height: 2rem; */

    tr th {
      text-align: start;
      font-weight: normal;
      color: ${props => props.theme.colors.complementaryText};

      padding-left: 1rem;
    }
  }

  tbody {
    height: fit-content;

    tr {
      td {
        background: ${props => props.theme.colors.lighterBackground};
        padding: 1rem;
        width: 20%;
      }

      td:first-child {
        font-family: GothamBold;
        width: 40%;
      }
    }
  }
`;
