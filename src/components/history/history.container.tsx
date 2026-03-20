import HistoryItem from "@/components/history/History.Item";
import useDisplayData from "@/hooks/display/useDisplayHistory";
import { FlatList, View } from "react-native";
import { Text } from "gs/ui/text";
import { Grid ,GridItem } from "gs/ui/grid";
import { Box } from "gs/ui/box";
import { Divider } from "gs/ui/divider";

export default function HistoryContainer() {
  const data = useDisplayData();
  return (
    <View className="h-full w-full flex-col">
      <Grid
        className="bg-white h-16"
        _extra={{
          className: "grid-cols-6",
        }}
      >
        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          <Text className="font-bold text-black" size="sm">Status</Text>
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-2",
          }}
        >
          <Text className="font-bold text-black" size="sm">Name</Text>
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          <Text className="font-bold text-black" size="sm">Total</Text>
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          <Text className="font-bold text-black" size="sm">Date</Text>
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          <Text className="font-bold text-black" size="sm">Index</Text>
        </GridItem>
      </Grid>


      <FlatList
        className="w-full"
        data={data}
        renderItem={({ item ,index}) => <HistoryItem item={item!} index={index} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Box className="flex-1 items-center justify-center">
            <Text className="text-black">Sorry there's no data right now</Text>
          </Box>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}