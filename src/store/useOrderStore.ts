import { generateDummyData } from "@/assets/data/dummyGen";
import { DummyDataType, OrderDataType } from "@/schemas/orderDataType";
import { create } from "zustand";
interface OrderState {
  order: OrderDataType[];
  dummyOrder: DummyDataType[];
}

const useOrderStore = create<OrderState>((set, get) => ({
  order: [],
  dummyOrder: generateDummyData(50) as DummyDataType[],
}));

export default useOrderStore;
