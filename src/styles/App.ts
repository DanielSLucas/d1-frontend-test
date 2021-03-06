import styled, { css, keyframes } from 'styled-components';

type AsideProps = {
  isShowingFiltersMenu: boolean;
};

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;

  overflow-y: scroll;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 10%;

  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    height: 100%;
    width: 100%;

    margin-top: 4rem;

    @media (min-width: 600px) {
      margin-top: 1rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      align-items: flex-start;
    }

    h1 {
      font: 1rem GothamBold;
    }

    & > div {
      width: 100%;

      margin-top: 2rem;

      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;

      @media (min-width: 768px) {
        justify-content: flex-start;
        flex-wrap: nowrap;
      }
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

export const Header = styled.header`
  width: 100%;

  padding: 2rem 0;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
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
  margin-right: 2rem;

  & > div:first-child {
    position: relative;

    height: 1.5rem;
    width: 1.5rem;

    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;

    font-family: GothamBold;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.white};

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
      z-index: 98;
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
        z-index: 99;
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
  width: 100%;
  max-width: 30rem;
  height: 2.5rem;

  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }

  & > div {
    width: 100%;
    height: 100%;
  }

  & > div:first-child {
    margin-top: 1rem;

    @media (min-width: 600px) {
      margin-right: 1rem;
      width: 65%;
      margin-top: 0;
    }
  }

  & > div:last-child {
    margin-top: 0.5rem;
    white-space: nowrap;

    @media (min-width: 600px) {
      width: 35%;
      margin-top: 0;
    }
  }
`;

export const Aside = styled.aside<AsideProps>`
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;

  font-size: 1rem;

  @media (max-width: 500px) {
    background: ${props => props.theme.colors.lighterBackground};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(6, auto);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(9, auto);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }

  button {
    border: 0;
    background: 0;
    text-align: start;
    color: ${props => props.theme.colors.text};
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

export const TableContainer = styled.div`
  width: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    visibility: hidden;
  }

  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    height: fit-content;
    max-width: 60rem;

    overflow-x: auto;
    margin-top: 2rem;

    @media (min-width: 768px) {
      margin-left: 2rem;
      margin-top: 0;
    }
  }
`;

export const ResultsTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  width: 100%;

  text-align: start;

  .centeredText {
    text-align: center;
    padding: 0;
  }

  thead {
    tr th {
      text-align: start;
      font-weight: normal;
      color: ${props => props.theme.colors.complementaryText};

      padding-left: 1rem;
    }
  }

  tbody {
    tr {
      background: ${props => props.theme.colors.lighterBackground};
      height: fit-content;
      td {
        height: 2rem;
        padding: 1rem;
        width: 20%;
      }

      td.nameColumn {
        font-family: GothamBold;
        width: 40%;
      }

      td.statusColumn {
        display: flex;
        div {
          margin-right: 0.5rem;
        }
      }

      td.shimmer {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 3rem;
      }
    }
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -60rem 0;
  }

  100% {
    background-position: 60rem 0;
  }
`;

export const FakeTableRow = styled.div`
  width: 100%;
  height: 100%;

  ${props =>
    props.theme.name === 'default'
      ? css`
          background: linear-gradient(
            to right,
            #f6f7f8 0%,
            #edeef1 20%,
            #f6f7f8 40%,
            #f6f7f8 100%
          );
        `
      : css`
          background: linear-gradient(
            to right,
            #3f3852 0%,
            #352f44 20%,
            #3f3852 40%,
            #3f3852 100%
          );
        `}

  animation: ${shimmerAnimation} 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 900;
  top: 0;
  left: 0;

  background: ${props => props.theme.colors.modalBackground};

  display: flex;
  justify-content: center;

  animation: ${fadeIn} 0.5s;
`;

export const Modal = styled.div`
  width: 24rem;
  height: fit-content;

  background: ${props => props.theme.colors.lighterBackground};

  margin-top: 10rem;
  padding: 1.5rem 2rem;

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;

  box-shadow: 1px 1px 10px ${props => props.theme.colors.shadow};

  font-size: 0.8125rem;

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      font-family: GothamBold;
      font-size: 0.8125rem;
      color: ${props => props.theme.colors.complementaryText};
    }

    hr {
      border: 1px solid ${props => props.theme.colors.darkerBackground};
      margin: 1rem 0;
    }
  }

  section > div {
    p {
      margin-bottom: 0.5rem;
      label {
        font-family: GothamBold;
      }
    }

    & > div {
      margin-bottom: 0.25rem;
    }

    span {
      color: ${props => props.theme.colors.complementaryText};
    }
  }

  footer {
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        border: none;
        border-radius: 0.25rem;
        background: none;
        font-family: GothamBold;
        padding: 0.5rem;
      }

      button:first-child {
        margin-right: 1rem;
        color: ${props => props.theme.colors.secondary};
      }

      button:last-child {
        color: ${props => props.theme.colors.complementaryText};
      }

      button:hover {
        background: ${props => props.theme.colors.background};
      }
    }
  }
`;
