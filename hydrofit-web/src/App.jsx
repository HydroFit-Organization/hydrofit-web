import Navbar from "./components/Navbar/Navbar";
import Concept from "./sections/Concept/Concept";
import CTA from "./sections/CTA/CTA";
import FAQ from "./sections/FAQ/FAQ";
import Hero from "./sections/Hero/Hero";
import HowToUse from "./sections/HowToUse/HowToUse";
import Product from "./sections/Product/Product";
import Reviews from "./sections/Reviews/Reviews";
import Safety from "./sections/Safety/Safety";
import Transformation from "./sections/Transformation/Transformation";
import WhyHydroFit from "./sections/WhyHydroFit/WhyHydroFit";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Transformation />
        <Product />
        <WhyHydroFit />
        <HowToUse />
        <Safety />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}

export default App;
