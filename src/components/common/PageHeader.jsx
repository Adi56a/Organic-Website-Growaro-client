import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Reusable Subpage Header Banner with Breadcrumbs and Eyebrow.
 */
export const PageHeader = ({
  eyebrow = 'Corasun Agro',
  title,
  description,
  breadcrumbs = [],
  variant = 'green', // 'green' or 'blue'
  className = ''
}) => {
  const isBlue = variant === 'blue';
  
  return (
    <div
      style={{
        paddingTop: 'clamp(7rem, 12vw, 9rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        background: isBlue
          ? 'linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)'
          : 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
        overflow: 'hidden'
      }}
      className={className}
    >
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-4)' }}>
          <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            <li>
              <Link to="/" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}>
                Home
              </Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <ChevronRight size={12} color="var(--color-text-light)" />
                {item.to ? (
                  <Link to={item.to} style={{ color: 'var(--color-text-muted)' }}>
                    {item.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--color-primary-dark)', fontWeight: 600 }}>{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Eyebrow */}
        {eyebrow && (
          <span className={`eyebrow ${isBlue ? 'eyebrow-blue' : ''}`}>
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h1 className="heading-1" style={{ maxWidth: '850px', marginBottom: description ? 'var(--space-3)' : 0 }}>
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="lead" style={{ maxWidth: '720px' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
