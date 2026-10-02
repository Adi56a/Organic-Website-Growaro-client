import React from 'react';
import { Search, X, Filter, Grid, List, Leaf, Droplets, Sparkles } from 'lucide-react';
import { categories } from '../../data/categories';
import { Badge } from '../common/Badge';

export const ProductFilterToolbar = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  activeStage,
  onStageChange,
  availableStages,
  viewMode,
  onViewModeChange,
  totalResults,
  allCount,
  onClearFilters,
  hasActiveFilters
}) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-2xl)',
        padding: 'clamp(var(--space-4), 3vw, var(--space-6))',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--color-border-subtle)',
        marginBottom: 'var(--space-8)'
      }}
    >
      {/* Search Input and View Mode Controls */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-6)'
        }}
      >
        {/* Search Bar */}
        <div style={{ position: 'relative', flex: 1, minWidth: 'min(100%, 300px)' }}>
          <Search
            size={18}
            color="var(--color-text-light)"
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, crop, nutrient, Marathi (e.g. Kaizen, झिंक, 12:61, Drip)..."
            className="form-input"
            style={{
              paddingLeft: '44px',
              paddingRight: searchQuery ? '40px' : '16px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-bg-main)',
              fontSize: 'var(--font-size-sm)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-light)',
                padding: '4px'
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* View Toggle & Results Counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-muted)' }}>
            Showing <strong>{totalResults}</strong> of {allCount} items
          </span>

          <div
            style={{
              display: 'flex',
              backgroundColor: 'var(--color-bg-surface-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '2px'
            }}
          >
            <button
              onClick={() => onViewModeChange('grid')}
              aria-label="Grid view"
              style={{
                padding: '6px 10px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: viewMode === 'grid' ? '#FFFFFF' : 'transparent',
                color: viewMode === 'grid' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                boxShadow: viewMode === 'grid' ? 'var(--shadow-sm)' : 'none',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              aria-label="List view"
              style={{
                padding: '6px 10px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: viewMode === 'list' ? '#FFFFFF' : 'transparent',
                color: viewMode === 'list' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                boxShadow: viewMode === 'list' ? 'var(--shadow-sm)' : 'none',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Primary Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-2)',
          alignItems: 'center',
          paddingBottom: 'var(--space-4)',
          borderBottom: '1px solid var(--color-border-subtle)',
          marginBottom: 'var(--space-4)'
        }}
      >
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-light)', marginRight: 'var(--space-2)' }}>
          Division:
        </span>

        <button
          onClick={() => onCategoryChange('all')}
          className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
          style={{ fontSize: 'var(--font-size-xs)', padding: '0.45rem 1rem' }}
        >
          All Divisions ({allCount})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: 'var(--font-size-xs)', padding: '0.45rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            {cat.id === 'bio-organics' ? <Leaf size={14} /> : <Droplets size={14} />}
            <span>{cat.name}</span>
            <span style={{ opacity: 0.85, fontSize: '0.75rem' }}>({cat.itemCount})</span>
          </button>
        ))}

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            style={{
              marginLeft: 'auto',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 600,
              color: 'var(--color-error)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px'
            }}
          >
            <X size={14} />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Secondary Crop Growth Stage Filter Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center' }}>
        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-light)', marginRight: 'var(--space-2)' }}>
          Crop Stage:
        </span>

        {availableStages.map((stg) => (
          <button
            key={stg.id}
            onClick={() => onStageChange(stg.id)}
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: activeStage === stg.id ? 'var(--color-primary-100)' : 'var(--color-bg-surface-subtle)',
              color: activeStage === stg.id ? 'var(--color-primary-dark)' : 'var(--color-text-muted)',
              border: activeStage === stg.id ? '1px solid var(--color-primary)' : '1px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {stg.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilterToolbar;
