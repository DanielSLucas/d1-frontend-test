import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ icon, children, ...rest }) => {
  return (
    <Container>
      <button type="button" {...rest}>
        {icon && <div>{icon}</div>}
        {children}
      </button>
    </Container>
  );
};

export default Button;
