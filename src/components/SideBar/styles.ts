import styled from 'styled-components';

export const Container = styled.nav`
  height: 100%;
  width: 5rem;

  background: ${props => props.theme.colors.primary};
  color: #fff;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  font-size: 1.5rem;
`;

export const Brand = styled.div`
  height: 3rem;
  width: 3rem;
`;

export const Menu = styled.ul`
  width: 2rem;
  height: fit-content;

  list-style: none;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    margin-top: 1.5rem;
    div {
      height: 2px;
    }
  }
`;

export const MenuItem = styled.li`
  margin-top: 1.5rem;

  a:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const SecondaryMenu = styled.ul`
  width: 2rem;
  height: fit-content;

  list-style: none;
  margin-top: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LinearGradientLine = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00e1ff 0%, #117eff 100%);
`;
