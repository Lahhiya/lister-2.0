import AddButton from "@/components/buttons/AddButton";
import HomeInfo from "@/components/home/HomeInfo";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-slate-100 relative">
      <ScrollView className="flex-1" contentContainerClassName="p-4 pb-24">
        <HomeInfo />
      </ScrollView>
      <View className="absolute right-6 bottom-6 flex-col gap-5 z-10">
        <AddButton />
      </View>
    </View>
  );
}
