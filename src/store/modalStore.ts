import { ReactNode } from "react";
import { create } from "zustand";

interface OpenModalPayload {
  title: string;
  content?: ReactNode;
}

interface ModalStore {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;

  open: (payload: OpenModalPayload) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  title: "",
  content: null,

  open: ({ title, content }) =>
    set({
      isOpen: true,
      title,
      content: content ?? null,
    }),

  close: () =>
    set({
      isOpen: false,
      title: "",
      content: null,
    }),
}));
