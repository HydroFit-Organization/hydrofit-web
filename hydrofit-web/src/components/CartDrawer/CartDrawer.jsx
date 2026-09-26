import React from "react";
import { Minus, Plus, Trash2, X, ArrowUpRight } from "lucide-react";

import { useCart } from "../../context/CartContext";

const WHATSAPP_NUMBER = "8106801326";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } =
    useCart();

  /* =====================================================
     GET PRODUCT IMAGE
  ===================================================== */

  const getProductImage = (item) => {
    /*
     * New product structure:
     *
     * images: {
     *   Men: "...",
     *   Women: "..."
     * }
     */

    if (item.images && item.selectedEdition) {
      return (
        item.images[item.selectedEdition] ||
        item.images.Men ||
        item.images.Women
      );
    }

    /*
     * Backward compatibility
     */

    return item.image || "";
  };

  /* =====================================================
     WHATSAPP ORDER
  ===================================================== */

  const handleWhatsAppOrder = () => {
    if (!cartItems.length) {
      return;
    }

    const items = cartItems
      .map((item, index) => {
        const configuration = [
          item.selectedEdition && `Edition: ${item.selectedEdition}`,

          item.selectedColor && `Colour: ${item.selectedColor}`,

          item.personalizedName &&
            `Personalized Name: ${item.personalizedName}`,

          item.includesBag && "Includes: Carry Bag",
        ]
          .filter(Boolean)
          .join("\n   ");

        return `${index + 1}. ${item.name}
   ${configuration}
   Quantity: ${item.quantity}
   Price: ₹${item.price * item.quantity}`;
      })
      .join("\n\n");

    const message = [
      "Hi HydroFit, I would like to place an order.",
      "",
      "Order Summary:",
      "",
      items,
      "",
      `Subtotal: ₹${cartTotal}`,
      "",
      "Please share the payment and delivery details.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        className={`fixed inset-0 z-[80] bg-black/35 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* =====================================================
          DRAWER
      ===================================================== */}

      <aside
        className={`fixed right-0 top-0 z-[90] flex h-full w-full max-w-[460px] flex-col bg-[#F7F6F2] text-[#111111] shadow-[-20px_0_60px_rgba(0,0,0,0.14)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex h-[82px] items-center justify-between border-b border-[#DEDCD5] px-6 sm:px-8">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77766F]">
              HydroFit
            </p>

            <h2 className="mt-1 font-[Sora] text-xl font-semibold tracking-[-0.04em]">
              Your Basket
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close basket"
            className="flex h-10 w-10 items-center justify-center border border-[#D8D7D0] transition-colors duration-200 hover:bg-white"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* =================================================
            ITEMS
        ================================================= */}

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-[Sora] text-xl font-semibold tracking-[-0.04em]">
                Your basket is empty.
              </p>

              <p className="mt-3 max-w-[280px] text-sm leading-6 text-[#77766F]">
                Choose your HydroFit edition and add it to your basket.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-7 bg-[#111111] px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#0B8F63]"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-0">
              {cartItems.map((item) => {
                /*
                 * Correct image based on selected edition.
                 */

                const productImage = getProductImage(item);

                return (
                  <div
                    key={item.productId}
                    className="border-b border-[#DEDCD5] py-6 first:pt-0"
                  >
                    <div className="flex gap-4">
                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      <div className="flex h-24 w-20 shrink-0 items-center justify-center overflow-hidden bg-[#E9E7DE]">
                        <img
                          src={productImage}
                          alt={`${item.name}${
                            item.selectedEdition
                              ? ` - ${item.selectedEdition}`
                              : ""
                          }`}
                          className="h-[78%] w-auto object-contain transition-opacity duration-300"
                        />
                      </div>

                      {/* =================================================
                          DETAILS
                      ================================================= */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77766F]">
                              {item.category || item.type || "HYDROFIT"}
                            </p>

                            <h3 className="mt-1 font-[Sora] text-sm font-semibold tracking-[-0.025em]">
                              {item.name}
                            </h3>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.productId)}
                            aria-label={`Remove ${item.name}`}
                            className="shrink-0 text-[#77766F] transition-colors hover:text-[#111111]"
                          >
                            <Trash2 size={15} strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* =================================================
                            CONFIGURATION
                        ================================================= */}

                        <div className="mt-3 space-y-1.5">
                          {item.selectedEdition && (
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                                Edition
                              </span>

                              <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#55544F]">
                                {item.selectedEdition}
                              </span>
                            </div>
                          )}

                          {item.selectedColor && (
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                                Colour
                              </span>

                              <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#55544F]">
                                {item.selectedColor}
                              </span>
                            </div>
                          )}

                          {item.personalizedName && (
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                                Name
                              </span>

                              <span className="max-w-[150px] truncate text-[10px] font-medium uppercase tracking-[0.08em] text-[#55544F]">
                                {item.personalizedName}
                              </span>
                            </div>
                          )}

                          {item.includesBag && (
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[9px] uppercase tracking-[0.12em] text-[#999890]">
                                Includes
                              </span>

                              <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#55544F]">
                                Carry Bag
                              </span>
                            </div>
                          )}
                        </div>

                        {/* =================================================
                            PRICE
                        ================================================= */}

                        <p className="mt-4 font-[Sora] text-sm font-semibold">
                          ₹{item.price * item.quantity}
                        </p>

                        {/* =================================================
                            QUANTITY
                        ================================================= */}

                        <div className="mt-4 flex w-fit items-center border border-[#D8D7D0]">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-white"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} strokeWidth={1.5} />
                          </button>

                          <span className="flex h-8 min-w-8 items-center justify-center border-x border-[#D8D7D0] text-xs">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-white"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        {cartItems.length > 0 && (
          <div className="border-t border-[#DEDCD5] bg-[#F7F6F2] px-6 py-6 sm:px-8">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77766F]">
                Subtotal
              </span>

              <span className="font-[Sora] text-xl font-semibold tracking-[-0.04em]">
                ₹{cartTotal}
              </span>
            </div>

            <p className="mt-2 text-[10px] leading-5 text-[#898983]">
              Delivery and payment details will be confirmed on WhatsApp.
            </p>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="group mt-5 flex h-[52px] w-full items-center justify-center gap-2 bg-[#111111] text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#0B8F63]"
            >
              Order on WhatsApp
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="mt-4 w-full text-[9px] font-semibold uppercase tracking-[0.14em] text-[#77766F] transition-colors hover:text-[#111111]"
            >
              Clear Basket
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
