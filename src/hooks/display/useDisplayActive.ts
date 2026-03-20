import { DisplayLatestType} from "@/schemas/displayLatest";
import useFilteredbyStatus from "../useFilteredbyStatus";

type res = () => {
  stat: number;
  data: DisplayLatestType[];
};

const useDisplayLatest: res = () => {
  const data = useFilteredbyStatus([0, 1]);
  const newobj = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      progress: item.progress,
      total: item.total,
      status: item.status,
    };
  });

  const res = {
    stat: newobj.length,
    data: newobj,
  };
  return res;
};

export default useDisplayLatest;
