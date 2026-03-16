interface DummyDataType {
  id: number;
  uuid: string;
  total: number;
  progress: number;
  timestamp: number[];
  createAt: number;
  finishAt: number;
  message: string;
  status: number;
}

interface OrderDataType {
  id: number;
  uuid: string;
  total: number;
  progress: number;
  timestamp: number[];
  createAt: number;
  finishAt: number;
  message: string;
  status: number;
}

export {DummyDataType, OrderDataType}