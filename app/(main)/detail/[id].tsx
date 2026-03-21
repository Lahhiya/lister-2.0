import { useLocalSearchParams } from "expo-router";
import { Box } from "gs/ui/box";
import { Text } from "gs/ui/text";
import { ScrollView } from "react-native";
import { Divider } from "gs/ui/divider";
import { VStack } from "gs/ui/vstack";
import useGetOrderData from "@/hooks/useGetOrderData";
import { findById } from "@/helper/findByData";
import { formatHistoryLog } from "@/helper/formatBydata";
import { useMemo } from "react";
import DetailAccordion from "@/components/detail/Detail.Accordion";
import DetailInfo from "@/components/detail/Detail.Info";
import DetailHeader from "@/components/detail/Detail.Header";
export default function DetailById() {
    const {id} = useLocalSearchParams();
    const targetid = typeof id === "string" ? parseInt(id) : id;
    const getData = useGetOrderData();
    const data = findById(getData, Number(targetid));

    const historyLog = useMemo(()=>{
      return data && formatHistoryLog(data);
    },[data])

    return (
      <Box className="w-full h-full">
        <ScrollView
          className="bg-slate-50 w-full flex-1 border-2 border-slate-300 shadow-sm rounded-xl"
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <VStack space="xl" className="w-full flex-1 h-auto p-5">
            <DetailHeader uuid={data?.uuid || ""} />
            <Box className="w-full border-2 border-slate-200 rounded-2xl shadow-sm">
              {data && <DetailInfo data={data} />}
            </Box>
            {historyLog && historyLog.length > 0 && (
              <DetailAccordion data={historyLog} msg={data?.message || ""} />
            )}
          </VStack>
        </ScrollView>
      </Box>
    );
}