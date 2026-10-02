import React from 'react';
import { Sprout, ShieldCheck, SunMedium, Award, Zap, Droplets } from 'lucide-react';
import { Card } from '../common/Card';

export const BenefitsSection = () => {
  const benefitCards = [
    {
      icon: Sprout,
      color: 'green',
      title: 'Vigorous Root Architecture',
      subtitle: 'Feeder Root Proliferation & Transplant Survival',
      description: 'Supplies high-concentration water-soluble phosphate and bio-organic stimulants that accelerate primary and lateral root expansion, ensuring high nutrient assimilation from day one.'
    },
    {
      icon: ShieldCheck,
      color: 'blue',
      title: 'Cellular Strength & Pest Barrier',
      subtitle: 'Bio-Available Silicon & Chelated Calcium',
      description: 'Deposits organic silica in leaf cuticles and reinforces cell walls with EDTA-calcium, reducing crop lodging, preventing fruit cracking, and naturally resisting sucking pests.'
    },
    {
      icon: Zap,
      color: 'amber',
      title: 'Chlorophyll Activation & Chlorosis Reversal',
      subtitle: 'High-Efficiency Iron & Zinc Chelates',
      description: 'Delivers stable chelated Fe and Zn (EDTA and pH 9.0 stable HEDP) that immediately reverse interveinal leaf chlorosis and maximize photosynthetic sugar manufacturing.'
    },
    {
      icon: SunMedium,
      color: 'green',
      title: 'Floral Induction & Fruit Set',
      subtitle: 'Phosphate-Dominant Pre-Bloom Ratios',
      description: 'Zero-nitrogen and high-phosphorus formulas (00:52:34 MKP & 10:52:10+TE) check excessive vegetative surges to induce dense, uniform flower blossoming and healthy fruit set.'
    },
    {
      icon: Droplets,
      color: 'blue',
      title: '100% Water-Solubility & Zero Residue',
      subtitle: 'Drip Fertigation & Precision Foliar Sprays',
      description: 'Ultra-pure Euro-Ferti grades dissolve completely without leaving nozzle-clogging residues in micro-irrigation lines or spray tanks.'
    },
    {
      icon: Award,
      color: 'amber',
      title: 'Sugar Accumulation & Berry Coloration',
      subtitle: 'Nitrate-Potassium & Ripening Master Blends',
      description: 'Specialized finishing blends (13:00:45 & 0:9:46+TE) rapidly translocate carbohydrates to fruits, improving berry brix, uniform rind shine, and export shelf-life.'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Agronomic Value & Impact</span>
          <h2 className="heading-2">Scientifically Proven Benefits Across Every Crop Stage</h2>
          <p className="lead">
            Every formulation is tailored to address specific physiological requirements, ensuring optimal plant vigor from seedling to harvest.
          </p>
        </div>

        <div className="grid grid-3">
          {benefitCards.map((b, idx) => {
            const Icon = b.icon;
            const bgClass =
              b.color === 'green'
                ? 'var(--color-primary-100)'
                : b.color === 'blue'
                ? 'var(--color-secondary-100)'
                : 'var(--color-accent-100)';
            const iconColor =
              b.color === 'green'
                ? 'var(--color-primary-dark)'
                : b.color === 'blue'
                ? 'var(--color-secondary-dark)'
                : 'var(--color-accent-dark)';

            return (
              <Card
                key={idx}
                variant="glass"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'var(--space-6)',
                  height: '100%'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: bgClass,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                    flexShrink: 0
                  }}
                >
                  <Icon size={24} color={iconColor} />
                </div>

                <h3 className="heading-5" style={{ marginBottom: 'var(--space-1)' }}>
                  {b.title}
                </h3>

                <p
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    color: iconColor,
                    marginBottom: 'var(--space-3)'
                  }}
                >
                  {b.subtitle}
                </p>

                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {b.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
