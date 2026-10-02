import React from 'react';
import { ArrowRight, ShieldCheck, Microscope, Sprout, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { companyInfo } from '../../data/company';

export const CompanyIntroSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(var(--space-8), 5vw, var(--space-16))',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Mission & Positioning */}
          <div>
            <span className="eyebrow">Corporate Introduction</span>
            <h2 className="heading-2" style={{ marginBlock: 'var(--space-3)' }}>
              Dedicated to Transforming Crop Health Through Research-Driven Nutrition
            </h2>
            <p className="lead" style={{ marginBottom: 'var(--space-6)' }}>
              {companyInfo.mission}
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)' }}>
              At Corasun Agro, our portfolio is formulated to address precise physiological demands during critical vegetative, flowering, and fruit-setting phases. From chelated micronutrients stable up to pH 9.0 to 100% water-soluble Euro-Ferti grades, every product is built for consistent agricultural performance.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
              <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                Learn More About Us
              </Button>
              <Button to="/products" variant="outline" size="md">
                Browse Complete Catalogue
              </Button>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Card variant="glass" style={{ borderLeft: '4px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-primary-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Microscope size={22} color="var(--color-primary-dark)" />
                </div>
                <div>
                  <h3 className="heading-5" style={{ marginBottom: 'var(--space-1)' }}>
                    High-Potency Chelation Science
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    Advanced EDTA and HEDP chelated formulations guaranteeing non-precipitation with phosphates and instant bioavailability in high-pH soils.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="glass" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-secondary-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Sprout size={22} color="var(--color-secondary-dark)" />
                </div>
                <div>
                  <h3 className="heading-5" style={{ marginBottom: 'var(--space-1)' }}>
                    Pure Water-Soluble Grades
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    100% soluble Euro-Ferti series engineered with negligible chlorine and sodium for drip fertigation and precision foliar feeding.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="glass" style={{ borderLeft: '4px solid var(--color-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-accent-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={22} color="var(--color-accent-dark)" />
                </div>
                <div>
                  <h3 className="heading-5" style={{ marginBottom: 'var(--space-1)' }}>
                    Farmer-Centric Field Efficacy
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    Practical crop-stage specific dosing (Marathi & English) supporting fruit size, berry coloration, and plant disease resilience.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
