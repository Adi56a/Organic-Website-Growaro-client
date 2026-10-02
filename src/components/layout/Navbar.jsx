import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { MobileMenu } from './MobileMenu';
import { Button } from '../common/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll listener for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-container">
            {/* Brand Logo & Name */}
            <Link to="/" className="nav-brand" aria-label="Corasun Agro Home">
              <img src="/logo.svg" alt="Corasun Agro Logo" className="nav-brand-logo" />
              <div className="nav-brand-text">
                <span className="nav-brand-name">CORASUN</span>
                <span className="nav-brand-sub">AGRO PVT. LTD.</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nav-links" aria-label="Main Navigation">
              {companyInfo.navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Action */}
            <div className="nav-actions">
              <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
                Enquire Now
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
