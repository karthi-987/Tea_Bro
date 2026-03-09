import React, { createContext, useContext, useState, useCallback } from "react";
import { menuData as defaultMenuData, Category, MenuItem } from "@/data/menuData";

interface MenuContextType {
  categories: Category[];
  addCategory: (cat: Category) => void;
  updateCategory: (id: string, updates: Partial<Pick<Category, "name" | "icon">>) => void;
  deleteCategory: (id: string) => void;
  addMenuItem: (categoryId: string, item: MenuItem) => void;
  updateMenuItem: (categoryId: string, itemId: string, updates: Partial<MenuItem>) => void;
  deleteMenuItem: (categoryId: string, itemId: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used within MenuProvider");
  return ctx;
};

const STORAGE_KEY = "hearth-vine-menu";

const loadMenu = (): Category[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultMenuData;
};

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(loadMenu);

  const save = (cats: Category[]) => {
    setCategories(cats);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cats));
  };

  const addCategory = useCallback((cat: Category) => {
    setCategories((prev) => {
      const next = [...prev, cat];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const updateCategory = useCallback((id: string, updates: Partial<Pick<Category, "name" | "icon">>) => {
    setCategories((prev) => {
      const next = prev.map((c) => (c.id === id ? { ...c, ...updates } : c));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const deleteCategory = useCallback((id: string) => {
    setCategories((prev) => {
      const next = prev.filter((c) => c.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const addMenuItem = useCallback((categoryId: string, item: MenuItem) => {
    setCategories((prev) => {
      const next = prev.map((c) =>
        c.id === categoryId ? { ...c, items: [...c.items, item] } : c
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const updateMenuItem = useCallback((categoryId: string, itemId: string, updates: Partial<MenuItem>) => {
    setCategories((prev) => {
      const next = prev.map((c) =>
        c.id === categoryId
          ? { ...c, items: c.items.map((i) => (i.id === itemId ? { ...i, ...updates } : i)) }
          : c
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const deleteMenuItem = useCallback((categoryId: string, itemId: string) => {
    setCategories((prev) => {
      const next = prev.map((c) =>
        c.id === categoryId ? { ...c, items: c.items.filter((i) => i.id !== itemId) } : c
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <MenuContext.Provider value={{ categories, addCategory, updateCategory, deleteCategory, addMenuItem, updateMenuItem, deleteMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
