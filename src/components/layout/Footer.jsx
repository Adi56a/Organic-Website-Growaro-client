import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Sparkles, Leaf } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { categories } from '../../data/categories';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Link to="/" className="nav-brand" style={{ display: 'inline-flex' }}>
              <img src="/logo.svg" alt="Corasun Agro" style={{ width: '40px', height: '40px' }} />
              <div className="nav-brand-text">
                <span className="nav-brand-name" style={{ color: '#FFFFFF' }}>CORASUN</span>
                <span className="nav-brand-sub" style={{ color: 'var(--color-primary-light)' }}>AGRO PVT. LTD.</span>
              </div>
            </Link>
            
            <p style={{ color: '#94A3B8', fontSize: 'var(--font-size-sm)', maxWidth: '340px', lineHeight: 1.6 }}>
              {companyInfo.tagline}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-primary-light)', fontSize: 'var(--font-size-xs)', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Certified Formulations • Scientific Crop Nutrition</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {companyInfo.navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="footer-link">
                  Product Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories Column */}
          <div>
            <h4 className="footer-col-title">Our Solutions</h4>
            <ul className="footer-links-list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products?category=${cat.id}`} className="footer-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-accent-light)' }}>
                  <span>View All 21 Products</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Official Channels Column */}
          <div>
            <h4 className="footer-col-title">Contact & Advisory</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', color: '#94A3B8', fontSize: 'var(--font-size-sm)' }}>
                <MapPin size={18} color="var(--color-primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{companyInfo.contact.registeredOffice}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: '#94A3B8', fontSize: 'var(--font-size-sm)' }}>
                <Phone size={18} color="var(--color-primary-light)" style={{ flexShrink: 0 }} />
                <a href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`} className="footer-link">
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: '#94A3B8', fontSize: 'var(--font-size-sm)' }}>
                <Mail size={18} color="var(--color-primary-light)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${companyInfo.contact.email}`} className="footer-link">
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <p>© {currentYear} Corasun Agro Pvt. Ltd. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span>Empowering Farmers with Sustainable Science</span>
            <Leaf size={14} color="var(--color-primary-light)" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
