import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "How It Works",
    href: "#transformation",
  },
  {
    label: "Product",
    href: "#product",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
];

const whatsappMessage =
  "Hi HydroFit, I'm interested in HydroFit and would like to know more about the product.";

const whatsappUrl = `https://wa.me/8106801326?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* -----------------------------------------------------------
     Close mobile menu with ESC
  ----------------------------------------------------------- */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* -----------------------------------------------------------
     Prevent background scrolling when mobile menu is open
  ----------------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP ANNOUNCEMENT BAR
      ===================================================== */}
      <div className="fixed inset-x-0 top-0 z-[70] h-[34px] bg-[#111111]">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-center px-5">
          <a
            href="#product"
            className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 transition-colors duration-200 hover:text-white"
          >
            <span>HydroFit MVP · Early access</span>

            <ArrowUpRight
              size={11}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}
      <header className="fixed inset-x-0 top-[34px] z-[60] border-b border-[#DEDCD5] bg-[#F7F6F2]/95 backdrop-blur-md">
        <div className="relative mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* =================================================
              DESKTOP LEFT NAVIGATION
          ================================================= */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#4D4D48] transition-colors duration-300 hover:text-[#111111]"
              >
                {item.label}

                <span className="absolute bottom-1 left-0 h-px w-0 bg-[#0B8F63] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* =================================================
              CENTER LOGO

              Desktop:
              Perfectly centered using absolute positioning.

              Mobile:
              Returns to normal flex positioning so it stays
              at the far left.
          ================================================= */}
          <a
            href="#home"
            aria-label="HydroFit home"
            className="font-[Sora] text-[21px] font-bold tracking-[-0.075em] text-[#111111] lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            HYDRO<span className="text-[#0B8F63]">FIT</span>
          </a>

          {/* =================================================
              DESKTOP RIGHT NAVIGATION
          ================================================= */}
          <div className="ml-auto hidden items-center gap-7 lg:flex">
            {navItems.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#4D4D48] transition-colors duration-300 hover:text-[#111111]"
              >
                {item.label}

                <span className="absolute bottom-1 left-0 h-px w-0 bg-[#0B8F63] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Order Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 border border-[#111111] bg-[#111111] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#0B8F63] hover:bg-[#0B8F63]"
            >
              Order
              <ArrowUpRight
                size={12}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON

              Logo is on the left.
              Menu is on the right.
          ================================================= */}
          <div className="ml-auto flex items-center lg:hidden">
            <button
              type="button"
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center border border-[#D8D7D0] text-[#111111] transition-colors duration-200 hover:bg-white"
            >
              <Menu size={19} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      <div
        className={`fixed inset-0 z-[80] bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE DRAWER

          Slides:
          LEFT → RIGHT
      ===================================================== */}
      <aside
        className={`fixed inset-y-0 left-0 z-[90] flex w-[88%] max-w-[430px] flex-col bg-[#F7F6F2] shadow-[20px_0_60px_rgba(0,0,0,0.14)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* =================================================
            DRAWER HEADER
        ================================================= */}
        <div className="flex h-[82px] items-center justify-between border-b border-[#DEDCD5] px-6 sm:px-8">
          {/* Drawer Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="font-[Sora] text-[20px] font-bold tracking-[-0.07em] text-[#111111]"
          >
            HYDRO<span className="text-[#0B8F63]">FIT</span>
          </a>

          {/* Close */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center border border-[#D8D7D0] text-[#111111] transition-colors duration-200 hover:bg-white"
          >
            <X size={19} strokeWidth={1.5} />
          </button>
        </div>

        {/* =================================================
            DRAWER NAVIGATION
        ================================================= */}
        <nav className="flex-1 overflow-y-auto px-6 pt-5 sm:px-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-[#DEDCD5] py-5"
            >
              <div className="flex items-center gap-4">
                {/* Number */}
                <span className="font-mono text-[9px] text-[#999890]">
                  0{index + 1}
                </span>

                {/* Label */}
                <span className="font-[Sora] text-[17px] font-medium tracking-[-0.03em] text-[#222222] transition-colors duration-200 group-hover:text-[#0B8F63]">
                  {item.label}
                </span>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="text-[#777770] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </nav>

        {/* =================================================
            DRAWER FOOTER
        ================================================= */}
        <div className="border-t border-[#DEDCD5] p-6 sm:p-8">
          <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#999890]">
            Ready to transform?
          </p>

          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="group flex h-[52px] items-center justify-center gap-2 bg-[#111111] text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#0B8F63]"
          >
            Order HydroFit
            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <p className="mt-5 text-[10px] leading-5 text-[#898983]">
            Hydration today. Transformation when you're ready.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
