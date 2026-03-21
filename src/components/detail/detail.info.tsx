import { Box } from "gs/ui/box";
import { Grid, GridItem } from "gs/ui/grid";
import { Text } from "gs/ui/text";
import {
  IdCard,
  User,
  Clock,
  Flag,
  Activity,
  ClipboardClock,
  ShoppingBasket,
} from "lucide-react-native";
import { OrderDataType } from "@/schemas/orderDataType";
import { isFinish, stringStatus } from "@/helper/formatString";

export default function DetailInfo({ data }: { data: OrderDataType }) {
    let gc = 2;
    let icoSize = 32;
    const gridCol = gc === 1 ? "grid-cols-1" : gc === 2 ? "grid-cols-2" : "grid-cols-3";
    const status = stringStatus(data.status)
    const isFin = isFinish(data.status,data.finishAt)
  return (
    <Grid _extra={{ className: `${gridCol}` }} className="bg-white rounded-xl overflow-hidden">
      <GridItem _extra={{ className: "col-span-1" }}>
        <Box className="flex-row gap-3 items-center p-2">
          <User size={icoSize} color="#60A5FA" />
          <Box className="flex-col">
            <Text className="font-bold text-lg">Name</Text>
            <Text className="font-bold text-lg capitalize">{data.name}</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem _extra={{ className: "col-span-1" }}>
        <Box className="flex-row gap-3 items-center p-2">
          <IdCard size={icoSize} color="#60A5FA" />
          <Box className="flex-col">
            <Text className="font-bold text-lg">Index</Text>
            <Text className="font-bold text-lg capitalize">{data.id}</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem _extra={{ className: "col-span-1" }}>
        <Box className="flex-row gap-3 items-center p-2">
          <Clock size={icoSize} color="#34D399" />
          <Box className="flex-col">
            <Text className="font-bold text-lg">Create at</Text>
            <Text className="font-bold text-lg capitalize">
              {data.createdAt}
            </Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem _extra={{ className: "col-span-1" }}>
        <Box className="flex-row gap-3 items-center p-2">
          <Flag size={icoSize} color="#34D399" />
          <Box className="flex-col">
            <Text className="font-bold text-lg">Finish at</Text>
            <Text className="font-bold text-lg capitalize">{isFin}</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem _extra={{ className: "col-span-1" }}>
        <Box className="flex-row gap-3 items-center p-2">
          <ClipboardClock size={icoSize} color="#FBBF24" />
          <Box className="flex-col">
            <Text className="font-bold text-lg">Status</Text>
            <Text className="font-bold text-lg capitalize">{status}</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem _extra={{ className: "col-span-1" }}>
        <Box className="flex-row gap-3 items-center p-2">
          <Activity size={icoSize} color="#FBBF24" />
          <Box className="flex-col">
            <Text className="font-bold text-lg">Progress</Text>
            <Text className="font-bold text-lg capitalize">
              {data.progress}
            </Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem _extra={{ className: "col-span-1" }}>
        <Box className="flex-row gap-3 items-center p-2">
          <ShoppingBasket size={icoSize} color="#A78BFA" />
          <Box className="flex-col">
            <Text className="font-bold text-lg">Total</Text>
            <Text className="font-bold text-lg capitalize">{data.total}</Text>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
