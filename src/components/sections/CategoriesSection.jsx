import React from 'react';
import { ArrowRight, Leaf, Droplets, CheckCircle2, Sparkles } from 'lucide-react';
import { categories } from '../../data/categories';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const CategoriesSection = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Product Divisions</span>
          <h2 className="heading-2">Two Specialized Divisions Designed for Complete Crop Care</h2>
          <p className="lead">
            Targeted agronomic solutions matching every critical physiological stage of vegetative growth, flowering, and fruit development.
          </p>
        </div>

        <div className="grid grid-2">
          {/* Division 1: Bio-Organics */}
          <Card
            variant="default"
            style={{
              padding: 'clamp(var(--space-6), 4vw, var(--space-8))',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)',
              borderTop: '4px solid var(--color-primary)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
                <Badge variant="green" icon={Leaf}>
                  Division 01 • 11 Formulations
                </Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-primary)' }}>
                  Bio Organics & PGR
                </span>
              </div>

              <h3 className="heading-3" style={{ marginBottom: 'var(--space-2)' }}>
                Bio Organics, PGR & Micronutrients
              </h3>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary-dark)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                Advanced bio-stimulants, silicon fortifiers, non-ionic spreaders & chelated micro-elements.
              </p>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                Engineered to stimulate feeder roots, enhance leaf erectness and cellular strength, fix nitrogen, and reverse chlorosis in difficult soils.
              </p>

              {/* Sample Product Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--space-6)' }}>
                {['Kaizen', 'Corasil-O', 'Bettor 20', 'Ultra Curb', 'Ortus Zn & Fe', 'Ortus Ca EDTA 10%', 'Ortus HEDP'].map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-primary-200)',
                      color: 'var(--color-primary-dark)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Button
              to="/products?category=bio-organics"
              variant="primary"
              size="md"
              icon={ArrowRight}
            >
              Explore Bio Organics Division
            </Button>
          </Card>

          {/* Division 2: Water Soluble Fertilizers */}
          <Card
            variant="default"
            style={{
              padding: 'clamp(var(--space-6), 4vw, var(--space-8))',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)',
              borderTop: '4px solid var(--color-secondary)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
                <Badge variant="blue" icon={Droplets}>
                  Division 02 • 10 Formulations
                </Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-secondary)' }}>
                  Euro-Ferti Series
                </span>
              </div>

              <h3 className="heading-3" style={{ marginBottom: 'var(--space-2)' }}>
                Water Soluble Fertilizers
              </h3>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-secondary-dark)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                100% water-soluble Euro-Ferti NPK formulas for drip fertigation and precision foliar feeding.
              </p>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                High-purity macro and micro formulations designed for early root boost (12:61:00), floral induction (00:52:34), and final fruit sizing and brix (13:00:45).
              </p>

              {/* Sample Product Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'var(--space-6)' }}>
                {['NPK 12:61:00 MAP', 'NPK 13:00:45 Multi-K', 'NPK 00:52:34 MKP', 'NPK 13:40:13', 'NPK 00:60:20', '15-30-15+2Mg+TE', '0:9:46+TE'].map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-secondary-100)',
                      color: 'var(--color-secondary-dark)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Button
              to="/products?category=water-soluble-fertilizers"
              variant="secondary"
              size="md"
              icon={ArrowRight}
            >
              Explore Euro-Ferti Division
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
