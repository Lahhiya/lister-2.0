import { DetailOrderType } from "@/schemas/detailOrderType";
import { DummyDataType, OrderDataType } from "@/schemas/orderDataType";

const formatDetail = (
  input: OrderDataType | DummyDataType,
): DetailOrderType => {
  const data = input;

  let stats;
  switch (data.status) {
    case 0:
      stats = "Pending";
      break;
    case 1:
      stats = "in Process";
      break;
    case 2:
      stats = "Completed";
      break;
    default:
      stats = "Unknown";
      break;
  }

  const finish =
    data.status === 2
      ? "pesanan selesai dalam waktu..."
      : "pesanan belum selesai.";

  const res = {
    id: data.id,
    uuid: input.uuid,
    name: input.name,
    status: stats,
    createdAt: `pesanan di buat ....`,
    finishAt: finish,
    history: "anggap aj ada data dulu",
    total: `${data.total} Stk`,
    message: data.message,
  };

  return res;
};

export default formatDetail;
