import useFilteredbyStatus from "./useFilteredbyStatus";
import { DisplayInfoType } from "@/schema/displayInfoType";

type res = () => {
    stat : number,
    data : DisplayInfoType[]
}


const useDisplayInfo: res = () => {
    const data = useFilteredbyStatus([0,1])
    const newobj = data.map((item) => {
        return {
            id : item.id,
            uuid : item.uuid,
            name : item.name,
            progress : `${item.progress}/${item.total}`,
            status : item.status
        }
    })

    const res = {
        stat : newobj.length,
        data : newobj
    }
    return res
}

export default useDisplayInfo