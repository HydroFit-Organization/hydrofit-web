import React from "react";
import { AlertTriangle, ArrowUpRight, Check, ShieldCheck } from "lucide-react";

const safetyPoints = [
  {
    number: "01",
    title: "Use as a bottle first.",
    description:
      "HydroFit is intended for everyday hydration before the transformation process begins.",
  },
  {
    number: "02",
    title: "Empty and clean completely.",
    description:
      "Before beginning the transformation process, empty the bottle and clean it thoroughly according to the manufacturer's instructions.",
  },
  {
    number: "03",
    title: "Fill the entire body.",
    description:
      "When transforming HydroFit, concrete must be filled through the complete bottle body according to the manufacturer's instructions.",
  },
  {
    number: "04",
    title: "Allow complete curing.",
    description:
      "The concrete must fully cure before HydroFit is used as exercise equipment.",
  },
  {
    number: "05",
    title: "Inspect before first use.",
    description:
      "Inspect the transformed product before training and follow the manufacturer's instructions for first use and continued use.",
  },
];

const Safety = () => {
  return (
    <section
      id="safety"
      className="overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      {/* ==================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0B8F63]">
              07 / Safety
            </p>

            <h2 className="max-w-[760px] font-[Sora] text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Transform
              <br />
              responsibly.
            </h2>
          </div>

          <p className="max-w-[500px] text-lg leading-7 text-[#55544E] sm:text-xl lg:ml-auto">
            The transformation from bottle to workout equipment is a deliberate
            process. Follow the instructions carefully and never use the
            transformed product before the concrete has fully cured.
          </p>
        </div>
      </div>

      {/* ==================================================
          PRIMARY SAFETY WARNING
      ================================================== */}
      <div className="border-y border-[#111111] bg-[#111111] text-[#F7F6F2]">
        <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 md:py-20 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#4A4A45] sm:h-20 sm:w-20">
              <AlertTriangle
                size={28}
                strokeWidth={1.5}
                className="text-[#63D69E]"
              />
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#63D69E]">
                Critical safety requirement
              </p>

              <h3 className="max-w-[900px] font-[Sora] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Do not use HydroFit as exercise equipment until the concrete has
                fully cured.
              </h3>

              <p className="mt-6 max-w-[800px] text-sm leading-7 text-[#A9A9A2] sm:text-base">
                Follow the manufacturer's instructions for preparation, filling,
                curing, inspection, and first use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          SAFETY PRINCIPLES
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              Before you train
            </p>
          </div>

          <h3 className="max-w-[760px] font-[Sora] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl">
            Every stage matters.
          </h3>
        </div>

        <div className="border-t border-[#111111]">
          {safetyPoints.map((item) => (
            <div
              key={item.number}
              className="grid gap-6 border-b border-[#DEDCD5] py-9 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-10 md:py-11"
            >
              <span className="text-[10px] font-semibold tracking-[0.16em] text-[#999890]">
                {item.number}
              </span>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E4F3EC]">
                  <Check
                    size={12}
                    strokeWidth={2.5}
                    className="text-[#0B8F63]"
                  />
                </div>

                <h4 className="font-[Sora] text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                  {item.title}
                </h4>
              </div>

              <p className="max-w-[500px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================
          BOTTLE / EQUIPMENT SEPARATION
      ================================================== */}
      <div className="border-y border-[#DEDCD5]">
        <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
          {/* Bottle */}
          <div className="min-h-[390px] border-b border-[#DEDCD5] p-8 sm:p-12 md:border-b-0 md:border-r lg:p-16">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  Stage 01
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                  Hydration
                </span>
              </div>

              <div className="mt-20">
                <h3 className="font-[Sora] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Water bottle.
                </h3>

                <p className="mt-5 max-w-[420px] text-sm leading-7 text-[#5F5E58]">
                  HydroFit can be used as an everyday water bottle before the
                  transformation process begins.
                </p>
              </div>
            </div>
          </div>

          {/* Equipment */}
          <div className="min-h-[390px] bg-[#111111] p-8 text-[#F7F6F2] sm:p-12 lg:p-16">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  Stage 02
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#63D69E]">
                  Exercise equipment
                </span>
              </div>

              <div className="mt-20">
                <h3 className="font-[Sora] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Only after curing.
                </h3>

                <p className="mt-5 max-w-[420px] text-sm leading-7 text-[#A9A9A2]">
                  Once transformed, HydroFit must no longer be treated as a
                  drinking bottle. Use it as exercise equipment only after
                  complete curing and inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          SAFETY CHECK
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              Final check
            </p>

            <h3 className="max-w-[380px] font-[Sora] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl">
              Before your first workout.
            </h3>
          </div>

          <div className="border-t border-[#111111]">
            <div className="grid gap-8 py-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
              <div className="flex h-14 w-14 items-center justify-center border border-[#111111]">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>

              <div>
                <h4 className="font-[Sora] text-2xl font-semibold tracking-[-0.03em]">
                  Check before use.
                </h4>

                <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                  Confirm that the concrete has fully cured and inspect the
                  transformed HydroFit before using it for exercise. If there
                  are concerns about the condition of the product, do not use
                  it.
                </p>
              </div>
            </div>

            <div className="border-t border-[#DEDCD5] py-7">
              <p className="text-xs leading-6 text-[#77766F]">
                Always follow the latest manufacturer's instructions supplied
                with the product. Product-specific preparation, concrete,
                curing, inspection, and usage requirements should be finalized
                before launch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          NEXT SECTION
      ================================================== */}
      <div className="border-t border-[#DEDCD5]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
                Next
              </p>

              <h3 className="font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Hear from the
                <br />
                early users.
              </h3>
            </div>

            <a
              href="#reviews"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#111111] pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#0B8F63] hover:text-[#0B8F63]"
            >
              Read early reviews
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

export default Safety;
