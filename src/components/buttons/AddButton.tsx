import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

export default function AddButton(){
    return (
      <TouchableOpacity className="h-16 w-16 justify-center items-center border-2 border-gray-800 rounded-xl">
        <Link href="/modalForm" >
          <Text className="text-3xl">+</Text>
        </Link>
      </TouchableOpacity>
    );
}