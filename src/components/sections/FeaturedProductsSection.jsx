import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { Button } from '../common/Button';

export const FeaturedProductsSection = () => {
  // Select top featured products representing both major categories
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="var(--color-primary)" />
            <span>Featured Solutions</span>
          </div>
          <h2 className="heading-2">Flagship Formulations Chosen by Progressive Farmers</h2>
          <p className="lead">
            Curated bio-stimulants, chelated micronutrients, and water-soluble grades delivering verified field results across horticulture and cash crops.
          </p>
        </div>

        {/* Product Card Grid */}
        <div className="grid grid-3" style={{ marginBottom: 'var(--space-12)' }}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* View All Catalogue CTA */}
        <div style={{ textAlign: 'center' }}>
          <Button to="/products" variant="outline" size="lg" icon={ArrowRight}>
            View All 21 Products in Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
