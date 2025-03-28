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
};

const inputClassNameFunc = (error?: string, className?: string): string =>
  clsx(
    'w-full px-3 py-2 rounded-md text-sm',
    'bg-white dark:bg-gray-800',
    'text-gray-900 dark:text-white',
    'placeholder-gray-400 dark:placeholder-gray-500',
    'border outline-none transition-colors duration-200',
    error
      ? 'border-red-500 focus:border-red-600'
      : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400',
    className,
  );

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  className = '',
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label className='text-sm font-medium text-gray-700 dark:text-gray-200'>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClassNameFunc(error, className)}
      />
      {error && <span className='text-sm text-red-500 mt-1'>{error}</span>}
    </div>
  );
};

export default memo(Input);
