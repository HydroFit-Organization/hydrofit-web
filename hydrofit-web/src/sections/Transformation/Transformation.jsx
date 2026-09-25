import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const steps = [
  {
    number: "01",
    label: "DRINK",
    title: "EVERYDAY HYDRATION",
    description:
      "Use HydroFit as your everyday water bottle. Carry it, fill it, and drink from it throughout the day.",
  },
  {
    number: "02",
    label: "PREPARE",
    title: "PREPARE THE BOTTLE",
    description:
      "Once its first purpose is complete, clean and prepare the bottle for the transformation process.",
  },
  {
    number: "03",
    label: "FILL",
    title: "FILL THE ENTIRE FORM",
    description:
      "Fill the complete bottle with concrete according to the preparation instructions. The material occupies the full form.",
  },
  {
    number: "04",
    label: "CURE",
    title: "LET IT FULLY CURE",
    description:
      "Allow the concrete to fully cure before handling the transformed bottle as workout equipment.",
  },
  {
    number: "05",
    label: "TRAIN",
    title: "READY TO TRAIN",
    description:
      "After complete curing, the same form takes on its second purpose as workout equipment.",
  },
];

const Transformation = () => {
  return (
    <section
      id="transformation"
      className="scroll-mt-[112px] overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      <SectionHeading
        number="03"
        label="THE TRANSFORMATION"
        title={
          <>
            ONE FORM.
            <br />
            <span className="text-[#0B8F63]">TWO PURPOSES.</span>
          </>
        }
        description="HydroFit is designed to move through two distinct stages — everyday hydration first, training equipment later."
      />

      {/* Intro visual */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 pb-16 xl:px-16">
        <div className="grid overflow-hidden border border-[#111111] lg:grid-cols-[1.15fr_0.85fr]">
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden bg-[#D8D6CF] sm:min-h-[520px] lg:min-h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=85"
              alt="Strength training with dumbbells"
              className="absolute inset-0 h-full w-full object-cover grayscale-[20%]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-24 sm:px-8 lg:px-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                THE SECOND LIFE
              </p>

              <p className="mt-3 max-w-[420px] font-[Sora] text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                Designed to keep serving a purpose after hydration.
              </p>
            </div>
          </div>

          {/* Statement */}
          <div className="flex flex-col justify-between border-t border-[#111111] bg-[#111111] p-7 text-[#F7F6F2] sm:p-10 lg:border-l lg:border-t-0 lg:p-12 xl:p-16">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8E8D87]">
                TRANSFORMATION
              </span>

              <span className="h-2 w-2 bg-[#0B8F63]" />
            </div>

            <div className="py-16 lg:py-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8E8D87]">
                FROM
              </p>

              <h3 className="mt-4 font-[Sora] text-[42px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[54px]">
                WATER
              </h3>

              <div className="my-8 h-px w-full bg-white/15" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8E8D87]">
                TO
              </p>

              <h3 className="mt-4 font-[Sora] text-[42px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[54px]">
                TRAINING
              </h3>
            </div>

            <p className="max-w-[330px] text-xs leading-6 text-[#AAA9A2]">
              The transformation is a process, not a switch. Preparation,
              complete filling, and full curing are essential before the second
              purpose begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
