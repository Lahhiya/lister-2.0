import { historyOrderType } from "@/schemas/historyType";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HistoryItem({ item }: { item: historyOrderType }) {
  let stats;
  switch (item.status) {
    case 0:
      stats = "❌";
      break;
    case 1:
      stats = "⏳";
      break;
    case 2:
      stats = "✔";
      break;
  }

  return (
    <Link href={`/detail/${item.id}` as any} asChild>
      <TouchableOpacity
        activeOpacity={0.8}
        className="w-full h-16 flex-row bg-white border-2 rounded-xl my-1 border-slate-400 justify-center items-center"
      >
        <View className="w-1/6 flex-row justify-center items-center">
          <Text className="text-2xl">{stats}</Text>
        </View>
        <View className="w-5/6 flex-row gap-2 justify-center items-center">
          <View>
            <Text>Nama : {item.name}</Text>
            <Text>jumlah : {item.total}</Text>
          </View>
          <View>
            <Text>index : {item.id}</Text>
            <Text> added : {item.added}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
