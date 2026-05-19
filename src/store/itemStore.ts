import { create } from "zustand";
import { Food } from "../types/types";

interface ItemStore {
  item: Food | null;
  setItem: (Item: Food) => void;
}

export const useItemStore = create<ItemStore>()((set) => ({
  item: null,

  setItem: (item) => set(() => ({ item })),
}));
