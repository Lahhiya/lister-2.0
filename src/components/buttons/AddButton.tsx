import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

export default function AddButton() {
  return (
    <Link href="/modalForm" asChild>
      <TouchableOpacity className="h-16 w-16 bg-blue-600 justify-center items-center rounded-full shadow-lg shadow-black/30 elevation-5">
        <Text className="text-4xl text-white font-light -mt-1">+</Text>
      </TouchableOpacity>
    </Link>
  );
}