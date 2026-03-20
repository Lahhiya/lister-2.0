import HomeLatestItem from "@/components/home/Home.LatestItem";
import useDisplayInfo from "@/hooks/display/useDisplayActive";
import { DisplayLatestType } from "@/schemas/displayLatest";
import { router } from "expo-router";
import { Box } from "gs/ui/box";
import { Button, ButtonText } from "gs/ui/button";
import { Text } from "gs/ui/text";
import { ChevronRight } from "lucide-react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

export default function HomeLatestContainer() {
  const info = useDisplayInfo();

  return (
    <Box className="w-full flex-1 px-4 mt-8 pb-10">
      <Box className="flex-row justify-between items-baseline  mb-4 px-1">
        <Box>
          <Text className="font-bold text-2xl text-black leading-tight">
            Latest Transactions
          </Text>
        </Box>
        <Button onPress={()=> {router.navigate("/history") as any}} variant="link" size="lg" className="h-8 p-0 flex-row items-center gap-0.5">
          <ButtonText className="text-blue-600 font-semibold">See all</ButtonText>
          <ChevronRight size={16} color="#2563eb" />
        </Button>
      </Box>
      <FlatList
        contentContainerClassName="gap-3"
        className="flex-1"
        data={info.data}
        renderItem={({ item }) => <HomeLatestItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
