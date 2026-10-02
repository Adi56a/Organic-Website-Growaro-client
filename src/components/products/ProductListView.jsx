import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

export const ProductListView = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      {products.map((product) => {
        const isBio = product.category === 'bio-organics';

        return (
          <Card
            key={product.slug}
            variant="default"
            style={{
              padding: 'clamp(var(--space-4), 3vw, var(--space-6))',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 'var(--space-6)',
              alignItems: 'center',
              borderLeft: isBio ? '4px solid var(--color-primary)' : '4px solid var(--color-secondary)',
              backgroundColor: '#FFFFFF'
            }}
          >
            {/* Left: Product Thumbnail Image & Details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: isBio ? 'var(--color-primary-100)' : 'var(--color-secondary-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                ) : isBio ? (
                  <Leaf size={28} color="var(--color-primary)" />
                ) : (
                  <Droplets size={28} color="var(--color-secondary)" />
                )}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: '4px' }}>
                  <Badge variant={isBio ? 'green' : 'blue'}>
                    {product.categoryName}
                  </Badge>
                  {product.featured && <Badge variant="amber">Featured</Badge>}
                </div>

                <h3 className="heading-4">
                  <Link to={`/products/${product.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {product.name}
                  </Link>
                </h3>

                <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: isBio ? 'var(--color-primary-dark)' : 'var(--color-secondary-dark)', textTransform: 'uppercase' }}>
                  {product.type}
                </p>
              </div>
            </div>

            {/* Middle: Description & Marathi snippet */}
            <div>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                {product.description}
              </p>
              {product.marathiDescription && (
                <div className="text-marathi" style={{ fontSize: '0.8rem', padding: '2px 8px' }}>
                  {product.marathiDescription}
                </div>
              )}
            </div>

            {/* Right: Stage, Dosage & CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start', borderLeft: '1px solid var(--color-border-subtle)', paddingLeft: 'clamp(0px, 2vw, var(--space-6))' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                <strong>Stage:</strong> {product.stage}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                <strong>Dosage:</strong> {product.dosage.foliar || product.dosage.general}
              </div>

              <Button to={`/products/${product.slug}`} variant="outline" size="sm" icon={ArrowRight}>
                View Technical Specs
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductListView;
