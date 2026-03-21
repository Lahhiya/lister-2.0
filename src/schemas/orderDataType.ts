// interface DummyDataType {
//   id: number;
//   uuid: string;
//   name: string;
//   total: number;
//   progress: number;
//   timeStamp: number[];
//   createdAt: number;
//   finishAt: number;
//   message: string;
//   status: number;
// }

interface OrderDataType {
  id: number;
  uuid: string;
  name: string;
  total: number;
  progress: number;
  timeStamp: number[];
  createdAt: number;
  finishAt: number;
  message: string;
  status: number;
}

export type {OrderDataType }