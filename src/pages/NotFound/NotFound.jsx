import React from 'react';
import { Button } from '../../components/common/Button';
import { Home as HomeIcon, Package } from 'lucide-react';

export const NotFound = () => {
  return (
    <div
      style={{
        paddingTop: 'clamp(8rem, 15vw, 12rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #F0FDF4 100%)'
      }}
    >
      <div className="container" style={{ maxWidth: '640px' }}>
        <div className="eyebrow" style={{ color: 'var(--color-error)', backgroundColor: '#FEE2E2' }}>
          404 — Page Not Found
        </div>
        <h1 className="display-2" style={{ marginBlock: 'var(--space-4)' }}>
          Requested Page Does Not Exist
        </h1>
        <p className="lead" style={{ marginBottom: 'var(--space-8)' }}>
          The page or product you are looking for might have been moved or is currently unavailable in the catalogue.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <Button to="/" variant="primary" size="md" icon={HomeIcon} iconPosition="left">
            Back to Home
          </Button>
          <Button to="/products" variant="outline" size="md" icon={Package} iconPosition="left">
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
