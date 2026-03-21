import { OrderDataType } from "@/schemas/orderDataType";
import { create } from "zustand";

interface SearchState {
  searchQuery: string;
  setSearchQuery: (input: string) => void;
  resetQuery: () => void;

  searchRes: [] | OrderDataType[];
  setSearchRes: (input: [] | OrderDataType[]) => void;
  resetRes: () => void;
}

const useSearchStore = create<SearchState>((set, get) => ({
  searchQuery: "",
  setSearchQuery: (input) => set({ searchQuery: input }),
  resetQuery: () => set({ searchQuery: "" }),

  searchRes: [],
  setSearchRes: (input: [] | OrderDataType[]) => {
    set({ searchRes: input });
  },
  resetRes: () => set({ searchRes: [] }),
}));

export default useSearchStore;
