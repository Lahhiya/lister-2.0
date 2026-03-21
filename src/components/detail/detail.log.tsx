import { Box } from "gs/ui/box";
import { Text } from "gs/ui/text";
import { formatHistoryLogType } from "@/helper/formatBydata";
import StatusIcon from "@/utils/utils.IconStatus";
export default function DetailLog({data,index} : {data:formatHistoryLogType,index:number}) {
    const typeString = ()=> {
        switch (data.type) {
            case 0:
                return "Created";
            case 1:
                return "Updated";
            case 2:
                return "Finished";
            default:
                return "Unknown";
        }
    }
    const bg = index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"

    return (
      <Box
        className={`flex-row h-16 w-full justify-evenly items-center  px-2 ${bg}`}
      >
        <Box className="flex-row items-center">
          <StatusIcon status={data.type} />
        </Box>
        <Box className="flex-row  gap-5 items-center">
          <Text>{typeString()}</Text>
          <Text>{data.log}</Text>
        </Box>
      </Box>
    );
}