import IconStatus from "@/utils/utils.IconStatus";
import { DisplayLatestType } from "@/schemas/displayLatest";
import { router } from "expo-router";
import { Grid, GridItem } from "gs/ui/grid";
import { Pressable } from "gs/ui/pressable";
import { Progress, ProgressFilledTrack } from "gs/ui/progress";
import { Text } from "gs/ui/text";
import { percentage } from "@/helper/number";
import { Stage5Color } from "@/utils/utils.ProgColl";
import { ShoppingBasket, IdCard, User } from "lucide-react-native";
import { Box } from "gs/ui/box";
export default function HomeLatestItem({ data }: { data: DisplayLatestType }) {
  const stats = IconStatus({ status: data.status });
  const pers = percentage({ part: data.progress, whole: data.total });
  const proCol = Stage5Color(pers);

  return (
    <Pressable
      onPress={() => router.push(`/detail/${data.id}`)}
      className="h-16 justify-center items-center border-2 border-slate-300 bg-white shadow-sm rounded-xl"
    >
      <Grid
        _extra={{
          className: "grid-cols-4",
        }}
      >
        <GridItem
          className="p-3 h-full w-fulltext-center items-center justify-center"
          _extra={{
            className: "col-span-1",
          }}
        >
          {stats}
        </GridItem>
        <GridItem
          className="p-3 text-center gap-3  flex-row items-center justify-start"
          _extra={{
            className: "col-span-2",
          }}
        >
          <Box className="flex-row items-center gap-2">
            <User size={20}/>
            <Text className="font-bold text-black text-md">{`${data.name}`}</Text>
          </Box>
          <Box className="flex-row items-center gap-2">
            <IdCard size={20}/>
            <Text className="font-bold text-black text-md">{`${data.id}`}</Text>
          </Box>
        </GridItem>
        <GridItem
          className="p-3 text-center items-center justify-center flex-row gap-2"
          _extra={{
            className: "col-span-1",
          }}
        >
          <ShoppingBasket size={20}/>
          <Text className="font-bold text-black text-md">{`${data.progress}/${data.total}`}</Text>
        </GridItem>
      </Grid>
      <Progress value={pers} className="w-full relative">
        <ProgressFilledTrack className={`${proCol}`} />
      </Progress>
    </Pressable>
  );
}
