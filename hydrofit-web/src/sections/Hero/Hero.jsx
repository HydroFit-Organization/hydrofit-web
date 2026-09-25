import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PRODUCT_IMAGES = [
  "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
  "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png",
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="home" className="overflow-hidden bg-[#F7F6F2] pt-[112px]">
      <div className="mx-auto max-w-[1600px] xl:grid xl:min-h-[calc(100svh-112px)] xl:grid-cols-[0.82fr_1.18fr]">
        {/* =====================================================
            LEFT — HERO CONTENT
        ===================================================== */}
        <div className="flex items-start px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-20 lg:py-16 xl:h-[calc(100svh-112px)] xl:items-center xl:px-12 xl:py-8 2xl:px-16">
          <div className="w-full max-w-[570px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0B8F63]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
                Hydration × Fitness
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 font-[Sora] text-[42px] font-semibold leading-[0.98] tracking-[-0.065em] text-[#111111] sm:text-[50px] md:text-[56px] lg:text-[60px] xl:text-[56px] 2xl:text-[68px]">
              A bottle
              <br />
              with a second
              <br />
              <span className="text-[#0B8F63]">purpose.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[480px] text-[13px] leading-[1.75] text-[#666660] sm:text-[14px] lg:text-[15px]">
              Start with everyday hydration. When you're ready to train,
              transform HydroFit into workout equipment through a guided filling
              and curing process.
            </p>

            {/* Product Information */}
            <div className="mt-6 flex items-center gap-5 sm:gap-6">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#999890]">
                  Product
                </p>

                <p className="mt-1 font-[Sora] text-[13px] font-semibold tracking-[-0.025em] text-[#111111] sm:text-[14px]">
                  HydroFit Original
                </p>
              </div>

              <span className="h-9 w-px bg-[#DCDAD3]" />

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#999890]">
                  Availability
                </p>

                <p className="mt-1 flex items-center gap-2 text-[11px] font-medium text-[#0B8F63] sm:text-[12px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0B8F63]" />
                  Early access
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-[48px] items-center justify-center gap-2 rounded-[8px] bg-[#111111] px-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#0B8F63]"
              >
                Order on WhatsApp
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="#transformation"
                className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-[#D8D6CF] px-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#222222] transition-all duration-300 hover:border-[#111111] hover:bg-white"
              >
                Explore the process
              </a>
            </div>

            {/* Journey */}
            <div className="mt-6 border-t border-[#E1DFD8] pt-4">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="text-[8px] font-semibold tracking-[0.16em] text-[#AAA9A2]">
                  01
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#555550] sm:text-[10px]">
                  Hydrate
                </span>

                <span className="text-[#B8B7B0]">→</span>

                <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#555550] sm:text-[10px]">
                  Transform
                </span>

                <span className="text-[#B8B7B0]">→</span>

                <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#555550] sm:text-[10px]">
                  Train
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT — E-COMMERCE PRODUCT GALLERY
        ===================================================== */}
        <div className="relative min-h-[520px] overflow-hidden bg-[#F1F0EB] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[680px] xl:h-[calc(100svh-112px)] xl:min-h-[560px]">
          {/* Top Gallery Controls */}
          <div className="absolute left-5 right-5 top-5 z-30 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8 xl:left-10 xl:right-10 xl:top-10">
            {/* Image Counter */}
            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#777770]">
              <span className="text-[#111111]">
                {String(activeImage + 1).padStart(2, "0")}
              </span>

              <span className="text-[#B5B4AD]">/</span>

              <span>{String(PRODUCT_IMAGES.length).padStart(2, "0")}</span>
            </div>

            {/* Availability */}
            <span className="border border-[#D7D5CE] bg-[#F7F6F2] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#555550]">
              Early access
            </span>
          </div>

          {/* =====================================================
      PRODUCT IMAGE STAGE
  ===================================================== */}
          <div className="absolute inset-x-0 bottom-[116px] -top-20 flex items-center justify-center px-8 pt-16 sm:px-14 sm:pt-16 md:px-20 xl:px-20">
            {/* Soft Ground Shadow */}
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 z-0 h-[16px] w-[135px] -translate-x-1/2 rounded-[50%] bg-black/[0.10] blur-[7px] sm:h-[18px] sm:w-[165px] md:h-[20px] md:w-[190px] xl:w-[210px]" />

            {/* Contact Shadow */}
            <div className="pointer-events-none absolute bottom-[9%] left-1/2 z-0 h-[7px] w-[90px] -translate-x-1/2 rounded-[50%] bg-black/[0.13] blur-[2px] sm:w-[115px] md:w-[135px] xl:w-[150px]" />

            {/* Main Product */}
            <img
              key={PRODUCT_IMAGES[activeImage]}
              src={PRODUCT_IMAGES[activeImage]}
              alt={`HydroFit Original product view ${activeImage + 1}`}
              className="relative z-10 h-auto max-h-[64%] w-auto max-w-[58%] object-contain transition-all duration-500 ease-out sm:max-h-[70%] sm:max-w-[62%] md:max-h-[74%] md:max-w-[58%] xl:max-h-[72%] xl:max-w-[62%] 2xl:max-h-[76%] 2xl:max-w-[64%]"
            />
          </div>

          {/* =====================================================
      PRODUCT THUMBNAILS
  ===================================================== */}
          <div className="absolute bottom-[128px] left-5 z-30 flex gap-2 sm:left-8 xl:bottom-[132px] xl:left-10">
            {PRODUCT_IMAGES.map((image, index) => {
              const isActive = activeImage === index;

              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View HydroFit product image ${index + 1}`}
                  aria-pressed={isActive}
                  className={`flex h-[48px] w-[48px] items-center justify-center bg-[#F7F6F2] p-1 transition-all duration-300 sm:h-[52px] sm:w-[52px] ${
                    isActive
                      ? "border border-[#111111] opacity-100"
                      : "border border-[#D7D5CE] opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`HydroFit product thumbnail ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              );
            })}
          </div>

          {/* =====================================================
      PRODUCT INFORMATION
  ===================================================== */}
          <div className="absolute inset-x-0 bottom-0 z-30 border-t border-[#DAD8D1] bg-[#F7F6F2] px-5 py-4 sm:px-8 sm:py-5 xl:px-10">
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#999890]">
                  HydroFit Original
                </p>

                <h2 className="mt-1 font-[Sora] text-[14px] font-semibold tracking-[-0.035em] text-[#111111] sm:text-[16px]">
                  One bottle. Two purposes.
                </h2>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B8F63]" />

                  <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#0B8F63] sm:text-[9px]">
                    Available for early access
                  </span>
                </div>
              </div>

              {/* Shop CTA */}
              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noreferrer"
                className="group flex h-[40px] shrink-0 items-center gap-2 bg-[#111111] px-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#0B8F63] sm:h-[42px] sm:px-5"
              >
                Shop
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
