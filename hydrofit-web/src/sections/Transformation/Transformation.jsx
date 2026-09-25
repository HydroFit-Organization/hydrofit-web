import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

const HydroFitVisual = ({ stage }) => {
  const isFilled = stage >= 3;
  const isCured = stage === 4;

  return (
    <div className="relative flex h-[260px] w-full items-center justify-center sm:h-[300px] lg:h-[340px]">
      {/* Ground shadow */}
      <div className="absolute bottom-[14%] left-1/2 h-[14px] w-[120px] -translate-x-1/2 rounded-[50%] bg-black/[0.10] blur-[6px] sm:w-[150px]" />

      {/* HydroFit */}
      <div
        className={`relative h-[190px] w-[105px] transition-all duration-700 ${
          isCured ? "scale-[1.05]" : ""
        }`}
      >
        {/* =====================================================
            TOP RESERVOIR
        ===================================================== */}
        <div
          className={`absolute left-1/2 top-0 h-[62px] w-[82px] -translate-x-1/2 rounded-[20px] border-2 border-[#111111] transition-colors duration-500 ${
            isFilled ? "bg-[#D8D6CE]" : "bg-[#EDECE6]"
          }`}
        >
          {/* Cap */}
          <div className="absolute left-1/2 top-[-14px] h-[17px] w-[30px] -translate-x-1/2 rounded-t-[6px] border-2 border-b-0 border-[#111111] bg-[#EDECE6]" />

          <div className="absolute left-1/2 top-[-19px] h-[5px] w-[20px] -translate-x-1/2 rounded-t-[3px] bg-[#111111]" />

          {/* Fill detail */}
          <div
            className={`absolute bottom-[13px] left-1/2 h-px w-[38px] -translate-x-1/2 ${
              isFilled ? "bg-[#999890]" : "bg-[#0B8F63]"
            }`}
          />
        </div>

        {/* =====================================================
            CENTRAL GRIP
        ===================================================== */}
        <div
          className={`absolute left-1/2 top-[57px] h-[76px] w-[48px] -translate-x-1/2 rounded-[13px] border-2 border-[#111111] transition-colors duration-500 ${
            isFilled ? "bg-[#C9C7BF]" : "bg-[#E6E4DD]"
          }`}
        >
          <div className="absolute inset-x-[9px] top-1/2 h-[23px] -translate-y-1/2 border-y border-[#AAA9A2]" />

          <div className="absolute inset-x-[12px] top-[calc(50%-5px)] h-px bg-[#AAA9A2]" />

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[27px] rotate-90 whitespace-nowrap text-[5px] font-semibold uppercase tracking-[0.15em] text-[#77766F]">
            HYDROFIT
          </span>
        </div>

        {/* =====================================================
            BOTTOM RESERVOIR
        ===================================================== */}
        <div
          className={`absolute bottom-0 left-1/2 h-[62px] w-[82px] -translate-x-1/2 rounded-[20px] border-2 border-[#111111] transition-colors duration-500 ${
            isFilled ? "bg-[#D8D6CE]" : "bg-[#EDECE6]"
          }`}
        >
          <div
            className={`absolute bottom-[13px] left-1/2 h-px w-[38px] -translate-x-1/2 ${
              isFilled ? "bg-[#999890]" : "bg-[#0B8F63]"
            }`}
          />
        </div>

        {/* Cured check */}
        {isCured && (
          <div className="absolute -right-9 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B8F63] text-white">
            <Check size={13} strokeWidth={2} />
          </div>
        )}
      </div>
    </div>
  );
};

const steps = [
  {
    number: "01",
    label: "Drink",
    title: "Start with HydroFit.",
    description:
      "Use HydroFit as your everyday water bottle and carry it as part of your daily hydration routine.",
    stage: 1,
  },
  {
    number: "02",
    label: "Clean & prepare",
    title: "Prepare the bottle.",
    description:
      "When you're ready to transform HydroFit, empty, clean, and prepare the bottle according to the provided instructions.",
    stage: 2,
  },
  {
    number: "03",
    label: "Fill with concrete",
    title: "Fill the entire bottle.",
    description:
      "Fill the complete HydroFit body with concrete according to the manufacturer's instructions.",
    stage: 3,
  },
  {
    number: "04",
    label: "Cure & transform",
    title: "Let it fully cure.",
    description:
      "Allow the concrete to fully cure before using HydroFit as exercise equipment.",
    stage: 4,
  },
];

const Transformation = () => {
  return (
    <section
      id="transformation"
      className="overflow-hidden border-b border-[#DEDCD5] bg-[#F7F6F2]"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* =====================================================
            INTRO
        ===================================================== */}
        <div className="border-b border-[#DEDCD5] px-6 py-20 sm:px-10 sm:py-24 md:px-14 md:py-28 lg:px-20 lg:py-32 xl:px-16 2xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
            {/* Label */}
            <div className="flex items-start gap-3">
              <span className="mt-[7px] h-px w-8 bg-[#0B8F63]" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
                  The Transformation
                </p>

                <p className="mt-3 max-w-[230px] text-[10px] leading-5 text-[#999890]">
                  From everyday hydration to workout equipment.
                </p>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h2 className="max-w-[850px] font-[Sora] text-[42px] font-semibold leading-[0.98] tracking-[-0.065em] text-[#111111] sm:text-[52px] md:text-[62px] lg:text-[68px] xl:text-[76px] 2xl:text-[84px]">
                How it
                <br />
                <span className="text-[#0B8F63]">works.</span>
              </h2>

              <p className="mt-7 max-w-[620px] text-[14px] leading-[1.8] text-[#666660] sm:text-[15px] md:text-[16px]">
                When you're ready to move from hydration to training, follow the
                preparation, filling, and curing process carefully.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROCESS
        ===================================================== */}
        <div>
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.number}
                className={`relative ${
                  !isLast ? "border-b border-[#DEDCD5]" : ""
                }`}
              >
                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                  {/* =================================================
                      STEP CONTENT
                  ================================================= */}
                  <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:min-h-[420px] lg:px-12 xl:px-16 2xl:px-20">
                    {/* Step number */}
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-[0.12em] text-[#AAA9A2]">
                        {step.number}
                      </span>

                      <span className="h-px w-8 bg-[#D8D6CF]" />

                      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                        {step.label}
                      </span>
                    </div>

                    <div className="mt-10 max-w-[500px]">
                      <h3 className="font-[Sora] text-[32px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#111111] sm:text-[38px] md:text-[42px] lg:text-[46px]">
                        {step.title}
                      </h3>

                      <p className="mt-5 max-w-[450px] text-[13px] leading-[1.85] text-[#77766F] sm:text-[14px]">
                        {step.description}
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="mt-10 flex items-center gap-2">
                      {steps.map((item) => (
                        <span
                          key={item.number}
                          className={`h-[2px] transition-all duration-300 ${
                            item.number === step.number
                              ? "w-10 bg-[#0B8F63]"
                              : "w-5 bg-[#D8D6CF]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      VISUAL
                  ================================================= */}
                  <div className="relative min-h-[320px] border-t border-[#DEDCD5] bg-[#F1F0EB] lg:min-h-[420px] lg:border-l lg:border-t-0 xl:min-h-[460px]">
                    {/* Top label */}
                    <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8 lg:left-10 lg:right-10 lg:top-10">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                        HydroFit Original
                      </span>

                      <span className="flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.16em] text-[#999890]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0B8F63]" />
                        {step.label}
                      </span>
                    </div>

                    {/* Visual */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HydroFitVisual stage={step.stage} />
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-[#DAD8D1] bg-[#F7F6F2] px-6 py-4 sm:px-8 sm:py-5 lg:px-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#999890]">
                          Step {step.number}
                        </span>

                        <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-[#555550]">
                          {step.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            SAFETY
        ===================================================== */}
        <div className="border-t border-[#DEDCD5] bg-[#111111] px-6 py-14 text-white sm:px-10 sm:py-16 md:px-14 lg:px-20 lg:py-20 xl:px-16 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 xl:gap-24">
            {/* Label */}
            <div className="flex items-start gap-3">
              <span className="mt-[7px] h-px w-8 bg-[#0B8F63]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#63D69E]">
                Important
              </p>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-[Sora] text-[26px] font-semibold leading-tight tracking-[-0.045em] text-white sm:text-[32px]">
                Cure completely before training.
              </h3>

              <p className="mt-4 max-w-[680px] text-[13px] leading-[1.8] text-white/60 sm:text-[14px]">
                Do not use HydroFit as exercise equipment until the concrete has
                fully cured. Follow the manufacturer's instructions for
                preparation, filling, curing, inspection, and first use.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "Prepare correctly",
                  "Fill completely",
                  "Cure fully",
                  "Inspect before use",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#63D69E]" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            NEXT SECTION
        ===================================================== */}
        <div className="flex flex-col gap-6 px-6 py-10 sm:px-10 sm:py-12 md:flex-row md:items-center md:justify-between md:px-14 lg:px-20 xl:px-16 2xl:px-20">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B8F63]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
              Know the product
            </p>
          </div>

          <a
            href="#product-details"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#222222] transition-colors duration-300 hover:text-[#0B8F63]"
          >
            Explore product details
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
