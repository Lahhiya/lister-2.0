import { DummyDataType, OrderDataType } from "@/schema/orderDataType";
import { create } from "zustand";
import useSettingStore from "./useSettingStore";

const { displayDummy } = useSettingStore();

interface OrderState {
  order: [] | OrderDataType[];
  dummyOrder: [] | DummyDataType[];
}

const useOrderStore = create<OrderState>((set) => ({
  order: [],
  dummyOrder: [],
}));
