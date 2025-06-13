import React, { memo } from 'react';

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  className?: string;
  disabled?: boolean;
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
    <div className='w-full grid gap-1'>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className='mt-1 text-sm text-red-600'>{error}</span>}
    </div>
  );
};

export default memo(Input);
