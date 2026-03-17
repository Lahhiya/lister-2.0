import { View, Text, ScrollView } from "react-native";
import useDisplayInfo from "@/hooks/useDisplayInfo";
import HomeActiveItem from "./HomeActiveItem";
import useDisplayStat from "@/hooks/useDisplaystat";

export default function HomeInfo() {
  const info = useDisplayInfo()
  const stat = useDisplayStat()

  return (
    <View className="w-full pb-10">
      <View className="gap-5">
        <View className="bg-white rounded-xl p-5 shadow-sm">
          <Text className="text-slate-800 text-lg font-semibold">{stat.finishAmount} pesanan selesai</Text>
          <Text className="text-slate-500 mt-1">dengan total pesanan {stat.totalAmount} (stk)</Text>
        </View>
        <View className="bg-white p-5 rounded-xl shadow-sm">
          <Text className="text-2xl font-bold mb-4 text-slate-800">{info.stat} orders left</Text>
          <View className="w-full">
            <View className="flex-row items-center border-b border-slate-200 pb-3 mb-2">
              <Text className="flex-1 font-semibold text-slate-600 text-center">Nama</Text>
              <Text className="flex-1 font-semibold text-slate-600 text-center">Total</Text>
              <Text className="flex-1 font-semibold text-slate-600 text-center"> </Text>
            </View>
            <View className="w-full flex-col gap-2">
              {info.data.map((item) => (
                <HomeActiveItem key={item.id} itemData={item} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}