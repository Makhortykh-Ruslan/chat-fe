import React, { memo } from 'react';

type ButtonProps = {
  name: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  name = '',
  disabled,
  onClick,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};

export default memo(Button);
