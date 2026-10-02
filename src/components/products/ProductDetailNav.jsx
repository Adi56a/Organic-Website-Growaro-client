import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import { products } from '../../data/products';

export const ProductDetailNav = ({ currentSlug }) => {
  const currentIndex = products.findIndex((p) => p.slug === currentSlug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : products[products.length - 1];
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : products[0];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBlock: 'var(--space-6)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        marginBlock: 'var(--space-8)'
      }}
    >
      {/* Previous Product */}
      {prevProduct && (
        <Link
          to={`/products/${prevProduct.slug}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            textDecoration: 'none',
            color: 'var(--color-text-main)',
            maxWidth: '45%'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-bg-surface-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <ChevronLeft size={20} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-light)' }}>
              Previous
            </span>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {prevProduct.name}
            </span>
          </div>
        </Link>
      )}

      {/* Catalogue Grid Button */}
      <Link
        to="/products"
        aria-label="View all products"
        style={{
          padding: '8px 12px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-surface-subtle)',
          color: 'var(--color-text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: 'var(--font-size-xs)',
          fontWeight: 600,
          textDecoration: 'none'
        }}
      >
        <Grid size={14} />
        <span>All 21 Formulations</span>
      </Link>

      {/* Next Product */}
      {nextProduct && (
        <Link
          to={`/products/${nextProduct.slug}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 'var(--space-2)',
            textDecoration: 'none',
            color: 'var(--color-text-main)',
            maxWidth: '45%',
            textAlign: 'right'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-light)' }}>
              Next
            </span>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {nextProduct.name}
            </span>
          </div>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-bg-surface-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <ChevronRight size={20} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductDetailNav;
