import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ type = 'text', placeholder, value, name, onChange, label }) => {
  return(
    <div className="field">
      <div className="control">
        <label htmlFor={name}>{label}</label>
        <input 
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          required
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default Input;