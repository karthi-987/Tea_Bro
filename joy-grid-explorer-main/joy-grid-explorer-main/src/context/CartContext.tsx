import React, { createContext, useContext, useState, useCallback } from "react";
import { useOffers } from "@/context/OffersContext";

export interface CartItem {
  itemId: string;
  itemName: string;
  variantName: string;
  price: number;
  quantity: number;
  base?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (itemId: string, variantName: string, base?: string) => void;
  getItemQuantity: (itemId: string, variantName: string, base?: string) => number;
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
  discountLabel: string;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

const matchItem = (i: CartItem, itemId: string, variantName: string, base?: string) =>
  i.itemId === itemId && i.variantName === variantName && (i.base || "") === (base || "");

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { getApplicableDiscount } = useOffers();

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => matchItem(i, item.itemId, item.variantName, item.base));
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        return updated;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((itemId: string, variantName: string, base?: string) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => matchItem(i, itemId, variantName, base));
      if (idx < 0) return prev;
      const updated = [...prev];
      if (updated[idx].quantity <= 1) {
        updated.splice(idx, 1);
      } else {
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity - 1 };
      }
      return updated;
    });
  }, []);

  const getItemQuantity = useCallback(
    (itemId: string, variantName: string, base?: string) => {
      return items.find((i) => matchItem(i, itemId, variantName, base))?.quantity || 0;
    },
    [items]
  );

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const { rate, label: discountLabel } = getApplicableDiscount(subtotal);
  const discount = Math.round(subtotal * rate * 100) / 100;
  const total = Math.round((subtotal - discount) * 100) / 100;

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, getItemQuantity, totalItems, subtotal, discount, total, discountLabel, clearCart: () => setItems([]) }}>
      {children}
    </CartContext.Provider>
  );
};
