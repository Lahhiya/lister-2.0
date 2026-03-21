import { OrderDataType } from "@/schemas/orderDataType";

const filterByStatus = (input: OrderDataType[], status: number[]) => {
  return input.filter((item) => status.includes(item.status));
};

const filterByActive = (input: OrderDataType[]) => {
  return filterByStatus(input, [0, 1]);
};

const filterByFinish = (input: OrderDataType[]) => {
  return filterByStatus(input, [2]);
};

export { 
  filterByActive, 
  filterByFinish,
  filterByStatus
};
