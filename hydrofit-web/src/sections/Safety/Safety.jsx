import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const safetyPoints = [
  {
    number: "01",
    title: "CURE COMPLETELY",
    text: "Never use the transformed HydroFit for exercise until the concrete has fully cured according to the manufacturer's instructions.",
  },
  {
    number: "02",
    title: "FOLLOW THE PROCESS",
    text: "Use the specified preparation, filling, and curing procedure. Do not modify the transformation process.",
  },
  {
    number: "03",
    title: "INSPECT BEFORE USE",
    text: "Check the transformed product for visible cracks, damage, loose material, or other signs that it is not ready for use.",
  },
  {
    number: "04",
    title: "STOP IF DAMAGED",
    text: "Do not exercise with HydroFit if the product shows damage or does not appear structurally sound.",
  },
];

const Safety = () => {
  return (
    <section
      id="safety"
      className="scroll-mt-[112px] overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      <SectionHeading
        number="07"
        label="SAFETY"
        title={
          <>
            TRANSFORM
            <br />
            <span className="text-[#0B8F63]">RESPONSIBLY.</span>
          </>
        }
        description="HydroFit changes purpose through a defined transformation process. Safety comes first at every stage."
      />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Main warning */}
        <div className="grid overflow-hidden border border-[#111111] lg:grid-cols-[1fr_1.4fr]">
          {/* Left */}
          <div className="flex min-h-[360px] flex-col justify-between bg-[#111111] p-6 text-[#F7F6F2] sm:min-h-[420px] sm:p-8 lg:p-12">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#63D69E]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#AAA9A2]">
                HYDROFIT / SAFETY
              </span>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#63D69E]">
                THE MOST IMPORTANT STEP
              </p>

              <h3 className="mt-5 max-w-[560px] font-[Sora] text-4xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                DO NOT
                <br />
                TRAIN
                <br />
                TOO SOON.
              </h3>
            </div>

            <p className="mt-8 max-w-[440px] text-xs leading-6 text-[#999890] sm:text-sm">
              The concrete must be completely cured before HydroFit is used as
              workout equipment.
            </p>
          </div>

          {/* Right */}
          <div className="bg-[#E9E7DE]">
            <div className="grid h-full sm:grid-cols-2">
              {safetyPoints.map((point, index) => (
                <div
                  key={point.number}
                  className={`flex min-h-[210px] flex-col justify-between p-6 sm:p-8 lg:p-10 ${
                    index % 2 === 0 ? "sm:border-r sm:border-[#C9C7C0]" : ""
                  } ${index < 2 ? "border-b border-[#C9C7C0]" : ""}`}
                >
                  <span className="font-[Sora] text-sm font-semibold text-[#0B8F63]">
                    {point.number}
                  </span>

                  <div className="mt-10">
                    <h4 className="font-[Sora] text-lg font-semibold tracking-[-0.04em] sm:text-xl">
                      {point.title}
                    </h4>

                    <p className="mt-3 max-w-[330px] text-xs leading-5 text-[#77766F] sm:text-sm">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety note */}
        <div className="mt-4 flex flex-col gap-4 border-y border-[#DEDCD5] py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B8F63]">
              BEFORE EVERY SESSION
            </p>

            <p className="mt-2 max-w-[760px] text-xs leading-5 text-[#77766F] sm:text-sm">
              Make sure HydroFit is fully cured and free from visible damage
              before using it as workout equipment.
            </p>
          </div>

          <span className="shrink-0 font-[Sora] text-xs font-semibold uppercase tracking-[0.12em]">
            SAFETY FIRST
          </span>
        </div>
      </div>
    </section>
  );
};

export default Safety;
