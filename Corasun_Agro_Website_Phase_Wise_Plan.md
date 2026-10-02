# Corasun Agro Pvt. Ltd. — Phase-Wise Development Plan

## Purpose

This document breaks the Corasun Agro marketing website into clear development phases for implementation using an Antigravity Agent.

Each phase defines **what should be built and the scope of that phase**.

There are no time estimates in this document.

The agent should complete and verify one phase before moving to the next.

---

# Phase 0 — Discovery & Content Audit [COMPLETED]

## Status: COMPLETED
* Delivered: [Phase_0_Discovery_and_Content_Audit.md](file:///d:/FreelancingProject/Organic-website/Phase_0_Discovery_and_Content_Audit.md)
* Data Files Created:
  - [categories.js](file:///d:/FreelancingProject/Organic-website/src/data/categories.js)
  - [products.js](file:///d:/FreelancingProject/Organic-website/src/data/products.js) (21 complete structured products)
  - [company.js](file:///d:/FreelancingProject/Organic-website/src/data/company.js)

## Scope

Prepare all project information before development begins.

## Build / Prepare

- [x] Review the supplied Corasun Agro company profile.
- [x] Identify all available company information.
- [x] Identify all product categories.
- [x] Create the complete product catalogue.
- [x] Identify product names, product images, benefits, dosage/application information and specifications available in the source.
- [x] Identify missing company information.
- [x] Identify missing contact information.
- [x] Identify required website assets.
- [x] Define the final sitemap.
- [x] Define reusable website sections.

## Output

A clear content/data structure that can be used by the React application. (Ready in `src/data/`).

---

# Phase 1 — Project Foundation & Design System [COMPLETED]

## Status: COMPLETED
* Configured Vite + React + React Router DOM with full route tree.
* Integrated GSAP + ScrollTrigger + Lenis smooth scrolling with `prefers-reduced-motion` compliance.
* Built full vanilla CSS design system (`variables.css`, `reset.css`, `typography.css`, `components.css`, `animations.css`, `index.css`).
* Created reusable layout & UI components (`Navbar`, `MobileMenu`, `Footer`, `Layout`, `Button`, `Badge`, `Card`, `PageHeader`, `ScrollToTop`).
* Verified production build with zero errors.

## Scope

Create the technical foundation and reusable design system.

## Build

- [x] Vite + React project.
- [x] React Router.
- [x] Global styling system.
- [x] Responsive breakpoints.
- [x] Typography system.
- [x] Color variables/tokens.
- [x] Spacing system.
- [x] Button styles.
- [x] Card styles.
- [x] Container/grid system.
- [x] Reusable layout components.
- [x] Header/navigation.
- [x] Footer.
- [x] Mobile navigation.
- [x] Basic page transition structure.
- [x] GSAP setup.
- [x] ScrollTrigger setup.
- [x] Lenis setup.

## Architecture

Create reusable components rather than implementing every section directly inside page components.

Create a structured product data system.

---

# Phase 2 — Homepage / Marketing Experience [COMPLETED]

## Status: COMPLETED
* Built and verified complete Homepage experience with rich visual aesthetics and modular section architecture:
  - Sticky `Navbar` and `MobileMenu` with quick enquiry CTAs.
  - `HeroSection` with coordinated GSAP entrance timeline, brand identity, and live metric counters.
  - `CompanyIntroSection` featuring verified agricultural mission and 3 core scientific pillars.
  - `CategoriesSection` presenting Bio Organics (11 products) and Water Soluble Fertilizers (10 products).
  - `FeaturedProductsSection` showcasing flagship products with rich `ProductCard` components.
  - `BenefitsSection` detailing 6 core agronomic value themes.
  - `FacilitySection` highlighting scientific formulating integrity and quality standards.
  - `CtaBannerSection` high-impact conversion banner with direct enquiry and phone/email links.
  - `Footer` with complete navigation, category links, and verified contact channels.

## Scope

Build the complete main marketing homepage.

## Build

### Header

- [x] Logo.
- [x] Navigation.
- [x] Product link.
- [x] About link.
- [x] Contact link.
- [x] Enquiry CTA.
- [x] Mobile menu.

### Hero

- [x] Agricultural visual.
- [x] Corasun branding.
- [x] Main headline.
- [x] Supporting text.
- [x] CTA.
- [x] Secondary CTA where appropriate.
- [x] GSAP entrance animation.

### Company Introduction

- [x] Short verified company introduction.
- [x] Supporting visual.
- [x] About CTA.

### Product Categories

Build category presentation for:

- [x] Bio Organics / PGR & Micronutrients.
- [x] Water Soluble Fertilizers.

### Featured Products

- [x] Product cards.
- [x] Product imagery.
- [x] Product names.
- [x] Category.
- [x] Product detail CTA.

### Benefits / Value Section

- [x] Product-related benefit themes.
- [x] Agricultural visuals.
- [x] Scroll-triggered animation.

### Company / Facility Section

- [x] Relevant supplied imagery.
- [x] Verified company information.
- [x] CTA.

### Final CTA

- [x] Product enquiry.
- [x] Contact CTA.

### Footer

- [x] Navigation.
- [x] Company information.
- [x] Contact information once verified.
- [x] Social links where available.

---

# Phase 3 — Product Catalogue System [COMPLETED]

## Status: COMPLETED
* Implemented complete data-driven Product Catalogue system (`/products`):
  - Consumes structured 21-product dataset from `src/data/products.js` and categories from `src/data/categories.js`.
  - Multi-criteria real-time search (name, composition, crops, Marathi terms, description).
  - Primary category division filtering (All, Bio Organics & PGR, Water Soluble Fertilizers).
  - Secondary crop growth stage filter chips (Root & Vegetative, Bloom & Flowering, Fruit & Ripening, Stress & Soil).
  - Responsive Grid View and List View options with view switcher.
  - Interactive empty states with reset triggers.
  - Built `CropStageGuide` matrix component mapping products across crop phenology.
  - Verified responsive layouts across mobile, tablet, and desktop viewports.

## Scope

Build the complete product browsing experience.

## Build

### Product Data

- [x] Create structured product data containing the available information for every supplied product.
- [x] The UI must consume this data rather than duplicate product content in JSX.

### Product Categories

Implement:

- [x] Bio Organics / PGR & Micronutrients.
- [x] Water Soluble Fertilizers.

### Product Listing

Build:

- [x] Product grid.
- [x] Product cards.
- [x] Product images.
- [x] Product names.
- [x] Categories.
- [x] View Details CTA.

### Filtering

- [x] Implement category-based filtering.

### Search

- [x] Add product search if it improves the catalogue experience.

### Responsive Behaviour

- [x] Ensure the product catalogue works properly across mobile, tablet and desktop.

---

# Phase 4 — Product Detail Experience [COMPLETED]

## Status: COMPLETED
* Created dynamic reusable Product Detail experience (`/products/:slug`):
  - Dynamic route loading all 21 products from `src/data/products.js`.
  - Built `ProductPackshotVisual` component with ambient radial glow, certified purity badge, and packshot presentation.
  - Formatted English technical descriptions and Marathi callouts.
  - Built `ProductDosageCard` highlighting Foliar Spray, Drip Fertigation, and Application Timing.
  - Built `ProductSpecsTable` detailing active formula composition, recommended growth stage, target crops, and pack sizes.
  - Added `ProductDetailNav` allowing seamless previous/next product stepping across the 21 items.
  - Embedded high-impact conversion card pre-filling product name into enquiry actions.
  - Rendered `RelatedProducts` in same category with `ProductCard`.
  - Added GSAP coordinated entrance reveals.

## Scope

Create a reusable product detail system that can render every product from structured data.

## Build

### Product Header

- [x] Product name.
- [x] Category.
- [x] Product image.
- [x] Short description.

### Product Information

- [x] Benefits.
- [x] Dosage.
- [x] Application method.
- [x] Composition/specification where available.
- [x] Additional information from the source profile.

### Visual Experience

- [x] Large product packshot.
- [x] Image reveal.
- [x] Content reveal.
- [x] Scroll-based section animation.

### Conversion

Include:

- [x] Product enquiry CTA.
- [x] Contact CTA.

### Related Products

- [x] Show relevant products from the same or related category where useful.

---

# Phase 5 — About Page [COMPLETED]

## Status: COMPLETED
* Built comprehensive corporate About presentation (`/about`):
  - Structured brand narrative on agricultural bio-chemistry and field agronomy.
  - Formatted 4 core verified guiding pillars: Scientific Efficacy, Farmer-Centric Innovation, Purity & Quality Assurance, Sustainable Stewardship.
  - Visual division breakdown: Bio Organics & PGR (11 products) and Euro-Ferti Water Soluble (10 products).
  - Technical Formulation Standards: EDTA & HEDP chelation stability up to pH 9.0, 100% water solubility without residues, and stage-specific crop nutrition.
  - Dual conversion CTAs leading directly to the 21-product catalogue and contact advisory.
  - Strict compliance with content rules: zero fabricated statistics, certifications, or leadership claims.

## Scope

Build the company-focused presentation.

## Build

- [x] Company introduction.
- [x] Agricultural focus.
- [x] Brand positioning.
- [x] Verified mission/values if available.
- [x] Company/facility imagery from supplied assets.
- [x] Supporting visual sections.
- [x] CTA to products.
- [x] CTA to contact.

## Content Rule

Do not invent:

- Company history.
- Leadership details.
- Certifications.
- Awards.
- Manufacturing capacity.
- Customer numbers.
- Locations.
- Other corporate claims.

Use only verified information.

---

# Phase 6 — Contact & Enquiry Experience [COMPLETED]

## Status: COMPLETED
* Built comprehensive Contact & Agronomic Enquiry module (`/contact`):
  - Structured contact channels: verified office, direct telephone advisory line, corporate email, and business hours.
  - Interactive multi-field enquiry form with real-time validation (Full Name, Email, Phone, State/Region, Primary Crop, Subject Selector, Message).
  - Pre-fill parameter integration (`?subject=...`) from Product Detail pages, Featured Cards, and CTA banners.
  - Simulated processing state with feedback spinner and generated Reference ID confirmation card (`CORA-XXXXXX`).
  - Interactive FAQ accordion covering EDTA vs. HEDP chelation, drip compatibility, dealership onboarding, and Marathi schedules.

## Scope

Build the conversion/contact system.

## Build

### Contact Information

Display only verified:

- [x] Company address.
- [x] Phone.
- [x] Email.
- [x] Website/social links.
- [x] Other official contact channels.

### Enquiry Form

Fields:

- [x] Name.
- [x] Email.
- [x] Phone.
- [x] Product/enquiry subject.
- [x] Message.

### Form Experience

Implement:

- [x] Validation.
- [x] Required-field handling.
- [x] Error states.
- [x] Success state.
- [x] Loading state if a backend/API is later connected.

### CTA Integration

- [x] Connect product pages and homepage CTAs to the enquiry experience.

---

# Phase 7 — Animation & Motion Polish [COMPLETED]

## Status: COMPLETED
* Coordinated GSAP + ScrollTrigger + Lenis motion system:
  - Synchronized Lenis smooth scroll engine with GSAP ScrollTrigger ticker loops.
  - Coordinated Hero entrance timelines with cascading text, badges, visual elements, and metric counters.
  - Built custom `useScrollReveal` hook and reusable `<ScrollReveal />` wrapper component.
  - Hardware-accelerated hover states (`transform: translateY(-4px)`, shadow glows) on `ProductCard` and interactive UI components.
  - Product Details animated left/right entrance and smooth prev/next transitions.
  - Strict accessibility compliance with `prefers-reduced-motion` across CSS and JS animation hooks.

## Scope

Create the final premium motion system across the website.

GSAP + ScrollTrigger remain the primary animation tools.

Lenis handles smooth scrolling.

## Build

### Global

- [x] Smooth scrolling.
- [x] Page/section transition behavior.
- [x] Navigation micro-interactions.

### Hero

- [x] Text entrance.
- [x] Image entrance.
- [x] CTA entrance.
- [x] Controlled visual movement.

### Sections

- [x] Scroll-triggered reveals.
- [x] Image clip reveals.
- [x] Text reveals.
- [x] Controlled parallax.

### Product Cards

- [x] Hover interaction.
- [x] Image movement.
- [x] Subtle scale/elevation.
- [x] CTA interaction.

### Product Details

- [x] Product image animation.
- [x] Information reveal.
- [x] Benefits/specification reveal.
- [x] Related-product animation.

### Mobile

- [x] Simplify animations that are awkward or heavy on touch devices.

### Accessibility

- [x] Implement `prefers-reduced-motion`.

---

# Phase 8 — Responsive Design & Visual Refinement [COMPLETED]

## Status: COMPLETED
* Visual Polish & Multi-Viewport Verification:
  - Mobile (320px - 640px): Full-screen sliding drawer navigation with body-scroll lock, touch-friendly tap targets, single-column responsive grids, stackable form fields, and adaptive typography (`clamp()`).
  - Tablet (640px - 1024px): Balanced 2-column grids, fluid filter toolbars, responsive dosage tables, and touch-safe hover media queries (`@media (hover: hover)`).
  - Desktop & Large Displays (1024px - 1536px+): Contained container max-width (`1280px`), generous whitespace, multi-layered shadows, glassmorphism borders, and crisp visual hierarchy.
  - Refined all empty states, active button states, form input focus rings, and Marathi typography styling.

## Scope

Perform a complete visual refinement pass across all pages.

## Validate

### Mobile

- [x] Navigation.
- [x] Hero.
- [x] Typography.
- [x] Product cards.
- [x] Product details.
- [x] Forms.
- [x] CTA sections.
- [x] Footer.
- [x] Animation.

### Tablet

- [x] Grid behaviour.
- [x] Typography.
- [x] Image sizing.
- [x] Navigation.
- [x] Section spacing.

### Desktop

- [x] Large hero composition.
- [x] Content width.
- [x] Product grids.
- [x] Visual hierarchy.
- [x] Scroll animations.

### Large Screens

- [x] Ensure content does not become excessively stretched.

## Polish

- [x] Spacing.
- [x] Alignment.
- [x] Typography.
- [x] Border radius.
- [x] Shadows.
- [x] Image cropping.
- [x] Button states.
- [x] Hover states.
- [x] Empty states.

---

# Phase 9 — Performance, Accessibility & SEO

## Scope

Prepare the website for production-quality delivery.

## Performance

- Optimize images.
- Lazy-load non-critical images.
- Reduce unnecessary JavaScript.
- Prevent layout shifts.
- Optimize GSAP animations.
- Reduce expensive mobile effects.
- Verify smooth scrolling performance.

## Accessibility

- Semantic HTML.
- Heading hierarchy.
- Alt text.
- Keyboard navigation.
- Focus states.
- Accessible forms.
- Contrast.
- Reduced-motion support.

## SEO

Implement:

- Page titles.
- Meta descriptions.
- Semantic headings.
- Descriptive URLs.
- Open Graph metadata.
- Image alt text.
- Internal links.
- Product page metadata.

---

# Phase 10 — QA & Production Readiness

## Scope

Perform the final complete website verification.

## Functional QA

Check:

- Every route.
- Every navigation link.
- Product filtering.
- Product search if implemented.
- Product detail routing.
- Contact form.
- CTA links.
- Mobile menu.
- Footer links.
- 404 route.

## Visual QA

Check:

- Mobile.
- Tablet.
- Desktop.
- Large desktop.

Verify:

- No overflow.
- No broken images.
- No broken layouts.
- No inconsistent spacing.
- No text clipping.
- No animation glitches.

## Technical QA

Check:

- Console errors.
- React warnings.
- GSAP cleanup.
- ScrollTrigger behavior.
- Lenis integration.
- Production build.
- Asset loading.

## Final Output

A production-ready Corasun Agro marketing website with:

- Corporate presentation.
- Product catalogue.
- Product detail pages.
- Contact/enquiry experience.
- Responsive design.
- Premium animation.
- Performance optimization.
- Accessibility basics.
- SEO basics.
