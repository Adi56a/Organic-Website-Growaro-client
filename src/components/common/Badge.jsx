import React from 'react';

/**
 * Reusable Badge component for category tags, featured labels, and specifications.
 * Variants: 'green', 'blue', 'amber', 'neutral'
 */
export const Badge = ({
  children,
  variant = 'green',
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()} {...props}>
      {Icon && <Icon size={12} />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
