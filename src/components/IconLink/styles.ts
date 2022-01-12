import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

const AppearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 0;
  left: 170%;

  animation: ${AppearFromRight} 0.5s;

  height: 2rem;
  width: fit-content;

  padding: 0 0.5rem;

  border-radius: 0.5rem;

  background: ${props => props.theme.colors.lighterBackground};
  box-shadow: 2px 2px 10px ${props => props.theme.colors.shadow};

  color: ${props => props.theme.colors.complementaryText};
  font-family: GothamBold;
  font-size: 0.75rem;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;

  /**Fazer triângulo */
  &::before {
    content: '';
    border-style: solid;
    border-color: white transparent;
    border-width: 6px 6px 0 6px;
    bottom: 20px;
    top: 45%;
    position: absolute;
    left: -0.55rem;
    transform: rotate(90deg);
  }
`;
