import React, { memo } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
