type PercentageType = { part: number; whole: number };

const percentage = ({ part, whole }: PercentageType) => {
  return Math.round((part / whole) * 100);
};

export { percentage };