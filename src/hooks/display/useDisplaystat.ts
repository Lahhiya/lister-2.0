import useFilteredbyStatus from "../useFilteredbyStatus";

type resType = () => {
  finishAmount: number;
  totalAmount: number;
};

const useDisplayStat: resType = () => {
  const data = useFilteredbyStatus([2]);
  const length = data.length;
  const amount = data.reduce((acc, curr) => acc + curr.total, 0);
  const res = {
    finishAmount: length,
    totalAmount: amount,
  };
  return res;
};

export default useDisplayStat;
