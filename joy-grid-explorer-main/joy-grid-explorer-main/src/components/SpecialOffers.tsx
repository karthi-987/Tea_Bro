import { Tag, Star } from "lucide-react";
import { useOffers } from "@/context/OffersContext";

const SpecialOffers = () => {
  const { offers } = useOffers();

  if (offers.length === 0) return null;

  return (
    <div className="px-4 py-4">
      <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-3">
        <Tag className="w-5 h-5 text-primary" /> Special Offers
      </h2>
      <div className="space-y-2">
        {offers.map((offer) => (
          <div key={offer.id} className="flex items-center gap-3 rounded-lg px-4 py-3 border border-border" style={{ backgroundColor: "hsl(var(--offer-bg))" }}>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Star className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary">{offer.label}</p>
              <p className="text-xs text-muted-foreground">On orders above ₹{offer.minAmount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
