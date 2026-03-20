import useDisplayStat from "@/hooks/display/useDisplaystat";
import { Text } from "gs/ui/text";
import { Box } from "gs/ui/box";
export default function HomeInfoStats() {
  const stat = useDisplayStat();
  return (
    <Box className="h-[100px] justify-center px-5 w-full">
      <Text className="text-success-300 text-xl font-bold">
        {stat.finishAmount} Orders Completed
      </Text>
      <Text className="text-typography-100 text-lg">
        with total {stat.totalAmount} (Stk)
      </Text>
    </Box>
  );
}
