const products = [
  {
    id: "hydrofit-bottle",
    name: "Dumbbell Water Bottle",
    type: "Bottle",
    description:
      "The original HydroFit bottle, designed for everyday hydration and its second purpose.",
    price: 399,

    images: {
      Men: "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
      Women:
        "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
    },

    editions: ["Men", "Women"],
    colors: ["Graphite", "Ivory", "Green", "Stone"],
    personalized: false,
    includesBag: false,
  },

  {
    id: "hydrofit-personalized",
    name: "Personalized Dumbbell Bottle",
    type: "Personalized",
    description: "Make your HydroFit yours with your name added to the bottle.",
    price: 499,

    images: {
      Men: "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
      Women:
        "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
    },

    editions: ["Men", "Women"],
    colors: ["Graphite", "Ivory", "Green", "Stone"],
    personalized: true,
    includesBag: false,
  },

  {
    id: "hydrofit-bottle-bag",
    name: "Dumbbell Bottle + Bag",
    type: "Bottle + Bag",
    description:
      "HydroFit paired with a dedicated carry bag for easier everyday use.",
    price: null,

    images: {
      Men: "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
      Women:
        "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
    },

    editions: ["Men", "Women"],
    colors: ["Graphite", "Ivory", "Green", "Stone"],
    personalized: false,
    includesBag: true,
  },
];

export default products;
