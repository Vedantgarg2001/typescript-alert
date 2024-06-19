
import React, { useState } from 'react';


export interface RadioButtonProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div >
      {options.map((option) => (
        <label key={option} >
          <input
            type="radio"
            name="radio-options"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          <span  />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
