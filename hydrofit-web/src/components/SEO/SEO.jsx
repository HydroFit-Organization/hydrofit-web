import { Helmet } from "react-helmet-async";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.hydrofit.org.in";

const SITE_NAME = import.meta.env.VITE_SITE_NAME || "HydroFit";

const SEO = ({ title, description, canonical, image, type = "website" }) => {
  const pageUrl = canonical || SITE_URL;
  const imageUrl = image || `${SITE_URL}/images/hydrofit-og.jpg`;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />

      <meta property="og:site_name" content={SITE_NAME} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={pageUrl} />

      <meta property="og:image" content={imageUrl} />

      <meta property="og:image:alt" content={title} />

      {/* X / Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={imageUrl} />

      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEO;
