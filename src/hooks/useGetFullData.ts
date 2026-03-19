import { findById } from "@/helper/findByData"
import useGetOrderData from "./useGetOrderData"
import transformFullData from "@/helper/format/format.detail"


const useGetFullData = (id:string | number) => {
    const targetid = typeof id === 'string' ? parseInt(id) : id
    const data = useGetOrderData()
    const getData = findById(data,targetid)

    if(!getData){
        return null
    }

    const res = transformFullData(getData)

    return res
}

export default useGetFullData