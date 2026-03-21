import { OrderDataType } from "@/schemas/orderDataType";
import { useMemo } from "react";

interface LatestFormatType {
  id: number;
  name: string;
  progress: number;
  total: number;
  status: number;
  createdAt: string;
}
/**
 * format untuk latest transaction di home
 */
const formatLatest = (data: OrderDataType[]): LatestFormatType[] => {
  const newobj = data.map((item) => ({
    id: item.id,
    name: item.name,
    progress: item.progress,
    total: item.total,
    status: item.status,
    createdAt: item.createdAt.toString(),
  }));
  return newobj;
};

interface FormatHistoryType {
  id: number;
  name: string;
  added: string;
  status: number;
  total: number;
}

/**
 * format untuk history tab
 */

const formatHistory = (data: OrderDataType[]): FormatHistoryType[] => {
  const newobj = data.map((item) => ({
    id: item.id,
    name: item.name,
    added: "1 sec ago",
    status: item.status,
    total: item.total,
  }));
  return newobj;
};

interface formatHistoryLogType {
  type: 0 | 1 | 2;
  log: number;
}

const formatHistoryLog = (data: OrderDataType) => {
  const isfinish = data.status === 2;
  const log = data.timeStamp.map((item, i, arr): formatHistoryLogType => {
  const l = arr.length;
    if (i === 0) {
      return {
        type: 0,
        log: item,
      };  
    }
    if (i === l - 1) {
      return {
        type: isfinish ? 2 : 1,
        log: item,
      };
    } else {
      return {
        type: 1,
        log: item,
      };
    }
  });
  return log;
};

export { 
  formatHistory, 
  FormatHistoryType, 
  formatLatest, 
  LatestFormatType,
  formatHistoryLog ,
  formatHistoryLogType
};
