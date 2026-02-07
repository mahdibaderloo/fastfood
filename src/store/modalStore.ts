import { ReactNode } from "react";
import { create } from "zustand";

interface Modal {
  title: string;
  isOpen: boolean;
  content?: ReactNode | null;

  setTitle: (title: string) => void;
  onOpen: () => void;
  onClose: () => void;
  setContent?: (content: ReactNode | null) => void | null;
}

export const useModalStore = create<Modal>((set) => ({
  title: "",
  isOpen: false,
  content: null,

  setTitle: (title) => set({ title }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setContent: (content) => set({ content }),
}));
