import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const benefits = [
  {
    number: "01",
    title: "EVERYDAY FIRST",
    text: "HydroFit begins as a bottle designed for everyday hydration.",
  },
  {
    number: "02",
    title: "ONE DISTINCT FORM",
    text: "A double-ended structure creates a recognizable form with a central grip.",
  },
  {
    number: "03",
    title: "TWO PURPOSES",
    text: "The same object can move from hydration to training through a defined transformation.",
  },
  {
    number: "04",
    title: "LESS, BY DESIGN",
    text: "One adaptable object replaces the need to buy separate products for different uses.",
  },
];

const WhyHydroFit = () => {
  return (
    <section
      id="why-hydrofit"
      className="scroll-mt-[112px] overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      <SectionHeading
        number="05"
        label="WHY HYDROFIT"
        title={
          <>
            DESIGNED TO
            <br />
            <span className="text-[#0B8F63]">DO MORE.</span>
          </>
        }
        description="HydroFit is built around a simple idea: make one well-designed object useful across different stages of your day."
      />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 pb-16 lg:px-12 xl:px-16">
        <div className="grid overflow-hidden border-y border-[#DEDCD5] lg:grid-cols-[1fr_1.15fr]">
          {/* =========================================
              IMAGE
          ========================================= */}

          <div className="relative min-h-[420px] overflow-hidden bg-[#E9E7DE] sm:min-h-[500px] lg:min-h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?auto=format&fit=crop&w=1400&q=85"
              alt="Minimal reusable water bottle"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />

            <div className="absolute inset-0 bg-black/[0.04]" />

            {/* Image label */}

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#55544E]">
                  HYDROFIT / EVERYDAY
                </span>
              </div>
            </div>

            {/* Bottom label */}

            <div className="absolute bottom-0 left-0 right-0 border-t border-black/[0.08] bg-[#E9E7DE]/90 px-6 py-5 backdrop-blur-sm sm:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[7px] uppercase tracking-[0.18em] text-[#77766F]">
                    THE DAILY OBJECT
                  </p>

                  <p className="mt-1 font-[Sora] text-sm font-semibold tracking-[-0.04em]">
                    HYDRATION, REDEFINED.
                  </p>
                </div>

                <span className="text-[8px] uppercase tracking-[0.18em] text-[#999890]">
                  01 / 04
                </span>
              </div>
            </div>
          </div>

          {/* =========================================
              BENEFITS
          ========================================= */}

          <div className="bg-[#F7F6F2]">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.number}
                className={`
                  grid
                  min-h-[140px]
                  grid-cols-[48px_1fr]
                  gap-5
                  px-6
                  py-7
                  sm:grid-cols-[60px_1fr]
                  sm:px-8
                  sm:py-8
                  lg:min-h-[140px]
                  lg:px-10
                  ${
                    index !== benefits.length - 1
                      ? "border-b border-[#DEDCD5]"
                      : ""
                  }
                `}
              >
                {/* Number */}

                <div>
                  <span className="font-[Sora] text-sm font-semibold tracking-[-0.04em] text-[#0B8F63]">
                    {benefit.number}
                  </span>
                </div>

                {/* Content */}

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <h3 className="max-w-[280px] font-[Sora] text-xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="max-w-[320px] text-xs leading-5 text-[#77766F]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            SECONDARY IMAGE STRIP
        ========================================= */}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {/* Lifestyle */}

          <div className="group relative h-[260px] overflow-hidden bg-[#E9E7DE] sm:h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1200&q=85"
              alt="Reusable water bottle lifestyle"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.04]
              "
            />

            <div className="absolute inset-0 bg-black/[0.08]" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:left-7 sm:right-7">
              <div>
                <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  BUILT FOR DAILY LIFE
                </p>

                <p className="mt-1 font-[Sora] text-lg font-semibold tracking-[-0.04em] text-white">
                  TAKE IT WITH YOU.
                </p>
              </div>

              <span className="text-[8px] uppercase tracking-[0.18em] text-white/60">
                02
              </span>
            </div>
          </div>

          {/* Product detail */}

          <div className="relative flex h-[260px] overflow-hidden bg-[#111111] sm:h-[320px]">
            <div className="absolute right-0 top-0 h-full w-[55%] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=85"
                alt="Reusable bottle detail"
                className="
                  h-full
                  w-full
                  object-cover
                  opacity-75
                "
              />

              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 flex w-[60%] flex-col justify-between p-6 sm:p-8">
              <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#63D69E]">
                HYDROFIT / DESIGN
              </span>

              <div>
                <p className="font-[Sora] text-2xl font-semibold leading-[0.92] tracking-[-0.055em] text-[#F7F6F2] sm:text-3xl">
                  FORM
                  <br />
                  FOLLOWS
                  <br />
                  FUNCTION.
                </p>

                <p className="mt-4 max-w-[230px] text-[9px] leading-4 text-[#999890]">
                  Every part of HydroFit's form is designed around how the
                  object is held, used, and transformed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHydroFit;
