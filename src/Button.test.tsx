
import React from 'react';
import { render } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button component', () => {
  test('renders button with label', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);

    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<Button label="Click me" onClick={onClickMock} />);

    const buttonElement = container.querySelector('button');
    if (buttonElement) {
      buttonElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
