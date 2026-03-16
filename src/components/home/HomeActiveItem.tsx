import { View,Text,TouchableOpacity } from "react-native";

export default function HomeActiveItem() {
    return(
        <View className="flex-row justify-evenly items-center gap-3 border-b border-slate-700 py-2">
            <Text>budi</Text>
            <Text>1000</Text>
            <TouchableOpacity className="bg-blue-500 p-2 rounded-lg">
                <Text className="text-white">detail</Text>
            </TouchableOpacity>
        </View>
    )
}