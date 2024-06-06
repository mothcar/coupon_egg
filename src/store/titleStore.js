import { create } from "zustand";

export const useTitleStore = create((set) => ({
  common_title: "common title",
  setTitle: (common_title) => set({ common_title: common_title }),
}));
