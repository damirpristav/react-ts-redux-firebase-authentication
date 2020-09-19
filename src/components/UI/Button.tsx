import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, className, onClick, type, disabled }) => {
  return(
    <button type={type} className={`button ${className}`} onClick={onClick} disabled={disabled}>{text}</button>
  );
}

export default Button;