import { useRef } from "react";
import { Category } from "@/data/menuData";

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

const CategoryNav = ({ categories, activeCategory, onSelect }: CategoryNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-[60px] z-40 bg-background border-b border-border">
      <div ref={scrollRef} className="flex gap-1 overflow-x-auto scrollbar-hide px-3 py-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg min-w-[60px] transition-all text-[10px] leading-tight font-medium ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-muted-foreground hover:bg-secondary"
            }`}
          >
            <span className="text-lg">{cat.icon}</span>
            <span className="whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
