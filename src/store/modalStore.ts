import { create } from "zustand";

interface Modal {
  title: string;
  isOpen: boolean;

  setTitle: (title: string) => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useModalStore = create<Modal>((set) => ({
  title: "",
  isOpen: false,

  setTitle: (title) => set({ title }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
