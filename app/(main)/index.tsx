import AddButton from "@/components/buttons/AddButton";
import HomeActiveContainer from "@/components/home/Home.LatestContainer";
import HomeInfoStats from "@/components/home/Home.InfoStats";
import { Box } from "gs/ui/box";

export default function Index() {
  return (
    <Box className="relative items-center flex-1 w-full h-full bg-slate-50">
      <HomeInfoStats />
      <Box className="flex-1 w-full -my-2 border-2 border-slate-300 bg-white shadow-sm rounded-xl">
        <HomeActiveContainer />
      </Box>
      <Box className="absolute bottom-5 right-5 flex-col gap-5 z-10">
        <AddButton />
      </Box>
    </Box>
  );
}