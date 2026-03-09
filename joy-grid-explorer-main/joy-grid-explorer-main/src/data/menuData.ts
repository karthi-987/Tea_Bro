export interface Variant {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  variants: Variant[];
  baseOptions?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: Category[] = [
  {
    id: "tea",
    name: "Tea",
    icon: "☕",
    items: [
      { id: "tea-1", name: "Regular Tea", variants: [{ name: "Without Sugar", price: 12 }, { name: "With Sugar", price: 12 }, { name: "Half Sugar", price: 12 }, { name: "Jaggery", price: 15 }] },
      { id: "tea-2", name: "Lemon Tea", variants: [{ name: "Without Sugar", price: 15 }, { name: "With Sugar", price: 12 }, { name: "Half Sugar", price: 12 }, { name: "Jaggery", price: 15 }] },
      { id: "tea-3", name: "Cardamon Tea", variants: [{ name: "Without Sugar", price: 20 }, { name: "With Sugar", price: 20 }, { name: "Half Sugar", price: 20 }, { name: "Jaggery", price: 25 }] },
      { id: "tea-4", name: "Ginger Tea", variants: [{ name: "Without Sugar", price: 15 }, { name: "With Sugar", price: 15 }, { name: "Half Sugar", price: 15 }, { name: "Jaggery", price: 20 }] },
      { id: "tea-5", name: "Black Tea", variants: [{ name: "Without Sugar", price: 15 }, { name: "With Sugar", price: 15 }, { name: "Half Sugar", price: 15 }, { name: "Jaggery", price: 20 }] },
      { id: "tea-6", name: "Black Ginger Tea", variants: [{ name: "Without Sugar", price: 15 }, { name: "With Sugar", price: 15 }, { name: "Half Sugar", price: 15 }, { name: "Jaggery", price: 20 }] },
      { id: "tea-7", name: "Sulaimani Tea", variants: [{ name: "Without Sugar", price: 25 }, { name: "With Sugar", price: 25 }, { name: "Half Sugar", price: 25 }, { name: "Jaggery", price: 30 }] },
      { id: "tea-8", name: "Masala Tea", variants: [{ name: "Without Sugar", price: 15 }, { name: "With Sugar", price: 15 }, { name: "Half Sugar", price: 15 }, { name: "Jaggery", price: 20 }] },
      { id: "tea-9", name: "Lemon Ginger Tea", variants: [{ name: "Without Sugar", price: 15 }, { name: "With Sugar", price: 15 }, { name: "Half Sugar", price: 15 }, { name: "Jaggery", price: 20 }] },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    icon: "☕",
    items: [
      { id: "cof-1", name: "Bru Coffee", variants: [{ name: "Without Sugar", price: 20 }, { name: "With Sugar", price: 20 }, { name: "Half Sugar", price: 20 }, { name: "Jaggery", price: 25 }] },
      { id: "cof-2", name: "Black Filter Coffee", variants: [{ name: "Without Sugar", price: 20 }, { name: "With Sugar", price: 20 }, { name: "Half Sugar", price: 20 }, { name: "Jaggery", price: 25 }] },
      { id: "cof-3", name: "Cold Coffee", variants: [{ name: "Without Sugar", price: 70 }, { name: "With Sugar", price: 70 }, { name: "Half Sugar", price: 70 }] },
      { id: "cof-4", name: "Plain Hot Milk", variants: [{ name: "Without Sugar", price: 10 }, { name: "With Sugar", price: 10 }, { name: "Half Sugar", price: 10 }, { name: "Jaggery", price: 15 }] },
      { id: "cof-5", name: "Hot Badam Milk", variants: [{ name: "Without Sugar", price: 20 }, { name: "With Sugar", price: 20 }, { name: "Half Sugar", price: 20 }, { name: "Jaggery", price: 25 }] },
      { id: "cof-6", name: "Hot Ragi Malt", variants: [{ name: "Without Sugar", price: 20 }, { name: "With Sugar", price: 20 }, { name: "Half Sugar", price: 20 }, { name: "Jaggery", price: 25 }] },
      { id: "cof-7", name: "Sukku Coffee", variants: [{ name: "Without Sugar", price: 20 }, { name: "With Sugar", price: 20 }, { name: "Half Sugar", price: 20 }, { name: "Jaggery", price: 25 }] },
      { id: "cof-8", name: "Boost", variants: [{ name: "Without Sugar", price: 25 }, { name: "With Sugar", price: 25 }, { name: "Half Sugar", price: 25 }, { name: "Jaggery", price: 30 }] },
      { id: "cof-9", name: "Horlicks", variants: [{ name: "Without Sugar", price: 25 }, { name: "With Sugar", price: 25 }, { name: "Half Sugar", price: 25 }, { name: "Jaggery", price: 30 }] },
    ],
  },
  {
    id: "fries",
    name: "Fries",
    icon: "🍟",
    items: [
      { id: "fr-1", name: "French Fries", variants: [{ name: "Mayo", price: 80 }, { name: "Sauce", price: 80 }, { name: "Peri Peri Dip", price: 90 }, { name: "Cheese Dip", price: 90 }] },
      { id: "fr-2", name: "Peri Peri French Fries", variants: [{ name: "Mayo", price: 90 }, { name: "Sauce", price: 90 }, { name: "Cheese Dip", price: 100 }] },
      { id: "fr-3", name: "Cheesy Fries", variants: [{ name: "Cheese Dip", price: 100 }, { name: "Peri Peri Dip", price: 110 }] },
    ],
  },
  {
    id: "burger",
    name: "Burgers",
    icon: "🍔",
    items: [
      { id: "bg-1", name: "Veg Burger", variants: [{ name: "Patty", price: 90 }, { name: "Momos", price: 90 }] },
      { id: "bg-2", name: "Paneer Burger", variants: [{ name: "Patty", price: 110 }, { name: "Momos", price: 110 }] },
      { id: "bg-3", name: "Chicken Burger", variants: [{ name: "Patty", price: 100 }, { name: "Momos", price: 100 }] },
      { id: "bg-4", name: "Mushroom Burger", variants: [{ name: "Patty", price: 110 }, { name: "Momo", price: 110 }] },
      { id: "bg-5", name: "Aloo Tikki Cheese Burger", variants: [{ name: "Patty", price: 100 }, { name: "Momo", price: 100 }] },
      { id: "bg-6", name: "Crispy Chicken Cheese Burger", variants: [{ name: "Patty", price: 120 }, { name: "Momo", price: 120 }] },
      { id: "bg-7", name: "Chicken Zinger Burger", variants: [{ name: "Patty", price: 120 }, { name: "Momo", price: 120 }] },
    ],
  },
  {
    id: "momos",
    name: "Momos",
    icon: "🥟",
    items: [
      { id: "mm-1", name: "Veg Momo", variants: [{ name: "Steamed", price: 65 }, { name: "Fried", price: 75 }, { name: "Masala Pan Fried", price: 85 }] },
      { id: "mm-2", name: "Corn Cheese Momos", variants: [{ name: "Steamed", price: 95 }, { name: "Fried", price: 105 }, { name: "Masala Pan Fried", price: 115 }] },
      { id: "mm-3", name: "Paneer Momos", variants: [{ name: "Steamed", price: 95 }, { name: "Fried", price: 105 }, { name: "Masala Pan Fried", price: 115 }] },
      { id: "mm-4", name: "Mushroom Momo", variants: [{ name: "Steamed", price: 95 }, { name: "Fried", price: 105 }, { name: "Masala Pan Fried", price: 115 }] },
      { id: "mm-5", name: "Veg Mix Momo", variants: [{ name: "Steamed", price: 145 }, { name: "Fried", price: 155 }, { name: "Masala Pan Fried", price: 165 }] },
      { id: "mm-6", name: "Chicken Momos", variants: [{ name: "Steamed", price: 85 }, { name: "Fried", price: 95 }, { name: "Masala Pan Fried", price: 105 }] },
      { id: "mm-7", name: "Chicken Peri Peri Momo", variants: [{ name: "Steamed", price: 95 }, { name: "Fried", price: 105 }] },
    ],
  },
  {
    id: "bread-omelette",
    name: "Bread Omelette",
    icon: "🍳",
    items: [
      { id: "bo-1", name: "Bread Omelette", variants: [{ name: "Mint", price: 50 }, { name: "Mayo", price: 50 }, { name: "Mint & Mayo", price: 50 }] },
      { id: "bo-2", name: "Mix Veg Bread Omelette", variants: [{ name: "Mint", price: 60 }, { name: "Mayo", price: 60 }, { name: "Mint & Mayo", price: 60 }] },
      { id: "bo-3", name: "Cheese Bread Omelette", variants: [{ name: "Mint", price: 60 }, { name: "Mayo", price: 60 }, { name: "Mint & Mayo", price: 60 }] },
      { id: "bo-4", name: "Peri Peri Bread Omelette", variants: [{ name: "Mint", price: 60 }, { name: "Mayo", price: 60 }, { name: "Mint & Mayo", price: 60 }] },
      { id: "bo-5", name: "Chilly Cheese Bread Omelette", variants: [{ name: "Mint", price: 60 }, { name: "Mayo", price: 60 }, { name: "Mint & Mayo", price: 60 }] },
      { id: "bo-6", name: "Chilly Garlic Bread Omelette", variants: [{ name: "Mint", price: 60 }, { name: "Mayo", price: 60 }, { name: "Mint & Mayo", price: 60 }] },
      { id: "bo-7", name: "Chicken Bread Omelette", variants: [{ name: "Mint", price: 70 }, { name: "Mayo", price: 70 }, { name: "Mint & Mayo", price: 70 }] },
    ],
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    icon: "🥤",
    items: [
      { id: "ms-1", name: "Rose Milk", variants: [{ name: "No Sugar", price: 50 }, { name: "Half Sugar", price: 50 }, { name: "Normal Sugar", price: 50 }] },
      { id: "ms-2", name: "Badam", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-3", name: "Pista", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-4", name: "Mango", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-5", name: "Strawberry", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-6", name: "Vanilla", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-7", name: "Butterscotch", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-8", name: "Chocolate", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-9", name: "Oreo", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-10", name: "Cold Boost", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-11", name: "Black Current", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-12", name: "Blueberry", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-13", name: "Hazelnut", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-14", name: "Jamun", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-15", name: "Litchi", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-16", name: "Green Apple", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-17", name: "Kiwi", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ms-18", name: "Tender Coconut", variants: [{ name: "No Sugar", price: 80 }, { name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
    ],
  },
  {
    id: "maggi",
    name: "Maggi",
    icon: "🍜",
    items: [
      { id: "mg-1", name: "Classic Maggi", variants: [{ name: "Regular", price: 45 }, { name: "Add Cheese", price: 55 }] },
      { id: "mg-2", name: "Butter Masala Sweet Corn Maggi", variants: [{ name: "Regular", price: 65 }, { name: "Add Cheese", price: 75 }] },
      { id: "mg-3", name: "Paneer Butter Masala Maggi", variants: [{ name: "Regular", price: 75 }, { name: "Add Cheese", price: 85 }] },
      { id: "mg-4", name: "Mix Veg Island Maggi", variants: [{ name: "Regular", price: 75 }, { name: "Add Cheese", price: 85 }] },
      { id: "mg-5", name: "Egg Masala Maggi", variants: [{ name: "Regular", price: 65 }, { name: "Add Cheese", price: 75 }] },
      { id: "mg-6", name: "Chicken Masala Maggi", variants: [{ name: "Regular", price: 75 }, { name: "Add Cheese", price: 85 }] },
      { id: "mg-7", name: "Chilly Garlic Maggi", variants: [{ name: "Regular", price: 55 }, { name: "Add Cheese", price: 65 }] },
    ],
  },
  {
    id: "waffle",
    name: "Waffle",
    icon: "🧇",
    items: [
      { id: "wf-1", name: "Choco Waffle", variants: [{ name: "Choco Milk", price: 100 }, { name: "Dark Choco", price: 100 }, { name: "Hazelnut Choco", price: 100 }, { name: "Butterscotch", price: 100 }], baseOptions: ["Choco Base", "Vanilla Base"] },
    ],
  },
  {
    id: "mojito",
    name: "Mojito",
    icon: "🍹",
    items: [
      { id: "mj-1", name: "Strawberry Mojito", variants: [{ name: "Regular", price: 100 }] },
      { id: "mj-2", name: "Mint Mojito", variants: [{ name: "Regular", price: 80 }] },
      { id: "mj-3", name: "Blueberry Mojito", variants: [{ name: "Regular", price: 100 }] },
      { id: "mj-4", name: "Blue Curacao", variants: [{ name: "Regular", price: 80 }] },
      { id: "mj-5", name: "Green Apple Mojito", variants: [{ name: "Regular", price: 100 }] },
      { id: "mj-6", name: "Kiwi Mojito", variants: [{ name: "Regular", price: 100 }] },
      { id: "mj-7", name: "Litchi Mojito", variants: [{ name: "Regular", price: 100 }] },
      { id: "mj-8", name: "Red Curacao", variants: [{ name: "Regular", price: 80 }] },
    ],
  },
  {
    id: "samosa",
    name: "Samosa",
    icon: "🔺",
    items: [
      { id: "sa-1", name: "Punjabi Samosa (2 pcs)", variants: [{ name: "Regular", price: 45 }] },
      { id: "sa-2", name: "Chicken Samosa (4 pcs)", variants: [{ name: "Regular", price: 65 }] },
      { id: "sa-3", name: "Aloo Samosa (2 pcs)", variants: [{ name: "Regular", price: 30 }] },
    ],
  },
  {
    id: "smart-bites",
    name: "Smart Bites",
    icon: "🍗",
    items: [
      { id: "sb-1", name: "Chicken Strips (3 pcs)", variants: [{ name: "Mayo", price: 100 }, { name: "Mint", price: 110 }, { name: "Peri Peri Dip", price: 120 }, { name: "Cheese Dip", price: 120 }] },
      { id: "sb-2", name: "Chicken Wings (3 pcs)", variants: [{ name: "Mayo", price: 100 }, { name: "Mint", price: 110 }, { name: "Peri Peri Dip", price: 120 }, { name: "Cheese Dip", price: 120 }] },
      { id: "sb-3", name: "Crab Lollipop (4 pcs)", variants: [{ name: "Mayo", price: 95 }, { name: "Mint", price: 105 }, { name: "Peri Peri Dip", price: 115 }, { name: "Cheese Dip", price: 115 }] },
      { id: "sb-4", name: "Fish Finger (4 pcs)", variants: [{ name: "Mayo", price: 100 }, { name: "Mint", price: 110 }, { name: "Peri Peri Dip", price: 120 }, { name: "Cheese Dip", price: 120 }] },
    ],
  },
  {
    id: "sweet-corn",
    name: "Sweet Corn",
    icon: "🌽",
    items: [
      { id: "sc-1", name: "Sweet Corn", variants: [{ name: "Regular", price: 35 }] },
      { id: "sc-2", name: "Sweet Corn Peri Peri", variants: [{ name: "Regular", price: 40 }] },
      { id: "sc-3", name: "Sweet Corn with Cheese", variants: [{ name: "Regular", price: 50 }] },
    ],
  },
  {
    id: "chat",
    name: "Chat",
    icon: "🥘",
    items: [
      { id: "ch-1", name: "Kaalan", variants: [{ name: "Regular", price: 40 }] },
      { id: "ch-2", name: "Egg Kaalan", variants: [{ name: "Regular", price: 45 }] },
    ],
  },
  {
    id: "lassi",
    name: "Lassi",
    icon: "🥛",
    items: [
      { id: "ls-1", name: "Sweet Lassi", variants: [{ name: "Half Sugar", price: 60 }, { name: "Normal Sugar", price: 60 }] },
      { id: "ls-2", name: "Salt Lassi", variants: [{ name: "Half Sugar", price: 60 }, { name: "Normal Sugar", price: 60 }] },
      { id: "ls-3", name: "Rose Lassi", variants: [{ name: "Half Sugar", price: 70 }, { name: "Normal Sugar", price: 70 }] },
      { id: "ls-4", name: "Strawberry Lassi", variants: [{ name: "Half Sugar", price: 70 }, { name: "Normal Sugar", price: 70 }] },
      { id: "ls-5", name: "Mango Lassi", variants: [{ name: "Half Sugar", price: 70 }, { name: "Normal Sugar", price: 70 }] },
      { id: "ls-6", name: "Black Current Lassi", variants: [{ name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ls-7", name: "Blueberry Lassi", variants: [{ name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ls-8", name: "Pineapple Lassi", variants: [{ name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
      { id: "ls-9", name: "Banana Lassi", variants: [{ name: "Half Sugar", price: 80 }, { name: "Normal Sugar", price: 80 }] },
    ],
  },
  {
    id: "soup",
    name: "Soup",
    icon: "🍲",
    items: [
      { id: "sp-1", name: "Veg Soup", variants: [{ name: "Normal Pack", price: 30 }, { name: "Hot Flask Pack", price: 54 }] },
      { id: "sp-2", name: "Sweet Corn Soup", variants: [{ name: "Normal Pack", price: 30 }, { name: "Hot Flask Pack", price: 54 }] },
      { id: "sp-3", name: "Garlic Soup", variants: [{ name: "Normal Pack", price: 30 }, { name: "Hot Flask Pack", price: 54 }] },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    icon: "🥪",
    items: [
      { id: "sw-1", name: "Plain Sandwich", variants: [{ name: "Normal", price: 40 }, { name: "Peri Peri", price: 50 }, { name: "Chilly Garlic", price: 50 }] },
      { id: "sw-2", name: "Veg Sandwich", variants: [{ name: "Normal", price: 60 }, { name: "Peri Peri", price: 70 }, { name: "Chilly Garlic", price: 70 }] },
      { id: "sw-3", name: "Cheese Chilly Sandwich", variants: [{ name: "Normal", price: 60 }, { name: "Peri Peri", price: 70 }, { name: "Chilly Garlic", price: 70 }] },
      { id: "sw-4", name: "Paneer Sandwich", variants: [{ name: "Normal", price: 90 }, { name: "Peri Peri", price: 100 }, { name: "Chilly Garlic", price: 100 }] },
      { id: "sw-5", name: "Paneer Corn Sandwich", variants: [{ name: "Normal", price: 90 }, { name: "Peri Peri", price: 100 }, { name: "Chilly Garlic", price: 100 }] },
      { id: "sw-6", name: "Mexican Cheese Sandwich", variants: [{ name: "Normal", price: 100 }] },
      { id: "sw-7", name: "Corn Cheese Sandwich", variants: [{ name: "Normal", price: 80 }, { name: "Peri Peri", price: 90 }, { name: "Chilly Garlic", price: 90 }] },
      { id: "sw-8", name: "Chicken Sandwich", variants: [{ name: "Normal", price: 90 }, { name: "Peri Peri", price: 100 }, { name: "Chilly Garlic", price: 100 }] },
      { id: "sw-9", name: "Chicken Tikka Sandwich", variants: [{ name: "Normal", price: 110 }, { name: "Peri Peri", price: 120 }, { name: "Chilly Garlic", price: 120 }] },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    icon: "🍝",
    items: [
      { id: "pa-w", name: "White Pasta", variants: [{ name: "Mix Veg", price: 120 }, { name: "Sweet Corn", price: 130 }, { name: "Paneer", price: 140 }, { name: "Chicken", price: 140 }] },
      { id: "pa-r", name: "Red Pasta", variants: [{ name: "Mix Veg", price: 120 }, { name: "Sweet Corn", price: 130 }, { name: "Paneer", price: 140 }, { name: "Chicken", price: 140 }] },
    ],
  },
  {
    id: "roll",
    name: "Rolls",
    icon: "🌯",
    items: [
      { id: "rl-1", name: "Veg Roll (3 pcs)", variants: [{ name: "Sauce", price: 65 }, { name: "Peri Peri Dip", price: 85 }, { name: "Chilli Garlic Dip", price: 85 }, { name: "Pan Masala Fry", price: 85 }] },
      { id: "rl-2", name: "Paneer Roll (2 pcs)", variants: [{ name: "Sauce", price: 65 }, { name: "Peri Peri Dip", price: 85 }, { name: "Chilli Garlic Dip", price: 85 }, { name: "Pan Masala Fry", price: 85 }] },
      { id: "rl-3", name: "Chicken Roll (2 pcs)", variants: [{ name: "Sauce", price: 55 }, { name: "Mayo", price: 55 }, { name: "Peri Peri Dip", price: 75 }, { name: "Chilli Garlic Dip", price: 75 }, { name: "Pan Masala Fry", price: 75 }] },
    ],
  },
  {
    id: "cutlet",
    name: "Cutlet",
    icon: "🥙",
    items: [
      { id: "ct-1", name: "Veg Cutlet (3 pcs)", variants: [{ name: "Sauce", price: 65 }, { name: "Mint Chutney", price: 75 }, { name: "Peri Peri Dip", price: 85 }, { name: "Chilli Garlic Dip", price: 85 }] },
      { id: "ct-2", name: "Aloo Tikki Cutlet (2 pcs)", variants: [{ name: "Sauce", price: 50 }, { name: "Mint Chutney", price: 50 }, { name: "Peri Peri Dip", price: 70 }, { name: "Chilli Garlic Dip", price: 70 }] },
      { id: "ct-3", name: "Mushroom Cutlet (2 pcs)", variants: [{ name: "Sauce", price: 65 }, { name: "Mint Chutney", price: 75 }, { name: "Peri Peri Dip", price: 85 }] },
      { id: "ct-4", name: "Paneer Cutlet (2 pcs)", variants: [{ name: "Sauce", price: 65 }, { name: "Mint Chutney", price: 75 }, { name: "Peri Peri Dip", price: 85 }] },
      { id: "ct-5", name: "Chicken Cutlet (2 pcs)", variants: [{ name: "Sauce", price: 55 }, { name: "Mayo", price: 55 }, { name: "Peri Peri Dip", price: 75 }] },
    ],
  },
  {
    id: "wrap",
    name: "Wraps",
    icon: "🌮",
    items: [
      { id: "wr-1", name: "Veg Wrap", variants: [{ name: "Regular", price: 90 }] },
      { id: "wr-2", name: "Paneer Wrap", variants: [{ name: "Regular", price: 100 }] },
      { id: "wr-3", name: "Mushroom Wrap", variants: [{ name: "Regular", price: 100 }] },
      { id: "wr-4", name: "Chicken Wrap", variants: [{ name: "Regular", price: 100 }] },
    ],
  },
  {
    id: "nuggets",
    name: "Nuggets",
    icon: "🍗",
    items: [
      { id: "ng-1", name: "Veg Nuggets (5 pcs)", variants: [{ name: "Sauce/Mayo", price: 65 }, { name: "Mint Chutney", price: 65 }, { name: "Peri Peri Dip", price: 85 }, { name: "Chilli Garlic Dip", price: 85 }] },
      { id: "ng-2", name: "Cheese Corn Nuggets (5 pcs)", variants: [{ name: "Sauce/Mayo", price: 85 }, { name: "Mint Chutney", price: 85 }, { name: "Peri Peri Dip", price: 105 }, { name: "Chilli Garlic Dip", price: 105 }] },
      { id: "ng-3", name: "Mushroom Nuggets (5 pcs)", variants: [{ name: "Sauce/Mayo", price: 85 }, { name: "Mint Chutney", price: 85 }, { name: "Peri Peri Dip", price: 105 }, { name: "Chilli Garlic Dip", price: 105 }] },
      { id: "ng-4", name: "Chicken Nuggets (5 pcs)", variants: [{ name: "Mayo", price: 100 }, { name: "Peri Peri Dip", price: 120 }, { name: "Chilli Garlic Dip", price: 120 }] },
    ],
  },
  {
    id: "popcorn",
    name: "Popcorn",
    icon: "🍿",
    items: [
      { id: "pc-1", name: "Chilly Garlic Popcorn (100g)", variants: [{ name: "Sauce", price: 85 }, { name: "Pan Masala Fry", price: 105 }, { name: "Peri Peri Dip", price: 105 }] },
      { id: "pc-2", name: "Paneer Popcorn", variants: [{ name: "Sauce", price: 75 }, { name: "Pan Masala Fry", price: 95 }, { name: "Peri Peri Dip", price: 95 }] },
      { id: "pc-3", name: "Chicken Popcorn (100g)", variants: [{ name: "Mayo", price: 90 }, { name: "Pan Masala Fry", price: 110 }, { name: "Peri Peri Dip", price: 110 }] },
    ],
  },
  {
    id: "cheese-ball",
    name: "Cheese Balls",
    icon: "🧀",
    items: [
      { id: "cb-1", name: "Potato Cheese Balls (4 pcs)", variants: [{ name: "Sauce", price: 55 }, { name: "Pan Masala Fry", price: 75 }, { name: "Peri Peri Dip", price: 75 }] },
      { id: "cb-2", name: "Chicken Cheese Balls (4 pcs)", variants: [{ name: "Sauce/Mayo", price: 65 }, { name: "Pan Masala Fry", price: 85 }, { name: "Peri Peri Dip", price: 85 }] },
    ],
  },
  {
    id: "juice",
    name: "Juice",
    icon: "🧃",
    items: [
      { id: "jc-1", name: "Lemon Soda (400ml)", variants: [{ name: "Salt", price: 40 }, { name: "Sweet", price: 40 }, { name: "Sweet & Salt", price: 40 }] },
      { id: "jc-2", name: "Lemon Juice (400ml)", variants: [{ name: "Salt", price: 35 }, { name: "Sweet", price: 35 }, { name: "Sweet & Salt", price: 35 }] },
      { id: "jc-3", name: "Lemon Mint (400ml)", variants: [{ name: "Salt & Sweet", price: 40 }, { name: "Sweet", price: 40 }] },
      { id: "jc-4", name: "Lemon Jaljeera (400ml)", variants: [{ name: "Regular", price: 40 }] },
      { id: "jc-5", name: "Sweet Lime (400ml)", variants: [{ name: "Normal Sugar", price: 70 }, { name: "Half Sugar", price: 70 }, { name: "Without Sugar", price: 70 }] },
      { id: "jc-6", name: "Apple Juice (400ml)", variants: [{ name: "Normal Sugar", price: 70 }, { name: "Half Sugar", price: 70 }, { name: "Without Sugar", price: 70 }] },
      { id: "jc-7", name: "Watermelon Juice (400ml)", variants: [{ name: "Normal Sugar", price: 50 }, { name: "Half Sugar", price: 50 }, { name: "Without Sugar", price: 50 }] },
      { id: "jc-8", name: "Grape Juice (400ml)", variants: [{ name: "Normal Sugar", price: 50 }, { name: "Half Sugar", price: 50 }, { name: "Without Sugar", price: 50 }] },
      { id: "jc-9", name: "Musk Melon Juice (400ml)", variants: [{ name: "Normal Sugar", price: 50 }, { name: "Half Sugar", price: 50 }, { name: "Without Sugar", price: 50 }] },
      { id: "jc-10", name: "Pineapple Juice (400ml)", variants: [{ name: "Normal Sugar", price: 50 }, { name: "Half Sugar", price: 50 }, { name: "Without Sugar", price: 50 }] },
      { id: "jc-11", name: "Avocado Juice (400ml)", variants: [{ name: "Normal Sugar", price: 90 }, { name: "Half Sugar", price: 90 }, { name: "Without Sugar", price: 90 }] },
      { id: "jc-12", name: "ABC Juice (400ml)", variants: [{ name: "Normal Sugar", price: 90 }, { name: "Half Sugar", price: 90 }, { name: "Without Sugar", price: 90 }] },
      { id: "jc-13", name: "Nanari Soda Mix (450ml)", variants: [{ name: "Salt & Sweet", price: 50 }, { name: "Sweet", price: 50 }] },
      { id: "jc-14", name: "Nanari Sharbat (450ml)", variants: [{ name: "Salt & Sweet", price: 40 }, { name: "Sweet", price: 40 }] },
    ],
  },
];
