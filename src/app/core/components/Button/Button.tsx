import clsx from 'clsx';
import React, { memo } from 'react';

type ButtonProps = {
  name: string;
  disabled?: boolean;
  onClick: () => void;
};

const buttonClassNameFunc = (isValid?: boolean): string =>
  clsx(
    'w-full py-2 rounded transition',
    isValid
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed',
  );

export const Button: React.FC<ButtonProps> = ({
  name = '',
  disabled,
  onClick,
}) => {
  return (
    <button className={buttonClassNameFunc(disabled)} onClick={onClick}>
      {name}
    </button>
  );
};

export default memo(Button);
