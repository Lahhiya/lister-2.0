import SearchButton from "@/components/buttons/SearchButton";
import ListOrder from "@/components/history/history.container";
import { View } from "react-native";

export default function listTab() {
  return (
    <View className="h-full bg-slate-200">
      <ListOrder />
      <SearchButton />
    </View>
  );
}
