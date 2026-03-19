import useSearchStore from "@/store/useSearchStore";
import { searchByName } from "@/helper/searchByData";
import useGetOrderData from "./useGetOrderData";
import { useCallback} from "react";

const useSearchData = () => {
    const {searchQuery,setSearchRes,resetQuery} = useSearchStore()
    const data = useGetOrderData()

    const handleSearch = useCallback(()=> {
        if(searchQuery.trim()){
            const res = searchByName(data,searchQuery)
            setSearchRes(res)
            resetQuery()
        }
    },[searchQuery,data])
    return {handleSearch}
}
export default useSearchData