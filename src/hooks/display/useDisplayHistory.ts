import formatOrderLists from "@/helper/format/format.history";
import {
  sortById,
  sortByName,
  sortByStatus,
  sortByTotal,
} from "@/helper/sortByData";
import { historyOrderType } from "@/schemas/historyType";
import useSettingStore from "@/store/useSettingStore";
import useGetOrderData from "../useGetOrderData";

const useDisplayHistory = () => {
  const orderData = useGetOrderData();
  const formattedData = orderData
    .map((item) => formatOrderLists(item))
    .filter((item): item is historyOrderType => item !== null);
  const sortType = useSettingStore((state) => state.sortBy);
  switch (sortType) {
    case "none":
      return sortById(formattedData);
    case "name":
      return sortByName(formattedData);
    case "status":
      return sortByStatus(formattedData);
    case "amount":
      return sortByTotal(formattedData);
    default:
      return sortById(formattedData);
  }
};
export default useDisplayHistory;
