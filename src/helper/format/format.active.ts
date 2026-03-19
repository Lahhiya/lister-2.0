import { DisplayInfoType } from "@/schemas/displayLatest";
import { DummyDataType, OrderDataType } from "@/schemas/orderDataType";

const formatActive = (
  input: OrderDataType[] | DummyDataType[],
): DisplayInfoType[] => {
  const res = input.map((item) => ({
    id: item.id,
    uuid: item.uuid,
    name: item.name,
    progress: `${item.progress}/${item.total}`,
  }));
  return res;
};

export default formatActive;
