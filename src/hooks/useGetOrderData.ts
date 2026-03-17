import useOrderStore from "@/store/useOrderStore";
import useSettingStore from "@/store/useSettingStore";
import { useMemo} from "react";

/**
 * @description determine which data to return based on showDummy state
 * @returns OrderDataType[] || DummyDataType[]
 */

const useGetOrderData = () => {
    const isDummy = useSettingStore((state)=> state.showDummy)
    const res = useOrderStore((state)=> isDummy ? state.dummyOrder : state.order)
    return useMemo(()=> res, [isDummy,res])
}
export default useGetOrderData;