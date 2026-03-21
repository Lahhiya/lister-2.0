import { generateDummyData } from "@/assets/data/dummyGen";
import { OrderDataType } from "@/schemas/orderDataType";
import { create } from "zustand";
interface OrderState {
  order: OrderDataType[];
  dummyOrder: OrderDataType[];
}

const useOrderStore = create<OrderState>((set, get) => ({
  order: [],
  dummyOrder: generateDummyData(50) as OrderDataType[],
}));

export default useOrderStore;
