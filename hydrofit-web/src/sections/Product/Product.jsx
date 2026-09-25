import React from "react";
import { ArrowUpRight } from "lucide-react";

const PRODUCT_IMAGE =
  "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png";

const specifications = [
  {
    label: "Overall height",
    value: "280 mm",
  },
  {
    label: "Maximum diameter",
    value: "100 mm",
  },
  {
    label: "Central grip",
    value: "Ø45 mm",
  },
  {
    label: "Top reservoir",
    value: "80 mm",
  },
  {
    label: "Bottom reservoir",
    value: "80 mm",
  },
  {
    label: "Mouth opening",
    value: "Ø45 mm",
  },
];

const details = [
  {
    label: "Body",
    value: "Food-grade BPA-free plastic",
  },
  {
    label: "Grip",
    value: "Textured central grip",
  },
  {
    label: "Cap",
    value: "Leak-resistant cap with gasket",
  },
  {
    label: "Base",
    value: "Flat, stable bottom",
  },
  {
    label: "Wall thickness",
    value: "2.0–2.5 mm target",
  },
];

const Product = () => {
  return (
    <section id="product-details" className="bg-[#F7F6F2] text-[#111111]">
      {/* ------------------------------------------------
          INTRO
      ------------------------------------------------ */}
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0B8F63]">
              04 / Product Details
            </p>

            <h2 className="max-w-[520px] font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Designed
              <br />
              with purpose.
            </h2>
          </div>

          <div className="max-w-[570px] lg:ml-auto">
            <p className="text-xl leading-[1.35] tracking-[-0.02em] text-[#33332F] sm:text-2xl">
              A closer look at the form, dimensions, and details behind
              HydroFit.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          PRODUCT VISUAL + QUICK INFO
      ------------------------------------------------ */}
      <div className="border-y border-[#DEDCD5]">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[1.15fr_0.85fr]">
          {/* Product visual */}
          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden border-b border-[#DEDCD5] bg-[#F1F0EA] px-8 py-16 sm:min-h-[620px] lg:min-h-[720px] lg:border-b-0 lg:border-r">
            <div className="absolute left-8 top-8">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#77766F]">
                HydroFit Original
              </span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                Product form
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                01 / 01
              </span>
            </div>

            {/* Product shadow */}
            <div className="pointer-events-none absolute bottom-[15%] left-1/2 h-[20px] w-[190px] -translate-x-1/2 rounded-[50%] bg-black/[0.10] blur-[9px]" />

            <div className="relative z-10 flex h-[430px] w-full items-center justify-center sm:h-[500px]">
              <img
                src={PRODUCT_IMAGE}
                alt="HydroFit bottle"
                className="max-h-full max-w-[75%] object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          {/* Product introduction */}
          <div className="flex flex-col justify-between">
            <div className="p-7 sm:p-10 md:p-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                The original
              </p>

              <h3 className="font-[Sora] text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                HydroFit
              </h3>

              <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#55544E] sm:text-base">
                A double-ended bottle designed around a central grip, giving
                HydroFit its distinctive form while keeping both reservoirs
                functional for everyday hydration.
              </p>
            </div>

            <div className="border-t border-[#DEDCD5]">
              <div className="grid grid-cols-2">
                <div className="border-r border-[#DEDCD5] p-7 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                    Height
                  </p>

                  <p className="mt-3 font-[Sora] text-2xl font-semibold tracking-[-0.03em]">
                    280
                    <span className="ml-1 text-sm font-medium text-[#77766F]">
                      mm
                    </span>
                  </p>
                </div>

                <div className="p-7 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                    Max diameter
                  </p>

                  <p className="mt-3 font-[Sora] text-2xl font-semibold tracking-[-0.03em]">
                    100
                    <span className="ml-1 text-sm font-medium text-[#77766F]">
                      mm
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          SPECIFICATIONS
      ------------------------------------------------ */}
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Heading */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              Specifications
            </p>

            <h3 className="max-w-[400px] font-[Sora] text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl">
              Every dimension has a reason.
            </h3>

            <p className="mt-5 max-w-[360px] text-sm leading-7 text-[#66655F]">
              The current product dimensions are based on the HydroFit
              engineering reference.
            </p>
          </div>

          {/* Specification list */}
          <div className="border-t border-[#111111]">
            {specifications.map((item, index) => (
              <div
                key={item.label}
                className="grid grid-cols-[1fr_auto] gap-6 border-b border-[#DEDCD5] py-5 sm:grid-cols-[0.8fr_1.2fr] sm:py-6"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-1 text-[9px] font-semibold tracking-[0.15em] text-[#999890]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-[#55544E]">{item.label}</span>
                </div>

                <span className="text-right font-[Sora] text-sm font-semibold tracking-[-0.01em] sm:text-base">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          MATERIAL / CONSTRUCTION DETAILS
      ------------------------------------------------ */}
      <div className="border-y border-[#DEDCD5] bg-[#111111] text-[#F7F6F2]">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.7fr_1.3fr]">
          <div className="border-b border-[#33332F] p-7 sm:p-10 md:p-12 lg:border-b-0 lg:border-r">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#63D69E]">
              Construction
            </p>

            <h3 className="max-w-[360px] font-[Sora] text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl">
              Built around the form.
            </h3>

            <p className="mt-6 max-w-[390px] text-sm leading-7 text-[#A9A9A2]">
              HydroFit is shaped around two reservoirs connected by a narrower
              central grip, creating the form that makes its transformation
              possible.
            </p>
          </div>

          <div>
            {details.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-[0.7fr_1.3fr] gap-6 p-7 sm:p-10 ${
                  index !== details.length - 1
                    ? "border-b border-[#33332F]"
                    : ""
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77766F]">
                  {item.label}
                </span>

                <span className="text-sm leading-6 text-[#E4E3DD] sm:text-base">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          CLOSING STATEMENT
      ------------------------------------------------ */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              One form. Two purposes.
            </p>

            <h3 className="max-w-[760px] font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Designed to start
              <br />
              as a bottle.
            </h3>
          </div>

          <a
            href="#transformation"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#111111] pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#0B8F63] hover:text-[#0B8F63]"
          >
            Explore the transformation
            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
