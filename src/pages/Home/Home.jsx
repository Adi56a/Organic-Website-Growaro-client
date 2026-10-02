import React from 'react';
import { HeroSection } from '../../components/sections/HeroSection';
import { CompanyIntroSection } from '../../components/sections/CompanyIntroSection';
import { CategoriesSection } from '../../components/sections/CategoriesSection';
import { FeaturedProductsSection } from '../../components/sections/FeaturedProductsSection';
import { BenefitsSection } from '../../components/sections/BenefitsSection';
import { FacilitySection } from '../../components/sections/FacilitySection';
import { CtaBannerSection } from '../../components/sections/CtaBannerSection';

export const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section with GSAP Timeline */}
      <HeroSection />

      {/* 2. Company Introduction */}
      <CompanyIntroSection />

      {/* 3. Product Categories */}
      <CategoriesSection />

      {/* 4. Featured Products Showcase */}
      <FeaturedProductsSection />

      {/* 5. Agronomic Benefits & Scientific Value */}
      <BenefitsSection />

      {/* 6. Facility & Quality Assurance */}
      <FacilitySection />

      {/* 7. Conversion Enquiry CTA Banner */}
      <CtaBannerSection />
    </div>
  );
};

export default Home;
