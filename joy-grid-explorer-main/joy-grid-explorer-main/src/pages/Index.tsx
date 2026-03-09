import { useState, useCallback, useRef, useEffect } from "react";
import { useMenu } from "@/context/MenuContext";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import MenuItemCard from "@/components/MenuItemCard";
import SpecialOffers from "@/components/SpecialOffers";
import CartSummary from "@/components/CartSummary";
import CartBar from "@/components/CartBar";

const Index = () => {
  const { categories } = useMenu();
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleCategorySelect = useCallback((id: string) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <Header />
      <CategoryNav categories={categories} activeCategory={activeCategory} onSelect={handleCategorySelect} />

      <SpecialOffers />

      <div className="px-4 pb-4 space-y-6">
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el; }}
          >
            <h2 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2 border-l-4 border-primary pl-3">
              {category.name}
            </h2>
            <div className="space-y-3">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <CartSummary />
      <CartBar />
    </div>
  );
};

export default Index;
