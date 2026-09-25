import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section id="order" className="overflow-hidden bg-[#111111] text-[#F7F6F2]">
      {/* ==================================================
          MAIN CTA
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#63D69E]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A9A9A2]">
                HydroFit · Early Access
              </span>
            </div>

            <h2 className="max-w-[900px] font-[Sora] text-5xl font-semibold leading-[0.91] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Ready to
              <br />
              get HydroFit?
            </h2>

            <p className="mt-8 max-w-[600px] text-base leading-7 text-[#A9A9A2] sm:text-lg">
              Start with HydroFit as your everyday water bottle. When you're
              ready, follow the transformation process and take it into your
              training routine.
            </p>
          </div>

          {/* Right CTA */}
          <div className="lg:ml-auto lg:w-full lg:max-w-[430px]">
            <div className="border border-[#383833] bg-[#181817] p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center border border-[#383833]">
                  <MessageCircle
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#63D69E]"
                  />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                  Order / 01
                </span>
              </div>

              <h3 className="mt-10 font-[Sora] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                Order through WhatsApp.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#A9A9A2]">
                Message us directly to check availability, ask questions, and
                place your HydroFit order.
              </p>

              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 flex w-full items-center justify-between bg-[#F7F6F2] px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#111111] transition-colors duration-300 hover:bg-[#0B8F63] hover:text-[#F7F6F2]"
              >
                Start on WhatsApp
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <p className="mt-4 text-center text-[10px] leading-5 text-[#77766F]">
                Early-access availability may vary.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          PRODUCT STATEMENT
      ================================================== */}
      <div className="border-y border-[#33332F]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                Starts as
              </p>

              <p className="mt-4 font-[Sora] text-2xl font-semibold tracking-[-0.03em]">
                A water bottle.
              </p>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                Designed around
              </p>

              <p className="mt-4 font-[Sora] text-2xl font-semibold tracking-[-0.03em]">
                One distinctive form.
              </p>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                Can become
              </p>

              <p className="mt-4 font-[Sora] text-2xl font-semibold tracking-[-0.03em]">
                Workout equipment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          FINAL STATEMENT
      ================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#63D69E]">
              HydroFit
            </p>
          </div>

          <div>
            <h3 className="max-w-[850px] font-[Sora] text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              One bottle.
              <br />A different way to move.
            </h3>
          </div>
        </div>
      </div>

      {/* ==================================================
          FOOTER
      ================================================== */}
      <footer className="border-t border-[#33332F]">
        <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="font-[Sora] text-lg font-semibold tracking-[-0.04em]"
            >
              HYDRO<span className="text-[#63D69E]">FIT</span>
            </a>

            {/* Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="#product"
                className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77766F] transition-colors hover:text-[#F7F6F2]"
              >
                Product
              </a>

              <a
                href="#transformation"
                className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77766F] transition-colors hover:text-[#F7F6F2]"
              >
                How It Works
              </a>

              <a
                href="#faq"
                className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77766F] transition-colors hover:text-[#F7F6F2]"
              >
                FAQ
              </a>

              <a
                href="#order"
                className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77766F] transition-colors hover:text-[#F7F6F2]"
              >
                Order
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[10px] uppercase tracking-[0.12em] text-[#555550]">
              © {new Date().getFullYear()} HydroFit
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTA;
