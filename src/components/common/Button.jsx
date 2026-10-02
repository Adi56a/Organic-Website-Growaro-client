import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component supporting internal Link (to), external href, or regular button actions.
 * Variants: 'primary', 'secondary', 'outline', 'white'
 * Sizes: 'sm', 'md', 'lg'
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = `btn-${variant}`;
  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
