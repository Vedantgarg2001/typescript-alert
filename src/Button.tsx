
import React from 'react';

export interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} >
      {label}
    </button>
  );
};

export default Button;
