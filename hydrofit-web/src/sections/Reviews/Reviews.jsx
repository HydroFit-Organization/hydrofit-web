import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const reviews = [
  {
    number: "01",
    quote:
      "The idea of starting with a bottle and transforming it into something completely different is what caught my attention.",
    name: "Early User",
    role: "MVP Tester",
  },
  {
    number: "02",
    quote:
      "I like that the product has a purpose beyond hydration. The transformation makes the concept feel genuinely different.",
    name: "Early User",
    role: "Product Tester",
  },
  {
    number: "03",
    quote:
      "The form feels simple at first, but the second purpose gives the product a completely different character.",
    name: "Early User",
    role: "Early Access",
  },
  {
    number: "04",
    quote:
      "The form feels simple at first, but the second purpose gives the product a completely different character.",
    name: "Early User",
    role: "Early Access",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="scroll-mt-[112px] overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      <SectionHeading
        number="08"
        label="REVIEWS / EARLY USERS"
        title={
          <>
            HEAR IT
            <br />
            <span className="text-[#0B8F63]">FIRSTHAND.</span>
          </>
        }
        description="HydroFit is being shaped with feedback from early users. These first impressions help us refine the product before wider release."
      />

      <div className="mx-auto max-w-[1600px] px-5  sm:px-8 lg:px-12 pb-16xl:px-16">
        {/* Featured review */}
        <div className="border-y border-[#111111]">
          <div className="grid lg:grid-cols-[0.35fr_1.65fr]">
            <div className="border-b border-[#DEDCD5] p-6 lg:border-b-0 lg:border-r lg:p-10">
              <span className="font-[Sora] text-sm font-semibold text-[#0B8F63]">
                01
              </span>

              <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                EARLY IMPRESSION
              </p>
            </div>

            <div className="p-6 sm:p-10 lg:p-14">
              <span className="font-[Sora] text-4xl leading-none text-[#DEDCD5] sm:text-5xl">
                “
              </span>

              <blockquote className="mt-4 max-w-[1000px] font-[Sora] text-2xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                The idea of starting with a bottle and transforming it into
                something completely different is what caught my attention.
              </blockquote>

              <div className="mt-10 flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Early User
                </span>

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#77766F]">
                  MVP Tester
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid border-b border-[#111111] sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(1).map((review, index) => (
            <article
              key={review.number}
              className={`min-h-[330px] p-6 sm:p-8 lg:p-10 ${
                index === 0
                  ? "border-b border-[#DEDCD5] sm:border-r lg:border-b-0"
                  : "sm:border-b-0"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-[Sora] text-sm font-semibold text-[#0B8F63]">
                  {review.number}
                </span>

                <span className="text-[8px] uppercase tracking-[0.18em] text-[#AAA9A2]">
                  EARLY USER
                </span>
              </div>

              <div className="mt-14">
                <span className="font-[Sora] text-3xl text-[#DEDCD5]">“</span>

                <p className="mt-3 font-[Sora] text-xl font-medium leading-[1.05] tracking-[-0.035em]">
                  {review.quote}
                </p>
              </div>

              <div className="mt-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  {review.name}
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#77766F]">
                  {review.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Feedback CTA */}
        <div className="mt-4 flex flex-col gap-6 border border-[#DEDCD5] bg-[#E9E7DE] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B8F63]">
              JOIN THE EARLY USERS
            </p>

            <h3 className="mt-3 max-w-[700px] font-[Sora] text-2xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-3xl">
              Be part of the first HydroFit generation.
            </h3>

            <p className="mt-3 max-w-[620px] text-xs leading-5 text-[#77766F] sm:text-sm">
              Try the concept, share your experience, and help shape the product
              before wider release.
            </p>
          </div>

          <a
            href="https://wa.me/8106801326"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#111111] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#0B8F63]"
          >
            JOIN EARLY ACCESS
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
