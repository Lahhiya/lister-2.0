import { DummyDataType,OrderDataType } from "@/schema/orderDataType"
import { orderListType } from "@/schema/orderListType"


const formatOrderLists = (input:DummyDataType | OrderDataType):orderListType | null => {
    if(!input){
        return null
    } else {
        const newObj:orderListType = {
            id : input.id,
            name : input.name,
            added : "anggep aja ada",
            status : input.status,
            total : input.total
        }
        return newObj
    }
}

export default formatOrderLists