import clsx from 'clsx';
import React, { memo } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const componentClasses = (disabled?: boolean): string =>
  clsx(
    'w-full flex gap-4 justify-center items-center text-white py-2 px-4 rounded-md transition focus:outline-none',
    disabled
      ? 'bg-blue-400 opacity-50 cursor-not-allowed'
      : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400',
  );

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={componentClasses(disabled)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
