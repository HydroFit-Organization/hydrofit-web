import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "hydrofit-cart";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);

      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  /* =====================================================
     LOCAL STORAGE
  ===================================================== */

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  /* =====================================================
     ADD TO CART
  ===================================================== */

  const addToCart = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      /*
       * productId represents the complete configuration.
       *
       * Example:
       *
       * hydrofit-bottle-Men-Graphite
       * hydrofit-bottle-Women-Ivory
       *
       * hydrofit-personalized-Men-Graphite-JOHN
       */

      const productId = product.productId || product.id;

      const existingItem = currentItems.find(
        (item) => item.productId === productId,
      );

      /*
       * If the exact same configuration already
       * exists, increase its quantity.
       */

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      /*
       * Otherwise create a new basket item.
       */

      return [
        ...currentItems,
        {
          /* Identity */
          productId,
          id: product.id,

          /* Product information */
          name: product.name,
          category: product.category || product.type || "HYDROFIT",
          type: product.type || "",
          price: product.price,

          /*
           * Store both Men and Women images.
           * CartDrawer will choose the correct
           * image using selectedEdition.
           */
          images: product.images,

          /*
           * Backward compatibility if an old
           * single image still exists.
           */
          image: product.image || "",

          /* Product configuration */
          selectedEdition: product.selectedEdition || "",

          selectedColor: product.selectedColor || "",

          personalizedName: product.personalizedName || "",

          includesBag: Boolean(product.includesBag),

          /* Quantity */
          quantity,
        },
      ];
    });
  };

  /* =====================================================
     REMOVE FROM CART
  ===================================================== */

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId),
    );
  };

  /* =====================================================
     UPDATE QUANTITY
  ===================================================== */

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  };

  /* =====================================================
     CLEAR CART
  ===================================================== */

  const clearCart = () => {
    setCartItems([]);
  };

  /* =====================================================
     CART COUNT
     
     IMPORTANT:
     Distinct configured products.
     
     4 × Men's Graphite = 1
     2 × Women's Ivory = 1
     
     Both together = 2
  ===================================================== */

  const cartCount = useMemo(() => cartItems.length, [cartItems]);

  /* =====================================================
     CART TOTAL
  ===================================================== */

  const cartTotal = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  );

  /* =====================================================
     CONTEXT VALUE
  ===================================================== */

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/* =====================================================
   USE CART
===================================================== */

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
