import React, { useState } from 'react';
import { Leaf, Droplets, Sparkles, ShieldCheck, CheckCircle2, PackageCheck } from 'lucide-react';
import { Badge } from '../common/Badge';

/**
 * ProductPackshotVisual renders the main product visual showcase
 * with high quality online demo packshot photo, ambient lighting, and certified purity badge.
 */
export const ProductPackshotVisual = ({ product }) => {
  const isBio = product.category === 'bio-organics';
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="product-packshot-container"
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-2xl)',
        padding: 'clamp(var(--space-6), 4vw, var(--space-8))',
        background: isBio
          ? 'radial-gradient(ellipse 90% 80% at 50% 20%, #DCFCE7 0%, #F0FDF4 55%, #FFFFFF 100%)'
          : 'radial-gradient(ellipse 90% 80% at 50% 20%, #E0F2FE 0%, #F0F9FF 55%, #FFFFFF 100%)',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Top Floating Badges */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-6)',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Badge
          variant={isBio ? 'green' : 'blue'}
          icon={isBio ? Leaf : Droplets}
        >
          {product.categoryName}
        </Badge>

        {product.featured ? (
          <Badge variant="amber" icon={Sparkles}>
            Flagship Grade
          </Badge>
        ) : (
          <Badge variant="neutral">
            Standard Pack
          </Badge>
        )}
      </div>

      {/* Main Packshot High-Res Photo Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxHeight: '340px',
          height: '280px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--space-4)',
          zIndex: 1
        }}
      >
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={`${product.name} packshot demo`}
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isBio ? 'var(--color-primary-100)' : 'var(--color-secondary-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isBio ? (
              <Leaf size={48} color="var(--color-primary)" />
            ) : (
              <Droplets size={48} color="var(--color-secondary)" />
            )}
          </div>
        )}

        {/* Floating Product Name Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 'var(--space-3)',
            left: 'var(--space-3)',
            right: 'var(--space-3)',
            padding: '6px 12px',
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            borderRadius: 'var(--radius-md)',
            color: '#FFFFFF',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span>{product.name}</span>
          <span style={{ opacity: 0.85, fontSize: '0.7rem' }}>Demo Packshot</span>
        </div>
      </div>

      {/* Formulation & Quality Badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-2)',
          justifyContent: 'center',
          marginTop: 'var(--space-2)',
          position: 'relative',
          zIndex: 1
        }}
      >
        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 600,
            color: 'var(--color-text-main)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--color-border-subtle)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <ShieldCheck size={14} color="var(--color-primary)" />
          <span>100% Purity Certified</span>
        </span>

        <span
          style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 600,
            color: 'var(--color-text-main)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--color-border-subtle)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <PackageCheck size={14} color="var(--color-secondary)" />
          <span>{product.packSizes?.length || 3} Pack Sizes</span>
        </span>
      </div>
    </div>
  );
};

export default ProductPackshotVisual;
