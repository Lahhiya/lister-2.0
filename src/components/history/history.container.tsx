import HistoryItem from "@/components/history/History.item";
import useDisplayData from "@/hooks/display/useDisplayHistory";
import useSettingStore from "@/store/useSettingStore";
import { Button, FlatList, Text, View } from "react-native";

export default function HistoryContainer() {
  const data = useDisplayData();
  const setSort = useSettingStore((state) => state.setSortBy);
  return (
    <View className="h-full flex-col">
      <View className="flex-row justify-center">
        <View className="flex-1">
          <Button title="nama" onPress={() => setSort("name")}></Button>
        </View>
        <View className="flex-1">
          <Button title="status" onPress={() => setSort("status")}></Button>
        </View>
        <View className="flex-1">
          <Button title="jumlah" onPress={() => setSort("amount")}></Button>
        </View>
        <View className="flex-1">
          <Button title="reset" onPress={() => setSort("none")}></Button>
        </View>
      </View>
      <View>
        <Text className="text-3xl m-3">daftar pesanan :</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <HistoryItem item={item!} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
