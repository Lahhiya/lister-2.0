import { Text, View, Button, TextInput,ScrollView} from "react-native";
import { router } from "expo-router";
import useSearchStore from "@/store/useSearchStore";
import useSearchData from "@/hooks/useSearchData";

export default function ModalSearch() {
  const {searchQuery,setSearchQuery,resetQuery,searchRes,resetRes} = useSearchStore()
  const {handleSearch} = useSearchData()
  console.log(searchRes)
  
  return (
    <View className="h-full justify-center gap-5 p-5">
      <View className="gap-5">
        <Text className="text-center">
          ini modal search
        </Text>
        <View className="flex-row justify-center items-center rounded-lg p-4">
          <TextInput placeholder="mulai mencari..." value={searchQuery} 
          onChangeText={setSearchQuery} keyboardType="default"></TextInput>

          <Button title="X" onPress={() => {resetQuery()}}/>
        </View>
        <View className="flex-row gap-5 justify-center items-center w-full ">
          <Button title="Batal" onPress={() => router.dismiss()} />
          <Button title="cari" onPress={() => searchRes.length > 0 ? resetRes() : handleSearch()} />
        </View>
      </View>
      <View className="items-center">
        <Text>result : {searchRes.length}</Text>
        <ScrollView >
          {searchRes.length > 0 ? (
            searchRes.map((item) => (
              <View key={item.id}>
                <Text>{item.name}</Text>
              </View>
            ))
          ) : (
            <Text>Tidak ada hasil</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}