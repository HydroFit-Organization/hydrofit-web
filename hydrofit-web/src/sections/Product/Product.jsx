import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const PRODUCT_IMAGE =
  "https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png";

const WHATSAPP_NUMBER = "8106801326";

const pricingOptions = [
  {
    id: "single",
    title: "Single",
    quantity: "1 BOTTLE",
    price: 399,
    personalized: false,
  },
  {
    id: "duo",
    title: "Duo",
    quantity: "2 BOTTLES",
    price: 599,
    personalized: false,
  },
  {
    id: "personalized-single",
    title: "Personalized",
    quantity: "1 BOTTLE",
    price: 499,
    personalized: true,
  },
  {
    id: "personalized-duo",
    title: "Personalized Duo",
    quantity: "2 BOTTLES",
    price: 699,
    personalized: true,
    badge: "BEST VALUE",
  },
];

const colors = [
  {
    name: "Graphite",
    value: "#262626",
  },
  {
    name: "Ivory",
    value: "#E9E7DE",
  },
  {
    name: "Green",
    value: "#0B8F63",
  },
  {
    name: "Stone",
    value: "#8A8982",
  },
];

const specifications = [
  ["HEIGHT", "280", "MM"],
  ["MAX DIAMETER", "100", "MM"],
  ["CENTRAL GRIP", "45", "Ø MM"],
  ["TOP RESERVOIR", "80", "MM"],
  ["BOTTOM RESERVOIR", "80", "MM"],
  ["MOUTH", "45", "Ø MM"],
];

const Product = () => {
  const [selectedPlan, setSelectedPlan] = useState("single");
  const [selectedColor, setSelectedColor] = useState("Graphite");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const selectedProduct =
    pricingOptions.find((item) => item.id === selectedPlan) ||
    pricingOptions[0];

  const isPersonalized = selectedProduct.personalized;

  const handlePlanChange = (id) => {
    setSelectedPlan(id);
    setNameError("");

    const selected = pricingOptions.find((item) => item.id === id);

    if (!selected?.personalized) {
      setName("");
    }
  };

  const handleOrder = () => {
    const trimmedName = name.trim();

    if (isPersonalized && !trimmedName) {
      setNameError("Please enter your name before placing the order.");
      return;
    }

    setNameError("");

    const message = [
      "Hi HydroFit, I would like to place an order.",
      "",
      `Package: ${selectedProduct.title}`,
      `Quantity: ${selectedProduct.quantity}`,
      `Price: ₹${selectedProduct.price}`,
      `Colour: ${selectedColor}`,
      `Name: ${isPersonalized ? trimmedName : "No"}`,
      "",
      "Please share the order details and next steps.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="product"
      className="scroll-mt-[112px] overflow-hidden bg-[#F7F6F2] text-[#111111]"
    >
      {/* =====================================================
          INTRO
      ===================================================== */}

      <SectionHeading
        number="04"
        label="PRODUCT DETAILS"
        title={
          <>
            ONE OBJECT.
            <br />
            <span className="text-[#0B8F63]">TWO PURPOSES.</span>
          </>
        }
        description="The HydroFit bottle is designed around a distinctive double-ended form, central grip, and two functional reservoirs."
      />

      {/* =====================================================
          PRODUCT OBJECT
      ===================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative overflow-hidden bg-[#E9E7DE]">
          {/* Background typography */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              font-[Sora]
              text-[20vw]
              font-semibold
              leading-none
              tracking-[-0.09em]
              text-black/[0.035]
            "
          >
            HYDROFIT
          </div>

          {/* Top information */}

          <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#77766F]">
                THE ORIGINAL HYDROFIT
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.2em] text-[#999890]">
              280 MM
            </span>
          </div>

          {/* Left information */}

          <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-px w-12 bg-[#0B8F63]" />

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                  CENTRAL GRIP
                </p>

                <p className="mt-1 font-[Sora] text-2xl font-semibold tracking-[-0.06em]">
                  Ø45
                  <span className="ml-1 text-xs text-[#0B8F63]">MM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right information */}

          <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 text-right lg:block">
            <div className="flex items-start gap-4">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                  MAX DIAMETER
                </p>

                <p className="mt-1 font-[Sora] text-2xl font-semibold tracking-[-0.06em]">
                  100
                  <span className="ml-1 text-xs text-[#0B8F63]">MM</span>
                </p>
              </div>

              <span className="mt-1 h-px w-12 bg-[#0B8F63]" />
            </div>
          </div>

          {/* Bottle stage */}

          <div className="relative flex min-h-[560px] items-center justify-center sm:min-h-[680px] lg:min-h-[760px]">
            {/* <div className="absolute bottom-[19%] left-1/2 h-8 w-[38%] -translate-x-1/2 rounded-full bg-black/[0.12] blur-2xl" /> */}

            <img
              src={PRODUCT_IMAGE}
              alt="HydroFit bottle"
              className="
                relative
                z-10
                h-[43%]
                w-auto
                rotate-90
                object-contain
                drop-shadow-[0_30px_28px_rgba(0,0,0,0.18)]
                transition-transform
                duration-700
                hover:scale-[1.025]
                left-3
                sm:left-0
              "
            />
          </div>

          {/* Bottom information */}

          <div className="relative z-20 flex flex-col border-t border-black/[0.08] bg-[#E9E7DE]/90 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex border-b border-black/[0.08] px-6 py-5 sm:border-b-0 sm:border-r sm:px-8">
              <div>
                <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  FORM
                </p>

                <p className="mt-1 font-[Sora] text-sm font-semibold tracking-[-0.04em]">
                  DOUBLE-ENDED
                </p>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-between px-6 py-5 sm:px-8">
              <div>
                <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  RESERVOIRS
                </p>

                <p className="mt-1 font-[Sora] text-sm font-semibold tracking-[-0.04em]">
                  80 MM + 80 MM
                </p>
              </div>

              <div className="text-right">
                <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  MATERIAL
                </p>

                <p className="mt-1 font-[Sora] text-sm font-semibold tracking-[-0.04em]">
                  BPA-FREE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT CONFIGURATION
      ===================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 p-16 xl:px-16">
        <div className="border-t border-[#111111]">
          {/* =================================================
              TOP INTRO
          ================================================= */}

          <div className="grid gap-8 border-b border-[#DEDCD5] py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-14">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#77766F]">
                  CONFIGURE YOUR HYDROFIT
                </span>
              </div>

              <h3 className="mt-5 max-w-[600px] font-[Sora] text-4xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                Make it
                <br />
                <span className="text-[#0B8F63]">yours.</span>
              </h3>
            </div>

            <div className="flex items-end lg:justify-end">
              <p className="max-w-[420px] text-sm leading-7 text-[#66655F]">
                Choose your HydroFit edition, finish, and personalization. Your
                selected configuration is included when you place your order.
              </p>
            </div>
          </div>

          {/* =================================================
              CONFIGURATION AREA
          ================================================= */}

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* =================================================
                LEFT — EDITION
            ================================================= */}

            <div className="border-b border-[#DEDCD5] lg:border-b-0 lg:border-r lg:pr-12">
              <div className="flex items-end justify-between py-7">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B8F63]">
                    01 / EDITION
                  </p>

                  <p className="mt-1 text-xs text-[#77766F]">
                    Select your HydroFit
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[7px] uppercase tracking-[0.18em] text-[#999890]">
                    SELECTED
                  </p>

                  <p className="mt-1 font-[Sora] text-xl font-semibold tracking-[-0.05em]">
                    ₹{selectedProduct.price}
                  </p>
                </div>
              </div>

              {/* Edition options */}

              <div className="grid gap-px bg-[#DEDCD5] sm:grid-cols-2">
                {pricingOptions.map((option) => {
                  const active = selectedPlan === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handlePlanChange(option.id)}
                      className={`
                        relative
                        min-h-[150px]
                        overflow-hidden
                        p-5
                        text-left
                        transition-all
                        duration-300
                        sm:p-6
                        ${
                          active
                            ? "bg-[#111111] text-[#F7F6F2]"
                            : "bg-[#F7F6F2] hover:bg-[#EEEDE7]"
                        }
                      `}
                    >
                      {/* TOP CONTENT */}

                      <div className="flex items-start justify-between gap-4 pr-1">
                        <div>
                          <span
                            className={`
                              block
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.18em]
                              ${active ? "text-[#63D69E]" : "text-[#77766F]"}
                            `}
                          >
                            {option.quantity}
                          </span>

                          <h4 className="mt-2 font-[Sora] text-lg font-semibold tracking-[-0.045em]">
                            {option.title}
                          </h4>
                        </div>

                        {/* Selection indicator */}

                        <span
                          className={`
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            ${active ? "border-[#63D69E]" : "border-[#C9C7BF]"}
                          `}
                        >
                          {active && (
                            <span className="h-2 w-2 rounded-full bg-[#63D69E]" />
                          )}
                        </span>
                      </div>

                      {/* BOTTOM LEFT LABEL */}

                      <span
                        className={`
                          absolute
                          bottom-6
                          left-5
                          max-w-[50%]
                          text-[7px]
                          uppercase
                          tracking-[0.16em]
                          sm:left-6
                          ${active ? "text-white/40" : "text-[#AAA8A0]"}
                        `}
                      >
                        {option.personalized
                          ? "ADD YOUR NAME"
                          : "READY TO ORDER"}
                      </span>

                      {/* PRICE — FIXED BOTTOM RIGHT */}

                      <span
                        className="
                          absolute
                          bottom-5
                          right-5
                          whitespace-nowrap
                          font-[Sora]
                          text-xl
                          font-semibold
                          tracking-[-0.05em]
                          sm:bottom-6
                          sm:right-6
                        "
                      >
                        ₹{option.price}
                      </span>

                      {/* BADGE */}

                      {option.badge && (
                        <span
                          className={`
                            absolute
                            right-5
                            top-5
                            max-w-[70px]
                            text-right
                            text-[6px]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            sm:right-6
                            sm:top-6
                            ${active ? "text-[#63D69E]" : "text-[#0B8F63]"}
                          `}
                        >
                          {option.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                RIGHT — CUSTOMIZATION
            ================================================= */}

            <div className="lg:pl-12">
              {/* Finish */}

              <div className="border-b border-[#DEDCD5] py-7">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B8F63]">
                      02 / FINISH
                    </p>

                    <p className="mt-1 text-xs text-[#77766F]">
                      {selectedColor}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-4">
                    {colors.map((color) => {
                      const active = selectedColor === color.name;

                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => setSelectedColor(color.name)}
                          aria-label={`Select ${color.name}`}
                          aria-pressed={active}
                          className={`
                            relative
                            h-10
                            w-10
                            shrink-0
                            rounded-full
                            border
                            transition-transform
                            duration-200
                            ${
                              active
                                ? "scale-110 border-[#111111]"
                                : "border-[#D5D3CC] hover:scale-105"
                            }
                          `}
                        >
                          <span
                            className="absolute inset-[4px] rounded-full"
                            style={{
                              backgroundColor: color.value,
                            }}
                          />

                          {active && (
                            <span className="absolute -inset-1 rounded-full border border-[#111111]/30" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Personalization */}

              {isPersonalized ? (
                <div className="border-b border-[#DEDCD5] py-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B8F63]">
                        03 / PERSONALIZATION
                      </p>

                      <p className="mt-1 text-xs text-[#77766F]">
                        Add your name
                      </p>
                    </div>

                    <span className="text-[8px] text-[#999890]">
                      {name.length}/16
                    </span>
                  </div>

                  <div className="relative mt-6">
                    <input
                      type="text"
                      value={name}
                      maxLength={16}
                      onChange={(e) => {
                        setName(e.target.value.slice(0, 16));

                        if (nameError) {
                          setNameError("");
                        }
                      }}
                      placeholder="YOUR NAME"
                      className={`
                        w-full
                        border-b
                        bg-transparent
                        px-0
                        py-3
                        font-[Sora]
                        text-base
                        uppercase
                        tracking-[0.08em]
                        outline-none
                        placeholder:text-[#B0AEA7]
                        ${
                          nameError
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#AAA8A0] focus:border-[#0B8F63]"
                        }
                      `}
                    />

                    {nameError && (
                      <p className="mt-2 text-[9px] font-medium text-red-500">
                        {nameError}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="border-b border-[#DEDCD5] py-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center border border-[#DEDCD5]">
                      <Check
                        size={12}
                        strokeWidth={1.5}
                        className="text-[#0B8F63]"
                      />
                    </span>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0B8F63]">
                        03 / PERSONALIZATION
                      </p>

                      <p className="mt-1 text-xs text-[#77766F]">
                        Not included in this edition
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Order summary */}

              <div className="py-7">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.18em] text-[#999890]">
                      YOUR HYDROFIT
                    </p>

                    <h4 className="mt-1 font-[Sora] text-2xl font-semibold tracking-[-0.05em]">
                      {selectedProduct.title}
                    </h4>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-[#999890]">
                      {selectedProduct.quantity} · {selectedColor}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="font-[Sora] text-3xl font-semibold tracking-[-0.06em]">
                      ₹{selectedProduct.price}
                    </p>
                  </div>
                </div>

                {/* CTA */}

                <button
                  type="button"
                  onClick={handleOrder}
                  className="
                    group
                    mt-7
                    flex
                    min-h-[64px]
                    w-full
                    items-center
                    justify-between
                    bg-[#111111]
                    px-6
                    text-left
                    text-[#F7F6F2]
                    transition-all
                    duration-300
                    hover:bg-[#0B8F63]
                  "
                >
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.2em]">
                      Order on WhatsApp
                    </span>

                    <span className="mt-1 block text-[8px] text-white/40">
                      Your selected configuration
                    </span>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center border border-white/20">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />
                  </span>
                </button>

                <div className="mt-3 flex items-center gap-2">
                  <Check
                    size={11}
                    strokeWidth={1.5}
                    className="text-[#0B8F63]"
                  />

                  <span className="text-[8px] text-[#888780]">
                    Configuration included with your order.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
