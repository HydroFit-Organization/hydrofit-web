import React, { useState } from "react";
import { ShoppingCart, ArrowUpRight, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import products from "../data/products";

const Products = () => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  const [selectedEdition, setSelectedEdition] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [names, setNames] = useState({});

  /* =====================================================
     CONFIGURED PRODUCT ID
  ===================================================== */

  const getConfiguredProductId = (product) => {
    const edition = getEdition(product);
    const color = getColor(product);
    const name = names[product.id]?.trim() || "";

    return `${product.id}-${edition}-${color}${
      product.personalized ? `-${name}` : ""
    }`;
  };

  /* =====================================================
     CART HELPERS
  ===================================================== */

  const getCartItem = (product) => {
    const configuredProductId = getConfiguredProductId(product);

    return cartItems.find((item) => item.productId === configuredProductId);
  };

  const getQuantity = (product) => {
    return getCartItem(product)?.quantity || 0;
  };

  /* =====================================================
     PRODUCT CONFIGURATION
  ===================================================== */

  const getEdition = (product) => {
    return selectedEdition[product.id] || product.editions?.[0] || "";
  };

  const getColor = (product) => {
    return selectedColor[product.id] || product.colors?.[0] || "";
  };

  const handleEditionChange = (productId, edition) => {
    setSelectedEdition((current) => ({
      ...current,
      [productId]: edition,
    }));
  };

  const handleColorChange = (productId, color) => {
    setSelectedColor((current) => ({
      ...current,
      [productId]: color,
    }));
  };

  const handleNameChange = (productId, value) => {
    setNames((current) => ({
      ...current,
      [productId]: value,
    }));
  };

  /* =====================================================
     ADD TO BASKET
  ===================================================== */

  const handleAddToBasket = (product) => {
    const edition = getEdition(product);
    const color = getColor(product);
    const name = names[product.id]?.trim() || "";

    if (product.personalized && !name) {
      return;
    }

    const configuredProduct = {
      ...product,

      productId: `${product.id}-${edition}-${color}${
        product.personalized ? `-${name}` : ""
      }`,

      selectedEdition: edition,
      selectedColor: color,
      personalizedName: product.personalized ? name : "",
    };

    addToCart(configuredProduct, 1);
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F6F2] text-[#111111] mt-[100px]">
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <section id="products" className="scroll-mt-[112px]">
        <SectionHeading
          number="01"
          label="PRODUCTS"
          title={
            <>
              FIND YOUR
              <br />
              <span className="text-[#0B8F63]">HYDROFIT.</span>
            </>
          }
          description="Explore the HydroFit collection. Choose your bottle, make it personal, or carry it with you."
        />
      </section>

      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}

      <section className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => {
            const cartItem = getCartItem(product);
            const quantity = getQuantity(product);

            const edition = getEdition(product);
            const color = getColor(product);

            return (
              <article
                key={product.id}
                className="group overflow-hidden border border-[#DAD8D0] bg-[#F7F6F2]"
              >
                {/* =================================================
                    PRODUCT IMAGE
                ================================================= */}

                <div className="relative flex h-[430px] items-center justify-center overflow-hidden bg-[#E9E7DE] sm:h-[500px]">
                  <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
                    <span className="font-mono text-[9px] text-[#77766F]">
                      0{index + 1}
                    </span>

                    <span className="h-px w-6 bg-[#BDBBB3]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                      {product.type}
                    </span>
                  </div>

                  <span className="pointer-events-none absolute bottom-[-5px] left-1/2 -translate-x-1/2 whitespace-nowrap font-[Sora] text-[85px] font-semibold tracking-[-0.08em] text-black/[0.035] sm:text-[110px]">
                    HYDROFIT
                  </span>

                  <img
                    src={product.images[edition]}
                    alt={`${product.name} - ${edition}`}
                    className="relative z-10 h-[70%] w-auto max-w-[72%] object-contain drop-shadow-[0_30px_28px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out group-hover:scale-[1.025]"
                  />
                  <span className="absolute bottom-5 right-6 font-mono text-[9px] tracking-[0.1em] text-[#77766F]">
                    HF / {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* =================================================
                    PRODUCT CONTENT
                ================================================= */}

                <div className="border-t border-[#DAD8D0] p-6 sm:p-7">
                  {/* Name + Price */}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#77766F]">
                        HYDROFIT
                      </p>

                      <h2 className="mt-2 font-[Sora] text-[25px] font-semibold leading-[1] tracking-[-0.05em]">
                        {product.name}
                      </h2>
                    </div>

                    {product.price ? (
                      <span className="shrink-0 font-[Sora] text-lg font-semibold tracking-[-0.04em]">
                        ₹{product.price}
                      </span>
                    ) : (
                      <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#77766F]">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-6 text-[#5F5E58]">
                    {product.description}
                  </p>

                  {/* =================================================
                      EDITION
                  ================================================= */}

                  <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#77766F]">
                        Edition
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                        {edition}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {product.editions?.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleEditionChange(product.id, item)}
                          className={`h-10 border text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                            edition === item
                              ? "border-[#111111] bg-[#111111] text-white"
                              : "border-[#D8D7D0] text-[#55544F] hover:border-[#111111]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      COLOUR
                  ================================================= */}

                  <div className="mt-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#77766F]">
                        Colour
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                        {color}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.colors?.map((item) => {
                        const isSelected = color === item;

                        return (
                          <button
                            key={item}
                            type="button"
                            title={item}
                            onClick={() => handleColorChange(product.id, item)}
                            className={`flex h-9 items-center gap-2 border px-3 text-[9px] uppercase tracking-[0.08em] transition-all duration-200 ${
                              isSelected
                                ? "border-[#111111]"
                                : "border-[#D8D7D0] hover:border-[#111111]"
                            }`}
                          >
                            <span
                              className={`h-3 w-3 border border-[#BDBBB3] ${
                                item === "Graphite"
                                  ? "bg-[#262626]"
                                  : item === "Green"
                                    ? "bg-[#0B8F63]"
                                    : item === "Stone"
                                      ? "bg-[#8A8982]"
                                      : item === "Ivory"
                                        ? "bg-[#E9E7DE]"
                                        : "bg-[#D8D6CF]"
                              }`}
                            />

                            <span className="hidden sm:inline">{item}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* =================================================
                      PERSONALIZATION
                  ================================================= */}

                  {product.personalized && (
                    <div className="mt-5">
                      <label
                        htmlFor={`name-${product.id}`}
                        className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.17em] text-[#77766F]"
                      >
                        Your Name
                      </label>

                      <input
                        id={`name-${product.id}`}
                        type="text"
                        value={names[product.id] || ""}
                        onChange={(event) =>
                          handleNameChange(product.id, event.target.value)
                        }
                        placeholder="Enter your name"
                        maxLength={20}
                        className="h-11 w-full border border-[#D8D7D0] bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-[#AAA9A2] focus:border-[#111111]"
                      />
                    </div>
                  )}

                  {/* =================================================
                      ADD TO BASKET / QUANTITY
                  ================================================= */}

                  {product.price && (
                    <div className="relative mt-6 h-[50px]">
                      {/* Add To Basket */}

                      <button
                        type="button"
                        disabled={
                          product.personalized && !names[product.id]?.trim()
                        }
                        onClick={() => handleAddToBasket(product)}
                        className={`absolute inset-0 flex h-[50px] w-full items-center justify-center gap-3 bg-[#111111] text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 ease-out hover:bg-[#0B8F63] disabled:cursor-not-allowed disabled:bg-[#C9C7C0] ${
                          quantity === 0
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-2 opacity-0"
                        }`}
                      >
                        <ShoppingCart
                          size={16}
                          strokeWidth={1.5}
                          className="transition-transform duration-300"
                        />
                        Add to Basket
                      </button>

                      {/* Quantity Control */}

                      <div
                        className={`absolute inset-0 flex h-[50px] w-full items-center border border-[#0B8F63] transition-all duration-300 ease-out ${
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
                          className="flex h-full w-1/3 items-center justify-center text-[#0B8F63] transition-colors duration-200 hover:bg-[#0B8F63] hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={17} strokeWidth={1.5} />
                        </button>

                        <span className="flex h-full w-1/3 items-center justify-center border-x border-[#0B8F63] text-sm font-semibold text-[#0B8F63]">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => addToCart(cartItem, 1)}
                          className="flex h-full w-1/3 items-center justify-center text-[#0B8F63] transition-colors duration-200 hover:bg-[#0B8F63] hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus size={17} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Product Details */}

                  <Link
                    to={`/products/${product.id}`}
                    className="group/link mt-5 flex items-center justify-between border-t border-[#E0DED7] pt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77766F] transition-colors hover:text-[#0B8F63]"
                  >
                    <span>View Product Details</span>

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Products;
