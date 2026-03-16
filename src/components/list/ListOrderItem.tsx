import { View,Text,TouchableOpacity } from "react-native"
export default function OrderListItem(){
    return(
        <TouchableOpacity className="w-full h-16 flex-row border border-gray-800 bg-blue-200 justify-center items-center">
            <View className="w-1/6 flex-row justify-center items-center">
                <Text>✔</Text>
            </View>
            <View className="w-5/6 flex-row gap-2 justify-center items-center bg-red-300">
            <View>
                <Text>Nama : budi</Text>
                <Text>jumlah : 999</Text>
            </View>
            <View>
                <Text>index : 3</Text>
                <Text> added : 12 hours ago</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}