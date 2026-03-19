import { filterByActive, filterByFinish } from "@/helper/filterByData";
import transformDisplay from "@/helper/format/format.active";
import { DisplayInfoType } from "@/schemas/displayLatest";
import { DummyDataType, OrderDataType } from "@/schemas/orderDataType";
import { create } from "zustand";

interface HomeInfoState {
  orderActive: OrderDataType[] | DummyDataType[];
  orderFinish: OrderDataType[] | DummyDataType[];
  setOrderActive: (input: OrderDataType[] | DummyDataType[]) => void;
  setOrderFinish: (input: OrderDataType[] | DummyDataType[]) => void;
  displayInfo: () => DisplayInfoType[];
  displayAmount: () => number;
}

const useHomeInfoStore = create<HomeInfoState>((set, get) => ({
  orderActive: [],
  orderFinish: [],
  setOrderActive: (input: OrderDataType[] | DummyDataType[]) =>
    set(() => {
      const res = filterByActive(input);
      return { orderActive: res };
    }),

  setOrderFinish: (input: OrderDataType[] | DummyDataType[]) =>
    set(() => {
      const res = filterByFinish(input);
      return { orderFinish: res };
    }),

  displayInfo: () => {
    const res = transformDisplay(get().orderActive);
    return res;
  },

  displayAmount: () => {
    const res = get().displayInfo().length;
    return res;
  },
}));

export default useHomeInfoStore;
