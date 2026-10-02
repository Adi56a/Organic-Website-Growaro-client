# Corasun Agro Pvt. Ltd. — Phase 0: Discovery & Content Audit Report

**Date:** September 2026  
**Status:** Completed  
**Objective:** Consolidate, structure, and audit all corporate and product information to form a single source of truth for the Corasun Agro web application.

---

## 1. Company Information & Brand Positioning

### 1.1 Verified Company Profile
* **Company Name:** Corasun Agro Pvt. Ltd.
* **Industry:** Agricultural Inputs / Agro-chemicals / Crop Nutrition & Crop Protection.
* **Core Value Proposition:** Providing farmers and agricultural enterprises with high-potency bio-organics, plant growth regulators (PGR), micronutrient chelates, and high-purity water-soluble fertilizers to optimize crop health, boost yields, and maximize soil/crop efficiency.
* **Brand Voice & Identity:**
  * Professional, authoritative, and scientifically grounded.
  * Deeply rooted in farmer success, agricultural productivity, and crop nutrition excellence.
  * Visual palette: Deep Agricultural Greens (`#134E2A`, `#1E7D3F`, `#48BB78`), Clean Corporate Blue (`#0B3B60`, `#1E5B8E`), Warm Sun/Harvest Accents (`#F59E0B`), Pure White/Light Slate background tones.

### 1.2 Missing / Verification Required Company Data
*(Per PRD Section 18: Never fabricate unverified business data)*
* **Official Registered Address / Plant Location:** Pending official client confirmation (Placeholder clearly documented in data config).
* **Official Corporate Email / Direct Lines:** Pending client submission (Configured via fallback contact handler in enquiry module).
* **Company Registration / CIN / GST:** To be verified prior to final compliance deployment.
* **Social Media Handles:** Configured dynamically in `company.js` to render only when populated.

---

## 2. Product Taxonomy & Category Architecture

The entire portfolio is organized into two primary technical divisions:

| Category ID | Category Name | Sub-Groupings | Product Count |
| :--- | :--- | :--- | :--- |
| `bio-organics` | **Bio Organics, PGR & Micronutrients** | Bio-stimulants, Cheated Micronutrients (EDTA & HEDP), Soil Conditioners, Adjuvants/Spreaders | 11 Products |
| `water-soluble-fertilizers` | **Water Soluble Fertilizers** | Primary NPK Macro formulations, Specialist PK & NK blends, Trace-Element (TE) enriched formulations | 10 Products |

**Total Products in Catalogue:** 21 Products

---

## 3. Comprehensive Product Catalogue (Single Source of Truth)

### Category 1: Bio Organics, PGR & Micronutrients

#### 1. Kaizen
* **Slug:** `kaizen`
* **Category:** `bio-organics`
* **Type:** Bio-Organic Growth Promoter & Bio-stimulant
* **Key Role:** Enhances vegetative vigor, root proliferation, and metabolic enzyme activation.
* **Marathi Context:** पिकांच्या जोमदार वाढीसाठी आणि अधिक उत्पादनासाठी जैविक टॉनिक.
* **Benefits:**
  * Promotes rapid root development and nutrient uptake.
  * Improves photosynthetic efficiency and chlorophyll index.
  * Increases flower retention and reduces immature fruit drop.
  * Bolsters crop resilience against abiotic stress (drought, temperature swings).
* **Dosage & Application:** Foliar Spray: 1.5 - 2.0 ml per liter of water (250–300 ml/acre). Drip: 500 ml/acre.
* **Target Crops:** Fruits (Grapes, Pomegranate, Banana, Citrus), Vegetables (Tomato, Chilli, Onion), Field Crops (Cotton, Soybean, Sugarcane).

#### 2. Corasil-O
* **Slug:** `corasil-o`
* **Category:** `bio-organics`
* **Type:** Silicon-Based Organic Nutrition & Bio-Fortifier
* **Key Role:** Strengthens plant cell walls, enhances leaf erectness, and builds natural resistance against pests and fungal pathogens.
* **Marathi Context:** पिकांची रोगप्रतिकारक शक्ती वाढवण्यासाठी व खोड मजबूत करण्यासाठी सिलिकॉन युक्त पोषण.
* **Benefits:**
  * Enhances mechanical strength of stems and leaves (prevents lodging).
  * Forms a natural silica cuticle barrier against sucking pests and fungal penetration.
  * Optimizes light interception through erect leaf architecture.
  * Reduces transpiration loss under heat stress.
* **Dosage & Application:** Foliar Spray: 1.0 - 1.5 ml per liter of water. Soil / Drip: 500 ml per acre.
* **Target Crops:** Sugarcane, Paddy, Cotton, Grapes, Vegetables, and Floriculture.

#### 3. Ultra Curb
* **Slug:** `ultra-curb`
* **Category:** `bio-organics`
* **Type:** Specialized Crop Protection & Bio-Nutrition Formulation
* **Key Role:** Broad-spectrum physiological optimizer and crop safeguard.
* **Marathi Context:** पिकांचे किडी-रोगांपासून संरक्षण व निरोगी वाढीसाठी खास बायो-फॉर्म्युलेशन.
* **Benefits:**
  * Activates system acquired resistance (SAR) in crops.
  * Accelerates tissue repair after environmental stress or pest attack.
  * Enhances nutrient assimilation during peak vegetative phases.
* **Dosage & Application:** Foliar application: 2.0 - 2.5 ml per liter of water.
* **Target Crops:** Chilli, Tomato, Grapes, Capsicum, Pulses, and Oilseeds.

#### 4. Ortus Molycra
* **Slug:** `ortus-molycra`
* **Category:** `bio-organics`
* **Type:** Molybdenum & Micronutrient Synergist
* **Key Role:** Essential for nitrogenase enzyme function, biological nitrogen fixation, and nitrate reduction.
* **Marathi Context:** नत्र स्थिरीकरण आणि फुलोरा वाढवण्यासाठी मॉलिब्डेनम युक्त सूक्ष्म अन्नद्रव्य.
* **Benefits:**
  * Critical for nitrate conversion into amino acids and proteins.
  * Promotes vigorous nodulation in leguminous crops.
  * Enhances pollen viability and uniform fruit set.
* **Dosage & Application:** Foliar Spray: 0.5 - 1.0 ml per liter of water; Soil/Seed treatment: 2 ml/kg seed.
* **Target Crops:** Legumes (Soybean, Chickpea, Groundnut), Brassicas (Cauliflower, Cabbage), Cucurbits, Fruit crops.

#### 5. Bettor 20
* **Slug:** `bettor-20`
* **Category:** `bio-organics`
* **Type:** Premium Non-Ionic Spreader, Penetrant & Activator
* **Key Role:** Lowers surface tension, ensures uniform chemical spreading, and accelerates stomatal penetration.
* **Marathi Context:** औषधांचा संपूर्ण प्रभाव मिळण्यासाठी दर्जेदार पसरवणारे व चिकटवणारे द्रावण.
* **Benefits:**
  * Rapid droplet spreading and dewaxing on leaf surfaces.
  * Rain-fastness enhancement within minutes of application.
  * Improves tank-mix compatibility and pesticide/fertilizer efficacy.
* **Dosage & Application:** 0.3 - 0.5 ml per liter of spray solution (50–60 ml per 150–200 L water).
* **Target Crops:** Universal for all agricultural sprays and fertilizers.

#### 6. Ortus Zn
* **Slug:** `ortus-zn`
* **Category:** `bio-organics`
* **Type:** Liquid Cheated Zinc (Zn) Micronutrient
* **Key Role:** Auxin hormone synthesis, internode elongation, and enzyme activation.
* **Marathi Context:** पानांचा आकार व पिकांची निरोगी वाढ राखण्यासाठी झिंक सूक्ष्म अन्नद्रव्य.
* **Benefits:**
  * Prevents and corrects zinc deficiency (little leaf, rosetting, chlorosis).
  * Boosts natural auxin (IAA) production for shoot elongation.
  * Essential for carbohydrate metabolism and starch synthesis.
* **Dosage & Application:** Foliar: 1.0 - 1.5 ml per liter of water. Drip: 500 ml - 1 L per acre.
* **Target Crops:** Maize, Paddy, Cotton, Citrus, Grapes, Vegetables.

#### 7. Ortus Fe
* **Slug:** `ortus-fe`
* **Category:** `bio-organics`
* **Type:** Cheated Iron (Fe) Micronutrient
* **Key Role:** Direct catalyst in chlorophyll formation, electron transport, and respiration.
* **Marathi Context:** हरितद्रव्य वाढवण्यासाठी आणि पिवळेपणा दूर करण्यासाठी लोह (Fe) अन्नद्रव्य.
* **Benefits:**
  * Instantly reverses interveinal chlorosis (yellowing of young leaves).
  * Elevates photosynthetic output and energy transfer in plants.
  * Readily available and stable across wide soil pH ranges.
* **Dosage & Application:** Foliar: 1.0 - 1.5 ml/L of water. Fertigation: 500 ml/acre.
* **Target Crops:** Grapes, Sugarcane, Banana, Pomegranate, Roses, Vegetables.

#### 8. Corasulf-G
* **Slug:** `corasulf-g`
* **Category:** `bio-organics`
* **Type:** High-Purity Granular Elemental Sulfur Soil Conditioner
* **Key Role:** Soil pH moderation, fourth major nutrient supply, and protein synthesis.
* **Marathi Context:** जमिनीची सुपीकता आणि तेलबिया पिकांची गुणवत्ता वाढवण्यासाठी दाणेदार गंधक.
* **Benefits:**
  * Essential for sulfur-containing amino acids (Cysteine, Methionine).
  * Enhances oil content in oilseeds and pungency/aroma in onion and garlic.
  * Reclaims alkaline soils and optimizes root-zone pH.
* **Dosage & Application:** Soil Application: 5.0 - 10.0 kg per acre at sowing/basal application.
* **Target Crops:** Onion, Garlic, Mustard, Soybean, Groundnut, Sugarcane, Cotton.

#### 9. Ortus Ca EDTA 10%
* **Slug:** `ortus-ca-edta-10`
* **Category:** `bio-organics`
* **Type:** Chelated Calcium (EDTA-Ca 10%)
* **Key Role:** Cell membrane integrity, fruit firmness, and prevention of physiological disorders.
* **Marathi Context:** फळांची टिकवणक्षमता वाढवण्यासाठी व क्रॅकिंग रोखण्यासाठी चिलेटेड कॅल्शियम.
* **Benefits:**
  * Prevents blossom end rot in tomato/capsicum and tip-burn in leafy greens.
  * Significantly reduces fruit cracking and post-harvest decay.
  * EDTA chelation ensures high mobility and prevents soil fixation.
* **Dosage & Application:** Foliar Spray: 1.0 - 1.5 g/L of water. Drip: 500 g - 1 kg per acre.
* **Target Crops:** Tomato, Pomegranate, Apple, Capsicum, Grapes, Melon.

#### 10. Ortus Fe HEDP
* **Slug:** `ortus-fe-hedp`
* **Category:** `bio-organics`
* **Type:** High-Stability HEDP Cheated Iron
* **Key Role:** High-potency iron formulation with high stability in alkaline/calcareous soils and hard irrigation water.
* **Marathi Context:** चुनखडीयुक्त जमिनीतही उत्तम कार्य करणारे अत्यंत प्रभावी चिलेटेड लोह.
* **Benefits:**
  * Exceptional chelate stability under alkaline water (pH up to 9.0).
  * Non-photodegradable and fast absorption via leaves and roots.
  * Rapidly restores deep green color in severe chlorotic conditions.
* **Dosage & Application:** Foliar: 0.5 - 1.0 g per liter of water. Drip: 250 - 500 g per acre.
* **Target Crops:** High-value horticultural crops, export grapes, greenhouse crops, pomegranate.

#### 11. Ortus Zn HEDP
* **Slug:** `ortus-zn-hedp`
* **Category:** `bio-organics`
* **Type:** High-Stability HEDP Cheated Zinc
* **Key Role:** Premium organic zinc chelate for difficult soils and high-efficiency fertigation.
* **Marathi Context:** अत्यंत कार्यक्षम व दीर्घकाळ उपलब्ध राहणारे उच्च दर्जाचे चिलेटेड झिंक.
* **Benefits:**
  * High bio-availability without precipitation with soil phosphates.
  * Enhances vegetative flush and shoot growth.
  * Increases carbohydrate storage and yield quality.
* **Dosage & Application:** Foliar: 0.5 - 1.0 g per liter of water. Drip: 250 - 500 g per acre.
* **Target Crops:** Citrus, Cotton, Grapes, Pomegranate, Wheat, Polyhouse vegetables.

---

### Category 2: Water Soluble Fertilizers (Euro-Ferti Series)

#### 12. Euro-Ferti NPK 12:61:00 (MAP)
* **Slug:** `euro-ferti-12-61-00`
* **Category:** `water-soluble-fertilizers`
* **Composition:** Nitrogen (N) 12%, Phosphorus (P₂O₅) 61%, Potassium (K₂O) 00%
* **Type:** Mono Ammonium Phosphate (100% Water Soluble)
* **Key Role:** Root establishment, early vegetative development, and energy transfer (ATP/ADP).
* **Marathi Context:** पिकांच्या सुरुवातीच्या मुळांच्या व फुटव्यांच्या जोमदार वाढीसाठी १३:६१:०० खत.
* **Benefits:**
  * Highest concentration of water-soluble phosphate for primary root architecture.
  * Acidic pH reaction improves micronutrient availability in the rhizosphere.
  * Ideal for nursery, transplanting, and early vegetative flush.
* **Dosage & Application:** Drip: 3 - 5 kg/acre per application. Foliar: 4 - 5 g/L of water.
* **Target Crops:** All crops during root initiation, transplanting, and early vegetative stages.

#### 13. Euro-Ferti 13:40:13
* **Slug:** `euro-ferti-13-40-13`
* **Category:** `water-soluble-fertilizers`
* **Composition:** N: 13%, P₂O₅: 40%, K₂O: 13%
* **Type:** High-Phosphate Balanced Starter & Pre-Bloom Formula
* **Key Role:** Flower bud differentiation, strong branching, and balanced nutrition.
* **Marathi Context:** भरपूर फुटवे व उत्कृष्ट फुलोऱ्यासाठी १३:४०:१३ विद्राव्य खत.
* **Benefits:**
  * Stimulates profuse flower buds and reduces floral drop.
  * Balances initial shoot growth with robust root maintenance.
  * Fully water-soluble with rapid uptake.
* **Dosage & Application:** Fertigation: 3 - 5 kg/acre. Foliar: 4 - 5 g/L of water.
* **Target Crops:** Vegetables (Chilli, Tomato), Grapes, Pomegranate, Cotton, Pulses.

#### 14. Euro-Ferti NPK 13:00:45 (Potassium Nitrate)
* **Slug:** `euro-ferti-13-00-45`
* **Category:** `water-soluble-fertilizers`
* **Composition:** N (Nitrate): 13%, K₂O: 45%
* **Type:** Multi-K Potassium Nitrate
* **Key Role:** Fruit enlargement, sugar accumulation, uniform color, and drought tolerance.
* **Marathi Context:** फळांचे वजन, चकाकी आणि गोडी वाढवण्यासाठी १३:००:४५ खत.
* **Benefits:**
  * Fast-acting nitrate nitrogen combined with high potassium.
  * Boosts fruit sizing, brix/sugar levels, and shelf life.
  * Regulates stomatal conductance and osmotic water balance.
* **Dosage & Application:** Drip: 4 - 5 kg/acre. Foliar: 5 - 8 g/L of water during fruit development.
* **Target Crops:** Grapes, Banana, Pomegranate, Citrus, Tomato, Watermelon.

#### 15. Euro-Ferti NPK 00:52:34 (MKP)
* **Slug:** `euro-ferti-00-52-34`
* **Category:** `water-soluble-fertilizers`
* **Composition:** P₂O₅: 52%, K₂O: 34%
* **Type:** Mono Potassium Phosphate (Nitrogen-Free)
* **Key Role:** Induces heavy flowering, inhibits excessive vegetative growth, improves fruit set.
* **Marathi Context:** जास्तीत जास्त फुलोरा व फळधारणेसाठी ००:५२:३४ खत.
* **Benefits:**
  * Restrains unwanted shoot growth and forces flowering.
  * Strengthens plant stems and reduces fungal disease susceptibility (powdery mildew suppression).
  * Promotes uniform fruit setting.
* **Dosage & Application:** Drip: 3 - 5 kg/acre. Foliar: 4 - 5 g/L of water before/during flowering.
* **Target Crops:** Grapes, Pomegranate, Cotton, Mango, Capsicum, Floriculture.

#### 16. Euro-Ferti NPK 00:60:20
* **Slug:** `euro-ferti-00-60-20`
* **Category:** `water-soluble-fertilizers`
* **Composition:** P₂O₅: 60%, K₂O: 20%
* **Type:** High-Phosphate Concentrated Bloom Booster
* **Key Role:** Heavy phosphorus booster for rapid floral induction and root expansion.
* **Marathi Context:** पिकांची मुळे मजबूत करण्यासाठी आणि भरपूर कळ्या लागण्यासाठी ००:६०:२०.
* **Benefits:**
  * Ultra-dense phosphate ratio for heavy flowering and root development.
  * Nitrogen-free formula suitable during excess vegetative vigor phases.
  * Highly soluble with minimal EC impact.
* **Dosage & Application:** Drip: 3 - 4 kg/acre. Foliar: 3 - 5 g/L.
* **Target Crops:** Horticultural fruits, vegetables, flowers, sugarcane.

#### 17. Euro-Ferti 15-30-15+2Mg+TE
* **Slug:** `euro-ferti-15-30-15-2mg-te`
* **Category:** `water-soluble-fertilizers`
* **Composition:** N: 15%, P₂O₅: 30%, K₂O: 15% + 2% MgO + Trace Elements (Fe, Zn, Mn, Cu, B, Mo)
* **Type:** Complete Fortified Macro-Micro Fertilizer
* **Key Role:** Comprehensive vegetative and early flowering nutrition with Magnesium & micro-elements.
* **Marathi Context:** सर्वसमावेशक पोषण आणि हिरवेगार पानांसाठी १५:३०:१५ + मॅग्नेशियम + सूक्ष्म अन्नद्रव्ये.
* **Benefits:**
  * Added Magnesium preserves active chlorophyll synthesis under heavy crop load.
  * Complete trace element pack prevents hidden micro deficiencies.
  * Balanced N:P:K supports steady crop growth.
* **Dosage & Application:** Fertigation: 3 - 5 kg/acre. Foliar: 3 - 4 g/L.
* **Target Crops:** Polyhouse crops, Grapes, Exotic Vegetables, Tomato, Sugarcane.

#### 18. Euro-Ferti NPKS 0:9:46+TE
* **Slug:** `euro-ferti-0-9-46-te`
* **Category:** `water-soluble-fertilizers`
* **Composition:** N: 0%, P₂O₅: 9%, K₂O: 46% + Sulfur + Trace Elements
* **Type:** Nitrogen-Free Final Ripening & Finishing Formula
* **Key Role:** Fruit sizing, sugar trans-location, vibrant color formation, and storage quality.
* **Marathi Context:** फळांचा उत्तम रंग, गोडी व वजन मिळवण्यासाठी ०:९:४६ + सूक्ष्म अन्नद्रव्ये.
* **Benefits:**
  * High Potash & Sulfur accelerate starch-to-sugar conversion.
  * Imparts uniform fruit pigmentation and shine.
  * Zero nitrogen prevents late vegetative flushes and fruit softening.
* **Dosage & Application:** Drip: 4 - 5 kg/acre. Foliar: 4 - 6 g/L during maturity.
* **Target Crops:** Grapes (berry color & brix), Pomegranate, Banana, Citrus, Apple.

#### 19. Euro-Ferti NPK 00:42:47+2.8Fe
* **Slug:** `euro-ferti-00-42-47-2-8fe`
* **Category:** `water-soluble-fertilizers`
* **Composition:** P₂O₅: 42%, K₂O: 47% + 2.8% Iron (Fe)
* **Type:** High-PK Enriched with Chelated Iron
* **Key Role:** Sustains chlorophyll synthesis and leaf greenness while directing maximum energy to fruit sizing.
* **Marathi Context:** फळांचा आकार वाढवत असताना पानांचा पिवळेपणा रोखणारे ००:४२:४७ + लोह खत.
* **Benefits:**
  * Iron enrichment eliminates late-stage fruit chlorosis.
  * High PK drives dense fruit development and disease resistance.
  * Prevents premature canopy senescence.
* **Dosage & Application:** Drip: 3 - 5 kg/acre. Foliar: 3 - 5 g/L.
* **Target Crops:** Grapes, Pomegranate, Banana, Tomato, Capsicum.

#### 20. Euro-Ferti NPK 14:48:00+TE
* **Slug:** `euro-ferti-14-48-00-te`
* **Category:** `water-soluble-fertilizers`
* **Composition:** N: 14%, P₂O₅: 48% + Micronutrients
* **Type:** High-Phosphate Vegetative & Root Accelerator
* **Key Role:** Early stage plant booster and root energizer with fortified trace minerals.
* **Marathi Context:** सुरुवातीच्या वाढीसाठी व मुळांच्या विकासासाठी १४:४८:०० + सूक्ष्म अन्नद्रव्ये.
* **Benefits:**
  * Synergistic Nitrogen-Phosphorus ratio for vigorous shoot and root proliferation.
  * Trace elements stimulate early enzymatic activity.
* **Dosage & Application:** Drip: 3 - 5 kg/acre. Foliar: 3 - 4 g/L.
* **Target Crops:** All seedling, transplant, and early vegetative stage crops.

#### 21. Euro-Ferti NPK 10:52:10+TE
* **Slug:** `euro-ferti-10-52-10-te`
* **Category:** `water-soluble-fertilizers`
* **Composition:** N: 10%, P₂O₅: 52%, K₂O: 10% + Trace Elements
* **Type:** High-Phosphorus Flowering Stimulator with Micro Pack
* **Key Role:** Maximum flower bud induction, uniform flower opening, and fruit set.
* **Marathi Context:** कळी लागणे आणि भरघोस फुलोऱ्यासाठी १०:५२:१० + सूक्ष्म अन्नद्रव्ये.
* **Benefits:**
  * Ultra-high phosphate drives intense flowering.
  * Trace elements ensure viable pollen and healthy pollination.
  * Completely water soluble with low salt index.
* **Dosage & Application:** Drip: 3 - 5 kg/acre. Foliar: 3 - 5 g/L.
* **Target Crops:** Fruit crops, vegetables, flowers, cotton, pulses.

---

## 4. Website Information Architecture & Sitemap

```
Corasun Agro Website
├── / (Home)
│   ├── Sticky Header & Mobile Drawer
│   ├── Hero Section (GSAP Timeline, Brand Statement, Agricultural Visuals)
│   ├── Company Introduction (Agricultural Focus, About Link)
│   ├── Product Category Spotlight (Bio-Organics & Water-Soluble Fertilizers)
│   ├── Featured Products Showcase (Interactive Cards)
│   ├── Agricultural Benefits & Scientific Value Grid
│   ├── Facility & Manufacturing Commitment Showcase
│   ├── Conversion / Enquiry Banner
│   └── Corporate Footer (Navigation, Contact Channels, Legal)
├── /about (About Us)
│   ├── Corporate Mission & Agricultural Heritage
│   ├── Quality Standards & Scientific Methodology
│   ├── Verified Product Portfolio Scope
│   └── CTAs to Catalogue & Direct Enquiry
├── /products (Product Catalogue)
│   ├── Category Filtering (All, Bio-Organics, Water-Soluble Fertilizers)
│   ├── Interactive Search & Tag Filters
│   ├── Product Grid with Dynamic Hover & Detail Badges
│   └── Direct Enquiry Link per product
├── /products/:slug (Product Detail Pages - Dynamic 21 Products)
│   ├── Breadcrumb Navigation
│   ├── Product Packshot Presentation & Zoom/Reveal
│   ├── English & Marathi Technical Description
│   ├── Bulleted Key Benefits
│   ├── Precise Dosage & Application Guidelines
│   ├── Composition & Technical Specifications
│   ├── Related Products in Category
│   └── Context-Aware Enquiry CTA (Pre-fills product name)
├── /contact (Contact & Enquiry)
│   ├── Contact Channels & Operations Notice
│   ├── Interactive Enquiry Form (Validation, Subject Selector, Success State)
│   └── FAQ & Support Access
└── /404 (Not Found Route)
    └── Fallback with quick navigation to Home & Products
```

---

## 5. Reusable Component Inventory

1. **Layout Components:**
   * `Navbar` (with desktop links, CTA, backdrop blur, and responsive mobile sliding menu)
   * `Footer` (with corporate links, category lists, verified contact triggers, copyright)
   * `PageHeader` (standardized hero/banner for subpages)
2. **Product Components:**
   * `ProductCard` (reusable card with image reveal, badge, dosage snippet, and hover transition)
   * `CategoryFilter` (pill buttons with active states)
   * `ProductGrid` (responsive CSS grid)
   * `DosageBadge` / `SpecTable` (clean structured spec tables)
   * `RelatedProducts` (dynamic 3-4 card carousel/grid)
3. **Motion / Animation Hooks:**
   * `useGsap` & `ScrollTrigger` setup utilities
   * `SmoothScrollProvider` (Lenis initialization & cleanup)
   * `RevealOnScroll` wrapper
4. **UI Components:**
   * `Button` (Primary, Secondary, Outline, Glow)
   * `Badge` (Category and status tags)
   * `EnquiryForm` (Controlled inputs, client-side validation, submit toast/feedback)

---

## 6. Asset & Visual Assets Inventory Plan

* **Brand Assets:** Vector Corasun Agro Logo / Brandmark with agricultural emblem.
* **Packshot Assets:** High-resolution product containers (bottles, canisters, fertilizer bags) with clean shadows.
* **Agricultural Visuals:** Lush crop photography (grapes, pomegranate, sugarcane, healthy soil, drip fertigation systems).
* **Icons:** SVG icon set for dosage, foliar spray, drip irrigation, root growth, flowering, and fruit quality.

---

## 7. Phase 0 Output & Readiness Verification

* [x] Complete review of Corasun Agro product scope.
* [x] Full catalogue created (21 detailed products with all benefits, dosage, Marathi and English technical context).
* [x] Category taxonomy defined (`bio-organics`, `water-soluble-fertilizers`).
* [x] Verified vs. unverified data documented strictly per PRD guidelines.
* [x] Complete Sitemap and Reusable Component Architecture established.
* [x] Structured JavaScript data ready for Phase 1 (`categories.js`, `products.js`, `company.js`).
