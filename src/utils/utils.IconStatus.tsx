import { Check, ClipboardList, Hourglass } from "lucide-react-native";
import React from "react";

type StatusIconProps = {
  status: number;
  size?: number;
};

const StatusIcon = ({ status, size = 24 }: StatusIconProps) => {
  switch (status) {
    case 0:
      return <ClipboardList size={size} color="#F59E0B" />;
    case 1:
      return <Hourglass size={size} color="#3B82F6" />;
    case 2:
      return <Check size={size} color="#10B981" />;
    default:
      return null;
  }
};

export default StatusIcon;
