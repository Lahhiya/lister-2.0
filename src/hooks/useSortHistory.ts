import { formatHistory } from "@/helper/formatBydata";
import {
  sortById,
  sortByName,
  sortByStatus,
  sortByTotal,
} from "@/helper/sortByData";
import useSettingStore from "@/store/useSettingStore";
import useGetOrderData from "./useGetOrderData";

const useSortHistory = () => {
  const orderData = useGetOrderData();
  const formattedData = formatHistory(orderData);
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
export default useSortHistory;
