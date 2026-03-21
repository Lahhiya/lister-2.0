import { filterByActive, filterByFinish } from "@/helper/filterByData";
import { formatLatest, LatestFormatType } from "@/helper/formatBydata";
import { OrderDataType } from "@/schemas/orderDataType";
import { create } from "zustand";

interface HomeInfoState {
  orderActive: OrderDataType[];
  orderFinish: OrderDataType[];
  setOrderActive: (input: OrderDataType[]) => void;
  setOrderFinish: (input: OrderDataType[]) => void;
  displayInfo: () => LatestFormatType[];
  displayAmount: () => number;
}

const useHomeInfoStore = create<HomeInfoState>((set, get) => ({
  orderActive: [],
  orderFinish: [],
  setOrderActive: (input: OrderDataType[]) =>
    set(() => {
      const res = filterByActive(input);
      return { orderActive: res };
    }),

  setOrderFinish: (input: OrderDataType[]) =>
    set(() => {
      const res = filterByFinish(input);
      return { orderFinish: res };
    }),

  displayInfo: () => {
    const res = formatLatest(get().orderActive);
    return res;
  },

  displayAmount: () => {
    const res = get().displayInfo().length;
    return res;
  },
}));

export default useHomeInfoStore;
