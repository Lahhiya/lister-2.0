import AddButton from "@/components/buttons/AddButton";
import HomeActiveContainer from "@/components/home/Home.LatestContainer";
import HomeInfo from "@/components/home/Home.Info";
import { Box } from "gs/ui/box";
import { Text } from "gs/ui/text";

export default function Index() {
  return (
    <Box className="relative flex-1 w-full h-full flex-col bg-white gap-2">
      <HomeInfo />
      <HomeActiveContainer />
      <Box>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate voluptates facere illo ullam incidunt, minus ex veritatis mollitia deleniti corrupti nam dolorum ipsum numquam maiores. Quo vero quibusdam maiores?
        </Text>
      </Box>
      <Box className="absolute bottom-5 right-5 flex-col gap-5 z-10">
        <AddButton />
      </Box>
    </Box>
  );
}