import React from 'react';
import { ShieldCheck, CheckCircle2, Factory, FlaskConical, Award, ArrowRight } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const FacilitySection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(var(--space-8), 5vw, var(--space-16))',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Visual Commitment Showcase */}
          <div
            style={{
              position: 'relative',
              padding: 'clamp(var(--space-6), 4vw, var(--space-10))',
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              borderRadius: 'var(--radius-2xl)',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#BBF7D0', fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>
              <FlaskConical size={16} />
              <span>Scientific Formulation Standards</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: 'var(--space-4)', lineHeight: 1.2 }}>
              Precision Quality Control & Formulating Integrity
            </h3>

            <p style={{ color: '#94A3B8', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
              Our manufacturing protocols focus on strict raw material grading, high-chelation index stability, and complete 100% water solubility across all Euro-Ferti fertilizers.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 'var(--space-6)' }}>
              <div>
                <span style={{ fontSize: 'var(--font-size-xl)', fontWeight: 800, color: 'var(--color-primary-light)' }}>
                  100%
                </span>
                <p style={{ fontSize: 'var(--font-size-xs)', color: '#94A3B8', marginTop: '2px' }}>
                  Water Soluble Fertilizers
                </p>
              </div>

              <div>
                <span style={{ fontSize: 'var(--font-size-xl)', fontWeight: 800, color: 'var(--color-secondary-light)' }}>
                  pH 9.0
                </span>
                <p style={{ fontSize: 'var(--font-size-xs)', color: '#94A3B8', marginTop: '2px' }}>
                  HEDP Chelation Stability
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Assurance Details */}
          <div>
            <span className="eyebrow eyebrow-blue">Quality Assurance</span>
            <h2 className="heading-2" style={{ marginBlock: 'var(--space-3)' }}>
              Engineered for Consistent Field Performance
            </h2>
            <p className="lead" style={{ marginBottom: 'var(--space-6)' }}>
              We ensure every batch meets rigorous physical and chemical standards before reaching dealers and farmers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-main)' }}>
                    Non-Clogging Fertigation Formulations
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    Zero insoluble residues ensuring smooth drip dripper flow and uniform delivery across thousands of meters of lateral drip pipes.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-main)' }}>
                    Advanced Chelation Chemistry (EDTA & HEDP)
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    Shields essential trace minerals from soil fixation and precipitation with irrigation phosphates, giving maximum nutrient value per acre.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-main)' }}>
                    Bilingual Agronomic Guidance
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    Clear dosage recommendations and application timelines provided in English and Marathi for effortless farmer adoption.
                  </p>
                </div>
              </div>
            </div>

            <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
              Enquire About Dealership & Distribution
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
