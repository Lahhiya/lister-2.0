import { View,Text } from "react-native";
import Chart2_3 from "@/components/dummy/Chart2_3";
import Chart3_2 from "@/components/dummy/Chart3_2";

export default function HomeChart(){
    return (
      <View className="w-full justify-center items-center">
        <Chart2_3></Chart2_3>
        <Chart3_2></Chart3_2>
        <Chart3_2></Chart3_2>
      </View>
    );
}