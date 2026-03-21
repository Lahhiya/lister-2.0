import { Text } from "gs/ui/text";
import { Box } from "gs/ui/box";
import useGetOrderData from "@/hooks/useGetOrderData";
import { filterByFinish } from "@/helper/filterByData";
import { Button } from "gs/ui/button";
import { Info, Settings } from "lucide-react-native";
import { router } from "expo-router";
export default function HomeInfoStats() {

    const dataInput = useGetOrderData();
    const data = filterByFinish(dataInput);
    const length = data.length;
    const amount = data.reduce((acc, curr) => acc + Number(curr.total), 0);
    const res = {
      finishAmount: length,
      totalAmount: amount,
    };

  return (
    <Box className="h-[100px] flex-row justify-between items-center px-5 w-full">
      <Box>
        <Text className="text-2xl font-bold text-slate-800">
          {res.finishAmount} Orders Completed
        </Text>
        <Text className="font-semibold text-slate-500 text-xl">
          Total Items : {res.totalAmount} (Stk)
        </Text>
      </Box>
      <Box>
        <Button onPress={()=> router.push('/setting')} size="lg" variant="outline" className={`rounded-full p-3.5 bg-white border-2 border-slate-300 `}>
            <Info size={24}/>
          </Button>
      </Box>
    </Box>
  );
}
