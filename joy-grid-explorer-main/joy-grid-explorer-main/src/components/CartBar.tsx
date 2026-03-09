import { ShoppingCart, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const CartBar = () => {
  const { totalItems, total } = useCart();
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="mx-3 mb-3 bg-primary text-primary-foreground rounded-xl px-5 py-3.5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-card text-primary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <span className="text-sm font-medium">
            {totalItems} item{totalItems > 1 ? "s" : ""} added
          </span>
        </div>
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-1 font-bold text-sm"
        >
          ₹{total.toFixed(2)}
          <span className="ml-1">View Cart</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartBar;
