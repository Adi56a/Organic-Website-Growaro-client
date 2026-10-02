export const categories = [
  {
    id: "bio-organics",
    name: "Bio Organics, PGR & Micronutrients",
    shortName: "Bio Organics & PGR",
    tagline: "Advanced bio-stimulants, chelated micronutrients & plant growth regulators",
    description: "Scientifically engineered formulations designed to enhance root architecture, metabolic vigor, photosynthetic efficiency, and natural resistance against biotic and abiotic stress.",
    icon: "Leaf",
    itemCount: 11,
    featuredImage: "/assets/images/categories/bio-organics.jpg"
  },
  {
    id: "water-soluble-fertilizers",
    name: "Water Soluble Fertilizers",
    shortName: "Water Soluble Fertilizers",
    tagline: "High-purity Euro-Ferti crop nutrition formulations for foliar & fertigation",
    description: "100% water-soluble macro and micronutrient complexes providing instant bioavailability, balanced NPK ratios, and crop-stage-specific nutrition for maximum yield and quality.",
    icon: "Droplets",
    itemCount: 10,
    featuredImage: "/assets/images/categories/fertilizers.jpg"
  }
];

export const getCategoryById = (id) => categories.find((cat) => cat.id === id);
