import React, { createContext, useContext, useState, useCallback } from "react";

export interface Offer {
  id: string;
  label: string;
  minAmount: number;
  discountPercent: number;
}

interface OffersContextType {
  offers: Offer[];
  addOffer: (offer: Offer) => void;
  updateOffer: (id: string, updates: Partial<Omit<Offer, "id">>) => void;
  deleteOffer: (id: string) => void;
  getApplicableDiscount: (subtotal: number) => { rate: number; label: string };
}

const OffersContext = createContext<OffersContextType | undefined>(undefined);

export const useOffers = () => {
  const ctx = useContext(OffersContext);
  if (!ctx) throw new Error("useOffers must be used within OffersProvider");
  return ctx;
};

const STORAGE_KEY = "tea-bro-offers";

const defaultOffers: Offer[] = [
  { id: "offer-1", label: "8% FLAT OFF", minAmount: 300, discountPercent: 8 },
  { id: "offer-2", label: "10% FLAT OFF", minAmount: 500, discountPercent: 10 },
];

const loadOffers = (): Offer[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultOffers;
};

export const OffersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [offers, setOffers] = useState<Offer[]>(loadOffers);

  const persist = (next: Offer[]) => {
    setOffers(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const addOffer = useCallback((offer: Offer) => {
    setOffers((prev) => {
      const next = [...prev, offer];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const updateOffer = useCallback((id: string, updates: Partial<Omit<Offer, "id">>) => {
    setOffers((prev) => {
      const next = prev.map((o) => (o.id === id ? { ...o, ...updates } : o));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const deleteOffer = useCallback((id: string) => {
    setOffers((prev) => {
      const next = prev.filter((o) => o.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const getApplicableDiscount = useCallback(
    (subtotal: number) => {
      // Sort descending by minAmount, pick the best applicable
      const sorted = [...offers].sort((a, b) => b.minAmount - a.minAmount);
      const applicable = sorted.find((o) => subtotal >= o.minAmount);
      if (applicable) {
        return { rate: applicable.discountPercent / 100, label: `${applicable.discountPercent}% OFF` };
      }
      return { rate: 0, label: "" };
    },
    [offers]
  );

  return (
    <OffersContext.Provider value={{ offers, addOffer, updateOffer, deleteOffer, getApplicableDiscount }}>
      {children}
    </OffersContext.Provider>
  );
};
