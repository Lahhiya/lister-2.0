import SearchButton from "@/components/buttons/SearchButton";
import HistoryContainer from "@/components/history/History.Container";
import { Box } from "gs/ui/box";

export default function listTab() {
  return (
    <Box className="relative h-full w-full bg-white">
      <Box className="flex-1 border-t-2 border-b-2 border-slate-300 bg-white shadow-sm">
        <HistoryContainer />
      </Box>
      <SearchButton />
    </Box>
  );
}
