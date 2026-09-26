import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const whatsappMessage =
  "Hi HydroFit, I'm interested in HydroFit and would like to know more about the product.";

const whatsappUrl = `https://wa.me/8106801326?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const Footer = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-[112px] overflow-hidden bg-[#111111] text-[#F7F6F2]"
    >
      <SectionHeading
        number="10"
        label="CONTACT"
        title={
          <>
            LET'S TALK
            <br />
            <span className="text-[#63D69E]">HYDROFIT.</span>
          </>
        }
        description="Have a question, want to know more, or interested in HydroFit? Get in touch with us directly."
        className="text-[#F7F6F2]"
      />

      <div className="mx-auto max-w-[1600px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 xl:px-16">
        <div className="relative overflow-hidden border border-white/15">
          {/* Background word */}
          <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-[Sora] text-[22vw] font-semibold leading-none tracking-[-0.09em] text-white/[0.025] sm:-bottom-10">
            HYDROFIT
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Contact message */}
            <div className="border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#63D69E]">
                EARLY ACCESS / CONTACT
              </p>

              <h3 className="mt-5 max-w-[700px] font-[Sora] text-4xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-5xl md:text-6xl">
                HAVE A
                <br />
                <span className="text-[#77766F]">QUESTION?</span>
              </h3>

              <p className="mt-6 max-w-[480px] text-xs leading-6 text-[#999890] sm:text-sm">
                We'd love to hear from you. Reach out to ask about HydroFit,
                early access, or anything related to the product.
              </p>
            </div>

            {/* Contact details */}
            <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
              <div>
                <p className="text-[7px] uppercase tracking-[0.2em] text-[#77766F]">
                  LOCATION
                </p>

                <p className="mt-2 font-[Sora] text-xl font-semibold tracking-[-0.04em]">
                  Telangana, India
                </p>
              </div>

              <div className="mt-12">
                <p className="mb-4 text-[7px] uppercase tracking-[0.2em] text-[#77766F]">
                  GET IN TOUCH
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between bg-[#F7F6F2] px-5 py-5 text-[#111111] transition-all duration-300 hover:bg-[#0B8F63] hover:text-white"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                    Contact on WhatsApp
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="relative z-10 flex flex-col gap-3 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
            <span className="text-[7px] uppercase tracking-[0.2em] text-[#77766F]">
              HYDROFIT / TRANSFORMABLE WATER BOTTLE
            </span>

            <span className="text-[7px] uppercase tracking-[0.2em] text-[#77766F]">
              TELANGANA, INDIA
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 xl:px-16">
          <span className="font-[Sora] text-[10px] font-semibold tracking-[-0.02em]">
            HYDRO<span className="text-[#63D69E]">FIT</span>
          </span>

          <p className="text-[7px] uppercase tracking-[0.16em] text-[#66655F]">
            © {new Date().getFullYear()} HydroFit
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
