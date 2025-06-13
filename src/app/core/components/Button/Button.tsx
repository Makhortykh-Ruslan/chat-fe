import React, { memo } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = memo(
  ({ children, disabled, onClick }) => {
    return (
      <button data-testid='data-test-id' disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  },
);
