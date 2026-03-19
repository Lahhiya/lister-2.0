import { DisplayLatestType } from "@/schemas/displayLatest";
import { Box } from "gs/ui/box";
import { Text } from "gs/ui/text";
import { Hourglass, Check, ClipboardList } from "lucide-react-native";
import { Button, ButtonText } from "gs/ui/button";
import { Link } from "expo-router";

export default function HomeLatestItem({ data }: { data: DisplayLatestType }) {
  let stats;
  let bgColor;
  let iconColor;

  switch (data.status) {
    case 0:
      stats = <ClipboardList size={22} color="#475569" />;
      bgColor = "bg-slate-100";
      iconColor = "text-slate-600";
      break;
    case 1:
      stats = <Hourglass size={22} color="#ea580c" />;
      bgColor = "bg-orange-100";
      iconColor = "text-orange-600";
      break;
    case 2:
      stats = <Check size={22} color="#16a34a" />;
      bgColor = "bg-green-100";
      iconColor = "text-green-600";
      break;
    default:
      stats = <ClipboardList size={22} color="#475569" />;
      bgColor = "bg-slate-100";
      iconColor = "text-slate-600";
  }

  return (
    <Box className="flex-row items-center p-3 gap-3 rounded-xl border border-slate-200 bg-white shadow-sm">
      <Box className={`w-12 h-12 rounded-full items-center justify-center ${bgColor}`}>
        {stats}
      </Box>
      <Box className="flex-1">
        <Text className="text-slate-900 font-semibold text-base leading-tight">
          {data.name}
        </Text>
        <Text className="text-slate-500 text-xs mt-0.5 font-medium">
          {data.progress} • a few moment ago
        </Text>
      </Box>
      <Link href={`/detail/${data.id}` as any} asChild>
        <Button variant="outline" size="sm" className="rounded-lg h-10 border-slate-200 bg-slate-50">
          <ButtonText className="text-slate-700 font-semibold">Detail</ButtonText>
        </Button>
      </Link>
    </Box>
  );
}
