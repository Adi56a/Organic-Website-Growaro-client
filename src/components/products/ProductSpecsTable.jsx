import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CheckCircle2, Package, Layers, Sprout } from 'lucide-react';

export const ProductSpecsTable = ({ product }) => {
  return (
    <Card
      variant="default"
      style={{
        padding: 'clamp(var(--space-5), 3vw, var(--space-6))',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border-subtle)',
        marginBottom: 'var(--space-6)'
      }}
    >
      <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)' }}>
        Technical Composition & Specifications
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {/* Active Composition */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 2fr', gap: 'var(--space-2)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Active Formula
          </span>
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-main)' }}>
            {product.composition}
          </span>
        </div>

        {/* Growth Stage */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 2fr', gap: 'var(--space-2)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Recommended Stage
          </span>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-main)' }}>
            {product.stage}
          </span>
        </div>

        {/* Target Crops */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 2fr', gap: 'var(--space-2)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Target Crops
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {product.targetCrops?.map((crop, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: 'var(--color-bg-surface-subtle)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 500,
                  color: 'var(--color-text-main)'
                }}
              >
                {crop}
              </span>
            ))}
          </div>
        </div>

        {/* Available Pack Sizes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 2fr', gap: 'var(--space-2)', paddingTop: 'var(--space-1)' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Available Packs
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {product.packSizes?.map((pack, idx) => (
              <Badge key={idx} variant="neutral">
                <Package size={12} style={{ marginRight: '4px' }} />
                {pack}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductSpecsTable;
