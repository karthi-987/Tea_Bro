import { ArrowLeft, Plus, Minus, Trash2, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useOffers } from "@/context/OffersContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, addItem, removeItem, subtotal, discount, discountLabel, total, clearCart } = useCart();
  const { offers } = useOffers();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <header className="sticky top-0 z-50 bg-card shadow-sm px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="p-1">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="font-display text-lg font-bold text-foreground">Your Cart</h1>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <span className="text-5xl mb-4">🛒</span>
          <p className="text-muted-foreground text-sm">Your cart is empty</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="px-4 py-4 space-y-3 pb-32">
          {items.map((item, idx) => (
            <div key={idx} className="bg-card rounded-lg p-4 shadow-sm border border-border flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{item.itemName}</p>
                <p className="text-xs text-muted-foreground">
                  {item.variantName}
                  {item.base && <span className="ml-1">• {item.base}</span>}
                </p>
                <p className="text-sm font-semibold text-primary mt-1">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => removeItem(item.itemId, item.variantName, item.base)}
                  className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                >
                  {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-destructive" /> : <Minus className="w-3.5 h-3.5" />}
                </button>
                <span className="w-6 text-center text-sm font-semibold text-foreground">{item.quantity}</span>
                <button
                  onClick={() => addItem({ itemId: item.itemId, itemName: item.itemName, variantName: item.variantName, price: item.price, base: item.base })}
                  className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Offers section */}
          {offers.length > 0 && (
            <div className="bg-card rounded-lg border border-border p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-primary" /> Available Offers
              </h3>
              <div className="space-y-1.5">
                {offers.map((offer) => {
                  const isActive = subtotal >= offer.minAmount;
                  return (
                    <div key={offer.id} className={`flex items-center justify-between text-xs px-3 py-2 rounded-md ${isActive ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
                      <span className="font-semibold">{offer.label}</span>
                      <span>
                        {isActive ? "✓ Applied" : `Add ₹${(offer.minAmount - subtotal).toFixed(0)} more`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Price summary */}
          <div className="bg-card rounded-lg border border-border p-4 shadow-sm space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span className="font-medium">Discount ({discountLabel})</span>
                <span className="font-medium">-₹{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-border pt-2 flex justify-between">
              <span className="font-bold text-foreground">Total</span>
              <span className="font-bold text-primary text-lg">₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={clearCart}
            className="w-full text-center text-xs text-destructive font-medium py-2"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
