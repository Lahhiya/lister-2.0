import { Text, View, Button, TextInput } from "react-native";
import { router } from "expo-router";

export default function ModalSearch() {
  return (
    <View className="flex-1 gap-5 items-center justify-center">
      <Text>
        ini modal search
      </Text>
      <TextInput placeholder="mulai mencari..." keyboardType="default"></TextInput>
      <Button title="Batal" onPress={() => router.dismiss()} />
    </View>
  );
}