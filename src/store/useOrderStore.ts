import { DummyDataType, OrderDataType } from "@/schema/orderDataType";
import { create } from "zustand";
import { generateDummyData } from "@/assets/data/dummyGen";
interface OrderState {
  order: OrderDataType[];
  dummyOrder: DummyDataType[];
}

const useOrderStore = create<OrderState>((set, get) => ({
  order: [],
  dummyOrder: generateDummyData(50) as DummyDataType[]
}));

export default useOrderStore;