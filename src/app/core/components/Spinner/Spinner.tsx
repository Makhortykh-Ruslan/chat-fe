import clsx from 'clsx';
import React from 'react';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
};

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-4',
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'border-blue-600',
  className = '',
}) => {
  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-t-transparent',
        sizeClasses[size],
        color,
        className,
      )}
    />
  );
};
