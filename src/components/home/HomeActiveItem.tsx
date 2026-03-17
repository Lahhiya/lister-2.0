import { View, Text, TouchableOpacity } from "react-native";
import { DisplayInfoType } from "@/schema/displayInfoType";
import { Link } from "expo-router";

export default function HomeActiveItem({ itemData }: { itemData: DisplayInfoType }) {
  return (
    <View className="flex-row items-center border-b border-slate-100 py-3">
      <Text className="flex-1 text-center text-slate-700 font-medium" numberOfLines={1}>
        {itemData.name}
      </Text>
      <Text className="flex-1 text-center text-slate-700 font-medium" numberOfLines={1}>
        {itemData.progress}
      </Text>
      <View className="flex-1 items-center">
        <Link href={`/detail/${itemData.id}` as any} asChild>
          <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-full active:bg-blue-700">
            <Text className="text-white font-medium text-sm">Detail</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}