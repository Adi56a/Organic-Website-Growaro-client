import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/common/PageHeader';
import { companyInfo } from '../../data/company';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  ShieldCheck,
  Target,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  Leaf,
  Droplets,
  Microscope,
  FlaskConical,
  CheckCircle2,
  TrendingUp,
  Sprout,
  Send
} from 'lucide-react';

export const About = () => {
  return (
    <div className="about-page">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="About Corasun Agro"
        title="Scientific Agricultural Nutrition for Sustainable Crop Prosperity"
        description={companyInfo.mission}
        breadcrumbs={[{ label: 'About Us' }]}
        variant="green"
      />

      {/* 2. Company Narrative & Positioning Section */}
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
            {/* Left Narrative Column */}
            <div>
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="heading-2" style={{ marginBlock: 'var(--space-3)' }}>
                Bridging Laboratory Bio-Chemistry with Practical Field Agronomy
              </h2>
              <p className="lead" style={{ marginBottom: 'var(--space-4)' }}>
                {companyInfo.name} is dedicated to developing high-potency agricultural formulations that optimize crop metabolism, bolster cellular resistance, and deliver targeted nutrition across critical growth stages.
              </p>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                Modern farming faces complex challenges: soil alkalinity, micronutrient fixation, climate stress, and demanding export quality standards. We formulate our bio-stimulants, chelated micro-elements, and 100% water-soluble fertilizers with precise chemical purity to ensure maximum bio-availability and zero waste in drip and foliar systems.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <Button to="/products" variant="primary" size="md" icon={ArrowRight}>
                  Explore 21 Formulations
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Consult an Agronomist
                </Button>
              </div>
            </div>

            {/* Right Visual Showcase Card */}
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #F0FDF4 0%, #E0F2FE 100%)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(var(--space-6), 4vw, var(--space-10))',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <img src="/logo.svg" alt="Corasun Agro" style={{ width: '48px', height: '48px' }} />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.2rem', fontWeight: 800 }}>
                    CORASUN AGRO
                  </h3>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Agro Crop Nutrition Excellence
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Leaf size={24} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700 }}>Division 01: Bio Organics & PGR</h4>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>11 specialized bio-stimulants, silicon fortifiers, and chelated micronutrients</p>
                  </div>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Droplets size={24} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700 }}>Division 02: Water Soluble Fertilizers</h4>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>10 Euro-Ferti 100% water-soluble NPK and trace element enriched formulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values & Principles */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Guiding Pillars</span>
            <h2 className="heading-2">Built on Scientific Integrity & Farmer Success</h2>
            <p className="lead">
              Every decision at Corasun Agro is guided by four fundamental commitments to quality, agronomic science, and sustainable agriculture.
            </p>
          </div>

          <div className="grid grid-2">
            {companyInfo.values.map((val, idx) => {
              const icons = [Microscope, Target, ShieldCheck, HeartHandshake];
              const Icon = icons[idx] || Sparkles;
              return (
                <Card
                  key={idx}
                  variant="default"
                  style={{
                    padding: 'clamp(var(--space-6), 3vw, var(--space-8))',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderTop: `4px solid ${idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'}`
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-xl)',
                      backgroundColor: idx % 2 === 0 ? 'var(--color-primary-100)' : 'var(--color-secondary-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-4)',
                      color: idx % 2 === 0 ? 'var(--color-primary-dark)' : 'var(--color-secondary-dark)',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="heading-4" style={{ marginBottom: 'var(--space-2)' }}>
                    {val.title}
                  </h3>

                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {val.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Formulation Standards & Technical Excellence */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-blue">Formulation Science</span>
            <h2 className="heading-2">Engineered for Maximum Crop Bio-Availability</h2>
            <p className="lead">
              Our products are designed to perform reliably in real agricultural environments across varied water pH, soil conditions, and crop varieties.
            </p>
          </div>

          <div className="grid grid-3">
            <Card variant="glass">
              <div style={{ padding: '8px', backgroundColor: 'var(--color-primary-100)', borderRadius: 'var(--radius-md)', width: 'fit-content', marginBottom: 'var(--space-3)' }}>
                <FlaskConical size={20} color="var(--color-primary-dark)" />
              </div>
              <h4 className="heading-5" style={{ marginBottom: 'var(--space-2)' }}>
                EDTA & HEDP Chelation
              </h4>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Advanced chelation prevents essential micronutrients (Fe, Zn, Ca) from reacting with soil carbonates or irrigation phosphates, ensuring 100% absorption.
              </p>
            </Card>

            <Card variant="glass">
              <div style={{ padding: '8px', backgroundColor: 'var(--color-secondary-100)', borderRadius: 'var(--radius-md)', width: 'fit-content', marginBottom: 'var(--space-3)' }}>
                <Droplets size={20} color="var(--color-secondary-dark)" />
              </div>
              <h4 className="heading-5" style={{ marginBottom: 'var(--space-2)' }}>
                100% Water Solubility
              </h4>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Euro-Ferti formulations leave zero insoluble residue, eliminating nozzle clogging in micro-sprinklers, drip laterals, and foliar spray booms.
              </p>
            </Card>

            <Card variant="glass">
              <div style={{ padding: '8px', backgroundColor: 'var(--color-accent-100)', borderRadius: 'var(--radius-md)', width: 'fit-content', marginBottom: 'var(--space-3)' }}>
                <Sprout size={20} color="var(--color-accent-dark)" />
              </div>
              <h4 className="heading-5" style={{ marginBottom: 'var(--space-2)' }}>
                Stage-Specific Nutrition
              </h4>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                Precise N:P:K ratios and bio-stimulant dosages calibrated specifically for root establishment, flowering induction, and final berry brix enhancement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Direct Call to Action Banner */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-main)', paddingTop: '0' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #14532D 0%, #15803D 60%, #0369A1 100%)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(var(--space-8), 5vw, var(--space-12))',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                maxWidth: '700px',
                marginBottom: 'var(--space-3)'
              }}
            >
              Ready to Explore Our Complete Agricultural Portfolio?
            </h3>
            <p
              style={{
                color: '#E0F2FE',
                fontSize: 'var(--font-size-sm)',
                maxWidth: '580px',
                lineHeight: 1.6,
                marginBottom: 'var(--space-6)'
              }}
            >
              Browse all 21 bio-organic and water-soluble formulations with complete English and Marathi dosage guides.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'center' }}>
              <Button to="/products" variant="white" size="md" icon={ArrowRight}>
                View Product Catalogue
              </Button>
              <Button to="/contact" variant="outline" size="md" style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                Contact Technical Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
