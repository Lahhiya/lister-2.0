import { Text, View } from "react-native";
import { Stack } from "expo-router"; // Import ini

export default function Index() {
  return (
    <View className="mt-10">
      <Stack.Screen options={{ headerShown: false }} />

      <Text className="text-amber-400 text-4xl font-bold">ini text</Text>
    </View>
  );
}
