import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const products = [
  {
    id: "men",
    number: "01",
    label: "MEN",
    title: "HYDROFIT MEN",
    description:
      "A stronger, more structured expression of the HydroFit form — built for everyday hydration and an active lifestyle.",
    image:
      "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
    specs: ["280 MM", "Ø45 MM GRIP", "100 MM MAX"],
  },
  {
    id: "women",
    number: "02",
    label: "WOMEN",
    title: "HYDROFIT WOMEN",
    description:
      "A refined interpretation of the HydroFit form — designed for comfortable everyday hydration and effortless carry.",
    image:
      "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
    specs: ["280 MM", "Ø45 MM GRIP", "100 MM MAX"],
  },
];

const Product = () => {
  return (
    <section id="products-intro" className="bg-[#F7F6F2]">
      {/* Section Heading */}
      <SectionHeading
        number="04"
        label="OUR PRODUCTS"
        title={
          <>
            ONE FORM.
            <br />
            <span className="text-[#0B8F63]">TWO EDITIONS.</span>
          </>
        }
        description="Meet the HydroFit collection. Two distinct editions built around the same transformable bottle — designed to fit different people, preferences, and everyday routines."
      />

      {/* Products */}
      <div className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 xl:px-16">
        <div className="space-y-6">
          {products.map((product, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={product.id}
                className="group overflow-hidden border border-[#DEDCD5] bg-[#E9E7DE]"
              >
                <div
                  className={`grid min-h-[560px] lg:min-h-[620px] ${
                    isReversed
                      ? "lg:grid-cols-[60%_40%]"
                      : "lg:grid-cols-[40%_60%]"
                  }`}
                >
                  {/* =========================
                      PRODUCT CONTENT
                  ========================= */}
                  <div
                    className={`relative flex min-h-[420px] flex-col justify-between p-7 sm:p-10 lg:min-h-0 lg:p-12 xl:p-14 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Large Background Number */}
                    <span className="pointer-events-none absolute -bottom-8 -left-3 font-[Sora] text-[170px] font-semibold leading-none tracking-[-0.1em] text-black/[0.035] sm:text-[210px] lg:text-[230px]">
                      {product.number}
                    </span>

                    <div className="relative z-10">
                      {/* Product Label */}
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#77766F]">
                          {product.number} / {product.label}
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3
                        className="
                          mt-10
                          font-[Sora]
                          text-[38px]
                          font-semibold
                          leading-[0.94]
                          tracking-[-0.065em]
                          sm:text-[50px]
                          md:text-[56px]
                          lg:text-[46px]
                          xl:text-[58px]
                          2xl:text-[64px]
                        "
                      >
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-6 max-w-[400px] text-sm leading-7 text-[#5F5E58] sm:text-[15px]">
                        {product.description}
                      </p>
                    </div>

                    {/* Bottom Content */}
                    <div className="relative z-10 mt-12 lg:mt-10">
                      {/* Specifications */}
                      <div className="grid max-w-[430px] grid-cols-3 border-y border-[#D4D2CA]">
                        {product.specs.map((spec) => (
                          <div
                            key={spec}
                            className="border-r border-[#D4D2CA] px-2.5 py-4 last:border-r-0 sm:px-3"
                          >
                            <span className="block whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.12em] text-[#77766F] sm:text-[8px] sm:tracking-[0.16em]">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Discover */}
                      <Link
                        to="/products"
                        className="mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#111111]"
                      >
                        Discover {product.label}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* =========================
                      PRODUCT IMAGE
                  ========================= */}
                  <div
                    className={`relative min-h-[520px] overflow-hidden border-t border-[#D4D2CA] lg:min-h-0 lg:border-t-0 ${
                      isReversed
                        ? "lg:order-1 lg:border-r"
                        : "lg:order-2 lg:border-l"
                    }`}
                  >
                    {/* Top Technical Label */}
                    <div className="absolute left-6 top-6 z-20 sm:left-7 sm:top-7">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                        THE HYDROFIT
                      </span>
                    </div>

                    {/* Measurement */}
                    <div className="absolute right-6 top-6 z-20 sm:right-7 sm:top-7">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                        280 MM
                      </span>
                    </div>

                    {/* Background Typography */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        whitespace-nowrap
                        font-[Sora]
                        text-[80px]
                        font-semibold
                        tracking-[-0.1em]
                        text-black/[0.035]
                        sm:text-[120px]
                        lg:text-[110px]
                        xl:text-[150px]
                      "
                    >
                      HYDROFIT
                    </span>

                    {/* Same Image Container For Both */}
                    <div className="relative flex h-full min-h-[520px] items-center justify-center px-8 py-16 sm:px-12 lg:min-h-0 lg:px-14 lg:py-20 xl:px-20">
                      <div className="relative flex h-[390px] w-full items-center justify-center sm:h-[430px] lg:h-[440px] xl:h-[470px]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="
                            relative
                            z-10
                            h-full
                            w-full
                            object-contain
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.025]
                          "
                        />
                      </div>
                    </div>

                    {/* Bottom Technical Information */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#D4D2CA] px-6 py-4 sm:px-7">
                      <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-[#77766F] sm:text-[8px] sm:tracking-[0.18em]">
                        TRANSFORMABLE WATER BOTTLE
                      </span>

                      <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-[#0B8F63] sm:text-[8px] sm:tracking-[0.18em]">
                        HYDROFIT
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================
            COLLECTION FOOTER
        ========================= */}
        <div className="mt-10 flex flex-col gap-6 border-t border-[#111111] pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#77766F]">
              THE COLLECTION
            </span>

            <p className="mt-3 max-w-[500px] font-[Sora] text-xl font-medium leading-tight tracking-[-0.035em] sm:text-2xl">
              One bottle. Two editions.
              <br />
              <span className="text-[#0B8F63]">One second purpose.</span>
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-4 self-start border border-[#111111] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#111111] hover:text-white sm:self-auto"
          >
            Explore Products
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
