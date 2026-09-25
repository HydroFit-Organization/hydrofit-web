import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Concept = () => {
  return (
    <section
      id="concept"
      className="scroll-mt-[112px] overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      {/* =========================================================
          SECTION HEADING
      ========================================================= */}
      <SectionHeading
        number="02"
        label="THE CONCEPT"
        title={
          <>
            WHAT IF A BOTTLE
            <br />
            <span className="text-[#0B8F63]">DIDN'T END</span>
            <br />
            AS A BOTTLE?
          </>
        }
        description="HydroFit starts as an everyday water bottle. Its distinctive form is designed with a second purpose in mind — becoming workout equipment after preparation and full curing."
      />

      {/* =========================================================
          TWO PURPOSES
      ========================================================= */}
      <div className="border-y border-[#111111]">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          {/* =====================================================
              LEFT — EVERYDAY
          ===================================================== */}
          <div className="relative min-h-[500px] overflow-hidden border-b border-[#111111] px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[620px] lg:border-b-0 lg:border-r lg:px-12 lg:py-20 xl:px-16">
            {/* Background number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[-15px] top-1/2 -translate-y-1/2 font-[Sora] text-[260px] font-semibold leading-none tracking-[-0.08em] text-black/[0.02] sm:text-[300px] lg:text-[320px]"
            >
              01
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between">
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  PURPOSE ONE
                </span>

                <span className="h-2 w-2 rounded-full bg-[#0B8F63]" />
              </div>

              {/* Main content */}
              <div className="mt-24 lg:mt-32">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  EVERYDAY OBJECT
                </p>

                <h3 className="mt-5 font-[Sora] text-[48px] font-semibold leading-[0.9] tracking-[-0.06em] sm:text-[64px] lg:text-[76px]">
                  HYDRATION
                  <br />
                  FIRST.
                </h3>

                <p className="mt-7 max-w-[370px] text-sm leading-6 text-[#66655F]">
                  Carry it through your day. Drink from it. HydroFit begins with
                  the familiar purpose of a water bottle.
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-12 flex items-center gap-3">
                <span className="h-px w-12 bg-[#111111]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  DRINK
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — TRAINING
          ===================================================== */}
          <div className="relative min-h-[500px] overflow-hidden bg-[#111111] px-5 py-12 text-[#F7F6F2] sm:px-8 sm:py-16 lg:min-h-[620px] lg:px-12 lg:py-20 xl:px-16">
            {/* Background number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[-15px] top-1/2 -translate-y-1/2 font-[Sora] text-[260px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[300px] lg:text-[320px]"
            >
              02
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between">
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9B9A93]">
                  PURPOSE TWO
                </span>

                <span className="h-2 w-2 bg-[#0B8F63]" />
              </div>

              {/* Main content */}
              <div className="mt-24 lg:mt-32">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9B9A93]">
                  SECOND PURPOSE
                </p>

                <h3 className="mt-5 font-[Sora] text-[48px] font-semibold leading-[0.9] tracking-[-0.06em] sm:text-[64px] lg:text-[76px]">
                  TRAINING
                  <br />
                  LATER.
                </h3>

                <p className="mt-7 max-w-[370px] text-sm leading-6 text-[#AAA8A0]">
                  Once prepared, filled with concrete, and fully cured, the same
                  form can take on a completely different purpose.
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-12 flex items-center gap-3">
                <span className="h-px w-12 bg-[#F7F6F2]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9B9A93]">
                  TRAIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          THE CONNECTION
      ========================================================= */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 pt-16 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left statement */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#77766F]">
              THE CONNECTION
            </p>

            <h3 className="mt-6 max-w-[650px] font-[Sora] text-[42px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[58px] lg:text-[70px]">
              SAME FORM.
              <br />
              <span className="text-[#0B8F63]">DIFFERENT PURPOSE.</span>
            </h3>
          </div>

          {/* Right relationship */}
          <div>
            <div className="border-t border-[#111111]">
              {/* Start */}
              <div className="flex items-center justify-between border-b border-[#DEDCD5] py-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                  START
                </span>

                <span className="font-[Sora] text-sm font-semibold">
                  WATER BOTTLE
                </span>
              </div>

              {/* Prepare */}
              <div className="flex items-center justify-between border-b border-[#DEDCD5] py-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                  PREPARE
                </span>

                <span className="font-[Sora] text-sm font-semibold">
                  CONCRETE FILL
                </span>
              </div>

              {/* Becomes */}
              <div className="flex items-center justify-between border-b border-[#111111] py-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                  BECOMES
                </span>

                <span className="font-[Sora] text-sm font-semibold">
                  WORKOUT EQUIPMENT
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#111111]">
                <ArrowRight size={15} strokeWidth={1.5} />
              </div>

              <p className="max-w-[280px] text-xs leading-5 text-[#77766F]">
                The transformation happens only after the bottle's first purpose
                is complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
