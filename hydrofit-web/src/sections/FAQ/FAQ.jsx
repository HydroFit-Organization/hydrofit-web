import React, { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const faqs = [
  {
    number: "01",
    question: "What is HydroFit?",
    answer:
      "HydroFit is an everyday water bottle designed around a distinctive double-ended form. When you're ready, the bottle can go through a defined transformation process and become workout equipment.",
  },
  {
    number: "02",
    question: "Can I use HydroFit as a normal water bottle?",
    answer:
      "Yes. HydroFit is designed to be used as an everyday water bottle before you begin the transformation process.",
  },
  {
    number: "03",
    question: "How does HydroFit transform?",
    answer:
      "The process involves emptying and cleaning the bottle, preparing it according to the manufacturer's instructions, filling the entire bottle body with concrete, and allowing the concrete to fully cure before exercise use.",
  },
  {
    number: "04",
    question: "Can I drink from HydroFit after filling it with concrete?",
    answer:
      "No. Once HydroFit has been transformed into exercise equipment, it should no longer be treated or used as a drinking bottle.",
  },
  {
    number: "05",
    question: "How long does the concrete need to cure?",
    answer:
      "The exact curing requirements will be provided in the final manufacturer's instructions. Do not use HydroFit for exercise until the concrete has fully cured.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-[112px] overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      <SectionHeading
        number="09"
        label="FAQ"
        title={
          <>
            QUESTIONS?
            <br />
            <span className="text-[#0B8F63]">WE HAVE ANSWERS.</span>
          </>
        }
        description="Everything you need to understand HydroFit before ordering or beginning the transformation process."
      />

      {/* FAQ LIST */}
      <div className="border-y border-[#DEDCD5]">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.55fr_1.45fr]">
          {/* Sticky Side */}
          <div className="hidden border-r border-[#DEDCD5] p-10 lg:block xl:p-14">
            <div className="sticky top-[140px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                Frequently asked
              </p>

              <p className="mt-5 max-w-[250px] font-[Sora] text-2xl font-semibold leading-[1.05] tracking-[-0.03em]">
                Everything starts with understanding the product.
              </p>

              <div className="mt-10 h-px w-10 bg-[#0B8F63]" />

              <p className="mt-5 text-xs leading-6 text-[#77766F]">
                Can't find what you're looking for?
              </p>

              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#111111] transition-colors hover:text-[#0B8F63]"
              >
                Ask us directly
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Questions */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.number}
                  className="border-b border-[#DEDCD5] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-5 px-5 py-7 text-left transition-colors hover:bg-[#F1F0EA] sm:px-8 sm:py-8 md:px-10"
                  >
                    <span className="mt-1 w-8 shrink-0 text-[9px] font-semibold tracking-[0.15em] text-[#999890]">
                      {faq.number}
                    </span>

                    <span className="flex-1 pr-4 font-[Sora] text-base font-semibold leading-6 tracking-[-0.015em] sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#CFCDBF] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ArrowDown
                        size={13}
                        strokeWidth={1.7}
                        className="text-[#0B8F63]"
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-[65px] pr-12 sm:pl-[88px] sm:pr-16 md:pl-[98px]">
                        <p className="max-w-[680px] text-sm leading-7 text-[#5F5E58] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16">
        <div className="grid gap-10 border-t border-[#111111] pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B8F63]">
              Still curious?
            </p>

            <h3 className="max-w-[700px] font-[Sora] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Ask us anything
              <br />
              about HydroFit.
            </h3>

            <p className="mt-6 max-w-[540px] text-sm leading-7 text-[#5F5E58] sm:text-base">
              We're building HydroFit with early users, so your questions and
              feedback are part of the process.
            </p>
          </div>

          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F7F6F2] transition-colors duration-300 hover:bg-[#0B8F63]"
          >
            WhatsApp us
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
