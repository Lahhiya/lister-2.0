import { router } from "expo-router";
import { Grid, GridItem } from "gs/ui/grid";
import { Pressable } from "gs/ui/pressable";
import { Text } from "react-native";
import IconStatus from "@/utils/utils.IconStatus";
import { FormatHistoryType } from "@/helper/formatBydata";

export default function Historyitem({
  item,
  index,
}: {
  item: FormatHistoryType;
  index: number;
}) {
  const stats = IconStatus({ status: item.status });
  const bg = index % 2 === 0 ? "bg-slate-50" : "bg-gray-100";
  return (
    <Pressable
      onPress={() => router.navigate(`/detail/${item.id}`)}
      className="w-full"
    >
      <Grid
        className={bg}
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
          {stats}
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-2",
          }}
        >
          <Text className="font-bold text-black text-md">{item.name}</Text>
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          <Text className="font-bold text-black">{item.total}</Text>
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          <Text className="font-bold text-black">{item.added}</Text>
        </GridItem>

        <GridItem
          className="p-3 text-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          <Text className="font-bold text-black">{item.id}</Text>
        </GridItem>
      </Grid>
    </Pressable>
  );
}
