import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../../components/common/PageHeader';
import { products } from '../../data/products';
import { categories, getCategoryById } from '../../data/categories';
import { ProductCard } from '../../components/products/ProductCard';
import { ProductListView } from '../../components/products/ProductListView';
import { ProductFilterToolbar } from '../../components/products/ProductFilterToolbar';
import { CropStageGuide } from '../../components/products/CropStageGuide';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { SearchX, Leaf, Droplets, ArrowRight, Send } from 'lucide-react';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStage, setActiveStage] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const availableStages = [
    { id: 'all', label: 'All Growth Stages' },
    { id: 'vegetative', label: 'Root & Vegetative' },
    { id: 'flowering', label: 'Bloom & Flowering' },
    { id: 'fruiting', label: 'Fruit Development & Ripening' },
    { id: 'stress', label: 'Soil & Stress Management' }
  ];

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('category');
      setSearchParams(nextParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveStage('all');
    setSearchParams({});
  };

  // Filtered Products Calculation
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Category Filter
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }

      // 2. Stage Filter
      if (activeStage !== 'all') {
        const stageStr = (product.stage || '').toLowerCase();
        if (activeStage === 'vegetative' && !stageStr.includes('vegetative') && !stageStr.includes('root')) return false;
        if (activeStage === 'flowering' && !stageStr.includes('flower') && !stageStr.includes('bloom')) return false;
        if (activeStage === 'fruiting' && !stageStr.includes('fruit') && !stageStr.includes('ripen') && !stageStr.includes('berry')) return false;
        if (activeStage === 'stress' && !stageStr.includes('soil') && !stageStr.includes('chlorosis') && !stageStr.includes('all')) return false;
      }

      // 3. Search Query Filter (name, description, type, marathi, crops, composition)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchType = product.type.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchMarathi = (product.marathiDescription || '').toLowerCase().includes(query);
        const matchCrops = (product.targetCrops || []).some((c) => c.toLowerCase().includes(query));
        const matchComp = (product.composition || '').toLowerCase().includes(query);
        const matchStage = (product.stage || '').toLowerCase().includes(query);

        if (!matchName && !matchType && !matchDesc && !matchMarathi && !matchCrops && !matchComp && !matchStage) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, activeStage, searchQuery]);

  const currentCategoryData = activeCategory !== 'all' ? getCategoryById(activeCategory) : null;
  const hasActiveFilters = activeCategory !== 'all' || activeStage !== 'all' || searchQuery.trim() !== '';

  return (
    <div className="products-page">
      <PageHeader
        eyebrow="Agricultural Catalogue"
        title="Complete Product Portfolio & Formulations"
        description="Explore our 21 scientifically proven bio-organic stimulants, chelated micronutrients, and 100% water-soluble Euro-Ferti fertilizers."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="section">
        <div className="container">
          {/* Active Category Description Banner (if single category selected) */}
          {currentCategoryData && (
            <div
              style={{
                backgroundColor: currentCategoryData.id === 'bio-organics' ? 'var(--color-primary-50)' : 'var(--color-secondary-50)',
                border: currentCategoryData.id === 'bio-organics' ? '1px solid var(--color-primary-200)' : '1px solid var(--color-secondary-100)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(var(--space-4), 3vw, var(--space-6))',
                marginBottom: 'var(--space-6)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-4)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {currentCategoryData.id === 'bio-organics' ? (
                  <Leaf size={24} color="var(--color-primary)" />
                ) : (
                  <Droplets size={24} color="var(--color-secondary)" />
                )}
              </div>
              <div>
                <h3 className="heading-5" style={{ marginBottom: '2px' }}>
                  {currentCategoryData.name} ({currentCategoryData.itemCount} Formulations)
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  {currentCategoryData.description}
                </p>
              </div>
            </div>
          )}

          {/* Interactive Toolbar */}
          <ProductFilterToolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            activeStage={activeStage}
            onStageChange={setActiveStage}
            availableStages={availableStages}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            totalResults={filteredProducts.length}
            allCount={products.length}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          {/* Product Items Display */}
          {filteredProducts.length === 0 ? (
            /* Empty State */
            <div
              style={{
                textAlign: 'center',
                padding: 'clamp(var(--space-10), 8vw, var(--space-16))',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-bg-surface-subtle)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}
              >
                <SearchX size={32} color="var(--color-text-light)" />
              </div>
              <h3 className="heading-4" style={{ marginBottom: 'var(--space-2)' }}>
                No Formulations Found
              </h3>
              <p className="lead" style={{ maxWidth: '500px', marginInline: 'auto', marginBottom: 'var(--space-6)', fontSize: 'var(--font-size-sm)' }}>
                No products matched your search or active filter combination. Try clearing your filters or searching for terms like <em>Kaizen, Zinc, 12:61, Drip, Foliar</em>.
              </p>
              <Button onClick={handleClearFilters} variant="primary" size="sm">
                Reset All Filters
              </Button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            /* List View */
            <ProductListView products={filteredProducts} />
          )}

          {/* Crop Stage Application Guide */}
          <CropStageGuide />
        </div>
      </section>
    </div>
  );
};

export default Products;
