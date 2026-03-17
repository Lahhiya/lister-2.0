import { DisplayInfoType } from "@/schema/displayInfoType";
import { DummyDataType, OrderDataType } from "@/schema/orderDataType";

const transformDisplay = (
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

export default transformDisplay;
