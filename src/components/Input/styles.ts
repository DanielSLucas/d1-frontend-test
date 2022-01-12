import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${props => props.theme.colors.lighterBackground};

  border: 1px solid ${props => props.theme.colors.lighterBorder};
  border-radius: 0.5rem;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus-within {
    box-shadow: 5px 5px 5px ${props => props.theme.colors.shadow};
  }

  input {
    width: 100%;
    height: 100%;

    border: none;
    background: transparent;
  }

  & > div {
    color: ${props => props.theme.colors.secondary};
    margin-right: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
