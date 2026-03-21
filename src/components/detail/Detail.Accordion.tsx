import { Box } from "gs/ui/box";
import { Text } from "gs/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  AccordionContentText,
} from "gs/ui/accordion";
import { formatHistoryLogType } from "@/helper/formatBydata";
import { BookOpen, Mail } from "lucide-react-native";
import { Divider } from "gs/ui/divider";
import DetailLog from "@/components/detail/Detail.Log";

export default function DetailAccordion({ data ,msg}: { data: formatHistoryLogType[] ,msg:string}) {

    return (
      <Accordion
        type="single"
        collapsable={true}
        className="w-full"
      >
        <AccordionItem
          value="acc-1"
          className="rounded-xl w-full border-slate-300 border-2 overflow-hidden bg-slate-50"
        >
          <AccordionHeader className="bg-slate-50">
            <AccordionTrigger className="focus:web:rounded-lg py-4 px-4">
              <Box className="flex-row items-center gap-3">
                <Mail size={24} color="#64748b" />
                <Text className="font-bold text-lg text-slate-800">Message</Text>
              </Box>
            </AccordionTrigger>
          </AccordionHeader>
          <Divider className="w-[100%]" />
          <AccordionContent className="bg-white w-full px-4 py-3">
            <AccordionContentText>
              <Text className="text-base text-slate-700 leading-6">{msg}</Text>
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="acc-2"
          className="mt-4 rounded-xl w-full border-slate-300 border-2 overflow-hidden "
        >
          <AccordionHeader className="bg-slate-50">
            <AccordionTrigger className="focus:web:rounded-lg py-4 px-4">
              <Box className="flex-row items-center gap-3">
                <BookOpen size={24} color="#64748b" />
                <Text className="font-bold text-lg text-slate-800">History Log</Text>
              </Box>
            </AccordionTrigger>
          </AccordionHeader>
          <Divider className="w-[100%]" />
          <AccordionContent className="w-full bg-white">
            {data.map((item, i) => (
              <DetailLog key={i} data={item} index={i} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
}


