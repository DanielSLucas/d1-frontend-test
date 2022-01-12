import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  button {
    width: 100%;
    height: 100%;

    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(#117eff, #117eff);
    transition: background-image 1s ease-in-out !important;

    color: ${props => props.theme.colors.white};

    border: none;
    border-radius: 0.25rem;

    &:hover {
      background-image: linear-gradient(90deg, #00e1ff, #117eff);
    }

    & > div {
      margin-right: 0.5rem;
    }
  }
`;
