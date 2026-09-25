import React from "react";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

const everydaySteps = [
  {
    number: "01",
    title: "Fill",
    description:
      "Fill HydroFit with drinking water using the bottle's opening and close the cap securely.",
  },
  {
    number: "02",
    title: "Carry",
    description:
      "Use HydroFit as your everyday water bottle and carry it throughout your daily routine.",
  },
  {
    number: "03",
    title: "Hydrate",
    description:
      "Drink from HydroFit normally and keep it as part of your everyday hydration routine.",
  },
];

const transformationSteps = [
  {
    number: "01",
    title: "Empty",
    description:
      "When you're ready to transform HydroFit, completely empty the bottle before beginning the preparation process.",
  },
  {
    number: "02",
    title: "Clean",
    description:
      "Clean the bottle thoroughly and prepare it according to the manufacturer's instructions.",
  },
  {
    number: "03",
    title: "Fill",
    description:
      "Fill the entire HydroFit body with concrete according to the manufacturer's specified process.",
  },
  {
    number: "04",
    title: "Cure",
    description:
      "Allow the concrete to fully cure before using HydroFit as exercise equipment.",
  },
];

const HowToUse = () => {
  return (
    <section
      id="how-to-use"
      className="overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      {/* ==================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0B8F63]">
              06 / How to Use
            </p>

            <h2 className="max-w-[760px] font-[Sora] text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Simple to start.
              <br />
              Designed to transform.
            </h2>
          </div>

          <p className="max-w-[480px] text-lg leading-7 text-[#55544E] sm:text-xl lg:ml-auto">
            HydroFit has two distinct stages. Use it first as your everyday
            water bottle. Transform it only when you're ready to follow the
            preparation and curing process.
          </p>
        </div>
      </div>

      {/* ==================================================
          PHASE 01 — EVERYDAY USE
      ================================================== */}
      <div className="border-y border-[#DEDCD5]">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Phase intro */}
            <div className="flex min-h-[520px] flex-col justify-between border-b border-[#DEDCD5] p-7 sm:p-10 md:p-14 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  Phase 01
                </span>

                <span className="font-[Sora] text-3xl font-semibold tracking-[-0.04em]">
                  01
                </span>
              </div>

              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B8F63]">
                  Everyday hydration
                </p>

                <h3 className="font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl">
                  Start with
                  <br />
                  the bottle.
                </h3>

                <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                  Before HydroFit becomes anything else, it is simply your
                  everyday water bottle.
                </p>
              </div>
            </div>

            {/* Steps */}
            <div>
              {everydaySteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-6 border-b border-[#DEDCD5] p-7 last:border-b-0 sm:p-10 md:grid-cols-[70px_0.7fr_1.3fr] md:items-start md:gap-8 md:p-12"
                >
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#999890]">
                    {step.number}
                  </span>

                  <h4 className="font-[Sora] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {step.title}
                  </h4>

                  <p className="max-w-[470px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          TRANSITION
      ================================================== */}
      <div className="flex justify-center px-5 py-14 sm:py-20">
        <div className="flex flex-col items-center">
          <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
            When you're ready
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#CFCDC5]">
            <ArrowDown size={18} strokeWidth={1.5} className="text-[#0B8F63]" />
          </div>
        </div>
      </div>

      {/* ==================================================
          PHASE 02 — TRANSFORMATION
      ================================================== */}
      <div className="border-y border-[#DEDCD5] bg-[#111111] text-[#F7F6F2]">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Phase intro */}
            <div className="flex min-h-[560px] flex-col justify-between border-b border-[#33332F] p-7 sm:p-10 md:p-14 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  Phase 02
                </span>

                <span className="font-[Sora] text-3xl font-semibold tracking-[-0.04em]">
                  02
                </span>
              </div>

              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#63D69E]">
                  Transformation
                </p>

                <h3 className="font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl">
                  Then make
                  <br />
                  the change.
                </h3>

                <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#A9A9A2] sm:text-base">
                  The transformation is a separate process. Prepare the bottle,
                  fill the entire body, and allow it to fully cure before its
                  new use.
                </p>
              </div>
            </div>

            {/* Transformation steps */}
            <div>
              {transformationSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-6 border-b border-[#33332F] p-7 last:border-b-0 sm:p-10 md:grid-cols-[70px_0.7fr_1.3fr] md:items-start md:gap-8 md:p-12"
                >
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#77766F]">
                    {step.number}
                  </span>

                  <h4 className="font-[Sora] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {step.title}
                  </h4>

                  <p className="max-w-[470px] text-sm leading-7 text-[#A9A9A2] sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          IMPORTANT NOTE
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              Before training
            </p>
          </div>

          <div className="border-t border-[#111111] pt-7">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-[#111111]">
                <Check size={14} strokeWidth={2} />
              </div>

              <div>
                <h3 className="font-[Sora] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  Cure completely before use.
                </h3>

                <p className="mt-5 max-w-[700px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                  Do not use HydroFit as exercise equipment until the concrete
                  has fully cured. Follow the manufacturer's instructions for
                  preparation, filling, curing, inspection, and first use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          CLOSING
      ================================================== */}
      <div className="border-t border-[#DEDCD5]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
                Next
              </p>

              <h3 className="font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Know the
                <br />
                safety first.
              </h3>
            </div>

            <a
              href="#safety"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#111111] pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#0B8F63] hover:text-[#0B8F63]"
            >
              Read safety guidelines
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
