import { DummyDataType, OrderDataType } from "@/schemas/orderDataType";
import useGetOrderData from "./useGetOrderData";

const useFilteredbyStatus = (status: number[]) => {
  const data = useGetOrderData();
  const res = data.filter((item: OrderDataType | DummyDataType) =>
    status.includes(item.status),
  );
  return res;
};

export default useFilteredbyStatus;
