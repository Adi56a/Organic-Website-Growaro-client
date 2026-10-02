export const products = [
  // =========================================================================
  // CATEGORY 1: Bio Organics / PGR & Micronutrients (11 Products)
  // =========================================================================
  {
    id: "kaizen",
    slug: "kaizen",
    name: "Kaizen",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "High-Potency Bio-Organic Growth Promoter & Metabolic Activator",
    type: "Bio-Organic Growth Promoter",
    description: "Kaizen is a specialized organic growth enhancer that activates critical enzymatic pathways, promotes intense root proliferation, and accelerates vegetative vigor across all stages of crop growth.",
    marathiDescription: "पिकांच्या जोमदार वाढीसाठी, पांढऱ्या मुळांच्या विकासासाठी आणि भरघोस उत्पादनासाठी अत्यंत प्रभावी जैविक टॉनिक.",
    benefits: [
      "Accelerates rapid feeder root initiation and nutrient assimilation",
      "Increases photosynthetic activity and overall chlorophyll concentration",
      "Significantly reduces flower drop and maximizes healthy fruit set",
      "Boosts natural crop resilience against abiotic stresses like drought and heat"
    ],
    dosage: {
      foliar: "1.5 – 2.0 ml per liter of water",
      drip: "500 ml per acre",
      general: "Apply during active vegetative, pre-flowering, and fruit enlargement stages"
    },
    composition: "Enzymatic Bio-Extracts, Amino Acid Peptides, Fulvic Synergists",
    targetCrops: ["Grapes", "Pomegranate", "Tomato", "Chilli", "Cotton", "Sugarcane", "Soybean", "Banana"],
    stage: "Vegetative & Pre-Flowering",
    packSizes: ["100 ml", "250 ml", "500 ml", "1 Liter", "5 Liters"],
    featured: true,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb2250b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "corasil-o",
    slug: "corasil-o",
    name: "Corasil-O",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "Bio-Available Silicon-Based Cellular Fortifier & Crop Protector",
    type: "Organic Silicon Nutrition",
    description: "Corasil-O provides 100% bio-available organic silicon that deposits into plant epidermal cells, forming a robust physical barrier that strengthens stems, erects leaves, and naturally repels pests and diseases.",
    marathiDescription: "पिकांची रोगप्रतिकारक शक्ती वाढवण्यासाठी, खोड मजबूत करण्यासाठी आणि रसशोषक किडींपासून संरक्षणासाठी सिलिकॉन युक्त पोषण.",
    benefits: [
      "Reinforces cellular walls, reducing crop lodging and stem breakage",
      "Forms a tough silica barrier on leaf surfaces against fungal attacks and sucking insects",
      "Improves leaf erectness for optimal sunlight harvesting and photosynthesis",
      "Significantly reduces moisture transpiration loss during high temperature and drought"
    ],
    dosage: {
      foliar: "1.0 – 1.5 ml per liter of water",
      drip: "500 ml per acre",
      general: "Apply 2-3 sprays from early vegetative through fruit development"
    },
    composition: "Stabilized Orthosilicic Acid & Organic Silicon Complexes",
    targetCrops: ["Paddy", "Sugarcane", "Cotton", "Grapes", "Vegetables", "Onion", "Floriculture"],
    stage: "All Growth Stages",
    packSizes: ["250 ml", "500 ml", "1 Liter", "5 Liters"],
    featured: true,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ultra-curb",
    slug: "ultra-curb",
    name: "Ultra Curb",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "Broad-Spectrum Bio-Safeguard & Crop Health Immunizer",
    type: "Bio-Nutrition & Crop Protection",
    description: "Ultra Curb is a modern bio-formulation engineered to stimulate Systemic Acquired Resistance (SAR) in plants, aiding rapid recovery from pest stresses and environmental shocks.",
    marathiDescription: "पिकांचे किडी-रोगांपासून संरक्षण, ताणतणावातून जलद पुनर्प्राप्ती आणि निरोगी वाढीसाठी खास बायो-फॉर्म्युलेशन.",
    benefits: [
      "Activates systemic defense mechanisms against bacterial and physiological stress",
      "Accelerates crop recovery and tissue repair following adverse weather or pest pressure",
      "Enhances nutrient uptake efficiency and maintains canopy freshness"
    ],
    dosage: {
      foliar: "2.0 – 2.5 ml per liter of water",
      drip: "1 Liter per acre",
      general: "Spray at the first sign of crop stress or during peak vegetative flush"
    },
    composition: "Organic Botanical Synergists, Bio-Active Compounds & Mineral Co-factors",
    targetCrops: ["Chilli", "Tomato", "Capsicum", "Grapes", "Pulses", "Oilseeds"],
    stage: "Vegetative & Flowering",
    packSizes: ["250 ml", "500 ml", "1 Liter"],
    featured: false,
    image: "https://images.unsplash.com/photo-1592417817038-d13fd7342605?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ortus-molycra",
    slug: "ortus-molycra",
    name: "Ortus Molycra",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "Specialized Molybdenum & Micro-Synergist for Nitrogen Fixation",
    type: "Molybdenum Formulation",
    description: "Ortus Molycra delivers high-purity Molybdenum necessary for nitrogenase enzyme activation, aiding efficient biological nitrogen fixation in legumes and nitrate reduction in all crops.",
    marathiDescription: "नत्र स्थिरीकरण, भरपूर फुलकळी आणि परागीभवन सुधारण्यासाठी मॉलिब्डेनम युक्त सूक्ष्म अन्नद्रव्य.",
    benefits: [
      "Essential catalyst for nitrate reductase enzyme to convert nitrates into proteins",
      "Stimulates prolific root nodulation and nitrogen fixing in pulse crops",
      "Improves pollen viability, pollen tube germination, and uniform fruit set"
    ],
    dosage: {
      foliar: "0.5 – 1.0 ml per liter of water",
      drip: "250 – 500 ml per acre",
      general: "Apply prior to flowering and during active node differentiation"
    },
    composition: "Chelated Molybdenum (Mo) enriched with bio-catalysts",
    targetCrops: ["Soybean", "Chickpea", "Groundnut", "Cauliflower", "Cabbage", "Cucurbits", "Grapes"],
    stage: "Pre-Flowering & Flowering",
    packSizes: ["100 ml", "250 ml", "500 ml", "1 Liter"],
    featured: false,
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bettor-20",
    slug: "bettor-20",
    name: "Bettor 20",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "Super Spreader, Sticking Agent & Penetration Activator",
    type: "Non-Ionic Silicon Spreader",
    description: "Bettor 20 drastically lowers dynamic surface tension of agricultural spray solutions, providing rapid wetting, stomatal infiltration, and rain-fastness for agrochemicals and nutrients.",
    marathiDescription: "फवारणीचे औषध पानांवर एकसारखे पसरवणारे, चिकटवणारे आणि पानांत जलद शोषून घेणारे सुपर स्प्रेडर.",
    benefits: [
      "Provides ultra-fast droplet spreading across waxy, hairy, or hydrophobic leaf surfaces",
      "Promotes deep stomatal penetration within minutes of application",
      "Imparts superior rain-fastness and prevents chemical run-off/wastage",
      "Significantly enhances efficacy of fertilizers, insecticides, and fungicides"
    ],
    dosage: {
      foliar: "0.3 – 0.5 ml per liter of spray water (50–60 ml per 150–200 L tank)",
      drip: "Not applicable (Foliar adjuvant)",
      general: "Mix thoroughly as the final component in spray tank solutions"
    },
    composition: "Polyether Polymethylsiloxane Copolymer 100%",
    targetCrops: ["Universal for all agricultural, horticultural, and floricultural crops"],
    stage: "All Foliar Spray Applications",
    packSizes: ["50 ml", "100 ml", "250 ml", "500 ml", "1 Liter"],
    featured: true,
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ortus-zn",
    slug: "ortus-zn",
    name: "Ortus Zn",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "High-Bioavailability Cheated Zinc (Zn) Micronutrient",
    type: "Chelated Zinc Formulation",
    description: "Ortus Zn is formulated to cure and prevent zinc deficiencies, driving auxin (IAA) synthesis, leaf expansion, and enzyme metabolism across heavy-feeding crops.",
    marathiDescription: "पानांचा आकार वाढवण्यासाठी, फुटवे काढण्यासाठी आणि झिंकची कमतरता भरून काढण्यासाठी चिलेटेड झिंक.",
    benefits: [
      "Instantly corrects 'little leaf', rosetting, and interveinal yellowing caused by zinc deficiency",
      "Stimulates natural plant hormones (Auxins) for healthy stem elongation",
      "Crucial for carbohydrate metabolism, starch formation, and seed development"
    ],
    dosage: {
      foliar: "1.0 – 1.5 ml per liter of water",
      drip: "500 ml – 1.0 Liter per acre",
      general: "Apply during early vegetative flush and branch development"
    },
    composition: "Chelated Zinc (Zn) Liquid Complex",
    targetCrops: ["Maize", "Paddy", "Cotton", "Citrus", "Grapes", "Sugarcane", "Tomato"],
    stage: "Early Vegetative & Branching",
    packSizes: ["250 ml", "500 ml", "1 Liter", "5 Liters"],
    featured: false,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ortus-fe",
    slug: "ortus-fe",
    name: "Ortus Fe",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "Essential Cheated Iron (Fe) Chlorophyll Activator",
    type: "Chelated Iron Formulation",
    description: "Ortus Fe provides stable, instantly absorbable iron that plays an irreplaceable role in chlorophyll synthesis, electron transport, and respiratory enzyme systems.",
    marathiDescription: "पानांचा पिवळेपणा घालवून पानांना गडद हिरवेगार करण्यासाठी आणि प्रकाशसंश्लेषण वाढवण्यासाठी चिलेटेड लोह (Fe).",
    benefits: [
      "Reverses interveinal chlorosis (yellowing of tender top leaves) rapidly",
      "Enhances photosynthetic energy conversion and carbohydrate manufacturing",
      "Stable formulation that resists soil fixation"
    ],
    dosage: {
      foliar: "1.0 – 1.5 ml per liter of water",
      drip: "500 ml per acre",
      general: "Apply when new vegetative flushes emerge or upon initial signs of chlorosis"
    },
    composition: "Chelated Iron (Fe) Liquid",
    targetCrops: ["Grapes", "Sugarcane", "Banana", "Pomegranate", "Roses", "Vegetables"],
    stage: "Active Vegetative & Shoot Flush",
    packSizes: ["250 ml", "500 ml", "1 Liter", "5 Liters"],
    featured: false,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "corasulf-g",
    slug: "corasulf-g",
    name: "Corasulf-G",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "High-Purity Granular Elemental Sulfur Soil Conditioner",
    type: "Granular Soil Conditioner",
    description: "Corasulf-G is a premium micro-dispersible granular sulfur formulation designed for sustained soil nutrient supply, pH regulation, and oil synthesis in oilseeds and bulb crops.",
    marathiDescription: "जमिनीची सुपीकता सुधारण्यासाठी, पीएच संतुलित करण्यासाठी आणि तेलबिया पिकांची प्रत वाढवण्यासाठी दाणेदार गंधक.",
    benefits: [
      "Provides sustained elemental sulfur, the vital 4th major plant nutrient",
      "Increases oil content in oilseeds and pungency/aroma in onion and garlic",
      "Aids in soil reclamation by neutralizing alkaline and calcareous soil zones"
    ],
    dosage: {
      foliar: "Not recommended (Soil application only)",
      drip: "Not applicable",
      general: "5.0 – 10.0 kg per acre as basal dose or during early hoeing/dressing"
    },
    composition: "Elemental Sulfur (S) 90% Granular with Swelling Clay Technology",
    targetCrops: ["Onion", "Garlic", "Mustard", "Soybean", "Groundnut", "Sugarcane", "Cotton"],
    stage: "Basal Application / Soil Conditioning",
    packSizes: ["3 kg", "5 kg", "10 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ortus-ca-edta-10",
    slug: "ortus-ca-edta-10",
    name: "Ortus Ca EDTA 10%",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "Premium Chelated Calcium for Cellular Strength & Fruit Quality",
    type: "Chelated Calcium (EDTA-Ca 10%)",
    description: "Ortus Ca EDTA 10% delivers 100% chelated, water-soluble calcium that moves freely through plant vascular bundles, strengthening cell walls, preventing fruit cracking, and extending post-harvest life.",
    marathiDescription: "फळांची साल मजबूत करण्यासाठी, फळे तडकणे रोखण्यासाठी आणि साठवणूक क्षमता वाढवण्यासाठी चिलेटेड कॅल्शियम.",
    benefits: [
      "Prevents physiological disorders like Blossom End Rot (BER) in tomato and fruit cracking in pomegranate",
      "Strengthens fruit rind structure and substantially enhances transportability & shelf life",
      "EDTA chelation prevents calcium from precipitating with phosphates or sulfates in the mix"
    ],
    dosage: {
      foliar: "1.0 – 1.5 grams per liter of water",
      drip: "500 g – 1.0 kg per acre",
      general: "Apply during fruit setting, fruit sizing, and pre-harvest stages"
    },
    composition: "Chelated Calcium as EDTA-Ca 10% w/w",
    targetCrops: ["Tomato", "Pomegranate", "Grapes", "Apple", "Capsicum", "Melons", "Papaya"],
    stage: "Fruit Setting & Berry Development",
    packSizes: ["250 g", "500 g", "1 kg"],
    featured: true,
    image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ortus-fe-hedp",
    slug: "ortus-fe-hedp",
    name: "Ortus Fe HEDP",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "High-Stability HEDP Cheated Iron for Alkaline Soils & Hard Water",
    type: "HEDP Chelated Micronutrient",
    description: "Ortus Fe HEDP is a specialized organic chelate that maintains high iron bioavailability even in high-pH alkaline soils and hard irrigation water where conventional chelates fail.",
    marathiDescription: "चुनखडीयुक्त व क्षारपड जमिनीतही उत्तम कार्य करणारे अत्यंत प्रभावी व स्थिर चिलेटेड लोह (HEDP).",
    benefits: [
      "Exceptional stability in water and soil with pH ranges up to 9.0",
      "Directly absorbed through foliage and root membranes without photodegradation",
      "Rapidly alleviates severe chlorosis in high-value export crops"
    ],
    dosage: {
      foliar: "0.5 – 1.0 gram per liter of water",
      drip: "250 – 500 grams per acre",
      general: "Recommended for high-pH soils, calcareous soils, and drip fertigation"
    },
    composition: "Iron (Fe) Chelated by HEDP Organic Complex",
    targetCrops: ["Export Grapes", "Pomegranate", "Citrus", "Polyhouse Roses", "Banana"],
    stage: "Vegetative Flush & Chlorosis Correction",
    packSizes: ["100 g", "250 g", "500 g", "1 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ortus-zn-hedp",
    slug: "ortus-zn-hedp",
    name: "Ortus Zn HEDP",
    category: "bio-organics",
    categoryName: "Bio Organics & PGR",
    tagline: "Advanced High-Efficiency HEDP Cheated Zinc",
    type: "HEDP Chelated Micronutrient",
    description: "Ortus Zn HEDP utilizes organo-phosphonate chelation technology to deliver zinc that will not precipitate with irrigation phosphates, ensuring 100% bio-uptake through drip systems.",
    marathiDescription: "अत्यंत कार्यक्षम, पाण्यात सहज विरघळणारे आणि दीर्घकाळ उपलब्ध राहणारे उच्च दर्जाचे चिलेटेड झिंक (HEDP).",
    benefits: [
      "Zero precipitation in drip lines or tanks when mixed with phosphate fertilizers",
      "Maximizes enzyme activity, RNA synthesis, and uniform vegetative growth",
      "High uptake efficiency at minimal dose rates compared to inorganic zinc salts"
    ],
    dosage: {
      foliar: "0.5 – 1.0 gram per liter of water",
      drip: "250 – 500 grams per acre",
      general: "Apply during early growth stages and canopy development"
    },
    composition: "Zinc (Zn) Chelated with HEDP Complex",
    targetCrops: ["Citrus", "Cotton", "Grapes", "Pomegranate", "Wheat", "Polyhouse Vegetables"],
    stage: "Early Vegetative & Canopy Building",
    packSizes: ["100 g", "250 g", "500 g", "1 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80"
  },

  // =========================================================================
  // CATEGORY 2: Water Soluble Fertilizers (Euro-Ferti Series - 10 Products)
  // =========================================================================
  {
    id: "euro-ferti-12-61-00",
    slug: "euro-ferti-12-61-00",
    name: "Euro-Ferti NPK 12:61:00 (MAP)",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "Mono Ammonium Phosphate (MAP) for Explosive Root & Shoot Growth",
    type: "100% Water Soluble NPK Fertilizer",
    description: "Euro-Ferti 12:61:00 is an ultra-pure Mono Ammonium Phosphate formulation supplying concentrated phosphorus and starter ammoniacal nitrogen for rapid primary and secondary root establishment.",
    marathiDescription: "पिकांच्या सुरुवातीच्या मुळांच्या व फुटव्यांच्या जोमदार वाढीसाठी १२:६१:०० (मोनो अमोनियम फॉस्फेट) खत.",
    benefits: [
      "Highest concentration of water-soluble phosphate (61% P₂O₅) for aggressive root development",
      "Acidic reaction in the root zone improves micronutrient bioavailability",
      "Essential for early energy transfer (ATP/ADP) and fast establishment of seedlings/transplants"
    ],
    dosage: {
      foliar: "4.0 – 5.0 grams per liter of water",
      drip: "3.0 – 5.0 kg per acre per application",
      general: "Apply during root initiation, transplanting, and early vegetative flush"
    },
    composition: "Total Nitrogen (N): 12.0%, Available Phosphate (P₂O₅): 61.0%, Potash (K₂O): 0.0%",
    targetCrops: ["All Agricultural & Horticultural Crops", "Vegetables", "Sugarcane", "Cotton", "Grapes"],
    stage: "Root Establishment & Early Vegetative",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: true,
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-13-40-13",
    slug: "euro-ferti-13-40-13",
    name: "Euro-Ferti 13:40:13",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "High-Phosphate Pre-Bloom & Canopy Booster Formula",
    type: "100% Water Soluble NPK Fertilizer",
    description: "Euro-Ferti 13:40:13 provides a specialized phosphorus-dominant ratio balanced with starter nitrogen and potassium to accelerate flower bud differentiation and sturdy lateral branches.",
    marathiDescription: "भरपूर फुटवे, मजबूत फांद्या आणि उत्कृष्ट फुलोऱ्यासाठी १३:४०:१३ विद्राव्य खत.",
    benefits: [
      "Promotes abundant flower bud formation and minimizes blossom drop",
      "Maintains balanced vegetative and root growth ahead of flowering",
      "100% water-soluble formulation with near-instant plant assimilation"
    ],
    dosage: {
      foliar: "4.0 – 5.0 grams per liter of water",
      drip: "3.0 – 5.0 kg per acre",
      general: "Apply 10–15 days prior to flowering and during active branching"
    },
    composition: "Total Nitrogen (N): 13.0%, Available Phosphate (P₂O₅): 40.0%, Potash (K₂O): 13.0%",
    targetCrops: ["Chilli", "Tomato", "Grapes", "Pomegranate", "Cotton", "Pulses", "Floriculture"],
    stage: "Branching & Pre-Flowering",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-13-00-45",
    slug: "euro-ferti-13-00-45",
    name: "Euro-Ferti NPK 13:00:45 (Multi-K)",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "Potassium Nitrate for Maximum Fruit Size, Sugar (Brix) & Color",
    type: "100% Water Soluble Fertilizer",
    description: "Euro-Ferti 13:00:45 combines fast-acting nitrate nitrogen with dense potassium to drive rapid fruit enlargement, sugar translocation, uniform maturity, and drought resilience.",
    marathiDescription: "फळांचे वजन, चकाकी, गोडी (Brix) आणि साठवणूक क्षमता वाढवण्यासाठी १३:००:४५ (पोटॅशियम नायट्रेट) खत.",
    benefits: [
      "High potassium drives sugar accumulation, fruit density, and vivid color development",
      "Nitrate nitrogen acts rapidly without causing excessive green vegetative surge",
      "Regulates plant stomatal conductance and builds defense against drought stress"
    ],
    dosage: {
      foliar: "5.0 – 8.0 grams per liter of water",
      drip: "4.0 – 5.0 kg per acre",
      general: "Apply throughout fruit sizing, fruit maturation, and ripening stages"
    },
    composition: "Nitrate Nitrogen (N-NO₃): 13.0%, Water Soluble Potash (K₂O): 45.0%",
    targetCrops: ["Grapes", "Banana", "Pomegranate", "Citrus", "Tomato", "Watermelon", "Onion"],
    stage: "Fruit Development & Ripening",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: true,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-00-52-34",
    slug: "euro-ferti-00-52-34",
    name: "Euro-Ferti NPK 00:52:34 (MKP)",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "Mono Potassium Phosphate (MKP) for Floral Surge & Fruit Setting",
    type: "100% Water Soluble Fertilizer (Nitrogen-Free)",
    description: "Euro-Ferti 00:52:34 is a zero-nitrogen formulation providing potent phosphorus and potassium to check unneeded vegetative flushing, induce intense flower bloom, and optimize early fruit set.",
    marathiDescription: "अनावश्यक वाढ रोखून जास्तीत जास्त फुलोरा आणि दर्जेदार फळधारणेसाठी ००:५२:३४ (MKP) खत.",
    benefits: [
      "Zero nitrogen checks excessive vegetative vigor and channels energy into heavy flowering",
      "Enhances flower fertility, pollen retention, and uniform fruit set",
      "Helps suppress powdery mildew and strengthens foliage against disease penetration"
    ],
    dosage: {
      foliar: "4.0 – 5.0 grams per liter of water",
      drip: "3.0 – 5.0 kg per acre",
      general: "Apply right before bud burst, throughout flowering, and at initial fruit setting"
    },
    composition: "Phosphate (P₂O₅): 52.0%, Potash (K₂O): 34.0%, Nitrogen (N): 0.0%",
    targetCrops: ["Grapes", "Pomegranate", "Cotton", "Mango", "Capsicum", "Floriculture", "Tomato"],
    stage: "Bud Differentiation & Flowering",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: true,
    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-00-60-20",
    slug: "euro-ferti-00-60-20",
    name: "Euro-Ferti NPK 00:60:20",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "Ultra-Concentrated Phosphate & Potash Bloom Activator",
    type: "100% Water Soluble NPK Fertilizer",
    description: "Euro-Ferti 00:60:20 delivers an ultra-high 60% phosphate core paired with 20% potash, designed for intensive flowering flushes and substantial root ball expansion.",
    marathiDescription: "पिकांची मुळे अत्यंत मजबूत करण्यासाठी आणि भरपूर कळ्या लागण्यासाठी ००:६०:२० खत.",
    benefits: [
      "Super-concentrated phosphate drives dense floral cluster emergence",
      "Improves root branching and deep soil nutrient uptake",
      "Low salt index, safe for drip fertigation in sensitive horticultural crops"
    ],
    dosage: {
      foliar: "3.0 – 5.0 grams per liter of water",
      drip: "3.0 – 4.0 kg per acre",
      general: "Apply during flower initiation and early berry/fruit development"
    },
    composition: "Phosphate (P₂O₅): 60.0%, Potash (K₂O): 20.0%, Nitrogen (N): 0.0%",
    targetCrops: ["Horticultural Fruits", "Vegetables", "Roses & Flowers", "Sugarcane"],
    stage: "Flower Initiation & Root Spurt",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-15-30-15-2mg-te",
    slug: "euro-ferti-15-30-15-2mg-te",
    name: "Euro-Ferti 15-30-15+2Mg+TE",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "Fortified Complete Macro-Micro Formula with Magnesium",
    type: "Enriched Water Soluble NPK + Micro Complex",
    description: "Euro-Ferti 15-30-15+2Mg+TE provides comprehensive balanced plant nourishment, fortified with 2% Magnesium for chlorophyll production and a full spectrum of chelated trace elements.",
    marathiDescription: "सर्वसमावेशक पोषण, हिरवेगार पाने आणि भरपूर फुटव्यांसाठी १५:३०:१५ + मॅग्नेशियम + सूक्ष्म अन्नद्रव्ये.",
    benefits: [
      "Added Magnesium (2% MgO) sustains vibrant chlorophyll synthesis under heavy crop load",
      "Fully chelated trace element pack (Fe, Zn, Mn, Cu, B, Mo) prevents hidden deficiencies",
      "Balanced NPK matrix powers simultaneous shoot, root, and flower development"
    ],
    dosage: {
      foliar: "3.0 – 4.0 grams per liter of water",
      drip: "3.0 – 5.0 kg per acre",
      general: "Apply throughout active vegetative and pre-bloom stages"
    },
    composition: "N: 15%, P₂O₅: 30%, K₂O: 15% + 2.0% MgO + Trace Elements (B, Fe, Zn, Mn, Cu, Mo)",
    targetCrops: ["Polyhouse Crops", "Grapes", "Exotic Vegetables", "Tomato", "Sugarcane", "Papaya"],
    stage: "Vegetative & Early Bloom",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-0-9-46-te",
    slug: "euro-ferti-0-9-46-te",
    name: "Euro-Ferti NPKS 0:9:46+TE",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "Finishing & Ripening Master Formula with Potassium, Sulfur & TE",
    type: "Water Soluble Ripening Fertilizer",
    description: "Euro-Ferti 0:9:46+TE is a specialized zero-nitrogen finishing formula engineered to maximize fruit coloration, brix level, peel luster, and post-harvest shelf resilience.",
    marathiDescription: "फळांचा उत्तम नैसर्गिक रंग, गोडी, चकाकी व वजन मिळवण्यासाठी ०:९:४६ + गंधक + सूक्ष्म अन्नद्रव्ये.",
    benefits: [
      "Ultra-dense potassium (46% K₂O) combined with sulfur accelerates starch-to-sugar conversion",
      "Imparts natural, uniform color pigmentation in berries, pomegranates, and citrus",
      "Zero nitrogen prevents unwanted late-season vegetative flushes and fruit softening"
    ],
    dosage: {
      foliar: "4.0 – 6.0 grams per liter of water",
      drip: "4.0 – 5.0 kg per acre",
      general: "Apply 3-4 weeks prior to harvest through final picking"
    },
    composition: "P₂O₅: 9.0%, K₂O: 46.0%, Sulfur (S) + Trace Elements, N: 0.0%",
    targetCrops: ["Grapes (Berry Color & Brix)", "Pomegranate", "Banana", "Citrus", "Apple", "Tomato"],
    stage: "Maturity, Coloration & Ripening",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-00-42-47-2-8fe",
    slug: "euro-ferti-00-42-47-2-8fe",
    name: "Euro-Ferti NPK 00:42:47+2.8Fe",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "High-PK Fruit Builder Enriched with Iron Chlorosis Preventer",
    type: "Water Soluble PK + Iron Formulation",
    description: "Euro-Ferti 00:42:47+2.8Fe solves late-season yellowing during heavy fruiting by combining high PK sizing nutrients with 2.8% active Iron to keep the crop canopy intensely green.",
    marathiDescription: "फळांचा आकार वाढवत असताना पानांचा पिवळेपणा रोखणारे ००:४२:४७ + २.८% लोह खत.",
    benefits: [
      "Iron fortification sustains dark green leaves and high photosynthesis during fruit filling",
      "High PK content ensures heavy fruit weight, firm skin, and disease resistance",
      "Prevents premature canopy collapse in heavy bearing vines and trees"
    ],
    dosage: {
      foliar: "3.0 – 5.0 grams per liter of water",
      drip: "3.0 – 5.0 kg per acre",
      general: "Apply during middle to late fruit enlargement phases"
    },
    composition: "P₂O₅: 42.0%, K₂O: 47.0%, Iron (Fe): 2.8%, N: 0.0%",
    targetCrops: ["Grapes", "Pomegranate", "Banana", "Tomato", "Capsicum", "Watermelon"],
    stage: "Fruit Enlargement & Canopy Maintenance",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-14-48-00-te",
    slug: "euro-ferti-14-48-00-te",
    name: "Euro-Ferti NPK 14:48:00+TE",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "High-Phosphate Vegetative Starter Fortified with Micro Pack",
    type: "Water Soluble NP + Trace Elements",
    description: "Euro-Ferti 14:48:00+TE accelerates early seedling vigor and lateral root branching through a synergistic high-nitrogen-phosphate ratio enriched with trace minerals.",
    marathiDescription: "सुरुवातीच्या जोमदार वाढीसाठी, मुळांच्या विकासासाठी १४:४८:०० + सूक्ष्म अन्नद्रव्ये.",
    benefits: [
      "Optimal Nitrogen-to-Phosphorus ratio for fast early vegetative canopy building",
      "Fortified trace element complex stimulates early enzymic activation",
      "Ideal starter formula for nursery beds, transplant shock mitigation, and young orchards"
    ],
    dosage: {
      foliar: "3.0 – 4.0 grams per liter of water",
      drip: "3.0 – 5.0 kg per acre",
      general: "Apply during early vegetative stages (15–35 days post sowing/transplanting)"
    },
    composition: "Total Nitrogen (N): 14.0%, Available Phosphate (P₂O₅): 48.0% + Trace Elements",
    targetCrops: ["All Seedlings & Transplants", "Vegetables", "Cotton", "Sugarcane", "Orchards"],
    stage: "Early Vegetative & Canopy Building",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "euro-ferti-10-52-10-te",
    slug: "euro-ferti-10-52-10-te",
    name: "Euro-Ferti NPK 10:52:10+TE",
    category: "water-soluble-fertilizers",
    categoryName: "Water Soluble Fertilizers",
    tagline: "Super Bloom & Flower Set Stimulator with Trace Elements",
    type: "Water Soluble High-P Fertilizer",
    description: "Euro-Ferti 10:52:10+TE is designed to provide peak phosphorus at flower bud induction, providing the energy needed for uniform blossoming, pollen health, and fruit set.",
    marathiDescription: "भरपूर कळी लागणे, उत्कृष्ट फुलोरा व फळधारणेसाठी १०:५२:१० + सूक्ष्म अन्नद्रव्ये विद्राव्य खत.",
    benefits: [
      "52% concentrated phosphate core fuels massive flowering induction",
      "Synergistic trace element blend ensures viable pollen and healthy pollination",
      "Completely soluble with low electrical conductivity (EC), gentle on tender flower buds"
    ],
    dosage: {
      foliar: "3.0 – 5.0 grams per liter of water",
      drip: "3.0 – 5.0 kg per acre",
      general: "Apply 1-2 times before flowering and during early bloom development"
    },
    composition: "N: 10.0%, P₂O₅: 52.0%, K₂O: 10.0% + Chelated Micro Pack (B, Zn, Fe, Mn, Cu, Mo)",
    targetCrops: ["Horticultural Orchards", "Vegetables", "Floriculture", "Cotton", "Pulses"],
    stage: "Pre-Flowering & Bloom Induction",
    packSizes: ["1 kg", "5 kg", "25 kg"],
    featured: false,
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80"
  }
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category) => products.filter((p) => p.category === category);
export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getAllProductSlugs = () => products.map((p) => p.slug);
