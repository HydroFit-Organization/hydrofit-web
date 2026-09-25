import React from "react";
import { ArrowUpRight, MessageCircle, Quote } from "lucide-react";

const feedbackAreas = [
  {
    number: "01",
    title: "The bottle",
    description:
      "How does HydroFit feel as an everyday water bottle? Comfort, handling, size, and everyday usability.",
  },
  {
    number: "02",
    title: "The concept",
    description:
      "Does the bottle-to-equipment idea make sense? What feels useful, interesting, or unclear?",
  },
  {
    number: "03",
    title: "The transformation",
    description:
      "How clear and practical is the process of preparing and transforming HydroFit?",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      {/* ==================================================
          INTRO
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0B8F63]">
              08 / Early Users
            </p>

            <h2 className="max-w-[800px] font-[Sora] text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Built with
              <br />
              early feedback.
            </h2>
          </div>

          <p className="max-w-[500px] text-lg leading-7 text-[#55544E] sm:text-xl lg:ml-auto">
            HydroFit is at an early stage. The first users help us understand
            what works, what needs improvement, and where the product should go
            next.
          </p>
        </div>
      </div>

      {/* ==================================================
          EARLY ACCESS MESSAGE
      ================================================== */}
      <div className="border-y border-[#111111] bg-[#111111] text-[#F7F6F2]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-16">
            <div className="flex h-16 w-16 items-center justify-center border border-[#44443F]">
              <Quote size={26} strokeWidth={1.3} className="text-[#63D69E]" />
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#63D69E]">
                Early access
              </p>

              <h3 className="max-w-[760px] font-[Sora] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Your experience can help shape the product.
              </h3>

              <p className="mt-6 max-w-[700px] text-sm leading-7 text-[#A9A9A2] sm:text-base">
                We're collecting honest feedback from early users before taking
                HydroFit further. Every observation helps us improve the product
                and the experience around it.
              </p>
            </div>

            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#F7F6F2] pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#63D69E] hover:text-[#63D69E]"
            >
              Become an early user
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
          FEEDBACK AREAS
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              What we're learning
            </p>
          </div>

          <h3 className="max-w-[760px] font-[Sora] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl">
            Feedback that goes beyond a rating.
          </h3>
        </div>

        <div className="border-t border-[#111111]">
          {feedbackAreas.map((item) => (
            <div
              key={item.number}
              className="grid gap-7 border-b border-[#DEDCD5] py-10 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-10 md:py-12"
            >
              <span className="text-[10px] font-semibold tracking-[0.16em] text-[#999890]">
                {item.number}
              </span>

              <h4 className="font-[Sora] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {item.title}
              </h4>

              <p className="max-w-[500px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ==================================================
          EMPTY REVIEW STATE
      ================================================== */}
      {/* ==================================================
    REVIEWS / DEMO FEEDBACK
================================================== */}
      <div className="border-y border-[#DEDCD5] bg-[#F1F0EA]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
          {/* Heading */}
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
                Early feedback
              </p>
            </div>

            <div>
              <h3 className="max-w-[760px] font-[Sora] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                What early users
                <br />
                are saying.
              </h3>

              <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                These are placeholder reviews used during the MVP stage. Real
                customer feedback will replace them as HydroFit reaches its
                first users.
              </p>
            </div>
          </div>

          {/* Demo Reviews */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Review 01 */}
            <article className="flex min-h-[330px] flex-col justify-between border border-[#DEDCD5] bg-[#F7F6F2] p-7 sm:p-8">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                    Demo feedback
                  </span>

                  <span className="text-xs tracking-[0.2em] text-[#77766F]">
                    01
                  </span>
                </div>

                <p className="font-[Sora] text-xl font-medium leading-[1.35] tracking-[-0.025em] sm:text-2xl">
                  “The shape immediately caught my attention. It feels different
                  from a regular bottle without looking complicated.”
                </p>
              </div>

              <div className="border-t border-[#DEDCD5] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                  Early User
                </p>

                <p className="mt-1 text-[11px] text-[#77766F]">
                  Placeholder profile
                </p>
              </div>
            </article>

            {/* Review 02 */}
            <article className="flex min-h-[330px] flex-col justify-between border border-[#DEDCD5] bg-[#F7F6F2] p-7 sm:p-8">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                    Demo feedback
                  </span>

                  <span className="text-xs tracking-[0.2em] text-[#77766F]">
                    02
                  </span>
                </div>

                <p className="font-[Sora] text-xl font-medium leading-[1.35] tracking-[-0.025em] sm:text-2xl">
                  “I like the idea of carrying something that can eventually
                  have another purpose instead of becoming another piece of
                  equipment.”
                </p>
              </div>

              <div className="border-t border-[#DEDCD5] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                  Early User
                </p>

                <p className="mt-1 text-[11px] text-[#77766F]">
                  Placeholder profile
                </p>
              </div>
            </article>

            {/* Review 03 */}
            <article className="flex min-h-[330px] flex-col justify-between border border-[#DEDCD5] bg-[#F7F6F2] p-7 sm:p-8">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B8F63]">
                    Demo feedback
                  </span>

                  <span className="text-xs tracking-[0.2em] text-[#77766F]">
                    03
                  </span>
                </div>

                <p className="font-[Sora] text-xl font-medium leading-[1.35] tracking-[-0.025em] sm:text-2xl">
                  “The concept is simple to understand: hydrate first, then
                  transform it when you're ready to train.”
                </p>
              </div>

              <div className="border-t border-[#DEDCD5] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                  Early User
                </p>

                <p className="mt-1 text-[11px] text-[#77766F]">
                  Placeholder profile
                </p>
              </div>
            </article>
          </div>

          {/* Demo Notice */}
          <div className="mt-8 border border-dashed border-[#C9C7BF] px-5 py-4 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#77766F]">
              Demo content · Replace with verified customer feedback after MVP
              launch
            </p>
          </div>
        </div>
      </div>
      {/* ==================================================
          FEEDBACK CTA
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              Help shape HydroFit
            </p>

            <h3 className="max-w-[760px] font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Be part of
              <br />
              the first chapter.
            </h3>

            <p className="mt-6 max-w-[540px] text-sm leading-7 text-[#5F5E58] sm:text-base">
              If you're interested in trying HydroFit and sharing honest
              feedback, get in touch with the team.
            </p>
          </div>

          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F7F6F2] transition-colors duration-300 hover:bg-[#0B8F63]"
          >
            Talk to us
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
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
                Questions?
                <br />
                We've got answers.
              </h3>
            </div>

            <a
              href="#faq"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#111111] pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#0B8F63] hover:text-[#0B8F63]"
            >
              Explore FAQ
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

export default Reviews;
