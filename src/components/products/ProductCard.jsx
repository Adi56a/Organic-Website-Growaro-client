import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, ArrowRight, Check, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

/**
 * Reusable ProductCard with high quality online demo packshot imagery, category indicators,
 * dosage tags, Marathi snippets, and interactive hover effects.
 */
export const ProductCard = ({ product, className = '' }) => {
  const isBio = product.category === 'bio-organics';
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      variant="default"
      className={`product-card ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '0',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        border: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF'
      }}
    >
      {/* Product Card Visual Header with Online Image */}
      <div
        style={{
          position: 'relative',
          height: '210px',
          background: isBio
            ? 'radial-gradient(circle at 50% 30%, #DCFCE7 0%, #F0FDF4 70%, #FFFFFF 100%)'
            : 'radial-gradient(circle at 50% 30%, #E0F2FE 0%, #F0F9FF 70%, #FFFFFF 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}
      >
        {/* Actual Image or Fallback */}
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            loading="lazy"
          />
        ) : (
          <div
            style={{
              width: '76px',
              height: '76px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isBio ? (
              <Leaf size={38} color="var(--color-primary)" />
            ) : (
              <Droplets size={38} color="var(--color-secondary)" />
            )}
          </div>
        )}

        {/* Dark Vignette Overlay for Crisp Badges */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.45) 0%, transparent 40%, rgba(15, 23, 42, 0.55) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: 'var(--space-3)',
            left: 'var(--space-3)',
            right: 'var(--space-3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 2
          }}
        >
          <Badge
            variant={isBio ? 'green' : 'blue'}
            icon={isBio ? Leaf : Droplets}
            style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.92)' }}
          >
            {product.categoryName}
          </Badge>

          {product.featured && (
            <Badge variant="amber" icon={Sparkles} style={{ backdropFilter: 'blur(8px)', backgroundColor: '#FEF3C7' }}>
              Featured
            </Badge>
          )}
        </div>

        {/* Bottom Tag inside image */}
        <div
          style={{
            position: 'absolute',
            bottom: 'var(--space-3)',
            left: 'var(--space-3)',
            zIndex: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(6px)',
            padding: '2px 8px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: 'var(--color-text-main)'
          }}
        >
          {product.stage || 'Crop Nutrition'}
        </div>
      </div>

      {/* Product Content Body */}
      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 className="heading-4" style={{ marginBottom: 'var(--space-1)' }}>
          <Link
            to={`/products/${product.slug}`}
            style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
            className="hover-primary"
          >
            {product.name}
          </Link>
        </h3>

        <p
          style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 700,
            color: isBio ? 'var(--color-primary-dark)' : 'var(--color-secondary-dark)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: 'var(--space-3)'
          }}
        >
          {product.type}
        </p>

        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.5,
            marginBottom: 'var(--space-4)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.description}
        </p>

        {/* Marathi Context Snippet */}
        {product.marathiDescription && (
          <div
            className="text-marathi"
            style={{
              fontSize: '0.8rem',
              lineHeight: 1.4,
              marginBottom: 'var(--space-4)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {product.marathiDescription}
          </div>
        )}

        {/* Benefits bullets (First 2) */}
        {product.benefits && product.benefits.length > 0 && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: 'var(--space-5)' }}>
            {product.benefits.slice(0, 2).map((b, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-main)' }}>
                <Check size={14} color={isBio ? 'var(--color-primary)' : 'var(--color-secondary)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Card Footer Actions */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-2)'
          }}
        >
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
            {product.dosage?.foliar ? 'Foliar / Drip' : 'Soil Nutrition'}
          </div>

          <Button
            to={`/products/${product.slug}`}
            variant="outline"
            size="sm"
            icon={ArrowRight}
          >
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
