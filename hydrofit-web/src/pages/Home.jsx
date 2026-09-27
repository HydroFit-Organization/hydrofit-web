import SEO from "../components/SEO/SEO";
import Concept from "../sections/Concept/Concept";
import FAQ from "../sections/FAQ/FAQ";
import Hero from "../sections/Hero/Hero";
import HowToUse from "../sections/HowToUse/HowToUse";
import Product from "../sections/Product/Product";
import Reviews from "../sections/Reviews/Reviews";
import Safety from "../sections/Safety/Safety";
import Transformation from "../sections/Transformation/Transformation";
import WhyHydroFit from "../sections/WhyHydroFit/WhyHydroFit";

function Home() {
  return (
    <main>
      <SEO
        title="HydroFit | The Water Bottle That Transforms Into Workout Equipment"
        description="Meet HydroFit — a double-ended fitness water bottle designed for everyday hydration and transformation into workout equipment. Hydrate. Transform. Train."
        canonical="https://www.hydrofit.org.in/"
      />

      <Hero />
      <Concept />
      <Transformation />
      <Product />
      <WhyHydroFit />
      <HowToUse />
      <Safety />
      <Reviews />
      <FAQ />
    </main>
  );
}

export default Home;
