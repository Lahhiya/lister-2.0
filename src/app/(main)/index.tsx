import dummyData from "@/assets/data/dummyData";
import AddButton from "@/components/buttons/AddButton";
import HomeChart from "@/components/home/HomeChart";
import HomeInfo from "@/components/home/HomeInfo";
import { ScrollView, View } from "react-native";

export default function Index() {

  return (
    <View className="justify-center flex-wrap items-center h-auto relative">
      <ScrollView>
        <HomeInfo></HomeInfo>
        <HomeChart></HomeChart>
        <HomeChart></HomeChart>
      </ScrollView>
      <View className="absolute right-5 bottom-5 flex-col gap-5">
        <AddButton></AddButton>
        {/* <Back2TopButton></Back2TopButton> */}
      </View>
    </View>
  );
}
