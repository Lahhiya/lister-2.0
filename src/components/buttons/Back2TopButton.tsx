import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

export default function Back2TopButton() {
  return (
    <TouchableOpacity className="h-16 w-16 justify-center items-center border-2 border-gray-800 rounded-xl">
      <Link href="/">
        <Text className="text-3xl">^</Text>
      </Link>
    </TouchableOpacity>
  );
}