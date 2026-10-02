import React from 'react';
import { ArrowRight, Phone, Mail, Send, Sparkles, Sprout } from 'lucide-react';
import { Button } from '../common/Button';
import { companyInfo } from '../../data/company';

export const CtaBannerSection = () => {
  return (
    <section className="section" style={{ paddingBlock: 'clamp(var(--space-12), 6vw, var(--space-20))', backgroundColor: 'var(--color-bg-main)' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #14532D 0%, #15803D 50%, #0369A1 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(var(--space-8), 6vw, var(--space-16))',
            color: '#FFFFFF',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-2xl)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Subtle Ambient Circle */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              right: '-20%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(10px)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--space-4)',
              color: '#BBF7D0'
            }}
          >
            <Sparkles size={14} color="#FDE047" />
            <span>Ready to Elevate Your Agricultural Yield?</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 3rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              maxWidth: '780px',
              lineHeight: 1.15,
              marginBottom: 'var(--space-4)'
            }}
          >
            Partner with Corasun Agro for Advanced Crop Nutrition Solutions
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.2vw + 0.2rem, 1.2rem)',
              color: '#E0F2FE',
              maxWidth: '650px',
              lineHeight: 1.6,
              marginBottom: 'var(--space-8)'
            }}
          >
            Connect with our agronomy technical team for custom dosage schedules, bulk commercial orders, or dealership opportunities across regions.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'center', alignItems: 'center' }}>
            <Button to="/contact" variant="white" size="lg" icon={Send}>
              Send Direct Enquiry
            </Button>
            <Button to="/products" variant="outline" size="lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              Explore 21 Products
            </Button>
          </div>

          {/* Direct Quick Contact Snippet */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(var(--space-4), 4vw, var(--space-8))',
              justifyContent: 'center',
              marginTop: 'var(--space-10)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: 'var(--font-size-xs)',
              color: '#BBF7D0'
            }}
          >
            <a href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF', textDecoration: 'none' }}>
              <Phone size={14} color="#BBF7D0" />
              <span>Call Us: {companyInfo.contact.phone}</span>
            </a>

            <a href={`mailto:${companyInfo.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF', textDecoration: 'none' }}>
              <Mail size={14} color="#BBF7D0" />
              <span>Email: {companyInfo.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
