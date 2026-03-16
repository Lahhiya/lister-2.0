import { View,Text,Button, TouchableOpacity} from "react-native";
import HomeActiveItem from "./HomeActiveItem";

export default function HomeInfo(){
    return (
      <View className="w-full h-screen justify-center bg-slate-200 relative">
        <View className="gap-5">
          <View className="bg-white rounded-lg p-4">
            <Text>20 pesanan selesai</Text>
            <Text>dengan total pesanan 178.000 (stk)</Text>
          </View>
          <View className="bg-white p-4 rounded-lg">
            <Text className="text-2xl font-bold">3 orders left</Text>
            <View className="">
              <View className="flex-row justify-evenly items-center gap-3 border-b border-slate-700 py-2">
                <Text>Nama</Text>
                <Text>Total</Text>
                <Text>Status</Text>
              </View>
              <HomeActiveItem />
              <HomeActiveItem />
              <HomeActiveItem />
            </View>
          </View>
        </View>
      </View>
    );
}