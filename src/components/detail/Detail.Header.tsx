import { Box } from "gs/ui/box";
import { Button, ButtonGroup, ButtonIcon } from "gs/ui/button";
import { Reply, PackagePlus, Info } from "lucide-react-native";
import { Text } from "gs/ui/text";
import { router } from "expo-router";
export default function DetailHeader({uuid}: {uuid:string}) {
    const cor = "bg-white border-2 border-slate-300";
    const sez = 24;
    return (
      <Box className="w-full flex-row bg-slate-50 justify-between items-center">
        <Box className="m-3 mx-2">
          <Text className="text-slate-500">Order ID</Text>
          <Text className="font-bold text-3xl text-slate-800">{uuid}</Text>
        </Box>
        <ButtonGroup className="flex-row m-3 mx-2">
          <Button onPress={() => router.back()} size="lg" variant="outline" className={`rounded-full p-3.5 ${cor} `}>
            <Reply size={sez}/>
          </Button>
          <Button onPress={() => router.push("/modalForm")} size="lg" variant="outline" className={`rounded-full p-3.5 ${cor} `}>
            <PackagePlus size={sez}/>
          </Button>
          <Button onPress={()=> router.push('/setting')} size="lg" variant="outline" className={`rounded-full p-3.5 ${cor} `}>
            <Info size={sez}/>
          </Button>
        </ButtonGroup>
      </Box>
    );
}