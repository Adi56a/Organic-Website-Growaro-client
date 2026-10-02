import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Flower2, Apple, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { Card } from '../common/Card';

export const CropStageGuide = () => {
  const stages = [
    {
      icon: Sprout,
      color: 'var(--color-primary)',
      bg: 'var(--color-primary-100)',
      stage: 'Root & Vegetative',
      timing: 'Transplanting to Active Branching',
      recommended: ['Kaizen', 'Euro-Ferti 12:61:00 MAP', 'Ortus Zn', 'Corasil-O']
    },
    {
      icon: Flower2,
      color: 'var(--color-secondary)',
      bg: 'var(--color-secondary-100)',
      stage: 'Pre-Bloom & Flowering',
      timing: 'Bud Differentiation to Fruit Set',
      recommended: ['Euro-Ferti 00:52:34 MKP', 'Euro-Ferti 13:40:13', 'Ortus Molycra', 'Euro-Ferti 10:52:10']
    },
    {
      icon: Apple,
      color: 'var(--color-accent)',
      bg: 'var(--color-accent-100)',
      stage: 'Fruit Sizing & Ripening',
      timing: 'Berry/Fruit Expansion to Harvest',
      recommended: ['Euro-Ferti 13:00:45 Multi-K', 'Ortus Ca EDTA 10%', '0:9:46+TE', '00:42:47+2.8Fe']
    },
    {
      icon: ShieldAlert,
      color: '#DC2626',
      bg: '#FEE2E2',
      stage: 'Stress & Soil Health',
      timing: 'Alkaline Soils / Stress Recovery',
      recommended: ['Corasulf-G', 'Ortus Fe HEDP', 'Ortus Zn HEDP', 'Bettor 20', 'Ultra Curb']
    }
  ];

  return (
    <div
      style={{
        marginTop: 'clamp(var(--space-12), 6vw, var(--space-20))',
        paddingTop: 'var(--space-12)',
        borderTop: '1px solid var(--color-border-medium)'
      }}
    >
      <div className="section-header" style={{ marginBottom: 'var(--space-8)' }}>
        <span className="eyebrow">Agronomic Application Matrix</span>
        <h2 className="heading-3">Recommended Formulations by Crop Growth Phase</h2>
        <p className="lead" style={{ fontSize: 'var(--font-size-sm)' }}>
          Quick guide to matching Corasun Agro bio-stimulants and water-soluble fertilizers with critical crop phenology.
        </p>
      </div>

      <div className="grid grid-4">
        {stages.map((stg, idx) => {
          const Icon = stg.icon;
          return (
            <Card key={idx} variant="default" style={{ padding: 'var(--space-6)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: stg.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                  color: stg.color,
                  flexShrink: 0
                }}
              >
                <Icon size={22} />
              </div>

              <h4 className="heading-5" style={{ marginBottom: '4px' }}>
                {stg.stage}
              </h4>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                {stg.timing}
              </p>

              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-3)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-light)', display: 'block', marginBottom: '6px' }}>
                  Recommended:
                </span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {stg.recommended.map((rec, rIdx) => (
                    <li key={rIdx} style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-main)' }}>
                      • {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CropStageGuide;
