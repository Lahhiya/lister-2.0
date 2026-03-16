import { View, Text } from "react-native";
export default function Chart3_2() {
    return (
        <View className="">
            <View>
                <Text className="text-2xl"> judul</Text>
            </View>
            <View className="w-full flex-row">
                <View className="w-3/5 h-32 justify-center items-center border-2 bg-slate-200">
                    <Text>data 1</Text>
                </View>
                <View className="w-2/5 h-32 justify-center items-center border-2 bg-slate-200">
                    <Text>data 2</Text>
                </View>
            </View>
        </View>
    )
}