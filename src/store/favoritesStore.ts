import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Item {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
}

interface FavoritesStore {
  items: Item[] | [];

  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          let updatedItems = state.items;
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            updatedItems = state.items;
          } else {
            updatedItems = [...state.items, item];
          }

          return { items: updatedItems };
        }),

      removeItem: (id) =>
        set((state) => {
          const updatedItems = state.items.filter((i) => i.id !== id);

          return { items: updatedItems };
        }),
    }),
    { name: "pizza-favorites" },
  ),
);
