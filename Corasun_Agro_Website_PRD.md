# Corasun Agro Pvt. Ltd. — Website PRD

## 1. Project Overview

Build a modern, premium corporate marketing website for **Corasun Agro Pvt. Ltd.**

The website will transform the supplied company/product profile into a professional digital experience that:

- Presents the company and its agricultural product portfolio.
- Makes products easy to discover.
- Provides useful product-level information.
- Creates clear enquiry/contact paths.
- Uses smooth, premium animation without compromising usability or performance.

### Primary source

The supplied 14-page Corasun Agro company profile is the primary source of truth for the initial product catalogue and product information. It contains product packaging, names, benefits, dosage/application information and English/Marathi descriptions.

The profile covers two major product groups:

1. **Bio Organics / Plant Growth Regulator (PGR) & Micronutrients**
2. **Water Soluble Fertilizers**

Do not invent company claims, certifications, awards, statistics, contact information or other business facts that are not supplied by the company.

---

# 2. Technology Stack

## Core

- Vite
- React
- React Router
- JavaScript/JSX or TypeScript/TSX

## Animation

- GSAP
- GSAP ScrollTrigger
- Lenis for smooth scrolling

## Styling

Use a modern responsive CSS approach appropriate for the project.

## Optional

- Motion for React — only when a specific React UI/layout/gesture interaction benefits from it.
- Swiper — only if an actual carousel requirement exists.

### Animation architecture

GSAP + ScrollTrigger should remain the **primary animation system**.

Use:

- GSAP timelines for coordinated animations.
- ScrollTrigger for scroll-based reveals, scrub, pin and parallax where appropriate.
- Lenis for smooth scrolling.
- CSS transitions for simple hover/focus interactions.

Avoid using multiple animation libraries for the same effect.

---

# 3. Product Goals

The website should:

1. Present Corasun Agro as a professional agricultural products company.
2. Showcase the company's product portfolio clearly.
3. Organize products into understandable categories.
4. Provide individual product-detail experiences.
5. Make enquiry/contact actions easy to find.
6. Create a strong visual identity using agricultural imagery, product packaging and the Corasun brand.
7. Deliver a smooth, premium experience on desktop, tablet and mobile.
8. Maintain good performance despite using animation and rich imagery.

---

# 4. Target Users

- Farmers and agricultural users.
- Distributors and dealers.
- Agricultural professionals.
- Business visitors evaluating the company and its products.

---

# 5. Website Information Architecture

## Main Routes

### `/`
Homepage / marketing landing page.

### `/about`
Company information and positioning.

### `/products`
Complete product catalogue.

### `/products/:slug`
Individual product detail page.

### `/contact`
Contact and enquiry page.

### `404`
Fallback page for unknown routes.

---

# 6. Homepage Requirements

## 6.1 Header / Navigation

Include:

- Corasun Agro logo.
- Home.
- About.
- Products.
- Contact.
- Primary enquiry CTA.
- Responsive mobile navigation.

The header may become sticky after the hero section.

## 6.2 Hero Section

Create a strong first impression using:

- Agricultural imagery.
- Corasun brand identity.
- Short and clear positioning statement.
- Supporting description.
- Primary CTA.
- Secondary CTA where appropriate.

Animation should be elegant and relatively fast. Avoid a long loading/introduction animation.

## 6.3 Company Introduction

A concise introduction to Corasun Agro.

Include:

- Short company description.
- Agricultural focus.
- CTA leading to the About page.

Only use verified company information.

## 6.4 Product Categories

Show the primary product families:

### Bio Organics / PGR & Micronutrients

Products include:

- Kaizen
- Corasil-O
- Ultra Curb
- Ortus Molycra
- Bettor 20
- Ortus Zn
- Ortus Fe
- Corasulf-G
- Ortus Ca EDTA 10%
- Ortus Fe HEDP
- Ortus Zn HEDP

### Water Soluble Fertilizers

Products include:

- Euro-Ferti NPK 12:61:00
- Euro-Ferti 13:40:13
- Euro-Ferti NPK 13:00:45
- Euro-Ferti NPK 00:52:34
- Euro-Ferti NPK 00:60:20
- Euro-Ferti 15-30-15+2Mg+TE
- Euro-Ferti NPKS 0:9:46+TE
- Euro-Ferti NPK 00:42:47+2.8Fe
- Euro-Ferti NPK 14:48:00+TE
- Euro-Ferti NPK 10:52:10+TE

## 6.5 Featured Products

Show a curated selection of products.

Each card should include:

- Product image.
- Product name.
- Category/context.
- Short supporting information where useful.
- View Details CTA.

## 6.6 Product Benefits / Value Section

Create a visual section communicating product-use themes and benefits supported by the supplied product information.

Do not introduce unsupported claims.

## 6.7 Company / Facility Visual

Use supplied company/facility imagery where appropriate.

Do not invent manufacturing capacity, factory statistics or other corporate facts.

## 6.8 Enquiry CTA

Create a strong final CTA encouraging visitors to:

- Enquire about products.
- Contact the company.
- Request further information.

## 6.9 Footer

Include:

- Navigation.
- Company information.
- Verified contact details.
- Social links if supplied.
- Legal links if required.

---

# 7. About Page

The About page should communicate:

- Company introduction.
- Agricultural focus.
- Brand positioning.
- Values/mission where verified.
- Relevant company/facility imagery.
- CTA to products/contact.

Do not fabricate company history, leadership, certifications, awards or statistics.

---

# 8. Products Page

The Products page should provide:

- Product categories.
- Product grid/list.
- Category filtering.
- Product search if useful.
- Product cards.
- Clear navigation to product details.

The product catalogue must be driven by structured data rather than duplicated JSX.

Example conceptual data:

```js
{
  slug: "kaizen",
  name: "Kaizen",
  category: "bio-organics",
  image: "...",
  benefits: [...],
  dosage: "...",
  description: "...",
  specifications: [...]
}
```

The exact fields should reflect the information actually available for each product.

---

# 9. Product Detail Page

Every product should use a reusable product-detail template.

The page should support:

- Product name.
- Product category.
- Product packshot.
- Product description.
- Benefits.
- Dosage/application.
- Composition/specification where available.
- Application/use information.
- Enquiry CTA.
- Related products where useful.

The page should remain readable and structured even when product information differs between products.

---

# 10. Contact / Enquiry Page

Include:

- Verified company contact information.
- Enquiry form.
- Product/enquiry subject where useful.
- Name.
- Email.
- Phone.
- Message.
- Client-side validation.
- Success/error states.

Do not invent phone numbers, email addresses, addresses or social accounts.

---

# 11. Visual Design Direction

The design should be:

- Premium.
- Modern.
- Agricultural.
- Corporate.
- Clean.
- Image-driven.
- Spacious.

### Visual language

Use the supplied Corasun identity as the foundation.

Suggested visual characteristics:

- Agricultural greens.
- Corporate blue.
- White/light neutral surfaces.
- Natural crop/soil imagery.
- Large product packshots.
- Strong typography.
- Generous whitespace.
- Clean grid alignment.
- Subtle borders and shadows.
- Restrained gradients.

The reference website is for **design and information-architecture inspiration only**. Do not copy its text, images, code, layout or branding.

---

# 12. Animation Requirements

## Hero

Use GSAP timeline animation for:

- Heading.
- Supporting text.
- CTA.
- Main visual.

## Scroll Sections

Use ScrollTrigger for:

- Section reveals.
- Image reveals.
- Text reveals.
- Controlled parallax.
- Product-card entrance.
- Storytelling sections where useful.

## Product Cards

Use subtle:

- Image movement.
- Scale.
- Elevation.
- CTA hover feedback.

## Product Details

Coordinate:

- Product image entrance.
- Product information entrance.
- Benefits/specification reveal.

## Important

Animation must enhance the content rather than dominate it.

Avoid:

- Excessive bouncing.
- Long blocking animations.
- Excessive pinning.
- Heavy effects on mobile.
- Animating layout-heavy properties unnecessarily.

Use `transform` and `opacity` wherever possible.

Support `prefers-reduced-motion`.

---

# 13. Responsive Requirements

The website must work across:

- Mobile.
- Tablet.
- Laptop.
- Large desktop.

Pay special attention to:

- Navigation.
- Product grids.
- Product imagery.
- Typography.
- Hero composition.
- Scroll-triggered animation.
- Touch interactions.

Mobile should not simply be a compressed desktop version.

---

# 14. Performance Requirements

- Optimize product images.
- Use appropriate image formats.
- Lazy-load non-critical images.
- Reserve image dimensions/aspect ratios to reduce layout shift.
- Avoid unnecessary JavaScript.
- Avoid excessive animation.
- Prefer transform/opacity animation.
- Keep initial page load lightweight.
- Test animation smoothness on mobile devices.

---

# 15. Accessibility Requirements

- Semantic HTML.
- Proper heading hierarchy.
- Meaningful image alt text.
- Keyboard navigation.
- Visible focus states.
- Accessible buttons/links.
- Sufficient contrast.
- Reduced-motion support.
- Content must remain understandable without animation.

---

# 16. SEO Requirements

At minimum:

- Unique page title.
- Meta description.
- Semantic headings.
- Descriptive URLs.
- Image alt text.
- Open Graph metadata.
- Proper internal linking.
- Product pages with meaningful metadata.

---

# 17. React Architecture

Recommended structure:

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── products/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── products/
│   └── sections/
│
├── data/
│   ├── products.js
│   └── categories.js
│
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Products/
│   ├── ProductDetails/
│   ├── Contact/
│   └── NotFound/
│
├── animations/
│   └── gsap/
│
├── hooks/
├── utils/
├── styles/
├── App.jsx
└── main.jsx
```

---

# 18. Content Rules

The supplied company profile is the initial product-content source.

The company profile contains product information in English and Marathi, including benefits and dosage/application information.

When information is missing:

- Do not invent it.
- Mark it as required content.
- Ask the company for verification/content before final launch.

---

# 19. Definition of Done

The website is considered complete when:

- All agreed routes are implemented.
- Product catalogue is represented accurately.
- Product detail pages work through reusable data-driven components.
- Responsive layouts work across major screen sizes.
- GSAP/ScrollTrigger animations are properly implemented and cleaned up.
- Lenis smooth scrolling works correctly.
- Reduced-motion behavior works.
- No broken links or obvious UI errors remain.
- No major console errors remain.
- Images are optimized.
- SEO basics are implemented.
- Accessibility basics are implemented.
- Production build completes successfully.
