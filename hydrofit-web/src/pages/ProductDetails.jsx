import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

const ProductDetails = () => {
  const { productId } = useParams();

  const { cartItems, addToCart, updateQuantity } = useCart();

  const product = products.find((item) => item.id === productId);

  const [selectedEdition, setSelectedEdition] = useState(
    product?.editions?.[0] || "",
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || "",
  );

  const [name, setName] = useState("");

  /* =====================================================
     PRODUCT NOT FOUND
  ===================================================== */

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F6F2] px-5 text-[#111111] ">
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
            HYDROFIT
          </p>

          <h1 className="mt-4 font-[Sora] text-4xl font-semibold tracking-[-0.06em]">
            Product not found.
          </h1>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 bg-[#111111] px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#0B8F63]"
          >
            <ArrowLeft size={14} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  /* =====================================================
     CONFIGURATION
  ===================================================== */

  const trimmedName = name.trim();

  const configuredProductId = `${product.id}-${selectedEdition}-${selectedColor}${
    product.personalized ? `-${trimmedName}` : ""
  }`;

  /* =====================================================
     CART
  ===================================================== */

  const cartItem = cartItems.find(
    (item) => item.productId === configuredProductId,
  );

  const quantity = cartItem?.quantity || 0;

  /* =====================================================
     IMAGE
  ===================================================== */

  const productImage =
    product.images?.[selectedEdition] ||
    product.images?.Men ||
    product.images?.Women ||
    "";

  /* =====================================================
     ADD TO CART
  ===================================================== */

  const handleAddToBasket = () => {
    if (product.personalized && !trimmedName) {
      return;
    }

    const configuredProduct = {
      ...product,

      productId: configuredProductId,

      selectedEdition,
      selectedColor,

      personalizedName: product.personalized ? trimmedName : "",
    };

    addToCart(configuredProduct, 1);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F6F2] text-[#111111] mt-[50px]">
      {/* =====================================================
          BACK
      ===================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 pt-28 sm:px-8 lg:px-12 xl:px-16">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77766F] transition-colors hover:text-[#0B8F63]"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to Products
        </Link>
      </div>

      {/* =====================================================
          PRODUCT HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1600px] px-5 pb-24 pt-8 sm:px-8 lg:px-12 lg:pb-32 xl:px-16">
        <div className="grid overflow-hidden border border-[#DAD8D0] lg:grid-cols-[1.1fr_0.9fr]">
          {/* PRODUCT IMAGE */}

          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#E9E7DE] sm:min-h-[650px] lg:min-h-[760px]">
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3 sm:left-8 sm:top-8">
              <span className="font-mono text-[9px] text-[#77766F]">
                PRODUCT / 01
              </span>

              <span className="h-px w-8 bg-[#BDBBB3]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                {product.type}
              </span>
            </div>

            <span className="pointer-events-none absolute bottom-[-20px] left-1/2 -translate-x-1/2 whitespace-nowrap font-[Sora] text-[100px] font-semibold tracking-[-0.09em] text-black/[0.035] sm:text-[150px] lg:text-[190px]">
              HYDROFIT
            </span>

            <img
              src={productImage}
              alt={`${product.name} - ${selectedEdition}`}
              className="relative z-10 h-[62%] w-auto max-w-[78%] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.16)] transition-all duration-500 ease-out sm:h-[68%]"
            />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8">
              <span className="font-mono text-[9px] tracking-[0.1em] text-[#77766F]">
                HF / {product.id}
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77766F]">
                {selectedEdition}
              </span>
            </div>
          </div>

          {/* PRODUCT INFORMATION */}

          <div className="flex flex-col border-t border-[#DAD8D0] lg:border-l lg:border-t-0">
            <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                HYDROFIT / {product.type}
              </p>

              <h1 className="mt-4 max-w-[600px] font-[Sora] text-[42px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[54px] lg:text-[62px]">
                {product.name}
              </h1>

              <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#5F5E58]">
                {product.description}
              </p>

              {/* PRICE */}

              <div className="mt-8 border-y border-[#DEDCD5] py-5">
                {product.price ? (
                  <div className="flex items-end justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77766F]">
                      Price
                    </span>

                    <span className="font-[Sora] text-2xl font-semibold">
                      ₹{product.price}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77766F]">
                      Availability
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#77766F]">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* EDITION */}

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#77766F]">
                    Edition
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                    {selectedEdition}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {product.editions?.map((edition) => (
                    <button
                      key={edition}
                      type="button"
                      onClick={() => setSelectedEdition(edition)}
                      className={`h-11 border text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                        selectedEdition === edition
                          ? "border-[#111111] bg-[#111111] text-white"
                          : "border-[#D8D7D0] text-[#55544F] hover:border-[#111111]"
                      }`}
                    >
                      {edition}
                    </button>
                  ))}
                </div>
              </div>

              {/* COLOUR */}

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#77766F]">
                    Colour
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                    {selectedColor}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.colors?.map((color) => {
                    const isSelected = selectedColor === color;

                    return (
                      <button
                        key={color}
                        type="button"
                        title={color}
                        onClick={() => setSelectedColor(color)}
                        className={`flex h-10 items-center gap-2 border px-3 text-[9px] uppercase tracking-[0.08em] transition-all duration-200 ${
                          isSelected
                            ? "border-[#111111]"
                            : "border-[#D8D7D0] hover:border-[#111111]"
                        }`}
                      >
                        <span
                          className={`h-3.5 w-3.5 border border-[#BDBBB3] ${
                            color === "Graphite"
                              ? "bg-[#262626]"
                              : color === "Green"
                                ? "bg-[#0B8F63]"
                                : color === "Stone"
                                  ? "bg-[#8A8982]"
                                  : "bg-[#E9E7DE]"
                          }`}
                        />

                        <span className="hidden sm:inline">{color}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PERSONALIZATION */}

              {product.personalized && (
                <div className="mt-7">
                  <label
                    htmlFor="product-name"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.17em] text-[#77766F]"
                  >
                    Your Name
                  </label>

                  <input
                    id="product-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    maxLength={20}
                    className="h-12 w-full border border-[#D8D7D0] bg-transparent px-4 text-sm outline-none placeholder:text-[#AAA9A2] focus:border-[#111111]"
                  />
                </div>
              )}

              {/* ADD / QUANTITY */}

              {product.price && (
                <div className="relative mt-8 h-[54px]">
                  <button
                    type="button"
                    disabled={product.personalized && !trimmedName}
                    onClick={handleAddToBasket}
                    className={`absolute inset-0 flex h-[54px] w-full items-center justify-center gap-3 bg-[#111111] text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 ease-out hover:bg-[#0B8F63] disabled:cursor-not-allowed disabled:bg-[#C9C7C0] ${
                      quantity === 0
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <ShoppingCart size={16} strokeWidth={1.5} />
                    Add to Basket
                  </button>

                  <div
                    className={`absolute inset-0 flex h-[54px] w-full items-center border border-[#0B8F63] transition-all duration-300 ease-out ${
                      quantity > 0
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(cartItem.productId, quantity - 1)
                      }
                      className="flex h-full w-1/3 items-center justify-center text-[#0B8F63] hover:bg-[#0B8F63] hover:text-white"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="flex h-full w-1/3 items-center justify-center border-x border-[#0B8F63] text-sm font-semibold text-[#0B8F63]">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => addToCart(cartItem, 1)}
                      className="flex h-full w-1/3 items-center justify-center text-[#0B8F63] hover:bg-[#0B8F63] hover:text-white"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THE CONCEPT
      ===================================================== */}

      <section className="border-t border-[#DEDCD5]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  01 / THE CONCEPT
                </span>
              </div>

              <h2 className="mt-5 max-w-[700px] font-[Sora] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[64px] lg:text-[78px]">
                ONE BOTTLE.
                <br />
                <span className="text-[#0B8F63]">TWO PURPOSES.</span>
              </h2>
            </div>

            <p className="max-w-[620px] text-base leading-8 text-[#5F5E58] lg:pb-2">
              HydroFit begins as an everyday water bottle. After its first
              purpose, it can be prepared and filled with concrete, fully cured,
              and transformed into workout equipment.
            </p>
          </div>

          {/* Concept visual */}

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden bg-[#E9E7DE]">
              <img
                src={productImage}
                alt="HydroFit bottle"
                className="absolute inset-0 h-full w-full object-contain p-16"
              />

              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                  START
                </p>

                <p className="mt-2 font-[Sora] text-2xl font-semibold tracking-[-0.05em]">
                  Everyday Bottle
                </p>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[#171717]">
              <img
                src="https://res.cloudinary.com/dasvdkncm/image/upload/v1790396051/images-removebg-preview_pnwvte.png"
                alt="HydroFit transformed workout equipment"
                className="absolute inset-0 h-full w-full object-contain p-16"
              />

              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#63D69E]">
                  SECOND PURPOSE
                </p>

                <p className="mt-2 font-[Sora] text-2xl font-semibold tracking-[-0.05em] text-white">
                  Workout Equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="border-t border-[#DEDCD5] bg-[#EFEDE6]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                02 / HOW IT WORKS
              </span>
            </div>

            <h2 className="mt-5 font-[Sora] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[64px] lg:text-[80px]">
              FROM BOTTLE
              <br />
              TO TRAINING.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-[#D4D2CA] md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "USE",
                text: "Use HydroFit as your everyday water bottle.",
              },
              {
                number: "02",
                title: "PREPARE",
                text: "Clean and prepare the bottle according to the process.",
              },
              {
                number: "03",
                title: "FILL",
                text: "Fill the entire bottle with concrete as instructed.",
              },
              {
                number: "04",
                title: "CURE",
                text: "Allow the concrete to fully cure before use.",
              },
              {
                number: "05",
                title: "TRAIN",
                text: "Once fully cured and ready, the transformed form becomes workout equipment.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-[#F7F6F2] p-6 sm:p-8 lg:min-h-[280px]"
              >
                <span className="font-mono text-[9px] text-[#77766F]">
                  {step.number}
                </span>

                <h3 className="mt-16 font-[Sora] text-xl font-semibold tracking-[-0.04em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#66655F]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW TO USE — VISUAL
      ===================================================== */}

      <section className="border-t border-[#DEDCD5]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
                  03 / HOW TO USE
                </span>
              </div>

              <h2 className="mt-5 max-w-[500px] font-[Sora] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[60px]">
                FOLLOW
                <br />
                THE PROCESS.
              </h2>

              <p className="mt-7 max-w-[450px] text-sm leading-7 text-[#5F5E58]">
                HydroFit's second purpose depends on following the preparation
                and curing process correctly. Do not use the transformed bottle
                for exercise before the concrete has fully cured.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* USE */}

              <div className="group relative min-h-[340px] overflow-hidden bg-[#E9E7DE]">
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png"
                  alt="Using HydroFit as a water bottle"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-mono text-[9px]">01</span>

                  <h3 className="mt-2 font-[Sora] text-2xl font-semibold">
                    USE
                  </h3>
                </div>
              </div>

              {/* PREPARE */}

              <div className="group relative min-h-[340px] overflow-hidden bg-[#E9E7DE]">
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png"
                  alt="Preparing concrete"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-mono text-[9px]">02</span>

                  <h3 className="mt-2 font-[Sora] text-2xl font-semibold">
                    PREPARE
                  </h3>
                </div>
              </div>

              {/* FILL */}

              <div className="group relative min-h-[340px] overflow-hidden bg-[#E9E7DE] sm:col-span-2">
                <img
                  src="https://res.cloudinary.com/dasvdkncm/image/upload/v1790322707/images-removebg-preview_qbhod5.png"
                  alt="Concrete preparation and filling"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-mono text-[9px]">03</span>

                  <h3 className="mt-2 font-[Sora] text-2xl font-semibold">
                    FILL
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SPECS
      ===================================================== */}

      <section className="border-t border-[#DEDCD5]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
              04 / PRODUCT SPECIFICATIONS
            </span>
          </div>

          <h2 className="mt-5 max-w-[850px] font-[Sora] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[64px]">
            BUILT AROUND
            <br />
            <span className="text-[#0B8F63]">A DISTINCT FORM.</span>
          </h2>

          <div className="mt-14 grid border-t border-[#DEDCD5] sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Height", "280 MM"],
              ["Max Diameter", "100 MM"],
              ["Central Grip", "Ø45 MM"],
              ["Top Reservoir", "80 MM"],
              ["Bottom Reservoir", "80 MM"],
              ["Mouth", "Ø45 MM"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-[#DEDCD5] py-7 sm:px-5 lg:px-7"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77766F]">
                  {label}
                </p>

                <p className="mt-3 font-[Sora] text-3xl font-semibold tracking-[-0.05em]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SAFETY
      ===================================================== */}

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#63D69E]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F8E88]">
                  05 / SAFETY
                </span>
              </div>

              <h2 className="mt-5 font-[Sora] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[64px]">
                TRANSFORM
                <br />
                <span className="text-[#63D69E]">RESPONSIBLY.</span>
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                [
                  "01",
                  "CURE COMPLETELY",
                  "Do not use the transformed bottle for exercise until the concrete has fully cured.",
                ],
                [
                  "02",
                  "FOLLOW THE PROCESS",
                  "Use the preparation and filling process specified for the product.",
                ],
                [
                  "03",
                  "INSPECT BEFORE USE",
                  "Check the transformed product for visible damage before every session.",
                ],
                [
                  "04",
                  "STOP IF DAMAGED",
                  "Do not use the product if it shows cracking, structural damage, or other visible problems.",
                ],
              ].map(([number, title, text]) => (
                <div key={number} className="bg-[#171717] p-7">
                  <span className="font-mono text-[9px] text-[#77766F]">
                    {number}
                  </span>

                  <h3 className="mt-12 font-[Sora] text-lg font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#999890]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-[#DEDCD5]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 xl:px-16">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
              HYDROFIT
            </p>

            <h2 className="mt-4 max-w-[700px] font-[Sora] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[64px]">
              READY FOR
              <br />
              <span className="text-[#0B8F63]">TWO PURPOSES?</span>
            </h2>
          </div>

          <Link
            to="/products"
            className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-3 bg-[#111111] px-7 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#0B8F63]"
          >
            Explore Products
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
