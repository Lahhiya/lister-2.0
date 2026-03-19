import { Text, View,Button } from "react-native";
import { useLocalSearchParams ,router } from "expo-router";
import useGetFullData from "@/hooks/useGetFullData";

export default function DetailById() {
    const {id} = useLocalSearchParams();
    const data = useGetFullData(id?.toString())

    return (
      <View className="w-full h-screen bg-slate-100 justify-center items-center ">
        <View className="items-center gap-2 bg-white h-80 w-[90%] p-5 rounded-xl">
          <Text className="text-2xl font-bold border-b-2 border-slate-200">
            Detail Pesanan :
          </Text>
          <View className="flex-col w-full gap-2">
            <View className="flex-row justify-between">
              <Text>name :</Text>
              <Text>{data?.name}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>uuid :</Text>
              <Text>{data?.uuid}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>total :</Text>
              <Text>{data?.total}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>status :</Text>
              <Text>{data?.status}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>message :</Text>
              <Text>{data?.message}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>created at :</Text>
              <Text>{data?.createdAt}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>finish at :</Text>
              <Text>{data?.finishAt}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>history :</Text>
              <Text>{data?.history}</Text>
            </View>
          </View>
          <Button title="kembali" onPress={() => router.back()} />
        </View>
      </View>
    );
}