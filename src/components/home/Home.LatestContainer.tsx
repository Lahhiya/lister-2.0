import HomeLatestItem from "@/components/home/Home.LatestItem";
import useDisplayInfo from "@/hooks/display/useDisplayActive";
import { DisplayLatestType } from "@/schemas/displayLatest";
import { Box } from "gs/ui/box";
import { Button, ButtonText } from "gs/ui/button";
import { Text } from "gs/ui/text";
import { ChevronRight } from "lucide-react-native";
import { ScrollView } from "react-native";

export default function HomeLatestContainer() {
  const info = useDisplayInfo();

  return (
    <Box className="w-full flex-1 px-4 mt-8">
      <Box className="flex-row justify-between items-end mb-4 px-1">
        <Box>
          <Text className="font-bold text-2xl text-typography-950 leading-tight">
            Latest Tasks
          </Text>
          <Text className="text-typography-500 text-sm font-medium">
            Recent updates on your activity
          </Text>
        </Box>
        <Button variant="link" size="sm" className="h-8 p-0 flex-row items-center gap-0.5">
          <ButtonText className="text-blue-600 font-semibold text-sm">See all</ButtonText>
          <ChevronRight size={16} color="#2563eb" />
        </Button>
      </Box>
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 4 }}
      >
        <Box className="gap-4">
          {info.data.map((item: DisplayLatestType) => (
            <HomeLatestItem key={item.id} data={item} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
