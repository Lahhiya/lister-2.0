import { Text, View } from "react-native";
import ListOrder from "@/components/list/ListOrderContainer";
import SearchButton from "@/components/buttons/SearchButton";

export default function listTab() {
  return (
    <View>
      <ListOrder />
      <SearchButton />
    </View>
  );
}