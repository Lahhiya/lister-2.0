import { DummyDataType, OrderDataType } from "@/schemas/orderDataType";

const filterByStatus = (input: (OrderDataType | DummyDataType)[], status: number[]) => {
  return input.filter((item) => status.includes(item.status));
};

const filterByActive = (input: (OrderDataType | DummyDataType)[]) => {
  return filterByStatus(input, [0, 1]);
};

const filterByFinish = (input: (OrderDataType | DummyDataType)[]) => {
  return filterByStatus(input, [2]);
};

export { filterByActive, filterByFinish };
