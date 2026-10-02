import React from 'react';
import { SprayCan as Spray, Droplets, Calendar, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { Card } from '../common/Card';

export const ProductDosageCard = ({ dosage, isBio }) => {
  return (
    <Card
      variant="default"
      style={{
        padding: 'clamp(var(--space-5), 3vw, var(--space-6))',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: 'var(--space-6)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
        <Sparkles size={18} color={isBio ? 'var(--color-primary)' : 'var(--color-secondary)'} />
        <h3 className="heading-4" style={{ margin: 0 }}>
          Dosage & Method of Application
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-4)'
        }}
      >
        {/* Foliar Spray */}
        <div
          style={{
            backgroundColor: 'var(--color-primary-50)',
            border: '1px solid var(--color-primary-200)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-4)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-2)' }}>
            <div style={{ padding: '6px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Spray size={16} color="var(--color-primary)" />
            </div>
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary-dark)' }}>
              Foliar Spray Application
            </span>
          </div>

          <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-main)', marginTop: 'auto' }}>
            {dosage?.foliar || 'Not recommended for foliar'}
          </p>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
            Mix thoroughly in clean spray tank
          </span>
        </div>

        {/* Drip / Fertigation */}
        <div
          style={{
            backgroundColor: 'var(--color-secondary-50)',
            border: '1px solid var(--color-secondary-100)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-4)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-2)' }}>
            <div style={{ padding: '6px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Droplets size={16} color="var(--color-secondary)" />
            </div>
            <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-secondary-dark)' }}>
              Drip / Fertigation / Soil
            </span>
          </div>

          <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'var(--color-text-main)', marginTop: 'auto' }}>
            {dosage?.drip || dosage?.general || 'Apply as per crop canopy'}
          </p>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
            Compatible with modern micro-irrigation
          </span>
        </div>
      </div>

      {/* General Application Schedule / Timing */}
      {dosage?.general && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--space-3)',
            backgroundColor: 'var(--color-bg-surface-subtle)',
            padding: 'var(--space-3) var(--space-4)',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-main)'
          }}
        >
          <Clock size={16} color="var(--color-text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Recommended Timing:</strong> {dosage.general}
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProductDosageCard;
