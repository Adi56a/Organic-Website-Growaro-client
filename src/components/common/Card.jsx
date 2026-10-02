import React from 'react';

/**
 * Reusable Card container supporting solid, glassmorphic, and dark variants.
 * Variants: 'default', 'glass', 'dark'
 */
export const Card = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const variantClass = variant === 'glass' ? 'card-glass' : variant === 'dark' ? 'card-dark' : '';
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`card ${variantClass} ${interactiveClass} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
