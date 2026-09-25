import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Hydrate daily.",
    description:
      "HydroFit starts with the simplest part of the idea: a bottle designed to be carried, used, and reached for throughout your everyday routine.",
  },
  {
    number: "02",
    title: "One form. Two purposes.",
    description:
      "Its distinctive double-ended form creates the foundation for something more. The same object can begin as a water bottle and later transform into workout equipment.",
  },
  {
    number: "03",
    title: "Carry less. Do more.",
    description:
      "HydroFit explores a simpler relationship between hydration and training by bringing two uses together in one physical form.",
  },
];

const WhyHydroFit = () => {
  return (
    <section
      id="why-hydrofit"
      className="overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      {/* ==================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0B8F63]">
              05 / Why HydroFit
            </p>

            <h2 className="max-w-[780px] font-[Sora] text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              More than
              <br />a water bottle.
            </h2>
          </div>

          <div className="max-w-[500px] lg:ml-auto">
            <p className="text-lg leading-7 tracking-[-0.015em] text-[#4F4E49] sm:text-xl">
              HydroFit is built around one simple idea: create an everyday
              bottle that can eventually become something useful for training.
            </p>
          </div>
        </div>
      </div>

      {/* ==================================================
          FEATURE STATEMENT
      ================================================== */}
      <div className="border-y border-[#DEDCD5]">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1fr_1fr]">
          {/* Large statement */}
          <div className="flex min-h-[480px] flex-col justify-between border-b border-[#DEDCD5] p-7 sm:p-10 md:p-14 lg:min-h-[620px] lg:border-b-0 lg:border-r">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                The idea
              </span>
            </div>

            <div>
              <h3 className="max-w-[620px] font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                One object.
                <br />
                Different stages.
              </h3>

              <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                HydroFit is designed around a change in purpose. It begins as
                something you use every day and, when you're ready, follows a
                defined process to become exercise equipment.
              </p>
            </div>
          </div>

          {/* Product composition */}
          <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#F1F0EA] p-8 md:min-h-[620px]">
            {/* Labels */}
            <div className="absolute left-7 top-7 sm:left-10 sm:top-10">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                HydroFit
              </span>
            </div>

            <div className="absolute right-7 top-7 text-right sm:right-10 sm:top-10">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                01 / 02
              </span>
            </div>

            {/* Ground shadow */}
            <div className="pointer-events-none absolute bottom-[17%] left-1/2 h-[22px] w-[190px] -translate-x-1/2 rounded-[50%] bg-black/[0.10] blur-[9px]" />

            {/* Product */}
            <div className="relative z-10 flex h-[390px] items-center justify-center sm:h-[470px]">
              <img
                src="https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png"
                alt="HydroFit bottle"
                className="max-h-full max-w-[72%] object-contain drop-shadow-[0_28px_32px_rgba(0,0,0,0.13)]"
              />
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                Everyday hydration
              </span>

              <ArrowDownRight
                size={18}
                strokeWidth={1.5}
                className="text-[#0B8F63]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          THREE PRINCIPLES
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              What drives it
            </p>
          </div>

          <h3 className="max-w-[760px] font-[Sora] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl">
            A product built around a different way of thinking about everyday
            objects.
          </h3>
        </div>

        <div className="border-t border-[#111111]">
          {principles.map((item) => (
            <div
              key={item.number}
              className="grid gap-7 border-b border-[#DEDCD5] py-10 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-10 md:py-12"
            >
              {/* Number */}
              <span className="text-[10px] font-semibold tracking-[0.16em] text-[#999890]">
                {item.number}
              </span>

              {/* Title */}
              <h4 className="font-[Sora] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {item.title}
              </h4>

              {/* Description */}
              <p className="max-w-[500px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================
          CORE IDEA
      ================================================== */}
      <div className="border-y border-[#DEDCD5] bg-[#111111] text-[#F7F6F2]">
        <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#63D69E]">
                The HydroFit principle
              </p>

              <h3 className="max-w-[850px] font-[Sora] text-4xl font-semibold leading-[0.97] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Start with hydration.
                <br />
                End with movement.
              </h3>
            </div>

            <a
              href="#transformation"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#F7F6F2] pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F7F6F2] transition-colors duration-300 hover:border-[#63D69E] hover:text-[#63D69E]"
            >
              See the transformation
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* ==================================================
          NEXT SECTION
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <a
          href="#how-to-use"
          className="group flex items-center justify-between border-b border-[#DEDCD5] pb-5"
        >
          <div>
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
              Next
            </p>

            <span className="font-[Sora] text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
              How to use
            </span>
          </div>

          <ArrowUpRight
            size={20}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
  );
};

export default WhyHydroFit;
