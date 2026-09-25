import { ArrowDown, ArrowUpRight } from "lucide-react";

const HydroFitBottle = ({
  filled = false,
  horizontal = false,
  className = "",
}) => {
  return (
    <div
      className={`relative h-[195px] w-[112px] transition-transform duration-500 ${
        horizontal ? "rotate-90" : ""
      } ${className}`}
    >
      {/* =====================================================
          TOP RESERVOIR
      ===================================================== */}
      <div
        className={`absolute left-1/2 top-0 h-[62px] w-[82px] -translate-x-1/2 rounded-[20px] border-2 border-[#111111] ${
          filled ? "bg-[#D9D7CF]" : "bg-[#EDECE6]"
        }`}
      >
        {/* Cap */}
        <div className="absolute left-1/2 top-[-14px] h-[17px] w-[30px] -translate-x-1/2 rounded-t-[6px] border-2 border-b-0 border-[#111111] bg-[#EDECE6]" />

        {/* Cap Top */}
        <div className="absolute left-1/2 top-[-19px] h-[5px] w-[20px] -translate-x-1/2 rounded-t-[3px] bg-[#111111]" />

        {/* Water / Concrete Detail */}
        <div
          className={`absolute bottom-[13px] left-1/2 h-px w-[38px] -translate-x-1/2 ${
            filled ? "bg-[#AAA9A2]" : "bg-[#0B8F63]"
          }`}
        />
      </div>

      {/* =====================================================
          CENTRAL GRIP
      ===================================================== */}
      <div
        className={`absolute left-1/2 top-[57px] h-[76px] w-[48px] -translate-x-1/2 rounded-[13px] border-2 border-[#111111] ${
          filled ? "bg-[#C9C7BF]" : "bg-[#E6E4DD]"
        }`}
      >
        {/* Grip Texture */}
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
        className={`absolute bottom-0 left-1/2 h-[62px] w-[82px] -translate-x-1/2 rounded-[20px] border-2 border-[#111111] ${
          filled ? "bg-[#D9D7CF]" : "bg-[#EDECE6]"
        }`}
      >
        {/* Bottom Detail */}
        <div
          className={`absolute bottom-[13px] left-1/2 h-px w-[38px] -translate-x-1/2 ${
            filled ? "bg-[#AAA9A2]" : "bg-[#0B8F63]"
          }`}
        />
      </div>
    </div>
  );
};

const Concept = () => {
  return (
    <section id="concept" className="overflow-hidden bg-[#F7F6F2]">
      <div className="mx-auto max-w-[1600px]">
        {/* =====================================================
            INTRO
        ===================================================== */}
        <div className="border-b border-[#DEDCD5] px-6 py-20 sm:px-10 sm:py-24 md:px-14 md:py-28 lg:px-20 lg:py-32 xl:px-16 2xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">
            {/* Label */}
            <div className="flex items-start gap-3">
              <span className="mt-[7px] h-px w-8 bg-[#0B8F63]" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
                  The Concept
                </p>

                <p className="mt-3 max-w-[220px] text-[10px] leading-5 text-[#999890]">
                  One product designed to move with you from everyday hydration
                  to training.
                </p>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h2 className="max-w-[850px] font-[Sora] text-[42px] font-semibold leading-[0.98] tracking-[-0.065em] text-[#111111] sm:text-[52px] md:text-[62px] lg:text-[68px] xl:text-[76px] 2xl:text-[84px]">
                One bottle.
                <br />
                <span className="text-[#0B8F63]">A second purpose.</span>
              </h2>

              <p className="mt-7 max-w-[620px] text-[14px] leading-[1.8] text-[#666660] sm:text-[15px] md:text-[16px]">
                HydroFit is designed to begin as an everyday water bottle and,
                when you're ready to train, transform into workout equipment
                through a guided filling and curing process.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONCEPT JOURNEY
        ===================================================== */}
        <div className="grid border-b border-[#DEDCD5] lg:grid-cols-3">
          {/* ===================================================
              01 — HYDRATE
          =================================================== */}
          <div className="group relative min-h-[470px] border-b border-[#DEDCD5] px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:px-12 lg:py-14 xl:px-16 xl:py-16">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#AAA9A2]">
                01
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                className="text-[#B4B3AC] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0B8F63]"
              />
            </div>

            {/* Fixed Visual Stage */}
            <div className="mt-12 flex h-[210px] items-center justify-center sm:mt-14 lg:mt-16">
              <HydroFitBottle className="group-hover:-translate-y-2" />
            </div>

            {/* Content */}
            <div className="mt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                Hydrate
              </p>

              <h3 className="mt-2 font-[Sora] text-[24px] font-semibold tracking-[-0.045em] text-[#111111] sm:text-[27px]">
                Everyday hydration.
              </h3>

              <p className="mt-3 max-w-[350px] text-[12px] leading-6 text-[#77766F] sm:text-[13px]">
                Use HydroFit as your everyday water bottle and carry it wherever
                your day takes you.
              </p>
            </div>
          </div>

          {/* ===================================================
              02 — TRANSFORM
          =================================================== */}
          <div className="group relative min-h-[470px] border-b border-[#DEDCD5] px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:px-12 lg:py-14 xl:px-16 xl:py-16">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#AAA9A2]">
                02
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                className="text-[#B4B3AC] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0B8F63]"
              />
            </div>

            {/* Transformation Visual */}
            <div className="mt-12 flex h-[210px] items-center justify-center sm:mt-14 lg:mt-16">
              <div className="flex items-center gap-5 sm:gap-7">
                {/* Original */}
                <HydroFitBottle className="scale-[0.82] transition-transform duration-500 group-hover:-translate-x-1" />

                {/* Arrow */}
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.2}
                    className="text-[#0B8F63]"
                  />

                  <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-[#999890]">
                    Transform
                  </span>
                </div>

                {/* Filled */}
                <HydroFitBottle
                  filled
                  className="scale-[0.82] transition-transform duration-500 group-hover:translate-x-1"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                Transform
              </p>

              <h3 className="mt-2 font-[Sora] text-[24px] font-semibold tracking-[-0.045em] text-[#111111] sm:text-[27px]">
                Give it a second purpose.
              </h3>

              <p className="mt-3 max-w-[350px] text-[12px] leading-6 text-[#77766F] sm:text-[13px]">
                When you're ready to train, prepare HydroFit and follow the
                guided filling and curing process.
              </p>
            </div>
          </div>

          {/* ===================================================
              03 — TRAIN
          =================================================== */}
          <div className="group relative min-h-[470px] px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:min-h-[520px] lg:px-12 lg:py-14 xl:px-16 xl:py-16">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#AAA9A2]">
                03
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                className="text-[#B4B3AC] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0B8F63]"
              />
            </div>

            {/* Fixed Visual Stage */}
            <div className="mt-12 flex h-[210px] items-center justify-center sm:mt-14 lg:mt-16">
              <HydroFitBottle
                filled
                horizontal
                className="group-hover:-translate-y-2"
              />
            </div>

            {/* Content */}
            <div className="mt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                Train
              </p>

              <h3 className="mt-2 font-[Sora] text-[24px] font-semibold tracking-[-0.045em] text-[#111111] sm:text-[27px]">
                Built for the next phase.
              </h3>

              <p className="mt-3 max-w-[350px] text-[12px] leading-6 text-[#77766F] sm:text-[13px]">
                Once fully cured, the transformed HydroFit becomes workout
                equipment for your training routine.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TRANSITION
        ===================================================== */}
        <div className="flex flex-col gap-6 px-6 py-10 sm:px-10 sm:py-12 md:flex-row md:items-center md:justify-between md:px-14 lg:px-20 xl:px-16 2xl:px-20">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B8F63]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
              Designed to evolve with you
            </p>
          </div>

          <a
            href="#transformation"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#222222] transition-colors duration-300 hover:text-[#0B8F63]"
          >
            See the transformation
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

export default Concept;
