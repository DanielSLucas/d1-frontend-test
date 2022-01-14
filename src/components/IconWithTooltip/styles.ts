import styled, { css, keyframes } from 'styled-components';

type TooltipProps = {
  isHovered: boolean;
};

export const Container = styled.div`
  position: relative;

  button {
    border: none;
    background: none;

    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
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

const DisappearFromLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(10px);
  }
`;

export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  top: 0;
  left: 170%;

  ${props =>
    props.isHovered
      ? css`
          animation: ${AppearFromRight} 0.5s;
        `
      : css`
          animation: ${DisappearFromLeft} 0.5s;
        `}

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
    border-color: ${props => props.theme.colors.lighterBackground} transparent;
    border-width: 6px 6px 0 6px;
    bottom: 20px;
    top: 45%;
    position: absolute;
    left: -0.55rem;
    transform: rotate(90deg);
  }
`;
