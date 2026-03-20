import { historyOrderType } from "@/schemas/historyType";
import { DummyDataType, OrderDataType } from "@/schemas/orderDataType";

const formatHistory = (
  input: DummyDataType | OrderDataType,
): historyOrderType | null => {
  if (!input) {
    return null;
  } else {
    const newObj: historyOrderType = {
      id: input.id,
      name: input.name,
      added: "1 sec ago",
      status: input.status,
      total: input.total,
    };
    return newObj;
  }
};

export default formatHistory;
