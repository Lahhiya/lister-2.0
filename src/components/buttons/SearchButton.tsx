import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

export default function SearchButton(){
    return (
      <TouchableOpacity className="absolute right-5 bottom-5 h-16 w-16 justify-center items-center border-2 border-gray-800 rounded-xl">
        <Link href="/modalSearch" >
          <Text className="text-3xl">🔍</Text>
        </Link>
      </TouchableOpacity>
    );
}