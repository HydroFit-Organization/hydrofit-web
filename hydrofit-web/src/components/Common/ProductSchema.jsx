const ProductSchema = ({ product }) => {
  const productUrl = `${import.meta.env.VITE_SITE_URL}/products/${product.id}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `HydroFit ${product.name}`,
    description: product.description,
    image: [product.images.Men, product.images.Women],
    brand: {
      "@type": "Brand",
      name: "HydroFit",
    },
    sku: product.id,
    category: "Fitness Water Bottle",

    ...(product.price !== null && {
      offers: {
        "@type": "Offer",
        url: productUrl,
        priceCurrency: "INR",
        price: product.price.toString(),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    }),
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default ProductSchema;
