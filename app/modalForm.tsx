import { Text, View, Button, TextInput } from "react-native";
import { router } from "expo-router";

export default function ModalInput() {
  return (
    <View className="flex-1 gap-5 items-center justify-center">
      <Text className="text-2xl font-bold">
        Tambah Pesanan
      </Text>
      <View className="w-[90%] gap-2 mb-20">
        <TextInput keyboardType="default" placeholder="masukan nama" className="border-2 border-gray-800 rounded-xl"></TextInput>
        <TextInput keyboardType="numeric" placeholder="masukan Index" className="border-2 border-gray-800 rounded-xl"></TextInput>
        <TextInput keyboardType="numeric" placeholder="masukan jumlah pesanan" className="border-2 border-gray-800 rounded-xl"></TextInput>
        <TextInput keyboardType="default" placeholder="tinggalkan Pesan" className="border-2 h-20 border-gray-800 rounded-xl"></TextInput>
      </View>
      <View className="flex-row gap-4">
        <Button title="Batal" onPress={() => router.dismiss()} />
        <Button title="Simpan" onPress={() => router.back()} />
      </View>
    </View>
  );
}