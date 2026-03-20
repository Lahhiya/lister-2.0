import { useEffect } from "react";

const Color5 = (input: number) => {
  if (input <= 25) return "bg-red-500";
  if (input <= 50) return "bg-orange-500";
  if (input <= 75) return "bg-yellow-400";
  if (input <= 99) return "bg-lime-500";
  if (input == 100) return "bg-emerald-500";
};

const Color3 = (input: number) => {
  if (input <= 33) return "bg-red-500";
  if (input <= 66) return "bg-yellow-400";
  if (input <= 100) return "bg-emerald-500";
};

const Stage5Color = (input: number) => {
  return Color5(input);
};

const Stage3Color = (input: number) => {
  return Color3(input);
};

export { Stage5Color, Stage3Color };