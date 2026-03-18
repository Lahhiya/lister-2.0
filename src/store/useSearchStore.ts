import { create } from "zustand";
import { OrderDataType, DummyDataType } from "@/schema/orderDataType"; 

interface SearchState {
    searchQuery : string,
    setSearchQuery : (input : string) => void
    resetQuery : () => void

    searchRes : [] | OrderDataType[] | DummyDataType[]
    setSearchRes : (input : [] | OrderDataType[] | DummyDataType[]) => void
    resetRes : () => void
}

const useSearchStore = create<SearchState>((set,get) => ({
    searchQuery : "",
    setSearchQuery : (input) => set({searchQuery : input}),
    resetQuery : () => set({searchQuery : ""}),


    searchRes : [],
    setSearchRes : (input : [] | OrderDataType[] | DummyDataType[]) => {set({searchRes : input})},
    resetRes : () => set({searchRes : []})
}));

export default useSearchStore;