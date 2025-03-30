import clsx from 'clsx';
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

const componentClasses = (invalid?: boolean, disabled?: boolean): string =>
  clsx(
    'border-red-500 block w-full px-4 py-2 rounded-md shadow-sm transition focus:outline-none',
  );

export const Input: React.FC<InputProps> = ({
  label = '',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  disabled,
}) => {
  return (
    <div className='w-full grid gap-1'>
      {label && <label>{label}</label>}
      <input
        className={componentClasses(!!error, disabled)}
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
