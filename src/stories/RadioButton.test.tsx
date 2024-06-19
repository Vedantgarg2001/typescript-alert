
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton, { RadioButtonProps } from '../RadioButton';

describe('RadioButton component', () => {
  test('renders radio buttons with options', () => {
    const options = ['Male', 'Female', 'Others'];
    const onChangeMock = jest.fn();
    const { getByText } = render(<RadioButton options={options} onChange={onChangeMock} />);

    options.forEach((option) => {
      const radioElement = getByText(option);
      expect(radioElement).toBeInTheDocument();
    });
  });

  test('calls onChange handler with selected option', () => {
    const options = ['Male', 'Female', 'Others'];
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(<RadioButton options={options} onChange={onChangeMock} />);

    const femaleRadioButton = getByLabelText('Female');
    fireEvent.click(femaleRadioButton);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('Female');
  });

  test('allows only one option to be selected at a time', () => {
    const options = ['Male', 'Female', 'Others'];
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(<RadioButton options={options} onChange={onChangeMock} />);

    const maleRadioButton = getByLabelText('Male');
    const femaleRadioButton = getByLabelText('Female');

    fireEvent.click(maleRadioButton);
    fireEvent.click(femaleRadioButton);

    expect(onChangeMock).toHaveBeenCalledTimes(2);
    expect(onChangeMock).toHaveBeenLastCalledWith('Female'); 
  });
});
