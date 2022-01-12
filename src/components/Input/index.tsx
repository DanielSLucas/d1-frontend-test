import React, { InputHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      {icon && <div>{icon}</div>}

      <input {...rest} />
    </Container>
  );
};

export default Input;
