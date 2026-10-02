import React, { useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Droplets, ShieldCheck, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from '../common/Button';
import { companyInfo } from '../../data/company';
import { gsap } from '../../animations/gsap/gsapSetup';

export const HeroSection = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Coordinated Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.94, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9 },
        '-=0.6'
      )
      .fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        paddingTop: 'clamp(7.5rem, 13vw, 10.5rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
        background: 'radial-gradient(ellipse 90% 70% at 75% 15%, #DCFCE7 0%, #F0FDF4 35%, #F8FAFC 85%)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '650px',
          maxHeight: '650px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(3, 105, 161, 0.05) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(var(--space-8), 5vw, var(--space-16))',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headline, Brand Context, CTAs */}
          <div>
            <div className="hero-eyebrow eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Leaf size={14} color="var(--color-primary)" />
              <span>Pioneering Sustainable Agricultural Nutrition</span>
            </div>

            <h1 ref={headlineRef} className="display-1" style={{ marginBlock: 'var(--space-4)' }}>
              Scientific Crop Nutrition for{' '}
              <span className="text-gradient-primary">Maximum Yield & Quality</span>
            </h1>

            <p ref={textRef} className="lead" style={{ marginBottom: 'var(--space-8)', maxWidth: '580px' }}>
              Corasun Agro delivers high-potency bio-organic stimulants, chelated micronutrients (EDTA & HEDP), and 100% water-soluble Euro-Ferti fertilizers engineered for modern agronomy.
            </p>

            <div ref={ctaRef} style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center' }}>
              <Button to="/products" variant="primary" size="lg" icon={ArrowRight}>
                Explore 21 Formulations
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Technical Agro Enquiry
              </Button>
            </div>

            {/* Micro Highlights */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-8)',
                paddingTop: 'var(--space-6)',
                borderTop: '1px solid rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" />
                <span>100% Water Soluble NPK</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" />
                <span>Bio-Available Silicon & Trace Minerals</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" />
                <span>Zero Hallucinated Metrics • Field Proven</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Display Showcase */}
          <div ref={visualRef} style={{ position: 'relative' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.85) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                padding: 'clamp(var(--space-6), 4vw, var(--space-10))',
                boxShadow: '0 20px 40px -15px rgba(21, 128, 61, 0.15), 0 0 0 1px rgba(21, 128, 61, 0.08)',
                position: 'relative'
              }}
            >
              {/* Top Header inside visual card */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <img src="/logo.svg" alt="Corasun Logo" style={{ width: '38px', height: '38px' }} />
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-family-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
                      CORASUN AGRO
                    </h3>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Agricultural Product Divisions
                    </p>
                  </div>
                </div>

                <span className="badge badge-green">
                  21 Active Formulations
                </span>
              </div>

              {/* Division 1 Feature Mini-Banner */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-4)',
                  marginBottom: 'var(--space-4)',
                  border: '1px solid var(--color-primary-100)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-primary-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Leaf size={26} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-main)' }}>
                    Bio Organics & Micronutrients
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    Kaizen, Corasil-O, Bettor 20, Ortus EDTA & HEDP series (11 Products)
                  </p>
                </div>
              </div>

              {/* Division 2 Feature Mini-Banner */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-4)',
                  marginBottom: 'var(--space-6)',
                  border: '1px solid var(--color-secondary-100)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-secondary-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Droplets size={26} color="var(--color-secondary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-main)' }}>
                    Water Soluble Fertilizers
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    Euro-Ferti NPK 12:61:00, 13:00:45, 00:52:34 & Fortified TE grades (10 Products)
                  </p>
                </div>
              </div>

              {/* Floating Testimonial/Tag Pill */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #15803D 0%, #166534 100%)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-3) var(--space-4)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--space-2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <TrendingUp size={18} color="#BBF7D0" />
                  <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600 }}>
                    Optimized for Drip Irrigation & Foliar Sprays
                  </span>
                </div>
                <Sparkles size={16} color="#FDE047" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Metric Counters */}
        <div
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 'var(--space-6)',
            marginTop: 'clamp(var(--space-10), 6vw, var(--space-16))',
            paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--color-border-medium)'
          }}
        >
          {companyInfo.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 'var(--font-weight-extrabold)',
                  color: 'var(--color-primary-dark)',
                  lineHeight: 1.1
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 600, marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
