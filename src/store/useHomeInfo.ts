import { create } from "zustand";
import filterByActive from "@/helper/filterByActive";
import { DummyDataType,OrderDataType } from "@/schema/orderDataType";
import { DisplayInfoType } from "@/schema/displayInfoType";
import transformDisplay from "@/helper/transformDisplay";
import getLength from "@/helper/getLegth";
import filterByFinish from "@/helper/filterByFinish";


interface HomeInfoState {
    orderActive : OrderDataType[] | DummyDataType[];
    orderFinish : OrderDataType[] | DummyDataType[];
    setOrderActive : (input : OrderDataType[] | DummyDataType[]) => void;
    setOrderFinish : (input : OrderDataType[] | DummyDataType[]) => void;
    displayInfo : () => DisplayInfoType[];
    displayAmount : () => number;
}

const useHomeInfoStore = create<HomeInfoState>((set,get) => ({
    orderActive : [],
    orderFinish : [],
    setOrderActive : (input : OrderDataType[] | DummyDataType[]) =>(
        set(() => {
            const res = filterByActive(input)
            return {orderActive : res}
        })
    ),

    setOrderFinish : (input : OrderDataType[] | DummyDataType[]) =>(
        set(() => {
            const res = filterByFinish(input)
            return {orderFinish : res}
        })
    ),


    displayInfo : () => {
        const res = transformDisplay(get().orderActive)
        return res
    },


    displayAmount : () => {
      const res = getLength(get().displayInfo())
      return res
    }


    
}))

export default useHomeInfoStore