import React from 'react';
import { mount } from 'cypress-react-unit-test';

import Button from '../../src/components/Button';

describe("Buttom component", () => {
  it("Should render a button", () => {
    mount(<Button>meu botão</Button>);
  });
})
