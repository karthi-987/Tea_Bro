import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addItem, removeItem, getItemQuantity } = useCart();
  const hasBase = item.baseOptions && item.baseOptions.length > 0;
  const [selectedBase, setSelectedBase] = useState(hasBase ? item.baseOptions![0] : "");

  return (
    <div className="bg-card rounded-xl p-5 shadow-sm border border-border">
      <h3 className="font-bold text-foreground text-base mb-4">{item.name}</h3>

      {hasBase && (
        <div className="mb-4 flex gap-2">
          {item.baseOptions!.map((base) => (
            <button
              key={base}
              onClick={() => setSelectedBase(base)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                selectedBase === base
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-muted-foreground border-border hover:border-primary"
              }`}
            >
              {base}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {item.variants.map((variant) => {
          const base = hasBase ? selectedBase : undefined;
          const qty = getItemQuantity(item.id, variant.name, base);
          return (
            <div key={variant.name} className="flex items-center justify-between">
              <span className="text-sm font-medium text-primary flex-1">{variant.name}</span>
              <span className="text-sm font-bold text-foreground mr-3">₹{variant.price}</span>
              {qty > 0 ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => removeItem(item.id, variant.name, base)}
                    className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-5 text-center text-sm font-semibold text-foreground">{qty}</span>
                  <button
                    onClick={() => addItem({ itemId: item.id, itemName: item.name, variantName: variant.name, price: variant.price, base })}
                    className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addItem({ itemId: item.id, itemName: item.name, variantName: variant.name, price: variant.price, base })}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItemCard;
