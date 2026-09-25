import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCT_IMAGES = [
  "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
  "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
];

const productSpecs = [
  {
    value: "280",
    unit: "MM",
    label: "HEIGHT",
  },
  {
    value: "Ø45",
    unit: "MM",
    label: "GRIP",
  },
  {
    value: "100",
    unit: "MM",
    label: "MAX DIAMETER",
  },
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? PRODUCT_IMAGES.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === PRODUCT_IMAGES.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="home" className="overflow-hidden bg-[#F7F6F2] text-[#111111]">
      {/* ==================================================
          HERO INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-[140px] sm:px-8 sm:pb-10 sm:pt-[150px] lg:px-12 xl:px-16">
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#77766F]">
            HYDROFIT ORIGINAL
          </p>

          <h1 className="mx-auto mt-5 max-w-[1050px] font-[Sora] text-[48px] font-semibold leading-[0.9] tracking-[-0.065em] sm:text-[64px] md:text-[76px] lg:text-[88px] xl:text-[100px]">
            ONE BOTTLE.
            <br className="sm:hidden" />{" "}
            <span className="text-[#0B8F63]">TWO PURPOSES.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[570px] text-sm leading-6 text-[#5F5E58] sm:text-base sm:leading-7">
            An everyday water bottle designed around a distinctive form that can
            later transform into workout equipment.
          </p>
        </div>
      </div>

      {/* ==================================================
          PRODUCT SHOWCASE
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative min-h-[540px] overflow-hidden border border-[#C8E4EF] bg-[#DDF3FF] sm:min-h-[620px] lg:min-h-[680px]">
          {/* -----------------------------------------------
              TECHNICAL BACKGROUND
          ------------------------------------------------ */}
          <div className="pointer-events-none absolute inset-0">
            {/* Large circle */}
            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C0E0ED] sm:h-[540px] sm:w-[540px]" />

            {/* Medium circle */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8E5F0] sm:h-[400px] sm:w-[400px]" />

            {/* Small circle */}
            <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8E5F0]" />

            {/* Horizontal guide */}
            <div className="absolute left-0 right-0 top-1/2 border-t border-[#C4E3EE]" />

            {/* Vertical guide */}
            <div className="absolute bottom-0 left-1/2 top-0 border-l border-[#C4E3EE]" />

            {/* Corner details */}
            <div className="absolute left-7 top-7 h-8 w-8 border-l border-t border-[#9FCFE1] sm:left-9 sm:top-9 sm:h-10 sm:w-10" />

            <div className="absolute right-7 top-7 h-8 w-8 border-r border-t border-[#9FCFE1] sm:right-9 sm:top-9 sm:h-10 sm:w-10" />

            <div className="absolute bottom-7 left-7 h-8 w-8 border-b border-l border-[#9FCFE1] sm:bottom-9 sm:left-9 sm:h-10 sm:w-10" />

            <div className="absolute bottom-7 right-7 h-8 w-8 border-b border-r border-[#9FCFE1] sm:bottom-9 sm:right-9 sm:h-10 sm:w-10" />
          </div>

          {/* -----------------------------------------------
              PRODUCT HEADER
          ------------------------------------------------ */}
          <div className="absolute left-6 right-6 top-6 z-30 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8 lg:left-10 lg:right-10 lg:top-10">
            <div>
              <p className="font-[Sora] text-sm font-semibold tracking-[-0.02em]">
                HYDROFIT
              </p>

              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.17em] text-[#62899A]">
                Transformable water bottle
              </p>
            </div>

            <div className="text-right">
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#62899A]">
                VIEW
              </p>

              <p className="mt-1 font-[Sora] text-xs font-semibold">
                {String(activeImage + 1).padStart(2, "0")} /{" "}
                {String(PRODUCT_IMAGES.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* -----------------------------------------------
              PRODUCT IMAGE
          ------------------------------------------------ */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ground shadow */}
            <div className="pointer-events-none absolute bottom-[11%] left-1/2 h-[24px] w-[180px] -translate-x-1/2 rounded-[50%] bg-black/[0.15] blur-[10px] sm:w-[230px]" />

            {/* Product light */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[55px] sm:h-[500px] sm:w-[280px]" />

            <img
              key={`${PRODUCT_IMAGES[activeImage]}-${activeImage}`}
              src={PRODUCT_IMAGES[activeImage]}
              alt={`HydroFit product view ${activeImage + 1}`}
              className="relative z-10 max-h-[420px] max-w-[62%] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.20)] transition-all duration-500 sm:max-h-[500px] lg:max-h-[570px]"
            />
          </div>

          {/* -----------------------------------------------
              LEFT PRODUCT LABEL
          ------------------------------------------------ */}
          <div className="absolute bottom-8 left-8 z-30 hidden sm:block lg:bottom-10 lg:left-10">
            <div className="border-l-2 border-[#0B8F63] pl-4">
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#62899A]">
                Designed around
              </p>

              <p className="mt-1 font-[Sora] text-sm font-semibold">
                One distinctive form.
              </p>
            </div>
          </div>

          {/* -----------------------------------------------
              RIGHT PRODUCT LABEL
          ------------------------------------------------ */}
          <div className="absolute bottom-8 right-8 z-30 hidden text-right sm:block lg:bottom-10 lg:right-10">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#62899A]">
              Purpose
            </p>

            <p className="mt-1 font-[Sora] text-sm font-semibold">
              Hydrate → Transform
            </p>
          </div>

          {/* -----------------------------------------------
              IMAGE CONTROLS
          ------------------------------------------------ */}
          <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous product image"
              className="flex h-9 w-9 items-center justify-center border border-[#AFCFDD] bg-[#F7F6F2]/90 transition-colors hover:bg-[#111111] hover:text-white"
            >
              <ChevronLeft size={15} strokeWidth={1.7} />
            </button>

            {PRODUCT_IMAGES.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View product image ${index + 1}`}
                className={`h-9 w-9 overflow-hidden border bg-[#F7F6F2]/90 ${
                  activeImage === index
                    ? "border-[#111111]"
                    : "border-[#AFCFDD]"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </button>
            ))}

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next product image"
              className="flex h-9 w-9 items-center justify-center border border-[#AFCFDD] bg-[#F7F6F2]/90 transition-colors hover:bg-[#111111] hover:text-white"
            >
              <ChevronRight size={15} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================
          PRODUCT SPECIFICATIONS
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 pb-14 pt-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid border-y border-[#111111] sm:grid-cols-3">
          {productSpecs.map((spec, index) => (
            <div
              key={spec.label}
              className={`px-5 py-6 sm:px-7 lg:px-10 ${
                index !== 0
                  ? "border-t border-[#DEDCD5] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <div className="flex items-end gap-2">
                <p className="font-[Sora] text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  {spec.value}
                </p>

                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#77766F]">
                  {spec.unit}
                </p>
              </div>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#88877F]">
                {spec.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
