import React, { memo } from 'react';

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  label = '',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default memo(Input);
