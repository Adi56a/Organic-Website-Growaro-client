import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ArrowRight, Phone, Mail, Leaf, Droplets } from 'lucide-react';
import { companyInfo } from '../../data/company';

/**
 * Full-screen / sliding mobile drawer menu for mobile viewports.
 */
export const MobileMenu = ({ isOpen, onClose }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-drawer)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          marginLeft: 'auto',
          width: 'min(100%, 380px)',
          height: '100%',
          backgroundColor: '#FFFFFF',
          padding: 'var(--space-6)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-2xl)',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-8)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <img src="/logo.svg" alt="Corasun Agro" style={{ width: '36px', height: '36px' }} />
            <span style={{ fontFamily: 'var(--font-family-display)', fontWeight: 'var(--font-weight-extrabold)', fontSize: '1.1rem' }}>
              Corasun Agro
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              padding: 'var(--space-2)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-bg-surface-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={22} color="var(--color-text-main)" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
          {companyInfo.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-family-display)',
                fontSize: '1.15rem',
                fontWeight: isActive ? '700' : '600',
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-main)',
                padding: 'var(--space-3) var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: isActive ? 'var(--color-primary-50)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              })}
            >
              <span>{item.label}</span>
              <ArrowRight size={18} opacity={0.6} />
            </NavLink>
          ))}
        </nav>

        {/* Quick Categories */}
        <div style={{ padding: 'var(--space-4)', backgroundColor: 'var(--color-bg-surface-subtle)', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--space-6)' }}>
          <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
            Product Categories
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Link
              to="/products?category=bio-organics"
              onClick={onClose}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-primary-dark)', fontWeight: 600, padding: 'var(--space-1) 0' }}
            >
              <Leaf size={16} color="var(--color-primary)" />
              <span>Bio Organics & PGR</span>
            </Link>
            <Link
              to="/products?category=water-soluble-fertilizers"
              onClick={onClose}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-secondary-dark)', fontWeight: 600, padding: 'var(--space-1) 0' }}
            >
              <Droplets size={16} color="var(--color-secondary)" />
              <span>Water Soluble Fertilizers</span>
            </Link>
          </div>
        </div>

        {/* Contact Snippet & CTA */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Mail size={14} color="var(--color-primary)" />
              <span>{companyInfo.contact.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Phone size={14} color="var(--color-primary)" />
              <span>{companyInfo.contact.phone}</span>
            </div>
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="btn btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
