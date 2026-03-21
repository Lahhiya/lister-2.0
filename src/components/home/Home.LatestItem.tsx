import IconStatus from "@/utils/utils.IconStatus";
import { router } from "expo-router";
import { Grid, GridItem } from "gs/ui/grid";
import { Pressable } from "gs/ui/pressable";
import { Progress, ProgressFilledTrack } from "gs/ui/progress";
import { Text } from "gs/ui/text";
import { percentage } from "@/helper/formatNumber";
import { Stage5Color } from "@/utils/utils.ProgColl";
import { IdCard, User } from "lucide-react-native";
import { Box } from "gs/ui/box";
import { LatestFormatType } from "@/helper/formatBydata";

export default function HomeLatestItem({ data }: { data: LatestFormatType }) {
  const stats = IconStatus({ status: data.status, size: 24 });
  const pers = percentage({ part: data.progress, whole: data.total });
  const proCol = Stage5Color(pers);

  return (
    <Pressable
      onPress={() => router.push(`/detail/${data.id}`)}
      className="h-20 justify-center items-center border-2 border-slate-300 bg-slate-50 shadow-sm rounded-xl"
    >
      <Grid
        _extra={{
          className: "grid-cols-5 h-full w-full",
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
          className="p-3 h-full w-ful"
          _extra={{
            className: "col-span-4",
          }}
        >
          <Box className="flex-row justify-between">
            <Box className="flex-col flex-1">
              <Box className="flex-row items-center gap-2">
                <User size={18} />
                <Text className="font-bold text-lg">{data.name}</Text>
              </Box>
              <Box className="flex-row items-center gap-2">
                <IdCard size={18} />
                <Text className="font-bold text-lg">{data.id}</Text>
              </Box>
            </Box>
            <Box className="flex-col h-full justify-center  items-end flex-1">
              <Box className="flex-row gap-2">
                <Text className="font-bold text-lg">{data.progress}</Text>
                <Text className="font-bold text-lg">/{data.total}</Text>
              </Box>
              <Progress value={pers} className="w-full">
                <ProgressFilledTrack className={proCol} />
              </Progress>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Pressable>
  );
}
