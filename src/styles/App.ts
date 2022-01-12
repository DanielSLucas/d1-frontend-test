import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  padding: 0 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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
    width: 18.5rem;
  }

  & > div:last-child {
    width: 9.375rem;
    white-space: nowrap;
  }
`;
