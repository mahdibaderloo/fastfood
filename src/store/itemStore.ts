import { create } from "zustand";

interface Item {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
  isFavorite: boolean;
}

interface ItemStore {
  item: Item | {};
  setItem: (Item: Item) => void;
}

export const useItemStore = create<ItemStore>()((set) => ({
  item: {},

  setItem: (item) => set(() => ({ item })),
}));
