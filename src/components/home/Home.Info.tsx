import useDisplayStat from "@/hooks/display/useDisplaystat";
import { Text } from "gs/ui/text";
import { Card } from "gs/ui/card";

export default function HomeInfo() {
  const stat = useDisplayStat();
  return (
    <Card size="lg" variant="ghost" className="h-[100px]">
      <Text className="text-success-300 text-xl font-bold">
        {stat.finishAmount} Orders Completed
      </Text>
      <Text className="text-typography-100 text-lg">
        with total {stat.totalAmount} (Stk)
      </Text>
    </Card>
  );
}
