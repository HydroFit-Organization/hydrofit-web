import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const steps = [
  {
    number: "01",
    title: "USE",
    text: "Use HydroFit as your everyday water bottle.",
  },
  {
    number: "02",
    title: "PREPARE",
    text: "Clean the bottle and prepare it according to the transformation instructions.",
  },
  {
    number: "03",
    title: "FILL",
    text: "Fill the entire bottle with concrete. Make sure the material reaches all internal sections.",
  },
  {
    number: "04",
    title: "CURE",
    text: "Allow the concrete to fully cure before handling it as workout equipment.",
  },
  {
    number: "05",
    title: "TRAIN",
    text: "Once fully cured, HydroFit is ready for its second purpose.",
  },
];

const HowToUse = () => {
  return (
    <section
      id="how-to-use"
      className="scroll-mt-[112px] overflow-hidden bg-[#111111] text-[#F7F6F2]"
    >
      <SectionHeading
        number="06"
        label="HOW TO USE"
        title={
          <>
            SIMPLE TO
            <br />
            <span className="text-[#63D69E]">TRANSFORM.</span>
          </>
        }
        description="Use HydroFit every day. When you're ready to transform it, follow the preparation, filling, and curing process carefully."
        className="text-[#F7F6F2]"
      />

      <div className="mx-auto max-w-[1600px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 xl:px-16">
        {/* Visual + Intro */}
        <div className="grid overflow-hidden border border-white/15 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <div className="relative min-h-[360px] overflow-hidden bg-[#E9E7DE] sm:min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1400&q=85"
              alt="Reusable water bottle"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/[0.08]" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#55544E]">
                  HYDROFIT / INSTRUCTIONS
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-black/10 bg-[#E9E7DE]/90 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[7px] uppercase tracking-[0.18em] text-[#77766F]">
                    START HERE
                  </p>

                  <p className="mt-1 font-[Sora] text-sm font-semibold tracking-[-0.04em] text-[#111111]">
                    USE. PREPARE. TRANSFORM.
                  </p>
                </div>

                <span className="text-[8px] uppercase tracking-[0.18em] text-[#77766F]">
                  06 / 05
                </span>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="flex flex-col justify-between border-t border-white/15 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-12">
            <div>
              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#63D69E]">
                BEFORE YOU BEGIN
              </span>

              <h3 className="mt-6 max-w-[480px] font-[Sora] text-3xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-4xl">
                One bottle.
                <br />
                One defined process.
              </h3>
            </div>

            <p className="mt-10 max-w-[420px] text-sm leading-7 text-[#AAA9A2]">
              HydroFit is designed to move through its transformation in a
              controlled sequence. Follow every step before using the
              transformed product.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-4 border-y border-white/15">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-[48px_1fr] gap-5 px-5 py-7 sm:grid-cols-[70px_1fr_1fr] sm:px-8 sm:py-8 lg:px-10 ${
                index !== steps.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="font-[Sora] text-sm font-semibold text-[#63D69E]">
                {step.number}
              </span>

              <h3 className="font-[Sora] text-lg font-semibold tracking-[-0.035em] sm:text-xl">
                {step.title}
              </h3>

              <p className="col-start-2 max-w-[520px] text-xs leading-5 text-[#999890] sm:col-start-3 sm:text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-4 flex flex-col gap-4 border border-[#63D69E]/30 bg-[#0B8F63]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#63D69E]">
              IMPORTANT
            </p>

            <p className="mt-2 max-w-[700px] text-xs leading-5 text-[#B8B7B0] sm:text-sm">
              Do not use the transformed HydroFit for exercise until the
              concrete has completely cured and the product is ready according
              to the manufacturer's instructions.
            </p>
          </div>

          <span className="shrink-0 font-[Sora] text-xs font-semibold uppercase tracking-[0.12em] text-[#F7F6F2]">
            FOLLOW THE PROCESS
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
