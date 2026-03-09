import { useCart } from "@/context/CartContext";

const CartSummary = () => {
  const { items, subtotal, discount, discountLabel, total } = useCart();

  if (items.length === 0) return null;

  return (
    <div className="mx-4 mb-24 bg-card rounded-lg border border-border p-4 shadow-sm">
      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Cart Summary</h3>
      <div className="space-y-1.5 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
          <span className="text-foreground font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-success">
            <span className="font-medium">Discount Applied ({discountLabel})</span>
            <span className="font-medium">-₹{discount.toFixed(2)}</span>
          </div>
        )}
        <div className="border-t border-border pt-2 flex justify-between">
          <span className="font-bold text-foreground">Total</span>
          <span className="font-bold text-primary text-lg">₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
