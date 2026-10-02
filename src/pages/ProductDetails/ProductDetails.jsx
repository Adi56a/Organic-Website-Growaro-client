import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader } from '../../components/common/PageHeader';
import { getProductBySlug, getProductsByCategory, products } from '../../data/products';
import { ProductPackshotVisual } from '../../components/products/ProductPackshotVisual';
import { ProductDosageCard } from '../../components/products/ProductDosageCard';
import { ProductSpecsTable } from '../../components/products/ProductSpecsTable';
import { ProductDetailNav } from '../../components/products/ProductDetailNav';
import { ProductCard } from '../../components/products/ProductCard';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  CheckCircle2,
  ArrowRight,
  Send,
  Leaf,
  Droplets,
  ShieldCheck,
  Phone,
  Mail,
  HelpCircle
} from 'lucide-react';
import { companyInfo } from '../../data/company';
import { gsap } from '../../animations/gsap/gsapSetup';

export const ProductDetails = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!product) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.detail-animate-left',
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.detail-animate-right',
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [slug, product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const isBio = product.category === 'bio-organics';

  // Get 3 related products in same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div ref={containerRef} className="product-details-page">
      {/* Dynamic Subpage Header */}
      <PageHeader
        eyebrow={product.categoryName}
        title={product.name}
        description={product.tagline}
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: product.categoryName, to: `/products?category=${product.category}` },
          { label: product.name }
        ]}
        variant={isBio ? 'green' : 'blue'}
      />

      <section className="section">
        <div className="container">
          {/* Main 2-Column Product Detail Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(var(--space-8), 5vw, var(--space-12))',
              alignItems: 'start',
              marginBottom: 'var(--space-12)'
            }}
          >
            {/* Left Column: Packshot Showcase & Direct Enquiry Box */}
            <div className="detail-animate-left" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', position: 'sticky', top: '100px' }}>
              <ProductPackshotVisual product={product} />

              {/* Direct Enquiry Conversion Action Card */}
              <Card
                variant="glass"
                style={{
                  padding: 'var(--space-6)',
                  border: isBio ? '1px solid var(--color-primary-200)' : '1px solid var(--color-secondary-100)',
                  background: isBio ? 'var(--color-primary-50)' : 'var(--color-secondary-50)'
                }}
              >
                <h4 className="heading-5" style={{ marginBottom: 'var(--space-2)' }}>
                  Interested in {product.name}?
                </h4>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                  Submit a direct inquiry for custom dosage recommendation, dealership pricing, or bulk commercial delivery.
                </p>

                <Button
                  to={`/contact?subject=${encodeURIComponent(`Enquiry for ${product.name} (${product.type})`)}`}
                  variant={isBio ? 'primary' : 'secondary'}
                  size="md"
                  icon={Send}
                  style={{ width: '100%', marginBottom: 'var(--space-3)' }}
                >
                  Send Enquiry for {product.name}
                </Button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  <Phone size={12} color="var(--color-primary)" />
                  <span>Direct Hotline: {companyInfo.contact.phone}</span>
                </div>
              </Card>
            </div>

            {/* Right Column: Agronomic Description, Benefits, Dosage, Specs */}
            <div className="detail-animate-right" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {/* Product Overview Card */}
              <Card variant="default" style={{ padding: 'clamp(var(--space-6), 3vw, var(--space-8))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <Badge variant={isBio ? 'green' : 'blue'}>
                    {product.type}
                  </Badge>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    • Stage: <strong>{product.stage}</strong>
                  </span>
                </div>

                <h2 className="heading-2" style={{ marginBottom: 'var(--space-3)' }}>
                  Product Overview & Science
                </h2>

                <p className="lead" style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-base)' }}>
                  {product.description}
                </p>

                {/* Marathi Description Callout */}
                {product.marathiDescription && (
                  <div
                    className="text-marathi"
                    style={{
                      width: '100%',
                      padding: 'var(--space-3) var(--space-4)',
                      fontSize: '0.9rem',
                      marginBottom: 'var(--space-6)'
                    }}
                  >
                    <strong>मराठी माहिती:</strong> {product.marathiDescription}
                  </div>
                )}

                {/* Agronomic Benefits */}
                <h3 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>
                  Key Agronomic Benefits
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {product.benefits.map((benefit, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <CheckCircle2
                        size={18}
                        color={isBio ? 'var(--color-primary)' : 'var(--color-secondary)'}
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Dosage & Application Method Card */}
              <ProductDosageCard dosage={product.dosage} isBio={isBio} />

              {/* Technical Specifications Table */}
              <ProductSpecsTable product={product} />
            </div>
          </div>

          {/* Previous / Next Product Step Navigation */}
          <ProductDetailNav currentSlug={product.slug} />

          {/* Related Products in this Category */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: 'var(--space-12)' }}>
              <div className="section-header text-left" style={{ marginBottom: 'var(--space-6)' }}>
                <span className="eyebrow">Complementary Formulations</span>
                <h2 className="heading-3">More Products in {product.categoryName}</h2>
              </div>

              <div className="grid grid-3">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.slug} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
