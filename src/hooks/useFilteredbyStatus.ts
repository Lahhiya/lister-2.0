import useGetOrderData from "./useGetOrderData"
import { OrderDataType,DummyDataType } from "@/schema/orderDataType"

const useFilteredbyStatus = (status : number[]) => {
    const data = useGetOrderData()
    const res = data.filter((item : OrderDataType | DummyDataType) => status.includes(item.status))
    return res
}

export default useFilteredbyStatus