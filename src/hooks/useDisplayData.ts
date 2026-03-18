import useGetOrderData from "./useGetOrderData"
import formatOrderLists from "@/helper/format/format.OrderLists"
import useSettingStore from "@/store/useSettingStore"
import { sortById,sortByName,sortByStatus,sortByTotal } from "@/helper/sortByData"
import { orderListType } from "@/schema/orderListType"

const useDisplayData = () => {
    const orderData = useGetOrderData()
    const formattedData = orderData.map((item) => formatOrderLists(item)).filter((item): item is orderListType => item !== null)
    const sortType = useSettingStore((state)=> state.sortBy)
    switch(sortType){
        case "none":
            return sortById(formattedData)
        case "name":
            return sortByName(formattedData)
        case "status":
            return sortByStatus(formattedData)
        case "amount":
            return sortByTotal(formattedData)
        default:
            return sortById(formattedData)
    }
}
export default useDisplayData