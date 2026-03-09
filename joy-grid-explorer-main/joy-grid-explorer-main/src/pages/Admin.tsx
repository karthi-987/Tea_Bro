import { useState, useMemo } from "react";
import { ArrowLeft, Plus, Pencil, Trash2, X, Check, Search, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useMenu } from "@/context/MenuContext";
import { useOffers, Offer } from "@/context/OffersContext";
import { useNavigate } from "react-router-dom";
import { MenuItem, Variant } from "@/data/menuData";
import teaBroLogo from "@/assets/tea-bro-logo.png";

type Tab = "items" | "cats" | "offers";

const Admin = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const { categories, addCategory, updateCategory, deleteCategory, addMenuItem, updateMenuItem, deleteMenuItem } = useMenu();
  const { offers, addOffer, updateOffer, deleteOffer } = useOffers();

  // Offer editing
  const [editingOffer, setEditingOffer] = useState<string | null>(null);
  const [offerLabel, setOfferLabel] = useState("");
  const [offerMin, setOfferMin] = useState(0);
  const [offerPercent, setOfferPercent] = useState(0);
  const [showNewOffer, setShowNewOffer] = useState(false);
  const [newOfferLabel, setNewOfferLabel] = useState("");
  const [newOfferMin, setNewOfferMin] = useState(0);
  const [newOfferPercent, setNewOfferPercent] = useState(0);

  const [activeTab, setActiveTab] = useState<Tab>("items");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCat, setFilterCat] = useState("all");

  // Category editing
  const [editingCat, setEditingCat] = useState<string | null>(null);
  const [catName, setCatName] = useState("");
  const [catIcon, setCatIcon] = useState("");
  const [showNewCat, setShowNewCat] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [newCatIcon, setNewCatIcon] = useState("🍴");

  // Item editing
  const [editingItem, setEditingItem] = useState<{ catId: string; itemId: string } | null>(null);
  const [itemName, setItemName] = useState("");
  const [itemVariants, setItemVariants] = useState<Variant[]>([]);

  const [showNewItem, setShowNewItem] = useState(false);
  const [newItemCat, setNewItemCat] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [newItemVariants, setNewItemVariants] = useState<Variant[]>([{ name: "", price: 0 }]);

  const allItems = useMemo(() => {
    return categories.flatMap((cat) =>
      cat.items.map((item) => ({ ...item, catId: cat.id, catName: cat.name }))
    );
  }, [categories]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = filterCat === "all" || item.catId === filterCat;
      return matchesSearch && matchesCat;
    });
  }, [allItems, searchQuery, filterCat]);

  if (!isAdmin) {
    navigate("/admin-login");
    return null;
  }

  const startEditItem = (catId: string, item: MenuItem) => {
    setEditingItem({ catId, itemId: item.id });
    setItemName(item.name);
    setItemVariants([...item.variants]);
  };

  const saveEditItem = () => {
    if (editingItem && itemName.trim()) {
      updateMenuItem(editingItem.catId, editingItem.itemId, { name: itemName.trim(), variants: itemVariants.filter((v) => v.name.trim()) });
      setEditingItem(null);
    }
  };

  const handleAddItem = () => {
    if (newItemName.trim() && newItemCat && newItemVariants.some((v) => v.name.trim())) {
      const id = newItemCat + "-" + Date.now();
      addMenuItem(newItemCat, { id, name: newItemName.trim(), variants: newItemVariants.filter((v) => v.name.trim()) });
      setNewItemName("");
      setNewItemVariants([{ name: "", price: 0 }]);
      setShowNewItem(false);
    }
  };

  const startEditCat = (id: string, name: string, icon: string) => {
    setEditingCat(id);
    setCatName(name);
    setCatIcon(icon);
  };

  const saveEditCat = () => {
    if (editingCat && catName.trim()) {
      updateCategory(editingCat, { name: catName.trim(), icon: catIcon });
      setEditingCat(null);
    }
  };

  const handleAddCategory = () => {
    if (newCatName.trim()) {
      const id = newCatName.trim().toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
      addCategory({ id, name: newCatName.trim(), icon: newCatIcon, items: [] });
      setNewCatName("");
      setNewCatIcon("🍴");
      setShowNewCat(false);
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={teaBroLogo} alt="Tea Bro" className="h-10 w-10 rounded-lg object-cover" />
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Manage your menu</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate("/")} className="px-3 py-1.5 rounded-md border border-border text-xs font-semibold text-foreground hover:bg-secondary transition-colors">
              View Menu
            </button>
            <button onClick={logout} className="p-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="px-4 pt-4">
        <div className="flex gap-1 bg-secondary rounded-lg p-1">
          {([
            { key: "items" as Tab, label: "🍽️ Items" },
            { key: "cats" as Tab, label: "📁 Cats" },
            { key: "offers" as Tab, label: "🏷️ Offers" },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${
                activeTab === tab.key
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Items Tab */}
      {activeTab === "items" && (
        <div className="px-4 py-4 space-y-3 pb-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-input bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-input bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
            ))}
          </select>

          {/* Add Item Button */}
          <button
            onClick={() => { setShowNewItem(true); setNewItemCat(categories[0]?.id || ""); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" /> Add Item
          </button>

          <p className="text-xs text-muted-foreground">
            Showing {filteredItems.length} of {allItems.length} items
          </p>

          {/* New Item Form */}
          {showNewItem && (
            <div className="bg-card rounded-xl border border-border p-4 space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">New Item</h3>
              <select
                value={newItemCat}
                onChange={(e) => setNewItemCat(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
                ))}
              </select>
              <input value={newItemName} onChange={(e) => setNewItemName(e.target.value)} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" placeholder="Item name" />
              {newItemVariants.map((v, vi) => (
                <div key={vi} className="flex gap-2">
                  <input value={v.name} onChange={(e) => { const u = [...newItemVariants]; u[vi] = { ...u[vi], name: e.target.value }; setNewItemVariants(u); }} className="flex-1 border border-input rounded-lg px-3 py-1.5 text-xs bg-background text-foreground" placeholder="Variant name" />
                  <input type="number" value={v.price || ""} onChange={(e) => { const u = [...newItemVariants]; u[vi] = { ...u[vi], price: Number(e.target.value) }; setNewItemVariants(u); }} className="w-20 border border-input rounded-lg px-3 py-1.5 text-xs bg-background text-foreground" placeholder="₹" />
                  {newItemVariants.length > 1 && <button onClick={() => setNewItemVariants(newItemVariants.filter((_, i) => i !== vi))} className="text-destructive p-1"><X className="w-3.5 h-3.5" /></button>}
                </div>
              ))}
              <div className="flex items-center justify-between">
                <button onClick={() => setNewItemVariants([...newItemVariants, { name: "", price: 0 }])} className="text-xs text-primary font-semibold">+ Add Variant</button>
                <div className="flex gap-2">
                  <button onClick={handleAddItem} className="px-4 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground font-semibold">Save</button>
                  <button onClick={() => setShowNewItem(false)} className="px-4 py-1.5 text-xs rounded-lg bg-secondary text-foreground font-semibold">Cancel</button>
                </div>
              </div>
            </div>
          )}

          {/* Item Cards */}
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-card rounded-xl border border-border p-4 shadow-sm">
              {editingItem?.itemId === item.id ? (
                <div className="space-y-3">
                  <input value={itemName} onChange={(e) => setItemName(e.target.value)} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground font-semibold" />
                  {itemVariants.map((v, vi) => (
                    <div key={vi} className="flex gap-2">
                      <input value={v.name} onChange={(e) => { const u = [...itemVariants]; u[vi] = { ...u[vi], name: e.target.value }; setItemVariants(u); }} className="flex-1 border border-input rounded-lg px-3 py-1.5 text-xs bg-background text-foreground" placeholder="Variant" />
                      <input type="number" value={v.price} onChange={(e) => { const u = [...itemVariants]; u[vi] = { ...u[vi], price: Number(e.target.value) }; setItemVariants(u); }} className="w-20 border border-input rounded-lg px-3 py-1.5 text-xs bg-background text-foreground" placeholder="₹" />
                      <button onClick={() => setItemVariants(itemVariants.filter((_, i) => i !== vi))} className="text-destructive p-1"><X className="w-3.5 h-3.5" /></button>
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <button onClick={() => setItemVariants([...itemVariants, { name: "", price: 0 }])} className="text-xs text-primary font-semibold">+ Add Variant</button>
                    <div className="flex gap-2">
                      <button onClick={saveEditItem} className="px-4 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground font-semibold">Save</button>
                      <button onClick={() => setEditingItem(null)} className="px-4 py-1.5 text-xs rounded-lg bg-secondary text-foreground font-semibold">Cancel</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.catName}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => startEditItem(item.catId, item)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground"><Pencil className="w-4 h-4" /></button>
                      <button onClick={() => { if (confirm(`Delete "${item.name}"?`)) deleteMenuItem(item.catId, item.id); }} className="p-2 rounded-lg hover:bg-secondary text-destructive"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.variants.map((v) => (
                      <span key={v.name} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground">
                        {v.name}: ₹{v.price}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === "cats" && (
        <div className="px-4 py-4 space-y-3 pb-8">
          <button
            onClick={() => setShowNewCat(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" /> Add Category
          </button>

          {showNewCat && (
            <div className="bg-card rounded-xl border border-border p-4 space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">New Category</h3>
              <div className="flex gap-2">
                <input value={newCatIcon} onChange={(e) => setNewCatIcon(e.target.value)} className="w-14 text-center border border-input rounded-lg px-2 py-2 text-sm bg-background text-foreground" placeholder="🍴" />
                <input value={newCatName} onChange={(e) => setNewCatName(e.target.value)} className="flex-1 border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" placeholder="Category name" />
              </div>
              <div className="flex gap-2 justify-end">
                <button onClick={handleAddCategory} className="px-4 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground font-semibold">Create</button>
                <button onClick={() => setShowNewCat(false)} className="px-4 py-1.5 text-xs rounded-lg bg-secondary text-foreground font-semibold">Cancel</button>
              </div>
            </div>
          )}

          {categories.map((cat) => (
            <div key={cat.id} className="bg-card rounded-xl border border-border p-4 shadow-sm">
              {editingCat === cat.id ? (
                <div className="flex items-center gap-2">
                  <input value={catIcon} onChange={(e) => setCatIcon(e.target.value)} className="w-12 text-center border border-input rounded-lg px-1 py-2 text-sm bg-background text-foreground" />
                  <input value={catName} onChange={(e) => setCatName(e.target.value)} className="flex-1 border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" />
                  <button onClick={saveEditCat} className="p-2 text-primary"><Check className="w-4 h-4" /></button>
                  <button onClick={() => setEditingCat(null)} className="p-2 text-muted-foreground"><X className="w-4 h-4" /></button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{cat.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{cat.name}</h3>
                      <p className="text-xs text-muted-foreground">{cat.items.length} items</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => startEditCat(cat.id, cat.name, cat.icon)} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground"><Pencil className="w-4 h-4" /></button>
                    <button onClick={() => { if (confirm(`Delete "${cat.name}"?`)) deleteCategory(cat.id); }} className="p-2 rounded-lg hover:bg-secondary text-destructive"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Offers Tab */}
      {activeTab === "offers" && (
        <div className="px-4 py-4 space-y-3 pb-8">
          <button
            onClick={() => { setShowNewOffer(true); setNewOfferLabel(""); setNewOfferMin(0); setNewOfferPercent(0); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" /> Add Offer
          </button>

          {showNewOffer && (
            <div className="bg-card rounded-xl border border-border p-4 space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">New Offer</h3>
              <input value={newOfferLabel} onChange={(e) => setNewOfferLabel(e.target.value)} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" placeholder="Offer label (e.g. 8% FLAT OFF)" />
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground">Min order (₹)</label>
                  <input type="number" value={newOfferMin || ""} onChange={(e) => setNewOfferMin(Number(e.target.value))} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground">Discount %</label>
                  <input type="number" value={newOfferPercent || ""} onChange={(e) => setNewOfferPercent(Number(e.target.value))} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" />
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <button onClick={() => { if (newOfferLabel.trim() && newOfferMin > 0 && newOfferPercent > 0) { addOffer({ id: "offer-" + Date.now(), label: newOfferLabel.trim(), minAmount: newOfferMin, discountPercent: newOfferPercent }); setShowNewOffer(false); } }} className="px-4 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground font-semibold">Save</button>
                <button onClick={() => setShowNewOffer(false)} className="px-4 py-1.5 text-xs rounded-lg bg-secondary text-foreground font-semibold">Cancel</button>
              </div>
            </div>
          )}

          {offers.map((offer) => (
            <div key={offer.id} className="bg-card rounded-xl border border-border p-4 shadow-sm">
              {editingOffer === offer.id ? (
                <div className="space-y-3">
                  <input value={offerLabel} onChange={(e) => setOfferLabel(e.target.value)} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground font-semibold" />
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground">Min order (₹)</label>
                      <input type="number" value={offerMin} onChange={(e) => setOfferMin(Number(e.target.value))} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-muted-foreground">Discount %</label>
                      <input type="number" value={offerPercent} onChange={(e) => setOfferPercent(Number(e.target.value))} className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground" />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button onClick={() => { updateOffer(offer.id, { label: offerLabel.trim(), minAmount: offerMin, discountPercent: offerPercent }); setEditingOffer(null); }} className="px-4 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground font-semibold">Save</button>
                    <button onClick={() => setEditingOffer(null)} className="px-4 py-1.5 text-xs rounded-lg bg-secondary text-foreground font-semibold">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-primary">{offer.label}</h3>
                    <p className="text-xs text-muted-foreground">On orders above ₹{offer.minAmount} • {offer.discountPercent}% discount</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => { setEditingOffer(offer.id); setOfferLabel(offer.label); setOfferMin(offer.minAmount); setOfferPercent(offer.discountPercent); }} className="p-2 rounded-lg hover:bg-secondary text-muted-foreground"><Pencil className="w-4 h-4" /></button>
                    <button onClick={() => { if (confirm(`Delete "${offer.label}"?`)) deleteOffer(offer.id); }} className="p-2 rounded-lg hover:bg-secondary text-destructive"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {offers.length === 0 && (
            <div className="bg-card rounded-xl border border-border p-6 text-center shadow-sm">
              <span className="text-3xl">🏷️</span>
              <p className="text-sm text-muted-foreground mt-2">No offers yet. Add one above!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
